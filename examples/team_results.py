#!/usr/bin/env python3
"""Recompute the team's results from the sim's Runs CSVs (and the blind test's hidden key).

    python team_results.py <dataset>/results

Prints the clean-course table and the blind lag-compensation test. The blind test's unit is the
session (the hidden condition was drawn per session, so its two runs are not independent): each
session's median run is compared between conditions with an exact two-sided permutation test.
"""
from __future__ import annotations

import argparse
import csv
import datetime as dt
import itertools
from pathlib import Path

import numpy as np

COURSES = (("L1-gates", "L1 Gates"), ("L2-slalom", "L2 Slalom"), ("L3-corridor-dock", "L3 Corridor + Dock"))


def load_runs(runs_dir: Path) -> list[dict]:
    """Every run in every Runs CSV, once (downloads overlap when the page kept earlier runs)."""
    seen: dict[str, dict] = {}
    for f in sorted(runs_dir.glob("*.csv")):
        for r in csv.DictReader(open(f)):
            seen.setdefault(r["timestamp"], r)
    return sorted(seen.values(), key=lambda r: r["timestamp"])


def is_clean(r: dict) -> bool:
    return r["latency_knob_ms"] in ("0", "") and r["drop_knob_pct"] in ("0", "")


def clean_table(runs: list[dict]) -> list[dict]:
    rows = []
    for course, name in COURSES:
        rs = [r for r in runs if is_clean(r) and r["course"] == course and r["completed"] == "1"]
        if not rs:
            continue
        s = [float(r["score_time"]) for r in rs]
        rows.append({"course": name, "runs": len(rs), "median": float(np.median(s)), "best": min(s),
                     "worst": max(s), "collisions": int(sum(float(r["collisions"]) for r in rs)),
                     "missed": int(sum(float(r["missed_gates"]) for r in rs))})
    return rows


def blind_sessions(key_csv: Path, runs: list[dict], utc_offset_h: float) -> list[dict]:
    """Each blind session (from the hidden key, local times) with the runs that started inside it."""
    key = list(csv.DictReader(open(key_csv)))
    starts = [dt.datetime.fromisoformat(k["started"]) for k in key]
    sessions = [{"session": int(k["session"]), "on": k["lag_comp"] == "True", "runs": []} for k in key]
    for r in runs:
        end = dt.datetime.fromisoformat(r["timestamp"].replace("Z", "")) + dt.timedelta(hours=utc_offset_h)
        start = end - dt.timedelta(seconds=float(r["elapsed"]))
        if start < starts[0]:
            continue
        i = max(j for j, s in enumerate(starts) if s <= start)
        sessions[i]["runs"].append(r)
    return [s for s in sessions if s["runs"]]


def permutation_p(a: list[float], b: list[float]) -> float:
    """Exact two-sided permutation test on the difference of medians."""
    obs = abs(np.median(a) - np.median(b))
    allv = a + b
    hits = tot = 0
    for idx in itertools.combinations(range(len(allv)), len(a)):
        A = [allv[i] for i in idx]
        B = [allv[i] for i in range(len(allv)) if i not in idx]
        tot += 1
        hits += abs(np.median(A) - np.median(B)) >= obs - 1e-12
    return hits / tot


def blind_summary(sessions: list[dict]) -> dict:
    out = {"sessions_on": sum(s["on"] for s in sessions), "sessions_off": sum(not s["on"] for s in sessions)}
    for col, name in (("score_time", "score"), ("smoothness", "smoothness"), ("rtlx", "workload")):
        per = {on: [float(np.median([float(r[col]) for r in s["runs"]])) for s in sessions if s["on"] == on]
               for on in (True, False)}
        out[name] = {"on": float(np.median(per[True])), "off": float(np.median(per[False])),
                     "p": permutation_p(per[True], per[False])}
    for on in (True, False):
        out["collisions_" + ("on" if on else "off")] = int(sum(float(r["collisions"]) for s in sessions
                                                               if s["on"] == on for r in s["runs"]))
    return out


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("results", type=Path, help="the dataset's results/ folder")
    ap.add_argument("--utc-offset", type=float, default=-4.0, help="the blind key's local time vs UTC (EDT: -4)")
    args = ap.parse_args()
    runs = load_runs(args.results / "runs")
    print(f"{len(runs)} runs, {sum(r['completed'] == '1' for r in runs)} completed\n")
    print(f"{'course':20s} {'runs':>4s} {'median':>7s} {'best':>6s} {'worst':>6s} {'coll':>4s} {'missed':>6s}")
    for r in clean_table(runs):
        print(f"{r['course']:20s} {r['runs']:4d} {r['median']:7.2f} {r['best']:6.2f} {r['worst']:6.2f} "
              f"{r['collisions']:4d} {r['missed']:6d}")
    keys = sorted((args.results / "blind").glob("*final*key.csv"))
    if keys:
        b = blind_summary(blind_sessions(keys[-1], runs, args.utc_offset))
        print(f"\nblind lag compensation: {b['sessions_on']} sessions on, {b['sessions_off']} off "
              f"(session medians; exact two-sided permutation test)")
        for name in ("score", "smoothness", "workload"):
            print(f"  {name:10s} on {b[name]['on']:6.2f}   off {b[name]['off']:6.2f}   p = {b[name]['p']:.2f}")
        print(f"  collisions on {b['collisions_on']}   off {b['collisions_off']}")


if __name__ == "__main__":
    main()
