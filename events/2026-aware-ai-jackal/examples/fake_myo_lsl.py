#!/usr/bin/env python3
"""Fake Myo armband on LSL, so you can build your pipeline without hardware.

    pip install pylsl numpy
    python fake_myo_lsl.py               # publish synthetic EMG + IMU only
    python fake_myo_lsl.py --emit-cmd    # ... and ALSO drive the robot (JackalCmd) from the fake EMG

Streams (same layout the real Myo publisher will use):
    MyoEMG   type EMG, 8 channels, 200 Hz, int-like values in about [-128, 127]
    MyoIMU   type IMU, 10 channels [qw qx qy qz ax ay az gx gy gz], 50 Hz

The fake EMG has two "muscle groups" that slowly contract and relax:
    channels 0-3  ("flexors")   → envelope A        channels 4-7 ("extensors") → envelope B
With --emit-cmd, a tiny baseline controller turns them into a command, so you can see the LSL path
end to end:  v = 0.6 * (A + B) / 2,  w = 1.5 * (A - B).  Your team's job is to do this properly.
"""
from __future__ import annotations

import argparse
import math
import time

import numpy as np
from pylsl import StreamInfo, StreamOutlet, cf_float32, local_clock

EMG_HZ, IMU_HZ, CMD_HZ = 200, 50, 20


def envelopes(t: float) -> tuple[float, float]:
    a = 0.5 + 0.5 * math.sin(2 * math.pi * t / 6.0)           # 6 s cycle
    b = 0.5 + 0.5 * math.sin(2 * math.pi * t / 6.0 + 1.2)     # phase-shifted
    return a, b


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--emit-cmd", action="store_true", help="also publish JackalCmd [v, w] from the fake EMG")
    ap.add_argument("--seconds", type=float, default=0, help="stop after N seconds (0 = run forever)")
    args = ap.parse_args()

    emg = StreamOutlet(StreamInfo("MyoEMG", "EMG", 8, EMG_HZ, cf_float32, "fake-myo-emg"))
    imu = StreamOutlet(StreamInfo("MyoIMU", "IMU", 10, IMU_HZ, cf_float32, "fake-myo-imu"))
    cmd = StreamOutlet(StreamInfo("JackalCmd", "Control", 2, 0, cf_float32, "fake-myo")) if args.emit_cmd else None
    print("publishing MyoEMG (8 ch @ 200 Hz), MyoIMU (10 ch @ 50 Hz)" + (", JackalCmd [v, w] @ 20 Hz" if cmd else ""))

    rng = np.random.default_rng(0)
    t0 = time.monotonic()
    n_emg = n_imu = n_cmd = 0
    while True:
        t = time.monotonic() - t0
        if args.seconds and t >= args.seconds:
            break
        a, b = envelopes(t)
        while n_emg < t * EMG_HZ:  # keep each stream on its nominal rate
            amp = np.array([a] * 4 + [b] * 4) * 100 + 5
            emg.push_sample(np.clip(rng.normal(0, 1, 8) * amp, -128, 127).tolist(), local_clock())
            n_emg += 1
        while n_imu < t * IMU_HZ:
            yaw = 0.3 * math.sin(t)
            imu.push_sample([math.cos(yaw / 2), 0, 0, math.sin(yaw / 2), 0, 0, 9.81, 0, 0, 0.3 * math.cos(t)])
            n_imu += 1
        if cmd is not None:
            while n_cmd < t * CMD_HZ:
                cmd.push_sample([0.6 * (a + b) / 2, 1.5 * (a - b)])
                n_cmd += 1
        time.sleep(0.002)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        pass
