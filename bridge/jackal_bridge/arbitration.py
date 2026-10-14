"""Source arbitration: latest-wins from ONE active source (brief §5).

- The first sender after idle becomes active.
- Any other sender is ignored until the active one has been silent for SOURCE_SWITCH_SILENCE_MS
  (stops two inputs fighting over the robot).
- `pin` (e.g. "lsl") restricts which transport may drive at all.
- estop and reset are safety messages: accepted from ANY sender, even when inactive or pinned out.
- Per-source rate limit (token bucket, MAX_RATE_HZ sustained, small burst) so a runaway loop can't
  flood the browser.

Pure logic with an injected clock, so it's tested without sleeping.
"""
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

from .protocol import LIMITS

Key = tuple[str, str]  # (ingress, source id)

FORWARD, INACTIVE, RATE, PINNED = "forward", "inactive", "rate", "pinned"


def key_label(key: Key) -> str:
    return f"{key[0]}:{key[1]}" if key[1] != key[0] else key[0]


@dataclass
class _Bucket:
    tokens: float
    last: float


@dataclass
class SourceArbiter:
    switch_silence_s: float = LIMITS["SOURCE_SWITCH_SILENCE_MS"] / 1000
    deadman_s: float = LIMITS["DEADMAN_MS"] / 1000
    max_rate_hz: float = float(LIMITS["MAX_RATE_HZ"])
    burst: float = 10.0
    pin: str | None = None

    active: Key | None = None
    last_seen: dict[Key, float] = field(default_factory=dict)
    _buckets: dict[Key, _Bucket] = field(default_factory=dict)
    counts: dict[str, int] = field(default_factory=lambda: {FORWARD: 0, INACTIVE: 0, RATE: 0, PINNED: 0})

    def _active_alive(self, now: float) -> bool:
        return self.active is not None and now - self.last_seen.get(self.active, -1e9) < self.switch_silence_s

    def offer(self, key: Key, msg: dict[str, Any], now: float) -> str:
        """Decide what to do with one valid message. Returns FORWARD / INACTIVE / RATE / PINNED."""
        if msg.get("type") == "reset" or msg.get("estop") is True:  # safety: from anyone, always
            self.counts[FORWARD] += 1
            return FORWARD
        if self.pin is not None and key[0] != self.pin:
            self.counts[PINNED] += 1
            return PINNED
        if self.active != key:
            if self._active_alive(now):           # someone else is driving
                self.last_seen[key] = now
                self.counts[INACTIVE] += 1
                return INACTIVE
            self.active = key                     # idle (or the active one went silent): take over
        self.last_seen[key] = now
        if not self._take_token(key, now):
            self.counts[RATE] += 1
            return RATE
        self.counts[FORWARD] += 1
        return FORWARD

    def _take_token(self, key: Key, now: float) -> bool:
        b = self._buckets.get(key)
        if b is None:
            b = self._buckets[key] = _Bucket(self.burst, now)
        b.tokens = min(self.burst, b.tokens + (now - b.last) * self.max_rate_hz)
        b.last = now
        if b.tokens < 1.0:
            return False
        b.tokens -= 1.0
        return True

    def active_source(self, now: float) -> Key | None:
        """The active source, or None once it has been silent for the switch-over time."""
        return self.active if self._active_alive(now) else None

    def in_deadman(self, now: float) -> bool:
        a = self.active_source(now)
        return a is not None and now - self.last_seen[a] > self.deadman_s
