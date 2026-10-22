> Copied from `AHRTLab/IEEE-telepresence-shared-control/docs/JACKAL_HACKATHON_BRIEF.md`. In this repo the
> platform (`protocol/`, `web/`, `bridge/`, `models/`) sits at the root, and the event material (starter kit,
> guide, presentations) lives at the root of AHRTLab/Hackathon (`main` = the current event; past events are branches) instead of a separate new repo (brief §13).

# AWARE-AI Hackathon: Jackal Sim + Command Bridge
## Project Brief & Implementation Spec

> Input for the implementation plan. It records decisions, constraints, interfaces, and known risks.
> It is not the plan itself; the plan (file-by-file tasks) is produced from this.
> Sibling project for patterns and reusable code: `AHRTLab/IEEE-telepresence-shared-control`
> (see its `docs/BRIEF.md`, `docs/SPIKE_FINDINGS.md`, `web/extras/logger.ts`, `web/extras/rtlx.ts`,
> `web/deploy.sh`, and the Playwright `*_test.mjs` files).

---

## 1. Context & goal

- **Event:** AWARE-AI hackathon. *(TBD: date, duration, number of teams, team size, participant background.)*
- **Lead:** Jamison Heard (RIT, AHRT Lab).
- **Goal:** Teams build their own **human-input controller** (Myo EMG/IMU, joystick, keyboard, anything
  else) for a **Clearpath Jackal** in a browser MuJoCo simulation. The only requirement: their
  controller emits commands that follow **one fixed command contract** (Section 3). The sim, the bridge,
  and every team's controller are developed and tested independently against that contract.
- **Design principle:** the contract mirrors ROS `geometry_msgs/Twist` (`linear.x`, `angular.z`) so the
  same commands can later drive the **physical lab Jackal** (ROS Noetic, `jackal_velocity_controller` on
  `/cmd_vel`) with no change on the team's side (Section 8, stretch).

## 2. System overview

```
 [team controller]                    [bridge, Python, localhost]                [browser sim]
  Myo / gamepad / EMG    --LSL-->   ingress: LSL | UDP | WebSocket     --WS-->   MuJoCo-WASM Jackal
  classifier / script    --UDP-->   validate, select active source,              course + scoring
                         --WS--->   rate-limit, forward                <--WS--   state @ 20 Hz
                                    egress: browser WS, LSL outlets,
                                            (stretch) ROS /cmd_vel
```

- Everything runs on **one laptop per team** by default: controller, bridge, and Chrome tab.
- The browser page is a **static site** (GitHub Pages) that connects to `ws://localhost:8765`.
- Without a bridge, the page falls back to **keyboard + Gamepad API** so it is always drivable.

## 3. The command contract (the most important section; freeze early)

Version this as `protocol/v1`. Ship a JSON Schema in `protocol/cmd.schema.json` and
`protocol/state.schema.json`, plus `protocol/PROTOCOL.md` for students.

### 3.1 Command (controller to sim)

JSON over WebSocket or UDP:

```json
{"type": "cmd", "v": 0.4, "w": -0.8, "estop": false, "action": null,
 "source": "team3-myo", "seq": 1042, "t": 1739.214}
```

| Field | Type | Req | Meaning |
|---|---|---|---|
| `type` | `"cmd"` | yes | Message kind |
| `v` | float, m/s | yes | Forward speed (body x). Positive = forward |
| `w` | float, rad/s | yes | Yaw rate (body z). Positive = counter-clockwise (left) |
| `estop` | bool | no (false) | Latched stop until a `{"type":"reset"}` or UI button |
| `action` | string or null | no | Discrete event: e.g. `"horn"`, `"mark"`, `"mode:<name>"`. Logged, shown in HUD |
| `source` | string | no | Free-form id, shown in HUD and logged |
| `seq` | int | no | Sender sequence number (lets the sim count drops) |
| `t` | float, s | no | Sender clock; echoed back for latency measurement |

LSL form of the same command (for teams already in LSL):
- Stream name `JackalCmd`, type `Control`, **2 channels float32 `[v, w]`**, any nominal rate
  (0 = irregular is fine).
