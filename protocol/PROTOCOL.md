# Jackal Command Protocol, v1

This is the one contract every team's controller follows. Send commands that match it and your
controller will drive the browser sim today and, later, the real lab Jackal without changes. The fields
mirror ROS `geometry_msgs/Twist` (`linear.x` → `v`, `angular.z` → `w`).

Machine-readable versions: [`cmd.schema.json`](cmd.schema.json), [`state.schema.json`](state.schema.json),
and every numeric limit in [`limits.json`](limits.json). The sim and the bridge both read `limits.json`,
so that file is the source of truth if this page ever disagrees with it.

```
 your controller  ──LSL / UDP / WebSocket──►  jackal-bridge  ──WS──►  browser sim
                  ◄──────── state @ 20 Hz ──                 ◄──────
```

## 1. Sending commands

### Command message (JSON)

```json
{"type": "cmd", "v": 0.4, "w": -0.8, "estop": false, "action": null,
 "source": "team3-myo", "seq": 1042, "t": 1739.214}
```

| Field | Type | Required | Meaning |
|---|---|---|---|
| `type` | `"cmd"` | yes | Message kind |
| `v` | number, m/s | yes | Forward speed (body x). Positive = forward |
| `w` | number, rad/s | yes | Yaw rate (body z). Positive = counter-clockwise (turn left) |
| `estop` | bool | no (`false`) | Latched stop. Stays stopped until a `reset` message or the UI button |
| `action` | string or null | no | Discrete event, e.g. `"horn"`, `"mark"`, `"mode:fast"`. Logged and shown in the HUD |
| `source` | string | no | Your id, e.g. `"team3-myo"`. Shown in the HUD and logged |
| `seq` | integer ≥ 0 | no | Your sequence number (lets the sim count drops) |
| `t` | number, s | no | Your clock. Echoed back as `state.cmd_echo_t` so you can measure latency |

To clear an e-stop, send:

```json
{"type": "reset"}
```

### Where to send them (pick one)

| Transport | Address | Best for |
|---|---|---|
| WebSocket | `ws://localhost:8765/cmd` | Python, JavaScript |
| UDP | `127.0.0.1:9870`, one JSON message per datagram | MATLAB, C/C++, anything |
| LSL | stream `JackalCmd`, type `Control`, **2 float32 channels `[v, w]`**, any rate (irregular is fine) | Teams already in LSL (Myo, BioRadio pipelines) |

LSL events: an optional stream `JackalAction`, type `Markers`, with 1 string channel. Send `estop`,
`reset`, or any action string.

## 2. Rules the sim enforces

| Rule | Value | What it means for you |
|---|---|---|
| Clamp | `|v| ≤ 2.0 m/s`, `|w| ≤ 4.0 rad/s` | Bigger values are not rejected; they are clamped. Courses may set lower caps |
| Acceleration limit | speed up at ≤ 2.0 m/s² / 6.0 rad/s², brake at ≤ 4.0 m/s² / 12.0 rad/s² | The robot ramps toward your command. `state.cmd_applied` shows what is actually applied. E-stop is instant |
| **Deadman** | **250 ms** | If no valid command arrives for 250 ms, the robot stops. **Keep sending, even when the value hasn't changed** (10–50 Hz is good) |
| Rate | up to 100 Hz | Only the latest command is applied, once per 20 ms control tick |
| Invalid messages | dropped | Missing fields, wrong types, `NaN`, `Infinity`: dropped, counted, never applied |
| One active source | 1 s switch-over | The first sender after idle wins. Another sender is ignored until the active one has been silent for 1 s. `estop` and `reset` are accepted from **any** sender |

(`V_MAX`, `W_MAX` and the 250 ms timeout match the real Jackal's `jackal_control/config/control.yaml`:
`max_velocity` 2.0 m/s and 4.0 rad/s, `cmd_vel_timeout` 0.25 s. The real robot accelerates harder; the sim's
limits are gentler so it feels controllable.)

## 3. Reading state (closed-loop / assistive controllers)

Subscribe to `ws://localhost:8765/state` and you'll receive this at 20 Hz:

```json
{"type": "state", "t": 12.35, "pose": {"x": 1.2, "y": -0.4, "yaw": 0.31},
 "vel": {"v": 0.38, "w": -0.75}, "cmd_applied": {"v": 0.4, "w": -0.8}, "cmd_echo_t": 1739.214,
 "status": "ok", "collisions": 2,
 "scan": {"angle_min": -2.356, "angle_inc": 0.02618, "range_max": 10.0, "ranges": [180 numbers]},
 "course": {"id": "L1-gates", "next_gate": 3, "gates_passed": 2, "elapsed": 12.35, "done": false}}
```

