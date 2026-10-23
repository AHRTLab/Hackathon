#!/usr/bin/env python3
"""Live top-down view of what the lidar / gate assist sees, while anyone drives (Myo, keyboard …).

    python examples/assist_view.py                 # bridge on ws://localhost:8765
    python examples/assist_view.py --bridge ws://localhost:8791

Listens to the bridge's state stream only (it never sends commands). Robot at the bottom, forward is up,
1 m rings. Blue dots: lidar returns. Red dots: the two posts of the detected gate; green circle + line:
its midpoint and normal; yellow dot: the aim point on the centreline; green curve: the arc the assist
steers toward. Grey lines: the ±GATE_CONE_DEG acceptance cone. Text: the nudge and speed cap the assist
would apply right now. Esc / q quits.
"""
from __future__ import annotations

import argparse
import json
import math
import threading
import time

import numpy as np
import pygame
from websockets.sync.client import connect

import armdrive as A

W, H, TOP, PPM = 520, 640, 60, 70


class StateFeed:
    def __init__(self, url: str):
        self.url, self.state, self.at = url, {}, 0.0
        threading.Thread(target=self._run, daemon=True).start()

    def _run(self) -> None:
        while True:
            try:
                with connect(self.url + "/state") as ws:
                    for raw in ws:
                        m = json.loads(raw)
                        if m.get("type") == "state":
                            self.state, self.at = m, time.monotonic()
            except Exception:
                time.sleep(1.0)


def px(x: float, y: float) -> tuple[int, int]:
    return int(W // 2 - y * PPM), int(H - 90 - x * PPM)


def draw(screen, font, state: dict, fresh: bool) -> None:
    pg = pygame
    screen.fill((24, 26, 30))
    ox, oy = px(0, 0)
    for m in range(1, 5):
        pg.draw.circle(screen, (38, 41, 46), (ox, oy), m * PPM, 1)
    scan = state.get("scan")
    info = None
    if scan:
        r = np.asarray(scan["ranges"], dtype=float)
        ang = scan["angle_min"] + scan["angle_inc"] * np.arange(len(r))
        r_all = np.where(np.isfinite(r), r, scan.get("range_max", 10.0))
        x_all, y_all = A.LIDAR_X + r_all * np.cos(ang), r_all * np.sin(ang)
        for xx, yy, rr in zip(x_all, y_all, r_all):
            if rr < scan.get("range_max", 10.0) - 1e-3:
                p = px(xx, yy)
                if TOP < p[1] < H:
                    screen.set_at(p, (120, 160, 200))
        info = A.gate_assist(x_all, y_all, r_all)
    hl, hw = A.ROBOT_HALF_LENGTH * PPM, A.ROBOT_HALF_WIDTH * PPM
    pg.draw.rect(screen, (200, 200, 205), (ox - hw, oy - hl, 2 * hw, 2 * hl), 2)
    pg.draw.line(screen, (200, 200, 205), (ox, oy), px(0.6, 0), 2)
    for sgn in (-1, 1):
        a = sgn * math.radians(A.GATE_CONE_DEG)
        pg.draw.line(screen, (70, 75, 85), (ox, oy), px(3 * math.cos(a), 3 * math.sin(a)), 1)
    if info:
        g = info["gate"]; col = (90, 220, 120)
        for p in g["posts"]:
            pg.draw.circle(screen, (240, 90, 80), px(*p), 6)
        mx, my = g["mid"]; nx, ny = g["normal"]
        pg.draw.circle(screen, col, px(mx, my), 5, 1)
        pg.draw.line(screen, col, px(mx - nx * 0.6, my - ny * 0.6), px(mx + nx * 0.6, my + ny * 0.6), 1)
        ax, ay = info["aim"]
        pg.draw.circle(screen, (255, 210, 60), px(ax, ay), 5)
        k = 2 * ay / max(ax * ax + ay * ay, 1e-6)
        pts = []
        if abs(k) > 1e-4:
            R = 1 / k
            sweep = math.atan2(ax, abs(R) - math.copysign(ay, R))
            for i in range(25):
                a = sweep * i / 24
                pts.append(px(abs(R) * math.sin(a), R * (1 - math.cos(a))))
        else:
            pts = [px(0, 0), px(ax, ay)]
        pts.append(px(mx + nx * 0.8, my + ny * 0.8))
        pg.draw.lines(screen, col, False, pts, 2)
        cap = min(info["v_cap"], 9.9)
        tag = f"gate {info['dist']:.1f} m   err {math.degrees(info['err']):+4.0f}°   nudge {info['w']:+.2f} rad/s   v cap {cap:.1f} m/s"
        screen.blit(font.render(tag, True, col), (12, H - 28))
    elif scan:
        screen.blit(font.render("no gate in the cone", True, (120, 120, 125)), (12, H - 28))
    head = "assist view — listening to the bridge state (Esc quits)" if fresh else "waiting for sim state: is the bridge running and the sim tab open?"
    screen.blit(font.render(head, True, (230, 230, 235) if fresh else (240, 160, 80)), (12, 14))
    vel = state.get("vel", {})
    if vel:
        screen.blit(font.render(f"v {vel.get('v', 0):+.2f} m/s   w {vel.get('w', 0):+.2f} rad/s", True, (170, 170, 175)), (12, 36))
    pg.draw.line(screen, (60, 64, 70), (0, TOP), (W, TOP))
    pg.display.flip()


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--bridge", default="ws://localhost:8765")
    args = ap.parse_args()
    feed = StateFeed(args.bridge.rstrip("/"))
    pygame.init()
    screen = pygame.display.set_mode((W, H))
    pygame.display.set_caption("assist view")
    font = pygame.font.SysFont(None, 22)
    clock = pygame.time.Clock()
    while True:
        for e in pygame.event.get():
            if e.type == pygame.QUIT or (e.type == pygame.KEYDOWN and e.key in (pygame.K_ESCAPE, pygame.K_q)):
                return
        draw(screen, font, feed.state, time.monotonic() - feed.at < 1.0)
        clock.tick(20)


if __name__ == "__main__":
    main()
