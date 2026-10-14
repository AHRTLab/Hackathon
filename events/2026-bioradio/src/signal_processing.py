"""
signal_processing.py - Common signal processing utilities for BioRadio data.

Provides filtering, feature extraction, and processing pipelines for:
- EMG (Electromyography)
- EOG (Electrooculography)
- GSR/EDA (Galvanic Skin Response / Electrodermal Activity)
- EEG (Electroencephalography)
- IMU (Inertial Measurement Unit)

Usage:
    from src.signal_processing import bandpass_filter, notch_filter, envelope

Author: BioRobotics Hackathon 2026
"""

import numpy as np
from scipy import signal
from typing import Tuple
import warnings


# =====================================================================
# General Filters
# =====================================================================

def bandpass_filter(data: np.ndarray,
                   low_freq: float = 20.0,
                   high_freq: float = 450.0,
                   sample_rate: float = 250.0,
                   order: int = 4) -> np.ndarray:
    """
    Apply a bandpass filter.

    Args:
        data: Input signal (1D or 2D with time along axis 0)
        low_freq: Low cutoff frequency in Hz
        high_freq: High cutoff frequency in Hz
        sample_rate: Sampling rate in Hz
        order: Filter order

    Returns:
        Filtered signal
    """
    nyquist = sample_rate / 2
    low = low_freq / nyquist
    high = min(high_freq / nyquist, 0.99)

    if low >= high:
        warnings.warn(f"Invalid frequency range [{low_freq}, {high_freq}] for Fs={sample_rate}")
        return data

    b, a = signal.butter(order, [low, high], btype='bandpass')

    if data.ndim == 1:
        if len(data) < 3 * max(len(b), len(a)):
            return data
        return signal.filtfilt(b, a, data)
    else:
        return np.apply_along_axis(
            lambda x: signal.filtfilt(b, a, x) if len(x) > 3 * max(len(b), len(a)) else x,
            0, data
        )


def lowpass_filter(data: np.ndarray,
                   cutoff: float = 5.0,
                   sample_rate: float = 250.0,
                   order: int = 4) -> np.ndarray:
    """
    Apply a low-pass filter.

    Args:
        data: Input signal
        cutoff: Cutoff frequency in Hz
        sample_rate: Sampling rate in Hz
        order: Filter order

    Returns:
        Filtered signal
    """
    nyquist = sample_rate / 2
    normalized = min(cutoff / nyquist, 0.99)

    b, a = signal.butter(order, normalized, btype='lowpass')

    if data.ndim == 1:
        if len(data) < 3 * max(len(b), len(a)):
            return data
        return signal.filtfilt(b, a, data)
    else:
        return np.apply_along_axis(
            lambda x: signal.filtfilt(b, a, x) if len(x) > 3 * max(len(b), len(a)) else x,
            0, data
        )


def highpass_filter(data: np.ndarray,
                    cutoff: float = 0.5,
                    sample_rate: float = 250.0,
                    order: int = 4) -> np.ndarray:
    """
    Apply a high-pass filter.

    Args:
        data: Input signal
        cutoff: Cutoff frequency in Hz
        sample_rate: Sampling rate in Hz
        order: Filter order

    Returns:
        Filtered signal
    """
    nyquist = sample_rate / 2
    normalized = cutoff / nyquist

    if normalized >= 1.0:
        return data

    b, a = signal.butter(order, normalized, btype='highpass')

    if data.ndim == 1:
        if len(data) < 3 * max(len(b), len(a)):
            return data
        return signal.filtfilt(b, a, data)
    else:
        return np.apply_along_axis(
            lambda x: signal.filtfilt(b, a, x) if len(x) > 3 * max(len(b), len(a)) else x,
            0, data
        )


def notch_filter(data: np.ndarray,
                 notch_freq: float = 60.0,
                 quality_factor: float = 30.0,
                 sample_rate: float = 250.0) -> np.ndarray:
    """
    Apply a notch filter to remove power line interference (60 Hz US, 50 Hz EU).

    Args:
        data: Input signal
        notch_freq: Frequency to remove in Hz
        quality_factor: Higher = narrower notch
        sample_rate: Sampling rate in Hz

    Returns:
        Filtered signal
    """
    if notch_freq >= sample_rate / 2:
        return data

    b, a = signal.iirnotch(notch_freq, quality_factor, sample_rate)

    if data.ndim == 1:
        return signal.filtfilt(b, a, data)
    else:
        return np.apply_along_axis(lambda x: signal.filtfilt(b, a, x), 0, data)


