"""Myo gesture recognition: features, an LDA classifier, synthetic takes and the gesture → (v, w) map.

Takes are lsl-web-viewer recordings (data/<team>/<label>_<time>[_Myo_EMG].csv), one gesture held per
take, labelled with one of GESTURES. Synthetic takes are written in the same format, so everything
below treats recorded and synthetic data the same way. myo_gestures.py is the command-line front end.
"""
from __future__ import annotations

import math
from collections import Counter, deque
from dataclasses import dataclass
from pathlib import Path

import numpy as np

from myo_emg_example import emg_level

GESTURES = ("rest", "forward", "left", "right", "reverse")
HOW = {
    "rest": "relax your hand",
    "forward": "make a fist and squeeze",
    "left": "bend your wrist so your hand points left",
    "right": "bend your wrist so your hand points right",
    "reverse": "spread your fingers wide",
}
KEYS = {"w": "forward", "a": "left", "d": "right", "s": "reverse", " ": "rest"}

WINDOW_S = 0.2       # feature window
STEP_S = 0.05        # window hop when building training data (one decision per 20 Hz command)
TRIM_S = 0.5         # cut from each end of a take: the click of Record, moving into the gesture
CONFIDENCE = 0.8     # below this the classifier is "unsure" and the robot stops
VOTES = 5            # majority vote over the last VOTES decisions (250 ms at 20 Hz)

V_FORWARD = 0.8      # m/s at full squeeze
V_REVERSE = 0.3
V_TURN = 0.15        # keep creeping while turning, so turns are arcs, not spins
W_TURN = 1.2         # rad/s at full bend

REST_LEVEL = 5.7     # measured: AJ's first drive with myo_emg_example (2026-10-22), median at rest
SQUEEZE_LEVEL = 48.4  # same run, 95th percentile while squeezing


# ------------------------------------------------------------------------------------- features
def features(window: np.ndarray) -> np.ndarray:
    """(n, 8) EMG → 16 features: log RMS and log waveform length per channel (offset removed)."""
    wl = np.mean(np.abs(np.diff(window, axis=0)), axis=0)   # the offset cancels in a difference
    return np.log1p(np.concatenate([channel_rms(window), wl]))


def channel_rms(window: np.ndarray) -> np.ndarray:
    x = window - window.mean(axis=0)
    return np.sqrt(np.mean(np.square(x), axis=0))


def windows(emg: np.ndarray, srate: float, trim_s: float = TRIM_S):
    """Overlapping WINDOW_S windows over the steady middle of a take."""
    n, hop = round(WINDOW_S * srate), max(1, round(STEP_S * srate))
    cut = round(trim_s * srate)
    if len(emg) - 2 * cut < n:          # short take: keep it all rather than nothing
        cut = 0
    body = emg[cut:len(emg) - cut]
    for i in range(0, len(body) - n + 1, hop):
        yield body[i:i + n]


# ------------------------------------------------------------------------------------- takes
@dataclass
class Take:
    label: str
    emg: np.ndarray      # (n, 8)
    srate: float
    path: str = ""

    def windows(self):
        return list(windows(self.emg, self.srate))


def load_recordings(folder: str | Path, stream: str, labels: tuple[str, ...], channels: int):
    """Every take of `stream` under `folder` whose label (before any "-variant") is in `labels`:
    a list of (label, data (n, channels), sample rate, path), plus notes on skipped files."""
    from lsl_web_viewer.loader import load_recording

    found, notes = [], []
    for path in sorted(Path(folder).rglob("*.csv")):
        head = recording_header(path)
        if "label" not in head:
            continue                                    # not a recording: a drive log, a key file, …
        label = head["label"].strip().lower().split("-")[0]
        if head.get("stream", stream) != stream or label not in labels:
            continue
        try:
            meta, data = load_recording(path)
        except (ValueError, IndexError, OSError) as e:
            notes.append(f"skipped {path.name}: unreadable ({e.__class__.__name__})")
            continue
        if data.ndim != 2 or data.shape[1] != channels + 1:
            notes.append(f"skipped {path.name}: expected timestamp + {channels} channels")
            continue
        found.append((label, data[:, 1:].astype(float), float(meta.get("sample_rate", 0.0)), str(path)))
    return found, notes


