"""The protocol/v1 contract, loaded from the repo's protocol/ folder (the sim reads the same files).

parse_msg() mirrors web/src/protocol/validate.ts. Both are checked against protocol/fixtures, so the
browser and the bridge accept, clamp and reject exactly the same messages.
"""
from __future__ import annotations

import json
import math
import os
from pathlib import Path
from typing import Any

from jsonschema import Draft202012Validator

PROTOCOL_DIR = Path(os.environ.get("JACKAL_PROTOCOL_DIR") or Path(__file__).resolve().parents[2] / "protocol")
if not (PROTOCOL_DIR / "limits.json").exists():
    raise RuntimeError(
        f"protocol/ not found at {PROTOCOL_DIR}. Install the bridge from a repo clone with "
        "`pip install -e bridge`, or set JACKAL_PROTOCOL_DIR."
    )

LIMITS: dict[str, Any] = json.loads((PROTOCOL_DIR / "limits.json").read_text())
PROTOCOL_VERSION: str = LIMITS["protocol_version"]
_CMD_VALIDATOR = Draft202012Validator(json.loads((PROTOCOL_DIR / "cmd.schema.json").read_text()))


class Invalid(ValueError):
    """A message that must be dropped and counted, never applied."""


def _reject_constant(token: str) -> float:
    raise Invalid(f"non-finite number {token}")  # Python's json would otherwise accept NaN / Infinity


def _finite(x: Any) -> bool:
    return isinstance(x, (int, float)) and not isinstance(x, bool) and math.isfinite(x)


def validate_obj(o: Any) -> dict[str, Any]:
    if not isinstance(o, dict):
        raise Invalid("not a JSON object")
    errors = sorted(_CMD_VALIDATOR.iter_errors(o), key=lambda e: e.path)
    if errors:
        raise Invalid(errors[0].message)
    if o["type"] == "cmd":
        for k in ("v", "w"):
            if not _finite(o[k]):
                raise Invalid(f"{k} must be a finite number")
        if "t" in o and not _finite(o["t"]):
            raise Invalid("t must be a finite number")
    return o


def parse_msg(raw: str | bytes) -> dict[str, Any]:
    try:
        o = json.loads(raw, parse_constant=_reject_constant)
    except Invalid:
        raise
    except (ValueError, UnicodeDecodeError) as e:
        raise Invalid(f"malformed JSON: {e}") from None
    return validate_obj(o)


def clamp(msg: dict[str, Any], v_max: float = LIMITS["V_MAX"], w_max: float = LIMITS["W_MAX"]) -> dict[str, Any]:
    """Defense-in-depth clamp (the sim clamps too). Returns the same dict when nothing changes."""
    if msg.get("type") != "cmd":
        return msg
    v = max(-v_max, min(v_max, msg["v"]))
    w = max(-w_max, min(w_max, msg["w"]))
    return msg if (v == msg["v"] and w == msg["w"]) else {**msg, "v": v, "w": w}
