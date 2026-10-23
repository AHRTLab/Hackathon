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


def lever_drive(c, pose_or_gravity, rms):
    g = A.toy_gravity()[pose_or_gravity] if isinstance(pose_or_gravity, str) else pose_or_gravity
    c.feed_imu(A.synth_imu(g, 2.0, 50.0, RNG))
    v, w, line = c.step(G.synth_emg(rms, 0.2, 200.0, RNG))
    return v, w, line


def tipped(deg):
    t = math.radians(deg)
    return np.array([math.sin(t), 0.0, math.cos(t)])


def test_lever_up_stops_forward_goes_without_any_squeeze():
    c, rest = A.ArmControl(toy_calibration(), lever=True), G.toy_rms()["rest"]
    v, w, line = lever_drive(c, "neutral", rest)
    assert (v, w) == (0.0, 0.0) and "raise" in line               # not armed yet: no lurch at start
    assert lever_drive(c, "arm_up", rest)[:2] == (0.0, 0.0)        # raised: armed, stopped
    v, w, _ = lever_drive(c, "neutral", rest)
    assert v == pytest.approx(A.V_MAX) and abs(w) < 0.1           # forward, hand relaxed: full speed
    assert 0 < lever_drive(c, tipped(-25), rest)[0] < A.V_MAX      # half raised: in between
    v, w, _ = lever_drive(c, "roll_left", rest)
    assert v > 0 and w > 1.0                                       # steering as in arm mode
    assert lever_drive(c, "tip_down", rest)[0] == -A.V_REVERSE     # tipped down: reverse


def test_lever_fist_brakes_and_leaving_the_pose_needs_a_re_arm():
    c, rest = A.ArmControl(toy_calibration(), lever=True), G.toy_rms()["rest"]
    lever_drive(c, "arm_up", rest)
    fist = rest + 0.8 * (G.toy_rms()["forward"] - rest)            # a fist, not a hard one (see fist_at)
    for _ in range(A.BRAKE_FRAMES - 1):
        assert lever_drive(c, "neutral", fist)[0] > 0              # a short grip: ignored
    v, w, line = lever_drive(c, "neutral", fist)
    assert (v, w) == (0.0, 0.0) and "BRAKE" in line                # held BRAKE_FRAMES: brake
    assert lever_drive(c, "neutral", rest)[0] > 0                  # let go of the fist: drives again
    assert lever_drive(c, tipped(89), rest)[2].startswith("arm out")   # arm dropped straight down
    v, _, line = lever_drive(c, "neutral", rest)
    assert v == 0 and "raise" in line                              # must raise again before it drives


def test_lever_grip_option_needs_a_light_grip():
    c = A.ArmControl(toy_calibration(), lever=True, grip=True)
    assert lever_drive(c, "neutral", G.toy_rms()["rest"])[:2] == (0.0, 0.0)
    assert lever_drive(c, "neutral", light_grip_rms())[0] == pytest.approx(A.V_MAX)


def test_lever_needs_arm_up_takes():
    cal = toy_calibration()
    cal.tip_up = 0.0
    with pytest.raises(ValueError, match="arm_up"):
        A.ArmControl(cal, lever=True)


def test_expo_softens_small_rolls_but_keeps_full_turn():
    cal = toy_calibration()
    lin, soft = A.ArmControl(cal, expo=0.0), A.ArmControl(cal, expo=0.5)
    small = A.DEADZONE_DEG + 8
    assert 0 < soft.steer(small) < lin.steer(small)
    assert soft.steer(90) == lin.steer(90) == 1.0
    assert lin.steer(-small) < soft.steer(-small) < 0             # right side softened too (own range)


def test_lever_arm_holding_activity_does_not_brake():
    c = A.ArmControl(toy_calibration(), lever=True)
    cal, rest = c.cal, G.toy_rms()["rest"]
    lever_drive(c, "arm_up", rest)
    holding = rest * (cal.rest_level + 0.35 * (cal.fist_level - cal.rest_level)) / cal.rest_level
    for _ in range(10):
        v, _, line = lever_drive(c, "neutral", holding)
    assert v > 0 and "BRAKE" not in line


