#!/usr/bin/env python3
"""Drive the Jackal with the Myo, two ways, and check your recordings against synthetic ones.

  --mode arm (default)  squeeze to go (harder = faster), roll your forearm to steer, tip it down for
                        reverse, relax to stop. Needs takes: rest, forward (EMG) and neutral, roll_left,
                        roll_right, tip_down (IMU); `calibrate` records them all in ~30 s.
  --mode gestures       five EMG gestures: rest stop, fist forward, hand points left / right to turn,
                        spread fingers to reverse. Needs takes of each, recorded in lsl-web-viewer.
  Both: a lidar assist slows before obstacles and nudges off walls (--no-assist to switch it off).

1. Record.  python myo_gestures.py calibrate data/<team>       guided, Myo_EMG + Myo_IMU, ~30 s
            or record takes in lsl-web-viewer, the label being the gesture or pose name
            ("forward-left" counts as forward: a fist held while rolled left).
2. Check.   python myo_gestures.py report data/<team>
3. Compare. python myo_gestures.py synth --out data/synthetic        (toy forearm model)
            python myo_gestures.py compare data/<team> data/synthetic
            python myo_gestures.py synth --from data/<team> --out data/synth-me --shift 1
4. Drive.   python myo_gestures.py drive data/<team> --dry-run     (print decisions, don't drive)
            python myo_gestures.py drive data/<team> [--mode gestures]   (jackal-bridge running)
No armband: python myo_gestures.py fake [--from data/<team>] publishes Myo_EMG + Myo_IMU from the
            keyboard or from --script "rest:2,forward:3,forward@roll_left:2" (gesture[@pose]:seconds).
"""
from __future__ import annotations

import argparse
import json
import select
import sys
import termios
import time
import tty
from collections import deque
from datetime import datetime
from pathlib import Path

import numpy as np

import armdrive as A
import gestures as G
from myo_emg_example import emg_level

SOURCE = "myo-gestures"
SEND_HZ = 20
SIGNAL_LOST_S = 0.5
BARS = " ▁▂▃▄▅▆▇█"


# ------------------------------------------------------------------------------------- reports
def bars(values: np.ndarray, top: float) -> str:
    return "".join(BARS[min(len(BARS) - 1, round(v / top * (len(BARS) - 1)))] for v in values)


def print_profiles(named: dict[str, dict[str, np.ndarray]]) -> None:
    top = max(v.max() for rms in named.values() for v in rms.values())
    print(f"\n  per-channel RMS, channels 1→8 (█ = {top:.0f})")
    for g in G.GESTURES:
        for name, rms in named.items():
            if g in rms:
                print(f"  {g:8s} {name:10s} {bars(rms[g], top)}  level {rms[g].mean():5.1f}")


def print_confusion(conf: np.ndarray, title: str) -> None:
    total = conf.sum()
    if not total:
        print(f"\n  {title}: nothing to test (record at least two gestures)")
        return
    print(f"\n  {title}: {np.trace(conf) / total:.0%} of {total} windows right")
    print("  true \\ said " + "".join(f"{g:>9s}" for g in G.GESTURES))
    for i, g in enumerate(G.GESTURES):
        n = conf[i].sum()
        if n:
            print(f"  {g:12s} " + "".join(f"{c / n:>9.0%}" if c else f"{'·':>9s}" for c in conf[i]))


def load(folder: str) -> list[G.Take]:
    takes, notes = G.load_takes(folder)
    for n in notes:
        print("  " + n)
    counts = {g: sum(t.label == g for t in takes) for g in G.GESTURES}
    print(f"{folder}: " + ", ".join(f"{g} ×{n}" for g, n in counts.items()))
    missing = [g for g, n in counts.items() if not n]
    if missing:
        print(f"  missing: {', '.join(missing)} ({'; '.join(f'{g}: {G.HOW[g]}' for g in missing)})")
    return takes


def cmd_report(args: argparse.Namespace) -> None:
    takes = load(args.folder)
    if not takes:
        sys.exit("no gesture takes found")
    print_profiles({"": G.measured_rms(takes)})
    print_confusion(G.evaluate(takes), "leave-one-take-out")


