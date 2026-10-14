"""LSL outlets fed by the browser sim (brief §3.3), so LabRecorder can save EMG + robot state + task
events time-synced in one XDF:

  JackalState   type State,   8 float32 [x, y, yaw, v, w, v_cmd, w_cmd, collisions], 20 Hz
  JackalScan    type Range,   180 float32 lidar ranges (m), 20 Hz
  JackalEvents  type Markers, 1 string: run_start, gate:<k>, gate_missed:<k>, collision, deadman,
                estop, finish, dnf, action:<x>

Samples are stamped with the bridge's LSL clock when the sim's message arrives (localhost, ~1 ms).
"""
from __future__ import annotations

import logging
from typing import Any

from ..protocol import LIMITS

log = logging.getLogger("jackal_bridge")
L = LIMITS["lsl"]


class LslOutlets:
    def __init__(self, source_id: str = "jackal-bridge"):
        import pylsl

        self._pylsl = pylsl
        st, sc, ev = L["state"], L["scan"], L["events"]
        info = pylsl.StreamInfo(st["name"], st["type"], len(st["channels"]), 20, pylsl.cf_float32, f"{source_id}-state")
        chans = info.desc().append_child("channels")
        for name in st["channels"]:
            ch = chans.append_child("channel")
            ch.append_child_value("label", name)
        self.state = pylsl.StreamOutlet(info)
        sinfo = pylsl.StreamInfo(sc["name"], sc["type"], sc["channels"], 20, pylsl.cf_float32, f"{source_id}-scan")
        sinfo.desc().append_child_value("angle_min", "-2.356")
        sinfo.desc().append_child_value("angle_inc", "0.02618")
        sinfo.desc().append_child_value("unit", "m")
        self.scan = pylsl.StreamOutlet(sinfo)
        self.events = pylsl.StreamOutlet(pylsl.StreamInfo(ev["name"], ev["type"], 1, 0, pylsl.cf_string, f"{source_id}-events"))
        self.n_state = self.n_scan = self.n_events = 0

    def push_state(self, s: dict[str, Any]) -> None:
        try:
            p, vel, cmd = s["pose"], s["vel"], s["cmd_applied"]
            self.state.push_sample([p["x"], p["y"], p["yaw"], vel["v"], vel["w"], cmd["v"], cmd["w"], float(s["collisions"])])
            self.n_state += 1
            ranges = (s.get("scan") or {}).get("ranges")
            if ranges and len(ranges) == L["scan"]["channels"]:
                self.scan.push_sample(ranges)
                self.n_scan += 1
        except (KeyError, TypeError, ValueError) as e:
            log.debug("bad state for LSL: %s", e)

    def push_event(self, name: str) -> None:
        self.events.push_sample([str(name)[:128]])
        self.n_events += 1
