"""The bridge reads protocol/limits.json, the same file the web app imports, so both use one set of values."""
import json

from jackal_bridge.arbitration import SourceArbiter
from jackal_bridge.protocol import LIMITS, PROTOCOL_DIR


def test_limits_loaded_from_repo_protocol_dir():
    assert LIMITS == json.loads((PROTOCOL_DIR / "limits.json").read_text())


def test_arbiter_defaults_come_from_limits():
    a = SourceArbiter()
    assert a.switch_silence_s == LIMITS["SOURCE_SWITCH_SILENCE_MS"] / 1000
    assert a.deadman_s == LIMITS["DEADMAN_MS"] / 1000
    assert a.max_rate_hz == LIMITS["MAX_RATE_HZ"]


def test_web_imports_the_same_file():
    src = (PROTOCOL_DIR.parent / "web/src/protocol/limits.ts").read_text()
    assert "protocol/limits.json" in src
