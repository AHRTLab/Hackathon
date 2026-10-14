#!/usr/bin/env python3
"""Print what the sim reports: pose, speed, closest obstacle from the lidar, and course progress.

    pip install websockets
    python state_listener.py                        # ~2 lines per second
    python state_listener.py --raw                  # every message as JSON (state + events)

The bridge sends `state` at 20 Hz on ws://localhost:8765/state, with discrete `event` messages
(gate:3, collision, finish, ...) interleaved. See protocol/PROTOCOL.md §3.
"""
from __future__ import annotations

import argparse
import asyncio
import json
import math

import websockets


def closest_obstacle(scan: dict) -> tuple[float, float]:
    """(range in m, bearing in degrees; 0 = straight ahead, + = left) of the nearest lidar return."""
    ranges = scan["ranges"]
    i = min(range(len(ranges)), key=ranges.__getitem__)
    return ranges[i], math.degrees(scan["angle_min"] + i * scan["angle_inc"])


async def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--url", default="ws://localhost:8765/state")
    ap.add_argument("--raw", action="store_true")
    args = ap.parse_args()
    async with websockets.connect(args.url) as ws:
        n = 0
        async for raw in ws:
            msg = json.loads(raw)
            if args.raw:
                print(raw)
                continue
            if msg["type"] == "event":
                print(f"  ** event {msg['name']} at t={msg['t']:.2f}")
                continue
            n += 1
            if n % 10:
                continue
            p, s = msg["pose"], msg
            line = f"t={s['t']:6.1f}  x={p['x']:+6.2f} y={p['y']:+6.2f} yaw={math.degrees(p['yaw']):+5.0f}°  v={s['vel']['v']:+.2f}  [{s['status']}]"
            if s.get("scan"):
                r, b = closest_obstacle(s["scan"])
                line += f"  nearest {r:.2f} m @ {b:+.0f}°"
            c = s.get("course")
            if c:
                line += f"  {c['id']} gate {c['next_gate']} ({c['gates_passed']} passed) {c['elapsed']:.1f}s{' DONE' if c['done'] else ''}"
            print(line)


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        pass
    except OSError as e:
        raise SystemExit(f"Can't reach the bridge ({e}). Is `jackal-bridge` running and the sim page open?")
