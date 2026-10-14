"""Bridge core: one place every ingress funnels into. Validate → clamp → arbitrate → forward to the browser.

The bridge never generates motion. When the active source goes silent it simply stops forwarding, and the
sim's own 250 ms deadman stops the robot; if the bridge dies, the same thing happens. One mechanism
covers every "unplugged" case.
"""
from __future__ import annotations

import json
import time
from dataclasses import dataclass, field
from typing import Any, Callable

from .arbitration import FORWARD, Key, SourceArbiter, key_label
from .protocol import PROTOCOL_VERSION, Invalid, clamp, parse_msg, validate_obj


@dataclass
class Counters:
    received: int = 0
    invalid: int = 0
    no_browser: int = 0
    last_error: str = ""


@dataclass
class Bridge:
    arbiter: SourceArbiter = field(default_factory=SourceArbiter)
    clock: Callable[[], float] = time.monotonic
    send_to_browser: Callable[[str], bool] = lambda _msg: False  # set by the server; returns "delivered?"
    counters: Counters = field(default_factory=Counters)
    last_cmd: dict[str, Any] | None = None
    rtt_ms: float | None = None
    lsl_status: str = "disabled"
    lsl_peers: int = 0
    _fwd_times: list[float] = field(default_factory=list)

    # ---- ingress ---------------------------------------------------------------------------------
    def handle_raw(self, raw: str | bytes, ingress: str, peer: str) -> str:
        try:
            msg = parse_msg(raw)
        except Invalid as e:
            return self._invalid(str(e))
        return self.handle_obj(msg, ingress, peer, validated=True)

    def handle_obj(self, obj: Any, ingress: str, peer: str, validated: bool = False) -> str:
        if not validated:
            try:
                obj = validate_obj(obj)
            except Invalid as e:
                return self._invalid(str(e))
        self.counters.received += 1
        key: Key = (ingress, str(obj.get("source") or peer))
        now = self.clock()
        verdict = self.arbiter.offer(key, obj, now)
        if verdict != FORWARD:
            return verdict
        out = {**clamp(obj), "ingress": ingress, "tb": round(now, 6)}
        if out.get("type") == "cmd":
            out.setdefault("source", key_label(key))
            self.last_cmd = out
            self._fwd_times.append(now)
        if not self.send_to_browser(json.dumps(out, separators=(",", ":"))):
            self.counters.no_browser += 1
        return verdict

    def _invalid(self, why: str) -> str:
        self.counters.invalid += 1
        self.counters.last_error = why
        return "invalid"

    # ---- status ----------------------------------------------------------------------------------
    def rate_hz(self) -> float:
        now = self.clock()
        self._fwd_times = [t for t in self._fwd_times if now - t <= 1.0]
        return float(len(self._fwd_times))

    def status(self) -> dict[str, Any]:
        now = self.clock()
        active = self.arbiter.active_source(now)
        c = self.arbiter.counts
        return {
            "type": "bridge_status",
            "protocol_version": PROTOCOL_VERSION,
            "active_source": key_label(active) if active else None,
            "ingress": active[0] if active else None,
            "deadman": self.arbiter.in_deadman(now),
            "rate_hz": self.rate_hz(),
            "drops_invalid": self.counters.invalid,
            "drops_rate": c["rate"],
            "drops_inactive": c["inactive"] + c["pinned"],
            "rtt_ms": None if self.rtt_ms is None else round(self.rtt_ms, 1),
            "lsl": self.lsl_status,
            "lsl_peers": self.lsl_peers,
            "tb": round(now, 6),
        }

    def on_pong(self, tb: float) -> None:
        self.rtt_ms = (self.clock() - tb) * 1000
