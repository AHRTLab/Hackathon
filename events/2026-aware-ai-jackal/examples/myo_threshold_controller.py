#!/usr/bin/env python3
"""Baseline EMG controller: Myo muscle activity → Jackal (v, w). Your team's job is to beat it.

    python myo_lsl_publisher.py               # (or fake_myo_lsl.py) in another terminal
    python myo_threshold_controller.py        # guided calibration, then drive
    python myo_threshold_controller.py --load myo_calibration.json      # reuse a calibration
    python myo_threshold_controller.py --ws   # send over WebSocket instead of LSL

How it works (all of it is in the small functions below, so you can change any step):
  1. Activation: RMS of each EMG channel over the last 200 ms, smoothed.
  2. Calibration (guided, ~10 s): rest → flex your wrist (wave in) → extend it (wave out). From that it
     learns each channel's rest level and which channels belong to the flexor group (A) and the
     extensor group (B), so it works on either arm and however the band is rotated.
  3. Mapping:  a, b = each group's activation scaled to 0..1 (below 15 % counts as 0)
               v = V · (a + b) / 2      make a fist (both groups) to drive forward
               w = W · (a − b)          flex to turn left, extend to turn right
  4. Output: a JackalCmd LSL stream [v, w] at 20 Hz (the bridge picks it up), or --ws to the bridge.
Ideas to beat it: better features than RMS, a trained classifier (lsl-web-viewer records labeled
training data), proportional speed from grip strength, the IMU for steering, assistance from the lidar.
"""
from __future__ import annotations

import argparse
import json
import sys
import time
from collections import deque
from pathlib import Path

import numpy as np
import pylsl

WINDOW_S = 0.2       # RMS window
SMOOTH = 0.3         # EMA factor for the activations (0 = frozen, 1 = no smoothing)
DEADBAND = 0.15      # activation below this fraction of the calibrated max counts as zero
SEND_HZ = 20


# ------------------------------------------------------------------------------------------- the math
def group_channels(rest: np.ndarray, flex: np.ndarray, extend: np.ndarray) -> dict:
    """Calibration from three per-channel RMS levels (rest, flex, extend).

    Group A = channels that rose more when flexing, B = the rest. Each group's max is its mean rise
    above rest in its own gesture (floored so a weak gesture can't cause division by ~0).
    """
    rise_f, rise_e = flex - rest, extend - rest
    a = [int(c) for c in np.flatnonzero(rise_f > rise_e)]
    b = [int(c) for c in np.flatnonzero(rise_f <= rise_e)]
    if not a or not b:  # degenerate calibration (e.g. a gesture was skipped): fall back to halves
        half = len(rest) // 2
        a, b = list(range(half)), list(range(half, len(rest)))
    a_max = max(float(np.mean(rise_f[a])), 1e-3 + 0.05 * float(np.mean(rest)))
    b_max = max(float(np.mean(rise_e[b])), 1e-3 + 0.05 * float(np.mean(rest)))
    return {"rest": [float(x) for x in rest], "a": a, "b": b, "a_max": a_max, "b_max": b_max}


def normalize(rise: float, top: float, deadband: float = DEADBAND) -> float:
    """Rise above rest → 0..1, with a deadband so resting noise doesn't move the robot."""
    x = rise / top if top > 0 else 0.0
    return float(np.clip((x - deadband) / (1 - deadband), 0.0, 1.0))


def activations(rms: np.ndarray, cal: dict) -> tuple[float, float]:
    """Per-group activation (a, b) in 0..1 from the current per-channel RMS."""
    rise = rms - np.asarray(cal["rest"])
    return (normalize(float(np.mean(rise[cal["a"]])), cal["a_max"]),
            normalize(float(np.mean(rise[cal["b"]])), cal["b_max"]))


def to_twist(a: float, b: float, vmax: float, wmax: float) -> tuple[float, float]:
    return vmax * (a + b) / 2, wmax * (a - b)


class RmsWindow:
    """Per-channel RMS over the last WINDOW_S seconds of samples."""

    def __init__(self, channels: int, srate: float):
        self.buf = deque(maxlen=max(4, int(WINDOW_S * (srate or 200))))
        self.channels = channels

    def add(self, samples: list[list[float]]) -> None:
        self.buf.extend(samples)

    def rms(self) -> np.ndarray:
        if not self.buf:
            return np.zeros(self.channels)
        x = np.asarray(self.buf, dtype=float)
        return np.sqrt(np.mean(np.square(x - x.mean(axis=0)), axis=0))  # remove DC offset first


# ------------------------------------------------------------------------------------------- I/O
def open_emg(name: str) -> tuple[pylsl.StreamInlet, int, float]:
    print(f"Looking for LSL stream {name!r} (start myo_lsl_publisher.py or fake_myo_lsl.py) …")
    while True:
        found = pylsl.resolve_byprop("name", name, timeout=3.0)
        if found:
            info = found[0]
            print(f"✓ {name}: {info.channel_count()} ch @ {info.nominal_srate():g} Hz from {info.hostname()}")
            return pylsl.StreamInlet(info, max_buflen=2), info.channel_count(), info.nominal_srate()
        print("  not found yet …")


