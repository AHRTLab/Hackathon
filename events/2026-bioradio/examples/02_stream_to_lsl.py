"""
Example 2: Stream BioRadio Data to LSL
=======================================

Streams BioRadio data to Lab Streaming Layer so other scripts can read it.
Run the hackathon GUI or your own control script on another process.

Usage:
    python examples/02_stream_to_lsl.py                 # Auto-detect
    python examples/02_stream_to_lsl.py --port COM9      # Specific port
    python examples/02_stream_to_lsl.py --rate 500       # Change sample rate
"""

import sys
import os
import time
import argparse

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from src.bioradio import BioRadio, create_lsl_outlet, VALID_SAMPLE_RATES


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", "-p", default=None)
    parser.add_argument("--rate", type=int, default=None, choices=VALID_SAMPLE_RATES,
                        help="Set sample rate before streaming")
    args = parser.parse_args()

    radio = BioRadio(port=args.port)

    try:
        radio.connect()
        config = radio.get_configuration()

        # Change sample rate if requested
        if args.rate and args.rate != config.sample_rate:
            print(f"Changing sample rate: {config.sample_rate} -> {args.rate} Hz")
            radio.set_sample_rate(args.rate)
            config = radio.config

        # Create LSL outlet
        outlet = create_lsl_outlet(config)
        if not outlet:
            print("ERROR: No enabled channels for LSL streaming!")
            return

        bp_channels = config.enabled_biopotential
        print(f"\nLSL Stream: 'BioRadio_{config.name}'")
        print(f"  Channels: {len(bp_channels)} @ {config.sample_rate} Hz")
        print(f"  Channel names: {[ch.name for ch in bp_channels]}")
        print(f"\nStreaming... (Ctrl+C to stop)")
        print(f"Other scripts can now receive this data via pylsl.\n")

        radio.start_acquisition()
        start = time.time()
        pushed = 0

        while True:
            sample = radio.read_data(timeout=0.1)
            if sample and sample.biopotential:
                num_sub = max(len(v) for v in sample.biopotential.values())
                for s_idx in range(num_sub):
                    lsl_sample = []
                    for ch in bp_channels:
                        vals = sample.biopotential.get(ch.channel_index, [])
                        lsl_sample.append(float(vals[s_idx]) if s_idx < len(vals) else 0.0)
                    outlet.push_sample(lsl_sample)
                    pushed += 1

                if pushed % (config.sample_rate * 5) == 0:
                    elapsed = time.time() - start
                    rate = pushed / elapsed if elapsed > 0 else 0
                    print(f"  {elapsed:.0f}s: {pushed} samples pushed ({rate:.0f} Hz)")

    except KeyboardInterrupt:
        print("\n\nStopping...")
    finally:
        radio.stop_acquisition()
        radio.disconnect()
        print(f"Total: {pushed} samples streamed")


if __name__ == "__main__":
    main()
