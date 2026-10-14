# BioRadio Hackathon 2026 — Goals & Judging Rubric

## Hackathon Overview

**Duration:** 24 hours (start-to-demo)
**Teams:** 5–8 teams of graduate students
**Goal:** Collect biosignal data from the BioRadio, train a real-time ML classifier, and use the classifier output to control a system of your choosing.

## What You Must Deliver

1. **Live Demo** — A working system that reads biosignals from the BioRadio, runs a trained classifier in real-time, and controls something based on the classifier output.
2. **Presentation** — A ~5 minute presentation to the judges explaining your approach, results, and what you learned.

## Hackathon Pipeline

Every team's project follows this pipeline:

```
Biosignals --> Feature Extraction --> ML Classifier --> Control System
 (BioRadio)     (your code)           (trained model)    (your choice)
```

1. **Data Collection** — Use the hackathon GUI to record labeled training data from the BioRadio (EMG, EOG, EEG, GSR, IMU — your choice of signals).
2. **Feature Extraction** — Extract meaningful features from the raw signals (e.g., RMS, frequency bands, zero crossings).
3. **Model Training** — Train a classifier on your features (any framework: scikit-learn, PyTorch, TensorFlow, etc.).
4. **Real-Time Inference** — Run your trained model on live BioRadio data, classifying in real-time.
5. **Control** — Map classifier outputs to actions in a system you choose (robot, game, UI, music, hardware, etc.).

## Requirements

- The classifier **must run in real-time** during the demo (not pre-recorded).
- Data must come from the **BioRadio** (not simulated/mock data for the final demo).
- You must **collect your own training data** (no pre-made datasets).
- Any ML framework and any control target are allowed.

---

## Judging Rubric (100 points total)

### 1. ML Classifier Performance (30 points)

| Score | Criteria |
|-------|----------|
| 25–30 | Classifier is accurate, responsive, and handles edge cases well. Clear train/test methodology with reported metrics (accuracy, confusion matrix, etc.). Model generalizes across users or sessions. |
| 18–24 | Classifier works reliably for the demo. Reasonable accuracy with some metrics reported. May struggle with edge cases. |
| 10–17 | Classifier runs but accuracy is inconsistent. Limited evaluation methodology. Frequent misclassifications during demo. |
| 0–9   | Classifier does not run in real-time, or produces essentially random output. No evaluation metrics presented. |

**Judges will look for:**
- Number of distinct classes the classifier can distinguish
- Reported accuracy / confusion matrix on a held-out test set
- Responsiveness (latency from gesture/signal to classification output)
- How well it handles transitions and resting states
- Feature engineering quality and justification

### 2. Creativity & Novelty (25 points)

| Score | Criteria |
|-------|----------|
| 20–25 | Highly original application or approach. Creative use of biosignals. Solves a compelling problem or demonstrates an innovative interaction paradigm. |
| 14–19 | Interesting application with some novel elements. Good signal/control combination that goes beyond the obvious. |
| 7–13  | Standard application of biosignal control (e.g., basic threshold-based on/off). Functional but predictable. |
| 0–6   | Minimal creative effort. Direct copy of example code with no meaningful extension. |

**Judges will look for:**
- Originality of the control target / application
- Creative combination of multiple signal types
- Novel signal processing or ML approaches
- "Wow factor" — does it make the judges want to try it?

### 3. User Experience & System Design (25 points)

| Score | Criteria |
|-------|----------|
| 20–25 | System is intuitive and enjoyable to use. Clear feedback to the user. Handles errors gracefully. Someone unfamiliar could use it with minimal instruction. |
| 14–19 | System is functional and usable. Some feedback provided. Minor usability issues but overall solid. |
| 7–13  | System works but is confusing or frustrating to use. Little user feedback. Requires significant explanation. |
| 0–6   | System is difficult to use or largely non-functional during demo. No user feedback. |

**Judges will look for:**
- Visual/audio feedback for the user (do they know what state the system is in?)
- Calibration process (is it easy to set up for a new user?)
- Robustness (does it crash or freeze during the demo?)
- Overall polish and completeness of the system

### 4. Presentation Quality (20 points)

| Score | Criteria |
|-------|----------|
| 16–20 | Clear, well-organized presentation. Effectively communicates the problem, approach, results, and lessons learned. Good use of visuals. All team members contribute. |
| 11–15 | Solid presentation that covers the key points. Some areas could be clearer or more concise. |
| 6–10  | Presentation is disorganized or missing key elements. Hard to follow or overly long. |
| 0–5   | Minimal presentation effort. Does not clearly communicate what the team built. |

**Presentation should cover:**
- What problem are you solving / what are you controlling?
- What biosignals did you use and why?
- How did you collect and label your training data?
- What features did you extract and what model did you train?
- What accuracy did you achieve? (Show confusion matrix / metrics)
- Live demo of the system
- What challenges did you face and what would you improve?

---

## Bonus Points (up to +10)

| Bonus | Points |
|-------|--------|
| Multi-modal signals (e.g., EMG + EOG combined) | +3 |
| Cross-user generalization (works on someone who didn't train it) | +3 |
| Adaptive/online learning (model improves during use) | +2 |
| Exceptional technical depth or research contribution | +2 |

---

## Schedule

| Time | Activity |
|------|----------|
| **Kickoff** | Introduction, rules, BioRadio setup, team formation |
| **Hours 1–4** | Explore signals, collect training data, initial prototyping |
| **Hours 5–16** | Development (data collection, feature engineering, model training, control system) |
| **Hours 17–22** | Integration, testing, refinement |
| **Hours 22–23** | Prepare presentations |
| **Hour 24** | Demos & presentations to judges |

## Tips for Success

- **Start collecting data early.** Your ML pipeline is only as good as your training data.
- **Keep your classifier simple at first.** A 2-class SVM that works beats a 10-class deep network that doesn't.
- **Use the GUI's recording feature** to save labeled CSV files for training.
- **Test with mock data first**, then switch to real BioRadio signals.
- **Budget time for integration.** Getting the classifier to run in real-time with your control system always takes longer than expected.
- **Have a backup plan.** If your ambitious approach doesn't work, have a simpler version ready.
