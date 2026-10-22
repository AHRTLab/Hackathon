#!/usr/bin/env python3
"""Controller template: copy this file and fill in the two functions marked EDIT ME.

    pip install websockets pylsl
    python controller_template.py                       # runs the demo step() below
    python controller_template.py --input-stream MyClassifier   # feed an LSL stream into my_input()

Everything else is done for you: it connects to the bridge, keeps the latest sim state (pose, speed,
lidar scan, course progress) and events, calls your step() 20 times a second, sends the command, and
reconnects if the bridge restarts. Ctrl+C stops the robot before exiting.

    my_input()          → read YOUR device: a classifier's output, an LSL stream, a key, a file …
    step(state, inp)    → decide (v, w): forward speed in m/s, turn rate in rad/s (+ = left)

The state dict is the protocol's state message (protocol/PROTOCOL.md §3): state["pose"]["x"],
state["vel"]["v"], state["scan"]["ranges"] (180 lidar beams, right → left), state["course"], …
`events` holds the latest event names (gate:3, collision, finish, …) since the previous step.
"""
from __future__ import annotations

import argparse
import asyncio
import json
import math
import time

import websockets

SOURCE = "my-team"          # shown in the sim's HUD; change it to your team name
RATE_HZ = 20


class LslLatest:
    """The most recent sample of an LSL stream (e.g. your classifier's output), never blocking.
    `.value` is None until the first sample arrives."""

    def __init__(self, name: str):
        import pylsl
        self._pylsl, self.name, self.inlet, self.value, self._next_try = pylsl, name, None, None, 0.0

    def read(self):
        if self.inlet is None and time.monotonic() >= self._next_try:
            found = self._pylsl.resolve_byprop("name", self.name, timeout=0.2)
            if found:
                self.inlet = self._pylsl.StreamInlet(found[0], max_buflen=1)
            self._next_try = time.monotonic() + 1.0
        if self.inlet is not None:
            chunk, _ = self.inlet.pull_chunk(timeout=0.0)
            if chunk:
                self.value = chunk[-1]
        return self.value


# =========================================================================================== EDIT ME
INPUT: LslLatest | None = None   # set from --input-stream; use it, or replace my_input() entirely


def my_input() -> dict:
    """EDIT ME: read your input device. Whatever you return is passed to step() as `inp`."""
    return {"lsl": INPUT.read() if INPUT else None}


def step(state: dict, inp: dict, events: list[str]) -> tuple[float, float]:
    """EDIT ME: return (v, w). Demo: drive forward; if the lidar sees something close ahead, turn left
    in place until the way is clear. If an LSL input is given, its first two values are (v, w)."""
    if inp.get("lsl") is not None and len(inp["lsl"]) >= 2:
        return float(inp["lsl"][0]), float(inp["lsl"][1])
    ahead = front_clearance(state)
    if ahead < 0.8:
        return 0.0, 1.0
    return 0.5, 0.0


def front_clearance(state: dict, half_angle_deg: float = 30) -> float:
    """Nearest lidar return within ±half_angle of straight ahead (m); 10 m if there's no scan yet."""
    scan = state.get("scan")
    if not scan:
        return 10.0
    lim = math.radians(half_angle_deg)
    return min((r for i, r in enumerate(scan["ranges"])
                if abs(scan["angle_min"] + i * scan["angle_inc"]) <= lim), default=scan["range_max"])
# ===================================================================================================


async def run(url: str, seconds: float = 0) -> None:
    base = url.rstrip("/")
    state: dict = {}
    events: list[str] = []
    t_end = time.monotonic() + seconds if seconds else None
    backoff = 1.0
    while t_end is None or time.monotonic() < t_end:
        try:
            async with websockets.connect(base + "/state") as st, websockets.connect(base + "/cmd") as cmd:
                print(f"✓ connected to {base}; running step() at {RATE_HZ} Hz (Ctrl+C to stop)")
                backoff = 1.0

                async def listen() -> None:
                    async for raw in st:
                        m = json.loads(raw)
                        if m.get("type") == "state":
                            state.clear()
                            state.update(m)
                        elif m.get("type") == "event":
                            events.append(m["name"])

                listener = asyncio.create_task(listen())
                seq = 0
                try:
                    while t_end is None or time.monotonic() < t_end:
                        t0 = time.monotonic()
                        if listener.done():
                            listener.result()  # re-raise a dropped connection
                        happened, events[:] = list(events), []
                        v, w = step(state, my_input(), happened)
                        await cmd.send(json.dumps({"type": "cmd", "v": float(v), "w": float(w),
                                                   "source": SOURCE, "seq": seq, "t": time.time()}))
                        seq += 1
                        await asyncio.sleep(max(0.0, 1 / RATE_HZ - (time.monotonic() - t0)))
                finally:
                    listener.cancel()
                    try:
                        await cmd.send(json.dumps({"type": "cmd", "v": 0.0, "w": 0.0, "source": SOURCE}))
                    except websockets.ConnectionClosed:
                        pass
        except (OSError, websockets.ConnectionClosed, websockets.InvalidHandshake) as e:
            print(f"✗ bridge not reachable ({e.__class__.__name__}); retrying in {backoff:.0f} s")
            await asyncio.sleep(backoff)
            backoff = min(5.0, backoff * 2)


def main() -> None:
    global INPUT
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--bridge", default="ws://localhost:8765", help="bridge base URL (default %(default)s)")
    ap.add_argument("--input-stream", help="LSL stream to read in my_input() (latest sample)")
    ap.add_argument("--seconds", type=float, default=0, help="stop after N seconds (0 = until Ctrl+C)")
    args = ap.parse_args()
    if args.input_stream:
        INPUT = LslLatest(args.input_stream)
    try:
        asyncio.run(run(args.bridge, args.seconds))
    except KeyboardInterrupt:
        print("\nstopped")


if __name__ == "__main__":
    main()
