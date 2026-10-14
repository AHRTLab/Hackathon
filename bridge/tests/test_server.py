"""End-to-end over real sockets (ephemeral ports): WS /cmd and UDP in → fake browser on /sim → state out."""
import asyncio
import json
import socket

import pytest
import websockets

from jackal_bridge.core import Bridge
from jackal_bridge.ingress.udp import start_udp
from jackal_bridge.server import BridgeServer


def free_port(kind=socket.SOCK_STREAM) -> int:
    with socket.socket(socket.AF_INET, kind) as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


@pytest.fixture
async def running():
    bridge = Bridge()
    port, uport = free_port(), free_port(socket.SOCK_DGRAM)
    server = BridgeServer(bridge, "127.0.0.1", port)
    udp = await start_udp(bridge, "127.0.0.1", uport)
    async with server.serve():
        yield bridge, server, f"ws://127.0.0.1:{port}", uport
    udp.close()


async def recv_type(ws, t, timeout=2.0):
    async with asyncio.timeout(timeout):
        while True:
            m = json.loads(await ws.recv())
            if m.get("type") == t:
                return m


async def test_ws_cmd_reaches_browser(running):
    _, _, base, _ = running
    async with websockets.connect(base + "/sim") as sim, websockets.connect(base + "/cmd") as cmd:
        await recv_type(sim, "bridge_status")
        await cmd.send(json.dumps({"type": "cmd", "v": 0.5, "w": 0.1, "source": "team1"}))
        m = await recv_type(sim, "cmd")
        assert m["v"] == 0.5 and m["ingress"] == "ws" and m["source"] == "team1" and "tb" in m


async def test_udp_cmd_reaches_browser_and_invalid_is_dropped(running):
    bridge, _, base, uport = running
    async with websockets.connect(base + "/sim") as sim:
        await recv_type(sim, "bridge_status")
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.sendto(b'{"type":"cmd","v":NaN,"w":0}', ("127.0.0.1", uport))
        s.sendto(b'{"type":"cmd","v":10,"w":0,"source":"matlab"}', ("127.0.0.1", uport))
        m = await recv_type(sim, "cmd")
        assert m["v"] == 2.0 and m["ingress"] == "udp"
        assert bridge.counters.invalid == 1
        s.close()


async def test_state_fans_out_and_pong_measures_rtt(running):
    bridge, server, base, _ = running
    async with websockets.connect(base + "/sim") as sim, websockets.connect(base + "/state") as sub:
        status = await recv_type(sim, "bridge_status")
        await sim.send(json.dumps({"type": "pong", "tb": status["tb"]}))
        state = {"type": "state", "t": 1.0, "pose": {"x": 0, "y": 0, "yaw": 0}, "vel": {"v": 0, "w": 0},
                 "cmd_applied": {"v": 0, "w": 0}, "cmd_echo_t": None, "status": "idle", "collisions": 0,
                 "course": None, "cmd_echo_tb": 3.0}
        await asyncio.sleep(0.05)  # let the /state subscriber register
        await sim.send(json.dumps(state))
        got = await recv_type(sub, "state")
        assert got["t"] == 1.0 and "cmd_echo_tb" not in got
        assert bridge.rtt_ms is not None and bridge.rtt_ms >= 0


async def test_newer_sim_tab_replaces_older(running):
    _, server, base, _ = running
    async with websockets.connect(base + "/sim") as a:
        await recv_type(a, "bridge_status")
        async with websockets.connect(base + "/sim") as b:
            await recv_type(b, "bridge_status")
            with pytest.raises(websockets.ConnectionClosed):
                async with asyncio.timeout(2):
                    while True:
                        await a.recv()
            assert server.browser is not None


async def test_unknown_path_closed(running):
    _, _, base, _ = running
    async with websockets.connect(base + "/nope") as ws:
        with pytest.raises(websockets.ConnectionClosed) as e:
            await ws.recv()
        assert e.value.rcvd.code == 4404
