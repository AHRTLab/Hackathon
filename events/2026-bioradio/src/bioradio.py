"""
bioradio.py - Pure Python/pyserial interface for the GLNeuroTech BioRadio device.

Replaces the .NET BioRadioSDK with a standalone Python implementation.
Communicates via serial ports using the BioRadio's custom binary protocol.

Platform Support:
    Windows:  Full support via Bluetooth serial (COMx ports)
    macOS:    Requires Parallels Desktop + USB Bluetooth adapter (see below)
    Linux:    Supported via rfcomm serial ports

macOS Note:
    macOS Sonoma (14+) cannot establish the Bluetooth Serial Port Profile
    (SPP/RFCOMM) data channel required by the BioRadio. The serial port
    /dev/cu.BioRadioAYA may appear but will not carry data.

    Workaround: Use Parallels Desktop with a USB Bluetooth adapter passed
    through to a Windows VM. The USB adapter bypasses the macOS BT stack
    and lets Windows manage the connection directly. Run this code inside
    the Windows VM.

    Alternative: Use bioradio_lsl_bridge.py to stream data from a Windows
    machine to macOS over the network via Lab Streaming Layer (LSL).

Requirements:
    pip install pyserial

Usage:
    from src.bioradio import BioRadio, scan_for_bioradio

    # Auto-detect (recommended — probes ports to find the BioRadio):
    radio = BioRadio()
    radio.connect()   # auto-scans & probes

    # Or specify a port explicitly:
    # Windows  — use the LOWER COM port (e.g. COM9, NOT COM10):
    radio = BioRadio(port="COM9")
    # macOS via Parallels — use the COM port shown in the Windows VM:
    # radio = BioRadio(port="COM9")

    radio.connect()
    config = radio.get_configuration()
    radio.start_acquisition()

    # Read data
    while True:
        data = radio.read_data(timeout=1.0)
        if data:
            print(data)

    radio.stop_acquisition()
    radio.disconnect()

Author:  BioRobotics Lab (auto-generated from BioRadioSDK analysis)
License: Educational use
"""

import struct
import sys
import time
import threading
import logging
import platform
from enum import IntEnum, IntFlag
from dataclasses import dataclass, field
from typing import Optional, List, Dict, Tuple, Callable
from collections import deque
import math

import serial
import serial.tools.list_ports

IS_MACOS = sys.platform == "darwin"
IS_WINDOWS = sys.platform == "win32"

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logger = logging.getLogger("bioradio")

# ---------------------------------------------------------------------------
# Protocol Constants
# ---------------------------------------------------------------------------
SYNC_BYTE = 0xF0
BAUD_RATE = 460800
DEFAULT_TIMEOUT_MS = 5500
COMMAND_TIMEOUT_MS = 1000
MAX_RETRIES = 5
WATCHDOG_TIMEOUT_S = 5.0

# Unlock key: ASCII 'C','M','D','I'
UNLOCK_KEY = bytes([0x43, 0x4D, 0x44, 0x49])

VALID_SAMPLE_RATES = [250, 500, 1000, 2000, 4000, 8000, 16000]
VALID_BIT_RESOLUTIONS = [12, 16, 24]


# ---------------------------------------------------------------------------
# Enums  (match the .NET SDK exactly)
# ---------------------------------------------------------------------------
class DeviceCommand(IntEnum):
    """Command bytes (upper nibble of header byte)."""
    NegativeAck      = 0x00
    SetMode          = 0x20
    GetMode          = 0x30
    SetParam         = 0x40
    GetParam         = 0x50
    SetState         = 0x60
    PacketLength     = 0x70
    WriteEEProm      = 0x80
    ReadEEProm       = 0x90
    TransmitData     = 0xA0
    ReceiveData      = 0xB0
    MiscData         = 0xC0
    PassThroughCmd   = 0xD0
    GetGlobal        = 0xF0


class ParamId(IntEnum):
    """Sub-command byte for Get/SetParam (Data[0])."""
    CommonDAQ        = 0x01
    ChannelConfig    = 0x02
    DeviceTime       = 0x03
    BatteryStatus    = 0x04
    FirmwareVersion  = 0x05
    UnlockDevice     = 0x0E
    LockDevice       = 0x0F


class AcquisitionState(IntEnum):
    Start = 0x02
    Stop  = 0x03


class ChannelTypeCode(IntEnum):
    BioPotential = 0
    EventMarker  = 1
    Mems         = 2
    Auxiliary    = 3
    PulseOx      = 4
    NotConnected = 255


class ConfigFlags(IntFlag):
    ConnCheck   = 0x01
    DrvGround   = 0x02
    SingleEnded = 0x04


class BioPotentialMode(IntEnum):
    Normal     = 0
    GSR        = 1
    TestSignal = 2
    RIP        = 3


class CouplingType(IntEnum):
    DC = 0
    AC = 1


class StatusCode(IntEnum):
    RSSI            = 0
    SDCardRemaining = 1
    BatteryVoltage  = 2
    BatteryCurrent  = 3
    BatteryCharge   = 4
    DCDCTemp        = 5
    AmbientTemp     = 6
    ErrorCode       = 7


# ---------------------------------------------------------------------------
# Data Structures
# ---------------------------------------------------------------------------
@dataclass
class Packet:
    """A parsed BioRadio protocol packet."""
    command: DeviceCommand = DeviceCommand.NegativeAck
    data: bytes = b""
    is_response: bool = False

    @property
    def length(self) -> int:
        return len(self.data)


@dataclass
class ChannelConfig:
    """Configuration for a single channel."""
    channel_index: int = 0
    type_code: ChannelTypeCode = ChannelTypeCode.NotConnected
    name: str = ""
    preset_code: int = 0
    enabled: bool = False
    connected: bool = False
    saved: bool = True
    streamed: bool = True
    # BioPotential-specific
    gain: int = 0
    operation_mode: BioPotentialMode = BioPotentialMode.Normal
    coupling: CouplingType = CouplingType.DC
    bit_resolution: int = 12

    @classmethod
    def from_bytes(cls, raw: bytes) -> "ChannelConfig":
        """Parse channel config from device response bytes (skip param ID byte)."""
        if len(raw) < 35:
            raise ValueError(f"Channel config too short: {len(raw)} bytes")

        ch = cls()
        ch.channel_index = raw[0]
        ch.type_code = ChannelTypeCode(raw[1])

        # Name: bytes 2-31 (30 chars ASCII)
        name_bytes = raw[2:32]
        null_idx = name_bytes.find(0)
        ch.name = name_bytes[:null_idx if null_idx >= 0 else 30].decode("ascii", errors="replace")

        # Preset code: big-endian uint16
        ch.preset_code = (raw[32] << 8) | raw[33]

        # Flags byte
        flags = raw[34]
        ch.enabled   = bool(flags & 0x80)
        ch.connected = bool(flags & 0x40)
        ch.saved     = bool(flags & 0x20)
        ch.streamed  = bool(flags & 0x10)

        # BioPotential-specific fields (bytes 35-38)
        if ch.type_code == ChannelTypeCode.BioPotential and len(raw) >= 39:
            ch.gain = raw[35]
            ch.operation_mode = BioPotentialMode(raw[36])
            ch.coupling = CouplingType(raw[37])
            ch.bit_resolution = raw[38]

        return ch

    def to_bytes(self) -> bytes:
        """Serialize channel config to bytes for SetParam ChannelConfig.

        Returns 39 bytes: [ch_index(1)] [type_code(1)] [name(30)]
                          [preset(2)] [flags(1)] [gain(1)] [op_mode(1)]
                          [coupling(1)] [bit_res(1)]
        """
        buf = bytearray(39)
        buf[0] = self.channel_index
        buf[1] = int(self.type_code)

        # Name: 30 bytes ASCII, null-padded
        name_enc = self.name.encode("ascii", errors="replace")[:30]
        buf[2:2 + len(name_enc)] = name_enc

        # Preset code: big-endian uint16
        buf[32] = (self.preset_code >> 8) & 0xFF
        buf[33] = self.preset_code & 0xFF

        # Flags byte
        flags = 0
        if self.enabled:    flags |= 0x80
        if self.connected:  flags |= 0x40
        if self.saved:      flags |= 0x20
        if self.streamed:   flags |= 0x10
        buf[34] = flags

        # BioPotential-specific fields
        buf[35] = self.gain
        buf[36] = int(self.operation_mode)
        buf[37] = int(self.coupling)
        buf[38] = self.bit_resolution

        return bytes(buf)

    def __repr__(self):
        status = "ON " if self.enabled else "OFF"
        return (f"Ch{self.channel_index:2d} [{status}] {self.type_code.name:14s} "
                f"'{self.name}' gain={self.gain} {self.bit_resolution}bit "
                f"{self.coupling.name} {self.operation_mode.name}")


