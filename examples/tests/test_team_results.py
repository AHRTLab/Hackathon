"""team_results.py: runs are deduplicated, blind runs land in their session, the test is exact and two-sided."""
import csv

import pytest

import team_results as T

COLS = ["run", "timestamp", "course", "completed", "score_time", "collisions", "missed_gates", "smoothness",
        "rtlx", "latency_knob_ms", "drop_knob_pct", "elapsed"]


def write_runs(path, rows):
    with open(path, "w", newline="") as f:
        w = csv.DictWriter(f, COLS)
        w.writeheader()
        for r in rows:
            w.writerow({c: r.get(c, "0") for c in COLS})


def test_runs_are_deduplicated_and_tabled(tmp_path):
    r1 = {"timestamp": "2026-10-23T01:00:00Z", "course": "L1-gates", "completed": "1", "score_time": "20", "elapsed": "20"}
    r2 = {**r1, "timestamp": "2026-10-23T01:01:00Z", "score_time": "22"}
    write_runs(tmp_path / "a.csv", [r1])
    write_runs(tmp_path / "b.csv", [r1, r2])                    # the second download repeats r1
    runs = T.load_runs(tmp_path)
    assert len(runs) == 2
    assert T.clean_table(runs)[0] == {"course": "L1 Gates", "runs": 2, "median": 21.0, "best": 20.0, "worst": 22.0,
                                      "collisions": 0, "missed": 0}


def test_blind_runs_map_to_sessions_by_local_time(tmp_path):
    key = tmp_path / "final_key.csv"
    key.write_text("session,of,started,lag_comp\n1,2,2026-10-22T22:00:00,True\n2,2,2026-10-22T22:10:00,False\n")
    runs = [{"timestamp": "2026-10-23T02:01:00Z", "elapsed": "30"},     # 22:00:30 EDT → session 1
            {"timestamp": "2026-10-23T02:11:00Z", "elapsed": "30"},     # 22:10:30 → session 2
            {"timestamp": "2026-10-23T01:59:00Z", "elapsed": "30"}]     # before the key: ignored
    s = T.blind_sessions(key, runs, -4)
    assert [(x["session"], x["on"], len(x["runs"])) for x in s] == [(1, True, 1), (2, False, 1)]


def test_permutation_test_is_exact_and_two_sided():
    # 4 of the 20 splits differ by 3 in median: {1,2,3}, {1,2,4} and their complements
    assert T.permutation_p([1, 2, 3], [4, 5, 6]) == pytest.approx(4 / 20)
    assert T.permutation_p([1.0, 2.0], [1.0, 2.0]) == 1.0
