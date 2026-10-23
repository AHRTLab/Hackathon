"""Squeeze to go (or, in lever mode, lower a raised arm to go), roll your forearm to steer, tip it
down for reverse; plus a lidar assist.

Orientation comes from the Myo's accelerometer (gravity), never yaw, so it does not drift. The axes are
learned from calibration takes, so it works whichever way the band is worn:

    rest, forward      Myo_EMG   relaxed hand / fist: the throttle range ("forward-left" etc. count too)
    neutral            Myo_IMU   driving position, palm down
    roll_left/right    Myo_IMU   forearm rolled like turning a doorknob, as far as comfortable
    tip_down           Myo_IMU   forearm lowered from the elbow, about 45°
    arm_up             Myo_IMU   lever mode only: forearm raised to where "stop" feels natural
"""
from __future__ import annotations

import json
import math
from collections import deque
from dataclasses import asdict, dataclass
from pathlib import Path

import numpy as np

import gestures as G
from myo_emg_example import emg_level

POSES = ("neutral", "roll_left", "roll_right", "tip_down")
ALL_POSES = POSES + ("arm_up",)
IMU_CHANNELS = ["qw", "qx", "qy", "qz", "ax", "ay", "az", "gx", "gy", "gz"]

ENGAGE_ON = 0.25     # fraction of the rest → fist range that starts the throttle
ENGAGE_OFF = 0.15    # ... and the lower one that stops it (hysteresis: no flicker at the edge)
DEADZONE_DEG = 10.0  # roll inside this steers straight
STEER_FULL = 0.7     # full turn at this fraction of your comfortable roll on that side
EXPO = 0.5           # 0 = linear; higher = gentler near straight, still full at the end (RC expo)
REVERSE_ON = 0.6     # fraction of your tip_down angle that selects reverse
REVERSE_OFF = 0.45
LEVER_GRIP_ON = 0.15  # lever --grip: a light grip enables driving (relax = stop) ...
LEVER_GRIP_OFF = 0.08
BRAKE_ON = 0.6       # no-grip lever: fist brake at this fraction of the rest → fist range. Holding and
BRAKE_OFF = 0.45     # rolling the arm alone reads up to ~0.35 of it (AJ, L2 lever run, 2026-10-22)
BRAKE_FRAMES = 8     # ... held this many commands (400 ms): AJ's unconscious mid-turn grips lasted
                     # up to 350 ms (L2 lever run 2026-10-22 20:41); deliberate fists all caught at 0.4 s
BRAKE_P = 0.9        # with brake takes and other active takes: the fist must also LOOK like your fist
BRAKE_MIN = 0.5      # ... and reach this fraction of the range (turning muscles are a different pattern)
NOT_BRAKE = ("rest", "roll_left", "roll_right", "arm_up", "tip_down", "left", "right", "reverse")
LEVER_STOP = 0.6      # ... arm raised past this fraction of arm_up: stopped
LEVER_FULL = 0.15     # raised less than this fraction (about level): full speed
ENVELOPE = 1.5       # roll or tip beyond this × your calibrated range (or tipped up as far as
                     # tip_down) means the arm left the driving pose: stop
V_MAX = 1.4          # m/s at a full squeeze / arm level (protocol limit 2.0; L3 caps it to 1.0 anyway)
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
GATE_NUDGE_MAX = 0.3       # rad/s the gate assist may add toward the gate's centreline (lane keeping)
GATE_NUDGE_GAIN = 1.2      # rad/s per rad of heading error to the aim point
GATE_CONE_DEG = 20.0       # help only if the driver is already aimed this close to the gate's path
GATE_RANGE = 2.5           # m: help only this close to the gate
GATE_POST_RANGE = 3.0      # m: posts (0.1 m wide) fall between 1.5° beams further away than this
GATE_WIDTH = (0.8, 1.8)    # m: post-to-post distances that count as a gate (courses: 0.9 to 1.6)
GATE_LOOKAHEAD = (0.4, 1.2)  # m: aim this far before the gate, on its centreline (scales with distance)
GATE_TURN_COMFORT = 0.7    # cap v so the turn onto the centreline needs at most this × W_MAX


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
    tip_up: float = 0.0        # degrees, - (arm_up); 0 = not calibrated

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
        if self.tip_up:
            self.tip_up -= tip
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
    if poses.get("arm_up"):
        cal.tip_up = cal.angles(unit(np.mean([mean_gravity(x) for x in poses["arm_up"]], axis=0)))[1]
    numbers = [cal.rest_level, cal.fist_level, cal.roll_left, cal.roll_right, cal.tip_down, cal.tip_up,
               *cal.neutral, *cal.axis]
    if not all(math.isfinite(v) for v in numbers):
        raise ValueError("calibration came out invalid (NaN): a take is empty or broken; record again")
    return cal


