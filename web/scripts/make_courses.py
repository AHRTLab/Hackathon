#!/usr/bin/env python3
"""Generate L1–L3 course JSON (web/public/courses). Gates are placed perpendicular to the path through
their centres, so `left` really is on the driver's left. Edit the parameters here and re-run, or hand-edit
the JSON afterwards (both are fine; see public/courses/README.md)."""
import json
import math
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "public" / "courses"
r = lambda x: round(x, 3)  # noqa: E731


def gates_along(centres, width, finish_ahead=1.5):
    """Gates at `centres`, each perpendicular to the local path direction; plus a finish line after the last."""
    gates = []
    n = len(centres)
    for i, (cx, cy) in enumerate(centres):
        a = centres[max(i - 1, 0)]
        b = centres[min(i + 1, n - 1)]
        if i == 0:
            a = (cx - 1, cy)
        hx, hy = b[0] - a[0], b[1] - a[1]
        L = math.hypot(hx, hy)
        hx, hy = hx / L, hy / L
        lx, ly = -hy, hx  # left of travel
        gates.append({"left": [r(cx + lx * width / 2), r(cy + ly * width / 2)],
                      "right": [r(cx - lx * width / 2), r(cy - ly * width / 2)]})
    # finish line: continue along the last direction
    (cx, cy), (px, py) = centres[-1], centres[-2]
    hx, hy = cx - px, cy - py
    L = math.hypot(hx, hy)
    hx, hy = hx / L, hy / L
    fx, fy = cx + hx * finish_ahead, cy + hy * finish_ahead
    lx, ly = -hy, hx
    finish = {"type": "line", "left": [r(fx + lx * 1.5), r(fy + ly * 1.5)], "right": [r(fx - lx * 1.5), r(fy - ly * 1.5)]}
    return gates, finish


def wall(x0, y0, x1, y1, t=0.1, h=0.4):
    """Axis-aligned wall segment as a box obstacle (full sizes)."""
    return {"type": "box", "pos": [r((x0 + x1) / 2), r((y0 + y1) / 2)],
            "size": [r(abs(x1 - x0) or t), r(abs(y1 - y0) or t), h], "rgba": [0.62, 0.64, 0.7, 1]}


def write(c):
    (OUT / f"{c['id']}.json").write_text(json.dumps(c, indent=2) + "\n")
    print("wrote", c["id"], f"({len(c.get('gates', []))} gates)")


# L1: 7 wide gates along a gentle S through an open field.
g, fin = gates_along([(-6, 0), (-3.5, 1.4), (-1, 2.2), (1.5, 1.2), (3.8, -0.6), (6, -2.0), (8, -1.2)], width=1.6)
write({"id": "L1-gates", "name": "L1 Gates", "arena": {"size": [22, 12]}, "start": {"x": -9, "y": 0, "yaw": 0},
       "obstacles": [{"type": "cylinder", "pos": [-1, -1.5], "radius": 0.4, "height": 0.6, "rgba": [0.35, 0.7, 0.4, 1]},
                     {"type": "box", "pos": [4, 2.5], "size": [1.2, 0.5, 0.5]}],
       "gates": g, "finish": fin, "time_limit": 120, "speed_caps": None})

# L2: tight alternating slalom; fine control of w.
g, fin = gates_along([(-7 + 2 * i, 0.9 if i % 2 == 0 else -0.9) for i in range(8)], width=1.0)
write({"id": "L2-slalom", "name": "L2 Slalom", "arena": {"size": [24, 8]}, "start": {"x": -10, "y": 0, "yaw": 0},
       "obstacles": [], "gates": g, "finish": fin, "time_limit": 120, "speed_caps": None})

# L3: L-shaped corridor (0.9 m wide), then stop inside a dock bay facing north (0.15 m / 10° / 1 s).
obst = [
    wall(-5, -3.5, 2.5, -3.5),    # leg 1 south wall
    wall(-5, -2.5, 1.5, -2.5),    # leg 1 north wall
    wall(2.5, -3.5, 2.5, 1.5),    # leg 2 east wall
    wall(1.5, -2.5, 1.5, 1.5),    # leg 2 west wall
    wall(1.5, 3.45, 2.5, 3.45),   # dock back wall
    wall(1.55, 2.6, 1.55, 3.45, h=0.35),  # dock west side
    wall(2.45, 2.6, 2.45, 3.45, h=0.35),  # dock east side
]
write({"id": "L3-corridor-dock", "name": "L3 Corridor + Dock", "arena": {"size": [16, 10]},
       "start": {"x": -6.5, "y": -3, "yaw": 0}, "obstacles": obst,
       "gates": [{"left": [-5.1, -2.55], "right": [-5.1, -3.45]},     # corridor entry (heading +x)
                 {"left": [1.55, 1.6], "right": [2.45, 1.6]}],        # corridor exit (heading +y)
       "finish": {"type": "dock", "center": [2.0, 2.95], "yaw": 1.5708, "size": [0.8, 0.7], "tol_m": 0.15, "tol_deg": 10, "hold_s": 1},
       "path": [[-4.4, -3.0], [2.0, -3.0], [2.0, 1.0], [2.0, 2.0]],  # autopilot hint through the corridor
       "time_limit": 150, "speed_caps": {"v": 1.0, "w": 2.0}})