def test_full_turn_angles_can_be_set_per_side():
    c = A.ArmControl(toy_calibration(), expo=0.0, full_left=50, full_right=28)
    assert c.steer(50) == 1.0 and c.steer(-28) == -1.0
    assert c.steer(-20) < -0.4 and c.steer(20) < 0.4              # the right side is quicker now


def test_steering_tuned_from_drive_logs(tmp_path):
    import myo_gestures as M
    log = tmp_path / "drive_1_lever.csv"
    rolls = list(np.linspace(0, 70, 60)) + list(np.linspace(0, -32, 60))
    log.write_text("t,roll,outside,v\n" + "".join(f"{i},{r},False,0.5\n" for i, r in enumerate(rolls)))
    tuned = M.steering_from_logs([log])
    turning = [r for r in rolls[:60] if r > A.DEADZONE_DEG]
    assert tuned["full_left"] == pytest.approx(M.STEER_REACH * np.percentile(turning, 95), abs=0.1)
    assert tuned["full_right"] < tuned["full_left"]
    with pytest.raises(ValueError):
        M.steering_from_logs([])


def test_brake_pattern_ignores_strong_non_fist_activity():
    # a "turning" pattern as strong as the fist, but on other electrodes, must not brake
    rms = G.toy_rms()
    turning = np.roll(rms["forward"], 4)                         # same strength, different muscles
    takes = {"forward": rms["forward"], "rest": rms["rest"], "roll_left": turning}
    X, y = [], []
    for label, r in takes.items():
        for w in G.windows(G.synth_emg(r, 4.0, 200.0, RNG), 200.0):
            X.append(G.features(w))
            y.append("forward" if label == "forward" else "rest")
    model = G.LDA().fit(np.array(X), y)
    c = A.ArmControl(toy_calibration(), lever=True, brake_model=model)
    lever_drive(c, "arm_up", rms["rest"])
    for _ in range(5):
        v, _, line = lever_drive(c, "neutral", turning)
    assert v > 0 and "BRAKE" not in line
    for _ in range(A.BRAKE_FRAMES + 1):
        v, _, line = lever_drive(c, "neutral", rms["forward"])
    assert v == 0 and "BRAKE" in line


def test_train_brake_needs_other_active_poses(tmp_path):
    rng = np.random.default_rng(1)
    for label in ("forward", "rest"):
        G.write_take(tmp_path / f"{label}.csv", G.Take(label, G.synth_emg(G.toy_rms()[label], 2.0, 200.0, rng), 200.0),
                     "t", "x")
    assert A.train_brake(tmp_path) is None                       # only rest to compare with: level rule
    G.write_take(tmp_path / "roll_left.csv",
                 G.Take("roll_left", G.synth_emg(np.roll(G.toy_rms()["forward"], 4), 2.0, 200.0, rng), 200.0), "t", "x")
    assert A.train_brake(tmp_path) is not None


# ------------------------------------------------------------------- link lag (model of the sim's impairment)
def wall_scan(gap_from_lidar: float) -> dict:
    """Lidar scan of a flat wall `gap_from_lidar` m ahead of the lidar."""
    ang = -2.356 + 0.02618 * np.arange(180)
    c = np.cos(ang)
    r = np.where(c > 1e-3, gap_from_lidar / np.clip(c, 1e-3, None), 10.0)
    return {"scan": {"angle_min": -2.356, "angle_inc": 0.02618, "range_max": 10.0, "ranges": np.minimum(r, 10).tolist()}}


