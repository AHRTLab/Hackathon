#!/usr/bin/env python3
"""Myo Bluetooth check: can this computer find, connect to, and vibrate a Myo, with no dongle?

    pip install dl-myo
    python myo_check.py              # connect to the first Myo found (by its service UUID)
    python myo_check.py --addr XX    # connect to a specific one (address as printed by step 2 or 1)

Close Myo Connect first (it holds the armband). macOS: your terminal app needs Bluetooth permission
(System Settings → Privacy & Security → Bluetooth); without it Python exits silently on the first scan.

Steps:
  1. plain BLE scan             macOS reports per-computer UUIDs here, not MAC addresses
  2. scan with real addresses   (bleak's use_bdaddr) what dl-myo's connect-by-MAC compares against
  3. connect + vibrate twice    + battery level, then disconnect
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
    args = ap.parse_args()

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
    finally:
        try:
            await client.disconnect()
        except Exception:
            pass
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
