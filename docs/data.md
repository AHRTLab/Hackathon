---
title: Data
description: AJ's Myo lever-mode recordings, drive logs and official run scores, with loading code.
---

<!-- budget: 350 words -->

# Data

AJ's recordings from 2026-10-22 are the
[`dataset-2026-10-22`](https://github.com/ajbarea/myo-lever/releases/tag/dataset-2026-10-22) release
(`AJ-myo-lever-dataset.zip`, about 3.7 MB). One driver, right arm, two wearings of the band.

| Folder | What it holds |
|---|---|
| `session1/`, `session2/` | Six poses held for 2, 3 and 5 s: `Myo_EMG` (8 channels, 200 Hz) and `Myo_IMU` (10 channels, 50 Hz) per take |
| `results/runs/` | The sim's official run CSVs: score, collisions, gates, smoothness, workload |
| `results/drives/` | Every controller drive log: one row per 20 Hz command, with the EMG features the controller saw |
| `results/blind/` | The keys for the blind lag-compensation test |

File names give the pose:

| Pose | EMG label | IMU label |
|---|---|---|
| GO (arm forward, relaxed) | `rest` | `neutral` |
| STOP (arm raised) | `arm_up` | `arm_up` |
| LEFT / RIGHT (forearm rolled) | `roll_left` / `roll_right` | `roll_left` / `roll_right` |
| REVERSE (arm tipped down) | `tip_down` | `tip_down` |
| BRAKE (firm fist) | `forward` | `brake` |

## Use it

```bash
python examples/myo_gestures.py drive <path>/session2 --mode lever   # drive with AJ's calibration
python examples/team_results.py <path>/results                       # recompute the results tables
```

In Python, `gestures.load_recordings(folder, "Myo_EMG", labels, 8)` from the repo's `examples/` loads a
folder. Split train and test by session or by person, never by window: windows from one take are
near-copies of each other.

## Other drivers

The four-driver comparison on the [Results](results.md) page also used recordings from Jose, Kiran and
Xinyi. Their recordings are in the
[`dataset-2026-10-23`](https://github.com/ajbarea/myo-lever/releases/tag/dataset-2026-10-23) release.
