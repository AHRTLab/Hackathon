"""controller_template.py: the demo step() logic, and the plumbing end to end through a real bridge."""
import asyncio
import json
import socket

import pytest
import websockets

import controller_template as ct

pytestmark = pytest.mark.asyncio


def scan(front: float) -> dict:
    """180 beams over 270°, everything at 5 m except ±10° straight ahead at `front`."""
    inc = 0.02618
    ranges = [front if abs(-2.356 + i * inc) < 0.17 else 5.0 for i in range(180)]
    return {"angle_min": -2.356, "angle_inc": inc, "range_max": 10.0, "ranges": ranges}


def state(front: float | None) -> dict:
    s = {"type": "state", "t": 1.0, "pose": {"x": 0, "y": 0, "yaw": 0}, "vel": {"v": 0, "w": 0},
         "cmd_applied": {"v": 0, "w": 0}, "cmd_echo_t": None, "status": "ok", "collisions": 0, "course": None}
    if front is not None:
        s["scan"] = scan(front)
    return s


async def test_demo_step():
    assert ct.front_clearance(state(None)) == 10.0
    assert ct.step(state(3.0), {}, []) == (0.5, 0.0)          # clear ahead: forward
    assert ct.step(state(0.5), {}, []) == (0.0, 1.0)          # obstacle: turn in place
    assert ct.step(state(0.5), {"lsl": [0.2, -0.3]}, []) == (0.2, -0.3)   # an LSL input wins


async def test_plumbing_through_a_real_bridge(monkeypatch):
    from jackal_bridge.core import Bridge
    from jackal_bridge.server import BridgeServer

    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        port = s.getsockname()[1]
    got: list[dict] = []
    seen_events: list[list[str]] = []
    real_step = ct.step
    monkeypatch.setattr(ct, "step", lambda st, inp, ev: (seen_events.append(ev), real_step(st, inp, ev))[1])
    server = BridgeServer(Bridge(), "127.0.0.1", port)
    async with server.serve():
        async with websockets.connect(f"ws://127.0.0.1:{port}/sim") as sim:
            async def sim_side():
                n = 0
                async for raw in sim:
                    m = json.loads(raw)
                    if m.get("type") == "cmd":
                        got.append(m)
                    n += 1
                    if n % 4 == 0:  # stream state: clear for a while, then an obstacle ahead
                        await sim.send(json.dumps(state(3.0 if len(got) < 15 else 0.4)))
                    if len(got) == 10:
                        await sim.send(json.dumps({"type": "event", "name": "gate:0", "t": 1.0}))
            side = asyncio.create_task(sim_side())
            await asyncio.wait_for(ct.run(f"ws://127.0.0.1:{port}", seconds=3.0), 10)
            await asyncio.sleep(0.2)
            side.cancel()
    moving = [c for c in got if c["v"] == 0.5 and c["w"] == 0.0]
    turning = [c for c in got if c["v"] == 0.0 and c["w"] == 1.0]
    assert len(got) >= 40                                  # ~20 Hz for 3 s
    assert moving and turning                              # reacted to the obstacle in the scan
    assert all(c["source"] == ct.SOURCE and c["ingress"] == "ws" for c in got)
    assert got[-1]["v"] == 0.0 and got[-1]["w"] == 0.0     # stop sent on the way out
    assert any("gate:0" in ev for ev in seen_events)      # events reach step()