- Optional stream name `JackalAction`, type `Markers`, 1 channel string: `estop`, `reset`, or any
  `action` string.

### 3.2 Rules the sim enforces (authoritative; the bridge enforces the same as defense in depth)

- **Clamp:** `|v| <= V_MAX`, `|w| <= W_MAX`. Sim defaults `V_MAX = 2.0 m/s`, `W_MAX = 4.0 rad/s`
  (Jackal spec; verify against `jackal_control/config/control.yaml`). Course configs may lower these.
- **Acceleration limit:** rate-limit applied `v`, `w` (configurable; default about `2.0 m/s^2`,
  `6.0 rad/s^2`, tune for feel). Applied values are reported in state.
- **Deadman:** no valid command for **250 ms** means the target goes to zero (decelerate under the
  accel limit). HUD shows `DEADMAN`. Students will unplug things; this must never fail.
- **Rate:** accept up to 100 Hz; apply latest-wins once per control tick (50 Hz).
- **Invalid messages** (schema fail, NaN, inf) are dropped and counted, never applied.

### 3.3 State (sim to controllers), 20 Hz

Available on the bridge WebSocket (`ws://localhost:8765/state`) and as LSL outlets, so teams can build
closed-loop or assistive controllers (shared autonomy, collision avoidance, gate guidance):

```json
{"type": "state", "t": 12.35, "pose": {"x": 1.2, "y": -0.4, "yaw": 0.31},
 "vel": {"v": 0.38, "w": -0.75}, "cmd_applied": {"v": 0.4, "w": -0.8}, "cmd_echo_t": 1739.214,
 "status": "ok", "collisions": 2,
 "scan": {"angle_min": -2.356, "angle_inc": 0.02618, "range_max": 10.0, "ranges": [ ... 180 floats ... ]},
 "course": {"id": "L1-gates", "next_gate": 3, "gates_passed": 2, "elapsed": 12.35, "done": false}}
```

- `status` is one of `ok | deadman | estop | idle | finished`.
- `scan` is a **simulated 2D planar lidar** (180 beams over 270 degrees, chassis height). It stands in
  for the real robot's Velodyne in a simplified form.

LSL outlets published by the bridge:
- `JackalState`, type `State`, float32 channels `[x, y, yaw, v, w, v_cmd, w_cmd, collisions]`, 20 Hz.
- `JackalScan`, type `Range`, 180 float32 channels, 20 Hz.
- `JackalEvents`, type `Markers`, strings: `run_start`, `gate:<k>`, `collision`, `deadman`, `estop`,
  `finish`, `action:<x>`. Lets LabRecorder save **EMG + robot state + task events time-synced in one
  XDF**, which is the point of using LSL for AWARE-AI.

## 4. Simulation (`web/`, static site, what students open)

### 4.1 Stack decision

- **Vite + TypeScript + three.js + official MuJoCo WASM (`@mujoco/mujoco`, single-threaded build)**,
  so no COOP/COEP headers are needed and GitHub Pages works.
- **Do not use mjswan here.** mjswan's value in the telepresence project was the ONNX policy pipeline;
  this project has no policy, and mjswan required patching its generated runtime to inject control.
  A hand-written step loop with the WebSocket input is simpler. Known glue costs (asset VFS writes,
  MuJoCo Z-up vs three.js Y-up, quaternion order) are modest for one robot plus primitive obstacles.
- Fallback if the official bindings block something: mjswan 0.8.0 with a vendored template.

### 4.2 Jackal model

- No Jackal in MuJoCo Menagerie (verify). Convert `jackal_description` (Clearpath, BSD; verify license)
  URDF to MJCF with a scripted, reproducible converter (`models/jackal/convert.py`); simplify
  collision to boxes and cylinders; keep the STL meshes for visuals.
- Key dimensions to verify from the URDF: chassis about 0.508 x 0.430 x 0.25 m, about 17 kg, wheel
  radius about 0.098 m, track about 0.376 m.
- Optional visual-only payload to match the lab robot (lidar puck, arm in retract). No arm control.

### 4.3 Drive model (decision)

