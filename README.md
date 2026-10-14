# AHRT Lab Hackathons

One repo for every AHRT Lab hackathon. Reusable platform code sits at the root, and each event gets
its own folder under `events/` with its guide, starter code, and presentations.

## Events

| Event | Folder | What teams build |
|---|---|---|
| **AWARE-AI: Jackal Sim + Command Bridge** (current) | [`events/2026-aware-ai-jackal/`](events/2026-aware-ai-jackal/) | A human-input controller (Myo EMG/IMU, joystick, BioRadio, anything) that drives a Clearpath Jackal in a browser simulation |
| BioRadio Hackathon 2026 | [`events/2026-bioradio/`](events/2026-bioradio/) | Biosignal → ML classifier → control system |
| Myo + LSL data collection (legacy) | [`events/myo-lsl-legacy/`](events/myo-lsl-legacy/) | Myo armband data collection over Lab Streaming Layer |

## Jackal platform (root)

```
protocol/   the command/state contract (protocol/v1); start with protocol/PROTOCOL.md
web/        browser MuJoCo-WASM Jackal sim (Vite + TypeScript + three.js), deploys to GitHub Pages
bridge/     Python bridge: LSL / UDP / WebSocket in → browser out (deadman, clamps, source arbitration)
models/     Jackal MJCF + meshes, plus the reproducible URDF→MJCF converter
docs/       platform design brief and spike findings
```

Quickstart (staff / development):

```bash
cd web && npm install && npm run dev        # open the printed URL in Chrome; drive with W/A/S/D
pip install -e 'bridge[lsl]'                # Python 3.10+, from the repo root
jackal-bridge                               # then, in another terminal:
python events/2026-aware-ai-jackal/examples/keyboard_teleop.py
```

Tests: `cd web && npm test && npm run e2e` (vitest + Playwright in your installed Chrome) and
`cd bridge && pytest`. Regenerate the robot model with `python models/jackal/convert.py` (needs `pip install xacro`).

See [`docs/BRIEF.md`](docs/BRIEF.md) for the design and milestones.