def recording_header(path: Path) -> dict[str, str]:
    """The `# key: value` lines at the top of a recording, read without parsing its data."""
    head: dict[str, str] = {}
    try:
        with open(path) as f:
            for line in f:
                if not line.startswith("#"):
                    break
                key, sep, value = line[1:].partition(":")
                if sep:
                    head[key.strip()] = value.strip()
    except OSError:
        pass
    return head


def load_takes(folder: str | Path) -> tuple[list[Take], list[str]]:
    """Every Myo_EMG gesture take under `folder` ("forward-left" counts as forward)."""
    found, notes = load_recordings(folder, "Myo_EMG", GESTURES, 8)
    return [Take(label, x, srate or 200.0, path) for label, x, srate, path in found], notes


def write_take(path: str | Path, take: Take, team: str, timestamp: str, stream: str = "Myo_EMG",
               channels: list[str] | None = None) -> None:
    """Write a take in lsl-web-viewer's recording format."""
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    chans = channels or [f"EMG_{i + 1}" for i in range(take.emg.shape[1])]
    fmt = (lambda v: str(int(v))) if stream == "Myo_EMG" else (lambda v: f"{v:.5f}")
    t = np.arange(len(take.emg)) / take.srate
    with open(path, "w") as f:
        f.write(f"# team: {team}\n# label: {take.label}\n# timestamp: {timestamp}\n")
        f.write(f"# sample_rate: {take.srate}\n# samples: {len(take.emg)}\n")
        f.write(f"# duration_sec: {len(take.emg) / take.srate:.3f}\n# channels: {','.join(chans)}\n")
        f.write(f"# stream: {stream}\n# lsl_uid: synthetic\n#\n")
        f.write("timestamp," + ",".join(chans) + "\n")
        for ti, row in zip(t, take.emg):
            f.write(f"{ti:.4f}," + ",".join(fmt(v) for v in row) + "\n")


# ------------------------------------------------------------------------------------- synthetic
def _bump(center: float, width: float, amp: float) -> np.ndarray:
    c = np.arange(8)
    d = np.minimum(np.abs(c - center), 8 - np.abs(c - center))   # distance around the ring
    return amp * np.exp(-0.5 * (d / width) ** 2)


# Toy forearm: activation 0..1 per electrode around the band. Shapes are invented, not measured;
# record your own takes and use --from to make synthetic data that looks like your arm.
PROFILES = {
    "rest": np.zeros(8),
    "forward": _bump(1.5, 1.5, 1.0) + _bump(5.5, 1.0, 0.4),
    "left": _bump(2.5, 0.8, 0.8),
    "right": _bump(6.0, 0.8, 0.8),
    "reverse": _bump(4.5, 1.0, 0.7) + _bump(7.5, 0.8, 0.3),
}


def toy_rms() -> dict[str, np.ndarray]:
    """Per-channel RMS for each gesture, scaled so rest and a fist match REST_LEVEL / SQUEEZE_LEVEL."""
    full = REST_LEVEL + (SQUEEZE_LEVEL - REST_LEVEL) / PROFILES["forward"].mean()
    return {g: REST_LEVEL + (full - REST_LEVEL) * p for g, p in PROFILES.items()}


def measured_rms(takes: list[Take]) -> dict[str, np.ndarray]:
    """Per-channel RMS for each gesture, the median over all windows of its takes."""
    out = {}
    for g in GESTURES:
        ws = [channel_rms(w) for t in takes if t.label == g for w in t.windows()]
        if ws:
            out[g] = np.median(ws, axis=0)
    return out


def synth_emg(rms: np.ndarray, seconds: float, srate: float, rng: np.random.Generator,
              shift: int = 0, gain: float = 1.0) -> np.ndarray:
    """Gaussian EMG with the given per-channel RMS, a slow effort wobble, Myo-like int8 values.
    shift rotates the band by whole electrodes; gain scales the whole signal (fit, sweat, fatigue)."""
    n = round(seconds * srate)
    t = np.arange(n)[:, None] / srate
    wobble = 1 + 0.15 * np.sin(2 * math.pi * 0.5 * t + rng.uniform(0, 2 * math.pi, 8))
    x = rng.normal(0, 1, (n, 8)) * np.roll(rms, shift) * gain * wobble
    return np.clip(np.round(x), -128, 127)


