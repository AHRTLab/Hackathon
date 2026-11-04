---
title: How it works
description: From the Myo's motion and muscle signals to speed and turn commands at 20 Hz.
---

<!-- budget: 500 words -->

# How it works

```
Myo armband ──BLE──► myo_lsl_publisher.py ──LSL──► Myo_EMG (8 ch, 200 Hz) + Myo_IMU (10 ch, 50 Hz)
                                                      │
                                                      ▼
                     myo_gestures.py drive --mode lever
                       IMU   → arm angle → speed and steering
                       EMG   → 16 features → LDA: fist or not → brake
                       lidar → slow before obstacles, gate nudge
                                                      │  (v, w) at 20 Hz
                                                      ▼
                          jackal-bridge ──WebSocket──► browser sim (scores every run)
```

## Signals

| Signal | What we compute | Drives |
|---|---|---|
| Tilt (accelerometer, 50 Hz) | Forearm height and roll from gravity, never yaw, so it does not drift | Speed, steering, reverse |
| Muscle (8 EMG channels, 200 Hz) | Log RMS and log waveform length per channel, 200 ms windows | Brake only |
| Brake classifier | Your fist against your other poses, by linear discriminant analysis (yours, or a pooled model), plus an EMG level near your calibrated fist | Brake after a fist held 0.4 s |
| Lidar (from the sim) | Free space ahead and beside the robot | Slow down, nudge off walls |

## Why the motion sensor steers

We started with five EMG gestures classified by LDA. On still poses it read 99 % of windows correctly.
Hold a fist with the forearm rolled, which is what you do while steering, and it read 38 % correctly:
rolling the arm moves the muscles under the electrodes. So the band's tilt sets speed and steering, and
EMG decides only the brake.

## Calibration

`myo_gestures.py record` prompts six poses (GO, STOP, LEFT, RIGHT, REVERSE, BRAKE), each held for 2, 3
and 5 s, and saves every take as CSV. The arm axes are learned from those takes, so the band works
whichever way it is worn. Each drive starts by checking the straight pose still fits; if the band has
moved, it refuses to start.

## Assists

- **Lidar assist:** slows before obstacles and keeps the robot off walls.
- **Gate assist** (Xinyi): when you are already aimed within 20° of a gate, it steers toward the gate's
  centre by at most 0.3 rad/s. It never picks a gate for you; `--no-gate` switches it off.
- **Lag compensation:** measures the command lag from the sim's echoes and drives the assist from the
  predicted pose. It switches on by itself when the link is slow.

## Logs

Every drive writes `drives/drive_*.csv`: one row per 20 Hz command, with the arm angles, the EMG
features, the command sent and course progress.

Code: `lever.py`, `myo_gestures.py`, `armdrive.py` and `gestures.py` in
[`examples/`](https://github.com/ajbarea/myo-lever/tree/main/examples). Tests: `pytest examples/tests`.
