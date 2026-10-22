"""Squeeze to go, roll your forearm to steer, tip it down for reverse; plus a lidar assist.

Orientation comes from the Myo's accelerometer (gravity), never yaw, so it does not drift. The axes are
learned from calibration takes, so it works whichever way the band is worn:

    rest, forward      Myo_EMG   relaxed hand / fist: the throttle range ("forward-left" etc. count too)
    neutral            Myo_IMU   driving position, palm down
    roll_left/right    Myo_IMU   forearm rolled like turning a doorknob, as far as comfortable
    tip_down           Myo_IMU   forearm lowered from the elbow, about 45°
"""
from __future__ import annotations

import json
import math
from dataclasses import asdict, dataclass
from pathlib import Path

import numpy as np

import gestures as G
from myo_emg_example import emg_level

POSES = ("neutral", "roll_left", "roll_right", "tip_down")
IMU_CHANNELS = ["qw", "qx", "qy", "qz", "ax", "ay", "az", "gx", "gy", "gz"]

ENGAGE_ON = 0.25     # fraction of the rest → fist range that starts the throttle
ENGAGE_OFF = 0.15    # ... and the lower one that stops it (hysteresis: no flicker at the edge)
DEADZONE_DEG = 10.0  # roll inside this steers straight
STEER_FULL = 0.7     # full turn at this fraction of your comfortable roll on that side
REVERSE_ON = 0.6     # fraction of your tip_down angle that selects reverse
REVERSE_OFF = 0.45
ENVELOPE = 1.5       # roll or tip beyond this × your calibrated range (or tipped up as far as
                     # tip_down) means the arm left the driving pose: stop
V_MAX = 1.0          # m/s at a full squeeze
V_REVERSE = 0.4
W_MAX = 1.6          # rad/s at full roll
GRAVITY_TAU_S = 0.1  # smoothing of the accelerometer (arm movement adds non-gravity acceleration)

ROBOT_HALF_LENGTH = 0.255  # chassis box in models/jackal/jackal.xml
ROBOT_HALF_WIDTH = 0.215
LIDAR_X = 0.12             # protocol/PROTOCOL.md §3
STOP_GAP = 0.12            # m of free space kept in front of the bumper
SLOW_GAP = 1.0             # start slowing when something is this close ahead
SIDE_GAP = 0.25            # nudge away from a wall closer than this beside the robot
NUDGE_MAX = 0.6            # rad/s: the assist can bend your path, never take over


def unit(v: np.ndarray) -> np.ndarray:
    return v / np.linalg.norm(v)


@dataclass
class Calibration:
    rest_level: float
    fist_level: float
    neutral: list[float]       # gravity direction in the band's frame, driving position
    axis: list[float]          # the forearm's long axis (what rolling turns around)
    roll_left: float           # degrees, + by construction
    roll_right: float          # degrees, - by construction
    tip_down: float            # degrees, + by construction
    tip_sign: float

    def angles(self, g: np.ndarray) -> tuple[float, float]:
        """(roll, tip) in degrees from neutral for a gravity direction g (band frame)."""
        a, n = np.asarray(self.axis), np.asarray(self.neutral)
        g = unit(g)
        pn, pg = n - (n @ a) * a, g - (g @ a) * a
        roll = math.degrees(math.atan2(a @ np.cross(pn, pg), pn @ pg))
        tip = self.tip_sign * math.degrees(math.asin(np.clip(g @ a, -1, 1)) - math.asin(np.clip(n @ a, -1, 1)))
        return roll, tip

    def recenter(self, g: np.ndarray) -> tuple[float, float]:
        """Make g (the arm as the driver actually holds it to go straight) the new neutral; the
        calibrated roll and tip limits keep their absolute place. Returns the (roll, tip) offset."""
        roll, tip = self.angles(g)
        self.roll_left, self.roll_right, self.tip_down = self.roll_left - roll, self.roll_right - roll, self.tip_down - tip
        self.neutral = unit(np.asarray(g, dtype=float)).tolist()
        return roll, tip

    def save(self, path: str | Path) -> None:
        Path(path).write_text(json.dumps(asdict(self), indent=2))

    @classmethod
    def load(cls, path: str | Path) -> "Calibration":
        return cls(**json.loads(Path(path).read_text()))


