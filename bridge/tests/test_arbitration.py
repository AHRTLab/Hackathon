"""Acceptance test 5 and the arbitration rules, on a fake clock."""
from jackal_bridge.arbitration import FORWARD, INACTIVE, PINNED, RATE, SourceArbiter

A, B = ("udp", "teamA"), ("ws", "teamB")
cmd = {"type": "cmd", "v": 0.3, "w": 0.0}


def drive(arb, key, t0, seconds, hz=20):
    out = []
    n = int(seconds * hz)
    for i in range(n):
        out.append(arb.offer(key, cmd, t0 + i / hz))
    return out, t0 + n / hz


def test_first_sender_after_idle_becomes_active():
    arb = SourceArbiter()
    assert arb.offer(A, cmd, 0.0) == FORWARD
    assert arb.active_source(0.01) == A


def test_second_source_ignored_while_active_is_alive():
    arb = SourceArbiter()
    for i in range(20):  # both send at 20 Hz for 1 s
        t = i / 20
        assert arb.offer(A, cmd, t) == FORWARD
        assert arb.offer(B, cmd, t + 0.001) == INACTIVE


def test_switch_only_after_one_second_of_silence():
    arb = SourceArbiter()
    _, t = drive(arb, A, 0.0, 1.0)
    last_a = t - 1 / 20
    # A goes silent. B keeps trying: rejected until 1.0 s after A's last message.
    assert arb.offer(B, cmd, last_a + 0.5) == INACTIVE
    assert arb.offer(B, cmd, last_a + 0.95) == INACTIVE
    assert arb.offer(B, cmd, last_a + 1.0) == FORWARD
    assert arb.active_source(last_a + 1.0) == B
    # and now A is the one locked out
    assert arb.offer(A, cmd, last_a + 1.05) == INACTIVE


def test_active_source_expires_to_none():
    arb = SourceArbiter()
    arb.offer(A, cmd, 0.0)
    assert arb.active_source(0.99) == A
    assert arb.active_source(1.0) is None


def test_deadman_flag_after_250ms_silence():
    arb = SourceArbiter()
    arb.offer(A, cmd, 0.0)
    assert not arb.in_deadman(0.2)
    assert arb.in_deadman(0.3)


def test_estop_and_reset_accepted_from_anyone():
    arb = SourceArbiter(pin="lsl")
    arb.offer(("lsl", "x"), cmd, 0.0)
    assert arb.offer(B, {**cmd, "estop": True}, 0.1) == FORWARD
    assert arb.offer(B, {"type": "reset"}, 0.2) == FORWARD
    assert arb.active_source(0.2) == ("lsl", "x")  # safety messages don't steal control


def test_pin_restricts_transport():
    arb = SourceArbiter(pin="lsl")
    assert arb.offer(A, cmd, 0.0) == PINNED
    assert arb.offer(("lsl", "myo"), cmd, 0.0) == FORWARD


def test_rate_limit_drops_floods_but_allows_100hz():
    arb = SourceArbiter()
    ok, _ = drive(arb, A, 0.0, 2.0, hz=100)
    assert ok.count(RATE) == 0
    flood, _ = drive(arb, A, 10.0, 1.0, hz=1000)
    assert flood.count(RATE) > 800
    assert flood.count(FORWARD) <= 115  # ~100 Hz sustained + burst
