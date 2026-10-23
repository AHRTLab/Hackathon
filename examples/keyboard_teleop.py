#!/usr/bin/env python3
"""Hold-to-drive teleop in a small window: feels like the sim page's own keyboard, but goes through
the bridge like any team controller would. Also reads a joystick / gamepad if one is plugged in.

    pip install pygame websockets
    python keyboard_teleop.py
    python keyboard_teleop.py --url ws://localhost:8765/cmd --source team3-keys

Click the window so it has focus, then:
    W / S  or  ↑ / ↓    hold to drive forward / back      Shift   hold for fine (slow) mode
    A / D  or  ← / →    hold to turn left / right         Space   stop
    E  e-stop           R  reset (clear e-stop)           Esc / Q quit
    Joystick: left stick drives (Y = speed, X = turn), button 0 (A / ✕) = stop.

The window keeps sending its current command at 20 Hz (zeros when nothing is held), so it stays the
active source while it's open. Close it, or wait 1 s after it goes quiet, before another source can
take over. Losing window focus releases all keys, so the robot never runs away on a stuck key.
"""
from __future__ import annotations

import argparse
import contextlib
import json
import threading
import time
from dataclasses import dataclass, field

import pygame
from websockets.exceptions import WebSocketException
from websockets.sync.client import connect

V_MAX, W_MAX = 2.0, 4.0        # protocol/limits.json (the sim clamps anyway)
V_FRAC = W_FRAC = 0.6          # full key press = 60 % of the limit, same as the sim page
FINE = 0.3                     # Shift multiplier
DEADZONE, EXPO = 0.12, 0.3     # joystick shaping, same as the sim page
SEND_HZ = 20

FWD = {pygame.K_w, pygame.K_UP}
BACK = {pygame.K_s, pygame.K_DOWN}
LEFT = {pygame.K_a, pygame.K_LEFT}
RIGHT = {pygame.K_d, pygame.K_RIGHT}


# ------------------------------------------------------------------------------------- input → (v, w)
def keys_twist(held: set[int], fine: bool) -> tuple[float, float]:
    """Held keys → (v, w). Space stops; opposite keys cancel."""
    if pygame.K_SPACE in held:
        return 0.0, 0.0
    fwd = (1 if held & FWD else 0) - (1 if held & BACK else 0)
    turn = (1 if held & LEFT else 0) - (1 if held & RIGHT else 0)
    k = FINE if fine else 1.0
    return fwd * V_FRAC * V_MAX * k, turn * W_FRAC * W_MAX * k


def shape(x: float) -> float:
    """Deadzone + expo curve for a stick axis in [-1, 1]."""
    a = abs(x)
    if a < DEADZONE:
        return 0.0
    n = (a - DEADZONE) / (1 - DEADZONE)
    return (1 if x > 0 else -1) * ((1 - EXPO) * n + EXPO * n ** 3)


def stick_twist(ax_x: float, ax_y: float) -> tuple[float, float] | None:
    """Left stick → (v, w), or None when centred. Stick up (negative Y) = forward, left = turn left."""
    v, w = shape(-ax_y), shape(-ax_x)
    return (v * V_MAX, w * W_MAX) if (v or w) else None


# ------------------------------------------------------------------------------------- state listener
@dataclass
class StateFeed:
    """Background reader of ws://…/state so the window can show what the sim is doing."""
    url: str
    latest: dict | None = None
    received_at: float = 0.0
    _halt: threading.Event = field(default_factory=threading.Event)

    def start(self) -> None:
        threading.Thread(target=self._run, daemon=True).start()

    def stop(self) -> None:
        self._halt.set()

    def _run(self) -> None:
        while not self._halt.is_set():
            try:
                with connect(self.url, open_timeout=2) as ws:
                    while not self._halt.is_set():
                        try:
                            raw = ws.recv(timeout=0.5)
                        except TimeoutError:
                            continue
                        m = json.loads(raw)
                        if m.get("type") == "state":   # events share this socket
                            self.latest, self.received_at = m, time.monotonic()
            except (OSError, WebSocketException, ValueError):
                self._halt.wait(1.0)

    def fresh(self) -> dict | None:
        return self.latest if time.monotonic() - self.received_at < 1.0 else None


