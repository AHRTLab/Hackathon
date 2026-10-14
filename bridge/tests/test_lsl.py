"""LSL ingress round trip on loopback (skipped when pylsl/liblsl isn't available)."""
import asyncio
import json

import pytest

pylsl = pytest.importorskip("pylsl")

from jackal_bridge.core import Bridge  # noqa: E402
from jackal_bridge.ingress.lsl import LslIngress  # noqa: E402


async def test_jackalcmd_and_markers_reach_browser():
    sent: list[dict] = []
    bridge = Bridge()
    bridge.send_to_browser = lambda m: (sent.append(json.loads(m)), True)[1]
    ingress = LslIngress(bridge, asyncio.get_running_loop())
    ingress.start()
    try:
        cmd = pylsl.StreamOutlet(pylsl.StreamInfo("JackalCmd", "Control", 2, 0, pylsl.cf_float32, "pytest-cmd"))
        act = pylsl.StreamOutlet(pylsl.StreamInfo("JackalAction", "Markers", 1, 0, pylsl.cf_string, "pytest-act"))
        async with asyncio.timeout(15):
            while not any(m.get("type") == "cmd" and abs(m["v"] - 0.25) < 1e-6 for m in sent):
                cmd.push_sample([0.25, -0.5])
                await asyncio.sleep(0.05)
            while not any(m.get("estop") for m in sent):
                act.push_sample(["estop"])
                cmd.push_sample([0.25, -0.5])
                await asyncio.sleep(0.05)
        m = next(m for m in sent if m.get("type") == "cmd")
        assert m["ingress"] == "lsl" and m["source"] == "pytest-cmd" and abs(m["w"] + 0.5) < 1e-6
        assert bridge.lsl_peers >= 1
    finally:
        ingress.stop()
        ingress.join(timeout=2)