def load_calibration(folder: str | Path) -> tuple[Calibration, list[str]]:
    takes, notes = G.load_takes(folder)
    found, more = G.load_recordings(folder, "Myo_IMU", ALL_POSES, 10)
    poses: dict[str, list[np.ndarray]] = {}
    for label, x, _, _ in found:
        poses.setdefault(label, []).append(x)
    return calibrate(takes, poses), notes + more


class ArmControl:
    """Squeeze (or lever: arm height, with a light grip as the enable) → speed, roll → steering,
    tip down → reverse gear. Stateful (hysteresis, smoothing)."""

    def __init__(self, cal: Calibration, v_max: float = V_MAX, w_max: float = W_MAX, lever: bool = False,
                 expo: float = EXPO, grip: bool = False, full_left: float = 0.0, full_right: float = 0.0,
                 brake_model: "G.LDA | None" = None):
        if lever and cal.tip_up > -15:
            raise ValueError("lever mode needs arm_up takes (forearm raised to where stop feels natural)")
        self.cal, self.v_max, self.w_max, self.lever, self.expo = cal, v_max, w_max, lever, expo
        self.full = {1: full_left, -1: full_right}     # degrees from straight for a full turn; 0 = from calibration
        self.brake_model = brake_model
        self.grip = grip or not lever          # lever without --grip: no squeeze needed; a fist brakes
        self.armed = not lever or grip         # no-grip lever drives only after the arm was raised once
        self.engaged = self.reverse = self.braking = False
        self.squeezing = 0
        self.g: np.ndarray | None = None
        self.last: dict = {}

    def reset(self) -> None:
        """Forget the pose and any squeeze after a signal gap: a no-grip lever must be raised again before
        it drives, and nothing measured before the gap carries into the first ticks after it."""
        self.g = None
        self.squeezing = 0
        self.braking = self.engaged = self.reverse = False
        if self.lever and not self.grip:
            self.armed = False

    def feed_imu(self, samples: np.ndarray, srate: float = 50.0) -> None:
        alpha = 1 - math.exp(-1 / (GRAVITY_TAU_S * srate))
        for a in np.atleast_2d(samples)[:, 4:7]:
            self.g = a if self.g is None else self.g + alpha * (a - self.g)

    def steer(self, roll: float) -> float:
        side = self.cal.roll_left if roll > 0 else self.cal.roll_right
        full = max(self.full[1 if roll > 0 else -1] or STEER_FULL * abs(side), DEADZONE_DEG + 5)
        s = float(np.clip((abs(roll) - DEADZONE_DEG) / (full - DEADZONE_DEG), 0, 1))
        s = (1 - self.expo) * s + self.expo * s ** 3
        return math.copysign(s, roll)

    def step(self, emg_window: np.ndarray) -> tuple[float, float, str]:
        c = self.cal
        level = emg_level(emg_window)
        feats = G.features(emg_window)
        frac = (level - c.rest_level) / max(c.fist_level - c.rest_level, 1e-6)
        if self.grip:                                  # squeeze (or lever's light grip) enables
            on, off = (LEVER_GRIP_ON, LEVER_GRIP_OFF) if self.lever else (ENGAGE_ON, ENGAGE_OFF)
            self.engaged = frac > (off if self.engaged else on)
            brake = False
        else:                                          # no-grip lever: a firm fist is the brake
            if self.brake_model is not None:
                p = float(self.brake_model.proba(feats)[0][self.brake_model.classes.index("forward")])
                fist = p >= BRAKE_P and frac > BRAKE_MIN
            else:
                fist = frac > (BRAKE_OFF if self.braking else BRAKE_ON)
            self.squeezing = (self.squeezing + 1) if fist else 0
            self.braking = self.squeezing >= (1 if self.braking else BRAKE_FRAMES)
            brake, self.engaged = self.braking, not self.braking
        if self.g is None:                             # no orientation yet: never guess "level"
            self.last = {"level": level, "engaged": False, "armed": self.armed}
            return 0.0, 0.0, f"waiting for IMU  level {level:5.1f}"
        roll, tip = c.angles(self.g)
        self.reverse = tip > c.tip_down * (REVERSE_OFF if self.reverse else REVERSE_ON)
        if self.lever:
            stop, full = LEVER_STOP * c.tip_up, LEVER_FULL * c.tip_up
            throttle = float(np.clip((tip - stop) / (full - stop), 0, 1))
            raised = tip < stop                       # roll means nothing near vertical: don't judge it
            # no "raised too far" limit: past vertical the tilt folds back (110° up reads as 70°), which is
            # still the stop zone, so a raised arm can only ever stop the robot
            outside = (not raised and (roll > ENVELOPE * c.roll_left or roll < ENVELOPE * c.roll_right)
                       or tip > ENVELOPE * c.tip_down)
            if raised:
                self.armed = True
        else:
            throttle = float(np.clip(frac, 0, 1))
            outside = (roll > ENVELOPE * c.roll_left or roll < ENVELOPE * c.roll_right
                       or tip > ENVELOPE * c.tip_down or tip < -c.tip_down)
        if outside and not self.grip:
            self.armed = False                         # left the driving pose: raise the arm to re-arm
        self.last = {"level": level, "roll": roll, "tip": tip, "engaged": self.engaged, "brake": brake,
                     "armed": self.armed, "reverse": self.reverse, "outside": outside,
                     **{f"f{i}": round(float(v), 4) for i, v in enumerate(feats)}}
        where = f"level {level:5.1f}  roll {roll:+4.0f}°  tip {tip:+4.0f}°"
        if outside:
            return 0.0, 0.0, f"arm out of driving pose: stopped  {where}"
        if not self.armed:
            return 0.0, 0.0, f"raise your arm to start  {where}"
        if brake:
            return 0.0, 0.0, f"BRAKE (fist)  {where}"
        if not self.engaged:
            return 0.0, 0.0, f"D rest  {where}"
        if self.reverse:
            v, w = -V_REVERSE * (1.0 if self.lever else throttle), 0.0
        else:
            v = self.v_max * throttle
            w = self.w_max * self.steer(roll) if throttle > 0 else 0.0
        return v, w, f"{'R' if self.reverse else 'D'} go    {where}"