# ------------------------------------------------------------------------------------- the teleop
class Teleop:
    def __init__(self, url: str, source: str):
        self.url, self.source = url, source
        self.held: set[int] = set()
        self.ws = None
        self._conn: contextlib.ExitStack | None = None
        self.seq = 0
        self.next_send = 0.0
        self.next_connect = 0.0
        self.last_sent = (0.0, 0.0)
        self.pending: list[dict] = []          # one-off messages (estop / reset) to send next tick
        self.running = True
        self.joystick: pygame.joystick.JoystickType | None = None

    # -- events -------------------------------------------------------------------------------
    def handle(self, e: pygame.event.Event) -> None:
        if e.type == pygame.QUIT:
            self.running = False
        elif e.type == pygame.KEYDOWN:
            if e.key in (pygame.K_ESCAPE, pygame.K_q):
                self.running = False
            elif e.key == pygame.K_e:
                self.pending.append({"type": "cmd", "v": 0.0, "w": 0.0, "estop": True, "source": self.source})
            elif e.key == pygame.K_r:
                self.pending.append({"type": "reset"})
            self.held.add(e.key)
        elif e.type == pygame.KEYUP:
            self.held.discard(e.key)
        elif e.type in (pygame.WINDOWFOCUSLOST, pygame.WINDOWHIDDEN, pygame.WINDOWMINIMIZED):
            self.held.clear()                   # never keep driving on a key we can no longer see released
        elif e.type == pygame.JOYDEVICEADDED and self.joystick is None:
            self.joystick = pygame.joystick.Joystick(e.device_index)
        elif e.type == pygame.JOYDEVICEREMOVED and self.joystick is not None and e.instance_id == self.joystick.get_instance_id():
            self.joystick = None

    def fine(self) -> bool:
        return bool(self.held & {pygame.K_LSHIFT, pygame.K_RSHIFT})

    def twist(self) -> tuple[tuple[float, float], str]:
        """Current command and where it came from ("joystick" wins when the stick is moved)."""
        if self.joystick is not None:
            if self.joystick.get_numbuttons() and self.joystick.get_button(0):
                return (0.0, 0.0), "joystick"
            if self.joystick.get_numaxes() >= 2:
                st = stick_twist(self.joystick.get_axis(0), self.joystick.get_axis(1))
                if st:
                    return st, "joystick"
        return keys_twist(self.held, self.fine()), "keys"

    # -- network ------------------------------------------------------------------------------
    def connected(self) -> bool:
        return self.ws is not None

    def _send(self, msg: dict) -> None:
        if self.ws is None:
            return
        try:
            self.ws.send(json.dumps(msg))
        except (OSError, WebSocketException):
            self._disconnect()                  # reconnect on the next tick

    def _disconnect(self) -> None:
        if self._conn is not None:
            with contextlib.suppress(Exception):
                self._conn.close()
        self._conn, self.ws = None, None

    def step(self, now: float) -> None:
        """Called every frame: (re)connect, then send at SEND_HZ."""
        if self.ws is None and now >= self.next_connect:
            self.next_connect = now + 1.0
            stack = contextlib.ExitStack()
            try:
                self.ws = stack.enter_context(connect(self.url, open_timeout=1))
                self._conn = stack
            except (OSError, WebSocketException, TimeoutError):
                stack.close()
                self.ws = None
        while self.pending:
            self._send(self.pending.pop(0))
        if now < self.next_send:
            return
        self.next_send = now + 1 / SEND_HZ
        (v, w), _ = self.twist()
        self.last_sent = (v, w)
        self._send({"type": "cmd", "v": round(v, 3), "w": round(w, 3), "source": self.source, "seq": self.seq, "t": time.time()})
        self.seq += 1

    def close(self) -> None:
        if self.ws is not None:
            self._send({"type": "cmd", "v": 0.0, "w": 0.0, "source": self.source})
        self._disconnect()


