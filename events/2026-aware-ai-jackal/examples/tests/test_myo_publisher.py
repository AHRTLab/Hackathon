"""myo_lsl_publisher.py without Bluetooth: event text from real Myo byte layouts, target choice, and
what each data handler pushes to LSL. (The BLE link itself needs a real armband and Bluetooth permission.)"""
import asyncio
import struct

import pytest

pytest.importorskip("myo")
from myo.types import ClassifierEvent, EMGData, FVData, IMUData  # noqa: E402

import myo_lsl_publisher as pub  # noqa: E402


@pytest.mark.parametrize("raw, text, says", [
    (struct.pack("<6B", 1, 0x01, 0x01, 0, 0, 0), "arm_synced:right:toward_wrist", "RIGHT arm"),
    (struct.pack("<6B", 1, 0x02, 0x02, 0, 0, 0), "arm_synced:left:toward_elbow", "LEFT arm"),
    (struct.pack("<6B", 2, 0, 0, 0, 0, 0), "arm_unsynced", "sync gesture again"),
    (struct.pack("<6B", 6, 1, 0, 0, 0, 0), "sync_failed:failed_too_hard", "more gently"),
    (struct.pack("<BH3B", 3, 0x0003, 0, 0, 0), "pose:wave_out", None),
])
def test_classifier_text(raw, text, says):
    marker, msg = pub.classifier_text(ClassifierEvent(raw))
    assert marker == text
    assert (msg is None) if says is None else (says in msg)


def test_pick_target():
    myos = [("My Myo", "EC:26:ED:BC:F1:E4", -48), ("Other", "AA:BB:CC:DD:EE:FF", -70)]
    assert pub.pick_target(myos, real_addresses=True) == "EC:26:ED:BC:F1:E4"   # strongest signal
    assert pub.pick_target(myos, real_addresses=False) is None                 # macOS UUIDs: connect by service UUID
    assert pub.pick_target([], True) is None


class FakeOutlet:
    def __init__(self):
        self.samples = []

    def push_sample(self, s):
        self.samples.append(list(s))

    def push_chunk(self, c):
        self.samples.extend(list(s) for s in c)


@pytest.fixture
def outlets(monkeypatch):
    out = {k: FakeOutlet() for k in ("emg", "imu", "events")}
    monkeypatch.setattr(pub.Publisher, "out", out)
    monkeypatch.setattr(pub.Publisher, "emg_count", 0)
    return out


def call(handler, *a):
    asyncio.run(handler(object(), *a))  # handlers only use class state, so any `self` works


@pytest.mark.parametrize("mode", ["filtered", "raw"])
def test_emg_modes_push_two_samples_per_packet(outlets, monkeypatch, mode):
    monkeypatch.setattr(pub.Publisher, "mode", mode)
    call(pub.Publisher.on_emg_data, EMGData(struct.pack("<16b", *range(-8, 8))))
    call(pub.Publisher.on_fv_data, FVData(struct.pack("<8Hb", *range(8), 0)))   # ignored outside preprocessed
    assert outlets["emg"].samples == [list(range(-8, 0)), list(range(0, 8))]


def test_preprocessed_pushes_the_envelope(outlets, monkeypatch):
    monkeypatch.setattr(pub.Publisher, "mode", "preprocessed")
    call(pub.Publisher.on_emg_data, EMGData(struct.pack("<16b", *range(16))))      # ignored
    call(pub.Publisher.on_fv_data, FVData(struct.pack("<8Hb", *range(100, 108), 0)))
    assert outlets["emg"].samples == [[float(v) for v in range(100, 108)]]


def test_imu_and_events(outlets):
    call(pub.Publisher.on_imu_data, IMUData(struct.pack("<10h", 16384, 0, 0, 0, 2048, 0, 0, 16, 0, 0)))
    w, x, y, z, ax, ay, az, gx, gy, gz = outlets["imu"].samples[0]
    assert (w, x) == (1.0, 0.0) and ax == pytest.approx(1.0) and gx == pytest.approx(1.0)
    call(pub.Publisher.on_classifier_event, ClassifierEvent(struct.pack("<6B", 1, 1, 1, 0, 0, 0)))
    assert outlets["events"].samples == [["arm_synced:right:toward_wrist"]]


def test_modes_match_the_lab_meanings():
    assert pub.MODES["filtered"][0].name == "SEND_EMG" and pub.MODES["filtered"][1] == 200
    assert pub.MODES["raw"][0].name == "SEND_RAW" and pub.MODES["preprocessed"] == (pub.MODES["preprocessed"][0], 50)
    assert pub.MODES["preprocessed"][0].name == "SEND_FILT"