def train_brake(folder: str | Path) -> "G.LDA | None":
    """Fist (EMG takes labelled forward) vs every other recorded EMG pose, or None if the folder has no
    active non-fist takes to learn the difference from (then the brake falls back to the level rule)."""
    found, _ = G.load_recordings(folder, "Myo_EMG", ("forward",) + NOT_BRAKE, 8)
    if not any(label == "forward" for label, *_ in found) or not any(label not in ("forward", "rest")
                                                                      for label, *_ in found):
        return None
    X, y = [], []
    for label, x, srate, _ in found:
        for w in G.windows(x, srate or 200.0):
            X.append(G.features(w))
            y.append("forward" if label == "forward" else "rest")
    return G.LDA().fit(np.array(X), y)


# ------------------------------------------------------------------------------------- lidar assist
def assist(v: float, w: float, state: dict, ahead: tuple[float, float, float] = (0.0, 0.0, 0.0),
           gate: bool = True, w_max: float = W_MAX) -> tuple[float, float, str]:
    """Shared control: slow before an obstacle ahead, bend away from a close wall, and (gate=True) keep
    the lane through the next gate the driver is aimed at, see gate_assist(). The driver's
    direction always wins; reverse is untouched (the lidar only sees forward). `ahead` = (dx, dy, dθ):
    judge from where the robot will be when this command lands (LagModel.in_flight), not where it is."""
    scan = state.get("scan") if state else None
    if not scan or v <= 0:
        return v, w, ""
    r = np.asarray(scan["ranges"], dtype=float)
    ang = scan["angle_min"] + scan["angle_inc"] * np.arange(len(r))
    ok = np.isfinite(r) & (r < scan.get("range_max", 10.0))
    r_all = np.where(np.isfinite(r), r, scan.get("range_max", 10.0))   # every beam, in order (for posts)
    x_all, y_all = LIDAR_X + r_all * np.cos(ang), r_all * np.sin(ang)
    dx, dy, dth = ahead
    if dx or dy or dth:                                   # into the predicted robot frame
        c, s_ = math.cos(dth), math.sin(dth)
        x_all, y_all = c * (x_all - dx) + s_ * (y_all - dy), -s_ * (x_all - dx) + c * (y_all - dy)
    x, y = x_all[ok], y_all[ok]                           # robot frame, x forward; hits only

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
    nudge = NUDGE_MAX * float(np.clip(push, -1, 1)) * scale   # stopped at a wall: no turning on its own

    v2, w2 = v * scale, w + nudge
    note = []
    if scale < 0.99:
        note.append(f"slow {scale:.0%}")
    if abs(nudge) > 0.05:
        note.append("nudge " + ("right" if nudge < 0 else "left"))

    if gate:                                              # lane keeping through the next gate
        g = gate_assist(x_all, y_all, r_all, w_max)
        if g is not None:
            w2 += g["w"]
            v2 = min(v2, g["v_cap"])
            note.append(f"gate {g['dist']:.1f} m " + ("→" if g["w"] < -0.02 else "←" if g["w"] > 0.02 else "·"))
    return v2, w2, ", ".join(note)


