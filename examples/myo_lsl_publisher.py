#!/usr/bin/env python3
"""Real Myo armband → LSL, over your computer's own Bluetooth (no Myo dongle needed).

    pip install dl-myo pylsl
    python myo_lsl_publisher.py                 # connect to the nearest Myo, filtered EMG, sync on
    python myo_lsl_publisher.py --list          # list nearby Myos (to pick one in a busy room)
    python myo_lsl_publisher.py --addr EC:26:ED:BC:F1:E4
    python myo_lsl_publisher.py --mode raw      # unfiltered EMG if you want to do all the filtering

Close Myo Connect first (it holds the armband). macOS: your terminal app needs Bluetooth permission
(System Settings → Privacy & Security → Bluetooth).

Streams (the same names and layout as fake_myo_lsl.py and the BioRobotics lab's myo_interface.py):
    Myo_EMG     type EMG, 8 channels EMG_1..EMG_8
                  --mode filtered      the Myo's band-pass filtered EMG, 200 Hz   (default)
                  --mode raw           unfiltered EMG, 200 Hz
                  --mode preprocessed  rectified, smoothed envelope, 50 Hz
    Myo_IMU     type IMU, 10 channels [qw qx qy qz ax ay az gx gy gz], 50 Hz
    Myo_Events  type Markers: arm_synced:<right|left>:<toward_wrist|toward_elbow>, arm_unsynced,
                sync_failed:<why>, pose:<fist|wave_in|…>, connected, disconnected

Sync (on by default; --no-sync to skip): wear the band snugly on the thickest part of the forearm,
wait ~2 minutes for the electrodes to warm up (good skin contact = less noise), then do the sync
gesture: relax, bend your wrist outward (wave out) and hold until the Myo vibrates. The sync tells you
which arm the band is on and which way it faces; channel numbers then mean the same muscles each time.
"""
from __future__ import annotations

import argparse
import asyncio
import sys
import time

import bleak
import pylsl

try:
    from myo import MyoClient
    from myo.types import ClassifierEventType, ClassifierMode, EMGMode, IMUMode, VibrationType
except ImportError:
    sys.exit("pip install dl-myo")

MODES = {  # name → (Myo EMG mode, samples per second)
    "filtered": (EMGMode.SEND_EMG, 200),
    "raw": (EMGMode.SEND_RAW, 200),
    "preprocessed": (EMGMode.SEND_FILT, 50),
}
IMU_LABELS = ["qw", "qx", "qy", "qz", "ax", "ay", "az", "gx", "gy", "gz"]


def tolerate_short_service_uuids() -> None:
    """Silence a harmless scan error on macOS. Some nearby phones / beacons advertise 32-bit service
    UUIDs; bleak 0.20 (the version dl-myo requires) only expands 16-bit ones, so it raises inside its
    scan callback ("badly formed hexadecimal UUID string") and prints a traceback for every such
    advertisement. The scan still works; this just expands 32-bit UUIDs and keeps odd ones as text."""
    try:
        from bleak.backends.corebluetooth import utils as cbu  # macOS only
    except Exception:
        return
    if getattr(cbu.normalize_uuid_str, "_tolerant", False):
        return
    original = cbu.normalize_uuid_str

    def normalize(uuid: str) -> str:
        if len(uuid) == 8:  # Bluetooth base UUID, 32-bit form
            uuid = f"{uuid}-0000-1000-8000-00805f9b34fb"
        try:
            return original(uuid)
        except ValueError:
            return uuid.lower()

    normalize._tolerant = True  # type: ignore[attr-defined]
    cbu.normalize_uuid_str = normalize


# ------------------------------------------------------------------------------------------- finding
async def scan(timeout: float = 5.0) -> tuple[list[tuple[str, str, int]], bool]:
    """Nearby Myos as (name, address, rssi), strongest first, and whether addresses are real MACs.

    On macOS a plain scan reports a per-computer UUID instead of the Bluetooth MAC, but dl-myo connects
    by real MAC, so we scan with use_bdaddr (a CoreBluetooth option; ignored on Windows / Linux).
    """
    try:
        found = await bleak.BleakScanner.discover(timeout=timeout, return_adv=True, cb=dict(use_bdaddr=True))
        real = True
    except Exception:  # private macOS API unavailable: fall back to connecting by service UUID
        found = await bleak.BleakScanner.discover(timeout=timeout, return_adv=True)
        real = sys.platform != "darwin"
    myos = [(d.name, d.address, adv.rssi) for d, adv in found.values() if d.name and "myo" in d.name.lower()]
    return sorted(myos, key=lambda m: -m[2]), real


