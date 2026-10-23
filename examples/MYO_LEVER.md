<!-- budget: 550 words -->
# Myo lever controller

Drive the Jackal with your forearm: arm forward to go (lower = faster), arm up to stop, roll your forearm
to steer, tip it down to reverse. A firm fist held for 0.4 s brakes. Relaxing your hand never moves the
robot: speed comes from arm height alone. A lidar assist slows before obstacles, and lag compensation
switches on by itself when the link is slow.

Code: `myo_gestures.py` (command line), `armdrive.py` (arm angles, lever, brake, assist, lag),
`gestures.py` (EMG features, LDA, recordings). Tests: `pytest examples/tests`.

## Your first drive

With the hackathon env active, the Myo publisher running (`python examples/myo_lsl_publisher.py`) and
the bridge plus sim open (`jackal-bridge --serve-site --open`):

```bash
python examples/myo_gestures.py record data/<you>-lever            # guided, about 2.5 min
python examples/myo_gestures.py drive data/<you>-lever --mode lever
```

`record` prompts six poses (GO, STOP, LEFT, RIGHT, REVERSE, BRAKE) at 2, 3 and 5 s. At the start of
`drive`, hold your arm forward and level for the countdown, then raise it once to start.

If `drive` refuses to start because your straight pose doesn't fit, the band has moved: run `record`
into a new folder. Recalibrate every time the band comes off.

## Tuning

- Turns feel uneven: drive a course, then `python examples/myo_gestures.py steering data/<you>-lever`.
  It sets each side's full-turn roll from how far you actually rolled (`steering.json`).
- Gentler or sharper near straight: `--expo` (0 = linear, default 0.5).
- Top speed and turn rate: `--vmax`, `--wmax`.
- Switch off a helper: `--no-assist` (lidar), `--no-lag-comp`.

Every drive writes `data/<you>-lever/drives/drive_*.csv` (one row per command, 20 per second). Read those to find out
why something felt wrong.

## Other modes

- `--mode arm`: squeeze to go (harder = faster) instead of arm height. Needs `calibrate` takes.
- `--mode gestures`: five EMG gestures classified by LDA. The baseline we started from: on AJ's arm it
  misread fists held with the forearm rolled, which is why the lever mode steers with the IMU.

## What we measured (AJ, 2026-10-22)

Recompute everything below from the dataset: `python examples/team_results.py <dataset>/results`.

Official sim scores, lever mode; all 51 recorded runs completed with 0 missed gates and 0 % deadman:

| Course | Runs | Median score | Range | Collisions |
|---|---|---|---|---|
| L1 Gates | 4 | 20.73 s | 20.70 to 22.46 s | 0 |
| L2 Slalom | 6 | 26.62 s | 25.74 to 27.54 s | 0 |
| L3 Corridor + Dock | 4 | 16.26 s | 16.20 to 17.44 s | 0 |

Under the judges' degraded link (300 ms lag, 10 % drop) we ran a blind test of lag compensation: 8
sessions of 2 runs each, the condition hidden from the driver. Compared session by session (exact
two-sided permutation test), lag compensation's medians were better on score (21.66 vs 22.51 s),
smoothness and workload (43 vs 50 NASA-RTLX), with 0 collisions against 2, but none of the differences
is significant (p = 0.26 to 0.63). We keep it on because it did no measurable harm; we can't claim it helps.

Dataset: the `AJ-myo-lever-dataset.zip` release asset on this fork (two sessions, results, drive logs,
and a README with loading code and how to split it).
