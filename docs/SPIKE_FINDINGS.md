# M0 Spike Findings: Jackal in browser MuJoCo

Status: **M0 done.** The Jackal MJCF loads in Chrome on a Mac, drives by keyboard in the L0 sandbox,
and collides with the box without tunnelling. Evidence: `web/tests/unit/sim.test.ts` (physics in Node)
and `web/tests/e2e/m0.spec.ts` (5/5 in Chrome 154 on macOS arm64).

## Answers to the brief's open questions

| Brief item | Finding |
|---|---|
| §4.1 official bindings | **`@mujoco/mujoco` 3.14.0 works**, so the mjswan fallback isn't needed. `loadMujoco()` is the default export; models load via `new mj.MjVFS()` + `vfs.addBuffer(name, bytes)` + `mj.MjModel.from_xml_string(xml, vfs)`. No FS juggling. `<include file="jackal.xml"/>` and `meshdir` resolve inside the VFS. Typed arrays (`qpos`, `ctrl`, `geom_xpos`…) are live views. `data.contact` is a **copy**: delete it (and each element) after use. |
| §4.1 axis / quaternion glue | **None needed.** three.js runs Z-up (`camera.up = +z`), and geoms are placed from MuJoCo's row-major `geom_xmat` + `geom_xpos` straight into a `Matrix4`. Meshes come from the compiled model (`mesh_vert`/`mesh_face`), so the browser loads no STLs separately. |
| §4.2 Jackal model | No Jackal in Menagerie. `models/jackal/convert.py` expands upstream `jackal/jackal@noetic-devel` (pinned 4ddf9b5) with pip `xacro`, after rewriting `$(find …)` and dropping the accessory includes (they pull other ROS packages). It then emits our own MJCF. Measured footprint **0.511 × 0.430 × 0.248 m, 18.4 kg, r = 0.098 m, track 0.3756 m**, matching brief §4.2. Upstream license is BSD-3-Clause (copied to `models/jackal/LICENSE`). |
| §3.2 limits | `jackal_control/config/control.yaml` confirms `max_velocity` 2.0 m/s / 4.0 rad/s and **`cmd_vel_timeout: 0.25`**, the same as our deadman. The real robot's accel limits (20 m/s², 25 rad/s²) are far above our feel-tuned 2 / 6. |
| §10.6 raycasting | **`mj_ray` and `mj_multiRay` are exposed** in the JS typings, so the M2 lidar is unblocked. |
| §10.7 load size | `mujoco.wasm` is 10.3 MB raw / **2.5 MB gzip**; JS 623 kB / 169 kB gzip; meshes 190 kB. |
| Mac perf | Real-time with large headroom: the Node physics tests run a 4 s drive in ~25 ms. Headless SwiftShader Chrome still holds 17 fps render with physics at real time. |

## Design decisions made during the spike

- **Deadman needs a braking limit.** With symmetric 2 m/s² deceleration, 0.5 m/s → < 0.05 m/s takes
  250 + 225 = 475 ms, which fails acceptance test 3 (400 ms). Added `A_V_BRAKE = 4.0`, `A_W_BRAKE = 12.0` to
  `limits.json`: the robot brakes at twice its acceleration. E-stop is instant.
- **Kinematic base works as intended.** Velocity actuators (kv 600, force-limited to 400 N) on slide x/y
  plus a force-limited hinge-yaw actuator. The robot stops exactly at box face minus half its length
  (x = 2.045 for a box face at 2.3), at both 1 and 2 m/s. Collision bits: robot/obstacles 2, floor 1.
- **Status semantics:** `deadman` means "was told to move, then the link went quiet". A sender whose
  last command was a clean stop goes `idle` instead, so keyboard use doesn't flash DEADMAN on every
  key release.
- **The sim core is DOM-free** (`web/src/sim/*`), and MuJoCo WASM runs in Node, so all physics
  acceptance checks are fast vitest tests. Playwright covers rendering, input and UI.

## Toolchain gotchas

1. **Python on this Mac is x86_64 Anaconda (Rosetta)**, so the MuJoCo *Python* wheel refuses to import.
   Nothing depends on it: the model is validated by the WASM build in Node. The bridge (websockets,
   jsonschema, pylsl 1.18.5 with bundled liblsl 1.18) works fine under Rosetta.
2. **Playwright uses the installed Google Chrome** (`channel: 'chrome'`). The bundled-Chromium download
   stalled, and real Chrome is what students use anyway. `--use-gl=swiftshader` (the telepresence repo's
   flag) no longer creates a WebGL context in Chrome 154; use `--use-angle=swiftshader
   --enable-unsafe-swiftshader`.
