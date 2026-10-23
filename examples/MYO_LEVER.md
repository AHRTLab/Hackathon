<!-- budget: 760 words -->
# Myo lever controller

Drive the Jackal with your forearm. The Myo armband's motion sensor reads your arm's angle, and a firm
fist brakes. Relaxing your hand never moves the robot. A lidar assist slows before obstacles, and lag
compensation switches on by itself when the link is slow.

## Drive in one command

Install once, quit Myo Connect, then run one command:

```bash
git clone https://github.com/ajbarea/Hackathon.git && cd Hackathon
conda env create -f environment.yml          # once, about 5 minutes
conda activate jackal                        # in every new terminal
python examples/lever.py <your name>
```

That command does the rest:

1. **Connects to our Myo.** On a Mac, allow Bluetooth for your terminal if asked.
2. **Calibrates you, the first time only** (about 2.5 minutes). Put the band on snugly, on the thickest
   part of your forearm, and wait 2 minutes for it to warm up. Then hold six poses as it prompts you,
   the way you'll really drive. Your calibration is saved in `data/<your name>-lever`.
3. **Opens the sim in your browser and drives.** Pick a course (bottom right). Hold your arm forward
   and level for the countdown, then raise it once to start.
4. **Ctrl+C ends a drive.** Then press Enter to drive again, `r` to recalibrate, `t` to tune the
   turns, or `q` to quit. Quitting stops everything it started.

Next time, the same command skips straight to driving. Recalibrate (`r`) whenever the band comes off,
or when the drive says the band has moved. Using a different armband: add `--addr nearest`.

| Your arm | The robot |
|---|---|
| Forward, level | Goes. Lower your arm to go faster |
| Raised from the elbow | Stops |
| Rolled left or right | Turns |
| Tipped down | Reverses |
| Firm fist, held 0.4 s | Brakes |

## If something goes wrong

| What you see | Fix |
|---|---|
| `CondaError: Run 'conda init'` | Run `conda init zsh` once (or `conda init bash`), then open a new terminal |
| `No Myo found`, or stuck connecting | Plug the Myo into USB for a few seconds to wake it, unplug it, and move it. Close Myo Connect |
| The Myo shows up only while plugged in | The battery is probably flat: charge it for 15 minutes |
| Still not found | Another laptop may be connected to it: stop `lever.py` there. Then run `python examples/myo_check.py` |

## Tuning

- Turns feel uneven: drive a course or two, then press `t`. It sets each side's full turn from how far
  you actually rolled (`steering.json`).
- Every drive writes `drives/drive_*.csv` in your calibration folder (`data/<you>-lever`, then
  `-lever-2` after a recalibration), one row per command at 20 per second. Read them to see why
  something felt wrong.
- More settings (`--expo`, `--vmax`, `--wmax`, `--no-assist`, `--no-lag-comp`): `lever.py` runs
  `myo_lsl_publisher.py`, `jackal-bridge --serve-site --open`, then `myo_gestures.py record` and
  `myo_gestures.py drive --mode lever`. Run those yourself to pass them.

Code: `lever.py`, `myo_gestures.py` (record, drive), `armdrive.py` (arm angles,
lever, brake, assist, lag), `gestures.py` (EMG features, recordings). Tests: `pytest examples/tests`.

We started from five EMG gestures classified by LDA. On AJ's arm it misread fists held with the forearm
rolled, which is why the lever steers with the motion sensor instead.

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
