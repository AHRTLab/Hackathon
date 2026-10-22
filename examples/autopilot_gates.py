#!/usr/bin/env python3
"""Reference autopilot: drives the current course by itself (closed loop on /state, commands on /cmd).
It is a working example of a closed-loop controller, and a quick "is everything set up?" check.

    pip install websockets
    python autopilot_gates.py                  # drive whatever course the sim page has loaded, then exit
    python autopilot_gates.py --vmax 0.8       # slower

How it works:
  1. Waits for a state message to learn the course id, then loads that course's JSON (the same file the
     page uses: from the bridge if it serves the site, else from this repo's web/public/courses/).
  2. Builds waypoints: before / through / after each gate (or the course's `path` hint), then the finish.
  3. Pure-pursuit-style steering: turn toward the next waypoint (w ∝ heading error), slow down for sharp
     turns, turn in place when the error is large. For a dock finish it creeps to the centre, then turns to
     the dock heading and stops.
Your controller can do the same with the lidar (`state.scan`) instead of the course file.
"""
from __future__ import annotations

import argparse
import asyncio
import json
import math
import time
import urllib.request
from pathlib import Path

import websockets

REPO_COURSES = Path(__file__).resolve().parents[1] / "web" / "public" / "courses"


def wrap(a: float) -> float:
    return math.atan2(math.sin(a), math.cos(a))


def clamp(x: float, m: float) -> float:
    return max(-m, min(m, x))


def gate_forward(g: dict) -> tuple[float, float]:
    """Unit direction through a gate (perpendicular to the posts, with `left` on the left)."""
    dx, dy = g["left"][0] - g["right"][0], g["left"][1] - g["right"][1]
    n = math.hypot(dx, dy) or 1.0
    return dy / n, -dx / n


def waypoints(course: dict) -> list[tuple[float, float]]:
    wp: list[tuple[float, float]] = []
    if course.get("path"):
        wp += [tuple(p) for p in course["path"]]
    else:
        for g in course.get("gates") or []:
            mx, my = (g["left"][0] + g["right"][0]) / 2, (g["left"][1] + g["right"][1]) / 2
            fx, fy = gate_forward(g)
            wp += [(mx - 0.7 * fx, my - 0.7 * fy), (mx, my), (mx + 0.5 * fx, my + 0.5 * fy)]
    fin = course.get("finish")
    if fin and fin["type"] == "line":
        mx, my = (fin["left"][0] + fin["right"][0]) / 2, (fin["left"][1] + fin["right"][1]) / 2
        fx, fy = gate_forward(fin)
        wp.append((mx + 0.6 * fx, my + 0.6 * fy))
    elif fin and fin["type"] == "dock":
        cx, cy = fin["center"]
        wp.append((cx - math.cos(fin["yaw"]) * 0.9, cy - math.sin(fin["yaw"]) * 0.9))
    return wp


class Autopilot:
    def __init__(self, course: dict, vmax: float = 1.2, wmax: float = 2.5):
        caps = course.get("speed_caps") or {}
        self.course = course
        self.vmax = min(vmax, caps.get("v") or vmax)
        self.wmax = min(wmax, caps.get("w") or wmax)
        self.wp = waypoints(course)
        self.i = 0

    def step(self, s: dict) -> tuple[float, float]:
        x, y, yaw = s["pose"]["x"], s["pose"]["y"], s["pose"]["yaw"]
        fin = self.course.get("finish")
        if self.i >= len(self.wp) and fin and fin["type"] == "dock":
            cx, cy = fin["center"]
            dx, dy = cx - x, cy - y
            dist = math.hypot(dx, dy)
            if dist > 0.05:
                a = wrap(math.atan2(dy, dx) - yaw)
                if abs(a) > 0.5:
                    return 0.0, clamp(2.0 * a, self.wmax)
                return min(self.vmax, 0.25, 0.8 * dist) * math.cos(a), clamp(2.0 * a, self.wmax)
            e = wrap(fin["yaw"] - yaw)
            return 0.0, (clamp(2.0 * e, self.wmax) if abs(e) > 0.03 else 0.0)
        if self.i >= len(self.wp):
            return self.vmax * 0.5, 0.0  # carry on over the finish line
        tx, ty = self.wp[self.i]
        if math.hypot(tx - x, ty - y) < 0.3:
            self.i += 1
            return self.step(s)
        a = wrap(math.atan2(ty - y, tx - x) - yaw)
        w = clamp(2.5 * a, self.wmax)
        v = 0.0 if abs(a) > 0.8 else self.vmax * math.cos(a) ** 2
        return v, w


def load_course(course_id: str, bridge_http: str | None) -> dict:
    """The course JSON the page uses: try the bridge's served site, then this repo."""
    if bridge_http:
        try:
            with urllib.request.urlopen(f"{bridge_http}/Hackathon/courses/{course_id}.json", timeout=2) as r:
                return json.load(r)
        except OSError:
            pass
    path = REPO_COURSES / f"{course_id}.json"
    if path.exists():
        return json.loads(path.read_text())
    raise SystemExit(f"Can't find course {course_id!r} (looked on the bridge and in {REPO_COURSES}).")


async def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--bridge", default="ws://localhost:8765", help="bridge base URL (default %(default)s)")
    ap.add_argument("--vmax", type=float, default=1.2)
    ap.add_argument("--timeout", type=float, default=200, help="give up after this many seconds")
    ap.add_argument("--source", default="autopilot")
    args = ap.parse_args()
    base = args.bridge.rstrip("/")

    async with websockets.connect(base + "/state") as st, websockets.connect(base + "/cmd") as cmd:
        state = None
        async with asyncio.timeout(10):
            while state is None:
                m = json.loads(await st.recv())
                if m.get("type") == "state":
                    state = m
        c = state.get("course")
        if not c:
            print("This course has no gates or finish (sandbox?). Pick L1–L3 in the sim page.")
            return 1
        course = load_course(c["id"], base.replace("ws://", "http://").replace("wss://", "https://"))
        if c["done"] or state["status"] == "finished":
            await cmd.send(json.dumps({"type": "cmd", "v": 0, "w": 0, "action": "restart", "source": args.source}))
        pilot = Autopilot(course, vmax=args.vmax)
        print(f"driving {course['name']}: {len(pilot.wp)} waypoints")
        seq, t_end, result = 0, time.monotonic() + args.timeout, None
        while time.monotonic() < t_end:
            m = json.loads(await st.recv())
            if m.get("type") == "event":
                print(f"  {m['name']}")
                if m["name"] in ("finish", "dnf"):
                    result = m["name"]
                    break
                continue
            v, w = pilot.step(m)
            await cmd.send(json.dumps({"type": "cmd", "v": round(v, 4), "w": round(w, 4), "source": args.source, "seq": seq, "t": time.time()}))
            seq += 1
        await cmd.send(json.dumps({"type": "cmd", "v": 0, "w": 0, "source": args.source, "seq": seq}))
        if result is None:
            print("timed out")
            return 2
        await asyncio.sleep(0.2)
        print(f"result: {result}")
        return 0 if result == "finish" else 3


if __name__ == "__main__":
    try:
        raise SystemExit(asyncio.run(main()))
    except KeyboardInterrupt:
        pass
    except OSError as e:
        raise SystemExit(f"Can't reach the bridge ({e}). Is `jackal-bridge` running and the sim page open?")