- **Default: kinematic base.** Chassis on planar joints (`slide x`, `slide y`, `hinge yaw`) with
  velocity actuators; each tick set targets from applied `(v, w)` rotated into the world frame.
  Obstacles still collide and block the robot. Wheels spin for visuals only.
  Rationale: skid-steer contact friction is notoriously finicky in physics sims (the lab already hit
  this in Isaac, needing an inflated `wheelDistance`); the hackathon cannot depend on it.
- **Stretch: "physics mode" toggle.** Free-joint chassis + 4 wheel velocity actuators with differential
  mixing; documented friction parameters. Lets advanced teams feel real skid-steer behavior.

### 4.4 Page features

- **Connection panel:** bridge URL (default `ws://localhost:8765/sim`, overridable by `?bridge=` URL
  param), status light, active `source`, message rate, drops, round-trip latency from `t` echo.
- **HUD:** applied `v`/`w` bars, status (`ok`/`deadman`/`estop`), last `action`, timer, gates, collisions.
- **Cameras:** chase (default), top-down, onboard first-person. FPV is the hard "telepresence" view.
- **Fallback input:** keyboard (`W/S` v, `A/D` w, `Space` stop) and Gamepad API, used only when no
  bridge source is active. Bridge input always wins when present.
- **Run controls:** course picker, Start, Reset, E-stop, Clear E-stop, team id field, CSV download.
- **Optional AWARE-AI knobs (cheap, high value):** injected command latency (0 to 1000 ms), packet
  drop percentage, and a post-run **NASA-RTLX** form (reuse `rtlx.ts`). Lets teams study how their
  interface degrades under telepresence conditions.

### 4.5 Courses (`web/public/courses/*.json`)

Data-driven so staff can add courses without code: arena size, walls, obstacles (box/cylinder),
ordered gates (two posts each), start pose, finish zone, time limit, optional speed caps.

| Id | Course | Tests |
|---|---|---|
| L0 | Sandbox | Open arena, no scoring; for bring-up |
| L1 | Gates | 6 to 8 wide gates in open field; basic steering |
| L2 | Slalom | Tight alternating gates; fine control of `w` |
| L3 | Corridor + dock | Narrow corridor, then stop inside a box (within 0.15 m and 10 degrees) for 1 s; fine control of `v` and stopping |
| L4 (stretch) | Dynamic | A moving obstacle or a goal only visible in `scan`; rewards closed-loop assistance |

Scoring (shown at finish, logged): `score_time = elapsed + 5 s per collision + 10 s per missed gate`;
DNF on timeout. Also log path length, mean `|dw/dt|` (smoothness), percent time in deadman, and
command drop count.

### 4.6 Logging

- Per run: one CSV row (team, source, course, completed, elapsed, score_time, collisions, missed gates,
  path length, smoothness, deadman percent, drops, mean latency, latency/drop knob settings, RTLX).
- Per tick: downloadable 20 Hz trace (CSV) of pose, applied and requested commands, status.
- Client-side only. **If data becomes research data, IRB applies** (same note as the telepresence brief).

## 5. Bridge (`bridge/`, Python, runs on each team laptop)

- Single command: `jackal-bridge` (or `python -m bridge`). Python 3.10+, `asyncio`, `websockets`,
  `pylsl`, `jsonschema`. One `requirements.txt`; consider `uv` for fast installs.
- **Ingress adapters** (all enabled by default):
  - LSL inlet: resolves `JackalCmd` (+ `JackalAction`).
  - UDP JSON on `127.0.0.1:9870` (easiest from MATLAB or any language).
  - WebSocket client endpoint `ws://localhost:8765/cmd`.
- **Egress:** browser `ws://localhost:8765/sim`; state on `ws://localhost:8765/state`; LSL outlets
  (Section 3.3); stretch ROS adapter (Section 8).
- **Source arbitration:** latest-wins **from one active source**. Active source = first to send after
  idle, or pinned via `--source lsl|udp|ws`. Switching requires the active source to go silent for 1 s
  (prevents two inputs fighting). Report active source to the browser.
- **Validation + clamping** identical to Section 3.2 (shared constants generated from the schema, or
  one `protocol/limits.json` read by both TS and Python).
