"""
hackathon_gui.py - BioRadio Hackathon Control Center
=====================================================

A comprehensive GUI for connecting to the BioRadio, configuring it,
visualizing incoming data in real-time, and recording to CSV.

Features:
- Direct BioRadio connection (serial) or LSL network stream
- Device configuration: sample rate, channel enable/disable, signal mode
- Real-time multi-channel visualization (BioPotential, MEMS, Aux, PulseOx)
- Data recording to CSV with metadata
- LSL output for piping data to your own control scripts
- Mock data mode for development without hardware

Usage:
    python -m src.hackathon_gui                     # Auto-detect BioRadio
    python -m src.hackathon_gui --port COM9          # Specific port
    python -m src.hackathon_gui --lsl "BioRadio"     # Connect via LSL stream
    python -m src.hackathon_gui --mock               # Mock data for testing

Author: BioRobotics Hackathon 2026
"""

import sys
import os
import time
import csv
import threading
import logging
from collections import deque
from dataclasses import dataclass, field
from typing import Optional, Dict, List, Callable
from datetime import datetime

import numpy as np

# GUI imports
try:
    from PyQt6.QtWidgets import (
        QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
        QPushButton, QComboBox, QLabel, QSpinBox, QStatusBar,
        QGroupBox, QGridLayout, QCheckBox, QFileDialog, QMessageBox,
        QDoubleSpinBox, QLineEdit, QTabWidget, QSplitter, QFrame,
        QTextEdit, QScrollArea
    )
    from PyQt6.QtCore import QTimer, Qt, pyqtSignal, QObject
    from PyQt6.QtGui import QFont, QColor, QTextCursor
    import pyqtgraph as pg
    HAS_GUI = True
except ImportError:
    HAS_GUI = False

# BioRadio imports
try:
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from bioradio import (
        BioRadio, scan_for_bioradio, find_bioradio_port,
        DeviceConfig, ChannelConfig, ChannelTypeCode,
        BioPotentialMode, CouplingType, VALID_SAMPLE_RATES,
        create_lsl_outlet, DataSample,
    )
    HAS_BIORADIO = True
except ImportError:
    HAS_BIORADIO = False

# LSL imports
try:
    import pylsl
    HAS_LSL = True
except ImportError:
    HAS_LSL = False

logger = logging.getLogger("hackathon_gui")

# =====================================================================
# Signal-Type Profiles (display scale, mock-data, & hardware config)
# =====================================================================
# Each entry controls:
#   label          – human-readable name shown in the per-channel combo
#   unit           – Y-axis label (µV for biopotential, µS for skin conductance)
#   y_range        – default Y-axis amplitude (±y_range) when auto-scale is off
#   bit_resolution – ADC resolution to program on the BioRadio (12/16/24)
#   coupling       – AC or DC coupling (maps to CouplingType enum)
#   operation_mode – BioPotentialMode (Normal / GSR / TestSignal / RIP)
SIGNAL_PROFILES = {
    "emg": {
        "label": "EMG", "unit": "\u00b5V", "y_range": 5000,
        "bit_resolution": 16, "coupling": "AC", "operation_mode": "Normal",
    },
    "eog": {
        "label": "EOG", "unit": "\u00b5V", "y_range": 3000,
        "bit_resolution": 16, "coupling": "DC", "operation_mode": "Normal",
    },
    "eeg": {
        "label": "EEG", "unit": "\u00b5V", "y_range": 200,
        "bit_resolution": 24, "coupling": "AC", "operation_mode": "Normal",
    },
    "gsr": {
        "label": "GSR", "unit": "\u00b5S", "y_range": 25,
        "bit_resolution": 12, "coupling": "DC", "operation_mode": "GSR",
    },
}
SIGNAL_TYPE_KEYS = list(SIGNAL_PROFILES.keys())  # stable order


# =====================================================================
# Data Buffers
# =====================================================================

class RingBuffer:
    """Thread-safe ring buffer for real-time signal data."""

    def __init__(self, n_channels: int, max_samples: int = 50000):
        self.n_channels = n_channels
        self.max_samples = max_samples
        self.data = np.zeros((max_samples, n_channels))
        self.timestamps = np.zeros(max_samples)
        self.write_pos = 0
        self.count = 0
        self._lock = threading.Lock()

    def add_samples(self, samples: np.ndarray, timestamps: np.ndarray):
        """Add samples. samples shape: (n_samples, n_channels)."""
        with self._lock:
            n = len(samples)
            if n == 0:
                return

            # Ensure correct shape
            if samples.ndim == 1:
                samples = samples.reshape(-1, 1)

            n_ch = min(samples.shape[1], self.n_channels)

            for i in range(n):
                pos = self.write_pos % self.max_samples
                self.data[pos, :n_ch] = samples[i, :n_ch]
                self.timestamps[pos] = timestamps[i] if i < len(timestamps) else 0
                self.write_pos += 1

            self.count = min(self.count + n, self.max_samples)

    def get_data(self, n_samples: int = None) -> tuple:
        """Get the most recent n_samples."""
        with self._lock:
            if self.count == 0:
                return np.zeros((0, self.n_channels)), np.zeros(0)

            n = min(n_samples or self.count, self.count)
            end = self.write_pos % self.max_samples
            start = (self.write_pos - n) % self.max_samples

            if start < end:
                data = self.data[start:end].copy()
                ts = self.timestamps[start:end].copy()
            else:
                data = np.vstack([self.data[start:], self.data[:end]]).copy()
                ts = np.concatenate([self.timestamps[start:], self.timestamps[:end]]).copy()

            return data, ts

    def clear(self):
        with self._lock:
            self.write_pos = 0
            self.count = 0


class RecordingBuffer:
    """Thread-safe buffer for recording data to file."""

    def __init__(self):
        self.data: List[np.ndarray] = []
        self.timestamps: List[float] = []
        self._lock = threading.Lock()

    def add_samples(self, samples: np.ndarray, timestamps: np.ndarray):
        with self._lock:
            for i in range(len(samples)):
                self.data.append(samples[i] if samples.ndim > 1 else samples)
                self.timestamps.append(timestamps[i] if i < len(timestamps) else 0)

    def get_all(self) -> tuple:
        with self._lock:
            if not self.data:
                return np.array([]), np.array([])
            return np.array(self.data), np.array(self.timestamps)

    def clear(self):
        with self._lock:
            self.data.clear()
            self.timestamps.clear()

    def __len__(self):
        return len(self.data)


# =====================================================================
# Data Source Abstraction
# =====================================================================

class DataSource:
    """Abstract base for data sources."""

    def __init__(self):
        self.running = False
        self.sample_rate = 250
        self.channel_names: List[str] = []
        self.n_channels = 0
        self.callbacks: List[Callable] = []
        self.error: Optional[str] = None

    def connect(self):
        raise NotImplementedError

    def start(self):
        raise NotImplementedError

    def stop(self):
        self.running = False

    def disconnect(self):
        self.stop()

    def on_data(self, callback: Callable):
        self.callbacks.append(callback)

    def _emit_data(self, samples: np.ndarray, timestamps: np.ndarray):
        for cb in self.callbacks:
            try:
                cb(samples, timestamps)
            except Exception as e:
                logger.error(f"Callback error: {e}")


