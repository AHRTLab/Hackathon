# AWARE-AI Hackathon: Jackal Sim + Command Bridge

Build your own controller for a Clearpath Jackal. The only rule is that your controller sends commands
that follow the contract in [`protocol/PROTOCOL.md`](../../protocol/PROTOCOL.md).

*(The full student guide arrives in M3. For now:)*

1. Open the sim page in Chrome. It drives by keyboard (W/A/S/D) even with no bridge.
2. `pip install -e 'bridge[lsl]'` from the repo root, then run `jackal-bridge` and leave it running.
3. Send commands. The ready-made examples:

| Example | What it shows |
|---|---|
| [`examples/keyboard_teleop.py`](examples/keyboard_teleop.py) | Minimal WebSocket command sender (`pip install websockets`) |
| [`examples/fake_myo_lsl.py`](examples/fake_myo_lsl.py) | Synthetic 8-ch EMG + IMU on LSL; `--emit-cmd` also drives the robot over LSL |

Then write your own controller against [`protocol/PROTOCOL.md`](../../protocol/PROTOCOL.md).
BioRadio teams can reuse the LSL streaming code in [`../2026-bioradio/`](../2026-bioradio/).
