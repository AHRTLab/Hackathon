#!/usr/bin/env python3
"""Smallest Myo → Jackal example: how the pieces talk to each other. It is NOT a good controller.

    python myo_lsl_publisher.py      # (or fake_myo_lsl.py) in another terminal
    python myo_emg_example.py        # squeeze to creep forward, relax to stop

The whole loop, 20 times a second:
    1. read     the newest EMG samples from the Myo_EMG LSL stream (8 channels, 200 Hz)
    2. feature  one number: the RMS of the last 200 ms, averaged over all 8 channels
    3. decide   above THRESHOLD → creep forward, otherwise stop (no steering at all)
    4. send     {"type": "cmd", "v": …, "w": …} to the bridge over WebSocket

Your team's controller replaces steps 2 and 3: better features, per-channel patterns, a trained
classifier (lsl-web-viewer records labeled training data), steering, the IMU (Myo_IMU), the lidar …
For the full plumbing (reconnects, sim state, lidar, events) start from controller_template.py.
"""
from __future__ import annotations

import argparse
import json
import time
from collections import deque

import numpy as np
import pylsl
from websockets.sync.client import connect

THRESHOLD = 20.0     # RMS level that counts as "squeezing". Watch the RMS bars in lsl-web-viewer
                     # while you relax and make a fist, then pick a value in between.
V_FORWARD = 0.4      # m/s
SEND_HZ = 20         # the bridge stops the robot if commands stop for 250 ms, so keep sending


def emg_level(samples: np.ndarray) -> float:
    """Step 2. samples: (n, 8) EMG. RMS per channel (offset removed), then the mean over channels."""
    if len(samples) == 0:
        return 0.0
    x = samples - samples.mean(axis=0)
    return float(np.mean(np.sqrt(np.mean(np.square(x), axis=0))))


def decide(level: float, threshold: float = THRESHOLD) -> tuple[float, float]:
    """Step 3. Returns (v, w): forward speed in m/s, turn rate in rad/s (+ = left)."""
    return (V_FORWARD, 0.0) if level > threshold else (0.0, 0.0)


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--bridge", default="ws://localhost:8765/cmd", help="bridge command URL (default %(default)s)")
    ap.add_argument("--threshold", type=float, default=THRESHOLD, help="squeeze level (default %(default)s)")
    ap.add_argument("--seconds", type=float, default=0, help="stop after N seconds (0 = until Ctrl+C)")
    args = ap.parse_args()

    # 1. read: find the stream (published by myo_lsl_publisher.py or fake_myo_lsl.py)
    print("Looking for the Myo_EMG LSL stream …")
    found = []
    while not found:
        found = pylsl.resolve_byprop("name", "Myo_EMG", timeout=3.0)
    channels = found[0].channel_count()
    inlet = pylsl.StreamInlet(found[0], max_buflen=2)
    window = deque(maxlen=40)          # 200 ms at 200 Hz
    print("✓ Myo_EMG found")

    # 4. send: one WebSocket to the bridge (jackal-bridge must be running)
    with connect(args.bridge) as bridge:
        print(f"✓ connected to {args.bridge}. Squeeze to drive, relax to stop. Ctrl+C to stop.\n")
        t_end = time.monotonic() + args.seconds if args.seconds else None
        v = w = 0.0
        try:
            while t_end is None or time.monotonic() < t_end:
                t0 = time.monotonic()
                chunk, _ = inlet.pull_chunk(timeout=0.0)   # everything that arrived since last time
                window.extend(chunk)
                level = emg_level(np.asarray(window, dtype=float).reshape(-1, channels))
                v, w = decide(level, args.threshold)
                bridge.send(json.dumps({"type": "cmd", "v": v, "w": w, "source": "myo-example"}))
                print(f"\r  EMG level {level:6.1f}  (threshold {args.threshold:g})  →  v {v:.1f} m/s ",
                      end="", flush=True)
                time.sleep(max(0.0, 1 / SEND_HZ - (time.monotonic() - t0)))
        except KeyboardInterrupt:
            pass
        finally:
            bridge.send(json.dumps({"type": "cmd", "v": 0.0, "w": 0.0, "source": "myo-example"}))
            print("\nstopped")


if __name__ == "__main__":
    main()