def cmd_compare(args: argparse.Namespace) -> None:
    a, b = load(args.a), load(args.b)
    ra, rb = G.measured_rms(a), G.measured_rms(b)
    na, nb = Path(args.a).name[:10], Path(args.b).name[:10]
    print_profiles({na: ra, nb: rb})
    print(f"\n  {'gesture':8s} {'shape match':>12s} {'level ' + na + '/' + nb:>22s}")
    for g in G.GESTURES:
        if g in ra and g in rb and g != "rest":
            sa, sb = ra[g] - ra[g].min(), rb[g] - rb[g].min()
            cos = float(sa @ sb / (np.linalg.norm(sa) * np.linalg.norm(sb))) if sa.any() and sb.any() else float("nan")
            print(f"  {g:8s} {cos:>12.2f} {ra[g].mean() / rb[g].mean():>22.2f}")
    print_confusion(G.evaluate(a), f"{na}, leave-one-take-out")
    print_confusion(G.evaluate(b), f"{nb}, leave-one-take-out")
    print_confusion(G.evaluate(a, b), f"trained on {na}, tested on {nb}")
    print_confusion(G.evaluate(b, a), f"trained on {nb}, tested on {na}")


def cmd_synth(args: argparse.Namespace) -> None:
    rms = G.measured_rms(load(args.from_)) if args.from_ else G.toy_rms()
    grav = A.measured_gravity(args.from_) if args.from_ else A.toy_gravity()
    rng = np.random.default_rng(args.seed)
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    out, team = Path(args.out), Path(args.out).name
    for g, r in rms.items():
        for k in range(args.takes):
            take = G.Take(g, G.synth_emg(r, args.seconds, args.srate, rng, args.shift, args.gain), args.srate)
            G.write_take(out / f"{g}_{stamp}_{k + 1}.csv", take, team, stamp)
    for pose, g in grav.items():
        for k in range(args.takes):
            take = G.Take(pose, A.synth_imu(g, args.seconds, IMU_HZ, rng), IMU_HZ)
            G.write_take(out / f"{pose}_{stamp}_{k + 1}.csv", take, team, stamp, "Myo_IMU", A.IMU_CHANNELS)
    print(f"wrote {(len(rms) + len(grav)) * args.takes} takes to {args.out}"
          + (f" (shift {args.shift}, gain {args.gain:g})" if args.shift or args.gain != 1 else ""))


# ------------------------------------------------------------------------------------- live
IMU_HZ = 50.0
POSE_KEYS = {"i": "neutral", "j": "roll_left", "l": "roll_right", "k": "tip_down"}


class Inlet:
    """An LSL stream by name: waits for it, then hands out whatever arrived since the last pull."""

    def __init__(self, name: str):
        import pylsl
        print(f"Looking for the {name} LSL stream …")
        found = []
        while not found:
            found = pylsl.resolve_byprop("name", name, timeout=3.0)
        self.name, self.srate = name, found[0].nominal_srate()
        self.inlet = pylsl.StreamInlet(found[0], max_buflen=2)
        self.last = time.monotonic()
        print(f"✓ {name} found")

    def pull(self) -> np.ndarray:
        chunk, _ = self.inlet.pull_chunk(timeout=0.0)
        if chunk:
            self.last = time.monotonic()
        return np.asarray(chunk, dtype=float)

    def stale(self) -> bool:
        return time.monotonic() - self.last > SIGNAL_LOST_S