- **Console view:** one-line live status (source, rate, last `v`/`w`, browser connected, LSL peers).
- `--loopback-test` flag: sends a short scripted command sequence and checks state comes back, for
  quick "is my setup working" checks at the event.

## 6. Starter kit for teams (`examples/`)

Each example is short, commented, and runnable on its own:

| File | What it shows |
|---|---|
| `keyboard_teleop.py` | Minimal command sender (WebSocket) |
| `gamepad_teleop.py` | Joystick axes to `(v, w)` with deadzone and expo curve |
| `fake_myo_lsl.py` | Publishes synthetic 8-channel EMG (200 Hz) + IMU as LSL; lets teams build without hardware |
| `myo_lsl_publisher.py` | Real Myo to LSL (raw EMG + IMU). See risk 1 |
| `myo_emg_example.py` | Minimal read → feature → decide → send example. (The baseline `myo_threshold_controller.py` is staff-only, gitignored under `staff/`) |
| `state_listener.py` | Subscribes to state and prints pose, scan minimum, gate progress |
| `assist_example.py` | Shared-autonomy example: blends human `(v, w)` with a scan-based collision-avoidance term |
| `autopilot_gates.py` | Pure-pursuit through gates from state; reference solution and integration test |
| `controller_template.py` | `def step(state, my_input) -> (v, w)` skeleton with the plumbing done |
| `matlab/send_cmd.m` | UDP send snippet for MATLAB users |

## 7. Student-facing docs

- `docs/STUDENT_GUIDE.md` (one page): install, run bridge, open URL, send your first command, read
  state, the rules (deadman, clamps, one active source), how scoring works, how to record with
  LabRecorder.
- `protocol/PROTOCOL.md`: the contract, with copy-paste examples in Python, MATLAB, and JavaScript.
- `docs/RUNBOOK.md` (staff): build, deploy, pre-event checklist, troubleshooting table.

## 8. Real Jackal mode (stretch; not required for hackathon day)

- Bridge `--ros` adapter publishes `geometry_msgs/Twist` to the Jackal (ROS Noetic) at 20 Hz.
  Run it where `rospy` exists (on the Jackal, or a Noetic Docker container with `ROS_MASTER_URI`
  pointed at the Jackal). Alternative: rosbridge + WebSocket.
- Publish to a topic that the Jackal's `twist_mux` ranks **below** joystick teleop (verify topic names
  and priorities in the robot's `twist_mux` config), so the staff Xbox controller always overrides.
- **Safety in real mode:** caps `0.5 m/s` and `1.0 rad/s`; deadman 250 ms enforced in the bridge;
  staff member holding the physical e-stop; cleared area; arm in retract with its teleop node idle.
- Finale idea: the top team's controller drives the real robot through a taped-out L1 course.

## 9. Non-goals

No RL training or ONNX policies. No multi-user shared sim. No 3D lidar or camera streams to teams
(2D scan only). No arm control. No cloud backend.

## 10. Known risks / open questions (resolve in the spike)

1. **[HIGH] Myo connectivity on event laptops.** Myo is discontinued; Myo Connect/SDK support on
   current macOS/Windows is uncertain. Candidates: `pyomyo` (needs the Myo USB BLE dongle) or a direct
   BLE client via `bleak`. Test on the actual hackathon machines early; count working armbands and
   dongles. `fake_myo_lsl.py` keeps teams unblocked regardless.
2. **[MEDIUM] Chrome Local Network Access.** An HTTPS GitHub Pages site connecting to
   `ws://localhost` should be allowed (localhost counts as a secure context), but recent Chrome
   versions may show a local-network permission prompt. Document "click Allow". Fallback: serve the
   site locally (`npm run preview`) over plain HTTP.
3. **[MEDIUM] Cross-machine setups.** An HTTPS page cannot open plain `ws://` to a LAN IP (mixed
   content). If a team splits devices, serve the site locally or run the bridge with TLS. Default
   guidance: everything on one laptop.
4. **[MEDIUM] LSL discovery on campus wifi.** Multicast may be blocked on eduroam; same-machine
   streams work over loopback. For cross-machine LSL, use `KnownPeers` in `lsl_api.cfg`.
