---
title: Results
description: Official sim scores, a blind lag-compensation test, and a neural network against a linear model.
---

<!-- budget: 500 words -->

# Results

Everything here is recomputed from AJ's dataset with
`python examples/team_results.py <dataset>/results`, and the neural-network tables with
`python examples/train_tcn.py`.

## Clean courses

AJ's lever-mode drives, 2026-10-22. All 51 recorded runs completed with 0 missed gates.

| Course | Runs | Median score | Range | Collisions |
|---|---|---|---|---|
| L1 Gates | 4 | 20.73 s | 20.70 to 22.46 s | 0 |
| L2 Slalom | 6 | 26.62 s | 25.74 to 27.54 s | 0 |
| L3 Corridor + Dock | 4 | 16.26 s | 16.20 to 17.44 s | 0 |

Score is time plus 5 s per collision and 10 s per missed gate; lower is better.

## A slow, lossy link

Judging included one run under a degraded link: 300 ms lag and 10 % of commands dropped. We ran a blind
test of lag compensation: 8 sessions of 2 runs each on L1, with the condition hidden from the driver,
compared session by session with an exact two-sided permutation test.

| Measure | On | Off | p |
|---|---|---|---|
| Score | 21.66 s | 22.51 s | 0.57 |
| Steering jerkiness | 0.66 rad/s² | 0.74 rad/s² | 0.63 |
| Workload (NASA-RTLX, 0 to 100) | 43.4 | 50.4 | 0.26 |
| Collisions (total) | 0 | 2 | |

Every median favours it, and none of the differences is significant. We keep it on because it did no
measurable harm; we cannot claim it helps.

## A neural network against the simple model

Four drivers (AJ, Jose, Kiran, Xinyi), 3 seeds per held-out driver. A causal temporal convolutional
network (TCN) on the raw signal, against the controller's linear discriminant (LDA) on 16 features.
Accuracy over six poses; chance is 0.17. Each cell is the median across drivers, range in brackets.

| Test | TCN | LDA |
|---|---|---|
| Your own calibration | 0.68 (0.45 to 0.89) | 0.85 (0.76 to 0.88) |
| A driver it never saw, each scaled by their own calibration | 0.33 (0.23 to 0.38) | 0.32 (0.29 to 0.34) |

The second row is the TCN without gain augmentation, its better setting for a new driver. On each
person's own data the LDA won for 3 of 4 drivers, and neither model generalises well to someone new.
With one short calibration per person (60 s of held poses) the simple model is the right choice, and in lever mode EMG decides
only the brake, where the personal LDA made no false fires and no misses on held-out takes.

Full tables, with and without gain augmentation:
[`examples/TCN.md`](https://github.com/ajbarea/myo-lever/blob/main/examples/TCN.md).

## The gate assist

Six scripted off-line approaches to L1's first gate, through the real sim with the controller's assist
code: 2 of 6 passed the gate with the assist, 0 of 6 without, and 0 collisions either way
([`gate-trial.json`](https://github.com/ajbarea/myo-lever/blob/main/presentations/aware-ai-deck/gate-trial.json)).