def mean_gravity(imu: np.ndarray) -> np.ndarray:
    a = imu[:, 4:7]
    return unit((a / np.linalg.norm(a, axis=1, keepdims=True)).mean(axis=0))


def calibrate(emg_takes: list[G.Take], poses: dict[str, list[np.ndarray]]) -> Calibration:
    """Build a calibration from EMG takes (rest, forward) and IMU pose takes (POSES)."""
    missing = [g for g in ("rest", "forward") if not any(t.label == g for t in emg_takes)]
    missing += [p for p in POSES if not poses.get(p)]
    if missing:
        raise ValueError("missing takes: " + ", ".join(missing))

    def level(g: str) -> float:
        return float(np.median([emg_level(w) for t in emg_takes if t.label == g for w in t.windows()]))

    grav = {p: unit(np.mean([mean_gravity(x) for x in poses[p]], axis=0)) for p in POSES}
    n, l, r = grav["neutral"], grav["roll_left"], grav["roll_right"]
    axis = unit(unit(np.cross(n, l)) + unit(np.cross(r, n)))   # both rolls turn around the forearm
    cal = Calibration(level("rest"), level("forward"), n.tolist(), axis.tolist(), 0, 0, 0, 1.0)
    cal.roll_left, _ = cal.angles(l)
    cal.roll_right, _ = cal.angles(r)
    _, tip = cal.angles(grav["tip_down"])
    cal.tip_sign = 1.0 if tip >= 0 else -1.0
    cal.tip_down = abs(tip)
    return cal


def load_calibration(folder: str | Path) -> tuple[Calibration, list[str]]:
    takes, notes = G.load_takes(folder)
    found, more = G.load_recordings(folder, "Myo_IMU", POSES, 10)
    poses: dict[str, list[np.ndarray]] = {}
    for label, x, _, _ in found:
        poses.setdefault(label, []).append(x)
    return calibrate(takes, poses), notes + more


class ArmControl:
    """EMG level → throttle, roll → steering, tip → reverse gear. Stateful (hysteresis, smoothing)."""

    def __init__(self, cal: Calibration, v_max: float = V_MAX, w_max: float = W_MAX):
        self.cal, self.v_max, self.w_max = cal, v_max, w_max
        self.engaged = self.reverse = False
        self.g: np.ndarray | None = None
        self.last: dict = {}

    def feed_imu(self, samples: np.ndarray, srate: float = 50.0) -> None:
        alpha = 1 - math.exp(-1 / (GRAVITY_TAU_S * srate))
        for a in np.atleast_2d(samples)[:, 4:7]:
            self.g = a if self.g is None else self.g + alpha * (a - self.g)

    def steer(self, roll: float) -> float:
        side = self.cal.roll_left if roll > 0 else self.cal.roll_right
        full = max(STEER_FULL * abs(side), DEADZONE_DEG + 5)
        s = np.clip((abs(roll) - DEADZONE_DEG) / (full - DEADZONE_DEG), 0, 1)
        return float(math.copysign(s, roll))

    def step(self, emg_window: np.ndarray) -> tuple[float, float, str]:
        c = self.cal
        level = emg_level(emg_window)
        frac = (level - c.rest_level) / max(c.fist_level - c.rest_level, 1e-6)
        self.engaged = frac > (ENGAGE_OFF if self.engaged else ENGAGE_ON)
        roll, tip = c.angles(self.g) if self.g is not None else (0.0, 0.0)
        self.reverse = tip > c.tip_down * (REVERSE_OFF if self.reverse else REVERSE_ON)
        outside = (roll > ENVELOPE * c.roll_left or roll < ENVELOPE * c.roll_right
                   or tip > ENVELOPE * c.tip_down or tip < -c.tip_down)
        self.last = {"level": level, "roll": roll, "tip": tip, "engaged": self.engaged,
                     "reverse": self.reverse, "outside": outside}
        if outside:
            return 0.0, 0.0, f"arm out of driving pose: stopped  roll {roll:+4.0f}°  tip {tip:+4.0f}°"
        if not self.engaged:
            v = w = 0.0
        else:
            throttle = float(np.clip(frac, 0, 1))
            v = -V_REVERSE * throttle if self.reverse else self.v_max * throttle
            w = 0.0 if self.reverse else self.w_max * self.steer(roll)
        gear = "R" if self.reverse else "D"
        what = ("go" if self.engaged else "rest")
        return v, w, f"{gear} {what:4s} level {level:5.1f}  roll {roll:+4.0f}°  tip {tip:+4.0f}°"