@dataclass
class DeviceConfig:
    """Global BioRadio configuration."""
    name: str = ""
    config_flags: ConfigFlags = ConfigFlags(0)
    frequency_multiplier: int = 1
    channels: List[ChannelConfig] = field(default_factory=list)

    @property
    def sample_rate(self) -> int:
        return self.frequency_multiplier * 250

    @sample_rate.setter
    def sample_rate(self, value: int):
        if value not in VALID_SAMPLE_RATES:
            raise ValueError(f"Invalid sample rate {value}. Valid: {VALID_SAMPLE_RATES}")
        self.frequency_multiplier = value // 250

    @property
    def is_single_ended(self) -> bool:
        return bool(self.config_flags & ConfigFlags.SingleEnded)

    @property
    def max_biopotential_channels(self) -> int:
        return 8 if self.is_single_ended else 4

    @classmethod
    def from_bytes(cls, raw: bytes) -> "DeviceConfig":
        """Parse global config from GetParam 0x01 response (skip param ID byte)."""
        cfg = cls()
        # Name: 16 bytes ASCII
        name_bytes = raw[0:16]
        null_idx = name_bytes.find(0)
        cfg.name = name_bytes[:null_idx if null_idx >= 0 else 16].decode("ascii", errors="replace")
        cfg.config_flags = ConfigFlags(raw[16])
        cfg.frequency_multiplier = raw[17]
        return cfg

    def to_bytes(self) -> bytes:
        """Serialize global config to bytes for SetParam CommonDAQ.

        Returns 18 bytes: [name(16)] [config_flags(1)] [freq_mult(1)]
        """
        name_enc = self.name.encode("ascii", errors="replace")[:16]
        name_padded = name_enc.ljust(16, b"\x00")
        return name_padded + bytes([int(self.config_flags), self.frequency_multiplier])

    @property
    def biopotential_channels(self) -> List[ChannelConfig]:
        return [c for c in self.channels
                if c.type_code == ChannelTypeCode.BioPotential]

    @property
    def enabled_biopotential(self) -> List[ChannelConfig]:
        max_ch = self.max_biopotential_channels
        return [c for c in self.biopotential_channels
                if c.enabled and c.channel_index <= max_ch]

    @property
    def enabled_auxiliary(self) -> List[ChannelConfig]:
        return [c for c in self.channels
                if c.type_code == ChannelTypeCode.Auxiliary and c.enabled]

    @property
    def enabled_pulseox(self) -> List[ChannelConfig]:
        return [c for c in self.channels
                if c.type_code == ChannelTypeCode.PulseOx and c.enabled]

    @property
    def mems_enabled(self) -> bool:
        return any(c.type_code == ChannelTypeCode.Mems and c.enabled
                   for c in self.channels)

    def __repr__(self):
        return (f"BioRadio '{self.name}' | {self.sample_rate}Hz | "
                f"{'SE' if self.is_single_ended else 'DIFF'} | "
                f"{len(self.enabled_biopotential)} BioPot channels active")


@dataclass
class BatteryInfo:
    voltage: float = 0.0

    @property
    def percentage(self) -> float:
        """Rough battery percentage (3.0V=empty, 4.2V=full for Li-ion)."""
        return max(0.0, min(100.0, (self.voltage - 3.0) / 1.2 * 100))


@dataclass
class DataSample:
    """A single parsed data packet's worth of samples."""
    packet_id: int = 0
    timestamp: float = 0.0
    biopotential: Dict[int, List[int]] = field(default_factory=dict)   # ch_index -> [samples]
    auxiliary: Dict[int, int] = field(default_factory=dict)             # ch_index -> value
    pulseox: Dict[int, dict] = field(default_factory=dict)              # ch_index -> {hr, spo2, ppg}
    battery_voltage: float = 0.0
    event_marker: bool = False


# ---------------------------------------------------------------------------
# COM / Serial Port Scanner (cross-platform: Windows, macOS, Linux)
# ---------------------------------------------------------------------------

# Known BioRadio device names that appear in port paths / descriptions.
# The BioRadio's 4-char device ID (e.g. "AVA ") is embedded in the
# Bluetooth serial port name on macOS (/dev/tty.AVA-SerialPort).
BIORADIO_DEVICE_NAMES = ["bioradioaya", "bioradio", "ava", "aya", "biocapture"]

# Generic keywords that suggest a serial bridge (FTDI, BT SPP, etc.)
_GENERIC_SERIAL_KW = ["ftdi", "serial", "usb", "bluetooth", "standard"]


def scan_for_bioradio(verbose: bool = True,
                      device_name: Optional[str] = None) -> List[str]:
    """
    Scan all serial ports and return those that might be a BioRadio.

    Cross-platform:
      - **Windows**: looks for COMx ports (e.g. COM9, COM10)
      - **macOS**:   looks for /dev/tty.* and /dev/cu.* containing the
                     device name (default "AVA") or generic serial keywords
      - **Linux**:   looks for /dev/ttyUSB* or /dev/ttyACM*

    The BioRadio typically creates **two** serial ports:
      - One for outgoing commands (PC → device)
      - One for incoming data   (device → PC)

    Args:
        verbose:     Print a table of all ports found.
        device_name: Override the BioRadio device name to search for
                     (default searches for "AVA" and other known names).

    Returns:
        List of port paths sorted by relevance, best candidates first.
        e.g. Windows: ['COM9', 'COM10']
        e.g. macOS:   ['/dev/tty.AVA', '/dev/cu.AVA']
    """
    search_names = list(BIORADIO_DEVICE_NAMES)
    if device_name:
        search_names.insert(0, device_name.lower())

    candidates = []
    ports = serial.tools.list_ports.comports()

    if verbose:
        os_label = {"darwin": "macOS", "win32": "Windows"}.get(
            sys.platform, sys.platform)
        print(f"\n{'='*60}")
        print(f"  BioRadio Serial Port Scanner  ({os_label})")
        print(f"{'='*60}")
        print(f"  Found {len(ports)} port(s):\n")

    for p in sorted(ports, key=lambda x: x.device):
        dev = p.device or ""
        desc = p.description or ""
        mfr = p.manufacturer or ""
        hwid = p.hwid or ""

        # Combine all searchable text
        search_text = (dev + desc + mfr + hwid).lower()

        # Priority 1: matches a known BioRadio device name (e.g. "AVA")
        is_bioradio = any(name in search_text for name in search_names)

        # Priority 2: generic serial / BT / FTDI keyword
        is_serial = any(kw in search_text for kw in _GENERIC_SERIAL_KW)

        # On macOS, also flag any /dev/tty.* or /dev/cu.* that isn't
        # a built-in (debug, MALS, wlan, etc.)
        if IS_MACOS and not is_bioradio and not is_serial:
            skip_builtins = ["debug", "mals", "wlan", "usbmodem"]
            if (dev.startswith("/dev/tty.") or dev.startswith("/dev/cu.")):
                if not any(bi in dev.lower() for bi in skip_builtins):
                    is_serial = True

        is_candidate = is_bioradio or is_serial
        tag = ""
        if is_bioradio:
            tag = " <-- BioRadio detected!"
        elif is_serial:
            tag = " <-- possible BioRadio"

        if verbose:
            # Adapt column width for longer macOS paths
            dev_width = max(8, len(dev) + 2)
            desc_width = max(20, len(desc) + 2)
            print(f"  {dev:<{dev_width}}  {desc:<{desc_width}}  {mfr}{tag}")

        if is_candidate:
            # Put definite BioRadio matches first
            if is_bioradio:
                candidates.insert(0, dev)
            else:
                candidates.append(dev)

    # On macOS, prefer /dev/cu.* over /dev/tty.* (tty blocks on carrier detect)
    if IS_MACOS and candidates:
        cu_first = sorted(candidates, key=lambda p: (
            0 if "/dev/cu." in p else 1,   # cu.* first
            0 if any(n in p.lower() for n in search_names) else 1  # BioRadio name first
        ))
        candidates = cu_first

    if verbose:
        print(f"\n  Candidates: {candidates if candidates else 'None found'}")
        if not candidates:
            if IS_MACOS:
                print("\n  Troubleshooting (macOS):")
                print("    macOS Sonoma (14+) cannot establish Bluetooth SPP with the BioRadio.")
                print("    The serial port may exist but will not carry data.")
                print()
                print("    Recommended: Use Parallels Desktop + USB Bluetooth adapter.")
                print("    Pass the USB BT adapter through to a Windows VM and run there.")
                print("    See README.md for full setup instructions.")
            elif IS_WINDOWS:
                print("\n  Troubleshooting (Windows):")
                print("    1. Check Device Manager > Ports (COM & LPT)")
                print("    2. BioRadio usually creates two COM ports")
                print("    3. Make sure the device is paired via Bluetooth")
        print(f"{'='*60}\n")

    return candidates