def calibrate(inlet: pylsl.StreamInlet, window: RmsWindow) -> dict:
    """Guided: rest, flex, extend (3 s each, after a 2 s countdown). Returns group_channels()."""
    levels = {}
    for key, prompt in (("rest", "REST: relax your hand completely"),
                        ("flex", "FLEX: bend your wrist inward (wave in) and hold"),
                        ("extend", "EXTEND: bend your wrist outward (wave out) and hold")):
        print(f"\n{prompt}")
        for k in (2, 1):
            print(f"  starting in {k} …")
            time.sleep(1)
        print("  recording 3 s …")
        inlet.pull_chunk(timeout=0.0)        # drop anything from before the gesture
        rms_samples, t_end = [], time.monotonic() + 3.0
        while time.monotonic() < t_end:
            chunk, _ = inlet.pull_chunk(timeout=0.05)
            if chunk:
                window.add(chunk)
                rms_samples.append(window.rms())
        if not rms_samples:
            sys.exit("no EMG arrived during calibration: is the stream still running?")
        levels[key] = np.median(np.asarray(rms_samples[len(rms_samples) // 3:]), axis=0)  # skip the onset
    cal = group_channels(levels["rest"], levels["flex"], levels["extend"])
    print(f"\n✓ Calibrated: flexor group A = channels {[c + 1 for c in cal['a']]}, "
          f"extensor group B = channels {[c + 1 for c in cal['b']]}")
    return cal


class Sender:
    """Where commands go: an LSL JackalCmd stream (default) or the bridge's WebSocket."""

    def __init__(self, ws_url: str | None, source: str):
        self.source, self.ws, self.outlet = source, None, None
        if ws_url:
            from websockets.sync.client import connect
            self.ws = connect(ws_url)
        else:
            self.outlet = pylsl.StreamOutlet(pylsl.StreamInfo("JackalCmd", "Control", 2, 0, pylsl.cf_float32, source))

    def send(self, v: float, w: float) -> None:
        if self.ws is not None:
            self.ws.send(json.dumps({"type": "cmd", "v": round(v, 3), "w": round(w, 3), "source": self.source}))
        else:
            self.outlet.push_sample([v, w])


def bar(x: float, width: int = 10) -> str:
    n = int(round(x * width))
    return "█" * n + "·" * (width - n)


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--stream", default="Myo_EMG", help="EMG stream name (default Myo_EMG)")
    ap.add_argument("--load", help="use this calibration file instead of calibrating")
    ap.add_argument("--save", default="myo_calibration.json", help="where to save a new calibration")
    ap.add_argument("--vmax", type=float, default=0.8, help="top forward speed, m/s (default 0.8)")
    ap.add_argument("--wmax", type=float, default=1.5, help="top turn rate, rad/s (default 1.5)")
    ap.add_argument("--ws", nargs="?", const="ws://localhost:8765/cmd", help="send to the bridge over WebSocket")
    ap.add_argument("--source", default="myo-threshold")
    ap.add_argument("--seconds", type=float, default=0, help="stop after N seconds (0 = until Ctrl+C)")
    args = ap.parse_args()

    inlet, channels, srate = open_emg(args.stream)
    window = RmsWindow(channels, srate)
    if args.load:
        cal = json.loads(Path(args.load).read_text())
        print(f"✓ Loaded {args.load}: group A = {[c + 1 for c in cal['a']]}, B = {[c + 1 for c in cal['b']]}")
    else:
        cal = calibrate(inlet, window)
        Path(args.save).write_text(json.dumps(cal, indent=2))
        print(f"  saved to {args.save} (next time: --load {args.save})")

    sender = Sender(args.ws, args.source)
    print(f"\nDriving → {'WebSocket ' + args.ws if args.ws else 'LSL JackalCmd'}.  Fist = forward, "
          "flex = left, extend = right.  Ctrl+C to stop.\n")
    a_s = b_s = 0.0
    t_end = time.monotonic() + args.seconds if args.seconds else None
    try:
        while t_end is None or time.monotonic() < t_end:
            t0 = time.monotonic()
            chunk, _ = inlet.pull_chunk(timeout=0.0)
            if chunk:
                window.add(chunk)
            a, b = activations(window.rms(), cal)
            a_s, b_s = a_s + SMOOTH * (a - a_s), b_s + SMOOTH * (b - b_s)
            v, w = to_twist(a_s, b_s, args.vmax, args.wmax)
            sender.send(v, w)
            print(f"\r  A {bar(a_s)}  B {bar(b_s)}   v {v:+.2f} m/s  w {w:+.2f} rad/s ", end="", flush=True)
            time.sleep(max(0.0, 1 / SEND_HZ - (time.monotonic() - t0)))
    except KeyboardInterrupt:
        pass
    finally:
        sender.send(0.0, 0.0)
        print("\nstopped")


if __name__ == "__main__":
    main()