def drive_at_wall(latency: float, compensate: bool, wall=3.0, hz=20.0, seconds=6.0):
    """Full throttle at a wall through a link that delays every command by `latency` (as the sim's
    impairment does). Returns the closest the front bumper got to the wall (m; < 0 = collision)."""
    lag = A.LagModel(hz)
    queue, applied, vel, x = [], (0.0, 0.0), 0.0, 0.0
    dt, closest = 0.01, wall
    for k in range(int(seconds / dt)):
        now = k * dt
        if k % int(1 / (hz * dt)) == 0:                          # controller tick
            if queue:
                lag.observe(now, max((t for t, _, _ in queue if t + latency <= now), default=None))
            front = wall - x - A.LIDAR_X
            ahead = lag.in_flight(now) if compensate else (0.0, 0.0, 0.0)
            v, w, _ = A.assist(1.0, 0.0, wall_scan(front), ahead)
            queue.append((now, v, w))
            lag.sent_cmd(now, v, w)
        while queue and queue[0][0] + latency <= now:            # the link releases late commands
            applied = queue.pop(0)[1:]
        target = applied[0]
        a = 2.0 if target > vel else -4.0                        # protocol: speed up 2 m/s², brake 4 m/s²
        vel = min(target, vel + a * dt) if a > 0 else max(target, vel + a * dt)
        x += vel * dt
        closest = min(closest, wall - x - A.ROBOT_HALF_LENGTH)
    return closest


def test_lag_model_measures_latency_and_predicts_the_in_flight_path():
    lag = A.LagModel()
    for i in range(20):
        lag.sent_cmd(i * 0.05, 1.0, 0.0)
        lag.observe(i * 0.05, i * 0.05 - 0.3 if i * 0.05 >= 0.3 else None)
    assert lag.latency == pytest.approx(0.3, abs=1e-9)
    dx, dy, dth = lag.in_flight(0.95)
    assert dx == pytest.approx(0.3, abs=0.02) and abs(dy) < 1e-6 and dth == 0  # 300 ms at 1 m/s still to come
    assert lag.steer_gain() == pytest.approx(1 / 1.3)
    quick = A.LagModel()
    quick.observe(1.0, 0.98)
    assert quick.in_flight(1.0) == (0.0, 0.0, 0.0) and quick.steer_gain() == 1.0   # 20 ms: no compensation


def test_lag_compensation_keeps_the_assist_margin_as_lag_grows():
    assert drive_at_wall(0.0, False) == pytest.approx(drive_at_wall(0.0, True))   # no lag: identical
    for lag in (0.3, 0.5):
        assert drive_at_wall(lag, True) >= drive_at_wall(lag, False)
    assert drive_at_wall(0.5, False) < 0.05 < 0.1 < drive_at_wall(0.5, True)      # 500 ms: plain nearly hits


def test_blind_schedule_is_balanced_hidden_and_renews(tmp_path):
    import myo_gestures as M
    got = [M.blind_condition(tmp_path, 8) for _ in range(8)]
    assert [k for _, k, _ in got] == list(range(1, 9)) and sum(on for on, _, _ in got) == 4
    assert M.blind_condition(tmp_path, 8)[1] == 1                    # used up: a fresh schedule starts
    key = (tmp_path / "blind" / "key.csv").read_text().splitlines()
    assert key[0] == "session,of,started,lag_comp" and len(key) == 10


# ------------------------------------------------------------------- review round 1 regressions
def test_a_truncated_drive_log_or_key_file_never_breaks_loading(tmp_path):
    rng = np.random.default_rng(2)
    for label in ("rest", "forward"):
        G.write_take(tmp_path / f"{label}.csv", G.Take(label, G.synth_emg(G.toy_rms()[label], 2.0, 200.0, rng), 200.0),
                     "t", "x")
    for p, g in A.toy_gravity().items():
        G.write_take(tmp_path / f"{p}.csv", G.Take(p, A.synth_imu(g, 2.0, 50.0, rng), 50.0), "t", "x",
                     "Myo_IMU", A.IMU_CHANNELS)
    (tmp_path / "drives").mkdir()
    (tmp_path / "drives" / "drive_1_lever.csv").write_text("t,level,roll\n0.1,2.0,3.0\n0.2,2.1")   # cut mid-row
    (tmp_path / "blind").mkdir()
    (tmp_path / "blind" / "key.csv").write_text("session,of,started,lag_comp\n1,8,x,True\n")
    (tmp_path / "rest_cut.csv").write_text("# label: rest\n# stream: Myo_EMG\n#\ntimestamp,a,b\n0,1\n1,2,3,4\n")
    cal, notes = A.load_calibration(tmp_path)
    assert cal.fist_level > cal.rest_level
    takes, notes = G.load_takes(tmp_path)
    assert {t.label for t in takes} == {"rest", "forward"}


