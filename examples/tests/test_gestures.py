"""gestures.py: features, the LDA, leave-one-take-out folds, the decision rules and the take format."""
import numpy as np
import pytest

import gestures as G


def synthetic_takes(seed=0, shift=0, takes=2, seconds=4.0):
    rng = np.random.default_rng(seed)
    return [G.Take(g, G.synth_emg(r, seconds, 200.0, rng, shift), 200.0)
            for g, r in G.toy_rms().items() for _ in range(takes)]


def test_features_ignore_offset_and_scale_with_activity():
    rng = np.random.default_rng(0)
    x = rng.normal(0, 10, (40, 8))
    assert np.allclose(G.features(x), G.features(x + 50))
    assert G.features(x * 3)[:8].min() > G.features(x)[:8].max() - 1   # log RMS grows with amplitude
    assert G.features(x).shape == (16,)


def test_toy_levels_match_the_measured_rest_and_squeeze():
    rms = G.toy_rms()
    assert rms["rest"].mean() == pytest.approx(G.REST_LEVEL)
    assert rms["forward"].mean() == pytest.approx(G.SQUEEZE_LEVEL)


def test_windows_trim_the_ends_but_keep_short_takes():
    long = np.zeros((1000, 8))
    n_long = len(list(G.windows(long, 200.0)))
    assert n_long == (1000 - 2 * 100 - 40) // 10 + 1
    assert len(list(G.windows(np.zeros((150, 8)), 200.0))) > 0


def test_lda_separates_the_toy_gestures_on_unseen_takes():
    conf = G.evaluate(synthetic_takes())
    assert np.trace(conf) / conf.sum() > 0.95
    assert (conf.sum(axis=1) > 0).all()        # every gesture was tested


def test_a_single_take_per_gesture_is_split_not_skipped():
    takes = synthetic_takes(takes=1)
    assert len(G.folds(takes)) == 2 * len(takes)
    assert (G.evaluate(takes).sum(axis=1) > 0).all()


def test_cross_testing_trains_on_one_set_and_judges_the_other():
    conf = G.evaluate(synthetic_takes(seed=0), synthetic_takes(seed=1))
    assert conf.sum() == sum(len(t.windows()) for t in synthetic_takes(seed=1))


def test_proba_rows_sum_to_one():
    X, y, _ = G.dataset(synthetic_takes(takes=1))
    p = G.LDA().fit(X, y).proba(X[:5])
    assert np.allclose(p.sum(axis=1), 1.0)


def test_commands_have_the_right_signs_and_rest_stops():
    assert G.command("rest", 1.0) == (0.0, 0.0)
    v, w = G.command("forward", 1.0)
    assert v == G.V_FORWARD and w == 0
    assert G.command("reverse", 1.0)[0] < 0
    assert G.command("left", 1.0)[1] > 0 > G.command("right", 1.0)[1]
    assert G.command("forward", 0.0) == (0.0, 0.0)


def test_intensity_runs_from_rest_to_the_gesture_level():
    model = G.train(synthetic_takes(takes=1))
    rest, fist = model.levels["rest"], model.levels["forward"]
    assert model.intensity("forward", rest) == 0.0
    assert model.intensity("forward", fist) == pytest.approx(1.0)
    assert model.intensity("forward", 10 * fist) == 1.0


def test_decider_stops_when_unsure_and_ignores_one_stray_window():
    d = G.Decider(votes=5, confidence=0.8)
    assert d.update("forward", 0.5) == "rest"               # unsure → stop
    for _ in range(4):
        d.update("forward", 0.99)
    assert d.update("left", 0.99) == "forward"              # one stray left is outvoted


def test_take_round_trips_through_the_viewer_format(tmp_path):
    take = synthetic_takes(takes=1, seconds=1.0)[1]
    G.write_take(tmp_path / "t" / "forward_1.csv", take, "t", "20261022_000000")
    G.write_take(tmp_path / "t" / "forward-left_1.csv", G.Take("forward-left", take.emg, 200.0), "t", "x")
    (tmp_path / "t" / "wave_1.csv").write_text("# label: wave\n#\ntimestamp,a\n0,1\n")
    loaded, _ = G.load_takes(tmp_path)
    assert [t.label for t in loaded] == ["forward", "forward"]     # "forward-left" counts as forward
    assert np.array_equal(loaded[0].emg, take.emg)


def test_imu_takes_are_kept_apart_from_emg_takes(tmp_path):
    imu = G.Take("rest", np.ones((10, 10)), 50.0)
    G.write_take(tmp_path / "rest_imu.csv", imu, "t", "x", "Myo_IMU", [f"c{i}" for i in range(10)])
    assert G.load_takes(tmp_path)[0] == []
    found, _ = G.load_recordings(tmp_path, "Myo_IMU", ("rest",), 10)
    assert len(found) == 1 and np.allclose(found[0][1], 1.0)