def probe_bioradio_port(port_name: str, timeout: float = 0,
                        verbose: bool = False) -> Optional[bytes]:
    """
    Attempt to open a port and send a GetGlobal command to see if a
    BioRadio responds.

    The BioRadio uses a SINGLE bidirectional serial stream internally.
    On Windows, Bluetooth creates two COM ports but only ONE of them
    actually works for bidirectional communication (typically the lower-
    numbered port, e.g. COM9 works, COM10 does not).

    On macOS, BT serial can be slow to stabilize — this function sends
    the probe command multiple times (up to 3 on macOS, 1 on Windows)
    with increasing stabilization delays between attempts.

    Args:
        port_name: Serial port path (e.g. "COM9" or "/dev/cu.BioRadioAYA")
        timeout:   Max seconds to wait for a response per attempt.
                   Default 0 means auto: 3.0s on macOS, 2.0s on Windows.
        verbose:   Print debug info to stdout.

    Returns:
        Raw response bytes if the device responded, or None on failure.
    """
    if timeout <= 0:
        timeout = 3.0 if IS_MACOS else 2.0

    # On macOS, BT serial is flaky — try multiple times with increasing delays
    max_attempts = 3 if IS_MACOS else 1
    stabilization_delays = [0.5, 1.0, 2.0] if IS_MACOS else [0.25]

    try:
        ser = serial.Serial(
            port=port_name,
            baudrate=BAUD_RATE,
            timeout=timeout,
            write_timeout=timeout,
            rtscts=False,
            dsrdtr=False,
        )
        if IS_MACOS:
            ser.dtr = False
            ser.rts = False

        cmd = bytes([SYNC_BYTE, 0xF1, 0x00])  # GetGlobal FirmwareVersion

        for attempt in range(max_attempts):
            stab_delay = stabilization_delays[min(attempt, len(stabilization_delays) - 1)]

            if verbose and attempt > 0:
                print(f"  [{port_name}] Retry {attempt + 1}/{max_attempts} "
                      f"(delay={stab_delay:.2f}s) ...")

            time.sleep(stab_delay)

            # Drain any stale data
            try:
                if ser.in_waiting:
                    stale = ser.read(ser.in_waiting)
                    if verbose and stale:
                        print(f"  [{port_name}] Drained {len(stale)} stale bytes")
            except OSError:
                pass

            # Send the probe command
            try:
                ser.write(cmd)
                ser.flush()
            except serial.SerialTimeoutException:
                if verbose:
                    print(f"  [{port_name}] Write timeout (port not bidirectional)")
                ser.close()
                return None

            if verbose:
                print(f"  [{port_name}] TX: {cmd.hex(' ')}")

            # Read response with blocking read
            response = bytearray()
            deadline = time.monotonic() + timeout
            while time.monotonic() < deadline:
                remaining = deadline - time.monotonic()
                if remaining <= 0:
                    break
                ser.timeout = min(0.5, remaining)
                byte = ser.read(1)
                if byte:
                    response.extend(byte)
                    time.sleep(0.01)
                    try:
                        waiting = ser.in_waiting
                        if waiting > 0:
                            response.extend(ser.read(waiting))
                    except OSError:
                        pass
                    # Check if we have a complete response (sync + header + data)
                    if SYNC_BYTE in response and len(response) >= 3:
                        break

            if verbose:
                if response:
                    print(f"  [{port_name}] RX ({len(response)} bytes): {response.hex(' ')}")
                else:
                    print(f"  [{port_name}] RX: no response")

            if SYNC_BYTE in response and len(response) >= 3:
                ser.close()
                return bytes(response)

            # No response on this attempt — will retry if macOS
            if verbose and attempt < max_attempts - 1:
                print(f"  [{port_name}] No response, will retry...")

        ser.close()
        return None

    except serial.SerialTimeoutException:
        if verbose:
            print(f"  [{port_name}] Write timeout (port not bidirectional)")
        return None
    except (serial.SerialException, OSError) as e:
        if verbose:
            print(f"  [{port_name}] Error: {e}")
        return None


def find_bioradio_port(verbose: bool = True) -> Optional[str]:
    """
    Scan for BioRadio ports and probe each one to find the working
    bidirectional port.

    On Windows, Bluetooth creates two COM ports (e.g. COM9 and COM10),
    but only ONE actually works for two-way communication with the device.
    This function probes each candidate to find the one that responds.

    On macOS, BT serial can be slow to wake up. probe_bioradio_port()
    already does multiple attempts with increasing delays on macOS.

    Args:
        verbose: Print scanning and probing progress.

    Returns:
        The port path of the working BioRadio port, or None if not found.
    """
    candidates = scan_for_bioradio(verbose=verbose)
    if not candidates:
        return None

    if verbose:
        print(f"\n  Probing {len(candidates)} candidate(s) for BioRadio response...")

    for port_name in candidates:
        if verbose:
            print(f"  Probing {port_name}...")
        # timeout=0 means auto (3.0s on macOS, 2.0s on Windows)
        response = probe_bioradio_port(port_name, timeout=0, verbose=verbose)
        if response is not None:
            if verbose:
                print(f"\n  [OK] BioRadio found on {port_name}!")
            return port_name

    if verbose:
        print("\n  [FAIL] No BioRadio responded on any port.")
        print("    Make sure the device is powered on and paired via Bluetooth.")
        if IS_MACOS:
            print("    Try running: python bioradio_diagnose.py  for detailed diagnostics")
    return None


# ---------------------------------------------------------------------------
# Packet Builder / Parser
# ---------------------------------------------------------------------------
def build_packet(command: DeviceCommand, data: bytes = b"",
                 use_checksum: bool = False) -> bytes:
    """
    Build a raw BioRadio protocol packet.

    Frame: [0xF0] [header] [length?] [data...] [checksum?]

    The SDK sends commands WITHOUT checksum (usesChecksum is temporarily
    set to False during SendDirectCommand), but data packets from the
    device DO include checksums.
    """
    header = int(command)
    data_len = len(data)

    if data_len < 6:
        header |= data_len
        pkt = bytes([SYNC_BYTE, header]) + data
    else:
        header |= 0x06
        pkt = bytes([SYNC_BYTE, header, data_len]) + data

    if use_checksum:
        csum = SYNC_BYTE + (header & 0xFF)
        if data_len >= 6:
            csum += data_len
        for b in data:
            csum += b
        csum &= 0xFFFF
        pkt += struct.pack(">H", csum)

    return pkt


