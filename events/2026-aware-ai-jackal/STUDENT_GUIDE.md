# AWARE-AI Hackathon: Student Guide

Build a controller that drives a Clearpath Jackal through simulated courses using your own input:
your muscles (Myo armband), a gamepad, a classifier, anything. Your controller sends simple
`(v, w)` commands (forward speed, turn rate). That's the whole contract.

```
 your controller ──►  jackal-bridge (your laptop)  ──►  Jackal sim (your browser)
                 ◄──  state: pose, speed, lidar, course progress (20 Hz)
```

## 1. Install (once, about 5 minutes)

You need [Miniconda or Anaconda](https://docs.conda.io/en/latest/miniconda.html) and git.

```bash
git clone https://github.com/AHRTLab/Hackathon.git
cd Hackathon
conda env create -f environment.yml
conda activate jackal
```

Every new terminal: `cd Hackathon` and `conda activate jackal`. Already installed? `git pull` and
`conda env update -f environment.yml --prune`.

## 2. Start the bridge and open the sim

```bash
jackal-bridge --serve-site --open
```

This starts the bridge and opens the sim in your browser at `http://localhost:8765/Hackathon/`. It
works in any browser, and offline after the first run. Leave this terminal running.

- **Or, in Chrome:** run plain `jackal-bridge` and open https://ahrtlab.github.io/Hackathon/.
  Click **Allow** when Chrome asks about devices on your local network. (Safari can't use this link.)
- The page drives with **W/A/S/D** even without a bridge. Pick a course (L0–L3) at the bottom right.
  The top-left panel turns **amber** when it's connected to the bridge.

## 3. Drive it from your own program

In a second terminal (`conda activate jackal`), from the `Hackathon` folder:

```bash
python events/2026-aware-ai-jackal/examples/keyboard_teleop.py
```

Click the little window and hold **W/A/S/D**. The sim's panel turns **green** ("Bridge: driving").
A gamepad plugged in works too (left stick). **You're now driving through the full pipeline.**

See what your controller can read:

```bash
python events/2026-aware-ai-jackal/examples/state_listener.py
```

## 4. The Myo armband

1. Quit **Myo Connect** if it's running (it holds the armband).
2. Stream it to LSL over your laptop's Bluetooth (no dongle needed):
   ```bash
   python events/2026-aware-ai-jackal/examples/myo_lsl_publisher.py
   ```
   Wear it snugly on the thickest part of your forearm and wait about 2 minutes (warm-up = less
   noise). Then **sync**: relax and bend your wrist outward (wave out) until it buzzes. It prints which
   arm it's on. *Mac: allow Bluetooth for your terminal app if asked (System Settings → Privacy &
   Security → Bluetooth).*
3. See your muscles, and record labeled training data:
   ```bash
   lsl-web-viewer --open
   ```
   Tick `Myo_EMG`. Make a fist and watch the RMS bars. Tick `Myo_IMU` to see the band's 3-D
   orientation (tilt and twist are usable as inputs too). Use **Record** for labeled takes (CSV), and
   **Change…** to choose the folder.
4. See how the pieces connect with the smallest possible Myo controller:
   ```bash
   python events/2026-aware-ai-jackal/examples/myo_emg_example.py
   ```
   Squeeze to creep forward, relax to stop. It reads `Myo_EMG`, computes one number (the RMS level),
   compares it with a threshold and sends `(v, w)`. That's all; it can't even steer. Reading the
   signal and turning it into a good command is **your** job. The staff will demo a baseline
   controller: **your goal is to beat it.**

No armband yet? `python events/2026-aware-ai-jackal/examples/fake_myo_lsl.py` publishes the same
streams with synthetic data.

**Turning the Myo off.** It has no power button. When you're done for the day, stop the publisher
(Ctrl+C), then run:
```bash
python events/2026-aware-ai-jackal/examples/myo_check.py --off
```
It buzzes, then switches off. **To turn it back on, plug it into USB** (any charger) for a moment. Left
alone without this, it only idles and slowly drains its battery.

## 5. Build your controller

Copy `examples/controller_template.py`, set `SOURCE` to your team name, and edit two functions:

- `my_input()`: read your device (e.g. your classifier's LSL stream, via the `LslLatest` helper).
- `step(state, inp, events)`: return `(v, w)`. `state` has the pose, speed, 180-beam lidar scan
  and course progress.

Prefer another language? Send JSON to the bridge yourself. See `protocol/PROTOCOL.md` for the
message format and examples.

## 6. The rules your controller lives by

| Rule | What it means |
|---|---|
| **Deadman: 250 ms** | If no command arrives for 250 ms, the robot stops. Send at a steady 20 Hz, even if nothing changed. |
| **Limits** | `v` up to 2.0 m/s, `w` up to 4.0 rad/s (bigger values are clamped). The robot ramps; it doesn't jump. |
| **One driver at a time** | The first sender wins. Another sender is ignored until the active one has been quiet for 1 s. Close your teleop window before testing your controller. |
| **E-stop** | `"estop": true` stops and latches; `{"type": "reset"}` or the page's button clears it. |
| **Restart** | Send `"action": "restart"`, or press Reset, to go back to the start. |

## 7. Scoring

The clock starts when you first move. Take the gates **in order** (the next one is highlighted
yellow), then cross the finish (L3: stop inside the dock for 1 s).

**score = time + 5 s per collision + 10 s per missed gate** (lower is better)

The page logs every run. **Runs CSV** and **Last trace** (bottom right) download your results.

## 8. Record everything in one file (optional)

[LabRecorder](https://github.com/labstreaminglayer/App-LabRecorder/releases) saves all LSL streams,
time-synced, in one `.xdf` file: your `Myo_EMG` / `Myo_IMU` / `Myo_Events`, plus `JackalState`,
`JackalScan`, `JackalEvents` and your `JackalCmd`. Load it in Python with `pyxdf`.

## Troubleshooting

| Problem | Fix |
|---|---|
| Sim panel stays grey ("No bridge") | Is `jackal-bridge` running? Using the GitHub link in Chrome: click **Allow**. Safari: use `jackal-bridge --serve-site --open`. |
| "address already in use" from the bridge | Another program uses port 8765: run `jackal-bridge --serve-site --open --port 8790`. |
| Robot stops and stutters, HUD says **DEADMAN** | Your loop sends less often than every 250 ms. Send at 20 Hz. |
| My commands are ignored | Another sender is active (the HUD shows which one). Stop it and wait 1 s. |
| "Another sim tab is using the bridge" | Only one sim tab can connect. Close the other tab, or click **Connect**. |
| Myo found but won't connect | Quit Myo Connect; move the band to wake it; on a Mac, check Bluetooth permission for your terminal. |
| Myo not found at all | Turned off (`--off`) or flat battery: plug it into USB. |
| Myo signal very noisy | Tighter fit (sizing clips), thickest part of the forearm, wait 2 min to warm up, re-sync. |
| `conda: command not found` | Open a new terminal after installing Miniconda (Windows: use "Anaconda Prompt"). |
