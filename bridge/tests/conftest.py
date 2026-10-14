import pytest

from jackal_bridge.arbitration import SourceArbiter
from jackal_bridge.core import Bridge


class FakeClock:
    def __init__(self, t: float = 100.0):
        self.t = t

    def __call__(self) -> float:
        return self.t

    def advance(self, dt: float) -> None:
        self.t += dt


@pytest.fixture
def clock() -> FakeClock:
    return FakeClock()


@pytest.fixture
def bridge(clock):
    """A Bridge with a fake clock that records what it would send to the browser."""
    sent: list[str] = []
    b = Bridge(arbiter=SourceArbiter(), clock=clock)
    b.send_to_browser = lambda m: (sent.append(m), True)[1]
    b.sent = sent  # type: ignore[attr-defined]
    return b