class BioRadioSource(DataSource):
    """Direct BioRadio connection via serial port."""

    def __init__(self, port: Optional[str] = None):
        super().__init__()
        self.port = port
        self.radio: Optional[BioRadio] = None
        self.config: Optional[DeviceConfig] = None
        self._thread: Optional[threading.Thread] = None
        self.lsl_outlet = None

    def connect(self):
        self.radio = BioRadio(port=self.port)
        self.radio.connect()
        self.config = self.radio.get_configuration()
        self.sample_rate = self.config.sample_rate

        # Build channel names from config
        self.channel_names = []
        for ch in self.config.enabled_biopotential:
            name = ch.name.strip() if ch.name.strip() else f"BP{ch.channel_index}"
            self.channel_names.append(name)
        self.n_channels = len(self.channel_names)

    def start(self):
        if not self.radio or not self.radio.is_connected:
            raise RuntimeError("Not connected")

        self.radio.start_acquisition()
        self.running = True

        self._thread = threading.Thread(target=self._read_loop, daemon=True)
        self._thread.start()

    def _read_loop(self):
        while self.running:
            try:
                sample = self.radio.read_data(timeout=0.1)
                if sample and sample.biopotential:
                    bp_channels = self.config.enabled_biopotential
                    num_sub = max(len(v) for v in sample.biopotential.values()) if sample.biopotential else 0

                    if num_sub > 0:
                        samples = np.zeros((num_sub, self.n_channels))
                        for ch_idx, ch in enumerate(bp_channels):
                            vals = sample.biopotential.get(ch.channel_index, [])
                            for s in range(min(num_sub, len(vals))):
                                samples[s, ch_idx] = float(vals[s])

                        ts = np.linspace(sample.timestamp, sample.timestamp + num_sub / self.sample_rate, num_sub)
                        self._emit_data(samples, ts)

                        # Push to LSL if outlet exists
                        if self.lsl_outlet:
                            for s in range(num_sub):
                                self.lsl_outlet.push_sample(samples[s].tolist())

            except Exception as e:
                if self.running:
                    logger.error(f"Read error: {e}")

    def stop(self):
        self.running = False
        if self._thread:
            self._thread.join(timeout=2.0)
        if self.radio and self.radio.is_acquiring:
            try:
                self.radio.stop_acquisition()
            except Exception:
                pass

    def disconnect(self):
        self.stop()
        if self.radio:
            try:
                self.radio.disconnect()
            except Exception:
                pass
        self.radio = None

    def refresh_config(self):
        """Re-read config from device and update channel names/count."""
        self.config = self.radio.get_configuration()
        self.sample_rate = self.config.sample_rate
        self.channel_names = []
        for ch in self.config.enabled_biopotential:
            name = ch.name.strip() if ch.name.strip() else f"BP{ch.channel_index}"
            self.channel_names.append(name)
        self.n_channels = len(self.channel_names)

    def enable_lsl_output(self):
        """Create an LSL outlet so other scripts can read this data."""
        if not HAS_LSL or not self.config:
            return
        self.lsl_outlet = create_lsl_outlet(self.config)


class LSLSource(DataSource):
    """Connect to an existing LSL stream on the network."""

    def __init__(self, stream_name: str = "BioRadio"):
        super().__init__()
        self.stream_name = stream_name
        self.inlet = None
        self._thread: Optional[threading.Thread] = None

    def connect(self):
        if not HAS_LSL:
            raise ImportError("pylsl not installed")

        streams = pylsl.resolve_byprop("name", self.stream_name, timeout=5.0)
        if not streams:
            raise ConnectionError(f"No LSL stream '{self.stream_name}' found")

        info = streams[0]
        self.sample_rate = info.nominal_srate()
        self.n_channels = info.channel_count()

        # Extract channel names from metadata
        self.channel_names = []
        try:
            inlet_info = pylsl.StreamInlet(info, max_buflen=1).info()
            ch_xml = inlet_info.desc().child("channels")
            if not ch_xml.empty():
                ch = ch_xml.child("channel")
                while not ch.empty():
                    label = ch.child_value("label")
                    if label:
                        self.channel_names.append(label)
                    ch = ch.next_sibling("channel")
        except Exception:
            pass

        if len(self.channel_names) != self.n_channels:
            self.channel_names = [f"Ch{i+1}" for i in range(self.n_channels)]

        self.inlet = pylsl.StreamInlet(streams[0], max_buflen=360)

    def start(self):
        self.running = True
        self._thread = threading.Thread(target=self._read_loop, daemon=True)
        self._thread.start()

    def _read_loop(self):
        while self.running:
            try:
                samples, timestamps = self.inlet.pull_chunk(timeout=0.1)
                if samples:
                    arr = np.array(samples)
                    ts = np.array(timestamps)
                    self._emit_data(arr, ts)
            except Exception as e:
                if self.running:
                    logger.error(f"LSL read error: {e}")

    def stop(self):
        self.running = False
        if self._thread:
            self._thread.join(timeout=2.0)


@dataclass
class MockChannelConfig:
    """Lightweight stand-in for ChannelConfig used by MockSource."""
    channel_index: int
    name: str
    enabled: bool = True
    signal_type: str = "emg"


