"""armdrive.py: calibration from takes, squeeze/roll/tip → (v, w), and the lidar assist."""
import math

import numpy as np
import pytest

import armdrive as A
import gestures as G

RNG = np.random.default_rng(0)


def toy_calibration():
    takes = [G.Take(g, G.synth_emg(G.toy_rms()[g], 3.0, 200.0, RNG), 200.0) for g in ("rest", "forward")]
    poses = {p: [A.synth_imu(g, 2.0, 50.0, RNG)] for p, g in A.toy_gravity().items()}
    return A.calibrate(takes, poses)


def control_in(pose: str, gesture: str) -> tuple[float, float]:
    c = A.ArmControl(toy_calibration())
    c.feed_imu(A.synth_imu(A.toy_gravity()[pose], 2.0, 50.0, RNG))
    x = G.synth_emg(G.toy_rms()[gesture], 0.2, 200.0, RNG)
    v, w, _ = c.step(x)
    return v, w


def test_calibration_recovers_the_toy_angles():
    cal = toy_calibration()
    assert cal.roll_left == pytest.approx(70, abs=3)
    assert cal.roll_right == pytest.approx(-50, abs=3)
    assert cal.tip_down == pytest.approx(55, abs=3)
    assert cal.fist_level > 5 * cal.rest_level


def test_calibration_works_however_the_band_is_worn():
    flip = np.diag([-1.0, -1.0, 1.0])            # band turned around: x and y reversed
    takes = [G.Take(g, G.synth_emg(G.toy_rms()[g], 3.0, 200.0, RNG), 200.0) for g in ("rest", "forward")]
    poses = {p: [A.synth_imu(flip @ g, 2.0, 50.0, RNG)] for p, g in A.toy_gravity().items()}
    cal = A.calibrate(takes, poses)
    assert cal.roll_left > 60 and cal.roll_right < -40 and cal.tip_down > 45


def test_missing_takes_are_named():
    with pytest.raises(ValueError, match="tip_down"):
        A.calibrate([G.Take("rest", np.zeros((400, 8)), 200.0), G.Take("forward", np.zeros((400, 8)), 200.0)],
                    {"neutral": [np.ones((10, 10))]})


@pytest.mark.parametrize("pose,gesture,expect", [
    ("neutral", "rest", "stop"), ("roll_left", "rest", "stop"),          # rolling alone never moves
    ("neutral", "forward", "ahead"), ("roll_left", "forward", "left"),
    ("roll_right", "forward", "right"), ("tip_down", "forward", "back"),
])
def test_squeeze_roll_tip(pose, gesture, expect):
    v, w = control_in(pose, gesture)
    got = {"stop": (v == 0 and w == 0), "ahead": (v > 0.5 and abs(w) < 0.1), "left": (v > 0.5 and w > 1.0),
           "right": (v > 0.5 and w < -1.0), "back": (v < 0 and w == 0)}
    assert got[expect], (v, w)


def test_steering_has_a_deadzone_and_saturates():
    c = A.ArmControl(toy_calibration())
    assert c.steer(A.DEADZONE_DEG - 1) == 0
    assert c.steer(90) == 1.0 and c.steer(-90) == -1.0
    assert 0 < c.steer(25) < 1


def test_throttle_hysteresis():
    c = A.ArmControl(toy_calibration())
    cal = c.cal
    c.feed_imu(A.synth_imu(A.toy_gravity()["neutral"], 1.0, 50.0, RNG))
    mid = cal.rest_level + 0.2 * (cal.fist_level - cal.rest_level)    # between OFF (0.15) and ON (0.25)
    x = RNG.normal(0, 1, (40, 8))
    x *= mid / G.channel_rms(x).mean()
    assert c.step(x)[0] == 0                       # not enough to start ...
    c.engaged = True
    assert c.step(x)[0] > 0                        # ... but enough to keep going


def scan_with_wall(ahead=None, left=None):
    ang = -2.356 + 0.02618 * np.arange(180)
    r = np.full(180, 10.0)
    if ahead is not None:                          # a wall across the path, `ahead` m in front of the lidar
        front = np.abs(np.cos(ang)) > 1e-3
        r = np.where(front & (np.cos(ang) > 0), np.minimum(r, ahead / np.cos(ang).clip(1e-3)), r)
    if left is not None:                           # a wall alongside, `left` m to the left of the lidar
        r = np.where(np.sin(ang) > 1e-3, np.minimum(r, left / np.sin(ang).clip(1e-3)), r)
    return {"scan": {"angle_min": -2.356, "angle_inc": 0.02618, "range_max": 10.0, "ranges": r.tolist()}}