5. **[LOW] pylsl on macOS ARM.** Recent `pylsl` wheels bundle liblsl (verify version); otherwise
   install liblsl via Homebrew/conda.
6. **[LOW] MuJoCo WASM raycasting for the scan.** Confirm `mj_ray`/`mj_multiRay` are exposed in the
   JS bindings; 180 rays at 20 Hz is cheap either way.
7. **[LOW] First-load size on event wifi.** MuJoCo WASM is about 9 MB; no onnxruntime this time.
   Pre-load on laptops before the event.

## 11. Milestones

| M | Deliverable | Done when |
|---|---|---|
| **M0 Spike** | Jackal MJCF loads in browser; kinematic drive by keyboard; L0 sandbox | Robot drives and collides with a box in Chrome on a Mac |
| **M1 Bridge** | Bridge with LSL/UDP/WS ingress, browser egress, deadman, clamps, HUD connection panel | `keyboard_teleop.py` and `fake_myo_lsl.py` both drive the sim; unplug test stops the robot |
| **M2 Courses** | L1 to L3, scoring, logging, CSV, cameras, state + scan + LSL outlets | `autopilot_gates.py` completes L1 to L3 headlessly; XDF recording contains all streams |
| **M3 Starter kit** | All `examples/`, `STUDENT_GUIDE.md`, `PROTOCOL.md` | A new user goes from clone to driving in under 10 minutes following only the guide |
| **M4 Polish** | Latency/drop knobs, RTLX, physics mode, deploy to GitHub Pages, RUNBOOK | Live URL works on a clean Chrome profile with a local bridge |
| **M5 Stretch** | Real Jackal ROS adapter, L4 | Staff-supervised drive of the lab Jackal from `keyboard_teleop.py` |

## 12. Acceptance tests (automate with Playwright + pytest, like the telepresence repo)

1. Page loads, scene renders, no console errors.
2. Bridge + scripted sender: `v = 0.5` for 3 s moves the robot 1.2 to 1.6 m forward (accel limited).
3. **Deadman:** stop sending; applied speed below 0.05 m/s within 400 ms.
4. **Clamp:** send `v = 10`; applied `v <= V_MAX`. NaN and malformed JSON are dropped and counted.
5. **Arbitration:** two sources sending; only the active one is applied until it goes silent for 1 s.
6. `autopilot_gates.py` completes L1 and logs a CSV row with all fields from Section 4.6.
7. LSL round trip: `fake_myo_lsl.py` to controller to `JackalCmd` to sim to `JackalState` is received
   by a test inlet.
8. Fallback: with no bridge, keyboard drives the robot.

## 13. Suggested repo layout (new repo, e.g. `AHRTLab/aware-ai-jackal-sim`)

```
protocol/   cmd.schema.json  state.schema.json  limits.json  PROTOCOL.md
models/     jackal/ (MJCF, meshes, convert.py, LICENSE)
web/        Vite + TS app (src/sim, src/net, src/ui, src/courses), public/courses/*.json, tests/
bridge/     bridge package (ingress/, egress/, arbitration.py, cli.py), tests/
examples/   starter kit (Section 6), matlab/
docs/       STUDENT_GUIDE.md  RUNBOOK.md  BRIEF.md (this file)
scripts/    deploy.sh (adapt from the telepresence repo)
```

## 14. Open decisions for the lead (fill in before planning)

- Hackathon date, length, number of teams, team size, participants' programming background.
- Event machines: student laptops (which OSes) or lab machines; how many Myos and dongles work.
- Is the real Jackal finale in scope?
- Public or private repo (student access, GitHub Pages hosting).
- Whether RTLX and the latency/drop knobs are part of judging or just optional exploration.
- Judging criteria beyond score time (creativity of interface, workload, accessibility).

## 15. Workflow

This brief, then a detailed implementation plan in Claude Code (plan mode), then implementation
milestone by milestone, each closed by its acceptance tests. Start with **M0 + the contract files**
so teams' starter code can be written in parallel against `protocol/v1`.
