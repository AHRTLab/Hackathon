"""Every number the deck shows, read from the recordings, drive logs and the sim's Runs CSVs."""
import csv
import json
import sys
from collections import Counter
from pathlib import Path

import numpy as np

WT = Path("/Users/ajbarea/ajsoftworks/Hackathon/.claude/worktrees/gestures/examples")
DATA = Path("/Users/ajbarea/ajsoftworks/Hackathon/data")
DS = DATA / "AJ-myo-lever-dataset"
sys.path.insert(0, str(WT))
import gestures as G  # noqa: E402
import myo_gestures as M  # noqa: E402

out: dict = {}

# --- official runs and the blind test: the same code as examples/team_results.py --------------
import team_results as T  # noqa: E402

runs = T.load_runs(DS / "results/runs")
out["clean"] = {row["course"].split()[0]: row for row in T.clean_table(runs)}
out["all_runs"] = {"n": len(runs), "completed": sum(r["completed"] == "1" for r in runs),
                   "deadman_max": max(float(r["deadman_pct"]) for r in runs),
                   "missed": int(sum(float(r["missed_gates"]) for r in runs))}
sessions = T.blind_sessions(DS / "results/blind/session2_final_key.csv", runs, -4)
out["blind"] = T.blind_summary(sessions)
out["blind"]["runs_per_session"] = sorted({len(s["runs"]) for s in sessions})
out["blind"]["run_scores"] = {"on": [float(r["score_time"]) for s in sessions if s["on"] for r in s["runs"]],
                              "off": [float(r["score_time"]) for s in sessions if not s["on"] for r in s["runs"]]}

# --- what the signals told us: the 5-gesture model on fists held with the forearm rolled -------
takes, _ = G.load_takes(DATA / "AJ")
plain = [t for t in takes if "forward-" not in Path(t.path).name]
rolled = [t for t in takes if "forward-" in Path(t.path).name]
model = G.train(plain)
pred = Counter()
n_win = 0
for t in rolled:
    X = np.array([G.features(w) for w in t.windows()])
    pred.update(model.lda.predict(X))
    n_win += len(X)
out["rolled"] = {"takes": len(rolled), "windows": n_win, "as_forward": pred["forward"],
                 "pred": dict(pred), "plain_loto_acc": None}
conf = G.evaluate(plain)
out["rolled"]["plain_loto_acc"] = round(float(np.trace(conf) / conf.sum()), 3)


# --- what broke: from the drive logs -----------------------------------------------------------
def log(p):
    return list(csv.DictReader(open(p)))


def share(rows, col):
    return round(sum(r.get(col) == "True" for r in rows) / len(rows), 3)


before = log(DATA / "AJ/drives/drive_20261022_201226_lever.csv")
after = log(DATA / "AJ-lever-v2/drives/drive_20261022_204444_lever.csv")
out["brake"] = {"before": share(before, "brake"), "after": share(after, "brake")}
moved = log(DATA / "AJ-lever-v2/drives/drive_20261022_223527_lever.csv")
out["band_moved"] = {"reverse": share(moved, "reverse"),
                     "tip_median": round(float(np.median([float(r["tip"]) for r in moved])))}

# --- the guided recording ---------------------------------------------------------------------
durs = [2, 3, 5]
out["record"] = {"poses": len(M.LEVER_STEPS), "durations": durs,
                 "seconds": len(M.LEVER_STEPS) * (len(durs) * 3 + sum(durs))}

json.dump(out, open(Path(__file__).with_name("deck-data.json"), "w"), indent=1)
print(json.dumps({k: v for k, v in out.items()}, indent=1)[:3000])