# ------------------------------------------------------------------------------------ gate assist
def find_posts(x: np.ndarray, y: np.ndarray, r: np.ndarray) -> list[tuple[float, float]]:
    """Gate posts in the scan: islands of 1-3 adjacent beams much closer than the beams either side.
    x, y are the returns in the robot frame (in beam order), r their ranges."""
    posts: list[tuple[float, float]] = []
    n, i = len(r), 0
    while i < n:
        if r[i] < GATE_POST_RANGE:
            j = i
            while j + 1 < n and abs(r[j + 1] - r[i]) < 0.15:
                j += 1
            left_bg = r[i - 1] if i > 0 else np.inf
            right_bg = r[j + 1] if j + 1 < n else np.inf
            if j - i + 1 <= 3 and left_bg - r[i] > 0.4 and right_bg - r[i] > 0.4:
                k = (i + j) // 2
                posts.append((float(x[k]), float(y[k])))
            i = j + 1
        else:
            i += 1
    return posts


def find_gate(x: np.ndarray, y: np.ndarray, r: np.ndarray) -> dict | None:
    """The nearest plausible gate ahead: midpoint, unit normal (the way to cross it), width, distance."""
    posts = find_posts(x, y, r)
    best = None
    for a in range(len(posts)):
        for b in range(a + 1, len(posts)):
            (x1, y1), (x2, y2) = posts[a], posts[b]
            width = math.hypot(x1 - x2, y1 - y2)
            if not GATE_WIDTH[0] <= width <= GATE_WIDTH[1]:
                continue
            mx, my = (x1 + x2) / 2, (y1 + y2) / 2
            d = math.hypot(mx, my)
            if mx > 0.2 and d <= GATE_RANGE and (best is None or d < best["dist"]):
                nx, ny = -(y2 - y1) / width, (x2 - x1) / width
                if nx < 0:
                    nx, ny = -nx, -ny                    # point away from us
                best = {"mid": (mx, my), "normal": (nx, ny), "width": width, "dist": d,
                        "posts": [(x1, y1), (x2, y2)]}
    return best