# ------------------------------------------------------------------------------------- classifier
class LDA:
    """Linear discriminant analysis with a shrunk pooled covariance (few windows, 16 features)."""

    def fit(self, X: np.ndarray, y: list[str], shrink: float = 0.1) -> "LDA":
        self.classes = [g for g in GESTURES if g in set(y)]
        y = np.asarray(y)
        self.means = np.array([X[y == g].mean(axis=0) for g in self.classes])
        resid = X - self.means[[self.classes.index(g) for g in y]]
        cov = resid.T @ resid / max(1, len(X) - len(self.classes))
        cov = (1 - shrink) * cov + shrink * np.trace(cov) / len(cov) * np.eye(len(cov))
        self.icov = np.linalg.inv(cov)
        return self

    def proba(self, X: np.ndarray) -> np.ndarray:
        X = np.atleast_2d(X)
        a = self.means @ self.icov
        score = X @ a.T - 0.5 * np.sum(a * self.means, axis=1)
        score -= score.max(axis=1, keepdims=True)
        p = np.exp(score)
        return p / p.sum(axis=1, keepdims=True)

    def predict(self, X: np.ndarray) -> list[str]:
        return [self.classes[i] for i in self.proba(X).argmax(axis=1)]


@dataclass
class Model:
    lda: LDA
    levels: dict[str, float]    # median emg_level per gesture, for proportional speed

    def intensity(self, gesture: str, level: float) -> float:
        rest, full = self.levels.get("rest", REST_LEVEL), self.levels.get(gesture, SQUEEZE_LEVEL)
        if full <= rest:
            return 1.0
        return float(np.clip((level - rest) / (full - rest), 0.0, 1.0))


def dataset(takes: list[Take]) -> tuple[np.ndarray, list[str], list[float]]:
    X, y, lv = [], [], []
    for t in takes:
        for w in t.windows():
            X.append(features(w))
            y.append(t.label)
            lv.append(emg_level(w))
    return np.array(X), y, lv


def train(takes: list[Take]) -> Model:
    X, y, lv = dataset(takes)
    levels = {g: float(np.median([l for l, yy in zip(lv, y) if yy == g])) for g in set(y)}
    return Model(LDA().fit(X, y), levels)


def folds(takes: list[Take]) -> list[Take]:
    """Units for leave-one-out testing: each take, but a gesture's only take is split in two halves
    so it can be tested against the other half (whole blocks, so no window is in both)."""
    out = []
    for t in takes:
        if sum(o.label == t.label for o in takes) > 1:
            out.append(t)
        else:
            h = len(t.emg) // 2
            out += [Take(t.label, t.emg[:h], t.srate, t.path), Take(t.label, t.emg[h:], t.srate, t.path)]
    return out


def evaluate(train_takes: list[Take], test_takes: list[Take] | None = None) -> np.ndarray:
    """Confusion matrix (rows = true gesture, columns = predicted, counts of windows), GESTURES order.
    With no test set: leave one take out, so every window is judged by a model that never saw it."""
    conf = np.zeros((len(GESTURES), len(GESTURES)), dtype=int)

    def tally(model: Model, take: Take) -> None:
        X, _, _ = dataset([take])
        if len(X):
            for p in model.lda.predict(X):
                conf[GESTURES.index(take.label), GESTURES.index(p)] += 1

    if test_takes is not None:
        model = train(train_takes)
        for t in test_takes:
            tally(model, t)
        return conf
    units = folds(train_takes)
    for i, t in enumerate(units):
        rest = units[:i] + units[i + 1:]
        if t.label in {u.label for u in rest}:
            tally(train(rest), t)
    return conf


# ------------------------------------------------------------------------------------- driving
def command(gesture: str, intensity: float) -> tuple[float, float]:
    """(v, w) for a gesture held at an intensity 0..1 (+ w = turn left)."""
    if gesture == "forward":
        return V_FORWARD * intensity, 0.0
    if gesture == "reverse":
        return -V_REVERSE * intensity, 0.0
    if gesture == "left":
        return V_TURN, W_TURN * intensity
    if gesture == "right":
        return V_TURN, -W_TURN * intensity
    return 0.0, 0.0


class Decider:
    """Unsure → rest; then a majority vote so one stray window can't jerk the robot."""

    def __init__(self, votes: int = VOTES, confidence: float = CONFIDENCE):
        self.recent: deque[str] = deque(maxlen=votes)
        self.confidence = confidence

    def update(self, gesture: str, p: float) -> str:
        self.recent.append(gesture if p >= self.confidence else "rest")
        g, n = Counter(self.recent).most_common(1)[0]
        return g if n > len(self.recent) // 2 else "rest"