class PacketParser:
    """
    State machine that mirrors HardwareLinkHandler.ProcessData().
    Feeds raw bytes in, emits parsed Packet objects via callback.
    """

    class State(IntEnum):
        SYNC     = 0
        HEADER   = 1
        LENGTH   = 3
        DATA     = 4
        CHKSUM1  = 5
        CHKSUM2  = 6
        LONG_HI  = 7
        LONG_LO  = 8

    def __init__(self, on_packet: Callable[[Packet], None],
                 on_bad_packet: Optional[Callable[[str], None]] = None,
                 uses_checksum: bool = True):
        self.on_packet = on_packet
        self.on_bad_packet = on_bad_packet or (lambda msg: logger.warning(f"Bad packet: {msg}"))
        self.uses_checksum = uses_checksum
        self._reset()

    def _reset(self):
        self._state = self.State.SYNC
        self._current = Packet()
        self._data_buf = bytearray()
        self._data_expected = 0
        self._calc_checksum = 0
        self._recv_checksum = 0
        self._predetermined_length = 0
        self._pending_length = 0  # temp for PacketLength command

    def feed(self, raw: bytes):
        """Feed raw bytes from the serial port into the parser."""
        for b in raw:
            self._process_byte(b)

    def _process_byte(self, b: int):
        st = self._state

        if st == self.State.SYNC:
            if b == SYNC_BYTE:
                self._state = self.State.HEADER
                self._data_buf = bytearray()
                self._calc_checksum = b
                self._current = Packet()
            return

        if st == self.State.HEADER:
            self._calc_checksum += b
            cmd_nibble = b & 0xF0
            length_nibble = b & 0x07
            is_response = bool(b & 0x08)

            try:
                self._current.command = DeviceCommand(cmd_nibble)
            except ValueError:
                self._on_bad("Unknown command nibble 0x{:02X}".format(cmd_nibble))
                self._state = self.State.SYNC
                return

            self._current.is_response = is_response

            # PacketLength command
            if self._current.command == DeviceCommand.PacketLength:
                self._state = self.State.LONG_HI
                return

            if length_nibble <= 5:
                if length_nibble == 0:
                    # Zero-length response
                    if is_response:
                        self._current.data = b""
                        self._emit_response()
                    self._state = self.State.SYNC
                    return

                actual_len = length_nibble
                if self.uses_checksum:
                    actual_len -= 2
                if actual_len < 0:
                    self._on_bad("Negative data length after checksum adjustment")
                    self._state = self.State.SYNC
                    return

                self._data_expected = actual_len
                self._state = self.State.DATA
                return

            if length_nibble == 6:
                self._state = self.State.LENGTH
                return

            # length_nibble == 7: predetermined length packet
            if self.uses_checksum and self._predetermined_length >= 2:
                self._data_expected = self._predetermined_length - 2
            else:
                self._data_expected = self._predetermined_length
            self._state = self.State.DATA
            return

        if st == self.State.LENGTH:
            self._calc_checksum += b
            actual_len = b
            if self.uses_checksum:
                actual_len -= 2
            if actual_len <= 0:
                self._state = self.State.SYNC
                return
            self._data_expected = actual_len
            self._state = self.State.DATA
            return

        if st == self.State.DATA:
            self._data_buf.append(b)
            self._calc_checksum += b
            if len(self._data_buf) >= self._data_expected:
                self._current.data = bytes(self._data_buf)
                if self._current.is_response:
                    self._emit_response()
                    self._state = self.State.CHKSUM1 if self.uses_checksum else self.State.SYNC
                    # For responses, the SDK doesn't check checksum - goes straight to SYNC
                    # Actually it does go to checksum if usesChecksum, but for direct
                    # commands usesChecksum is false. Let's follow the actual logic:
                    if not self.uses_checksum:
                        self._state = self.State.SYNC
                    else:
                        self._state = self.State.CHKSUM1
                elif not self.uses_checksum:
                    self._emit_data()
                    self._state = self.State.SYNC
                else:
                    self._state = self.State.CHKSUM1
            return

        if st == self.State.CHKSUM1:
            self._recv_checksum = b << 8
            self._state = self.State.CHKSUM2
            return

        if st == self.State.CHKSUM2:
            self._recv_checksum |= b
            calc = self._calc_checksum & 0xFFFF
            if calc == self._recv_checksum:
                # Valid checksum - update predetermined length if this was a PacketLength
                if self._pending_length > 0:
                    self._predetermined_length = self._pending_length
                    self._pending_length = 0
                else:
                    self._emit_data()
            else:
                self._on_bad(f"Checksum mismatch: calc=0x{calc:04X} recv=0x{self._recv_checksum:04X}")
            self._state = self.State.SYNC
            return

        if st == self.State.LONG_HI:
            self._calc_checksum += b
            self._pending_length = b << 8
            self._state = self.State.LONG_LO
            return

        if st == self.State.LONG_LO:
            self._calc_checksum += b
            self._pending_length |= b
            if self.uses_checksum:
                self._state = self.State.CHKSUM1
            else:
                self._predetermined_length = self._pending_length
                self._pending_length = 0
                self._state = self.State.SYNC
            return

    def _emit_response(self):
        """Deliver a response packet (command reply)."""
        self.on_packet(Packet(
            command=self._current.command,
            data=bytes(self._data_buf) if self._data_buf else self._current.data,
            is_response=True
        ))

    def _emit_data(self):
        """Deliver a data packet (streaming or async)."""
        self.on_packet(Packet(
            command=self._current.command,
            data=bytes(self._data_buf) if self._data_buf else self._current.data,
            is_response=False
        ))

    def _on_bad(self, msg: str):
        self.on_bad_packet(msg)
        self._state = self.State.SYNC


# ---------------------------------------------------------------------------
# BioPotential Bit Extraction (mirrors ExtractBioPotentialValueFromByteArray)
# ---------------------------------------------------------------------------
def extract_biopotential_value(source: bytes, byte_pos: int,
                                start_bit: int, bit_length: int) -> int:
    """
    Extract a sign-extended biopotential sample from a bit-packed byte array.

    Mirrors the C# ExtractBioPotentialValueFromByteArray exactly.

    Args:
        source: Raw packet data bytes
        byte_pos: Starting byte position
        start_bit: Starting bit offset within that byte (0 or 4)
        bit_length: Resolution in bits (12, 16, or 24)

    Returns:
        Sign-extended integer value
    """
    if start_bit not in (0, 4):
        raise ValueError(f"start_bit must be 0 or 4, got {start_bit}")
    if bit_length not in (12, 16, 24):
        raise ValueError(f"bit_length must be 12/16/24, got {bit_length}")
    if byte_pos >= len(source):
        raise IndexError(f"byte_pos {byte_pos} out of range (len={len(source)})")

    is_nibble = (start_bit == 4)
    mask = 0x0F if is_nibble else 0xFF

    if bit_length == 12:
        raw = ((source[byte_pos] & mask) << (4 + start_bit)) | \
              (source[byte_pos + 1] >> (4 - start_bit))
    elif bit_length == 16:
        raw = ((source[byte_pos] & mask) << (8 + start_bit)) | \
              (source[byte_pos + 1] << start_bit)
        if is_nibble:
            raw |= (source[byte_pos + 2] >> start_bit)
    else:  # 24
        raw = ((source[byte_pos] & mask) << (16 + start_bit)) | \
              (source[byte_pos + 1] << (8 + start_bit)) | \
              (source[byte_pos + 2] << start_bit)
        if is_nibble:
            raw |= (source[byte_pos + 3] >> start_bit)

    # Sign extension
    shift = 32 - bit_length
    raw = (raw << shift) & 0xFFFFFFFF
    # Arithmetic right shift (Python handles this natively for signed ints)
    if raw & 0x80000000:
        raw = raw - 0x100000000
    raw >>= shift
    return raw


