"""--loopback-test: "is my setup working?" check for the event.

Sends v=0.5 for 2 s through the bridge's own WebSocket /cmd, then goes silent. Passes if state comes
back on /state, the robot moved forward, and the sim reports deadman/idle with ~zero applied speed
within 400 ms of the silence. Needs the sim page open in Chrome.
"""
from __future__ import annotations

import asyncio
import json
import math
import time

import websockets


async def run_loopback(port: int) -> bool:
    base = f"ws://localhost:{port}"
    states: list[dict] = []

    async def listen():
        async with websockets.connect(base + "/state") as ws:
            async for raw in ws:
                states.append(json.loads(raw))

    listener = asyncio.create_task(listen())
    try:
        await asyncio.sleep(0.5)
        if not states:
            print("FAIL: no state from the sim. Is the sim page open and connected to this bridge?")
            return False
        start = states[-1]["pose"]
        async with websockets.connect(base + "/cmd") as ws:
            t_end = time.monotonic() + 2.0
            seq = 0
            while time.monotonic() < t_end:
                await ws.send(json.dumps({"type": "cmd", "v": 0.5, "w": 0.0, "source": "loopback-test", "seq": seq, "t": time.time()}))
                seq += 1
                await asyncio.sleep(0.05)
            moved_state = states[-1]
            await asyncio.sleep(0.45)
        end = states[-1]
        moved = math.hypot(moved_state["pose"]["x"] - start["x"], moved_state["pose"]["y"] - start["y"])
        ok_move = moved > 0.6
        ok_stop = end["status"] in ("deadman", "idle") and abs(end["cmd_applied"]["v"]) < 0.05
        print(f"{'PASS' if ok_move else 'FAIL'}: robot moved {moved:.2f} m during 2 s at 0.5 m/s (need > 0.6)")
        print(f"{'PASS' if ok_stop else 'FAIL'}: after going silent, status={end['status']} applied v={end['cmd_applied']['v']:.3f}")
        return ok_move and ok_stop
    except OSError as e:
        print(f"FAIL: cannot reach the bridge on {base}: {e}")
        return False
    finally:
        listener.cancel()