def test_blind_schedule_refuses_a_different_length_mid_way(tmp_path):
    import myo_gestures as M
    M.blind_condition(tmp_path, 8)
    with pytest.raises(SystemExit, match="8-session"):
        M.blind_condition(tmp_path, 4)


def test_assist_never_turns_a_stopped_robot_on_its_own():
    ang = -2.356 + 0.02618 * np.arange(180)
    ahead = A.ROBOT_HALF_LENGTH - A.LIDAR_X + 0.05              # wall just in front of the bumper
    side = A.ROBOT_HALF_WIDTH + 0.05                           # and a wall close on the left
    r = np.full(180, 10.0)
    r = np.where(np.cos(ang) > 1e-3, np.minimum(r, ahead / np.clip(np.cos(ang), 1e-3, None)), r)
    r = np.where(np.sin(ang) > 1e-3, np.minimum(r, side / np.clip(np.sin(ang), 1e-3, None)), r)
    v, w, _ = A.assist(1.0, 0.0, {"scan": {"angle_min": -2.356, "angle_inc": 0.02618, "range_max": 10.0,
                                            "ranges": r.tolist()}})
    assert v == 0 and w == 0


def test_steering_tuning_ignores_straight_line_wobble(tmp_path):
    import myo_gestures as M
    log = tmp_path / "drive_1_lever.csv"
    rolls = [3.0, -3.0] * 400 + list(np.linspace(20, 60, 40)) + list(np.linspace(-20, -40, 40))  # mostly straight
    log.write_text("t,roll,outside,v\n" + "".join(f"{i},{r},False,0.5\n" for i, r in enumerate(rolls)))
    tuned = M.steering_from_logs([log])
    assert tuned["full_left"] > 40 and tuned["full_right"] > 25      # from the turns, not the wobble


# ------------------------------------------------------------------- review round 2: guards locked at their boundaries
def armed_lever(**kw):
    c = A.ArmControl(toy_calibration(), lever=True, **kw)
    lever_drive(c, "arm_up", G.toy_rms()["rest"])
    return c


def fist_at(frac: float) -> np.ndarray:
    """A fist-shaped RMS profile at `frac` of the rest → fist range (1.0 = the calibration fist)."""
    rms = G.toy_rms()
    return rms["rest"] + frac * (rms["forward"] - rms["rest"])


@pytest.mark.parametrize("frames,brakes", [(A.BRAKE_FRAMES - 1, False), (A.BRAKE_FRAMES, True)])
def test_brake_needs_exactly_the_full_hold(frames, brakes):
    c = armed_lever()
    for _ in range(frames):
        _, _, line = lever_drive(c, "neutral", fist_at(0.8))        # a fist, but not a hard one
    assert ("BRAKE" in line) is brakes


@pytest.mark.parametrize("frames,brakes", [(A.BRAKE_FAST_FRAMES - 1, False), (A.BRAKE_FAST_FRAMES, True)])
def test_a_hard_fist_brakes_after_the_short_hold(frames, brakes):
    c = armed_lever()
    for _ in range(frames):
        _, _, line = lever_drive(c, "neutral", fist_at(1.4))        # harder than the calibration fist
    assert ("BRAKE" in line) is brakes


