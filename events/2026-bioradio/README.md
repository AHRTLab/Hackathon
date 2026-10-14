# BioRadio Hackathon 2026

Build something that uses your body's signals to control a system. Use the GLNeuroTech BioRadio to capture EMG, EOG, GSR, EEG, or IMU data, train a real-time ML classifier, and use the classifier output to control a system of your choosing.

## Hackathon Goal

Every team follows the same pipeline:

```
Biosignals ──► Feature Extraction ──► ML Classifier ──► Control System
 (BioRadio)       (your code)          (trained model)    (your choice)
```

1. **Collect** labeled training data from the BioRadio using the hackathon GUI
2. **Extract** meaningful features from the raw signals (RMS, frequency bands, etc.)
3. **Train** a classifier on your features (scikit-learn, PyTorch, TensorFlow — any framework)
4. **Classify** live BioRadio data in real-time during your demo
5. **Control** something with the classifier output (robot, game, UI, music, hardware — your choice)

See **[RUBRIC.md](RUBRIC.md)** for the full judging rubric (100 pts + 10 bonus) and schedule.

## Quick Start

### 1. Install Dependencies

```bash
# Option A: Conda (recommended)
conda env create -f environment.yml
conda activate hackathon

# Option B: pip
pip install -r requirements.txt
```

### 2. Launch the GUI

```bash
# With BioRadio connected:
python -m src.hackathon_gui

# Without hardware (mock data for development):
python -m src.hackathon_gui --mock
```

### 3. Connect and Start Streaming

1. Click **Scan Ports** to find your BioRadio
2. Click **Connect**
3. Configure each channel's **signal type** (EMG, EOG, EEG, GSR) using the per-channel dropdowns
4. Click **Apply Config**
5. Click **START** to begin acquisition
6. Check **"Stream to LSL"** to make data available to your scripts

### 4. Receive Data in Your Script

Use Lab Streaming Layer (LSL) to receive the data stream in your own Python script:

```python
from pylsl import StreamInlet, resolve_stream

streams = resolve_stream('type', 'EEG')
inlet = StreamInlet(streams[0])

while True:
    sample, timestamp = inlet.pull_sample()
    # sample is a list of channel values
    # Process, classify, and control here
```

See `examples/` for working demos.

## Project Structure

```
Hackathon-2026/
├── src/
│   ├── hackathon_gui.py         # Main GUI application
│   ├── bioradio.py              # BioRadio device driver
│   └── signal_processing.py     # Filtering & feature extraction
├── examples/
│   ├── 01_connect_and_read.py   # Basic device connection
│   └── 02_stream_to_lsl.py     # Stream data over LSL
├── data/                        # Recorded data (git-ignored)
├── RUBRIC.md                    # Judging rubric & schedule
├── environment.yml              # Conda environment
└── requirements.txt             # pip dependencies
```

## Signal Types & Per-Channel Configuration

Each BioRadio channel can be independently configured for a specific signal type. The GUI provides a per-channel dropdown to select the signal type, which sets the appropriate hardware parameters and display scale.

| Signal | What It Measures | Y-Range | Unit | Bit Res | Coupling |
|--------|-----------------|---------|------|---------|----------|
| **EMG** | Muscle electrical activity | ±5000 | µV | 16-bit | AC |
| **EOG** | Eye movement & blinks | ±3000 | µV | 16-bit | DC |
| **EEG** | Brain electrical activity | ±200 | µV | 24-bit | AC |
| **GSR** | Skin conductance (sweat) | ±25 | µS | 12-bit | DC |

You can mix signal types across channels — for example, Ch1 as EMG, Ch2 as EOG, and Ch3 as EEG — just like in the BioCapture software.

## Architecture: How Data Flows

```
[BioRadio] ──Bluetooth──► [hackathon_gui.py] ──LSL──► [your_script.py]
                                 │                          │
                           Visualize &                Process signals,
                           Record CSV                 train classifier,
                                                     control your system
```

The GUI connects to the BioRadio, displays data in real-time, and optionally streams it over LSL. Your control script connects to that LSL stream and processes the data.

## GUI Features

- **Connection**: Direct serial to BioRadio, LSL stream input, or mock data for development
- **Per-Channel Config**: Set each channel's signal type independently (EMG, EOG, EEG, GSR)
- **Visualization**: Real-time multi-channel plots with per-channel Y-axis scaling and units
- **Recording**: Save data to CSV with team/label metadata
- **LSL Output**: Stream data to your scripts via Lab Streaming Layer

## Signal Processing Utilities

`src/signal_processing.py` provides ready-to-use functions:

```python
from src.signal_processing import (
    # Filters
    bandpass_filter,     # Keep frequencies in a range
    lowpass_filter,      # Remove high-frequency noise
    highpass_filter,     # Remove DC offset / drift
    notch_filter,        # Remove 60 Hz power line noise

    # EMG
    rectify,             # Full-wave rectification
    envelope,            # Signal envelope extraction
    rms,                 # Root Mean Square amplitude
    compute_emg_features,# Feature extraction for classification
    process_emg,         # Complete EMG pipeline

    # GSR
    process_gsr,         # Tonic/phasic decomposition
    detect_scr_peaks,    # Skin conductance response detection

    # EOG
    process_eog,         # EOG filtering + derivative
    detect_blinks,       # Blink detection
    detect_saccades,     # Saccade detection

    # IMU
    compute_orientation, # Pitch/roll from accelerometer
    compute_magnitude,   # Vector magnitude

    # Utilities
    normalize,           # Scale to [0,1] or [-1,1]
    moving_average,      # Simple smoothing
    threshold_crossing,  # Find when signal crosses a value
    map_range,           # Map value between ranges
)
```

## BioRadio Setup

### Hardware
1. Power on the BioRadio (hold button until LED flashes)
2. Pair via Bluetooth on your computer
3. Connect electrodes to the desired input channels

### Platform Notes

| Platform | Connection |
|----------|-----------|
| **Windows** | Bluetooth creates two COM ports. The GUI auto-detects the correct one. |
| **macOS** | macOS Sonoma (14+) has issues with BT serial. Use LSL to stream from a Windows machine. |
| **Linux** | Standard rfcomm serial ports. |

## Tips for Success

- **Start collecting data early.** Your ML pipeline is only as good as your training data.
- **Keep your classifier simple at first.** A 2-class SVM that works beats a 10-class deep network that doesn't.
- **Use mock mode** (`--mock`) to develop your signal processing and control logic without hardware.
- **Configure signal types per channel** to get correct display scaling and hardware settings.
- **Record calibration data**: Record baseline + activation data to tune your thresholds.
- **Filter your signals**: Raw biosignals are noisy — always filter before feature extraction.
- **Budget time for integration.** Getting the classifier to run in real-time with your control system always takes longer than expected.
- **Have a backup plan.** If your ambitious approach doesn't work, have a simpler version ready.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "No BioRadio ports found" | Make sure device is on and paired via Bluetooth |
| "Write timeout" | You're on the wrong COM port. Try the other one. |
| No data in plots | Check that you clicked START after connecting |
| LSL stream not found | Make sure the GUI is running with "Stream to LSL" checked |
| Noisy signal | Apply bandpass + notch filter. Check electrode contact. |
| macOS can't connect | Use LSL to stream from a Windows machine |