- `status` is one of `ok | deadman | estop | idle | finished`.
- `pose` is in the world frame: metres, with `yaw` in radians (counter-clockwise from +x).
- `scan` is a simulated 2D lidar: 180 beams over 270°, starting at `angle_min` (robot's right) and
  stepping counter-clockwise by `angle_inc`.
- `course` is `null` in the sandbox.
- *Coming in M2:* `scan`, `course`, and the LSL outlets `JackalState`, `JackalScan`, `JackalEvents`
  (for recording EMG + robot state + task events in one XDF with LabRecorder).

## 4. Copy-paste senders

Start the bridge (`jackal-bridge`) and open the sim page first. Each snippet below drives forward
slowly for 2 seconds and then stops.

**Python, WebSocket** (`pip install websockets`)

```python
import asyncio, json, time, websockets

async def main():
    async with websockets.connect("ws://localhost:8765/cmd") as ws:
        for i in range(40):                      # 40 x 50 ms = 2 s, well inside the 250 ms deadman
            await ws.send(json.dumps({"type": "cmd", "v": 0.3, "w": 0.0,
                                      "source": "my-team", "seq": i, "t": time.time()}))
            await asyncio.sleep(0.05)

asyncio.run(main())
```

**Python, UDP** (standard library only)

```python
import json, socket, time

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
for i in range(40):
    msg = {"type": "cmd", "v": 0.3, "w": 0.0, "source": "my-team", "seq": i}
    sock.sendto(json.dumps(msg).encode(), ("127.0.0.1", 9870))
    time.sleep(0.05)
```

**Python, LSL** (`pip install pylsl`)

```python
import time
from pylsl import StreamInfo, StreamOutlet, cf_float32

outlet = StreamOutlet(StreamInfo("JackalCmd", "Control", 2, 0, cf_float32, "my-team"))
for _ in range(40):
    outlet.push_sample([0.3, 0.0])   # [v, w]
    time.sleep(0.05)
```

**MATLAB, UDP** (R2020b+)

```matlab
u = udpport;
for i = 1:40
    msg = jsonencode(struct('type', 'cmd', 'v', 0.3, 'w', 0.0, 'source', 'my-team', 'seq', i));
    write(u, uint8(msg), "127.0.0.1", 9870);
    pause(0.05);
end
```

**JavaScript, WebSocket** (browser or Node 22+)

```js
const ws = new WebSocket("ws://localhost:8765/cmd");
ws.onopen = () => {
  let i = 0;
  const timer = setInterval(() => {
    ws.send(JSON.stringify({ type: "cmd", v: 0.3, w: 0.0, source: "my-team", seq: i, t: Date.now() / 1000 }));
    if (++i >= 40) { clearInterval(timer); ws.close(); }
  }, 50);
};
```

**Reading state, Python**

```python
import asyncio, json, websockets

async def main():
    async with websockets.connect("ws://localhost:8765/state") as ws:
        async for raw in ws:
            s = json.loads(raw)
            print(f"x={s['pose']['x']:+.2f} y={s['pose']['y']:+.2f} status={s['status']}")

asyncio.run(main())
```

## 5. FAQ

**My robot keeps stopping or stuttering.** That's the deadman. You're sending less often than every
250 ms, or your loop blocks (e.g. a slow classifier). Send at a steady 20 Hz and resend the last value
if nothing has changed.

**My commands are ignored.** Another source is active. The HUD and the bridge console show which one.
Stop the other sender, wait 1 s, and yours takes over. You can also pin a transport:
`jackal-bridge --source lsl`.

**Nothing happens and the HUD shows E-STOP.** Something sent `estop: true`. Send `{"type": "reset"}`
or click *Clear E-stop*.

**Chrome asks to "allow access to devices on your local network".** Click Allow. The page needs it to
reach the bridge on localhost.

**How fast is "fast"?** `v = 2.0` is the cap. Start around `0.3–0.8` for indoor courses.

---

## Appendix A: bridge ↔ browser link (internal; teams never need this)

On `ws://localhost:8765/sim` (schema: [`link.schema.json`](link.schema.json)):

- **bridge → browser:** forwarded commands carry everything the sender sent, plus `ingress`
  (`lsl|udp|ws`) and `tb` (bridge monotonic clock in seconds). Every 0.5 s the bridge also sends
  `{"type": "bridge_status", "active_source", "ingress", "deadman", "rate_hz", "drops_invalid",
  "drops_rate", "drops_inactive", "rtt_ms", "lsl", "lsl_peers", "protocol_version", "tb"}`.
- **browser → bridge:** `state` at 20 Hz (with `cmd_echo_tb`, the last `tb` it applied), which the bridge
  fans out to `/state` subscribers. It also answers each `bridge_status` with `{"type": "pong", "tb": …}`,
  and the bridge measures the bridge↔browser round-trip time from that.
- The bridge never generates motion. When the active source goes silent, it simply stops forwarding,
  and the sim's own 250 ms deadman stops the robot. If the bridge itself dies, the same thing happens.

## Versioning

`protocol_version` in `limits.json` is `MAJOR.MINOR`. A minor bump only adds optional fields, so v1
senders keep working (receivers ignore unknown fields). A major bump would be a breaking change, and
the sim warns when the bridge's major version differs from its own.
