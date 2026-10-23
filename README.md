# AWARE-AI Hackathon: Drive a Jackal With Your Muscles

Build a controller that drives a Clearpath Jackal through simulated courses using your own input: your
muscles (Myo armband), a classifier, the IMU, anything. Your controller sends simple `(v, w)` commands
(forward speed, turn rate). That's the whole contract.

```
 your controller ──►  jackal-bridge (your laptop)  ──►  Jackal sim (your browser)
                 ◄──  state: pose, speed, lidar, course progress (20 Hz)
```

## Drive with your arm: one command

Our team's controller drives the Jackal from forearm angle and grip, read by the Myo armband. To try it:

```bash
git clone https://github.com/ajbarea/Hackathon.git && cd Hackathon
conda env create -f environment.yml          # once, about 5 minutes
conda activate jackal
python examples/lever.py <your name>
```

It connects to the Myo, calibrates you the first time (about 2.5 minutes of guided poses), opens the
sim in your browser, and drives. How to drive, and what we measured:
[**examples/MYO_LEVER.md**](examples/MYO_LEVER.md).

## Start here

| | |
|---|---|
| **1. Set up and drive** (about 10 min) | [**STUDENT_GUIDE.md**](STUDENT_GUIDE.md): install, start the sim, drive, connect the Myo |
| **2. Write your controller** | Copy [**`examples/controller_template.py`**](examples/controller_template.py) and edit its two functions (below) |
| **3. Know how you're judged** | [**RUBRIC.md**](RUBRIC.md): judged runs, scoring, bonus points |
| Slides | [`presentations/`](presentations/): the kickoff, and **EMG On-Ramp** (new to EMG? start here) |
| Live sim | https://ahrtlab.github.io/Hackathon/ (Chrome), or offline: `jackal-bridge --serve-site --open` |

## Your code

You edit **one file**: your copy of `examples/controller_template.py` (e.g. `examples/my_team.py`).
Everything else (connecting to the bridge, sim state, 20 Hz timing, reconnects, stopping safely) is done
for you.

```python
SOURCE = "my-team"                      # your team name, shown in the sim's HUD

def my_input() -> dict:                 # read YOUR device: the Myo, your classifier's LSL stream, …
    ...

def step(state, inp, events) -> tuple[float, float]:
    ...                                 # decide: return (v, w) in m/s and rad/s (+ w = turn left)
```

```bash
python examples/my_team.py              # with jackal-bridge running and the sim open
```

`state` holds the robot's pose, speed, a 180-beam lidar scan and course progress; `events` says when
you pass a gate, collide or finish. Prefer another language? Send JSON to the bridge yourself:
[`protocol/PROTOCOL.md`](protocol/PROTOCOL.md).

### Examples to learn from

| Example | What it shows |
|---|---|
| [`controller_template.py`](examples/controller_template.py) | **Copy this.** Fill in `my_input()` and `step()` |
| [`myo_emg_example.py`](examples/myo_emg_example.py) | Smallest Myo controller: read EMG → one feature → threshold → send |
| [`keyboard_teleop.py`](examples/keyboard_teleop.py) | Hold-to-drive window (keys or a gamepad) through the bridge |
| [`state_listener.py`](examples/state_listener.py) | Prints what your controller can read: pose, lidar, course progress, events |
| [`myo_lsl_publisher.py`](examples/myo_lsl_publisher.py) | Real Myo → LSL (`Myo_EMG`, `Myo_IMU`, `Myo_Events`) over built-in Bluetooth |
| [`fake_myo_lsl.py`](examples/fake_myo_lsl.py) | The same Myo streams with synthetic data (no armband needed) |
| [`myo_check.py`](examples/myo_check.py) | Can this laptop find and connect to a Myo? `--off` turns it off |
| [`terminal_teleop.py`](examples/terminal_teleop.py) | Smallest possible sender: tap keys in a terminal |
| [`autopilot_gates.py`](examples/autopilot_gates.py) | A reference autopilot (for testing the setup; not allowed in judged runs) |

**Signals and training data:** [`lsl-web-viewer`](https://github.com/AHRTLab/lsl-web-viewer) (installed
with the env): `lsl-web-viewer --open` shows every LSL stream on your laptop and records labeled takes as CSV.

---

## For staff and developers

**Running the event:** [`docs/RUNBOOK.md`](docs/RUNBOOK.md) (deploy, pre-event checklist, day-of,
judging, data, troubleshooting). Staff-only material (the baseline controller) lives in the gitignored
`staff/` folder; see the runbook.

**Repo layout.** `main` is always the **current** event. Each past event is a branch:

| Branch | Event |
|---|---|
| `main` | AWARE-AI 2026: Jackal sim + command bridge (current) |
| [`2026-bioradio`](https://github.com/AHRTLab/Hackathon/tree/2026-bioradio) | BioRadio Hackathon 2026: biosignal → ML classifier → control |
| [`myo-lsl-legacy`](https://github.com/AHRTLab/Hackathon/tree/myo-lsl-legacy) | Myo + LSL data collection (legacy) |

Starting a new event: branch `main` to the current event's name (e.g. `git branch 2026-aware-ai-jackal`,
then push it), then update `main` for the new event.

```
STUDENT_GUIDE.md  RUBRIC.md  presentations/  examples/   the event (students)
protocol/   the command/state contract (protocol/v1); start with protocol/PROTOCOL.md
web/        browser MuJoCo-WASM Jackal sim (Vite + TypeScript + three.js), deploys to GitHub Pages
bridge/     Python bridge: LSL / UDP / WebSocket in → browser out (deadman, clamps, source arbitration)
models/     Jackal MJCF + meshes, plus the reproducible URDF→MJCF converter
docs/       runbook, design brief, spike findings
```

Development quickstart, from the repo root:

```bash
conda env create -f environment.yml && conda activate jackal   # bridge + examples (or: pip install -e 'bridge[lsl]' pygame numpy)
cd web && npm install && npm run dev                           # Node 20+; open the printed URL in Chrome, drive with W/A/S/D
jackal-bridge                                                  # in another terminal
python examples/keyboard_teleop.py                             # in a third: hold-to-drive window
```

Tests: `cd web && npm test && npm run e2e` (vitest + Playwright in your installed Chrome),
`cd bridge && pytest`, and `pytest examples/tests` (plus `pytest staff` where that folder exists).
Regenerate the robot model with `python models/jackal/convert.py` (needs `pip install xacro`) and the
kickoff deck with `python presentations/make_kickoff.py` (needs `pip install python-pptx`).

`jackal-bridge --serve-site --open` serves the sim from the bridge at http://localhost:8765/Hackathon/ (it
uses `web/dist` if built, otherwise it downloads the published site once into `~/.cache/jackal-bridge/site`;
refresh with `--update-site`). Deploy: push to `main`. `.github/workflows/pages.yml` runs the unit tests,
builds the site and publishes it (watch the Actions tab). Repo setting, once: Settings → Pages → Source:
GitHub Actions. See [`docs/BRIEF.md`](docs/BRIEF.md) for the design and milestones.
