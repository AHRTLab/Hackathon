"""Only the sim's own origins may open a WebSocket from a browser; scripts (no Origin) always may."""
import socket

import pytest
import websockets

from jackal_bridge.core import Bridge
from jackal_bridge.server import BridgeServer


def free_port() -> int:
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


@pytest.mark.parametrize("origin, ok", [
    (None, True),                                  # Python / other tools: no Origin header
    ("http://localhost:5173", True),               # npm run dev, any localhost port
    ("http://127.0.0.1:4173", True),
    ("http://[::1]:8000", True),
    ("http://127.0.0.1:{port}", True),             # the page the bridge serves itself (--serve-site)
    ("https://ahrtlab.github.io", True),           # GitHub Pages (limits.json allowed_origins)
    ("https://AHRTLab.github.io/", True),          # case / trailing slash don't matter
    ("https://evil.example", False),               # any other website open in the same browser
    ("https://ahrtlab.github.io.evil.example", False),
    ("http://192.168.1.20:8765", False),           # another machine's page
    ("https://myfork.github.io", False),           # a fork, unless --allow-origin'd (next test)
])
async def test_origin_matrix(origin, ok):
    port = free_port()
    async with BridgeServer(Bridge(), "127.0.0.1", port).serve():
        url = f"ws://127.0.0.1:{port}/cmd"
        kw = {"origin": origin.format(port=port)} if origin else {}
        if ok:
            async with websockets.connect(url, **kw):
                pass
        else:
            with pytest.raises(websockets.InvalidStatus) as e:
                async with websockets.connect(url, **kw):
                    pass
            assert e.value.response.status_code == 403


async def test_allow_origin_flag():
    port = free_port()
    async with BridgeServer(Bridge(), "127.0.0.1", port, allowed_origins=["https://myfork.github.io"]).serve():
        async with websockets.connect(f"ws://127.0.0.1:{port}/sim", origin="https://myfork.github.io"):
            pass