def test_a_fist_pattern_below_the_minimum_strength_never_brakes():
    rms = G.toy_rms()
    cal = toy_calibration()
    weak_frac = A.BRAKE_MIN * 0.8                       # fist-shaped, but under BRAKE_MIN of the range
    weak = rms["rest"] + weak_frac * (rms["forward"] - rms["rest"])
    X, y = [], []
    for label, r in (("forward", rms["forward"]), ("forward", weak), ("rest", rms["rest"]),
                     ("rest", np.roll(rms["forward"], 4))):
        for w in G.windows(G.synth_emg(r, 4.0, 200.0, RNG), 200.0):
            X.append(G.features(w))
            y.append(label)
    c = A.ArmControl(cal, lever=True, brake_model=G.LDA().fit(np.array(X), y))
    lever_drive(c, "arm_up", rms["rest"])
    for _ in range(A.BRAKE_FRAMES + 3):
        v, _, line = lever_drive(c, "neutral", weak)
    assert "BRAKE" not in line and v > 0


@pytest.mark.parametrize("margin,arms", [(+5, False), (-5, True)])
def test_arming_happens_only_past_the_stop_angle(margin, arms):
    c = A.ArmControl(toy_calibration(), lever=True)
    stop = A.LEVER_STOP * c.cal.tip_up                 # negative: raised
    lever_drive(c, tipped(stop + margin), G.toy_rms()["rest"])
    assert c.armed is arms


@pytest.mark.parametrize("deg", [-70, -90, -110, -140])
def test_an_arm_raised_up_to_and_past_vertical_only_ever_stops(deg):
    c = armed_lever()
    assert lever_drive(c, tipped(deg), G.toy_rms()["rest"])[:2] == (0.0, 0.0)


def test_arm_dropped_past_the_envelope_stops_and_disarms():
    c = armed_lever()
    v, w, line = lever_drive(c, tipped(A.ENVELOPE * c.cal.tip_down + 5), G.toy_rms()["rest"])
    assert (v, w) == (0.0, 0.0) and line.startswith("arm out") and not c.armed


def test_no_imu_yet_means_stop_in_every_mode():
    for c in (A.ArmControl(toy_calibration(), lever=True, grip=True), A.ArmControl(toy_calibration())):
        v, w, line = c.step(G.synth_emg(G.toy_rms()["forward"], 0.2, 200.0, RNG))
        assert (v, w) == (0.0, 0.0) and "waiting for IMU" in line


def test_after_a_signal_gap_the_lever_must_be_raised_again():
    c = armed_lever()
    assert lever_drive(c, "neutral", G.toy_rms()["rest"])[0] > 0
    c.reset()                                           # what the drive loop does when a stream goes stale
    v, _, line = lever_drive(c, "neutral", G.toy_rms()["rest"])
    assert v == 0 and "raise" in line
    lever_drive(c, "arm_up", G.toy_rms()["rest"])
    assert lever_drive(c, "neutral", G.toy_rms()["rest"])[0] > 0


def test_empty_or_tiny_takes_are_skipped_not_turned_into_nan(tmp_path):
    rng = np.random.default_rng(3)
    for label in ("rest", "forward"):
        G.write_take(tmp_path / f"{label}.csv", G.Take(label, G.synth_emg(G.toy_rms()[label], 2.0, 200.0, rng), 200.0),
                     "t", "x")
    for p, g in A.toy_gravity().items():
        G.write_take(tmp_path / f"{p}.csv", G.Take(p, A.synth_imu(g, 2.0, 50.0, rng), 50.0), "t", "x",
                     "Myo_IMU", A.IMU_CHANNELS)
    for rows in (0, 1):
        G.write_take(tmp_path / f"neutral_bad{rows}.csv", G.Take("neutral", np.zeros((rows, 10)), 50.0), "t", "x",
                     "Myo_IMU", A.IMU_CHANNELS)
    cal, notes = A.load_calibration(tmp_path)
    assert all(map(math.isfinite, [cal.roll_left, cal.roll_right, cal.tip_down, cal.tip_up]))
    assert sum("only" in n for n in notes) == 2


def test_a_nan_calibration_is_refused():
    takes = [G.Take(g, G.synth_emg(G.toy_rms()[g], 3.0, 200.0, RNG), 200.0) for g in ("rest", "forward")]
    poses = {p: [A.synth_imu(g, 2.0, 50.0, RNG)] for p, g in A.toy_gravity().items()}
    poses["neutral"] = [np.full((20, 10), np.nan)]
    with pytest.raises(ValueError, match="NaN"):
        A.calibrate(takes, poses)