def test_assist_stops_before_a_wall_and_passes_open_space():
    assert A.assist(1.0, 0.0, scan_with_wall())[:2] == (1.0, 0.0)
    v, _, note = A.assist(1.0, 0.0, scan_with_wall(ahead=A.ROBOT_HALF_LENGTH - A.LIDAR_X + 0.05))
    assert v == 0 and "slow" in note
    v_mid, _, _ = A.assist(1.0, 0.0, scan_with_wall(ahead=0.8))
    assert 0 < v_mid < 1


def test_assist_nudges_away_from_a_close_side_wall_but_never_reverses_or_takes_over():
    _, w, note = A.assist(0.5, 0.0, scan_with_wall(left=A.ROBOT_HALF_WIDTH + 0.05))
    assert -A.NUDGE_MAX <= w < 0 and "right" in note
    assert A.assist(-0.4, 0.0, scan_with_wall(ahead=0.2)) == (-0.4, 0.0, "")   # reverse untouched
    assert A.assist(1.0, 0.3, {}) == (1.0, 0.3, "")                            # no scan: no change


def test_calibration_round_trips(tmp_path):
    cal = toy_calibration()
    cal.save(tmp_path / "c.json")
    back = A.Calibration.load(tmp_path / "c.json")
    g = A.toy_gravity()["roll_left"]
    assert back.angles(g) == pytest.approx(cal.angles(g))
    assert not math.isnan(back.angles(g)[0])


def test_arm_out_of_the_driving_pose_stops_even_when_squeezing():
    c = A.ArmControl(toy_calibration())
    c.feed_imu(A.synth_imu(np.array([-0.95, 0.0, -0.3]), 2.0, 50.0, RNG))   # arm tipped far up
    v, w, line = c.step(G.synth_emg(G.toy_rms()["forward"], 0.2, 200.0, RNG))
    assert (v, w) == (0.0, 0.0) and "out of driving pose" in line


def test_recenter_moves_straight_but_keeps_the_turn_limits_in_place():
    cal = toy_calibration()
    left_abs = A.toy_gravity()["roll_left"]
    tilted = A.unit(np.array([0.0, math.sin(math.radians(20)), math.cos(math.radians(20))]))  # held 20° left
    roll, _ = cal.recenter(tilted)
    assert roll == pytest.approx(20, abs=2)
    assert cal.angles(tilted)[0] == pytest.approx(0, abs=1)                 # that pose now drives straight
    assert cal.angles(left_abs)[0] == pytest.approx(cal.roll_left, abs=2)   # full left is where it was
    assert cal.roll_left == pytest.approx(50, abs=3) and cal.roll_right == pytest.approx(-70, abs=3)


def light_grip_rms():
    rms = G.toy_rms()
    return rms["rest"] + 0.3 * (rms["forward"] - rms["rest"])     # ~30% of the squeeze range


def lever_in(pose_or_gravity, grip=True):
    c = A.ArmControl(toy_calibration(), lever=True)
    g = A.toy_gravity()[pose_or_gravity] if isinstance(pose_or_gravity, str) else pose_or_gravity
    c.feed_imu(A.synth_imu(g, 2.0, 50.0, RNG))
    rms = light_grip_rms() if grip else G.toy_rms()["rest"]
    v, w, _ = c.step(G.synth_emg(rms, 0.2, 200.0, RNG))
    return v, w


def tipped(deg):
    t = math.radians(deg)
    return np.array([math.sin(t), 0.0, math.cos(t)])


def test_lever_arm_height_is_the_throttle_with_a_light_grip_enable():
    assert lever_in("arm_up") == (0.0, 0.0)                     # raised: stop
    v_level, w_level = lever_in("neutral")
    assert v_level == pytest.approx(A.V_MAX) and abs(w_level) < 0.1   # level + light grip: full speed
    v_mid, _ = lever_in(tipped(-25))
    assert 0 < v_mid < A.V_MAX                                   # half raised: in between
    assert lever_in("neutral", grip=False) == (0.0, 0.0)        # hand relaxed: stop, whatever the arm does
    assert lever_in("tip_down")[0] == -A.V_REVERSE              # tipped down: reverse
    v, w = lever_in("roll_left")
    assert v > 0 and w > 1.0                                     # steering as in arm mode


def test_lever_needs_arm_up_takes():
    cal = toy_calibration()
    cal.tip_up = 0.0
    with pytest.raises(ValueError, match="arm_up"):
        A.ArmControl(cal, lever=True)