3. **Headless first frames take ~2 s** (SwiftShader shader compile). Tests wait for `__sim.time > 0.3`.
4. `vite preview` on Node 26 must bind `127.0.0.1` explicitly, or Chrome gets `ERR_CONNECTION_REFUSED`
   on `localhost` (IPv6 vs IPv4).
5. npm 11 blocks install scripts by default; esbuild works anyway via its platform optional
   dependency, so no approval is needed.

## M1 findings (bridge)

- **Port 8765 can already be taken.** On the dev Mac, `claude-science` listens on 127.0.0.1:8765 *and*
  8766. 8765 is also the port in the `websockets` library's own examples, so collisions on student
  laptops are plausible. The bridge now prints a clear fix (`--port <PORT>` + `?bridge=ws://localhost:<PORT>/sim`).
  **Open decision:** keep 8765 (the brief's value), or freeze a less common default before teams start
  coding against `protocol/v1`.
- **Hidden tabs froze the sim (fixed).** Chrome pauses `requestAnimationFrame` in hidden/background tabs,
  so with physics stepped from rAF, covering Chrome with a terminal froze the robot and the state stream
  (`--loopback-test` failed). Physics now steps from a dedicated-worker timer (`web/src/sim/ticker.ts`),
  which keeps firing in hidden tabs; rAF only renders. Verified: loopback PASS with the page hidden.
- **RTT** is measured with a ping/pong on the 2 Hz `bridge_status` (`tb` → `pong`), not from
  `cmd_echo_tb`, because state is only sent every 50 ms and that echo overstates latency. Measured RTT
  on one laptop is about 1 ms.
- **pylsl 1.18.5 (bundled liblsl 1.18) works under Rosetta x86_64 Python**, including the loopback
  `JackalCmd` / `JackalAction` round trip in `bridge/tests/test_lsl.py` and the e2e LSL spec.
- Chrome logs every refused WebSocket attempt while no bridge runs (reconnect backoff 0.5 → 5 s). That
  is expected; the e2e "no console errors" check ignores just those lines.

## Hosting findings (first GitHub Pages deploy)

- **Chrome** on `https://ahrtlab.github.io/Hackathon/` shows the Local Network Access prompt ("allow access to
  apps/devices on your local network") before connecting to `ws://localhost`. Students must click Allow.
- **Safari 26.6 blocks the https page → `ws://localhost` connection with no prompt.** Verified on the dev Mac:
  from the Pages URL the bridge never saw a connection attempt; the same build served from
  `http://localhost` connected immediately. GitHub Pages therefore cannot support Safari.
- **Fix: `jackal-bridge --serve-site`.** The bridge also serves the sim page at
  `http://localhost:8765/Hackathon/` (same origin as the WebSocket, so there's no mixed content and no Chrome prompt).
  The page detects that it was served by the bridge (an injected `<meta name="jackal-bridge">`) and connects
  back to its own host. Site source order: `--site-dir` → repo `web/dist` → the download cache, filled from
  `site.zip` published with the site (about 2.6 MB download, 11 MB on disk). Verified in Safari with the real downloaded site.
- The first Pages deploy showed a failed "deploy" job: GitHub started two runs 10 s apart (branch push
  plus enabling Pages) and the second collided with the first. Harmless; the first run is what's live.

## M2 findings

- **`mj_multiRay` works in the JS bindings** with `IntBuffer` / `DoubleBuffer` out-params (note `GetView()`,
  capital G; the package README says `getView`). Signature in 3.14: `(m, d, pnt, vec, geomgroup[6],
  flg_static, bodyexclude, geomid, dist, normal, nray, cutoff)`. 180 beams take about 0.03 ms.
- **Courses are verified completable in Node:** a TypeScript twin of `autopilot_gates.py` drives L1–L3
  in real MuJoCo inside `npm test` (L1 18 s, L2 29 s, L3 20 s; 0 collisions, 0 missed gates), so a bad
  course edit fails fast. The Python autopilot does the same through the real bridge in Playwright.
- **HUD hardening:** text that comes from team controllers (`source`, `action`) is now HTML-escaped
  before display.

## Deployment: GitHub Actions from `main`

- Publishing moved from a locally run `scripts/deploy.sh` (which pushed a built `gh-pages` branch) to
  `.github/workflows/pages.yml`: every push to `main` runs `npm test`, builds with
  `SITE_BASE=/<repo>/`, adds `site.zip` (for `jackal-bridge --serve-site`), and deploys. Pages source
  must be set to **GitHub Actions**. If it's set to "Deploy from a branch: main", GitHub renders the
  README as the site, which is exactly the "it's just READMEs" symptom we hit on 2026-10-15.
- `gh-pages` is a **record** of what is live, not what Pages serves: after each successful deploy the
  workflow's `record` job commits the exact published files there (message: `Deploy <sha> (main)`).