# =====================================================================
# EMG Processing
# =====================================================================

def rectify(data: np.ndarray) -> np.ndarray:
    """Full-wave rectification (absolute value)."""
    return np.abs(data)


def envelope(data: np.ndarray,
             cutoff_freq: float = 6.0,
             sample_rate: float = 250.0,
             order: int = 4) -> np.ndarray:
    """
    Extract the signal envelope using rectification + low-pass filtering.

    Args:
        data: Input signal
        cutoff_freq: Smoothing cutoff in Hz (3-10 Hz typical for EMG)
        sample_rate: Sampling rate in Hz
        order: Filter order

    Returns:
        Signal envelope
    """
    rectified = rectify(data)
    return lowpass_filter(rectified, cutoff_freq, sample_rate, order)


def rms(data: np.ndarray, window_size: int = 100) -> np.ndarray:
    """
    Compute Root Mean Square over a sliding window.

    Args:
        data: Input signal
        window_size: Window size in samples

    Returns:
        RMS values
    """
    squared = data ** 2
    window = np.ones(window_size) / window_size

    if data.ndim == 1:
        mean_squared = np.convolve(squared, window, mode='same')
    else:
        mean_squared = np.apply_along_axis(
            lambda x: np.convolve(x, window, mode='same'), 0, squared
        )

    return np.sqrt(np.maximum(mean_squared, 0))


def compute_emg_features(data: np.ndarray, sample_rate: float = 250.0) -> dict:
    """
    Compute common EMG features for classification.

    Args:
        data: Input EMG signal (1D)
        sample_rate: Sampling rate in Hz

    Returns:
        Dictionary of feature names to values
    """
    features = {}

    # Time domain
    features['rms'] = np.sqrt(np.mean(data ** 2))
    features['mav'] = np.mean(np.abs(data))
    features['wl'] = np.sum(np.abs(np.diff(data)))
    features['zcr'] = len(np.where(np.diff(np.signbit(data)))[0]) / len(data)

    diff_sign = np.diff(np.sign(np.diff(data)))
    features['ssc'] = np.sum(diff_sign != 0) / len(data)
    features['iemg'] = np.sum(np.abs(data))

    # Frequency domain
    nperseg = min(256, len(data))
    if nperseg > 4:
        freqs, psd = signal.welch(data, fs=sample_rate, nperseg=nperseg)
        total_power = np.sum(psd)
        if total_power > 0:
            features['mean_freq'] = np.sum(freqs * psd) / total_power
            cumsum = np.cumsum(psd)
            features['median_freq'] = freqs[np.searchsorted(cumsum, cumsum[-1] / 2)]
            features['peak_freq'] = freqs[np.argmax(psd)]
            features['total_power'] = total_power

    return features


def process_emg(data: np.ndarray,
                sample_rate: float = 250.0,
                bandpass: Tuple[float, float] = (20, 450),
                notch: float = 60.0,
                envelope_cutoff: float = 6.0) -> dict:
    """
    Complete EMG processing pipeline.

    Args:
        data: Raw EMG signal
        sample_rate: Sampling rate in Hz
        bandpass: (low, high) cutoff frequencies
        notch: Notch frequency (0 to skip)
        envelope_cutoff: Envelope smoothing cutoff

    Returns:
        Dict with 'raw', 'filtered', 'rectified', 'envelope', 'rms' keys
    """
    result = {'raw': data.copy()}

    data = data - np.mean(data)

    filtered = bandpass_filter(data, bandpass[0], bandpass[1], sample_rate)
    if notch > 0 and notch < sample_rate / 2:
        filtered = notch_filter(filtered, notch, sample_rate=sample_rate)
    result['filtered'] = filtered

    result['rectified'] = rectify(filtered)
    result['envelope'] = envelope(filtered, envelope_cutoff, sample_rate)

    window = max(1, int(sample_rate * 0.1))
    result['rms'] = rms(filtered, window)

    return result


# =====================================================================
# GSR / EDA Processing
# =====================================================================

