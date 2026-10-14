"""keyboard_teleop.py: key / stick mapping, plus hold-to-drive through a real in-process bridge."""
import asyncio
import json
import socket
import threading
import time

import pygame
import pytest

import keyboard_teleop as kt

pygame.init()


def key(t, k, down=True):
    return pygame.event.Event(pygame.KEYDOWN if down else pygame.KEYUP, key=k, mod=0)


# ---------------------------------------------------------------------------------- pure mapping
def test_keys_twist_matches_sim_page():
    assert kt.keys_twist({pygame.K_w}, False) == (pytest.approx(1.2), 0.0)
    assert kt.keys_twist({pygame.K_UP, pygame.K_a}, False) == (pytest.approx(1.2), pytest.approx(2.4))
    assert kt.keys_twist({pygame.K_s, pygame.K_d}, True) == (pytest.approx(-0.36), pytest.approx(-0.72))
    assert kt.keys_twist({pygame.K_w, pygame.K_s}, False) == (0.0, 0.0)            # opposite keys cancel
    assert kt.keys_twist({pygame.K_w, pygame.K_SPACE}, False) == (0.0, 0.0)        # space wins
    assert kt.keys_twist(set(), False) == (0.0, 0.0)


def test_stick_deadzone_and_direction():
    assert kt.stick_twist(0.05, -0.1) is None
    v, w = kt.stick_twist(0.0, -1.0)
    assert v == pytest.approx(kt.V_MAX) and w == 0.0                                # stick up = forward
    v, w = kt.stick_twist(-1.0, 0.0)
    assert v == 0.0 and w == pytest.approx(kt.W_MAX)                                # stick left = turn left


def test_focus_loss_releases_keys():
    t = kt.Teleop("ws://127.0.0.1:1/cmd", "test")
    t.handle(key(t, pygame.K_w))
    assert t.twist()[0][0] > 0
    t.handle(pygame.event.Event(pygame.WINDOWFOCUSLOST))
    assert t.twist()[0] == (0.0, 0.0)


# ---------------------------------------------------------------------------------- through a bridge
def free_port() -> int:
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


@pytest.fixture
def bridge():
    """Real BridgeServer on a background loop; collects whatever it forwards to the browser."""
    from jackal_bridge.core import Bridge
    from jackal_bridge.server import BridgeServer

    port, got, ready = free_port(), [], threading.Event()
    b = Bridge()
    server = BridgeServer(b, "127.0.0.1", port)
    loop = asyncio.new_event_loop()
    stop: dict = {}

    async def run():
        stop["fut"] = loop.create_future()
        async with server.serve():
            server.browser = object()  # pretend a sim tab is connected
            ready.set()
            await stop["fut"]

    server._send_browser = lambda text: (got.append(json.loads(text)), True)[1]  # type: ignore[method-assign]
    b.send_to_browser = server._send_browser
    th = threading.Thread(target=lambda: loop.run_until_complete(run()), daemon=True)
    th.start()
    ready.wait(5)
    yield f"ws://127.0.0.1:{port}/cmd", got
    loop.call_soon_threadsafe(stop["fut"].set_result, None)  # clean shutdown: close server, then the loop
    th.join(5)
    loop.close()


def pump(t: kt.Teleop, seconds: float) -> None:
    end = time.monotonic() + seconds
    while time.monotonic() < end:
        t.step(time.monotonic())
        time.sleep(0.005)


def cmds(got):
    return [m for m in got if m.get("type") == "cmd"]


def test_hold_to_drive_through_bridge(bridge):
    url, got = bridge
    t = kt.Teleop(url, "pytest-keys")
    pump(t, 0.3)
    assert t.connected()
    assert cmds(got) and all(m["v"] == 0 for m in cmds(got))          # idle window streams zeros at 20 Hz

    t.handle(key(t, pygame.K_w))
    n0 = len(got)
    pump(t, 0.5)
    held = cmds(got[n0:])
    assert 8 <= len(held) <= 12                                       # ~20 Hz
    assert all(m["v"] == pytest.approx(1.2) and m["source"] == "pytest-keys" and m["ingress"] == "ws" for m in held)

    t.handle(key(t, pygame.K_w, down=False))                          # release → zeros right away
    n1 = len(got)
    pump(t, 0.2)
    assert cmds(got[n1:]) and all(m["v"] == 0 for m in cmds(got[n1:]))

    t.handle(key(t, pygame.K_e))                                      # e-stop, then reset
    t.handle(key(t, pygame.K_r))
    pump(t, 0.1)
    assert any(m.get("estop") for m in got) and any(m.get("type") == "reset" for m in got)
    t.close()


def test_window_runs_headless(bridge):
    url, got = bridge
    kt.main(["--url", url, "--source", "smoke"], duration=0.8)       # draw loop + state feed, no crash
    assert any(m.get("source") == "smoke" for m in cmds(got))