def cmd_fake(args: argparse.Namespace) -> None:
    from pylsl import StreamInfo, StreamOutlet, cf_float32, cf_string, local_clock

    rms = G.measured_rms(load(args.from_)) if args.from_ else G.toy_rms()
    grav = A.measured_gravity(args.from_) if args.from_ else A.toy_gravity()

    def outlet(name: str, kind: str, labels: list[str], srate: float) -> StreamOutlet:
        info = StreamInfo(name, kind, len(labels), srate, cf_float32, f"fake-{name}")
        chans = info.desc().append_child("channels")
        for label in labels:
            chans.append_child("channel").append_child_value("label", label)
        return StreamOutlet(info)

    emg = outlet(args.stream, "EMG", [f"EMG_{i + 1}" for i in range(8)], args.srate)
    imu = outlet(args.imu_stream, "IMU", A.IMU_CHANNELS, IMU_HZ)
    truth = StreamOutlet(StreamInfo("Gesture_Truth", "Markers", 1, 0, cf_string, "fake-myo-gestures-truth"))
    script = None
    if args.script:
        script = []
        for part in args.script.split(","):
            what, secs = part.rsplit(":", 1)
            gesture, _, pose = what.strip().partition("@")
            script.append((gesture, pose or "neutral", float(secs)))
    interactive = script is None and sys.stdin.isatty()
    if script is None and not interactive:
        sys.exit("no keyboard here: pass --script")
    print(f"publishing {args.stream} + {args.imu_stream}"
          + (" (stop the real myo_lsl_publisher first)" if args.stream == "Myo_EMG" else "")
          + ("\n  keys: w fist/forward, a left, d right, s reverse, space rest | "
             "pose: i neutral, j roll left, l roll right, k tip down | q quit" if interactive else ""))

    rng = np.random.default_rng(args.seed)
    gesture, pose = "rest", "neutral"
    t0, sent, sent_imu, cue, first = time.monotonic(), 0, 0, 0.0, True
    old = termios.tcgetattr(sys.stdin) if interactive else None
    try:
        if interactive:
            tty.setcbreak(sys.stdin.fileno())
        while True:
            now = time.monotonic() - t0
            new = (gesture, pose)
            if script is not None:
                if now >= cue:
                    if not script:
                        break
                    g, ps, dur = script.pop(0)
                    new, cue = (g, ps), now + dur
            elif select.select([sys.stdin], [], [], 0)[0]:
                k = sys.stdin.read(1).lower()
                if k == "q":
                    break
                new = (G.KEYS.get(k, gesture), POSE_KEYS.get(k, pose))
            if new != (gesture, pose) or first:
                (gesture, pose), first = new, False
                truth.push_sample([f"{gesture}@{pose}"])
                print(f"\r  {gesture:8s} {pose:10s}", end="", flush=True)
            n = int(now * args.srate) - sent
            if n > 0:
                for row in G.synth_emg(rms[gesture], n / args.srate, args.srate, rng, args.shift, args.gain):
                    emg.push_sample(row.tolist(), local_clock())
                sent += n
            n = int(now * IMU_HZ) - sent_imu
            if n > 0:
                for row in A.synth_imu(grav[pose], n / IMU_HZ, IMU_HZ, rng):
                    imu.push_sample(row.tolist(), local_clock())
                sent_imu += n
            time.sleep(0.005)
    except KeyboardInterrupt:
        pass
    finally:
        if old is not None:
            termios.tcsetattr(sys.stdin, termios.TCSADRAIN, old)
        print()


CAL_STEPS = (  # (EMG label, IMU label, what to do)
    ("rest", "neutral", "arm in your driving position, palm down, hand relaxed"),
    ("forward", None, "same position: a firm fist, your full-speed squeeze"),
    (None, "roll_left", "relax the hand; roll your forearm LEFT like a doorknob, as far as comfortable"),
    (None, "roll_right", "now roll it RIGHT, as far as comfortable"),
    (None, "tip_down", "palm down again; lower your forearm from the elbow, about 45°"),
)


def cmd_calibrate(args: argparse.Namespace) -> None:
    emg, imu = Inlet(args.stream), Inlet(args.imu_stream)
    out, team = Path(args.folder), Path(args.folder).name
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    print(f"\n{len(CAL_STEPS)} steps: get into position during the countdown, then hold still.\n")
    for i, (emg_label, imu_label, how) in enumerate(CAL_STEPS, 1):
        print(f"  {i}/{len(CAL_STEPS)}  {how}")
        for c in range(args.ready, 0, -1):
            print(f"\r        {c} …", end="", flush=True)
            time.sleep(1)
        emg.pull(), imu.pull()
        print("\r        hold  ", end="", flush=True)
        xs, ms = [], []
        t_end = time.monotonic() + args.hold
        while time.monotonic() < t_end:
            xs.append(emg.pull())
            ms.append(imu.pull())
            time.sleep(0.02)
        x = np.concatenate([a for a in xs if a.size]) if any(a.size for a in xs) else np.zeros((0, 8))
        m = np.concatenate([a for a in ms if a.size]) if any(a.size for a in ms) else np.zeros((0, 10))
        if emg_label:
            G.write_take(out / f"{emg_label}_{stamp}_{i}_Myo_EMG.csv", G.Take(emg_label, x, emg.srate or 200.0),
                         team, stamp)
        if imu_label:
            G.write_take(out / f"{imu_label}_{stamp}_{i}_Myo_IMU.csv", G.Take(imu_label, m, imu.srate or IMU_HZ),
                         team, stamp, "Myo_IMU", A.IMU_CHANNELS)
        print(f"\r        ✓ {len(x)} EMG, {len(m)} IMU samples")
    report_calibration(args.folder)


