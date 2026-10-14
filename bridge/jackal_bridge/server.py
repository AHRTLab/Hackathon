"""WebSocket server on one port, routed by path (protocol/limits.json `paths`):

  /sim    the browser sim (one at a time; a new tab replaces the old one). Receives forwarded commands
          and bridge_status at 2 Hz; sends back state at 20 Hz (fanned out to /state) and pongs (RTT).
  /cmd    team controllers send command JSON here.
  /state  read-only subscribers get every state message the sim sends.
"""
from __future__ import annotations

import asyncio
import itertools
import json
import logging

from websockets.asyncio.server import ServerConnection, broadcast, serve
from websockets.exceptions import ConnectionClosed

from .core import Bridge
from .protocol import LIMITS

log = logging.getLogger("jackal_bridge")
PATHS = LIMITS["paths"]
_ids = itertools.count(1)
REPLACED_CODE = 4000  # the page stops auto-reconnecting on this code (web/src/net/bridgeClient.ts)


class BridgeServer:
    def __init__(self, bridge: Bridge, host: str = "localhost", port: int = LIMITS["ports"]["ws"]):
        self.bridge = bridge
        self.host, self.port = host, port
        self.browser: ServerConnection | None = None
        self.state_subs: set[ServerConnection] = set()
        self.last_state: dict | None = None
        self.state_count = 0
        bridge.send_to_browser = self._send_browser

    def _send_browser(self, text: str) -> bool:
        if self.browser is None:
            return False
        broadcast([self.browser], text)  # non-blocking; safe to call from datagram / LSL callbacks
        return True

    async def handler(self, ws: ServerConnection) -> None:
        path = (ws.request.path if ws.request else "/").split("?")[0].rstrip("/") or "/"
        try:
            if path == PATHS["sim"]:
                await self._sim(ws)
            elif path == PATHS["cmd"]:
                await self._cmd(ws)
            elif path == PATHS["state"]:
                await self._state(ws)
            else:
                await ws.close(code=4404, reason=f"unknown path {path}; use {', '.join(PATHS.values())}")
        except ConnectionClosed:
            pass

    async def _sim(self, ws: ServerConnection) -> None:
        old, self.browser = self.browser, ws
        if old is not None:
            log.warning("a new sim tab connected; disconnecting the previous one (only one sim tab at a time)")
            await old.close(code=REPLACED_CODE, reason="replaced by a newer sim tab")
        await ws.send(json.dumps(self.bridge.status()))
        try:
            async for raw in ws:
                try:
                    msg = json.loads(raw)
                except ValueError:
                    continue
                t = msg.get("type") if isinstance(msg, dict) else None
                if t == "state":
                    msg.pop("cmd_echo_tb", None)
                    self.last_state = msg
                    self.state_count += 1
                    if self.state_subs:
                        broadcast(self.state_subs, json.dumps(msg, separators=(",", ":")))
                elif t == "pong" and isinstance(msg.get("tb"), (int, float)):
                    self.bridge.on_pong(msg["tb"])
        finally:
            if self.browser is ws:
                self.browser = None

    async def _cmd(self, ws: ServerConnection) -> None:
        peer = f"ws{next(_ids)}"
        async for raw in ws:
            self.bridge.handle_raw(raw, "ws", peer)

    async def _state(self, ws: ServerConnection) -> None:
        self.state_subs.add(ws)
        try:
            await ws.wait_closed()
        finally:
            self.state_subs.discard(ws)

    async def status_loop(self) -> None:
        while True:
            await asyncio.sleep(0.5)
            self._send_browser(json.dumps(self.bridge.status()))

    def serve(self):
        return serve(self.handler, self.host, self.port, max_size=2**16, ping_interval=5, ping_timeout=5)