# ------------------------------------------------------------------------------------- drawing
STATUS_COLORS = {"ok": (46, 125, 50), "idle": (69, 90, 100), "deadman": (230, 81, 0), "estop": (198, 40, 40), "finished": (21, 101, 192)}


def draw(screen: pygame.Surface, font: pygame.font.Font, small: pygame.font.Font, t: Teleop, feed: StateFeed) -> None:
    screen.fill((27, 31, 37))
    W = screen.get_width()
    (v, w), src = t.twist()

    def text(s, x, y, f=font, c=(232, 234, 237)):
        screen.blit(f.render(s, True, c), (x, y))

    def bar(label, val, vmax, y):
        text(label, 16, y - 3)
        x0, x1 = 44, W - 110
        pygame.draw.rect(screen, (42, 46, 53), (x0, y, x1 - x0, 12), border_radius=6)
        mid = (x0 + x1) // 2
        frac = max(-1.0, min(1.0, val / vmax))
        px = int(frac * (x1 - x0) / 2)
        pygame.draw.rect(screen, (79, 140, 255), (min(mid, mid + px), y, abs(px), 12), border_radius=6)
        pygame.draw.line(screen, (89, 96, 112), (mid, y - 2), (mid, y + 13))
        text(f"{val:+.2f}", x1 + 10, y - 3)

    link = "bridge ✓" if t.connected() else "bridge ✗ connecting…"
    text(f"{link}   source {t.source}   input {src}{' · fine' if t.fine() else ''}", 16, 12, small,
         (180, 220, 180) if t.connected() else (255, 183, 77))
    bar("v", v, V_MAX, 44)
    bar("w", w, W_MAX, 72)

    st = feed.fresh()
    if st:
        status = st.get("status", "?")
        pygame.draw.rect(screen, STATUS_COLORS.get(status, (80, 80, 80)), (16, 100, 96, 22), border_radius=11)
        text(status.upper(), 26, 102)
        p = st.get("pose", {})
        text(f"sim: applied v {st['cmd_applied']['v']:+.2f}  w {st['cmd_applied']['w']:+.2f} · "
             f"pose ({p.get('x', 0):.2f}, {p.get('y', 0):.2f}) · collisions {st.get('collisions', 0)}", 124, 104, small)
    else:
        text("sim: no state yet (is the sim page open?)", 16, 104, small, (160, 160, 160))

    help_lines = ["W/S ↑/↓ drive · A/D ←/→ turn · Shift fine · Space stop", "E e-stop · R reset · Esc quit · joystick: left stick"]
    for i, line in enumerate(help_lines):
        text(line, 16, 140 + 18 * i, small, (150, 155, 165))
    pygame.display.flip()


# ------------------------------------------------------------------------------------- main
def main(argv: list[str] | None = None, duration: float | None = None) -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--url", default="ws://localhost:8765/cmd", help="bridge command endpoint (default %(default)s)")
    ap.add_argument("--source", default="keyboard-teleop", help="your id, shown in the sim HUD")
    args = ap.parse_args(argv)

    pygame.init()
    pygame.display.set_caption("Jackal teleop: click here, then hold W/A/S/D")
    screen = pygame.display.set_mode((560, 190))
    font, small = pygame.font.SysFont(None, 22), pygame.font.SysFont(None, 18)
    clock = pygame.time.Clock()

    teleop = Teleop(args.url, args.source)
    feed = StateFeed(args.url.rsplit("/", 1)[0] + "/state")
    feed.start()
    t_end = None if duration is None else time.monotonic() + duration
    try:
        while teleop.running and (t_end is None or time.monotonic() < t_end):
            for e in pygame.event.get():
                teleop.handle(e)
            teleop.step(time.monotonic())
            draw(screen, font, small, teleop, feed)
            clock.tick(60)
    finally:
        teleop.close()
        feed.stop()
        pygame.quit()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        pass
