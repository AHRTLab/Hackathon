#!/usr/bin/env python3
"""Minimal command sender: drive the Jackal from your terminal over WebSocket (no window, works over SSH).

    pip install websockets
    python terminal_teleop.py                     # interactive
    python terminal_teleop.py --script "0.5,0:3;0,0:1"   # scripted: v,w:seconds;...  (used by tests)

For hold-to-drive (like the sim page's own keyboard), use keyboard_teleop.py instead.

Keys (terminals can't see key *release*, so each press nudges the command, like ROS teleop_twist_keyboard):
    W / S   speed up / slow down (±0.1 m/s)        A / D   turn left / right (±0.2 rad/s)
    Space   stop (v = w = 0)                       E       e-stop          R   reset (clear e-stop)
    Q       quit

The current command is re-sent at 20 Hz even when it doesn't change. That keeps the sim's 250 ms
deadman happy; if this script dies, the robot stops by itself.
"""
from __future__ import annotations

import argparse
import asyncio
import json
import sys
import time

import websockets

RATE_HZ = 20


def parse_script(s: str) -> list[tuple[float, float, float]]:
    steps = []
    for part in filter(None, s.split(";")):
        vw, dur = part.split(":")
        v, w = (float(x) for x in vw.split(","))
        steps.append((v, w, float(dur)))
    return steps


class Keys:
    """Non-blocking single-key reads from the terminal (macOS / Linux / Windows)."""

    def __enter__(self):
        if sys.platform == "win32":
            return self
        import termios
        import tty
        self.fd = sys.stdin.fileno()
        self.old = termios.tcgetattr(self.fd)
        tty.setcbreak(self.fd)
        return self

    def __exit__(self, *exc):
        if sys.platform != "win32":
            import termios
            termios.tcsetattr(self.fd, termios.TCSADRAIN, self.old)

    def get(self) -> str | None:
        if sys.platform == "win32":
            import msvcrt
            return msvcrt.getwch().lower() if msvcrt.kbhit() else None
        import select
        if select.select([sys.stdin], [], [], 0)[0]:
            return sys.stdin.read(1).lower()
        return None


async def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--url", default="ws://localhost:8765/cmd")
    ap.add_argument("--source", default="terminal-teleop")
    ap.add_argument("--script", help='non-interactive: "v,w:seconds;v,w:seconds;..."')
    args = ap.parse_args()

    async with websockets.connect(args.url) as ws:
        seq = 0

        async def send(v: float, w: float, **extra) -> None:
            nonlocal seq
            msg = {"type": "cmd", "v": round(v, 3), "w": round(w, 3), "source": args.source, "seq": seq, "t": time.time(), **extra}
            seq += 1
            await ws.send(json.dumps(msg))

        if args.script:
            for v, w, dur in parse_script(args.script):
                end = time.monotonic() + dur
                while time.monotonic() < end:
                    await send(v, w)
                    await asyncio.sleep(1 / RATE_HZ)
            return

        print(__doc__.split("Keys")[1].split("The current")[0].strip("\n:"))
        v = w = 0.0
        with Keys() as keys:
            while True:
                k = keys.get()
                extra = {}
                if k == "q":
                    await send(0, 0)
                    break
                if k == "w": v += 0.1
                elif k == "s": v -= 0.1
                elif k == "a": w += 0.2
                elif k == "d": w -= 0.2
                elif k == " ": v = w = 0.0
                elif k == "e": extra = {"estop": True}; v = w = 0.0
                elif k == "r": await ws.send(json.dumps({"type": "reset"}))
                v, w = max(-2.0, min(2.0, v)), max(-4.0, min(4.0, w))
                await send(v, w, **extra)
                print(f"\r  v = {v:+.1f} m/s   w = {w:+.1f} rad/s   ", end="", flush=True)
                await asyncio.sleep(1 / RATE_HZ)
        print()


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        pass
    except OSError as e:
        sys.exit(f"Can't reach the bridge ({e}). Is `jackal-bridge` running?")