def pick_target(myos: list[tuple[str, str, int]], real_addresses: bool) -> str | None:
    """The address to connect to: the strongest signal, or None = "any Myo" (by its service UUID)."""
    return myos[0][1] if myos and real_addresses else None


# ------------------------------------------------------------------------------------------- outlets
def make_outlets(mode: str, sync: bool) -> dict[str, pylsl.StreamOutlet]:
    def labelled(info: pylsl.StreamInfo, labels: list[str]) -> pylsl.StreamInfo:
        info.desc().append_child_value("manufacturer", "Thalmic Labs")
        info.desc().append_child_value("emg_mode", mode)
        chans = info.desc().append_child("channels")
        for name in labels:
            chans.append_child("channel").append_child_value("label", name)
        return info

    srate = MODES[mode][1]
    out = {
        "emg": pylsl.StreamOutlet(labelled(pylsl.StreamInfo("Myo_EMG", "EMG", 8, srate, pylsl.cf_float32, "Myo_EMG"),
                                           [f"EMG_{i + 1}" for i in range(8)])),
        "imu": pylsl.StreamOutlet(labelled(pylsl.StreamInfo("Myo_IMU", "IMU", 10, 50, pylsl.cf_float32, "Myo_IMU"),
                                           IMU_LABELS)),
        "events": pylsl.StreamOutlet(pylsl.StreamInfo("Myo_Events", "Markers", 1, pylsl.IRREGULAR_RATE,
                                                      pylsl.cf_string, "Myo_Events")),
    }
    print(f"LSL: Myo_EMG ({mode}, {srate} Hz, 8 ch), Myo_IMU (50 Hz, 10 ch), Myo_Events"
          + ("" if sync else "  [sync off]"))
    return out


def classifier_text(ce) -> tuple[str, str | None]:
    """(marker text, message to print or None) for a dl-myo ClassifierEvent."""
    t = ce.t
    if t == ClassifierEventType.ARM_SYNCED:
        arm, x = ce.arm.name.lower(), ce.x_direction.name.lower()
        return f"arm_synced:{arm}:{x}", f"✓ Synced: {arm.upper()} arm, x-axis {x.replace('_', ' ')}"
    if t == ClassifierEventType.ARM_UNSYNCED:
        return "arm_unsynced", "! Unsynced (band moved or came off): do the sync gesture again"
    if t == ClassifierEventType.SYNC_FAILED:
        why = ce.sync_result.name.lower()
        return f"sync_failed:{why}", f"✗ Sync failed ({why}): relax and wave out again, a little more gently"
    if t == ClassifierEventType.POSE:
        return f"pose:{ce.pose.name.lower()}", None
    return t.name.lower(), None


# ------------------------------------------------------------------------------------------- client
class Publisher(MyoClient):
    """dl-myo calls these handlers as data arrives; each pushes straight to its LSL outlet."""

    out: dict[str, pylsl.StreamOutlet] = {}
    mode = "filtered"
    emg_count = 0

    async def on_emg_data(self, emg):            # raw / filtered: two 8-channel samples per packet
        if Publisher.mode != "preprocessed":
            Publisher.out["emg"].push_chunk([list(emg.sample1), list(emg.sample2)])
            Publisher.emg_count += 2

    async def on_fv_data(self, fvd):             # preprocessed: one 8-channel envelope sample
        if Publisher.mode == "preprocessed":
            Publisher.out["emg"].push_sample([float(v) for v in fvd.fv[:8]])
            Publisher.emg_count += 1

    async def on_imu_data(self, imu):
        o = imu.orientation
        Publisher.out["imu"].push_sample([o.w, o.x, o.y, o.z, *imu.accelerometer, *imu.gyroscope])

    async def on_classifier_event(self, ce):
        text, msg = classifier_text(ce)
        Publisher.out["events"].push_sample([text])
        if msg:
            print(f"\n{msg}")

    async def on_aggregated_data(self, ad): pass
    async def on_emg_data_aggregated(self, emg): pass
    async def on_motion_event(self, me): pass


