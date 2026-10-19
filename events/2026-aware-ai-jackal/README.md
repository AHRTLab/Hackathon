# AWARE-AI Hackathon: Jackal Sim + Command Bridge

Build your own controller for a Clearpath Jackal, using your muscles (Myo), a gamepad, a classifier,
anything, as long as it sends `(v, w)` commands.

**Start here: [STUDENT_GUIDE.md](STUDENT_GUIDE.md)**: install → drive in about 10 minutes → Myo → your
own controller, plus the rules, scoring and troubleshooting.
**Judging:** [RUBRIC.md](RUBRIC.md) · Kickoff slides: [`presentations/`](presentations/)

Live sim (Chrome): https://ahrtlab.github.io/Hackathon/  ·  Contract: [`protocol/PROTOCOL.md`](../../protocol/PROTOCOL.md)

## Examples

| Example | What it shows |
|---|---|
| [`keyboard_teleop.py`](examples/keyboard_teleop.py) | Hold-to-drive window (keys, or a gamepad's left stick) that sends through the bridge |
| [`terminal_teleop.py`](examples/terminal_teleop.py) | Smallest possible sender: tap keys in a terminal (no window; works over SSH) |
| [`state_listener.py`](examples/state_listener.py) | Prints pose, nearest lidar obstacle, course progress and events |
| [`controller_template.py`](examples/controller_template.py) | **Copy this:** fill in `my_input()` and `step()`; all the plumbing is done |
| [`myo_lsl_publisher.py`](examples/myo_lsl_publisher.py) | Real Myo → LSL (`Myo_EMG`, `Myo_IMU`, `Myo_Events`) over built-in Bluetooth, with arm sync |
| [`myo_emg_example.py`](examples/myo_emg_example.py) | Smallest Myo controller: EMG level over a threshold → creep forward. Shows read → feature → decide → send |
| [`fake_myo_lsl.py`](examples/fake_myo_lsl.py) | The same Myo streams with synthetic data (no armband needed) |
| [`myo_check.py`](examples/myo_check.py) | Can this laptop find, connect to and vibrate a Myo? |
| [`autopilot_gates.py`](examples/autopilot_gates.py) | Reference closed-loop controller that drives L1–L3 by itself |

**Signals and training data:** [`lsl-web-viewer`](https://github.com/AHRTLab/lsl-web-viewer) (installed
with the env): `lsl-web-viewer --open` shows every LSL stream on your laptop and records labeled takes
as CSV. BioRadio teams can reuse the LSL streaming code in [`../2026-bioradio/`](../2026-bioradio/).
