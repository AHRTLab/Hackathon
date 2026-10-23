#!/usr/bin/env python3
"""Drive the Jackal with the Myo, two ways, and check your recordings against synthetic ones.

  --mode arm (default)  squeeze to go (harder = faster), roll your forearm to steer, tip it down for
                        reverse, relax to stop. Needs takes: rest, forward (EMG) and neutral, roll_left,
                        roll_right, tip_down (IMU); `calibrate` records them all in ~30 s.
  --mode lever          like arm, but your arm's height is the throttle: raised = stop, forward = go,
                        no squeeze needed; a fist brakes. Raise the arm once to start. Needs arm_up takes.
                        (--grip: require a light grip to drive instead, relax = stop)
  --mode gestures       five EMG gestures: rest stop, fist forward, hand points left / right to turn,
                        spread fingers to reverse. Needs takes of each, recorded in lsl-web-viewer.
  Both: a lidar assist slows before obstacles, nudges off walls and keeps the lane through the gate you
  are aimed at, lane-keeping style, at most 0.3 rad/s (--no-assist switches all of it off, --no-gate just the gate part).

1. Record.  python myo_gestures.py calibrate data/<team>       guided, Myo_EMG + Myo_IMU, ~40 s
            python myo_gestures.py record data/<team>-lever    lever dataset: 6 poses × 2, 3, 5 s
            or record takes in lsl-web-viewer, the label being the gesture or pose name
            ("forward-left" counts as forward: a fist held while rolled left).
2. Check.   python myo_gestures.py report data/<team>
            python myo_gestures.py steering data/<team>    full-turn roll per side, from your drives
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
import socket
import sys
import time
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
        here = [s for s in found if s.hostname() == socket.gethostname()]
        found = here or found                         # another team's stream on the same Wi-Fi has this name too
        self.name, self.srate = name, found[0].nominal_srate()
        self.inlet = pylsl.StreamInlet(found[0], max_buflen=2)
        self.last = float("-inf")                     # stale until the first sample arrives
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

    rms = {**G.toy_rms(), **(G.measured_rms(load(args.from_)) if args.from_ else {})}
    grav = {**A.toy_gravity(), **(A.measured_gravity(args.from_) if args.from_ else {})}

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
            if gesture not in rms or (pose and pose not in grav):
                sys.exit(f"--script: unknown '{what.strip()}' (gestures {', '.join(rms)}; poses {', '.join(grav)})")
            script.append((gesture, pose or "neutral", float(secs)))
    interactive = script is None and sys.stdin.isatty()
    if interactive:
        import select                                   # POSIX only: the rest of this file runs on Windows too
        import termios
        import tty
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


CAL_STEPS = (  # (name, EMG label, IMU label, what to do); both streams are saved for every take
    ("rest", "rest", "neutral", "arm in your driving position, palm down, hand relaxed"),
    ("fist", "forward", "forward", "same position: a firm fist, your full-speed squeeze"),
    ("roll left", "roll_left", "roll_left", "relax the hand; roll your forearm LEFT like a doorknob, as far as comfortable"),
    ("roll right", "roll_right", "roll_right", "now roll it RIGHT, as far as comfortable"),
    ("tip down", "tip_down", "tip_down", "palm down again; lower your forearm from the elbow, about 45°"),
    ("arm up", "arm_up", "arm_up", "raise your forearm from the elbow to where STOP feels natural (lever mode)"),
)
LEVER_STEPS = (
    ("GO", "rest", "neutral", "arm FORWARD in your driving position, hand relaxed"),
    ("STOP", "arm_up", "arm_up", "RAISE your forearm from the elbow, hand relaxed"),
    ("LEFT", "roll_left", "roll_left", "arm forward, ROLL LEFT as far as you'd steer"),
    ("RIGHT", "roll_right", "roll_right", "arm forward, ROLL RIGHT as far as you'd steer"),
    ("REVERSE", "tip_down", "tip_down", "LOWER your forearm from the elbow, about 45°"),
    ("BRAKE", "forward", "brake", "arm forward, a FIRM FIST"),
)


def set_aside_previous(folder: Path, stamp: str) -> list[Path]:
    """Move an earlier calibration out of `folder` into a sibling `<folder>-previous-<stamp>`, so the new
    takes stand alone. The loaders read every CSV under a folder (subfolders too), which is why it must be
    a sibling. Takes, steering.json and the completion marker move; drive logs stay."""
    if not folder.is_dir():
        return []
    old = [p for p in folder.iterdir() if p.is_file() and (p.suffix == ".csv" and "# label:" in p.read_text(errors="ignore")[:400]
                                                           or p.name in ("steering.json", COMPLETE))]
    if not old:
        return []
    dest = folder.parent / f"{folder.name}-previous-{stamp}"
    dest.mkdir(parents=True, exist_ok=True)
    moved = []
    for p in old:
        p.rename(dest / p.name)
        moved.append(dest / p.name)
    return moved


COMPLETE = "calibration-complete"


def record_steps(args: argparse.Namespace, steps: tuple, durations: list[float]) -> None:
    """Guided takes: every step once per duration (round by round, so fatigue spreads evenly)."""
    emg, imu = Inlet(args.stream), Inlet(args.imu_stream)
    out, team = Path(args.folder), Path(args.folder).name
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    if not getattr(args, "keep", False):
        moved = set_aside_previous(out, stamp)
        if moved:
            print(f"  previous calibration ({len(moved)} files) moved to {moved[0].parent}: a new wearing of the "
                  f"band must not mix with the old one (--keep to add takes to it instead)")
    total = len(steps) * len(durations)
    print(f"\n{total} takes: get into position during the countdown, then hold still until ✓.\n")
    n = 0
    for dur in durations:
        for name, emg_label, imu_label, how in steps:
            n += 1
            print(f"  {n}/{total}  {name} ({dur:g} s): {how}")
            for c in range(args.ready, 0, -1):
                print(f"\r        {c} …", end="", flush=True)
                time.sleep(1)
            emg.pull(), imu.pull()
            print("\r        hold  ", end="", flush=True)
            xs, ms = [], []
            t_end = time.monotonic() + dur
            while time.monotonic() < t_end:
                xs.append(emg.pull())
                ms.append(imu.pull())
                time.sleep(0.02)
            x = np.concatenate([a for a in xs if a.size]) if any(a.size for a in xs) else np.zeros((0, 8))
            m = np.concatenate([a for a in ms if a.size]) if any(a.size for a in ms) else np.zeros((0, 10))
            tag = f"{stamp}_{dur:g}s_{n}"
            G.write_take(out / f"{emg_label}_{tag}_Myo_EMG.csv", G.Take(emg_label, x, emg.srate or 200.0), team, stamp)
            G.write_take(out / f"{imu_label}_{tag}_Myo_IMU.csv", G.Take(imu_label, m, imu.srate or IMU_HZ),
                         team, stamp, "Myo_IMU", A.IMU_CHANNELS)
            if len(x) < G.MIN_TAKE_ROWS or len(m) < G.MIN_TAKE_ROWS:
                sys.exit(f"\r        ✗ only {len(x)} EMG, {len(m)} IMU samples: a stream stalled. Check the Myo "
                         f"(battery, sync), then record again into a new folder")
            print(f"\r        ✓ {len(x)} EMG, {len(m)} IMU samples")
    report_calibration(args.folder)


def cmd_calibrate(args: argparse.Namespace) -> None:
    record_steps(args, CAL_STEPS, [args.hold])


def cmd_record(args: argparse.Namespace) -> None:
    record_steps(args, LEVER_STEPS, [float(d) for d in args.durations.split(",")])


def report_calibration(folder: str) -> A.Calibration:
    cal, _ = A.load_calibration(folder)
    ratio = cal.fist_level / max(cal.rest_level, 1e-6)
    print(f"\n  throttle: rest {cal.rest_level:.1f} → fist {cal.fist_level:.1f} ({ratio:.0f}×)"
          + ("   ⚠ squeeze harder, or rest more completely" if ratio < 3 else ""))
    print(f"  steering: roll left {cal.roll_left:+.0f}°, right {cal.roll_right:+.0f}°"
          + ("   ⚠ roll further" if min(cal.roll_left, -cal.roll_right) < 25 else ""))
    print(f"  reverse:  tip down {cal.tip_down:.0f}°" + ("   ⚠ tip further" if cal.tip_down < 25 else ""))
    if cal.tip_up:
        print(f"  lever:    arm up {cal.tip_up:+.0f}° (stop past {A.LEVER_STOP * cal.tip_up:+.0f}°, "
              f"full speed from {A.LEVER_FULL * cal.tip_up:+.0f}°)")
    return cal


class GestureMode:
    needs_imu = False

    def __init__(self, folder: str):
        takes = load(folder)
        if len({t.label for t in takes}) < 2:
            sys.exit("record at least rest and one other gesture first")
        self.model, self.decider = G.train(takes), G.Decider()
        self.last: dict = {}
        print("gestures: trained on " + ", ".join(self.model.lda.classes))

    def reset(self) -> None:
        self.decider = G.Decider()

    def step(self, x: np.ndarray) -> tuple[float, float, str]:
        p = self.model.lda.proba(G.features(x))[0]
        said, conf = self.model.lda.classes[int(p.argmax())], float(p.max())
        gesture = self.decider.update(said, conf)
        level = emg_level(x)
        v, w = G.command(gesture, self.model.intensity(gesture, level))
        self.last = {"gesture": gesture, "saw": said, "confidence": conf, "level": level}
        return v, w, f"{gesture:8s} (saw {said} {conf:4.0%})  level {level:5.1f}"


class ArmMode:
    needs_imu = True

    def __init__(self, folder: str, v_max: float, w_max: float, lever: bool = False, expo: float = A.EXPO,
                 grip: bool = False, full_left: float = 0.0, full_right: float = 0.0,
                 brake_model: str | None = None):
        try:
            brake = None
            if lever and not grip:
                brake = A.load_brake(brake_model, folder) if brake_model else A.train_brake(folder)
            self.control = A.ArmControl(report_calibration(folder), v_max, w_max, lever, expo, grip,
                                        full_left, full_right, brake)
            if lever and not grip:
                print("  brake:    " + (f"pooled fist pattern ({brake_model}), offset by your rest" if brake_model
                                        else "fist pattern (trained on your brake vs other takes)" if brake
                                        else "level only: record other poses (`record`) for the pattern check"))
        except ValueError as e:
            sys.exit(str(e))

    @property
    def last(self) -> dict:
        return self.control.last

    def recenter(self, imu: "Inlet", ready: int = 3, hold: float = 2.0) -> None:
        """Re-zero steering on the arm as the driver holds it to go straight."""
        print("\nhold your arm FORWARD and LEVEL, the way you drive straight (raise it to start AFTER this)")
        for c in range(ready, 0, -1):
            print(f"\r  {c} …", end="", flush=True)
            time.sleep(1)
        imu.pull()
        rows, t_end = [], time.monotonic() + hold
        while time.monotonic() < t_end:
            rows.append(imu.pull())
            time.sleep(0.02)
        rows = [r for r in rows if r.size]
        if not rows:
            print("\r  no IMU data: kept the calibrated neutral")
            return
        cal = self.control.cal
        g = A.mean_gravity(np.concatenate(rows))
        roll, tip = cal.angles(g)
        if (cal.roll_left - roll < A.DEADZONE_DEG + 10 or cal.roll_right - roll > -(A.DEADZONE_DEG + 10)
                or abs(tip) > A.REVERSE_ON * cal.tip_down):
            sys.exit(f"\r  your straight pose reads roll {roll:+.0f}°, tip {tip:+.0f}° from this calibration: the band "
                     f"has moved (or you weren't holding straight).\n  Hold straight and try again, or recalibrate:\n"
                     f"    python examples/myo_gestures.py record <new folder>")
        cal.recenter(g)
        print(f"\r  ✓ straight is {roll:+.0f}° roll, {tip:+.0f}° tip from your calibration; "
              f"full turn {self.control.full[1] or A.STEER_FULL * cal.roll_left:+.0f}° / "
              f"{-(self.control.full[-1] or -A.STEER_FULL * cal.roll_right):+.0f}° from here")

    def reset(self) -> None:
        self.control.reset()

    def feed_imu(self, rows: np.ndarray, srate: float) -> None:
        if rows.size:
            self.control.feed_imu(rows, srate)

    def step(self, x: np.ndarray) -> tuple[float, float, str]:
        return self.control.step(x)


class StateBox:
    """The latest state message. The reader thread swaps in a whole new dict, never edits one in place,
    so the control loop always sees a complete message."""
    latest: dict = {}
    at = float("-inf")                                # monotonic time of the last message

    def fresh(self, max_age: float = 1.0) -> dict:
        return self.latest if time.monotonic() - self.at < max_age else {}


def follow_state(base: str, lag: "A.LagModel | None" = None) -> StateBox:
    """The bridge's latest state message, kept fresh by a background thread (for the lidar assist);
    also feeds the command-lag estimate from state.cmd_echo_t."""
    import threading
    from websockets.sync.client import connect

    box = StateBox()

    def run() -> None:
        while True:
            try:
                with connect(base + "/state") as ws:
                    for raw in ws:
                        m = json.loads(raw)
                        if m.get("type") == "state":
                            if lag is not None:
                                lag.observe(time.time(), m.get("cmd_echo_t"))
                            box.latest, box.at = m, time.monotonic()
            except Exception:
                time.sleep(1.0)

    threading.Thread(target=run, daemon=True).start()
    return box


class DriveLog:
    """One CSV row per command: what the controller saw, what it sent, and the sim's course state."""

    def __init__(self, folder: Path, mode: str):
        folder.mkdir(parents=True, exist_ok=True)
        self.path = folder / f"drive_{datetime.now().strftime('%Y%m%d_%H%M%S')}_{mode}.csv"
        self.f = open(self.path, "w")
        self.cols: list[str] | None = None
        self.t0 = time.monotonic()

    def write(self, seen: dict, v: float, w: float, state: dict) -> None:
        course = (state or {}).get("course") or {}
        row = {"t": round(time.monotonic() - self.t0, 3), **{k: (round(x, 3) if isinstance(x, float) else x)
                                                              for k, x in seen.items()},
               "v": round(v, 3), "w": round(w, 3), "course": course.get("id", ""),
               "gates_passed": course.get("gates_passed", ""), "collisions": (state or {}).get("collisions", "")}
        if self.cols is None:
            self.cols = list(row)
            self.f.write(",".join(self.cols) + "\n")
        self.f.write(",".join(str(row.get(c, "")) for c in self.cols) + "\n")

    def close(self) -> str:
        self.f.close()
        return str(self.path)