# ---------------------------------------------------------------------------
# Main BioRadio Class
# ---------------------------------------------------------------------------
class BioRadio:
    """
    Pure Python interface to the GLNeuroTech BioRadio.

    Communicates via a single bidirectional serial port using pyserial.
    Supports the full device protocol: connect, configure, acquire, parse data.

    The BioRadio SDK uses a SINGLE bidirectional stream internally. On
    Windows, the BT driver exposes two COM ports (e.g. COM9 and COM10),
    but only ONE of them is bidirectional — typically the lower-numbered
    one (COM9). The other port (COM10) will timeout on writes.

    Cross-platform:
        - Windows: port="COM9"  (the bidirectional COM port)
        - macOS:   port="/dev/cu.BioRadioAYA"
                   IMPORTANT: use /dev/cu.* NOT /dev/tty.* on macOS!
                   tty.* waits for carrier detect and will hang on BT serial.
        - Auto:    port=None → auto-scan and probe to find working port.

    Args:
        port:     Serial port for bidirectional communication.
                  If None, connect() will auto-detect via scanning + probing.
        baud:     Baud rate (default 460800)
    """

    def __init__(self, port: Optional[str] = None,
                 baud: int = BAUD_RATE,
                 # Legacy dual-port support (deprecated, use `port` instead)
                 port_in: Optional[str] = None,
                 port_out: Optional[str] = None):
        # Handle legacy dual-port arguments for backwards compatibility.
        # If someone passes port_in/port_out, use port_in as the primary port
        # (since that's the one that proved to work in testing).
        if port is None and port_in is not None:
            port = port_in
            if port_out is not None and port_out != port_in:
                logger.warning(
                    f"Dual-port mode is deprecated. The BioRadio uses a single "
                    f"bidirectional port. Using port_in={port_in} as the primary "
                    f"port. (port_out={port_out} will be ignored)"
                )

        self.port_name: Optional[str] = port
        self.baud = baud

        # Keep legacy attributes for any code that references them
        self.port_in_name = port
        self.port_out_name = port

        self._ser: Optional[serial.Serial] = None   # single bidirectional port
        # Legacy aliases (both point to self._ser)
        self._ser_in: Optional[serial.Serial] = None
        self._ser_out: Optional[serial.Serial] = None

        self.config: Optional[DeviceConfig] = None
        self.battery: BatteryInfo = BatteryInfo()
        self.firmware_version: str = ""
        self.hardware_version: str = ""
        self.device_name: str = ""

        self._is_connected = False
        self._is_acquiring = False
        self._is_locked = False

        # Packet parser
        self._response_event = threading.Event()
        self._last_response: Optional[Packet] = None
        self._response_lock = threading.Lock()

        # Data streaming
        self._data_queue: deque = deque(maxlen=1000)
        self._data_callbacks: List[Callable[[DataSample], None]] = []
        self._listener_thread: Optional[threading.Thread] = None
        self._stop_event = threading.Event()
        self._packet_count: int = 0
        self._first_packet_id: Optional[int] = None
        self._last_packet_count: int = 0
        self._dropped_packets: int = 0
        self._total_packets: int = 0

        # Watchdog
        self._watchdog_timer: Optional[threading.Timer] = None
        self._watchdog_enabled = False

        # Packet parser (for incoming data stream with checksums)
        self._parser = PacketParser(
            on_packet=self._on_packet_received,
            on_bad_packet=lambda msg: logger.debug(f"Bad packet: {msg}"),
            uses_checksum=True
        )

        # Parser for command responses (no checksum on sent commands)
        self._cmd_parser = PacketParser(
            on_packet=self._on_response_received,
            on_bad_packet=lambda msg: logger.debug(f"Bad cmd response: {msg}"),
            uses_checksum=False
        )

    # ------------------------------------------------------------------
    # Properties
    # ------------------------------------------------------------------
    @property
    def is_connected(self) -> bool:
        return self._is_connected

    @property
    def is_acquiring(self) -> bool:
        return self._is_acquiring

    @property
    def dropped_packets(self) -> int:
        return self._dropped_packets

    # ------------------------------------------------------------------
    # Connection
    # ------------------------------------------------------------------
    def connect(self):
        """
        Open the serial port and initialize the device.

        If no port was specified in the constructor, this will auto-scan
        all serial ports and probe each one to find the BioRadio.
        """
        if self._is_connected:
            logger.info("Already connected")
            return

        # Auto-detect port if none specified
        if self.port_name is None:
            logger.info("No port specified — auto-detecting BioRadio...")
            detected = find_bioradio_port(verbose=True)
            if detected is None:
                raise ConnectionError(
                    "Could not auto-detect BioRadio. Make sure the device is "
                    "powered on and paired via Bluetooth. Use BioRadio(port='COMx') "
                    "to specify the port manually."
                )
            self.port_name = detected
            self.port_in_name = detected
            self.port_out_name = detected

        logger.info(f"Connecting to BioRadio on {self.port_name}")

        # On macOS, Bluetooth serial needs slightly longer timeouts and
        # we should disable RTS/DTR toggling which can reset BT devices.
        read_timeout = 1.0 if IS_MACOS else 0.5
        write_timeout = 1.0 if IS_MACOS else 0.5

        try:
            self._ser = serial.Serial(
                port=self.port_name,
                baudrate=self.baud,
                timeout=read_timeout,
                write_timeout=write_timeout,
                rtscts=False,
                dsrdtr=False,
            )
            # On macOS, don't toggle DTR/RTS as it can disrupt BT connection
            if IS_MACOS:
                self._ser.dtr = False
                self._ser.rts = False
        except serial.SerialException as e:
            raise ConnectionError(f"Cannot open port {self.port_name}: {e}")

        # Legacy aliases — both point to the single bidirectional port
        self._ser_in = self._ser
        self._ser_out = self._ser

        # The .NET SDK does a 250ms sleep after opening the Bluetooth connection.
        # This gives the BT link time to stabilize before we send commands.
        # On macOS BT serial, we use a longer delay since the link is slower
        # to stabilize (empirically, 500ms works better than 250ms).
        time.sleep(0.5 if IS_MACOS else 0.25)

        # Drain any stale data in the buffer
        try:
            if self._ser.in_waiting:
                stale = self._ser.read(self._ser.in_waiting)
                logger.debug(f"Drained {len(stale)} stale bytes")
        except Exception:
            pass  # in_waiting may not be supported on all platforms

        # Get firmware version
        self._get_firmware_version()

        # Start listener thread
        self._start_listener()

        # Get device ID
        self._get_device_id()

        self._is_connected = True
        logger.info(f"Connected to BioRadio '{self.device_name}' "
                     f"(FW: {self.firmware_version}, HW: {self.hardware_version})")

    def disconnect(self):
        """Stop acquisition if active, close serial port."""
        if self._is_acquiring:
            self.stop_acquisition()

        self._stop_listener()

        if self._ser:
            self._ser.close()

        self._ser = None
        self._ser_in = None
        self._ser_out = None
        self._is_connected = False
        logger.info("Disconnected")

    # ------------------------------------------------------------------
    # Device Info Commands
    # ------------------------------------------------------------------
    def _get_firmware_version(self):
        """GetGlobal 0x00 -> firmware and hardware version."""
        max_attempts = 5 if IS_MACOS else 3
        for attempt in range(max_attempts):
            try:
                logger.debug(f"GetFirmwareVersion attempt {attempt + 1}/{max_attempts}")
                resp = self._send_command(DeviceCommand.GetGlobal, bytes([0x00]))
                if resp and resp.is_response and len(resp.data) >= 6:
                    self.firmware_version = f"{resp.data[2]}.{resp.data[3]:02d}"
                    self.hardware_version = f"{resp.data[4]}.{resp.data[5]:02d}"
                    return
                else:
                    logger.debug(f"  Got response but unexpected: cmd={resp.command if resp else None} "
                                 f"len={len(resp.data) if resp else 0} "
                                 f"is_resp={resp.is_response if resp else None} "
                                 f"data={resp.data.hex(' ') if resp and resp.data else 'empty'}")
            except TimeoutError as e:
                logger.debug(f"  Timeout on attempt {attempt + 1}: {e}")
                time.sleep(0.2 if IS_MACOS else 0.05)
        raise ConnectionError(f"Failed to get firmware version after {max_attempts} attempts")

    def _get_device_id(self):
        """GetGlobal 0x01 -> 4-char device name."""
        for attempt in range(3):
            try:
                resp = self._send_command(DeviceCommand.GetGlobal, bytes([0x01]))
                if resp and resp.data:
                    name_bytes = resp.data[1:min(5, len(resp.data))]
                    self.device_name = name_bytes.decode("ascii", errors="replace").strip('\x00')
                    return
            except TimeoutError:
                time.sleep(0.01)
        raise ConnectionError("Failed to get device ID after 3 attempts")

    # ------------------------------------------------------------------
    # Configuration
    # ------------------------------------------------------------------
    def get_configuration(self) -> DeviceConfig:
        """
        Read the full device configuration: global settings + all 20 channels.

        Returns:
            DeviceConfig with all channel configurations populated.
        """
        logger.info("Reading device configuration...")

        # Get global DAQ parameters
        resp = self._send_command_retry(DeviceCommand.GetParam,
                                         bytes([ParamId.CommonDAQ]))
        if not resp or len(resp.data) < 19:
            raise RuntimeError(f"Invalid global config response: {resp}")

        # Skip param ID byte (first byte of data is the echo of 0x01)
        self.config = DeviceConfig.from_bytes(resp.data[1:])

        # Get each channel config (1-20)
        self.config.channels = []
        for ch_idx in range(1, 21):
            try:
                ch_resp = self._send_command_retry(
                    DeviceCommand.GetParam,
                    bytes([ParamId.ChannelConfig, ch_idx])
                )
                if ch_resp and len(ch_resp.data) > 1:
                    ch_cfg = ChannelConfig.from_bytes(ch_resp.data[1:])
                    self.config.channels.append(ch_cfg)
                    logger.debug(f"  {ch_cfg}")
            except Exception as e:
                logger.warning(f"  Ch {ch_idx}: failed ({e})")
                break

        logger.info(f"Configuration: {self.config}")
        return self.config

    def get_battery_info(self) -> BatteryInfo:
        """Query battery voltage."""
        if not self._is_acquiring:
            resp = self._send_command_retry(DeviceCommand.GetParam,
                                             bytes([ParamId.BatteryStatus]))
            if resp and len(resp.data) >= 7:
                raw_voltage = (resp.data[5] << 8) | resp.data[6]
                self.battery.voltage = raw_voltage * 0.00244
        return self.battery

    # ------------------------------------------------------------------
    # Configuration Writing
    # ------------------------------------------------------------------
    def set_sample_rate(self, rate: int) -> None:
        """
        Change the BioRadio sampling rate.

        The device must be unlocked first, and not currently acquiring.
        After writing, the config is re-read from the device to confirm.

        Args:
            rate: Desired sample rate in Hz.
                  Valid values: 250, 500, 1000, 2000, 4000, 8000, 16000

        Raises:
            ValueError: If rate is not a valid sample rate.
            RuntimeError: If the device is currently acquiring data.
        """
        if rate not in VALID_SAMPLE_RATES:
            raise ValueError(
                f"Invalid sample rate {rate}Hz. "
                f"Valid rates: {VALID_SAMPLE_RATES}"
            )
        if self._is_acquiring:
            raise RuntimeError(
                "Cannot change sample rate while acquiring. "
                "Call stop_acquisition() first."
            )

        # Make sure we have the current config
        if self.config is None:
            self.get_configuration()

        old_rate = self.config.sample_rate
        if old_rate == rate:
            logger.info(f"Sample rate already {rate}Hz — no change needed")
            return

        logger.info(f"Changing sample rate: {old_rate}Hz -> {rate}Hz")

        # Unlock, write, re-lock
        was_locked = self._is_locked
        if self._is_locked:
            self.unlock_device()

        # Update the local config object
        self.config.sample_rate = rate

        # Serialize and send: [ParamId.CommonDAQ] + config bytes
        config_data = bytes([ParamId.CommonDAQ]) + self.config.to_bytes()
        self._send_command_retry(DeviceCommand.SetParam, config_data)

        logger.info(f"Wrote global config with rate={rate}Hz "
                     f"(freq_mult={self.config.frequency_multiplier})")

        # Re-lock if it was locked before
        if was_locked:
            self.lock_device()

        # Re-read configuration to confirm the change took effect
        self.get_configuration()
        actual = self.config.sample_rate
        if actual != rate:
            logger.warning(
                f"Sample rate verification: expected {rate}Hz, "
                f"device reports {actual}Hz"
            )
        else:
            logger.info(f"Sample rate confirmed: {actual}Hz")

    def set_channel_config(self, channel: ChannelConfig) -> None:
        """
        Write a single channel's configuration to the device.

        Args:
            channel: ChannelConfig object with the desired settings.

        Raises:
            RuntimeError: If the device is currently acquiring data.
        """
        if self._is_acquiring:
            raise RuntimeError(
                "Cannot change channel config while acquiring. "
                "Call stop_acquisition() first."
            )

        logger.info(f"Writing channel config: {channel}")

        was_locked = self._is_locked
        if self._is_locked:
            self.unlock_device()

        # Serialize: [ParamId.ChannelConfig] + channel bytes
        ch_data = bytes([ParamId.ChannelConfig]) + channel.to_bytes()
        self._send_command_retry(DeviceCommand.SetParam, ch_data)

        if was_locked:
            self.lock_device()

        logger.info(f"Channel {channel.channel_index} config written")

    def set_global_config(self, config: "DeviceConfig") -> None:
        """
        Write the full global DAQ configuration to the device.

        This writes the global parameters (name, flags, frequency multiplier)
        but NOT individual channel configs. Use set_channel_config() for those.

        Args:
            config: DeviceConfig object with the desired settings.

        Raises:
            RuntimeError: If the device is currently acquiring data.
        """
        if self._is_acquiring:
            raise RuntimeError(
                "Cannot change config while acquiring. "
                "Call stop_acquisition() first."
            )

        logger.info(f"Writing global config: {config}")

        was_locked = self._is_locked
        if self._is_locked:
            self.unlock_device()

        config_data = bytes([ParamId.CommonDAQ]) + config.to_bytes()
        self._send_command_retry(DeviceCommand.SetParam, config_data)

        if was_locked:
            self.lock_device()

        # Update local copy
        self.config = config
        logger.info("Global config written")

    # ------------------------------------------------------------------
    # Device Lock / Unlock
    # ------------------------------------------------------------------
    def unlock_device(self) -> bool:
        """Unlock the device for configuration changes."""
        data = bytes([ParamId.UnlockDevice]) + UNLOCK_KEY
        try:
            self._send_command_retry(DeviceCommand.SetParam, data)
            self._is_locked = False
            logger.info("Device unlocked")
            return True
        except Exception as e:
            logger.error(f"Unlock failed: {e}")
            return False

    def lock_device(self) -> bool:
        """Lock the device."""
        try:
            self._send_command_retry(DeviceCommand.SetParam,
                                      bytes([ParamId.LockDevice]))
            self._is_locked = True
            logger.info("Device locked")
            return True
        except Exception as e:
            logger.error(f"Lock failed: {e}")
            return False

    # ------------------------------------------------------------------
    # Data Acquisition
    # ------------------------------------------------------------------
    def start_acquisition(self):
        """
        Lock device and begin streaming data.

        The device sends ReceiveData (0xB0) packets at ~125 packets/sec
        (8ms per packet).
        """
        if self._is_acquiring:
            logger.warning("Already acquiring")
            return

        if self.config is None:
            self.get_configuration()

        # Lock device first
        if not self._is_locked:
            self.lock_device()

        # Reset counters
        self._first_packet_id = None
        self._last_packet_count = 0
        self._dropped_packets = 0
        self._total_packets = 0
        self._data_queue.clear()

        # Switch parser to checksum mode for streaming data
        self._parser.uses_checksum = True

        # Send start command
        self._send_command_retry(DeviceCommand.SetState,
                                  bytes([AcquisitionState.Start]))
        self._is_acquiring = True

        # Enable watchdog
        self._enable_watchdog()

        logger.info(f"Acquisition started at {self.config.sample_rate}Hz")

    def stop_acquisition(self):
        """Stop data streaming."""
        if not self._is_acquiring:
            return

        self._disable_watchdog()
        self._is_acquiring = False

        try:
            self._send_command_retry(DeviceCommand.SetState,
                                      bytes([AcquisitionState.Stop]))
        except Exception as e:
            logger.warning(f"Stop command failed: {e}")

        logger.info(f"Acquisition stopped. Dropped packets: {self._dropped_packets}")

    def read_data(self, timeout: float = 1.0) -> Optional[DataSample]:
        """
        Read the next parsed data sample from the queue.

        Args:
            timeout: Max seconds to wait for data.

        Returns:
            DataSample or None if timeout.
        """
        deadline = time.monotonic() + timeout
        while time.monotonic() < deadline:
            try:
                return self._data_queue.popleft()
            except IndexError:
                time.sleep(0.001)
        return None

    def read_all_data(self) -> List[DataSample]:
        """Read all currently queued data samples."""
        samples = []
        while self._data_queue:
            try:
                samples.append(self._data_queue.popleft())
            except IndexError:
                break
        return samples

    def on_data(self, callback: Callable[[DataSample], None]):
        """Register a callback for each received data sample."""
        self._data_callbacks.append(callback)

    # ------------------------------------------------------------------
    # Low-Level Command Interface
    # ------------------------------------------------------------------
    def _send_command(self, command: DeviceCommand, data: bytes = b"",
                      timeout_ms: int = DEFAULT_TIMEOUT_MS) -> Packet:
        """
        Send a command packet and wait for the response.

        The SDK temporarily disables checksum for outgoing commands
        (SendDirectCommand sets usesChecksum=false before sending).
        """
        if not self._ser or not self._ser.is_open:
            raise ConnectionError("Serial port not open")

        # Build packet without checksum (matches SDK SendDirectCommand)
        pkt = build_packet(command, data, use_checksum=False)

        logger.debug(f"TX: {pkt.hex(' ')}")

        # Clear previous response
        self._response_event.clear()
        self._last_response = None

        # Send on the single bidirectional port
        self._ser.write(pkt)
        self._ser.flush()

        # Wait for response (we need to read it ourselves if listener isn't running)
        if self._listener_thread is None or not self._listener_thread.is_alive():
            # Blocking read for response
            return self._read_response_blocking(timeout_ms / 1000.0)

        # Wait on the event from listener thread
        if not self._response_event.wait(timeout=timeout_ms / 1000.0):
            raise TimeoutError(f"No response to {command.name} within {timeout_ms}ms")

        with self._response_lock:
            return self._last_response

    def _send_command_retry(self, command: DeviceCommand, data: bytes = b"",
                             max_retries: int = MAX_RETRIES,
                             timeout_ms: int = COMMAND_TIMEOUT_MS) -> Packet:
        """Send command with retries on failure/NACK."""
        last_err = None
        for attempt in range(max_retries):
            try:
                resp = self._send_command(command, data, timeout_ms)
                if resp and resp.command == DeviceCommand.NegativeAck:
                    raise RuntimeError("Device NACK'd command")
                return resp
            except Exception as e:
                last_err = e
                time.sleep(0.05)
        raise last_err

    def _read_response_blocking(self, timeout: float) -> Packet:
        """
        Read a response directly (used before listener thread starts).

        The BioRadio SDK uses a single bidirectional stream — we read
        from the SAME port we wrote to. On macOS BT serial, `in_waiting`
        is unreliable, so we use blocking `read()` with the port's timeout.
        """
        deadline = time.monotonic() + timeout
        buf = bytearray()

        # Single bidirectional port — read from self._ser
        read_port = self._ser

        while time.monotonic() < deadline:
            remaining = deadline - time.monotonic()
            if remaining <= 0:
                break

            # Set a short blocking timeout for read()
            old_timeout = read_port.timeout
            read_port.timeout = min(0.5, remaining)
            try:
                # Try to read one byte (blocks until byte arrives or timeout)
                byte = read_port.read(1)
                if byte:
                    buf.extend(byte)
                    # Got a byte — greedily read any more available data
                    time.sleep(0.01)  # tiny delay to let more bytes arrive
                    try:
                        waiting = read_port.in_waiting
                        if waiting > 0:
                            more = read_port.read(waiting)
                            if more:
                                buf.extend(more)
                    except OSError:
                        pass  # in_waiting not supported
                    logger.debug(f"RX ({len(buf)} bytes total): {buf.hex(' ')}")
            finally:
                read_port.timeout = old_timeout

            # Try to parse a response from accumulated bytes
            if buf:
                pkt = self._try_parse_response(buf)
                if pkt:
                    logger.debug(f"Parsed response: cmd={pkt.command.name} "
                                 f"data={pkt.data.hex(' ') if pkt.data else 'empty'}")
                    return pkt

        raise TimeoutError(
            f"No response within {timeout}s "
            f"(got {len(buf)} bytes: {buf.hex(' ') if buf else 'nothing'})"
        )

    def _try_parse_response(self, buf: bytearray) -> Optional[Packet]:
        """Try to parse a single response packet from a byte buffer."""
        # Find sync byte
        while buf and buf[0] != SYNC_BYTE:
            buf.pop(0)

        if len(buf) < 2:
            return None

        sync = buf[0]
        header = buf[1]
        cmd_nibble = header & 0xF0
        length_nibble = header & 0x07
        is_response = bool(header & 0x08)

        if length_nibble <= 5:
            total_needed = 2 + length_nibble  # sync + header + data
            if len(buf) < total_needed:
                return None
            data = bytes(buf[2:2 + length_nibble])
            del buf[:total_needed]
            try:
                cmd = DeviceCommand(cmd_nibble)
            except ValueError:
                return None
            return Packet(command=cmd, data=data, is_response=is_response)

        elif length_nibble == 6:
            if len(buf) < 3:
                return None
            data_len = buf[2]
            total_needed = 3 + data_len
            if len(buf) < total_needed:
                return None
            data = bytes(buf[3:3 + data_len])
            del buf[:total_needed]
            try:
                cmd = DeviceCommand(cmd_nibble)
            except ValueError:
                return None
            return Packet(command=cmd, data=data, is_response=is_response)

        return None

    # ------------------------------------------------------------------
    # Listener Thread
    # ------------------------------------------------------------------
    def _start_listener(self):
        """Start the background thread that reads incoming packets."""
        if self._listener_thread and self._listener_thread.is_alive():
            return

        self._stop_event.clear()
        self._listener_thread = threading.Thread(
            target=self._listener_loop,
            name="BioRadio-Listener",
            daemon=True
        )
        self._listener_thread.start()

    def _stop_listener(self):
        """Stop the listener thread."""
        self._stop_event.set()
        if self._listener_thread and self._listener_thread.is_alive():
            self._listener_thread.join(timeout=2.0)
        self._listener_thread = None

    def _listener_loop(self):
        """Background loop: read serial data and feed to parser.

        Before acquisition, command responses come WITHOUT checksums.
        During acquisition, data packets come WITH checksums (and the
        SDK toggled usesChecksum accordingly). We use _cmd_parser
        (no checksum) when not acquiring, and _parser (with checksum)
        during acquisition.
        """
        logger.debug("Listener thread started")
        while not self._stop_event.is_set():
            try:
                # Read from the single bidirectional port
                if self._ser and self._ser.is_open:
                    waiting = self._ser.in_waiting
                    if waiting > 0:
                        chunk = self._ser.read(min(waiting, 65536))
                        if chunk:
                            # Use the appropriate parser based on mode:
                            # - _cmd_parser (no checksum) for command responses
                            # - _parser (with checksum) for streaming data
                            if self._is_acquiring:
                                self._parser.feed(chunk)
                            else:
                                self._cmd_parser.feed(chunk)

            except serial.SerialException as e:
                logger.error(f"Serial error in listener: {e}")
                break
            except Exception as e:
                logger.error(f"Listener error: {e}")

            time.sleep(0.001)  # ~1ms poll interval

        logger.debug("Listener thread stopped")

    # ------------------------------------------------------------------
    # Packet Dispatch
    # ------------------------------------------------------------------
    def _on_packet_received(self, pkt: Packet):
        """Called by the parser for every valid incoming packet."""
        if pkt.is_response:
            self._on_response_received(pkt)
            return

        if pkt.command == DeviceCommand.ReceiveData:
            self._process_data_packet(pkt)

    def _on_response_received(self, pkt: Packet):
        """Handle a command response packet."""
        with self._response_lock:
            self._last_response = pkt
        self._response_event.set()

    # ------------------------------------------------------------------
    # Data Packet Parsing
    # ------------------------------------------------------------------
    def _process_data_packet(self, pkt: Packet):
        """
        Parse a ReceiveData (0xB0) packet into a DataSample.

        Packet layout (per the SDK):
          [2 bytes: status word] [2 bytes: packet ID]
          -- repeated 2x: --
            [MEMS: 12 bytes if enabled]
            [BioPotential: bit-packed]
            [External sensors: Aux(2 bytes) + PulseOx(5 bytes) each]
        """
        if not self.config or len(pkt.data) < 4:
            return

        # Reset watchdog
        self._reset_watchdog()

        data = pkt.data

        # Packet ID: first 2 bytes (big-endian)
        raw_packet_id = (data[0] << 8) | data[1]

        # Track packet IDs for dropped packet detection
        if self._first_packet_id is None:
            self._first_packet_id = raw_packet_id

        packet_count = (raw_packet_id - self._first_packet_id) & 0xFFFF

        # Status word: bytes 2-3
        status_bytes = data[2:4]
        event_marker = bool(status_bytes[0] & 0x80)
        status_code_val = (status_bytes[0] & 0x70) >> 4
        status_value = ((status_bytes[0] & 0x0F) << 8) | status_bytes[1]

        if status_code_val == StatusCode.BatteryVoltage:
            self.battery.voltage = status_value * 0.00244

        # Dropped packet detection
        if (packet_count != self._last_packet_count + 1
                and packet_count > 0
                and not (packet_count == 0 and self._last_packet_count == 0)):
            dropped = packet_count - self._last_packet_count - 1
            if dropped < 0:
                dropped = 0xFFFF - self._last_packet_count + packet_count
            self._dropped_packets += dropped
            logger.debug(f"Dropped {dropped} packets "
                         f"(#{self._last_packet_count} -> #{packet_count})")

        self._last_packet_count = packet_count
        self._total_packets += 1

        # Calculate data region sizes
        mems_size = 12 if self.config.mems_enabled else 0
        bp_channels = self.config.enabled_biopotential
        samples_per_packet = self.config.sample_rate // 250  # samples per sub-packet
        total_bits = sum(ch.bit_resolution for ch in bp_channels) * samples_per_packet
        bp_size = math.ceil(total_bits / 8)
        aux_channels = self.config.enabled_auxiliary
        pox_channels = self.config.enabled_pulseox
        ext_size = len(aux_channels) * 2 + len(pox_channels) * 5

        sample = DataSample(
            packet_id=packet_count,
            timestamp=time.time(),
            battery_voltage=self.battery.voltage,
            event_marker=event_marker,
        )

        # The SDK processes 2 sub-packets per data packet
        offset = 4  # skip packet ID (2) + status word (2)
        for sub in range(2):
            # MEMS (skip for now, parsed but empty in SDK)
            offset += mems_size

            # BioPotential channels
            if bp_channels and offset + bp_size <= len(data):
                byte_pos = offset
                bit_pos = 0
                for s in range(samples_per_packet):
                    for ch in bp_channels:
                        try:
                            val = extract_biopotential_value(
                                data, byte_pos, bit_pos, ch.bit_resolution
                            )
                            sample.biopotential.setdefault(ch.channel_index, []).append(val)
                        except (IndexError, ValueError) as e:
                            logger.debug(f"BP extract error ch{ch.channel_index}: {e}")

                        total_bits_consumed = bit_pos + ch.bit_resolution
                        byte_pos += total_bits_consumed // 8
                        bit_pos = total_bits_consumed % 8
            offset += bp_size

            # External sensors
            ext_offset = offset
            for ch in aux_channels:
                if ext_offset + 2 <= len(data):
                    val = (data[ext_offset] << 8) | data[ext_offset + 1]
                    sample.auxiliary[ch.channel_index] = val
                ext_offset += 2

            for ch in pox_channels:
                if ext_offset + 5 <= len(data):
                    flags = data[ext_offset]
                    ppg = (data[ext_offset + 1] << 8) | data[ext_offset + 2]
                    hr = (data[ext_offset + 3] << 1) | ((data[ext_offset + 4] & 0x80) >> 7)
                    spo2 = data[ext_offset + 4] & 0x7F
                    sample.pulseox[ch.channel_index] = {
                        "hr": hr, "spo2": spo2, "ppg": ppg, "flags": flags
                    }
                ext_offset += 5

            offset = ext_offset

        # Queue the sample
        self._data_queue.append(sample)

        # Notify callbacks
        for cb in self._data_callbacks:
            try:
                cb(sample)
            except Exception as e:
                logger.error(f"Data callback error: {e}")

    # ------------------------------------------------------------------
    # Watchdog
    # ------------------------------------------------------------------
    def _enable_watchdog(self):
        self._watchdog_enabled = True
        self._reset_watchdog()

    def _disable_watchdog(self):
        self._watchdog_enabled = False
        if self._watchdog_timer:
            self._watchdog_timer.cancel()
            self._watchdog_timer = None

    def _reset_watchdog(self):
        if not self._watchdog_enabled:
            return
        if self._watchdog_timer:
            self._watchdog_timer.cancel()
        self._watchdog_timer = threading.Timer(
            WATCHDOG_TIMEOUT_S, self._watchdog_expired
        )
        self._watchdog_timer.daemon = True
        self._watchdog_timer.start()

    def _watchdog_expired(self):
        logger.error("Watchdog expired! No data received for 5 seconds.")
        self._disable_watchdog()
        self._is_acquiring = False
        try:
            self.disconnect()
        except Exception:
            pass

    # ------------------------------------------------------------------
    # Context Manager
    # ------------------------------------------------------------------
    def __enter__(self):
        self.connect()
        return self

    def __exit__(self, *args):
        self.disconnect()

    def __repr__(self):
        status = "ACQUIRING" if self._is_acquiring else "CONNECTED" if self._is_connected else "DISCONNECTED"
        return f"BioRadio({self.port_name or 'auto'}, {status})"


