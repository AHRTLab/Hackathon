# AWARE-AI Hackathon: Jackal Sim + Command Bridge

Build your own controller for a Clearpath Jackal. The only rule is that your controller sends commands
that follow the contract in [`protocol/PROTOCOL.md`](../../protocol/PROTOCOL.md).

*(The full student guide arrives in M3. For now:)*

1. Open the sim page, https://ahrtlab.github.io/Hackathon/ in **Chrome** (click Allow when it asks about the local
   network). It drives by keyboard (W/A/S/D) even with no bridge. **Safari, Firefox, or flaky wifi:** skip this
   and use step 2 with `jackal-bridge --serve-site --open`, which serves the page from your own laptop.
2. From the repo root: `conda env create -f environment.yml`, then `conda activate jackal`, then run `jackal-bridge` and leave it running.
3. Send commands. The ready-made examples:

| Example | What it shows |
|---|---|
| [`examples/keyboard_teleop.py`](examples/keyboard_teleop.py) | Hold-to-drive window (keys or a joystick) that sends through the bridge, the same feel as the sim page |
| [`examples/terminal_teleop.py`](examples/terminal_teleop.py) | Smallest possible sender: tap keys in a terminal to step the speed (no window; works over SSH) |
| [`examples/fake_myo_lsl.py`](examples/fake_myo_lsl.py) | Synthetic 8-ch EMG + IMU on LSL; `--emit-cmd` also drives the robot over LSL |

Then write your own controller against [`protocol/PROTOCOL.md`](../../protocol/PROTOCOL.md).
BioRadio teams can reuse the LSL streaming code in [`../2026-bioradio/`](../2026-bioradio/).