STEER_REACH = 0.85   # full turn at this fraction of the roll you reach (95th percentile) while driving


def steering_from_logs(paths: list[Path]) -> dict[str, float]:
    """Per-side full-turn roll (degrees from straight) from arm/lever drive logs: how far you actually
    roll each way while moving."""
    import csv
    left, right = [], []
    for p in paths:
        for r in csv.DictReader(open(p)):
            if "roll" not in r or r.get("outside") == "True" or float(r.get("v") or 0) <= 0.05:
                continue
            if abs(float(r["roll"])) > A.DEADZONE_DEG:   # turning, not straight-line wobble
                (left if float(r["roll"]) > 0 else right).append(abs(float(r["roll"])))
    if len(left) < 20 or len(right) < 20:
        raise ValueError("not enough turning in these logs: drive a course with both left and right turns")
    return {"full_left": round(STEER_REACH * float(np.percentile(left, 95)), 1),
            "full_right": round(STEER_REACH * float(np.percentile(right, 95)), 1),
            "from": [p.name for p in paths]}


def cmd_steering(args: argparse.Namespace) -> None:
    logs = sorted((Path(args.folder) / "drives").glob("drive_*_*.csv"))
    logs = [p for p in logs if not p.stem.endswith("gestures")][-args.last:]
    try:
        tuned = steering_from_logs(logs)
    except ValueError as e:
        sys.exit(str(e))
    out = Path(args.folder) / "steering.json"
    out.write_text(json.dumps(tuned, indent=2))
    print(f"from {len(logs)} drive log(s): full left turn at {tuned['full_left']:.0f}°, "
          f"full right at {tuned['full_right']:.0f}° of roll from straight → {out}")