def report_calibration(folder: str) -> A.Calibration:
    cal, _ = A.load_calibration(folder)
    ratio = cal.fist_level / max(cal.rest_level, 1e-6)
    print(f"\n  throttle: rest {cal.rest_level:.1f} → fist {cal.fist_level:.1f} ({ratio:.0f}×)"
          + ("   ⚠ squeeze harder, or rest more completely" if ratio < 3 else ""))
    print(f"  steering: roll left {cal.roll_left:+.0f}°, right {cal.roll_right:+.0f}°"
          + ("   ⚠ roll further" if min(cal.roll_left, -cal.roll_right) < 25 else ""))
    print(f"  reverse:  tip down {cal.tip_down:.0f}°" + ("   ⚠ tip further" if cal.tip_down < 25 else ""))
    return cal


class GestureMode:
    needs_imu = False

    def __init__(self, folder: str):
        takes = load(folder)
        if len({t.label for t in takes}) < 2:
            sys.exit("record at least rest and one other gesture first")
        self.model, self.decider = G.train(takes), G.Decider()
        print("gestures: trained on " + ", ".join(self.model.lda.classes))

    def step(self, x: np.ndarray) -> tuple[float, float, str]:
        p = self.model.lda.proba(G.features(x))[0]
        said, conf = self.model.lda.classes[int(p.argmax())], float(p.max())
        gesture = self.decider.update(said, conf)
        level = emg_level(x)
        v, w = G.command(gesture, self.model.intensity(gesture, level))
        return v, w, f"{gesture:8s} (saw {said} {conf:4.0%})  level {level:5.1f}"


class ArmMode:
    needs_imu = True

    def __init__(self, folder: str, v_max: float, w_max: float):
        self.control = A.ArmControl(report_calibration(folder), v_max, w_max)

    def feed_imu(self, rows: np.ndarray, srate: float) -> None:
        if rows.size:
            self.control.feed_imu(rows, srate)

    def step(self, x: np.ndarray) -> tuple[float, float, str]:
        return self.control.step(x)


def follow_state(base: str) -> dict:
    """The bridge's latest state message, kept fresh by a background thread (for the lidar assist)."""
    import threading
    from websockets.sync.client import connect

    state: dict = {}

    def run() -> None:
        while True:
            try:
                with connect(base + "/state") as ws:
                    for raw in ws:
                        m = json.loads(raw)
                        if m.get("type") == "state":
                            state.clear()
                            state.update(m)
            except Exception:
                time.sleep(1.0)

    threading.Thread(target=run, daemon=True).start()
    return state