def gate_assist(x: np.ndarray, y: np.ndarray, r: np.ndarray, w_max: float = W_MAX) -> dict | None:
    """Lane keeping for gates: a small, bounded steering correction toward the shortest smooth path
    through the nearest gate the driver is ALREADY aimed at, plus a speed cap that makes that path
    drivable. The path is one arc from the robot (tangent to its heading) to an aim point on the gate's
    centreline a little before the gate, then straight through. Nothing if no gate is ahead, if the
    driver points elsewhere (> GATE_CONE_DEG), or in the last 30 cm. Never picks a gate on its own."""
    g = find_gate(x, y, r)                                # x, y, r: every beam in order, r = range
    if g is None:
        return None
    mx, my = g["mid"]; nx, ny = g["normal"]
    L = min(GATE_LOOKAHEAD[1], max(GATE_LOOKAHEAD[0], 0.5 * g["dist"]))
    px, py = mx - nx * L, my - ny * L                     # aim point on the centreline before the gate
    if px < 0.15:
        px, py = mx, my
    err = math.atan2(py, px)                              # + = aim point is to our left
    if abs(err) > math.radians(GATE_CONE_DEG):
        return None
    kappa = 2 * py / max(px * px + py * py, 1e-6)        # the arc through (px, py) tangent to our heading
    v_cap = (GATE_TURN_COMFORT * w_max) / abs(kappa) if abs(kappa) > 1e-6 else float("inf")
    fade = min(1.0, max(g["dist"] - 0.3, 0.0) / 0.5)
    w = max(-GATE_NUDGE_MAX, min(GATE_NUDGE_MAX, GATE_NUDGE_GAIN * err)) * fade
    return {"w": w, "v_cap": v_cap, "dist": g["dist"], "err": err, "aim": (px, py), "gate": g}


# ------------------------------------------------------------------------------------- link lag
LAG_ON_S = 0.1        # compensate only when the measured command lag is at least this
LAG_STEER_K = 1.0     # lag-aware steering: turn gain × 1 / (1 + K · lag s), e.g. 300 ms → 0.77


class LagModel:
    """Commands reach the robot `latency` s after we send them (the sim delays commands, not state).
    Measured from state.cmd_echo_t (the `t` of the last applied command, protocol §2); the commands
    still in flight say where the robot will be when the next one lands."""

    def __init__(self, hz: float = 20.0):
        self.hz = hz
        self.sent: deque = deque(maxlen=200)          # (t_sent, v, w)
        self.samples: deque = deque(maxlen=40)        # recent (arrival − echo) in s

    def sent_cmd(self, t: float, v: float, w: float) -> None:
        self.sent.append((t, v, w))

    def observe(self, now: float, echo_t: float | None) -> None:
        if echo_t and self.sent and echo_t >= self.sent[0][0]:    # not a previous controller's command
            self.samples.append(max(0.0, now - echo_t))

    @property
    def latency(self) -> float:
        """The smallest recent lag: a dropped command only makes the echo look older, never newer."""
        return min(self.samples) if self.samples else 0.0

    def in_flight(self, now: float, dt: float = 0.01) -> tuple[float, float, float]:
        """(dx, dy, dθ) the robot will move, in its current frame, before a command sent now lands."""
        lag = self.latency
        if lag < LAG_ON_S or not self.sent:
            return 0.0, 0.0, 0.0
        cmds = list(self.sent)
        x = y = th = 0.0
        i = 0
        for k in range(int(lag / dt)):
            due = now + k * dt - lag                  # commands sent up to here are being applied
            while i + 1 < len(cmds) and cmds[i + 1][0] <= due:
                i += 1
            _, v, w = cmds[i] if cmds[i][0] <= due else (0, 0.0, 0.0)
            x, y, th = x + v * math.cos(th) * dt, y + v * math.sin(th) * dt, th + w * dt
        return x, y, th

    def steer_gain(self, k: float = LAG_STEER_K) -> float:
        lag = self.latency
        return 1.0 / (1.0 + k * lag) if lag >= LAG_ON_S else 1.0


# ------------------------------------------------------------------------------------- synthetic
def toy_gravity() -> dict[str, np.ndarray]:
    """Gravity direction for each pose on a band whose x axis runs along the forearm."""
    def rot(roll: float, tip: float) -> np.ndarray:
        r, t = math.radians(roll), math.radians(tip)
        return unit(np.array([math.sin(t), math.cos(t) * math.sin(r), math.cos(t) * math.cos(r)]))
    return {"neutral": rot(0, 0), "roll_left": rot(70, 5), "roll_right": rot(-50, 0), "tip_down": rot(0, 55),
            "arm_up": rot(0, -70)}


def measured_gravity(folder: str | Path) -> dict[str, np.ndarray]:
    found, _ = G.load_recordings(folder, "Myo_IMU", ALL_POSES, 10)
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