# ---------------------------------------------------------------------------
# Convenience: LSL bridge (optional, if pylsl is available)
# ---------------------------------------------------------------------------
def create_lsl_outlet(config: DeviceConfig):
    """
    Create an LSL outlet for BioRadio BioPotential data.
    Requires pylsl to be installed.

    Returns:
        pylsl.StreamOutlet or None if pylsl not available.
    """
    try:
        import pylsl
    except ImportError:
        logger.warning("pylsl not installed. LSL streaming not available.")
        return None

    bp_channels = config.enabled_biopotential
    if not bp_channels:
        logger.warning("No enabled BioPotential channels for LSL.")
        return None

    info = pylsl.StreamInfo(
        name=f"BioRadio_{config.name}",
        type="EMG",
        channel_count=len(bp_channels),
        nominal_srate=config.sample_rate,
        channel_format="float32",
        source_id=f"bioradio_{config.name}"
    )

    # Add channel metadata
    chns = info.desc().append_child("channels")
    for ch in bp_channels:
        c = chns.append_child("channel")
        c.append_child_value("label", ch.name or f"Ch{ch.channel_index}")
        c.append_child_value("unit", "microvolts")
        c.append_child_value("type", "EMG")

    return pylsl.StreamOutlet(info)


# ---------------------------------------------------------------------------
# CLI entry point
# ---------------------------------------------------------------------------
def main():
    """Command-line entry point for quick testing."""
    import argparse

    parser = argparse.ArgumentParser(
        description="BioRadio Python Interface",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python bioradio.py --scan                        # Scan for serial ports
  python bioradio.py                               # Auto-detect and connect
  python bioradio.py --port COM9                   # Connect to specific port
  python bioradio.py --port /dev/cu.BioRadioAYA    # macOS (use cu.* not tty.*!)
  python bioradio.py --port COM9 --info            # Print device info only
  python bioradio.py --port COM9 --lsl             # Stream to LSL
  python bioradio.py --port COM9 --rate 500        # Set sample rate to 500Hz
  python bioradio.py --port COM9 --rate 2000 --lsl # Set rate + stream to LSL

Valid sample rates: 250, 500, 1000, 2000, 4000, 8000, 16000 Hz

Tip: run --scan first to find your BioRadio's port name.
     On macOS, ALWAYS use /dev/cu.* (not /dev/tty.*) — tty blocks on carrier detect.
     On Windows, Bluetooth creates two COM ports — only ONE works (usually the lower one).
        """
    )
    parser.add_argument("--scan", action="store_true",
                        help="Scan for available serial ports")
    parser.add_argument("--port", "-p", dest="port", default=None,
                        help="Serial port (e.g. COM9 or /dev/cu.BioRadioAYA)")
    # Legacy arguments (deprecated)
    parser.add_argument("--in", dest="port_in", default=None,
                        help=argparse.SUPPRESS)  # hidden, backwards compat
    parser.add_argument("--out", dest="port_out", default=None,
                        help=argparse.SUPPRESS)  # hidden, backwards compat
    parser.add_argument("--info", action="store_true",
                        help="Print device info and config, then exit")
    parser.add_argument("--rate", type=int, default=None,
                        choices=VALID_SAMPLE_RATES,
                        help="Set sample rate in Hz (e.g. 250, 500, 1000, 2000)")
    parser.add_argument("--lsl", action="store_true",
                        help="Stream data to LSL")
    parser.add_argument("--duration", type=float, default=0,
                        help="Acquire for N seconds (0=until Ctrl+C)")
    parser.add_argument("--verbose", "-v", action="store_true",
                        help="Enable debug logging")
    args = parser.parse_args()

    # Configure logging
    level = logging.DEBUG if args.verbose else logging.INFO
    logging.basicConfig(
        level=level,
        format="%(asctime)s [%(name)s] %(levelname)s: %(message)s",
        datefmt="%H:%M:%S"
    )

    if args.scan:
        ports = scan_for_bioradio(verbose=True)
        if ports:
            print("\n  Probing candidates to find the working port...")
            for p in ports:
                resp = probe_bioradio_port(p, timeout=2.0, verbose=True)
                if resp:
                    print(f"\n  [OK] BioRadio responded on {p}!")
                else:
                    print(f"  [--] No response on {p}")
        else:
            print("\nNo BioRadio candidates found.")
            print("Make sure the device is paired/plugged in.")
        return

    # Resolve port: explicit --port, or legacy --in, or auto-detect
    port = args.port or args.port_in
    # port=None means auto-detect (connect() will handle it)

    radio = BioRadio(port=port)

    try:
        radio.connect()
        config = radio.get_configuration()

        # Apply sample rate change if requested
        if args.rate is not None and args.rate != config.sample_rate:
            print(f"\n  Changing sample rate: {config.sample_rate}Hz -> {args.rate}Hz ...")
            radio.set_sample_rate(args.rate)
            config = radio.config  # re-read after change
            print(f"  Sample rate set to {config.sample_rate}Hz")

        print(f"\n{'='*60}")
        print(f"  Device: {radio.device_name}")
        print(f"  Firmware: {radio.firmware_version}")
        print(f"  Hardware: {radio.hardware_version}")
        print(f"  Sample Rate: {config.sample_rate} Hz")
        print(f"  Termination: {'Single-Ended' if config.is_single_ended else 'Differential'}")
        print(f"  Battery: {radio.get_battery_info().voltage:.2f}V "
              f"({radio.battery.percentage:.0f}%)")
        print(f"\n  Channels:")
        for ch in config.channels:
            if ch.type_code != ChannelTypeCode.NotConnected:
                print(f"    {ch}")
        print(f"{'='*60}\n")

        if args.info:
            return

        # Set up LSL if requested
        lsl_outlet = None
        if args.lsl:
            lsl_outlet = create_lsl_outlet(config)
            if lsl_outlet:
                print("LSL outlet created. Streaming data to LSL network.")

        # Start acquisition
        radio.start_acquisition()
        print("Acquiring data... (Ctrl+C to stop)\n")

        start_time = time.time()
        sample_count = 0

        while True:
            sample = radio.read_data(timeout=0.1)
            if sample:
                sample_count += 1

                # Push to LSL if available
                if lsl_outlet and sample.biopotential:
                    bp_chs = config.enabled_biopotential
                    for s_idx in range(len(next(iter(sample.biopotential.values())))):
                        lsl_sample = []
                        for ch in bp_chs:
                            vals = sample.biopotential.get(ch.channel_index, [])
                            lsl_sample.append(float(vals[s_idx]) if s_idx < len(vals) else 0.0)
                        lsl_outlet.push_sample(lsl_sample)

                # Print periodic status
                if sample_count % 125 == 0:  # ~every second
                    elapsed = time.time() - start_time
                    bp_vals = ""
                    if sample.biopotential:
                        first_ch = next(iter(sample.biopotential.values()))
                        bp_vals = f" BP[0]={first_ch[0] if first_ch else '?'}"
                    print(f"  t={elapsed:.1f}s | packets={sample_count} | "
                          f"dropped={radio.dropped_packets} | "
                          f"bat={sample.battery_voltage:.2f}V{bp_vals}")

            # Check duration
            if args.duration > 0 and (time.time() - start_time) >= args.duration:
                break

    except KeyboardInterrupt:
        print("\n\nStopping...")
    finally:
        radio.stop_acquisition()
        radio.disconnect()
        print(f"\nDone. Total packets: {radio._total_packets}, "
              f"Dropped: {radio.dropped_packets}")


if __name__ == "__main__":
    main()
