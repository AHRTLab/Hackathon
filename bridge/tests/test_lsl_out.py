"""Acceptance 7 (bridge side): state / scan / events from the sim come out as LSL streams, and events
also reach /state subscribers."""
import asyncio
import json
import socket

import pytest

pylsl = pytest.importorskip("pylsl")
import websockets  # noqa: E402

from jackal_bridge.core import Bridge  # noqa: E402
from jackal_bridge.egress.lsl_out import LslOutlets  # noqa: E402
from jackal_bridge.server import BridgeServer  # noqa: E402


def free_port():
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


STATE = {"type": "state", "t": 1.0, "pose": {"x": 1.5, "y": -0.5, "yaw": 0.25}, "vel": {"v": 0.4, "w": 0.1},
         "cmd_applied": {"v": 0.45, "w": 0.12}, "cmd_echo_t": None, "status": "ok", "collisions": 2,
         "scan": {"angle_min": -2.356, "angle_inc": 0.02618, "range_max": 10.0, "ranges": [3.0] * 180},
         "course": {"id": "L1-gates", "next_gate": 1, "gates_passed": 1, "elapsed": 1.0, "done": False}}


def inlet(name: str, sid: str):
    found = pylsl.resolve_bypred(f"name='{name}' and starts-with(source_id,'{sid}')", minimum=1, timeout=5)
    assert found, f"{name} not found on LSL"
    return pylsl.StreamInlet(found[0], max_buflen=5)


async def test_state_scan_events_on_lsl_and_state_ws():
    port = free_port()
    server = BridgeServer(Bridge(), "127.0.0.1", port)
    sid = f"pytest-{port}"
    server.lsl_out = LslOutlets(source_id=sid)
    async with server.serve():
        st, sc, ev = [await asyncio.to_thread(inlet, n, sid) for n in ("JackalState", "JackalScan", "JackalEvents")]
        for i in (st, sc, ev):
            await asyncio.to_thread(i.open_stream, 5)
        async with websockets.connect(f"ws://127.0.0.1:{port}/sim") as sim, websockets.connect(f"ws://127.0.0.1:{port}/state") as sub:
            await asyncio.sleep(0.2)
            for _ in range(5):
                await sim.send(json.dumps(STATE))
                await asyncio.sleep(0.05)
            await sim.send(json.dumps({"type": "event", "name": "gate:0", "t": 1.0}))
            await sim.send(json.dumps({"type": "event", "name": "finish", "t": 9.5}))
            got_types = []
            async with asyncio.timeout(3):
                while "event" not in got_types or got_types.count("event") < 2:
                    got_types.append(json.loads(await sub.recv())["type"])
        s, _ = await asyncio.to_thread(st.pull_sample, 5)
        assert s == pytest.approx([1.5, -0.5, 0.25, 0.4, 0.1, 0.45, 0.12, 2.0], abs=1e-5)
        r, _ = await asyncio.to_thread(sc.pull_sample, 5)
        assert len(r) == 180 and r[0] == pytest.approx(3.0)
        names = []
        for _ in range(2):
            m, _ = await asyncio.to_thread(ev.pull_sample, 5)
            names.append(m[0])
        assert names == ["gate:0", "finish"]
        assert server.lsl_out.n_state == 5 and server.lsl_out.n_events == 2
        labels = []
        ch = st.info().desc().child("channels").child("channel")
        while not ch.empty():
            labels.append(ch.child_value("label"))
            ch = ch.next_sibling()
        assert labels == ["x", "y", "yaw", "v", "w", "v_cmd", "w_cmd", "collisions"]
