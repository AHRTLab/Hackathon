"""Bridge core: validation → clamp → arbitration → forward, plus status."""
import json


def test_forwards_with_ingress_and_tb(bridge, clock):
    assert bridge.handle_raw('{"type":"cmd","v":0.4,"w":-0.8,"source":"team3","t":5.0}', "udp", "udp1") == "forward"
    out = json.loads(bridge.sent[-1])
    assert out == {"type": "cmd", "v": 0.4, "w": -0.8, "source": "team3", "t": 5.0, "ingress": "udp", "tb": clock.t}


def test_clamps_before_forwarding(bridge):
    bridge.handle_raw('{"type":"cmd","v":10,"w":-100}', "ws", "ws1")
    out = json.loads(bridge.sent[-1])
    assert out["v"] == 2.0 and out["w"] == -4.0


def test_invalid_dropped_and_counted(bridge):
    for raw in ['{"type":"cmd","v":NaN,"w":0}', "{not json", '{"type":"cmd","v":"1","w":0}', b"\xff\xfe"]:
        assert bridge.handle_raw(raw, "udp", "udp1") == "invalid"
    assert bridge.sent == []
    assert bridge.status()["drops_invalid"] == 4


def test_source_label_defaults_to_peer(bridge):
    bridge.handle_raw('{"type":"cmd","v":0,"w":0}', "ws", "ws7")
    assert json.loads(bridge.sent[-1])["source"] == "ws:ws7"
    assert bridge.status()["active_source"] == "ws:ws7"


def test_status_reports_active_source_and_rate(bridge, clock):
    for _ in range(20):
        bridge.handle_raw('{"type":"cmd","v":0.1,"w":0,"source":"t"}', "udp", "u")
        clock.advance(0.05)
    s = bridge.status()
    assert s["active_source"] == "udp:t" and s["ingress"] == "udp"
    assert 18 <= s["rate_hz"] <= 21
    assert s["protocol_version"] == "1.0"
    clock.advance(0.3)
    assert bridge.status()["deadman"] is True
    clock.advance(1.0)
    assert bridge.status()["active_source"] is None


def test_counts_when_no_browser(clock):
    from jackal_bridge.core import Bridge
    b = Bridge(clock=clock)
    b.handle_raw('{"type":"cmd","v":0,"w":0}', "udp", "u")
    assert b.counters.no_browser == 1