def blind_condition(folder: Path, sessions: int) -> tuple[bool, int, int]:
    """Next lag-comp condition from a balanced, shuffled schedule in <folder>/blind/ (a new one when the
    last is used up). The key (session, time, condition) goes to blind/key.csv, out of the driver's sight."""
    import secrets
    d = folder / "blind"
    d.mkdir(parents=True, exist_ok=True)
    sched = d / "schedule.json"
    plan = json.loads(sched.read_text()) if sched.exists() else None
    if plan is not None and plan["next"] < len(plan["order"]) and len(plan["order"]) != sessions:
        sys.exit(f"a {len(plan['order'])}-session blind schedule is under way here ({plan['next']} done): "
                 f"finish it with --blind {len(plan['order'])}, or move {d} aside to start over")
    if plan is None or plan["next"] >= len(plan["order"]):
        order = [True, False] * (sessions // 2)
        for i in range(len(order) - 1, 0, -1):          # Fisher-Yates with a CSPRNG
            j = secrets.randbelow(i + 1)
            order[i], order[j] = order[j], order[i]
        plan = {"order": order, "next": 0}
    k = plan["next"]
    on = bool(plan["order"][k])
    plan["next"] = k + 1
    sched.write_text(json.dumps(plan))
    key = d / "key.csv"
    new = not key.exists()
    with open(key, "a") as f:
        if new:
            f.write("session,of,started,lag_comp\n")
        f.write(f"{k + 1},{len(plan['order'])},{datetime.now().isoformat(timespec='seconds')},{on}\n")
    return on, k + 1, len(plan["order"])


def cmd_drive(args: argparse.Namespace) -> None:
    if args.blind and args.dry_run:
        sys.exit("--blind needs a real drive (a dry run would use up a hidden session)")
    if args.blind and (args.blind < 2 or args.blind % 2):
        sys.exit("--blind N needs an even N of at least 2 (half on, half off)")
    tuned = Path(args.folder) / "steering.json"
    if args.mode != "gestures" and tuned.exists():
        t = json.loads(tuned.read_text())
        args.full_left = args.full_left or t.get("full_left", 0.0)
        args.full_right = args.full_right or t.get("full_right", 0.0)
        print(f"steering: full turn at {args.full_left:.0f}° left / {args.full_right:.0f}° right ({tuned.name})")
    mode = (GestureMode(args.folder) if args.mode == "gestures"
            else ArmMode(args.folder, args.vmax, args.wmax, lever=args.mode == "lever", expo=args.expo,
                         grip=args.grip, full_left=args.full_left, full_right=args.full_right,
                         brake_model=args.brake_model))
    emg = Inlet(args.stream)
    imu = Inlet(args.imu_stream) if mode.needs_imu else None
    window: deque = deque(maxlen=round(G.WINDOW_S * (emg.srate or 200.0)))
    if imu is not None and not args.no_recenter:
        mode.recenter(imu)

    base = args.bridge.rstrip("/")
    bridge, box = None, None
    lag = A.LagModel(SEND_HZ)
    if args.dry_run:
        print("dry run: not driving")
    else:
        from websockets.sync.client import connect
        bridge = connect(base + "/cmd")
        if args.blind:                                 # drawn only once the start has succeeded
            args.lag_comp, k, n = blind_condition(Path(args.folder), args.blind)
            print(f"blind session {k}/{n} (condition hidden)")
        if not args.no_assist or args.lag_comp:
            box = follow_state(base, lag)
        print(f"✓ connected to {base}" + ("" if args.no_assist else " (lidar assist on)") + ". Ctrl+C to stop.\n")
    log = DriveLog(Path(args.folder) / "drives", args.mode) if not args.no_log else None

    def send(v: float, w: float) -> None:
        if bridge is not None:
            t = time.time()
            msg = {"type": "cmd", "v": v, "w": w, "source": SOURCE, "t": t}
            ov = A.overlay() if not args.no_assist else None
            if ov:
                msg["assist"] = ov                        # the sim page draws it in its minimap
            bridge.send(json.dumps(msg))
            lag.sent_cmd(t, v, w)

    t_end = time.monotonic() + args.seconds if args.seconds else None
    next_tick = time.monotonic()
    try:
        while t_end is None or time.monotonic() < t_end:
            t0 = time.monotonic()
            state = box.fresh() if box is not None else {}   # one consistent, recent snapshot per tick
            window.extend(emg.pull())
            if imu is not None:
                mode.feed_imu(imu.pull(), imu.srate or IMU_HZ)
            if len(window) < window.maxlen:
                v, w, line = 0.0, 0.0, "waiting for EMG"
            elif emg.stale() or (imu is not None and imu.stale()):
                v, w, line = 0.0, 0.0, "signal lost: stopped"
                mode.reset()
                window.clear()
            else:
                v, w, line = mode.step(np.asarray(window, dtype=float))
                if args.lag_comp:
                    w *= lag.steer_gain(args.lag_steer)
                if not args.no_assist:
                    ahead = lag.in_flight(time.time()) if args.lag_comp else (0.0, 0.0, 0.0)
                    v, w, note = A.assist(v, w, state, ahead, gate=not args.no_gate, w_max=args.wmax)
                    line += f"  [{note}]" if note else ""
                if lag.latency >= A.LAG_ON_S:
                    line += f"  [lag {lag.latency * 1000:.0f} ms" + (" comp]" if args.lag_comp and not args.blind else "]")
                if bridge is not None and not state and not args.no_assist:
                    line += "  [no sim state: is the sim tab open?]"
                line += f"  →  v {v:+.2f}  w {w:+.2f}"
                if log is not None:
                    log.write({**mode.last, "lag_ms": round(lag.latency * 1000), "lag_comp": args.lag_comp},
                              v, w, state)
            send(v, w)
            print(f"\r  {line:<96s}", end="", flush=True)
            next_tick += 1 / SEND_HZ                     # a fixed schedule, so the loop really runs at SEND_HZ
            if next_tick < time.monotonic() - 1 / SEND_HZ:
                next_tick = time.monotonic()               # fell behind (a slow tick): don't burst to catch up
            time.sleep(max(0.0, next_tick - time.monotonic()))
    except KeyboardInterrupt:
        pass
    finally:
        send(0.0, 0.0)
        if bridge is not None:
            bridge.close()
        log_path = log.close() if log is not None else None
        print("\nstopped" + (f"; log: {log_path}" if log_path else ""))
        if args.learn and log_path and args.brake_model and not args.dry_run:
            import train_pooled
            try:
                fists, rests, total = train_pooled.update_from_drive(args.brake_model, log_path, args.folder)
                print(f"learned from this drive: +{fists} fist, +{rests} not-fist windows → "
                      f"{args.brake_model} now {total} windows" if fists or rests else
                      "learned nothing from this drive (no held brakes, no clear driving)")
            except Exception as e:                           # learning must never spoil a finished drive
                print(f"⚠ could not update {args.brake_model}: {e}")


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

    p = sub.add_parser("record", help="guided lever-mode dataset: go, stop, left, right, reverse, brake × durations")
    p.add_argument("--keep", action="store_true", help="add to takes already in the folder instead of setting them aside")
    p.add_argument("folder", help="where to write the takes, e.g. data/<team>-lever")
    p.add_argument("--durations", default="2,3,5", help="seconds per take, one round each (default %(default)s)")
    p.add_argument("--ready", type=int, default=3, help="countdown before each take (s)")
    streams(p)
    p.set_defaults(fn=cmd_record)

    p = sub.add_parser("calibrate", help="guided ~40 s recording of everything --mode arm needs")
    p.add_argument("--keep", action="store_true", help="add to takes already in the folder instead of setting them aside")
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

    p = sub.add_parser("steering", help="set each side's full-turn roll from your drive logs")
    p.add_argument("folder", help="your takes, e.g. data/<team> (reads <folder>/drives)")
    p.add_argument("--last", type=int, default=3, help="use the last N arm/lever drive logs")
    p.set_defaults(fn=cmd_steering)

    p = sub.add_parser("drive", help="drive from the live Myo")
    p.add_argument("folder", help="your takes, e.g. data/<team>")
    p.add_argument("--mode", choices=("arm", "lever", "gestures"), default="arm")
    p.add_argument("--dry-run", action="store_true", help="print decisions, don't send commands")
    p.add_argument("--no-assist", action="store_true", help="switch the lidar assist off")
    p.add_argument("--brake-model", help="lever: a pooled fist detector from train_pooled.py --save (.npz) instead of one trained on your own takes")
    p.add_argument("--learn", action="store_true", help="with --brake-model: after each drive, add its self-labelled windows to the model and refit it (continual learning)")
    p.add_argument("--no-gate", action="store_true", help="keep the lidar assist but switch off the gate lane keeping")
    p.add_argument("--no-recenter", action="store_true", help="arm mode: skip re-zeroing straight at start")
    p.add_argument("--no-lag-comp", dest="lag_comp", action="store_false",
                   help="switch off lag compensation (on by default: when the measured command lag is ≥100 ms, "
                        "soften steering and run the assist from where the robot will be when each command lands)")
    p.add_argument("--blind", type=int, nargs="?", const=8, default=0, metavar="N",
                   help="blind A/B: --lag-comp on or off per session from a hidden balanced schedule of N (8)")
    p.add_argument("--lag-steer", type=float, default=A.LAG_STEER_K,
                   help="--lag-comp steering softening: gain × 1/(1 + K·lag s) (default %(default)s)")
    p.add_argument("--no-log", action="store_true", help="don't write data/<team>/drives/drive_*.csv")
    p.add_argument("--vmax", type=float, default=A.V_MAX, help="arm mode: m/s at a full squeeze")
    p.add_argument("--wmax", type=float, default=A.W_MAX, help="arm mode: rad/s at full roll")
    p.add_argument("--grip", action="store_true", help="lever mode: require a light grip to drive")
    p.add_argument("--full-left", type=float, default=0.0, metavar="DEG",
                   help="roll from straight for a full left turn (default: 70%% of the calibrated roll)")
    p.add_argument("--full-right", type=float, default=0.0, metavar="DEG",
                   help="... and for a full right turn (`steering` sets both from your drive logs)")
    p.add_argument("--expo", type=float, default=A.EXPO,
                   help="arm mode: 0 = linear steering, up to 1 = much gentler near straight (default %(default)s)")
    p.add_argument("--bridge", default="ws://localhost:8765", help="bridge base URL (default %(default)s)")
    p.add_argument("--seconds", type=float, default=0, help="stop after N seconds (0 = until Ctrl+C)")
    streams(p)
    p.set_defaults(fn=cmd_drive)

    args = ap.parse_args()
    try:
        args.fn(args)
    except KeyboardInterrupt:
        print("\nstopped")
        sys.exit(130)


if __name__ == "__main__":
    main()