class MockSource(DataSource):
    """Generate synthetic biosignal data for testing.

    Provides 8 mock channels (matching BioRadio single-ended mode) so
    users can explore the GUI – including channel enable/disable and
    sample-rate changes – without hardware.
    """

    TOTAL_CHANNELS = 8  # mirrors BioRadio single-ended max

    def __init__(self, n_channels: int = 4, sample_rate: int = 250,
                 signal_type: str = "emg"):
        super().__init__()
        self.sample_rate = sample_rate
        self.signal_type = signal_type
        self._thread: Optional[threading.Thread] = None
        self._t = 0.0

        # Build 8 mock channels; enable the first n_channels
        self.mock_channels: List[MockChannelConfig] = []
        for i in range(self.TOTAL_CHANNELS):
            self.mock_channels.append(
                MockChannelConfig(
                    channel_index=i + 1,
                    name=f"Mock_Ch{i + 1}",
                    enabled=(i < n_channels),
                )
            )
        self._sync_from_channels()

    # ------------------------------------------------------------------
    def _sync_from_channels(self):
        """Rebuild channel_names / n_channels from the enabled list."""
        enabled = [mc for mc in self.mock_channels if mc.enabled]
        self.channel_names = [mc.name for mc in enabled]
        self.n_channels = len(self.channel_names)

    def refresh_config(self):
        """Re-sync public state after channel or sample-rate changes."""
        self._sync_from_channels()

    # ------------------------------------------------------------------
    def connect(self):
        pass  # No hardware needed

    def start(self):
        self.running = True
        self._t = 0.0
        self._thread = threading.Thread(target=self._generate_loop, daemon=True)
        self._thread.start()

    @staticmethod
    def _gen_sample(sig_type: str, t: float, ch: int) -> float:
        """Generate one sample for a given signal type."""
        if sig_type == "emg":
            val = np.random.normal(0, 50)
            burst_freq = 0.3 + ch * 0.1
            if np.sin(2 * np.pi * burst_freq * t) > 0.3:
                val += np.random.normal(0, 1500)
            return val
        elif sig_type == "eog":
            drift = 200 * np.sin(2 * np.pi * 0.15 * t + ch)
            val = drift + np.random.normal(0, 30)
            if np.random.random() < 0.003:
                val += np.random.uniform(800, 1500)
            saccade_phase = np.sin(2 * np.pi * 0.5 * t)
            if abs(saccade_phase) > 0.95:
                val += np.sign(saccade_phase) * np.random.uniform(300, 600)
            return val
        elif sig_type == "eeg":
            alpha_freq = 10 + ch * 0.5
            alpha = 30 * np.sin(2 * np.pi * alpha_freq * t)
            beta_freq = 20 + ch
            beta = 15 * np.sin(2 * np.pi * beta_freq * t)
            noise = np.random.normal(0, 5)
            val = alpha + beta + noise
            if np.random.random() < 0.0005:
                val += np.random.normal(0, 150)
            return val
        elif sig_type == "gsr":
            tonic = 5.0 + 1.0 * np.sin(2 * np.pi * 0.005 * t + ch)
            phasic = 0.5 * np.exp(-((t % 12) - 6) ** 2 / 2)
            return tonic + phasic + np.random.normal(0, 0.02)
        else:
            freq = 10 * (ch + 1)
            return np.sin(2 * np.pi * freq * t) * 500

    def _generate_loop(self):
        chunk_size = max(1, self.sample_rate // 30)  # ~30 updates/sec
        dt = 1.0 / self.sample_rate

        while self.running:
            # Snapshot enabled channels and their signal types
            enabled = [mc for mc in self.mock_channels if mc.enabled]
            n_ch = len(enabled)
            if n_ch == 0:
                time.sleep(0.03)
                continue

            samples = np.zeros((chunk_size, n_ch))
            timestamps = np.zeros(chunk_size)

            for i in range(chunk_size):
                t = self._t + i * dt
                timestamps[i] = time.time() + i * dt
                for ch_idx, mc in enumerate(enabled):
                    samples[i, ch_idx] = self._gen_sample(mc.signal_type, t, ch_idx)

            self._t += chunk_size * dt
            self._emit_data(samples, timestamps)
            time.sleep(chunk_size / self.sample_rate)

    def stop(self):
        self.running = False
        if self._thread:
            self._thread.join(timeout=2.0)


# =====================================================================
# GUI Application
# =====================================================================

if HAS_GUI:

    class LogHandler(logging.Handler, QObject):
        """Route log messages to a QTextEdit widget."""
        log_signal = pyqtSignal(str)

        def __init__(self):
            logging.Handler.__init__(self)
            QObject.__init__(self)

        def emit(self, record):
            msg = self.format(record)
            self.log_signal.emit(msg)

    class StreamPanel(QWidget):
        """Multi-channel signal visualization panel."""

        def __init__(self, parent=None):
            super().__init__(parent)
            self.plots = []
            self.curves = []
            self.envelope_curves = []
            self.n_channels = 0

            layout = QVBoxLayout(self)
            layout.setContentsMargins(0, 0, 0, 0)
            self.plot_widget = pg.GraphicsLayoutWidget()
            layout.addWidget(self.plot_widget)

        def setup_plots(self, n_channels: int, channel_names: List[str],
                        window_seconds: float = 5.0, auto_scale: bool = True,
                        y_units: Optional[List[str]] = None):
            """Create plot widgets for each channel.

            Args:
                y_units: Per-channel Y-axis unit labels (e.g. ['µV', 'µV', 'µS']).
                         Falls back to 'µV' for any missing entries.
            """
            self.plot_widget.clear()
            self.plots = []
            self.curves = []
            self.n_channels = n_channels

            if y_units is None:
                y_units = ["\u00b5V"] * n_channels

            colors = [
                '#e6194b', '#3cb44b', '#4363d8', '#f58231',
                '#911eb4', '#42d4f4', '#f032e6', '#ffe119',
                '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4',
                '#ffeaa7', '#dfe6e9', '#fd79a8', '#a29bfe',
            ]

            labels = channel_names[:n_channels] if channel_names else [
                f"Ch {i+1}" for i in range(n_channels)
            ]

            for i in range(n_channels):
                if i > 0:
                    self.plot_widget.nextRow()

                unit = y_units[i] if i < len(y_units) else "\u00b5V"
                plot = self.plot_widget.addPlot(title=labels[i])
                plot.showGrid(x=True, y=True, alpha=0.3)
                plot.setXRange(-window_seconds, 0)
                plot.setLabel('left', unit)

                if auto_scale:
                    plot.enableAutoRange(axis='y')

                if i == n_channels - 1:
                    plot.setLabel('bottom', 'Time (s)')

                color = colors[i % len(colors)]
                curve = plot.plot(pen=pg.mkPen(color=color, width=1))

                self.plots.append(plot)
                self.curves.append(curve)

        def set_y_units(self, y_units: List[str]):
            """Update Y-axis labels per plot."""
            for i, plot in enumerate(self.plots):
                unit = y_units[i] if i < len(y_units) else "\u00b5V"
                plot.setLabel('left', unit)

        def update_window(self, window_seconds: float):
            for plot in self.plots:
                plot.setXRange(-window_seconds, 0)

        def set_auto_scale(self, enabled: bool, amplitude: float = 1000,
                          per_channel_amplitudes: Optional[List[float]] = None):
            """Toggle auto-scale or set fixed Y range (optionally per channel)."""
            for i, plot in enumerate(self.plots):
                if enabled:
                    plot.enableAutoRange(axis='y')
                else:
                    plot.disableAutoRange(axis='y')
                    amp = (per_channel_amplitudes[i]
                           if per_channel_amplitudes and i < len(per_channel_amplitudes)
                           else amplitude)
                    plot.setYRange(-amp, amp)

    class HackathonGUI(QMainWindow):
        """Main hackathon application window."""

        def __init__(self, source: Optional[DataSource] = None):
            super().__init__()
            self.source = source
            self.buffer: Optional[RingBuffer] = None
            self.recording = False
            self.recording_buffer: Optional[RecordingBuffer] = None
            self.record_start_time = None
            self.output_dir = os.path.join(os.getcwd(), "data")
            self.sample_count = 0
            self.last_sample_count = 0
            self.last_rate_time = time.time()

            self.channel_checks: List[QCheckBox] = []
            self.channel_type_combos: List[QComboBox] = []

            self.setup_ui()

            # Update timer
            self.timer = QTimer()
            self.timer.timeout.connect(self.update_plots)

            # Log handler
            self.log_handler = LogHandler()
            self.log_handler.setFormatter(logging.Formatter("%(asctime)s %(levelname)s: %(message)s", "%H:%M:%S"))
            self.log_handler.log_signal.connect(self.append_log)
            logging.getLogger().addHandler(self.log_handler)

            if source:
                self._setup_source(source)

        def setup_ui(self):
            self.setWindowTitle("BioRadio Hackathon Control Center")
            self.setGeometry(50, 50, 1500, 950)

            pg.setConfigOption('background', '#1a1a2e')
            pg.setConfigOption('foreground', '#e0e0e0')

            central = QWidget()
            self.setCentralWidget(central)
            main_layout = QHBoxLayout(central)

            # === Left Panel: Controls ===
            left_panel = QWidget()
            left_panel.setMaximumWidth(380)
            left_panel.setMinimumWidth(340)
            left_layout = QVBoxLayout(left_panel)

            # -- Connection --
            conn_group = QGroupBox("Connection")
            conn_layout = QGridLayout(conn_group)

            conn_layout.addWidget(QLabel("Mode:"), 0, 0)
            self.mode_combo = QComboBox()
            self.mode_combo.addItems(["BioRadio (Serial)", "LSL Stream", "Mock Data"])
            self.mode_combo.currentIndexChanged.connect(self._on_mode_changed)
            conn_layout.addWidget(self.mode_combo, 0, 1)

            conn_layout.addWidget(QLabel("Port / Stream:"), 1, 0)
            self.port_edit = QLineEdit()
            self.port_edit.setPlaceholderText("Auto-detect (leave blank)")
            conn_layout.addWidget(self.port_edit, 1, 1)

            self.scan_btn = QPushButton("Scan Ports")
            self.scan_btn.clicked.connect(self.scan_ports)
            conn_layout.addWidget(self.scan_btn, 2, 0)

            self.connect_btn = QPushButton("Connect")
            self.connect_btn.setStyleSheet("QPushButton { font-weight: bold; padding: 8px; }")
            self.connect_btn.clicked.connect(self.toggle_connection)
            conn_layout.addWidget(self.connect_btn, 2, 1)

            left_layout.addWidget(conn_group)

            # -- Device Config --
            config_group = QGroupBox("Device Configuration")
            config_layout = QGridLayout(config_group)

            config_layout.addWidget(QLabel("Sample Rate:"), 0, 0)
            self.rate_combo = QComboBox()
            self.rate_combo.addItems([str(r) + " Hz" for r in VALID_SAMPLE_RATES] if HAS_BIORADIO else ["250 Hz"])
            self.rate_combo.setCurrentIndex(0)
            config_layout.addWidget(self.rate_combo, 0, 1)

            # Channel enable/disable checkboxes + per-channel signal type combos
            config_layout.addWidget(QLabel("Channels:"), 1, 0)
            self.channel_checks_container = QWidget()
            self.channel_checks_layout = QVBoxLayout(self.channel_checks_container)
            self.channel_checks_layout.setContentsMargins(0, 0, 0, 0)
            self.channel_checks_layout.setSpacing(2)
            self.channel_no_device_label = QLabel("Connect to configure")
            self.channel_no_device_label.setStyleSheet("color: #666; font-size: 10px;")
            self.channel_checks_layout.addWidget(self.channel_no_device_label)
            config_layout.addWidget(self.channel_checks_container, 1, 1)

            self.apply_config_btn = QPushButton("Apply Config")
            self.apply_config_btn.clicked.connect(self.apply_config)
            self.apply_config_btn.setEnabled(False)
            config_layout.addWidget(self.apply_config_btn, 2, 0, 1, 2)

            self.config_label = QLabel("Not connected")
            self.config_label.setWordWrap(True)
            self.config_label.setStyleSheet("color: #888; font-size: 11px;")
            config_layout.addWidget(self.config_label, 3, 0, 1, 2)

            left_layout.addWidget(config_group)

            # -- Streaming Controls --
            stream_group = QGroupBox("Acquisition")
            stream_layout = QGridLayout(stream_group)

            self.start_btn = QPushButton("START")
            self.start_btn.setStyleSheet("""
                QPushButton {
                    background-color: #2d5a27; color: white;
                    font-weight: bold; padding: 12px; font-size: 14px;
                }
                QPushButton:hover { background-color: #3d7a37; }
                QPushButton:disabled { background-color: #555; }
            """)
            self.start_btn.clicked.connect(self.toggle_acquisition)
            self.start_btn.setEnabled(False)
            stream_layout.addWidget(self.start_btn, 0, 0, 1, 2)

            self.lsl_output_check = QCheckBox("Stream to LSL (for your scripts)")
            self.lsl_output_check.setChecked(True)
            stream_layout.addWidget(self.lsl_output_check, 1, 0, 1, 2)

            left_layout.addWidget(stream_group)

            # -- Recording --
            record_group = QGroupBox("Data Recording")
            record_layout = QGridLayout(record_group)

            record_layout.addWidget(QLabel("Team Name:"), 0, 0)
            self.team_edit = QLineEdit()
            self.team_edit.setPlaceholderText("e.g., Team Alpha")
            record_layout.addWidget(self.team_edit, 0, 1)

            record_layout.addWidget(QLabel("Label:"), 1, 0)
            self.label_combo = QComboBox()
            self.label_combo.setEditable(True)
            self.label_combo.addItems([
                "baseline", "task", "control_test", "calibration",
                "trial_1", "trial_2", "trial_3", "custom"
            ])
            record_layout.addWidget(self.label_combo, 1, 1)

            record_layout.addWidget(QLabel("Save to:"), 2, 0)
            dir_row = QHBoxLayout()
            self.output_dir_label = QLabel(self.output_dir)
            self.output_dir_label.setStyleSheet("font-size: 10px; color: #aaa;")
            self.output_dir_label.setWordWrap(True)
            dir_row.addWidget(self.output_dir_label, 1)
            browse_btn = QPushButton("Browse...")
            browse_btn.setMaximumWidth(70)
            browse_btn.setStyleSheet("font-size: 10px;")
            browse_btn.clicked.connect(self.choose_output_dir)
            dir_row.addWidget(browse_btn)
            dir_widget = QWidget()
            dir_widget.setLayout(dir_row)
            record_layout.addWidget(dir_widget, 2, 1)

            self.record_btn = QPushButton("RECORD")
            self.record_btn.setStyleSheet("""
                QPushButton {
                    background-color: #8b0000; color: white;
                    font-weight: bold; padding: 10px; font-size: 13px;
                }
                QPushButton:hover { background-color: #a00000; }
                QPushButton:disabled { background-color: #555; }
            """)
            self.record_btn.clicked.connect(self.toggle_recording)
            self.record_btn.setEnabled(False)
            record_layout.addWidget(self.record_btn, 3, 0, 1, 2)

            self.record_status = QLabel("Not recording")
            self.record_status.setAlignment(Qt.AlignmentFlag.AlignCenter)
            self.record_status.setStyleSheet("font-size: 11px;")
            record_layout.addWidget(self.record_status, 4, 0, 1, 2)

            left_layout.addWidget(record_group)

            # -- Display Settings --
            display_group = QGroupBox("Display")
            display_layout = QGridLayout(display_group)

            display_layout.addWidget(QLabel("Time Window (s):"), 0, 0)
            self.window_spin = QSpinBox()
            self.window_spin.setRange(1, 30)
            self.window_spin.setValue(5)
            self.window_spin.valueChanged.connect(self.update_window)
            display_layout.addWidget(self.window_spin, 0, 1)

            self.auto_scale_check = QCheckBox("Auto-scale Y axis")
            self.auto_scale_check.setChecked(True)
            self.auto_scale_check.stateChanged.connect(self.toggle_auto_scale)
            display_layout.addWidget(self.auto_scale_check, 1, 0, 1, 2)

            display_layout.addWidget(QLabel("Y Amplitude:"), 2, 0)
            self.amp_spin = QDoubleSpinBox()
            self.amp_spin.setRange(1, 1000000)
            self.amp_spin.setValue(1000)
            self.amp_spin.setEnabled(False)
            self.amp_spin.valueChanged.connect(self.update_amplitude)
            display_layout.addWidget(self.amp_spin, 2, 1)

            left_layout.addWidget(display_group)
            left_layout.addStretch()

            main_layout.addWidget(left_panel)

            # === Right Panel: Plots + Log ===
            right_splitter = QSplitter(Qt.Orientation.Vertical)

            # Plot area
            self.stream_panel = StreamPanel()
            right_splitter.addWidget(self.stream_panel)

            # Log area
            log_widget = QWidget()
            log_layout = QVBoxLayout(log_widget)
            log_layout.setContentsMargins(0, 0, 0, 0)

            log_header = QHBoxLayout()
            log_header.addWidget(QLabel("Log"))
            clear_log_btn = QPushButton("Clear")
            clear_log_btn.setMaximumWidth(60)
            clear_log_btn.clicked.connect(lambda: self.log_text.clear())
            log_header.addWidget(clear_log_btn)
            log_layout.addLayout(log_header)

            self.log_text = QTextEdit()
            self.log_text.setReadOnly(True)
            self.log_text.setMaximumHeight(150)
            self.log_text.setStyleSheet(
                "QTextEdit { background-color: #0d1117; color: #c9d1d9; "
                "font-family: monospace; font-size: 11px; }"
            )
            log_layout.addWidget(self.log_text)
            right_splitter.addWidget(log_widget)

            right_splitter.setSizes([700, 150])
            main_layout.addWidget(right_splitter, stretch=1)

            # Status bar
            self.status_bar = QStatusBar()
            self.setStatusBar(self.status_bar)
            self.status_label = QLabel("Ready")
            self.rate_label = QLabel("")
            self.battery_label = QLabel("")
            self.status_bar.addWidget(self.status_label)
            self.status_bar.addPermanentWidget(self.battery_label)
            self.status_bar.addPermanentWidget(self.rate_label)

        # -- Connection Methods --

        def _on_mode_changed(self, index):
            if index == 0:  # BioRadio
                self.port_edit.setPlaceholderText("Auto-detect (leave blank)")
                self.scan_btn.setEnabled(True)
            elif index == 1:  # LSL
                self.port_edit.setPlaceholderText("Stream name (e.g., BioRadio)")
                self.scan_btn.setEnabled(True)
                self.scan_btn.setText("Scan Streams")
            else:  # Mock
                self.port_edit.setPlaceholderText("(not used in mock mode)")
                self.scan_btn.setEnabled(False)

        @staticmethod
        def _infer_signal_type(ch) -> str:
            """Guess signal type from a BioRadio ChannelConfig's hardware settings."""
            if hasattr(ch, 'operation_mode') and int(ch.operation_mode) == int(BioPotentialMode.GSR):
                return "gsr"
            if hasattr(ch, 'bit_resolution'):
                if ch.bit_resolution == 24:
                    return "eeg"
                if hasattr(ch, 'coupling') and int(ch.coupling) == 0:  # DC
                    return "eog"  # DC-coupled biopotential → likely EOG
            return "emg"  # default

        def _make_signal_type_combo(self, selected_key: str = "emg") -> QComboBox:
            """Create a small QComboBox with the signal type options."""
            combo = QComboBox()
            combo.setStyleSheet("font-size: 10px;")
            combo.setMaximumWidth(60)
            for key in SIGNAL_TYPE_KEYS:
                combo.addItem(SIGNAL_PROFILES[key]["label"], userData=key)
            # Select the matching key
            for i in range(combo.count()):
                if combo.itemData(i) == selected_key:
                    combo.setCurrentIndex(i)
                    break
            return combo

        def _populate_channel_checkboxes(self, source: 'BioRadioSource'):
            """Create checkbox + signal-type combo for each BioPotential channel."""
            self._clear_channel_checkboxes()

            cfg = source.config
            if not cfg:
                return

            max_ch = cfg.max_biopotential_channels
            bp_channels = [c for c in cfg.channels
                           if c.type_code == ChannelTypeCode.BioPotential
                           and c.channel_index <= max_ch]

            if not bp_channels:
                return

            for ch in bp_channels:
                name = ch.name.strip() if ch.name.strip() else f"BP{ch.channel_index}"
                label = f"Ch{ch.channel_index}: {name}"

                row = QHBoxLayout()
                row.setContentsMargins(0, 0, 0, 0)
                row.setSpacing(4)

                cb = QCheckBox(label)
                cb.setChecked(ch.enabled)
                cb.setProperty("channel_index", ch.channel_index)
                cb.setStyleSheet("font-size: 11px;")

                sig_combo = self._make_signal_type_combo(self._infer_signal_type(ch))
                sig_combo.setProperty("channel_index", ch.channel_index)

                row.addWidget(cb)
                row.addWidget(sig_combo)

                row_widget = QWidget()
                row_widget.setLayout(row)
                row_widget.setObjectName(f"ch_row_{ch.channel_index}")

                self.channel_checks.append(cb)
                self.channel_type_combos.append(sig_combo)
                self.channel_checks_layout.addWidget(row_widget)

            mode_label = "Single-Ended" if cfg.is_single_ended else "Differential"
            hint = QLabel(f"({mode_label} \u2014 max {max_ch} channels)")
            hint.setStyleSheet("color: #666; font-size: 9px;")
            hint.setObjectName("channel_hint")
            self.channel_checks_layout.addWidget(hint)

        def _clear_channel_checkboxes(self):
            """Remove all channel checkboxes and signal-type combos."""
            # Remove row widgets (parent of checkbox + combo)
            for cb in self.channel_checks:
                parent = cb.parentWidget()
                if parent and parent.objectName().startswith("ch_row_"):
                    self.channel_checks_layout.removeWidget(parent)
                    parent.deleteLater()
                else:
                    self.channel_checks_layout.removeWidget(cb)
                    cb.deleteLater()
            self.channel_checks.clear()
            self.channel_type_combos.clear()

            # Remove hint label if present
            hint = self.channel_checks_container.findChild(QLabel, "channel_hint")
            if hint:
                self.channel_checks_layout.removeWidget(hint)
                hint.deleteLater()

            # Remove the "Connect to configure" label if still present
            if self.channel_no_device_label:
                self.channel_no_device_label.setVisible(False)

        def _populate_mock_channel_checkboxes(self, source: 'MockSource'):
            """Create checkbox + signal-type combo for each mock channel."""
            self._clear_channel_checkboxes()

            for mc in source.mock_channels:
                label = f"Ch{mc.channel_index}: {mc.name}"

                row = QHBoxLayout()
                row.setContentsMargins(0, 0, 0, 0)
                row.setSpacing(4)

                cb = QCheckBox(label)
                cb.setChecked(mc.enabled)
                cb.setProperty("channel_index", mc.channel_index)
                cb.setStyleSheet("font-size: 11px;")

                sig_combo = self._make_signal_type_combo(mc.signal_type)
                sig_combo.setProperty("channel_index", mc.channel_index)

                row.addWidget(cb)
                row.addWidget(sig_combo)

                row_widget = QWidget()
                row_widget.setLayout(row)
                row_widget.setObjectName(f"ch_row_{mc.channel_index}")

                self.channel_checks.append(cb)
                self.channel_type_combos.append(sig_combo)
                self.channel_checks_layout.addWidget(row_widget)

            hint = QLabel(f"(Mock \u2014 {source.TOTAL_CHANNELS} channels available)")
            hint.setStyleSheet("color: #666; font-size: 9px;")
            hint.setObjectName("channel_hint")
            self.channel_checks_layout.addWidget(hint)

        def scan_ports(self):
            mode = self.mode_combo.currentIndex()
            if mode == 0:  # BioRadio serial
                self.log("Scanning for BioRadio serial ports...")
                if HAS_BIORADIO:
                    ports = scan_for_bioradio(verbose=False)
                    if ports:
                        self.port_edit.setText(ports[0])
                        self.log(f"Found {len(ports)} candidate(s): {', '.join(ports)}")
                    else:
                        self.log("No BioRadio ports found. Is the device on and paired?")
                else:
                    self.log("BioRadio module not available (pyserial not installed?)")

            elif mode == 1:  # LSL
                self.log("Scanning for LSL streams...")
                if HAS_LSL:
                    streams = pylsl.resolve_streams(timeout=3.0)
                    if streams:
                        names = [s.name() for s in streams]
                        self.log(f"Found {len(streams)} stream(s): {', '.join(names)}")
                        self.port_edit.setText(names[0])
                    else:
                        self.log("No LSL streams found on network.")
                else:
                    self.log("pylsl not installed!")

        def toggle_connection(self):
            if self.source and self.source.running:
                self.disconnect_source()
            elif self.source:
                self.disconnect_source()
                self.connect_source()
            else:
                self.connect_source()

        def connect_source(self):
            mode = self.mode_combo.currentIndex()
            port_text = self.port_edit.text().strip()

            try:
                if mode == 0:  # BioRadio
                    if not HAS_BIORADIO:
                        self.log("ERROR: BioRadio module not available. Install pyserial.")
                        return
                    port = port_text if port_text else None
                    self.source = BioRadioSource(port=port)
                    self.log(f"Connecting to BioRadio{' on ' + port if port else ' (auto-detect)'}...")

                elif mode == 1:  # LSL
                    if not HAS_LSL:
                        self.log("ERROR: pylsl not installed.")
                        return
                    stream_name = port_text if port_text else "BioRadio"
                    self.source = LSLSource(stream_name)
                    self.log(f"Connecting to LSL stream '{stream_name}'...")

                else:  # Mock
                    n_ch = 4
                    # Use sample rate from the rate combo (default to 250)
                    rate_text = self.rate_combo.currentText().replace(" Hz", "")
                    try:
                        rate = int(rate_text)
                    except ValueError:
                        rate = 250
                    self.source = MockSource(n_channels=n_ch, sample_rate=rate,
                                             signal_type="emg")
                    self.log(f"Using mock data ({n_ch}ch @ {rate}Hz)")

                QApplication.processEvents()
                self.source.connect()
                self._setup_source(self.source)
                self.log("Connected!")

            except Exception as e:
                self.log(f"Connection failed: {e}")
                self.source = None

        def _per_channel_profiles(self) -> List[dict]:
            """Return a list of SIGNAL_PROFILES entries matching the per-channel combos.

            Order matches self.channel_type_combos (all channels, including disabled).
            Only enabled channels (checked checkboxes) contribute to the returned list.
            """
            profiles = []
            for cb, combo in zip(self.channel_checks, self.channel_type_combos):
                if cb.isChecked():
                    key = combo.currentData() or "emg"
                    profiles.append(SIGNAL_PROFILES.get(key, SIGNAL_PROFILES["emg"]))
            return profiles

        def _apply_per_channel_display(self):
            """Update plot Y-axis labels and amplitude spinbox from per-channel combos."""
            profiles = self._per_channel_profiles()
            if not profiles:
                return
            y_units = [p["unit"] for p in profiles]
            y_ranges = [p["y_range"] for p in profiles]
            self.stream_panel.set_y_units(y_units)
            # Set amplitude spinbox to the max channel range as a reasonable default
            self.amp_spin.setValue(max(y_ranges))
            if not self.auto_scale_check.isChecked():
                self.stream_panel.set_auto_scale(False, per_channel_amplitudes=y_ranges)

        def _setup_source(self, source: DataSource):
            """Configure UI after connecting to a source."""
            self.buffer = RingBuffer(source.n_channels, max_samples=int(source.sample_rate * 60))

            source.on_data(self._on_data_received)

            # Update config display & populate channel checkboxes first
            # (we need the combos populated before reading per-channel profiles)
            if isinstance(source, BioRadioSource) and source.config:
                cfg = source.config
                self.apply_config_btn.setEnabled(True)
                self._populate_channel_checkboxes(source)

                # Set rate combo to match device
                for i in range(self.rate_combo.count()):
                    if str(cfg.sample_rate) in self.rate_combo.itemText(i):
                        self.rate_combo.setCurrentIndex(i)
                        break

                battery = source.radio.get_battery_info()
                self.battery_label.setText(f"Battery: {battery.voltage:.2f}V ({battery.percentage:.0f}%)")

                info_lines = [
                    f"Device: {source.radio.device_name}",
                    f"FW: {source.radio.firmware_version}  HW: {source.radio.hardware_version}",
                    f"Rate: {cfg.sample_rate} Hz",
                    f"Mode: {'Single-Ended (8ch)' if cfg.is_single_ended else 'Differential (4ch)'}",
                    f"Channels: {', '.join(source.channel_names)}",
                ]
                self.config_label.setText('\n'.join(info_lines))

            elif isinstance(source, MockSource):
                self.apply_config_btn.setEnabled(True)
                self._populate_mock_channel_checkboxes(source)

                # Set rate combo to match
                for i in range(self.rate_combo.count()):
                    if str(source.sample_rate) in self.rate_combo.itemText(i):
                        self.rate_combo.setCurrentIndex(i)
                        break

                info_lines = [
                    f"Device: Mock BioRadio (no hardware)",
                    f"Rate: {source.sample_rate} Hz",
                    f"Channels: {', '.join(source.channel_names)}",
                ]
                self.config_label.setText('\n'.join(info_lines))
            else:
                self.apply_config_btn.setEnabled(True)
                self.config_label.setText(
                    f"{source.n_channels} channels @ {source.sample_rate} Hz\n"
                    f"Channels: {', '.join(source.channel_names[:8])}"
                )

            # Now build per-channel Y-axis units from the populated combos
            profiles = self._per_channel_profiles()
            y_units = [p["unit"] for p in profiles] if profiles else None

            self.stream_panel.setup_plots(
                source.n_channels, source.channel_names,
                window_seconds=self.window_spin.value(),
                auto_scale=self.auto_scale_check.isChecked(),
                y_units=y_units,
            )

            if profiles:
                y_ranges = [p["y_range"] for p in profiles]
                self.amp_spin.setValue(max(y_ranges))
                if not self.auto_scale_check.isChecked():
                    self.stream_panel.set_auto_scale(False, per_channel_amplitudes=y_ranges)

            self.connect_btn.setText("Disconnect")
            self.start_btn.setEnabled(True)
            self.status_label.setText(f"Connected ({source.n_channels}ch @ {source.sample_rate}Hz)")

        def disconnect_source(self):
            if self.recording:
                self.toggle_recording()

            self.timer.stop()

            if self.source:
                self.source.disconnect()
                self.source = None

            self._clear_channel_checkboxes()
            self.channel_no_device_label.setVisible(True)

            self.connect_btn.setText("Connect")
            self.start_btn.setEnabled(False)
            self.start_btn.setText("START")
            self.record_btn.setEnabled(False)
            self.apply_config_btn.setEnabled(False)
            self.config_label.setText("Not connected")
            self.battery_label.setText("")
            self.status_label.setText("Disconnected")
            self.rate_label.setText("")
            self.log("Disconnected")

        # -- Configuration --

        def apply_config(self):
            if not self.source:
                return

            rate_text = self.rate_combo.currentText().replace(" Hz", "")
            try:
                new_rate = int(rate_text)
            except ValueError:
                return

            # ---- MockSource path ----
            if isinstance(self.source, MockSource):
                self._apply_config_mock(new_rate)
                return

            # ---- LSLSource path (display-only) ----
            if not isinstance(self.source, BioRadioSource):
                self._apply_per_channel_display()
                self.log("Display scale updated")
                return

            # ---- BioRadioSource path ----
            if not self.source.radio:
                return

            try:
                was_acquiring = self.source.running
                if was_acquiring:
                    self.toggle_acquisition()

                # --- Apply sample rate change ---
                if new_rate != self.source.config.sample_rate:
                    self.log(f"Setting sample rate to {new_rate} Hz...")
                    self.source.radio.set_sample_rate(new_rate)
                    self.log(f"Sample rate set to {self.source.radio.config.sample_rate} Hz")

                # --- Apply per-channel enable/disable + signal type ---
                cfg = self.source.config
                max_ch = cfg.max_biopotential_channels
                bp_channels = [c for c in cfg.channels
                               if c.type_code == ChannelTypeCode.BioPotential
                               and c.channel_index <= max_ch]

                channels_changed = False
                for cb, combo in zip(self.channel_checks, self.channel_type_combos):
                    ch_idx = cb.property("channel_index")
                    desired_enabled = cb.isChecked()
                    sig_key = combo.currentData() or "emg"
                    profile = SIGNAL_PROFILES.get(sig_key, SIGNAL_PROFILES["emg"])

                    for ch in bp_channels:
                        if ch.channel_index != ch_idx:
                            continue

                        changed = False
                        if ch.enabled != desired_enabled:
                            ch.enabled = desired_enabled
                            changed = True

                        # Apply hardware config from the signal-type profile
                        new_bit_res = profile["bit_resolution"]
                        new_coupling = (CouplingType.AC
                                        if profile["coupling"] == "AC"
                                        else CouplingType.DC)
                        new_op_mode = BioPotentialMode[profile["operation_mode"]]
                        new_name = f"{profile['label']}{ch_idx}"
                        if ch.name.strip() != new_name:
                            ch.name = new_name
                            changed = True
                        if ch.bit_resolution != new_bit_res:
                            ch.bit_resolution = new_bit_res
                            changed = True
                        if ch.coupling != new_coupling:
                            ch.coupling = new_coupling
                            changed = True
                        if ch.operation_mode != new_op_mode:
                            ch.operation_mode = new_op_mode
                            changed = True

                        if changed:
                            state = "ON" if desired_enabled else "OFF"
                            self.log(f"Ch{ch_idx} -> {state} [{sig_key.upper()} "
                                     f"{new_bit_res}bit {profile['coupling']}]")
                            self.source.radio.set_channel_config(ch)
                            channels_changed = True
                        break

                # --- Re-read config and rebuild ---
                self.source.refresh_config()

                self.buffer = RingBuffer(self.source.n_channels,
                                         max_samples=int(self.source.sample_rate * 60))

                # Refresh checkboxes (preserves signal type selections)
                self._populate_channel_checkboxes(self.source)

                # Build per-channel display scaling
                profiles = self._per_channel_profiles()
                y_units = [p["unit"] for p in profiles] if profiles else None

                self.stream_panel.setup_plots(
                    self.source.n_channels, self.source.channel_names,
                    window_seconds=self.window_spin.value(),
                    auto_scale=self.auto_scale_check.isChecked(),
                    y_units=y_units,
                )
                self._apply_per_channel_display()

                # Update info label
                cfg = self.source.config
                info_lines = [
                    f"Device: {self.source.radio.device_name}",
                    f"FW: {self.source.radio.firmware_version}  HW: {self.source.radio.hardware_version}",
                    f"Rate: {cfg.sample_rate} Hz",
                    f"Mode: {'Single-Ended (8ch)' if cfg.is_single_ended else 'Differential (4ch)'}",
                    f"Channels: {', '.join(self.source.channel_names)}",
                ]
                self.config_label.setText('\n'.join(info_lines))

                self.status_label.setText(
                    f"Connected ({self.source.n_channels}ch @ {self.source.sample_rate}Hz)"
                )

                if channels_changed:
                    enabled_names = ', '.join(self.source.channel_names) or 'none'
                    self.log(f"Active channels: {enabled_names}")

                if was_acquiring:
                    self.toggle_acquisition()

            except Exception as e:
                self.log(f"Config error: {e}")

        def _apply_config_mock(self, new_rate: int):
            """Apply config changes (sample rate, channels, signal type) to a MockSource."""
            source: MockSource = self.source  # type: ignore[assignment]

            try:
                was_acquiring = source.running
                if was_acquiring:
                    self.toggle_acquisition()

                # --- Apply sample rate change ---
                if new_rate != source.sample_rate:
                    source.sample_rate = new_rate
                    self.log(f"Mock sample rate set to {new_rate} Hz")

                # --- Apply per-channel enable/disable + signal type ---
                channels_changed = False
                for cb, combo in zip(self.channel_checks, self.channel_type_combos):
                    ch_idx = cb.property("channel_index")
                    desired_enabled = cb.isChecked()
                    sig_key = combo.currentData() or "emg"

                    for mc in source.mock_channels:
                        if mc.channel_index != ch_idx:
                            continue
                        if mc.enabled != desired_enabled:
                            mc.enabled = desired_enabled
                            state = "ON" if desired_enabled else "OFF"
                            self.log(f"Mock Ch{ch_idx} -> {state}")
                            channels_changed = True
                        if mc.signal_type != sig_key:
                            mc.signal_type = sig_key
                            self.log(f"Mock Ch{ch_idx} signal -> {sig_key.upper()}")
                            channels_changed = True
                        break

                # --- Rebuild ---
                source.refresh_config()

                if source.n_channels == 0:
                    self.log("WARNING: No channels enabled!")

                self.buffer = RingBuffer(max(1, source.n_channels),
                                         max_samples=int(source.sample_rate * 60))

                # Refresh checkboxes (preserves selections)
                self._populate_mock_channel_checkboxes(source)

                # Build per-channel display scaling
                profiles = self._per_channel_profiles()
                y_units = [p["unit"] for p in profiles] if profiles else None

                self.stream_panel.setup_plots(
                    source.n_channels, source.channel_names,
                    window_seconds=self.window_spin.value(),
                    auto_scale=self.auto_scale_check.isChecked(),
                    y_units=y_units,
                )
                self._apply_per_channel_display()

                # Update info label
                info_lines = [
                    f"Device: Mock BioRadio (no hardware)",
                    f"Rate: {source.sample_rate} Hz",
                    f"Channels: {', '.join(source.channel_names) or 'none'}",
                ]
                self.config_label.setText('\n'.join(info_lines))

                self.status_label.setText(
                    f"Connected ({source.n_channels}ch @ {source.sample_rate}Hz)"
                )

                if channels_changed:
                    enabled_names = ', '.join(source.channel_names) or 'none'
                    self.log(f"Active mock channels: {enabled_names}")

                if was_acquiring:
                    self.toggle_acquisition()

            except Exception as e:
                self.log(f"Mock config error: {e}")

        # -- Acquisition --

        def toggle_acquisition(self):
            if self.source and self.source.running:
                self.stop_acquisition()
            else:
                self.start_acquisition()

        def start_acquisition(self):
            if not self.source:
                return

            try:
                # Enable LSL output if checked
                if (self.lsl_output_check.isChecked() and
                        isinstance(self.source, BioRadioSource)):
                    self.source.enable_lsl_output()

                self.source.start()
                self.sample_count = 0
                self.last_sample_count = 0
                self.last_rate_time = time.time()

                self.timer.start(33)  # ~30 FPS

                self.start_btn.setText("STOP")
                self.start_btn.setStyleSheet("""
                    QPushButton {
                        background-color: #8b0000; color: white;
                        font-weight: bold; padding: 12px; font-size: 14px;
                    }
                    QPushButton:hover { background-color: #a00000; }
                """)
                self.record_btn.setEnabled(True)
                self.log("Acquisition started")

            except Exception as e:
                self.log(f"Start error: {e}")

        def stop_acquisition(self):
            if self.recording:
                self.toggle_recording()

            self.timer.stop()

            if self.source:
                self.source.stop()

            self.start_btn.setText("START")
            self.start_btn.setStyleSheet("""
                QPushButton {
                    background-color: #2d5a27; color: white;
                    font-weight: bold; padding: 12px; font-size: 14px;
                }
                QPushButton:hover { background-color: #3d7a37; }
                QPushButton:disabled { background-color: #555; }
            """)
            self.record_btn.setEnabled(False)
            self.log("Acquisition stopped")

        def _on_data_received(self, samples: np.ndarray, timestamps: np.ndarray):
            """Called from data source thread."""
            if self.buffer:
                self.buffer.add_samples(samples, timestamps)
            self.sample_count += len(samples)

            if self.recording and self.recording_buffer is not None:
                self.recording_buffer.add_samples(samples, timestamps)

        # -- Plot Update --

        def update_plots(self):
            if not self.buffer:
                return

            window_s = self.window_spin.value()
            sample_rate = self.source.sample_rate if self.source else 250
            n_samples = int(window_s * sample_rate)

            data, timestamps = self.buffer.get_data(n_samples)
            if len(timestamps) < 2:
                return

            n = len(timestamps)
            t_rel = np.linspace(-n / sample_rate, 0, n)

            for i, curve in enumerate(self.stream_panel.curves):
                if i < data.shape[1]:
                    curve.setData(t_rel, data[:, i])

            # Update rate display
            now = time.time()
            dt = now - self.last_rate_time
            if dt >= 1.0:
                rate = (self.sample_count - self.last_sample_count) / dt
                self.rate_label.setText(f"{rate:.0f} samples/s")
                self.last_sample_count = self.sample_count
                self.last_rate_time = now

            # Recording duration
            if self.recording and self.record_start_time:
                dur = time.time() - self.record_start_time
                n_rec = len(self.recording_buffer) if self.recording_buffer is not None else 0
                self.record_status.setText(f"Recording: {dur:.1f}s ({n_rec} samples)")

        # -- Recording --

        def choose_output_dir(self):
            directory = QFileDialog.getExistingDirectory(
                self, "Select Output Directory", self.output_dir)
            if directory:
                self.output_dir = directory
                self.output_dir_label.setText(directory)
                self.log(f"Output directory: {directory}")

        def toggle_recording(self):
            if self.recording:
                self.stop_recording()
            else:
                self.start_recording()

        def start_recording(self):
            self.recording_buffer = RecordingBuffer()
            self.recording = True
            self.record_start_time = time.time()

            self.record_btn.setText("STOP RECORDING")
            self.record_btn.setStyleSheet("""
                QPushButton {
                    background-color: #ff0000; color: white;
                    font-weight: bold; padding: 10px; font-size: 13px;
                }
            """)
            self.record_status.setText("Recording...")
            self.log("Recording started")

        def stop_recording(self):
            self.recording = False
            duration = time.time() - self.record_start_time if self.record_start_time else 0

            if self.recording_buffer is not None:
                data, timestamps = self.recording_buffer.get_all()
                if len(data) > 0:
                    try:
                        filepath = self.save_recording(data, timestamps, duration)
                        self.log(f"Saved {len(data)} samples ({duration:.1f}s) to {filepath}")
                        self.record_status.setText(f"Saved: {os.path.basename(filepath)}")
                    except Exception as e:
                        self.log(f"Save error: {e}")
                        self.record_status.setText("Save FAILED — check log")
                else:
                    self.record_status.setText("No data recorded")
                self.recording_buffer = None

            self.record_btn.setText("RECORD")
            self.record_btn.setStyleSheet("""
                QPushButton {
                    background-color: #8b0000; color: white;
                    font-weight: bold; padding: 10px; font-size: 13px;
                }
                QPushButton:hover { background-color: #a00000; }
                QPushButton:disabled { background-color: #555; }
            """)

        def save_recording(self, data: np.ndarray, timestamps: np.ndarray,
                           duration: float) -> str:
            """Save recorded data to CSV."""
            team = self.team_edit.text().strip() or "unknown"
            label = self.label_combo.currentText().strip() or "data"
            ts_str = datetime.now().strftime("%Y%m%d_%H%M%S")

            # Create directory: data/team/
            subdir = os.path.join(self.output_dir, team.replace(" ", "_"))
            os.makedirs(subdir, exist_ok=True)

            filename = f"{label}_{ts_str}.csv"
            filepath = os.path.join(subdir, filename)

            channel_names = self.source.channel_names if self.source else [
                f"ch_{i}" for i in range(data.shape[1] if data.ndim > 1 else 1)
            ]
            sample_rate = self.source.sample_rate if self.source else 250

            with open(filepath, 'w', newline='') as f:
                writer = csv.writer(f)

                # Metadata header
                f.write(f"# team: {team}\n")
                f.write(f"# label: {label}\n")
                f.write(f"# timestamp: {ts_str}\n")
                f.write(f"# sample_rate: {sample_rate}\n")
                f.write(f"# samples: {len(data)}\n")
                f.write(f"# duration_sec: {duration:.3f}\n")
                f.write(f"# channels: {','.join(channel_names)}\n")
                f.write("#\n")

                # Column headers
                if data.ndim > 1:
                    cols = channel_names[:data.shape[1]]
                else:
                    cols = channel_names[:1]
                writer.writerow(["timestamp"] + cols)

                # Data rows
                for i in range(len(data)):
                    ts = float(timestamps[i]) if i < len(timestamps) else 0.0
                    if data.ndim > 1:
                        row = [ts] + [float(v) for v in data[i]]
                    else:
                        row = [ts, float(data[i])]
                    writer.writerow(row)

            return filepath

        # -- Display Settings --

        def update_window(self, value):
            self.stream_panel.update_window(float(value))

        def toggle_auto_scale(self, state):
            auto = bool(state)
            self.amp_spin.setEnabled(not auto)
            if auto:
                self.stream_panel.set_auto_scale(True)
            else:
                profiles = self._per_channel_profiles()
                if profiles:
                    y_ranges = [p["y_range"] for p in profiles]
                    self.stream_panel.set_auto_scale(False, per_channel_amplitudes=y_ranges)
                else:
                    self.stream_panel.set_auto_scale(False, self.amp_spin.value())

        def update_amplitude(self, value):
            if not self.auto_scale_check.isChecked():
                self.stream_panel.set_auto_scale(False, value)

        # -- Logging --

        def log(self, message: str):
            ts = datetime.now().strftime("%H:%M:%S")
            self.log_text.append(f"[{ts}] {message}")
            self.log_text.moveCursor(QTextCursor.MoveOperation.End)
            logger.info(message)

        def append_log(self, message: str):
            self.log_text.append(message)
            self.log_text.moveCursor(QTextCursor.MoveOperation.End)

        # -- Cleanup --

        def closeEvent(self, event):
            self.disconnect_source()
            event.accept()


# =====================================================================
# Main Entry Point
# =====================================================================

def main():
    import argparse

    parser = argparse.ArgumentParser(description="BioRadio Hackathon Control Center")
    parser.add_argument("--port", "-p", default=None,
                        help="BioRadio serial port (e.g., COM9)")
    parser.add_argument("--lsl", default=None,
                        help="Connect via LSL stream name")
    parser.add_argument("--mock", action="store_true",
                        help="Use mock data (no hardware needed)")
    parser.add_argument("--mock-type", default="emg",
                        choices=["emg", "eog", "gsr", "sine"],
                        help="Mock signal type")
    parser.add_argument("--mock-channels", type=int, default=4,
                        help="Number of mock channels")
    parser.add_argument("--mock-rate", type=int, default=250,
                        help="Mock sample rate")
    parser.add_argument("--verbose", "-v", action="store_true")
    args = parser.parse_args()

    # Logging
    level = logging.DEBUG if args.verbose else logging.INFO
    logging.basicConfig(level=level, format="%(asctime)s [%(name)s] %(levelname)s: %(message)s",
                        datefmt="%H:%M:%S")

    if not HAS_GUI:
        print("ERROR: PyQt6 and pyqtgraph required.")
        print("Install: pip install pyqt6 pyqtgraph")
        return 1

    app = QApplication(sys.argv)

    # Create source if specified via CLI
    source = None
    if args.mock:
        source = MockSource(n_channels=args.mock_channels,
                            sample_rate=args.mock_rate,
                            signal_type=args.mock_type)
        source.connect()
    elif args.lsl:
        source = LSLSource(args.lsl)
        source.connect()
    elif args.port:
        source = BioRadioSource(args.port)
        source.connect()

    window = HackathonGUI(source)
    window.show()

    return app.exec()


if __name__ == "__main__":
    sys.exit(main())