def process_gsr(data: np.ndarray,
                sample_rate: float = 250.0,
                lowpass_cutoff: float = 5.0) -> dict:
    """
    Process GSR/EDA signal.

    GSR is a slow-changing DC signal (< 5 Hz). Processing involves:
    1. Low-pass filter to remove noise
    2. Tonic/phasic decomposition (SCL and SCR separation)

    Args:
        data: Raw GSR signal
        sample_rate: Sampling rate in Hz
        lowpass_cutoff: Cutoff for noise removal

    Returns:
        Dict with 'raw', 'filtered', 'tonic' (SCL), 'phasic' (SCR) keys
    """
    result = {'raw': data.copy()}

    filtered = lowpass_filter(data, lowpass_cutoff, sample_rate)
    result['filtered'] = filtered

    # Simple tonic/phasic decomposition using very low-pass filter
    tonic = lowpass_filter(filtered, 0.05, sample_rate, order=2)
    result['tonic'] = tonic  # Skin Conductance Level (SCL)
    result['phasic'] = filtered - tonic  # Skin Conductance Response (SCR)

    return result


def detect_scr_peaks(phasic: np.ndarray,
                     sample_rate: float = 250.0,
                     threshold: float = 0.01,
                     min_distance_s: float = 1.0) -> list:
    """
    Detect Skin Conductance Response (SCR) peaks.

    Args:
        phasic: Phasic GSR component
        sample_rate: Sampling rate in Hz
        threshold: Minimum peak amplitude
        min_distance_s: Minimum distance between peaks in seconds

    Returns:
        List of peak indices
    """
    min_distance = int(min_distance_s * sample_rate)
    peaks, properties = signal.find_peaks(
        phasic, height=threshold, distance=min_distance
    )
    return peaks.tolist()


# =====================================================================
# EOG Processing
# =====================================================================

def process_eog(data: np.ndarray,
                sample_rate: float = 250.0,
                bandpass: Tuple[float, float] = (0.1, 35.0)) -> dict:
    """
    Process EOG signal for eye movement detection.

    EOG signals are in the 0.1-35 Hz range. Saccades appear as
    step-like changes, and blinks as sharp positive/negative spikes.

    Args:
        data: Raw EOG signal
        sample_rate: Sampling rate in Hz
        bandpass: (low, high) cutoff frequencies

    Returns:
        Dict with 'raw', 'filtered', 'derivative' keys
    """
    result = {'raw': data.copy()}

    filtered = bandpass_filter(data, bandpass[0], bandpass[1], sample_rate, order=2)
    result['filtered'] = filtered

    # Derivative for detecting saccades and blinks
    dt = 1.0 / sample_rate
    derivative = np.gradient(filtered, dt)
    result['derivative'] = derivative

    return result


def detect_blinks(eog_data: np.ndarray,
                  sample_rate: float = 250.0,
                  threshold_factor: float = 3.0) -> list:
    """
    Detect eye blinks from EOG data.

    Blinks appear as large biphasic deflections. This uses a simple
    threshold-based approach on the signal derivative.

    Args:
        eog_data: Filtered EOG signal
        sample_rate: Sampling rate in Hz
        threshold_factor: Multiple of std for peak detection

    Returns:
        List of blink onset indices
    """
    dt = 1.0 / sample_rate
    derivative = np.gradient(eog_data, dt)

    threshold = np.std(derivative) * threshold_factor
    min_distance = int(0.3 * sample_rate)  # Min 300ms between blinks

    peaks, _ = signal.find_peaks(
        np.abs(derivative), height=threshold, distance=min_distance
    )
    return peaks.tolist()