def test_lag_ignores_a_previous_controllers_echo():
    lag = A.LagModel()
    lag.sent_cmd(100.0, 0.0, 0.0)
    lag.observe(100.05, 10.0)                          # echo of a command sent long before we started
    assert lag.latency == 0.0
    lag.observe(100.35, 100.0)
    assert lag.latency == pytest.approx(0.35)


# ------------------------------------------------------------------------------------ gate assist
def scan_with_posts(posts, lidar_x=A.LIDAR_X):
    """Posts (x, y) in the robot frame, as 0.05 m cylinders seen by the 180-beam lidar."""
    ang = -2.356 + 0.02618 * np.arange(180)
    r = np.full(180, 10.0)
    for (px, py) in posts:
        px -= lidar_x
        perp = np.abs(px * np.sin(ang) - py * np.cos(ang))
        along = px * np.cos(ang) + py * np.sin(ang)
        hit = (along > 0) & (perp < 0.05)
        r = np.where(hit, np.minimum(r, along - np.sqrt(np.clip(0.05 ** 2 - perp ** 2, 0, None))), r)
    return {"scan": {"angle_min": -2.356, "angle_inc": 0.02618, "range_max": 10.0, "ranges": r.tolist()}}


def test_gate_assist_centres_a_gate_the_driver_is_aimed_at_and_is_bounded():
    gate = [(1.6, 0.65), (1.6, -0.35)]                     # 1 m wide, centre 0.15 m to our left
    v, w, note = A.assist(1.0, 0.0, scan_with_posts(gate))
    assert 0 < w <= A.GATE_NUDGE_MAX and "gate" in note   # a small nudge left
    assert v == pytest.approx(1.0)                         # posts beside the path: no slowing
    _, w0, _ = A.assist(1.0, 0.0, scan_with_posts(gate), gate=False)
    assert w0 == 0                                         # switched off: untouched


def test_gate_assist_ignores_gates_the_driver_is_not_aimed_at_far_away_or_lone_posts():
    off = [(1.5, -0.9), (1.5, -1.9)]                       # well to the right: outside the cone
    assert A.assist(1.0, 0.0, scan_with_posts(off))[1] == 0
    far = [(4.0, 0.5), (4.0, -0.5)]
    assert A.assist(1.0, 0.0, scan_with_posts(far))[1] == 0
    assert A.assist(1.0, 0.0, scan_with_posts([(1.5, 0.5)]))[1] == 0
    assert A.assist(0.0, 0.0, scan_with_posts([(1.6, 0.65), (1.6, -0.35)])) == (0.0, 0.0, "")  # stopped: nothing


def test_gate_assist_steers_a_blind_approach_through_the_posts():
    """Driver holds straight, 0.3 m off the centreline of a 1 m gate: without the assist the chassis
    clips a post; with it the robot crosses inside the posts."""
    def run(gate_on):
        x, y, yaw, v, dt, w_app = -2.5, -0.3, 0.0, 1.0, 0.05, 0.0
        for _ in range(80):
            posts = []
            for (wx, wy) in ((0, 0.5), (0, -0.5)):      # into the robot frame
                px, py = (wx - x) * math.cos(-yaw) - (wy - y) * math.sin(-yaw), (wx - x) * math.sin(-yaw) + (wy - y) * math.cos(-yaw)
                posts.append((px, py))
            _, w_cmd, _ = A.assist(v, 0.0, scan_with_posts(posts), gate=gate_on)
            w_app += float(np.clip(w_cmd - w_app, -12 * dt, 6 * dt))   # the bridge's yaw ramp
            yaw += w_app * dt
            x, y = x + v * math.cos(yaw) * dt, y + v * math.sin(yaw) * dt
            if x >= 0:
                return y
        return None
    assert abs(run(False)) + A.ROBOT_HALF_WIDTH > 0.5 - 0.05      # clips the post at y = -0.5
    assert abs(run(True)) + A.ROBOT_HALF_WIDTH < 0.5 - 0.05       # clean pass