def cmd_drive(args: argparse.Namespace) -> None:
    mode = GestureMode(args.folder) if args.mode == "gestures" else ArmMode(args.folder, args.vmax, args.wmax)
    emg = Inlet(args.stream)
    imu = Inlet(args.imu_stream) if mode.needs_imu else None
    window: deque = deque(maxlen=round(G.WINDOW_S * (emg.srate or 200.0)))

    base = args.bridge.rstrip("/")
    bridge, state = None, {}
    if args.dry_run:
        print("dry run: not driving")
    else:
        from websockets.sync.client import connect
        bridge = connect(base + "/cmd")
        if not args.no_assist:
            state = follow_state(base)
        print(f"✓ connected to {base}" + ("" if args.no_assist else " (lidar assist on)") + ". Ctrl+C to stop.\n")

    def send(v: float, w: float) -> None:
        if bridge is not None:
            bridge.send(json.dumps({"type": "cmd", "v": v, "w": w, "source": SOURCE}))

    t_end = time.monotonic() + args.seconds if args.seconds else None
    try:
        while t_end is None or time.monotonic() < t_end:
            t0 = time.monotonic()
            window.extend(emg.pull())
            if imu is not None:
                mode.feed_imu(imu.pull(), imu.srate or IMU_HZ)
            if len(window) < window.maxlen:
                v, w, line = 0.0, 0.0, "waiting for EMG"
            elif emg.stale() or (imu is not None and imu.stale()):
                v, w, line = 0.0, 0.0, "signal lost: stopped"
            else:
                v, w, line = mode.step(np.asarray(window, dtype=float))
                if not args.no_assist:
                    v, w, note = A.assist(v, w, state)
                    line += f"  [{note}]" if note else ""
                line += f"  →  v {v:+.2f}  w {w:+.2f}"
            send(v, w)
            print(f"\r  {line:<96s}", end="", flush=True)
            time.sleep(max(0.0, 1 / SEND_HZ - (time.monotonic() - t0)))
    except KeyboardInterrupt:
        pass
    finally:
        send(0.0, 0.0)
        if bridge is not None:
            bridge.close()
        print("\nstopped")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)

    def streams(p: argparse.ArgumentParser) -> None:
        p.add_argument("--stream", default="Myo_EMG", help="EMG LSL stream (default %(default)s)")
        p.add_argument("--imu-stream", default="Myo_IMU", help="IMU LSL stream (default %(default)s)")

    p = sub.add_parser("report", help="how well your recorded gestures are told apart")
    p.add_argument("folder")
    p.set_defaults(fn=cmd_report)

    p = sub.add_parser("compare", help="two folders of takes side by side, and each model on the other")
    p.add_argument("a")
    p.add_argument("b")
    p.set_defaults(fn=cmd_compare)

    p = sub.add_parser("calibrate", help="guided ~25 s recording of everything --mode arm needs")
    p.add_argument("folder", help="where to write the takes, e.g. data/<team>")
    p.add_argument("--ready", type=int, default=3, help="countdown before each step (s)")
    p.add_argument("--hold", type=float, default=3.0, help="recording per step (s)")
    streams(p)
    p.set_defaults(fn=cmd_calibrate)

    for name, fn, hlp in (("synth", cmd_synth, "write synthetic takes in lsl-web-viewer's format"),
                          ("fake", cmd_fake, "publish synthetic Myo_EMG + Myo_IMU live, from keys or a script")):
        p = sub.add_parser(name, help=hlp)
        p.add_argument("--from", dest="from_", metavar="FOLDER", help="copy the patterns of these takes")
        p.add_argument("--shift", type=int, default=0, help="rotate the band by N electrodes")
        p.add_argument("--gain", type=float, default=1.0, help="scale the signal (fit, sweat, fatigue)")
        p.add_argument("--srate", type=float, default=200.0)
        p.add_argument("--seed", type=int, default=0)
        p.set_defaults(fn=fn)
        if name == "synth":
            p.add_argument("--out", required=True, help="folder to write, e.g. data/synthetic")
            p.add_argument("--takes", type=int, default=2, help="takes per gesture and pose")
            p.add_argument("--seconds", type=float, default=5.0, help="length of each take")
        else:
            p.add_argument("--script", help='e.g. "rest:2,forward:3,forward@roll_left:2" (then stop)')
            streams(p)

    p = sub.add_parser("drive", help="drive from the live Myo")
    p.add_argument("folder", help="your takes, e.g. data/<team>")
    p.add_argument("--mode", choices=("arm", "gestures"), default="arm")
    p.add_argument("--dry-run", action="store_true", help="print decisions, don't send commands")
    p.add_argument("--no-assist", action="store_true", help="switch the lidar assist off")
    p.add_argument("--vmax", type=float, default=A.V_MAX, help="arm mode: m/s at a full squeeze")
    p.add_argument("--wmax", type=float, default=A.W_MAX, help="arm mode: rad/s at full roll")
    p.add_argument("--bridge", default="ws://localhost:8765", help="bridge base URL (default %(default)s)")
    p.add_argument("--seconds", type=float, default=0, help="stop after N seconds (0 = until Ctrl+C)")
    streams(p)
    p.set_defaults(fn=cmd_drive)

    args = ap.parse_args()
    args.fn(args)


if __name__ == "__main__":
    main()