def detect_saccades(eog_data: np.ndarray,
                    sample_rate: float = 250.0,
                    velocity_threshold: float = None) -> list:
    """
    Detect saccadic eye movements from EOG data.

    Saccades appear as rapid step-like changes in the EOG signal.

    Args:
        eog_data: Filtered EOG signal
        sample_rate: Sampling rate in Hz
        velocity_threshold: Velocity threshold (auto-computed if None)

    Returns:
        List of (onset_index, direction) tuples where direction is 'left' or 'right'
    """
    dt = 1.0 / sample_rate
    velocity = np.gradient(eog_data, dt)

    if velocity_threshold is None:
        velocity_threshold = np.std(velocity) * 2.0

    saccades = []
    min_distance = int(0.1 * sample_rate)

    pos_peaks, _ = signal.find_peaks(velocity, height=velocity_threshold, distance=min_distance)
    neg_peaks, _ = signal.find_peaks(-velocity, height=velocity_threshold, distance=min_distance)

    for idx in pos_peaks:
        saccades.append((idx, 'right'))
    for idx in neg_peaks:
        saccades.append((idx, 'left'))

    saccades.sort(key=lambda x: x[0])
    return saccades


# =====================================================================
# IMU Processing
# =====================================================================

def compute_orientation(accel: np.ndarray) -> Tuple[np.ndarray, np.ndarray]:
    """
    Compute pitch and roll from accelerometer data.

    Args:
        accel: Nx3 array of [ax, ay, az] in g's

    Returns:
        (pitch, roll) arrays in degrees
    """
    ax, ay, az = accel[:, 0], accel[:, 1], accel[:, 2]

    pitch = np.degrees(np.arctan2(ax, np.sqrt(ay**2 + az**2)))
    roll = np.degrees(np.arctan2(ay, np.sqrt(ax**2 + az**2)))

    return pitch, roll


def compute_magnitude(data: np.ndarray) -> np.ndarray:
    """
    Compute vector magnitude from multi-axis data.

    Args:
        data: Nx3 (or NxM) array

    Returns:
        Magnitude array
    """
    return np.sqrt(np.sum(data**2, axis=1))


# =====================================================================
# Utility Functions
# =====================================================================

def normalize(data: np.ndarray,
              method: str = 'minmax') -> np.ndarray:
    """
    Normalize signal to [0, 1] or [-1, 1].

    Args:
        data: Input signal
        method: 'minmax' for [0,1], 'zscore' for zero-mean unit-variance,
                'symmetric' for [-1, 1]

    Returns:
        Normalized signal
    """
    if method == 'minmax':
        dmin, dmax = np.min(data), np.max(data)
        if dmax - dmin == 0:
            return np.zeros_like(data)
        return (data - dmin) / (dmax - dmin)
    elif method == 'zscore':
        std = np.std(data)
        if std == 0:
            return np.zeros_like(data)
        return (data - np.mean(data)) / std
    elif method == 'symmetric':
        abs_max = np.max(np.abs(data))
        if abs_max == 0:
            return np.zeros_like(data)
        return data / abs_max
    else:
        raise ValueError(f"Unknown method '{method}'")


def moving_average(data: np.ndarray, window: int = 10) -> np.ndarray:
    """
    Simple moving average filter.

    Args:
        data: Input signal
        window: Window size in samples

    Returns:
        Smoothed signal
    """
    if window < 2:
        return data
    kernel = np.ones(window) / window
    if data.ndim == 1:
        return np.convolve(data, kernel, mode='same')
    else:
        return np.apply_along_axis(
            lambda x: np.convolve(x, kernel, mode='same'), 0, data
        )


def threshold_crossing(data: np.ndarray,
                       threshold: float,
                       direction: str = 'rising') -> np.ndarray:
    """
    Find indices where signal crosses a threshold.

    Args:
        data: Input signal
        threshold: Threshold value
        direction: 'rising', 'falling', or 'both'

    Returns:
        Array of crossing indices
    """
    above = data > threshold
    crossings = np.diff(above.astype(int))

    if direction == 'rising':
        return np.where(crossings == 1)[0]
    elif direction == 'falling':
        return np.where(crossings == -1)[0]
    else:
        return np.where(crossings != 0)[0]


def map_range(value: float,
              in_min: float, in_max: float,
              out_min: float, out_max: float,
              clip: bool = True) -> float:
    """
    Map a value from one range to another (like Arduino's map()).

    Args:
        value: Input value
        in_min, in_max: Input range
        out_min, out_max: Output range
        clip: Clip output to [out_min, out_max]

    Returns:
        Mapped value
    """
    if in_max - in_min == 0:
        return out_min

    mapped = (value - in_min) / (in_max - in_min) * (out_max - out_min) + out_min

    if clip:
        mapped = max(out_min, min(out_max, mapped))

    return mapped
