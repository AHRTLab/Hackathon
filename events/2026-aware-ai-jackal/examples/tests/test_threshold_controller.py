"""myo_threshold_controller.py math: channel grouping (robust to band rotation), deadband, mapping."""
import numpy as np
import pytest

import myo_threshold_controller as mtc

REST = np.full(8, 5.0)
FLEX = np.array([60, 55, 50, 40, 8, 7, 6, 9], float)     # flexors light up on channels 1-4
EXT = np.array([7, 8, 6, 9, 45, 60, 50, 55], float)      # extensors on 5-8


def test_group_channels_learns_the_two_groups():
    cal = mtc.group_channels(REST, FLEX, EXT)
    assert cal["a"] == [0, 1, 2, 3] and cal["b"] == [4, 5, 6, 7]
    assert cal["a_max"] == pytest.approx(np.mean(FLEX[:4] - 5)) and cal["b_max"] == pytest.approx(np.mean(EXT[4:] - 5))


def test_grouping_follows_a_rotated_band():
    shift = np.roll(np.arange(8), 3)                     # band rotated by 3 electrodes
    cal = mtc.group_channels(REST, FLEX[shift], EXT[shift])
    assert sorted(cal["a"]) == sorted(int(i) for i in np.flatnonzero(np.isin(shift, [0, 1, 2, 3])))


def test_degenerate_calibration_falls_back_to_halves():
    cal = mtc.group_channels(REST, REST, REST)           # gestures skipped
    assert cal["a"] == [0, 1, 2, 3] and cal["b"] == [4, 5, 6, 7] and cal["a_max"] > 0


def test_normalize_deadband_and_clip():
    assert mtc.normalize(0.10 * 50, 50) == 0.0           # under the 15 % deadband
    assert mtc.normalize(50, 50) == 1.0 and mtc.normalize(500, 50) == 1.0
    assert 0 < mtc.normalize(25, 50) < 1


def test_activations_and_twist():
    cal = mtc.group_channels(REST, FLEX, EXT)
    a, b = mtc.activations(FLEX, cal)                    # holding the flex gesture
    assert a == pytest.approx(1.0) and b == 0.0
    v, w = mtc.to_twist(a, b, vmax=0.8, wmax=1.5)
    assert v == pytest.approx(0.4) and w == pytest.approx(1.5)   # flex: forward-left
    assert mtc.to_twist(1, 1, 0.8, 1.5) == (pytest.approx(0.8), 0.0)   # fist: straight ahead
    assert mtc.to_twist(0, 0, 0.8, 1.5) == (0.0, 0.0)                 # rest: stop


def test_rms_window_removes_offset():
    win = mtc.RmsWindow(2, 200)
    t = np.arange(40) / 200
    win.add([[100 + 3 * np.sin(2 * np.pi * 20 * x), 100.0] for x in t])
    r = win.rms()
    assert r[0] == pytest.approx(3 / np.sqrt(2), rel=0.1) and r[1] == pytest.approx(0, abs=1e-9)
