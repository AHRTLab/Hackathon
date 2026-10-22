#!/usr/bin/env python3
"""Figures for EMG_On-Ramp.pptx (simulated signals; regenerate with `python emg_figures.py`).

Simulated surface EMG at the Myo's rate: band-limited noise whose amplitude follows a muscle-activation
envelope. Good enough to show shape and processing steps; not a physiological model.
"""
from __future__ import annotations

from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from scipy.signal import butter, filtfilt

OUT = Path(__file__).resolve().parent / "assets" / "emg"
FS = 200                                   # Myo EMG rate
NAVY, CYAN, GREY, STEEL, LIGHT = "#142850", "#00B4C8", "#646E82", "#4682B4", "#DCE1E6"
plt.rcParams.update({"font.family": "sans-serif", "font.size": 13, "axes.edgecolor": GREY,
                     "axes.labelcolor": NAVY, "xtick.color": GREY, "ytick.color": GREY,
                     "axes.spines.top": False, "axes.spines.right": False})
rng = np.random.default_rng(3)


def emg(envelope: np.ndarray) -> np.ndarray:
    """Band-limited noise (20–90 Hz) scaled by the envelope, plus a little sensor noise."""
    b, a = butter(4, [20 / (FS / 2), 90 / (FS / 2)], btype="band")
    x = filtfilt(b, a, rng.normal(0, 1, envelope.size))
    return np.clip(envelope * x / x.std() + rng.normal(0, 1.5, envelope.size), -128, 127)


def bursts(t: np.ndarray, spans: list[tuple[float, float, float]], rest: float = 3.0) -> np.ndarray:
    env = np.full(t.size, rest)
    for t0, t1, amp in spans:
        ramp = 1 / (1 + np.exp(-(t - t0) * 12)) - 1 / (1 + np.exp(-(t - t1) * 12))
        env += amp * ramp
    return env


def save(fig, name: str) -> None:
    fig.savefig(OUT / name, dpi=200, bbox_inches="tight", transparent=True)
    plt.close(fig)


def effort_levels() -> None:
    t = np.arange(0, 9, 1 / FS)
    x = emg(bursts(t, [(1, 2.6, 12), (3.6, 5.2, 30), (6.2, 7.8, 60)]))
    fig, ax = plt.subplots(figsize=(9, 3))
    ax.plot(t, x, color=CYAN, lw=0.7)
    for xc, lab in ((1.8, "light"), (4.4, "medium"), (7.0, "strong")):
        ax.text(xc, 140, lab, ha="center", color=NAVY, fontsize=14, fontweight="bold")
    ax.set(xlabel="time (s)", ylabel="EMG (Myo units)", ylim=(-130, 160), xlim=(0, 9))
    save(fig, "effort.png")


def processing_steps() -> None:
    t = np.arange(0, 4, 1 / FS)
    env = bursts(t, [(0.8, 2.8, 45)])
    x = emg(env) + 6                                     # a small DC offset, as real sensors have
    centred = x - x.mean()
    rect = np.abs(centred)
    b, a = butter(2, 3 / (FS / 2))                        # 3 Hz low-pass = linear envelope
    smooth = filtfilt(b, a, rect)
    fig, axes = plt.subplots(4, 1, figsize=(9, 5.4), sharex=True)
    for ax, y, lab, c in zip(axes, (x, centred, rect, smooth),
                             ("1  raw", "2  remove offset", "3  rectify  |x|", "4  smooth = envelope"),
                             (GREY, STEEL, CYAN, NAVY)):
        ax.plot(t, y, color=c, lw=0.8 if c != NAVY else 2.4)
        ax.axhline(0, color=LIGHT, lw=0.8, zorder=0)
        ax.set_yticks([])
        ax.text(0.01, 0.92, lab, transform=ax.transAxes, color=NAVY, fontsize=13, fontweight="bold", va="top")
    axes[-1].set_xlabel("time (s)")
    fig.tight_layout(h_pad=0.4)
    save(fig, "pipeline.png")


def gesture_patterns() -> None:
    """Illustrative per-channel RMS for a band worn with pod 1 over the flexors (not measured data)."""
    pats = {"rest": [3, 3, 3, 3, 3, 3, 3, 3], "fist": [38, 42, 30, 22, 26, 30, 35, 40],
            "wave in": [45, 50, 32, 12, 6, 5, 8, 20], "wave out": [8, 6, 10, 24, 46, 52, 40, 14]}
    fig, axes = plt.subplots(1, 4, figsize=(11, 2.8), sharey=True)
    for ax, (name, v) in zip(axes, pats.items()):
        ax.bar(range(1, 9), v, color=[CYAN if x > 20 else LIGHT for x in v], width=0.75)
        ax.set_title(name, color=NAVY, fontweight="bold")
        ax.set_xticks(range(1, 9))
        ax.tick_params(labelsize=10)
    axes[0].set_ylabel("RMS")
    for ax in axes:
        ax.set_xlabel("channel", fontsize=11)
    fig.tight_layout()
    save(fig, "gestures.png")


def windows() -> None:
    t = np.arange(0, 1.2, 1 / FS)
    x = emg(bursts(t, [(0.3, 1.5, 35)]))
    fig, ax = plt.subplots(figsize=(9, 2.6))
    ax.plot(t, x, color=GREY, lw=0.8)
    for k, t0 in enumerate((0.4, 0.45, 0.5)):
        ax.axvspan(t0, t0 + 0.2, ymin=0.06 + 0.1 * k, ymax=0.94 - 0.1 * k, color=CYAN, alpha=0.18 + 0.08 * k, lw=0)
    ax.annotate("200 ms window\n(40 samples)", xy=(0.6, 100), xytext=(0.82, 105), color=NAVY, fontsize=13,
                fontweight="bold", va="center", arrowprops=dict(arrowstyle="->", color=NAVY))
    ax.annotate("step 50 ms", xy=(0.45, -118), xytext=(0.62, -115), color=NAVY, fontsize=12,
                va="center", arrowprops=dict(arrowstyle="->", color=NAVY))
    ax.set(xlabel="time (s)", ylim=(-130, 130), xlim=(0, 1.2))
    ax.set_yticks([])
    save(fig, "windows.png")


def fatigue() -> None:
    f = np.linspace(0, 100, 400)
    fresh = f ** 2 * np.exp(-f / 22)
    tired = (f * 1.45) ** 2 * np.exp(-f * 1.45 / 22) * 1.35
    fig, ax = plt.subplots(figsize=(5, 2.8))
    ax.plot(f, fresh / fresh.max(), color=CYAN, lw=2.5, label="fresh")
    ax.plot(f, tired / fresh.max(), color=NAVY, lw=2.5, ls="--", label="fatigued")
    ax.set(xlabel="frequency (Hz)", ylabel="power", xlim=(0, 100))
    ax.set_yticks([])
    ax.legend(frameon=False)
    save(fig, "fatigue.png")


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    effort_levels(); processing_steps(); gesture_patterns(); windows(); fatigue()
    print("wrote", sorted(p.name for p in OUT.glob("*.png")))
