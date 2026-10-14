"""Acceptance 7 helper: listen to the named LSL streams for a few seconds and print sample counts as JSON."""
import json
import sys
import time

import pylsl

names = sys.argv[1:]
inlets = {}
deadline = time.monotonic() + 10
while len(inlets) < len(names) and time.monotonic() < deadline:
    for info in pylsl.resolve_streams(wait_time=1.0):
        if info.name() in names and info.name() not in inlets:
            inlets[info.name()] = pylsl.StreamInlet(info)
for i in inlets.values():
    i.open_stream(timeout=5)
counts = {n: 0 for n in names}
end = time.monotonic() + 3
while time.monotonic() < end:
    for n, i in inlets.items():
        s, _ = i.pull_chunk(timeout=0.0)
        counts[n] += len(s)
    time.sleep(0.01)
print(json.dumps(counts))
