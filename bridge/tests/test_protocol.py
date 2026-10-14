"""Contract conformance: the same protocol/fixtures the TypeScript validator is tested against."""
from pathlib import Path

import pytest

from jackal_bridge.protocol import LIMITS, PROTOCOL_DIR, Invalid, clamp, parse_msg

FIX = PROTOCOL_DIR / "fixtures"
files = lambda d: sorted((FIX / d).glob("*.json"), key=lambda p: p.name)  # noqa: E731


@pytest.mark.parametrize("path", files("valid"), ids=lambda p: p.name)
def test_valid_accepted_unchanged(path: Path):
    msg = parse_msg(path.read_text())
    assert clamp(msg) is msg


@pytest.mark.parametrize("path", files("clamp"), ids=lambda p: p.name)
def test_clamp_accepted_and_clamped(path: Path):
    msg = parse_msg(path.read_text())
    c = clamp(msg)
    assert c is not msg
    assert abs(c["v"]) <= LIMITS["V_MAX"] and abs(c["w"]) <= LIMITS["W_MAX"]


@pytest.mark.parametrize("path", files("invalid"), ids=lambda p: p.name)
def test_invalid_rejected(path: Path):
    with pytest.raises(Invalid):
        parse_msg(path.read_bytes())


def test_fixture_counts_match_typescript_suite():
    # web/tests/unit/validate.test.ts iterates the same folders; guard against an empty glob.
    assert len(files("valid")) >= 5 and len(files("clamp")) >= 2 and len(files("invalid")) >= 10
