# Staff Runbook: AWARE-AI Jackal Hackathon

For organizers and TAs. Students use [`events/2026-aware-ai-jackal/STUDENT_GUIDE.md`](../events/2026-aware-ai-jackal/STUDENT_GUIDE.md);
design notes and every quirk we hit are in [`SPIKE_FINDINGS.md`](SPIKE_FINDINGS.md).

## 1. Deploying

- **The sim site** (https://ahrtlab.github.io/Hackathon/) deploys itself. Every push to `main` runs
  `.github/workflows/pages.yml`, which runs the unit tests, builds, and publishes in about 2 minutes. Watch
  the repo's **Actions** tab. A red run means a test failed and the previous site stays live.
- One-time repo setting: **Settings → Pages → Source: GitHub Actions**. If the site ever shows the README
  instead of the sim, this setting has been changed to "Deploy from a branch".
- **Courses:** edit or add `web/public/courses/*.json` (format: `web/public/courses/README.md`;
  L1–L3 come from `web/scripts/make_courses.py`). `npm test` (and CI) fails if a course doesn't compile,
  starts in a collision, or can't be completed by the reference autopilot.
- **lsl-web-viewer** is its own repo (https://github.com/AHRTLab/lsl-web-viewer). Releases are git tags;
  `environment.yml` here pins one (currently `v0.2.0`). To ship a viewer change, tag a new version there,
  push the tag, then update the pin.
- **Before an event:** run everything locally once:
  ```bash
  cd web && npm test && npm run e2e:chrome          # sim, bridge link, courses, knobs, RTLX
  cd ../bridge && pytest -q
  cd ../events/2026-aware-ai-jackal/examples && pytest -q tests
  ```

## 2. Pre-event checklist (a day before)

**Every laptop** (student or lab):
- [ ] `git clone https://github.com/AHRTLab/Hackathon.git`, then `conda env create -f environment.yml` (or `conda env update … --prune`).
- [ ] `conda activate jackal && jackal-bridge --serve-site --open` once while online. This caches the site
      (about 3 MB) so it also works offline. The page should load, and the top-left panel should turn amber.
- [ ] `python events/2026-aware-ai-jackal/examples/keyboard_teleop.py` drives the robot (panel turns green).
- [ ] Pick L1, then run `python events/2026-aware-ai-jackal/examples/autopilot_gates.py`. It should finish and print `result: finish`.
- [ ] **Macs:** System Settings → Privacy & Security → **Bluetooth**: enable the terminal app students will use.
- [ ] Google Chrome installed (the GitHub Pages link needs it; other browsers must use `--serve-site`).
- [ ] If recording: [LabRecorder](https://github.com/labstreaminglayer/App-LabRecorder/releases) installed.

**Every Myo armband:**
- [ ] Charged (USB). Myo Connect **quit** on every laptop (it holds the armband).
- [ ] `python events/2026-aware-ai-jackal/examples/myo_check.py` connects, buzzes twice and shows the battery %.
      Label each armband with its address from step 2 of that output (useful when 10 are in one room).

## 3. On the day

**Start order on each laptop** (separate terminals, all `conda activate jackal`, all in `Hackathon/`):
1. `jackal-bridge --serve-site --open`: the sim opens. Pick the course.
2. The input: `myo_lsl_publisher.py` (real Myo) or `fake_myo_lsl.py`. Then `lsl-web-viewer --open` to check signals.
3. The team's controller (or `myo_threshold_controller.py`, `keyboard_teleop.py`, …).

**Reading the sim page:**

| Where | What it tells you |
|---|---|
| Top-left light | grey = no bridge · amber = bridge, nobody driving · green = driving (source + ingress shown) · "Another sim tab" = close the other tab |
| HUD status pill | OK · IDLE · **DEADMAN** (commands stopped for > 250 ms) · **E-STOP** (latched; Clear E-stop) |
| HUD badge `⏱ 300 ms · 10 % drop` | a telepresence condition is active |
| Top centre | course, clock, gates, live score; the next gate glows yellow |

**Telepresence conditions (studies):** set **latency** (0–1000 ms) and **drop** (0–50 %) in the controls
panel, or put them in the URL so every run is identical:
`http://localhost:8765/Hackathon/?course=L1-gates&latency=300&drop=10&seed=1&rtlx=1`.
They apply to every input (bridge and keyboard). A change during a run waits for **Reset**, so each run
has one condition. `rtlx=1` turns on the NASA-RTLX form after each run.

**Collecting data at the end of a session:**
- **Runs CSV** (one row per run: time, score, collisions, missed gates, path, smoothness, deadman %,
  drops, latency, knob settings + seed, RTLX + subscales) and **Last trace** (20 Hz) from the page.
  These live in the browser tab only, so download them before closing it.
- lsl-web-viewer recordings: the folder shown next to "saving to" (CSV per stream per take).
- LabRecorder `.xdf`: `Myo_EMG`, `Myo_IMU`, `Myo_Events`, `JackalState`, `JackalScan`, `JackalEvents`, `JackalCmd`.
- In-session learning only, so no IRB. **If any of this becomes research data, IRB applies.**

## 4. Troubleshooting (staff level)

| Symptom | Cause → fix |
|---|---|
| Bridge: "address already in use" | Something else holds port 8765 (on the dev Mac: the `claude-science` app, which also takes 8766). `jackal-bridge --serve-site --open --port 8790`. Clients then need `--url ws://localhost:8790/cmd` (or `--bridge ws://localhost:8790`). |
| Panel grey on the GitHub Pages link | Chrome's local-network prompt was denied, so re-allow it (lock icon → Site settings), or use `--serve-site`. **Safari never connects from the GitHub link** (it blocks https → ws://localhost with no prompt): always `--serve-site`. |
| Bridge log: "refused a WebSocket from origin …" | A page from an unknown site tried to connect (by design). A fork hosted elsewhere: `--allow-origin https://yourorg.github.io`. |
| "Another sim tab is using the bridge" | Two sim tabs; only one may connect. Close one, or press Connect in the one to keep. |
| DEADMAN flicker | The sender loop is slower than 4 Hz or blocks (slow classifier). Send at 20 Hz; resend the last value. High `drop` settings also cause it (expected). |
| Commands ignored | Another source is active (HUD/panel shows it). It must be silent for 1 s before another takes over. |
| Myo: found but no connection | Myo Connect still running, or the armband is connected to another laptop. On macOS: addresses from a plain scan are per-computer UUIDs; our scripts handle it. Pass the real MAC from `myo_check.py` step 2 to `--addr`. |
| Myo: red "badly formed hexadecimal UUID" tracebacks | Nearby phones / beacons advertising 32-bit IDs (bleak 0.20 bug). Our Myo scripts suppress it; harmless anyway. |
| Myo: Python exits silently on the first scan (Mac) | The terminal app has no Bluetooth permission (see checklist). |
| Myo: very noisy EMG | Fit (sizing clips, thickest part of the forearm), 2 min warm-up, re-sync. `myo_lsl_publisher.py` already uses the filtered mode. |
| LSL streams not visible across two machines | Campus wifi (eduroam) blocks multicast. Run everything on one laptop (the default), or add an `lsl_api.cfg` with `[lab]` `KnownPeers = {192.168.x.a, 192.168.x.b}` on both. |
| `pip`/`conda` installs fail on an Apple-silicon Mac with an Intel Anaconda | Works under Rosetta, but slow. Better: `CONDA_SUBDIR=osx-arm64 conda env create -f environment.yml`. |

## 5. Known limits

- **Physics mode** (real skid-steer wheel friction) is not built yet (deferred). The robot is kinematic:
  it drives exactly as commanded and is stopped by obstacles.
- The real-Jackal ROS adapter (brief M5) is not built.
- Run logs live in the browser tab until downloaded; there is no server.
