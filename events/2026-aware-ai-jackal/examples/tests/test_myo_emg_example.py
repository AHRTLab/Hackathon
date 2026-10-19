"""myo_emg_example.py: the feature (mean per-channel RMS, offset removed) and the on/off rule."""
import numpy as np
import pytest

import myo_emg_example as ex


def test_emg_level_is_mean_rms_without_offset():
    rng = np.random.default_rng(0)
    x = rng.normal(0, 30, (4000, 8)) + 50          # a DC offset must not count as activity
    assert ex.emg_level(x) == pytest.approx(30, rel=0.05)
    assert ex.emg_level(np.zeros((0, 8))) == 0.0


def test_decide_is_forward_or_stop():
    assert ex.decide(ex.THRESHOLD + 1) == (ex.V_FORWARD, 0.0)
    assert ex.decide(ex.THRESHOLD - 1) == (0.0, 0.0)
    assert ex.decide(5.0, threshold=2.0) == (ex.V_FORWARD, 0.0)
