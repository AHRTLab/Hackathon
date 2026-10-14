"""One-line live console status, e.g.
  ● udp:team3  12 Hz  v=+0.40 w=-0.80 | browser ✓ rtt 3 ms | lsl ok, 1 peer | drops inv 0 rate 0 other 0
"""
from __future__ import annotations

import asyncio
import sys

from .core import Bridge


def status_line(bridge: Bridge, browser_connected: bool) -> str:
    s = bridge.status()
    src = s["active_source"]
    lc = bridge.last_cmd or {}
    drive = f"v={lc.get('v', 0):+.2f} w={lc.get('w', 0):+.2f}" if src else "idle"
    dot = "\033[33m●\033[0m" if s["deadman"] else ("\033[32m●\033[0m" if src else "○")
    rtt = f"rtt {s['rtt_ms']:.0f} ms" if s["rtt_ms"] is not None else "rtt –"
    browser = f"browser ✓ {rtt}" if browser_connected else "browser ✗ (open the sim page)"
    return (f"{dot} {src or 'no source':14s} {s['rate_hz']:3.0f} Hz  {drive:18s} | {browser} | "
            f"lsl {s['lsl']}, {s['lsl_peers']} peer | drops inv {s['drops_invalid']} rate {s['drops_rate']} "
            f"other {s['drops_inactive']}")


async def console_loop(bridge: Bridge, is_connected) -> None:
    tty = sys.stdout.isatty()
    while True:
        line = status_line(bridge, is_connected())
        if tty:
            sys.stdout.write("\r\033[K" + line)
            sys.stdout.flush()
            await asyncio.sleep(0.25)
        else:
            print(line, flush=True)
            await asyncio.sleep(5)