async def connect(addr: str | None, timeout: float) -> Publisher:
    if addr == "any":          # skip the scan: connect to the first Myo by its service UUID (works on macOS
        addr = None            # when scans report nothing, as myo_check.py step 3 does)
    elif addr is None:
        myos, real = await scan()
        if not myos:
            raise RuntimeError("no Myo found: wake it (move it), close Myo Connect, check Bluetooth is on")
        addr = pick_target(myos, real)
        print(f"Nearest Myo: {myos[0][0]} ({myos[0][2]} dBm)")
    where = addr or "any Myo"
    print(f"Connecting to {where} …")
    try:
        return await asyncio.wait_for(Publisher.with_device(mac=addr), timeout)
    except asyncio.TimeoutError:
        raise RuntimeError(f"couldn't connect to {where} within {timeout:.0f} s "
                           "(is it awake, and not connected to Myo Connect or another computer?)") from None


async def run(args: argparse.Namespace) -> int:
    Publisher.out = make_outlets(args.mode, args.sync)
    Publisher.mode = args.mode
    emg_mode = MODES[args.mode][0]
    client: Publisher | None = None
    try:
        while True:  # (re)connect loop: unplugged / out of range armbands come back on their own
            try:
                client = await connect(args.addr, args.timeout)
            except RuntimeError as e:
                print(f"✗ {e}; retrying in 3 s (Ctrl+C to quit)")
                await asyncio.sleep(3)
                continue
            await client.setup(classifier_mode=ClassifierMode.ENABLED if args.sync else ClassifierMode.DISABLED,
                               emg_mode=emg_mode, imu_mode=IMUMode.SEND_DATA)
            await client.start()
            await client.vibrate(VibrationType.SHORT)
            Publisher.out["events"].push_sample(["connected"])
            print(f"✓ Streaming from {client.device.name} ({client.device.address}), battery "
                  f"{await client.battery_level()} %")
            if args.sync:
                print("Sync: wait ~2 min for warm-up, then relax and wave out (bend the wrist outward) until it buzzes.")
            last, t_last = Publisher.emg_count, time.monotonic()
            while client._client is not None and client._client.is_connected:
                await asyncio.sleep(1.0)
                now = time.monotonic()
                if not args.quiet:
                    rate = (Publisher.emg_count - last) / (now - t_last)
                    print(f"\r  EMG {rate:5.0f} samples/s", end="", flush=True)
                last, t_last = Publisher.emg_count, now
            Publisher.out["events"].push_sample(["disconnected"])
            print("\n! Myo disconnected; reconnecting …")
            client = None
    finally:
        if client is not None:
            try:
                await client.stop()
                await client.disconnect()
            except Exception:
                pass


async def list_myos() -> int:
    myos, real = await scan()
    if not myos:
        print("No Myo found. Wake it by moving it; close Myo Connect; check Bluetooth is on.")
        return 1
    for name, addr, rssi in myos:
        print(f"  {name:20s} {addr}  ({rssi} dBm)")
    if not real:
        print("(these are this computer's IDs, not MACs: connect without --addr to use the nearest Myo)")
    return 0


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--list", action="store_true", help="list nearby Myos and exit")
    ap.add_argument("--addr", help="connect to this Myo (address from --list), or 'any' = first Myo by service UUID, no scan; default: the nearest")
    ap.add_argument("--mode", choices=list(MODES), default="filtered", help="EMG mode (default: filtered)")
    ap.add_argument("--no-sync", dest="sync", action="store_false", help="skip the arm sync")
    ap.add_argument("--timeout", type=float, default=20.0, help="seconds to wait for a connection")
    ap.add_argument("--quiet", action="store_true", help="no live sample-rate line")
    args = ap.parse_args()
    tolerate_short_service_uuids()
    try:
        sys.exit(asyncio.run(list_myos() if args.list else run(args)))
    except KeyboardInterrupt:
        print("\nstopped")


if __name__ == "__main__":
    main()
