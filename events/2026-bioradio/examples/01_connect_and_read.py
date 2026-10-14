"""
Example 1: Connect to BioRadio and Read Data
=============================================

This is the simplest example - connect, read data for 5 seconds, print it.

Usage:
    python examples/01_connect_and_read.py              # Auto-detect
    python examples/01_connect_and_read.py --port COM9   # Specific port
"""

import sys
import os
import time
import argparse

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from src.bioradio import BioRadio

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", "-p", default=None, help="Serial port (e.g., COM9)")
    parser.add_argument("--duration", "-d", type=float, default=5.0, help="Seconds to record")
    args = parser.parse_args()

    # Connect
    radio = BioRadio(port=args.port)
    try:
        radio.connect()
        config = radio.get_configuration()

        print(f"Device: {radio.device_name}")
        print(f"Sample Rate: {config.sample_rate} Hz")
        print(f"Active Channels: {len(config.enabled_biopotential)}")
        for ch in config.enabled_biopotential:
            print(f"  Ch{ch.channel_index}: {ch.name} ({ch.bit_resolution}bit)")

        # Acquire
        radio.start_acquisition()
        print(f"\nRecording for {args.duration}s...")

        start = time.time()
        packet_count = 0

        while time.time() - start < args.duration:
            sample = radio.read_data(timeout=0.1)
            if sample:
                packet_count += 1
                # Print every ~1 second
                if packet_count % 125 == 0:
                    elapsed = time.time() - start
                    if sample.biopotential:
                        first_ch = next(iter(sample.biopotential.values()))
                        print(f"  t={elapsed:.1f}s  packets={packet_count}  "
                              f"Ch1={first_ch[0] if first_ch else '?'}")

        radio.stop_acquisition()
        print(f"\nDone! {packet_count} packets received, "
              f"{radio.dropped_packets} dropped")

    finally:
        radio.disconnect()


if __name__ == "__main__":
    main()
