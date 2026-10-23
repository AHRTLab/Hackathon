import os
import socket
import sys
import time

import lever as L
import pytest


def touch(folder, complete=True):
    folder.mkdir(parents=True, exist_ok=True)
    (folder / "neutral_20261023_120000_2s_1_Myo_IMU.csv").write_text("")
    if complete:
        (folder / L.COMPLETE).write_text("")
    return folder


def test_slug_makes_a_safe_folder_name():
    assert L.slug("  Ben Smith ") == "ben-smith"
    assert L.slug("../../etc") == "etc"
    assert L.slug("José") == "josé"


def test_first_calibration_goes_in_name_lever(tmp_path):
    assert L.current(tmp_path, "ben") is None
    assert L.fresh(tmp_path, "ben") == tmp_path / "ben-lever"


def test_recalibrating_numbers_new_folders_and_drives_from_the_newest(tmp_path):
    touch(tmp_path / "ben-lever")
    assert L.fresh(tmp_path, "ben") == tmp_path / "ben-lever-2"
    touch(tmp_path / "ben-lever-2")
    touch(tmp_path / "ben-lever-10")
    assert L.current(tmp_path, "ben") == tmp_path / "ben-lever-10"
    assert L.fresh(tmp_path, "ben") == tmp_path / "ben-lever-11"


def test_a_new_calibration_always_outranks_the_old_ones(tmp_path):
    touch(tmp_path / "ben-lever")
    touch(tmp_path / "ben-lever-3")
    new = L.fresh(tmp_path, "ben")
    touch(new)
    assert L.current(tmp_path, "ben") == new


def test_an_interrupted_calibration_is_skipped(tmp_path):
    touch(tmp_path / "ben-lever")
    touch(tmp_path / "ben-lever-2", complete=False)       # Ctrl+C in round 2: takes on disk, no marker
    assert L.current(tmp_path, "ben") == tmp_path / "ben-lever"
    assert L.fresh(tmp_path, "ben") == tmp_path / "ben-lever-3"


def test_only_numbered_folders_left_still_numbers_upward(tmp_path):
    touch(tmp_path / "ben-lever-3")
    assert L.fresh(tmp_path, "ben") == tmp_path / "ben-lever-4"


def test_a_folder_recorded_by_hand_counts_once_every_round_is_there(tmp_path):
    folder = tmp_path / "ben-lever"
    folder.mkdir()
    for n, pose in enumerate(L.IMU_POSES * L.ROUNDS):
        (folder / f"{pose}_20261023_120000_2s_{n}_Myo_IMU.csv").write_text("")
        if n == len(L.IMU_POSES) * L.ROUNDS - 2:
            assert not L.calibrated(folder)              # stopped one take short
    assert L.calibrated(folder)


def test_other_names_do_not_count(tmp_path):
    touch(tmp_path / "benny-lever")
    touch(tmp_path / "ben-lever-v2")
    assert L.current(tmp_path, "ben") is None


def test_free_port_skips_a_taken_one():
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        s.listen()
        taken = s.getsockname()[1]
        assert L.free_port((taken, 0), socket.SOCK_STREAM) == 0


@pytest.mark.skipif(os.name == "nt", reason="process groups are POSIX")
def test_background_sees_ready_and_stops_its_whole_group():
    child = "import subprocess, sys, time; subprocess.Popen([sys.executable, '-c', 'import time; time.sleep(60)']); " \
            "print('✓ Streaming from fake', flush=True); time.sleep(60)"
    bg = L.Background("myo", [sys.executable, "-c", child], ready="✓ Streaming from")
    assert bg.ready.wait(10)
    bg.stop()
    assert not bg.alive()
    t_end = time.monotonic() + 5
    with pytest.raises(ProcessLookupError):           # no grandchild outlived stop()
        while time.monotonic() < t_end:
            os.killpg(bg.proc.pid, 0)
            time.sleep(0.1)