# ------------------------------------------------------------------------------------- lidar assist
def assist(v: float, w: float, state: dict) -> tuple[float, float, str]:
    """Shared control: slow before an obstacle ahead and bend away from a close wall. The driver's
    direction always wins; reverse is untouched (the lidar only sees forward)."""
    scan = state.get("scan") if state else None
    if not scan or v <= 0:
        return v, w, ""
    r = np.asarray(scan["ranges"], dtype=float)
    ang = scan["angle_min"] + scan["angle_inc"] * np.arange(len(r))
    ok = np.isfinite(r) & (r < scan.get("range_max", 10.0))
    x, y = LIDAR_X + r[ok] * np.cos(ang[ok]), r[ok] * np.sin(ang[ok])   # robot frame, x forward

    # heading where we are going: points in the robot's swept corridor, curved by the turn rate
    ahead = x > ROBOT_HALF_LENGTH
    k = w / max(v, 0.1)                                   # path curvature
    y_path = y - 0.5 * k * x ** 2
    in_path = ahead & (np.abs(y_path) < ROBOT_HALF_WIDTH + 0.05)
    gap = float((x[in_path] - ROBOT_HALF_LENGTH).min()) if in_path.any() else SLOW_GAP
    scale = float(np.clip((gap - STOP_GAP) / (SLOW_GAP - STOP_GAP), 0, 1))

    beside = (x > -ROBOT_HALF_LENGTH) & (x < ROBOT_HALF_LENGTH + 0.4)
    side_gap = np.abs(y) - ROBOT_HALF_WIDTH
    push = 0.0
    for sign in (1, -1):                                  # +1 = wall on the left
        near = beside & (np.sign(y) == sign) & (side_gap < SIDE_GAP)
        if near.any():
            push -= sign * (1 - max(float(side_gap[near].min()), 0) / SIDE_GAP)
    nudge = NUDGE_MAX * float(np.clip(push, -1, 1))

    v2, w2 = v * scale, w + nudge
    note = []
    if scale < 0.99:
        note.append(f"slow {scale:.0%}")
    if abs(nudge) > 0.05:
        note.append("nudge " + ("right" if nudge < 0 else "left"))
    return v2, w2, ", ".join(note)


# ------------------------------------------------------------------------------------- synthetic
def toy_gravity() -> dict[str, np.ndarray]:
    """Gravity direction for each pose on a band whose x axis runs along the forearm."""
    def rot(roll: float, tip: float) -> np.ndarray:
        r, t = math.radians(roll), math.radians(tip)
        return unit(np.array([math.sin(t), math.cos(t) * math.sin(r), math.cos(t) * math.cos(r)]))
    return {"neutral": rot(0, 0), "roll_left": rot(70, 5), "roll_right": rot(-50, 0), "tip_down": rot(0, 55)}


def measured_gravity(folder: str | Path) -> dict[str, np.ndarray]:
    found, _ = G.load_recordings(folder, "Myo_IMU", POSES, 10)
    out: dict[str, list[np.ndarray]] = {}
    for label, x, _, _ in found:
        out.setdefault(label, []).append(mean_gravity(x))
    return {p: unit(np.mean(v, axis=0)) for p, v in out.items()}


def synth_imu(g: np.ndarray, seconds: float, srate: float, rng: np.random.Generator) -> np.ndarray:
    """IMU rows [qw qx qy qz ax ay az gx gy gz] holding still in a pose: gravity + a little tremor."""
    n = round(seconds * srate)
    acc = unit(g) + rng.normal(0, 0.01, (n, 3))
    out = np.zeros((n, 10))
    out[:, 0] = 1.0
    out[:, 4:7] = acc
    out[:, 7:10] = rng.normal(0, 0.5, (n, 3))
    return out
