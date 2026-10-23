#!/usr/bin/env python3
"""Train the fist (brake) detector on everyone's lever takes, and measure how well it carries over to a
driver it has never seen. Also reports the six EMG poses, for the record.

    python examples/train_pooled.py data/a-lever data/b-lever data/c-lever --test data/d-lever \
                                    [--save data/brake-pooled.npz]
    python examples/myo_gestures.py drive data/<you>-lever --mode lever --brake-model data/brake-pooled.npz

Arguments are take folders (one wearing of the band each). Folders after --test are the test set: the
model is trained on the others and scored on these. Make the test set a whole person (all of their
sessions) — windows from the same take are near-copies, so a random split would flatter the model.
Without --test, each folder is held out in turn (leave-one-out). A folder can be written person=folder
to say two folders are the same person (then both are held out together).

Two normalisations are compared:
  raw         the features as they are
  rest-norm   each session's features minus that session's mean rest features — "rest" is the first
              take of every calibration, so a new driver gets this for free in ~5 s
The model only ever classifies gestures (fist vs not; and the six poses, for the record) — it never
predicts who is wearing the band.

Learning from driving (--drives): every drive log (data/<you>-lever/drives/drive_*.csv) holds the 16 EMG
features of every command plus what the controller decided. Frames where it braked and the driver kept
the fist (a held BRAKE_FRAMES run) are taken as fists; frames where the driver was driving normally with
a low level are taken as not-fists — including the mid-turn grips that calibration takes never show.
Those windows join the training pool (rest-offset by that driver's calibration folder, the log's parent),
so the brake model keeps improving from real driving without anyone recording anything:

    python examples/train_pooled.py data/a-lever data/b-lever --drives data/a-lever/drives data/b-lever/drives \
                                    --test data/c-lever --save data/brake-pooled.npz
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
import gestures as G  # noqa: E402

POSES = ("rest", "forward", "arm_up", "roll_left", "roll_right", "tip_down")


def read_take(path: Path) -> tuple[str, np.ndarray, float]:
    label, srate, rows = None, 200.0, []
    with open(path) as f:
        for line in f:
            if line.startswith("#"):
                m = re.match(r"#\s*(label|sample_rate):\s*(.+)", line)
                if m:
                    if m.group(1) == "label": label = m.group(2).strip().lower().split("-")[0]
                    else: srate = float(m.group(2))
            elif line[:1].isdigit() or line[:1] == "-":
                rows.append([float(v) for v in line.split(",")[1:]])
    return label, np.asarray(rows, dtype=float), srate


def session_windows(folder: Path) -> tuple[np.ndarray, np.ndarray]:
    """(features (n, 16), pose labels (n,)) over every EMG take in one session."""
    X, y = [], []
    for p in sorted(folder.glob("*_Myo_EMG.csv")):
        label, emg, srate = read_take(p)
        if label not in POSES or len(emg) < G.MIN_TAKE_ROWS or emg.shape[1] != 8:
            continue
        for w in G.windows(emg, srate):
            X.append(G.features(w)); y.append(label)
    return np.asarray(X), np.asarray(y)


DRIVE_FIST_FRAMES = 8        # a hard squeeze held this long (400 ms) was a deliberate fist
DRIVE_FIST_MIN = 1.0         # ... "hard" = level at least this fraction of the rest → fist range. The level
                             # comes from the driver's calibration, NOT from the LDA: a pseudo-label from a
                             # different teacher than the model it trains, so self-training can't just
                             # confirm the model's own mistakes
DRIVE_NOT_FIST_MAX = 0.3     # driving with the level under this fraction of rest → fist: clearly not a fist
DRIVE_REST_PER_LOG = 60      # not-fist windows kept per log (spread over the drive), so the thousands of
                             # plain driving frames don't outweigh the calibration takes; fists are all kept


def drive_windows(log: Path, rest_level: float, fist_level: float) -> tuple[np.ndarray, np.ndarray]:
    """Self-labelled (features, 'forward' | 'rest') from one drive log. Only the clear cases."""
    import csv
    rows = list(csv.DictReader(open(log)))
    if not rows or "f15" not in rows[0]:
        return np.zeros((0, 16)), np.zeros(0, dtype=str)
    F = np.array([[float(r[f"f{i}"]) for i in range(16)] for r in rows])
    brake = np.array([r["brake"] == "True" for r in rows])
    engaged = np.array([r["engaged"] == "True" for r in rows])
    level = np.array([float(r["level"]) for r in rows])
    frac = (level - rest_level) / max(fist_level - rest_level, 1e-6)
    # fists: a hard squeeze (by level alone) held at least DRIVE_FIST_FRAMES — the driver meant it
    hard = frac >= DRIVE_FIST_MIN
    fist = np.zeros(len(rows), bool)
    i = 0
    while i < len(rows):
        if hard[i]:
            j = i
            while j + 1 < len(rows) and hard[j + 1]:
                j += 1
            if j - i + 1 >= DRIVE_FIST_FRAMES:
                fist[i:j + 1] = True
            i = j + 1
        else:
            i += 1
    not_fist = engaged & ~brake & ~hard & (frac < DRIVE_NOT_FIST_MAX)
    rest_idx = np.where(not_fist)[0]
    if len(rest_idx) > DRIVE_REST_PER_LOG:                 # evenly over the drive: every kind of moment
        rest_idx = rest_idx[np.linspace(0, len(rest_idx) - 1, DRIVE_REST_PER_LOG).round().astype(int)]
    keep = np.sort(np.concatenate([np.where(fist)[0], rest_idx]))
    return F[keep], np.where(fist[keep], "forward", "rest")


def session_levels(folder: Path) -> tuple[float, float]:
    """Mean EMG level at rest and in a fist from a calibration folder (as armdrive's calibration does)."""
    lv = {"rest": [], "forward": []}
    for p in sorted(folder.glob("*_Myo_EMG.csv")):
        label, emg, _ = read_take(p)
        if label in lv:
            x = emg - emg.mean(axis=0)
            lv[label].append(float(np.sqrt(np.mean(x * x, axis=0)).mean()))
    return float(np.mean(lv["rest"])), float(np.mean(lv["forward"]))


def normalise(X: np.ndarray, y: np.ndarray, how: str) -> np.ndarray:
    if how == "rest-norm" and (y == "rest").any():
        return X - X[y == "rest"].mean(axis=0)
    return X


def lda_fit_predict(Xtr, ytr, Xte, shrink: float = 0.1) -> np.ndarray:
    """Same shrunk-covariance LDA as gestures.LDA, for any label set (G.LDA only knows GESTURES)."""
    classes = list(np.unique(ytr))
    means = np.array([Xtr[ytr == c].mean(axis=0) for c in classes])
    resid = Xtr - means[[classes.index(c) for c in ytr]]
    cov = resid.T @ resid / max(1, len(Xtr) - len(classes))
    cov = (1 - shrink) * cov + shrink * np.trace(cov) / len(cov) * np.eye(len(cov))
    a = means @ np.linalg.inv(cov)
    score = Xte @ a.T - 0.5 * np.sum(a * means, axis=1)
    return np.asarray(classes)[score.argmax(axis=1)]


def lda_acc(Xtr, ytr, Xte, yte) -> tuple[float, dict[str, float]]:
    pred = lda_fit_predict(Xtr, ytr, Xte)
    per = {c: float((pred[yte == c] == c).mean()) for c in np.unique(yte)}
    return float((pred == yte).mean()), per


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("sessions", nargs="*", help="take folders (training, or everything if no --test); person=folder groups them")
    ap.add_argument("--all", action="store_true", help="use every calibration under data/ (any folder with rest and "
                    "forward takes, subfolders included; 'aborted' folders skipped)")
    ap.add_argument("--test", nargs="+", default=[], help="take folders to test on (held out of training)")
    ap.add_argument("--drives", nargs="+", default=[], help="drive-log folders (data/<x>-lever/drives) to learn from; "
                    "the parent folder's takes give the rest offset, or say which: drives_folder=takes_folder")
    ap.add_argument("--save", help="write the pooled brake model (rest-norm, all training folders) to this .npz")
    args = ap.parse_args()

    if args.all:
        root = Path(__file__).resolve().parent.parent / "data"
        found = sorted({p.parent for p in root.rglob("forward_*_Myo_EMG.csv")
                        if "aborted" not in str(p.parent) and list(p.parent.glob("rest_*_Myo_EMG.csv"))})
        args.sessions = [str(f) for f in found if str(f) not in args.test]
        if not args.sessions:
            sys.exit(f"no calibrations under {root}")
    if not args.sessions:
        sys.exit("give take folders, or --all")
    data = []                                           # (group, folder, X, y, is_test)
    for arg, is_test in [(a, False) for a in args.sessions] + [(a, True) for a in args.test]:
        group, folder = arg.split("=", 1) if "=" in arg else (Path(arg).name, arg)
        X, y = session_windows(Path(folder))
        if not len(X):
            sys.exit(f"no takes in {folder}")
        data.append((group, Path(folder).name, X, y, is_test))
        print(f"{'TEST ' if is_test else 'train'} {Path(folder).name:28s} {len(X):5d} windows   " +
              " ".join(f"{p}×{int((y == p).sum())}" for p in POSES if (y == p).any()))
    for arg in args.drives:                             # self-labelled windows from real driving (training only)
        folder, cal = (arg.split("=", 1) if "=" in arg else (arg, str(Path(arg).parent)))
        cal = Path(cal)
        Xc, yc = session_windows(cal)
        if not (yc == "rest").any():
            sys.exit(f"{folder}: no rest takes in {cal} for the offset")
        rest_level, fist_level = session_levels(cal)
        X, y = [], []
        for log in sorted(Path(folder).glob("drive_*.csv")):
            Xl, yl = drive_windows(log, rest_level, fist_level)
            X.append(Xl); y.append(yl)
        X = np.vstack(X) if X else np.zeros((0, 16)); y = np.concatenate(y) if y else np.zeros(0, dtype=str)
        if not len(X):
            print(f"drive  {cal.name:28s} nothing usable"); continue
        X = X - Xc[yc == "rest"].mean(axis=0)              # pre-offset: normalise() must not shift it again
        data.append((cal.name, cal.name + "/drives", X, y, False, True))
        print(f"drive  {cal.name + '/drives':28s} {len(X):5d} windows   " +
              f"forward×{int((y == 'forward').sum())} rest×{int((y == 'rest').sum())}   (self-labelled)")
    data = [d if len(d) == 6 else (*d, False) for d in data]   # (group, name, X, y, is_test, pre_offset)
    if args.test:
        splits = [("test set", [d for d in data if not d[4]], [d for d in data if d[4]])]
    else:
        groups = sorted({d[0] for d in data if not d[5]})
        if len(groups) < 2:
            sys.exit("need at least two folders (or --test) to have something to test on")
        splits = [(g, [d for d in data if d[0] != g], [d for d in data if d[0] == g and not d[5]]) for g in groups]

    for how in ("raw", "rest-norm"):
        print(f"\n== {how}: " + ("train → test" if args.test else "leave-one-out") + " ==")
        print(f"{'held out':10s} {'brake acc':>10s} {'fist recall':>12s} {'false brake':>12s}   {'6-pose acc':>10s}")
        brake_all, pose_all = [], []
        for person, tr, te in splits:
            Xtr = np.vstack([X if pre else normalise(X, y, how) for _, _, X, y, _, pre in tr]); ytr = np.concatenate([d[3] for d in tr])
            Xte = np.vstack([X if pre else normalise(X, y, how) for _, _, X, y, _, pre in te]); yte = np.concatenate([d[3] for d in te])
            btr = np.where(ytr == "forward", "forward", "rest"); bte = np.where(yte == "forward", "forward", "rest")
            acc, per = lda_acc(Xtr, btr, Xte, bte)
            pose_rows = np.concatenate([np.full(len(d[3]), not d[5]) for d in tr])
            pacc, _ = lda_acc(Xtr[pose_rows], ytr[pose_rows], Xte, yte)
            brake_all.append(acc); pose_all.append(pacc)
            print(f"{person[:10]:10s} {acc:10.3f} {per.get('forward', float('nan')):12.3f} "
                  f"{1 - per.get('rest', float('nan')):12.3f}   {pacc:10.3f}")
        if len(splits) > 1:
            print(f"{'mean':10s} {np.mean(brake_all):10.3f} {'':12s} {'':12s}   {np.mean(pose_all):10.3f}")

    if args.save:
        train = [d for d in data if not d[4]]
        X = np.vstack([X if pre else normalise(X, y, "rest-norm") for _, _, X, y, _, pre in train])
        y = np.concatenate([np.where(d[3] == "forward", "forward", "rest") for d in train])
        save_model(args.save, X, y, [d[1] for d in train])
        print(f"\n✓ saved pooled brake model ({len(X)} windows from {len(train)} folders) → {args.save}")


def save_model(path: str | Path, X: np.ndarray, y: np.ndarray, sources: list[str]) -> None:
    """Fit the brake LDA on (X, y) and save it WITH its training windows, so a drive can add to them."""
    m = G.LDA().fit(X, list(y))
    np.savez(path, classes=np.array(m.classes), means=m.means, icov=m.icov, rest_norm=True,
             X=X.astype(np.float32), y=np.asarray(y).astype(str), sources=np.array(sources, dtype=str))


def update_from_drive(path: str | Path, log: str | Path, folder: str | Path) -> tuple[int, int, int]:
    """Continual learning: add one drive log's self-labelled windows (offset by this driver's rest takes
    in `folder`) to the model's training set and refit it in place. Returns (fists added, not-fists
    added, training windows now). A log that teaches nothing leaves the file untouched."""
    z = np.load(path, allow_pickle=False)
    if "X" not in z:
        raise ValueError(f"{path} has no training windows: re-save it with train_pooled.py --save")
    Xc, yc = session_windows(Path(folder))
    if not (yc == "rest").any():
        raise ValueError(f"no rest takes in {folder} for the offset")
    rest_level, fist_level = session_levels(Path(folder))
    Xd, yd = drive_windows(Path(log), rest_level, fist_level)
    if not len(Xd):
        return 0, 0, len(z["X"])
    Xd = Xd - Xc[yc == "rest"].mean(axis=0)
    X = np.vstack([z["X"], Xd]); y = np.concatenate([z["y"].astype(str), yd])
    # validation gate: the calibration takes are the only truly labelled data; the refit must not do worse
    # on them than the model it replaces (self-training may add, never degrade)
    Xv = Xc - Xc[yc == "rest"].mean(axis=0); yv = np.where(yc == "forward", "forward", "rest")
    before = G.LDA(); before.classes, before.means, before.icov = [str(c) for c in z["classes"]], z["means"], z["icov"]
    acc_before = float((np.asarray(before.predict(Xv)) == yv).mean())
    acc_after = float((np.asarray(G.LDA().fit(X, list(y)).predict(Xv)) == yv).mean())
    if acc_after < acc_before - 0.005:                     # a real drop, not rounding
        raise ValueError(f"refit would score {acc_after:.3f} on {Path(folder).name}'s takes, down from "
                         f"{acc_before:.3f}: kept the old model")
    save_model(path, X, y, list(z["sources"]) + [Path(log).name])
    return int((yd == "forward").sum()), int((yd == "rest").sum()), len(X)


if __name__ == "__main__":
    main()
