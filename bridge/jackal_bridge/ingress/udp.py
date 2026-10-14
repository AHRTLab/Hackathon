"""UDP ingress: one JSON message per datagram on 127.0.0.1:9870 (easiest from MATLAB / C / anything)."""
from __future__ import annotations

import asyncio

from ..core import Bridge


class UdpIngress(asyncio.DatagramProtocol):
    def __init__(self, bridge: Bridge):
        self.bridge = bridge

    def datagram_received(self, data: bytes, addr) -> None:
        self.bridge.handle_raw(data, "udp", f"udp{addr[1]}")


async def start_udp(bridge: Bridge, host: str = "127.0.0.1", port: int = 9870):
    loop = asyncio.get_running_loop()
    transport, _ = await loop.create_datagram_endpoint(lambda: UdpIngress(bridge), local_addr=(host, port))
    return transport
