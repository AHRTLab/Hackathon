"""LSL ingress (runs in a thread, because pylsl is blocking).

  JackalCmd     type Control, 2 float32 channels [v, w], any rate   → command
  JackalAction  type Markers, 1 string channel                       → "estop" | "reset" | any action

Only the newest sample of each pull is used (latest-wins). Streams are re-resolved continuously, so
teams can start and restart their outlets in any order. If pylsl isn't installed, LSL is disabled
and UDP / WebSocket keep working.
"""
from __future__ import annotations

import asyncio
import logging
import threading
import time
from typing import Any

from ..core import Bridge
from ..protocol import LIMITS

log = logging.getLogger("jackal_bridge")
CMD, ACT = LIMITS["lsl"]["cmd"], LIMITS["lsl"]["action"]


def lsl_available() -> tuple[bool, str]:
    try:
        import pylsl  # noqa: F401
    except Exception as e:  # ImportError, or liblsl failing to load
        return False, f"disabled: pylsl unavailable ({e.__class__.__name__}: {e}); pip install pylsl"
    return True, "ok"


class LslIngress(threading.Thread):
    def __init__(self, bridge: Bridge, loop: asyncio.AbstractEventLoop):
        super().__init__(name="lsl-ingress", daemon=True)
        self.bridge, self.loop = bridge, loop
        self._halt = threading.Event()
        self.last_vw: dict[str, tuple[float, float]] = {}

    def stop(self) -> None:
        self._halt.set()

    def _submit(self, obj: dict[str, Any], peer: str) -> None:
        self.loop.call_soon_threadsafe(self.bridge.handle_obj, obj, "lsl", peer)

    def run(self) -> None:
        import pylsl

        resolver = pylsl.ContinuousResolver(pred=f"name='{CMD['name']}' or name='{ACT['name']}'")
        inlets: dict[str, tuple[Any, str, str]] = {}  # uid → (inlet, kind, peer)
        warned: set[str] = set()
        next_resolve = 0.0
        while not self._halt.is_set():
            now = time.monotonic()
            if now >= next_resolve:
                next_resolve = now + 0.5
                for info in resolver.results():
                    uid = info.uid()
                    if uid in inlets:
                        continue
                    kind = "cmd" if info.name() == CMD["name"] else "action"
                    if kind == "cmd" and info.channel_count() != CMD["channels"]:
                        if uid not in warned:
                            log.warning("ignoring %s from %s: %d channels (need 2: [v, w])",
                                        info.name(), info.hostname(), info.channel_count())
                            warned.add(uid)
                        continue
                    peer = info.source_id() or f"{info.name()}@{info.hostname()}"
                    inlets[uid] = (pylsl.StreamInlet(info, max_buflen=1, recover=False), kind, peer)
                    log.info("LSL: connected %s (%s)", info.name(), peer)
                self.loop.call_soon_threadsafe(setattr, self.bridge, "lsl_peers",
                                               sum(1 for _, k, _ in inlets.values() if k == "cmd"))
            for uid, (inlet, kind, peer) in list(inlets.items()):
                try:
                    samples, _ = inlet.pull_chunk(timeout=0.0)
                except pylsl.LostError:
                    log.info("LSL: lost %s", peer)
                    del inlets[uid]
                    continue
                if not samples:
                    continue
                if kind == "cmd":
                    v, w = samples[-1][0], samples[-1][1]
                    self.last_vw[peer] = (v, w)
                    self._submit({"type": "cmd", "v": v, "w": w, "source": peer}, peer)
                else:
                    for (marker, *_) in samples:
                        self._submit(self._marker(str(marker)), peer)
            time.sleep(0.002)

    def _marker(self, m: str) -> dict[str, Any]:
        if m == "reset":
            return {"type": "reset"}
        if m == "estop":
            return {"type": "cmd", "v": 0.0, "w": 0.0, "estop": True}
        v, w = next(iter(self.last_vw.values()), (0.0, 0.0))  # keep driving; just attach the action
        return {"type": "cmd", "v": v, "w": w, "action": m[:64]}
