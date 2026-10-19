#!/usr/bin/env python3
"""Myo Bluetooth check: can this computer find, connect to, and vibrate a Myo, with no dongle?

    pip install dl-myo
    python myo_check.py              # connect to the first Myo found (by its service UUID)
    python myo_check.py --addr XX    # connect to a specific one (address as printed by step 2 or 1)
    python myo_check.py --off        # ... and then turn it off (it has no power button)

Close Myo Connect first (it holds the armband). macOS: your terminal app needs Bluetooth permission
(System Settings → Privacy & Security → Bluetooth); without it Python exits silently on the first scan.

Steps:
  1. plain BLE scan             macOS reports per-computer UUIDs here, not MAC addresses
  2. scan with real addresses   (bleak's use_bdaddr) what dl-myo's connect-by-MAC compares against
  3. connect + vibrate twice    + battery level, then disconnect
  4. (--off) deep sleep         off until it is plugged into USB; left alone it only idles (drains slowly)
If 1 finds the Myo but 2 shows a different address (or nothing), connecting by the address from 1 can
never work with dl-myo on macOS, which is exactly the "found it but no vibration" symptom.
"""
from __future__ import annotations

import argparse
import asyncio
import sys

import bleak

try:
    from myo import MyoClient
    from myo.types import VibrationType
except ImportError:
    sys.exit("pip install dl-myo")


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


async def scan(bdaddr: bool) -> list[tuple[str, str, int | None]]:
    try:
        devs = await bleak.BleakScanner.discover(timeout=5.0, return_adv=True, cb=dict(use_bdaddr=bdaddr))
    except Exception as e:  # use_bdaddr relies on a private macOS API that may be gone
        print(f"   scan failed: {type(e).__name__}: {e}")
        return []
    return [(d.name, d.address, adv.rssi) for d, adv in devs.values() if d.name and "myo" in d.name.lower()]


class Quiet(MyoClient):
    async def on_emg_data(self, emg): pass
    async def on_imu_data(self, imu): pass
    async def on_classifier_event(self, ce): pass
    async def on_aggregated_data(self, ad): pass
    async def on_emg_data_aggregated(self, emg): pass
    async def on_fv_data(self, fvd): pass
    async def on_motion_event(self, me): pass


async def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--addr", help="connect to this address instead of the first Myo found")
    ap.add_argument("--timeout", type=float, default=30.0)
    ap.add_argument("--off", action="store_true",
                    help="then turn the armband OFF (deep sleep). It stays off until plugged into USB")
    args = ap.parse_args()
    tolerate_short_service_uuids()

    for step, bd in ((1, False), (2, True)):
        print(f"{step}. scan ({'real addresses' if bd else 'plain'}) …")
        found = await scan(bd)
        for name, addr, rssi in found:
            print(f"   {name}  {addr}  ({rssi} dBm)")
        if not found:
            print("   no Myo found")

    target = f"address {args.addr}" if args.addr else "the first Myo (by service UUID)"
    print(f"3. connecting to {target}, up to {args.timeout:.0f} s …")
    try:
        client = await asyncio.wait_for(Quiet.with_device(mac=args.addr), args.timeout)
    except asyncio.TimeoutError:
        print("   ✗ timed out: no matching Myo (wrong address for this OS?), or it's connected to something else")
        return 1
    except Exception as e:
        print(f"   ✗ {type(e).__name__}: {e}")
        return 1
    try:
        print(f"   ✓ connected: {client.device.name} {client.device.address}")
        for _ in range(2):
            await client.vibrate(VibrationType.SHORT)
            await asyncio.sleep(0.4)
        print("   ✓ vibrate sent (it should buzz twice)")
        try:
            print(f"   battery: {await client.battery_level()} %")
        except Exception as e:
            print(f"   battery read failed: {e}")
        if args.off:
            await client.deep_sleep()
            print("4. ✓ turned off (deep sleep). To turn it back on, plug it into USB for a moment.")
    finally:
        try:
            await client.disconnect()
        except Exception:
            pass
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
