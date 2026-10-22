# AWARE-AI Hackathon 2026: Goals & Judging Rubric

Matches the kickoff deck ([`presentations/AWARE-AI_Hackathon_Kickoff.pptx`](presentations/AWARE-AI_Hackathon_Kickoff.pptx)).
How to build and drive: [`STUDENT_GUIDE.md`](STUDENT_GUIDE.md).

## Hackathon Overview

**Duration:** 24 hours (start-to-demo)
**Goal:** Read muscle activity from a Myo armband, turn it into forward speed and turn rate `(v, w)`, and
drive a simulated Clearpath Jackal through timed courses. Then keep it drivable when the link to the
robot is slow and lossy.

## What You Must Deliver

1. **Judged Runs**: your controller, driven by a teammate wearing the Myo, on courses L1–L3, plus one
   run under a degraded link (see [Judged runs](#judged-runs)).
2. **Presentation**: a ~5 minute presentation to the judges explaining your approach, results and what
   you learned.

## Hackathon Pipeline

```
Myo armband  -->  Your controller  -->  Command bridge  -->  Jackal sim
(EMG + IMU)       (features, model,     ((v, w) at 20 Hz)    (courses, lidar,
                   logic)                                     score)
```

1. **Stream**: `myo_lsl_publisher.py` sends `Myo_EMG` + `Myo_IMU` to LSL over the laptop's Bluetooth.
2. **Look & record**: `lsl-web-viewer` shows the signals and records labeled training takes.
3. **Features & model**: RMS, MAV, zero crossings, …, then a classifier or a proportional mapping.
4. **Controller**: copy `controller_template.py`, fill in `my_input()` and `step()` to return `(v, w)`.
5. **Drive**: through `jackal-bridge` into the sim, which scores every run.

## Requirements

- **A person drives with the Myo** (EMG and/or IMU). No keyboard or gamepad in judged runs.
- **Everything runs live**, in real time, through `jackal-bridge`.
- **Assistance is welcome** (e.g. the lidar keeps you off walls), **but no autopilot or pre-planned
  route**: the driver must be in control. Submitting `autopilot_gates.py` or anything like it scores zero
  for Driving Performance.
- **Any language, any ML framework**: the bridge speaks plain JSON (`protocol/PROTOCOL.md`).
- The controller must obey the protocol rules: deadman 250 ms, limits v ≤ 2.0 m/s and w ≤ 4.0 rad/s, one
  driver at a time, e-stop.

---

## How a Run Is Scored (by the sim)

**score = time + 5 s × collisions + 10 s × missed gates** (lower is better)

- The clock starts when the robot first moves.
- Gates must be taken in order (the next one glows yellow), with the left post on your left.
- Finish: cross the line (L3: stop inside the dock for 1 s).
- Running out of time (L1/L2: 120 s, L3: 150 s) is a **DNF**.

The sim logs every run. The **Runs CSV** (button on the page) is the official record.

## Judged Runs

Run on the judging laptop, with the team's controller and their driver wearing the Myo.

1. **Clean link**: L1 Gates, L2 Slalom, L3 Corridor + Dock. **Up to 3 attempts per course; the best
   score per course counts.** The team may recalibrate between courses.
2. **Degraded link**: one run on L1 opened with
   `?course=L1-gates&latency=300&drop=10&seed=1` (300 ms latency, 10 % packet drop; the HUD shows
   `⏱ 300 ms · 10 % drop`). Up to 2 attempts; the best counts.
3. Judges enter the team id on the page, then download the **Runs CSV** at the end. It records each
   run's score, collisions, missed gates and the link condition.

---

## Judging Rubric (100 points total)

### 1. Driving Performance (30 points)

| Score | Criteria |
|-------|----------|
| 25–30 | Finishes L1–L3 with competitive scores, few collisions and no missed gates. Smooth, deliberate control. Still finishes L1 under the degraded link with a modest score increase. |
| 18–24 | Finishes most courses with reasonable scores. Some collisions, occasional oscillation or deadman stops. Degraded-link run finishes, but much slower. |
| 10–17 | Finishes only some courses, or with heavy penalties. Control is jerky or inconsistent between attempts. Fails under the degraded link. |
| 0–9   | Cannot complete a course, does not respond reliably to the driver, or breaks the requirements (autopilot, keyboard). |

**Judges will look for:**
- The sim's score on L1–L3 (time + collision and gate penalties)
- Completing courses at all: a slow finish beats a DNF
- Smooth, deliberate control: few deadman stops, no oscillation
- Consistency: repeatable runs, not one lucky one
- How much the score degrades under latency / drop

### 2. Creativity & Novelty (25 points)

| Score | Criteria |
|-------|----------|
| 20–25 | Highly original mapping from muscles to motion. Creative use of EMG/IMU, or assistance that cleverly helps without taking over. Makes the judges want to try it. |
| 14–19 | Interesting approach with some novel elements that go beyond the obvious mapping. |
| 7–13  | Standard approach (e.g. a fixed threshold per gesture). Functional but predictable. |
| 0–6   | Minimal creative effort. A copy of `myo_emg_example.py` or the template with no meaningful extension. |

**Judges will look for:**
- Original mapping from muscles to motion
- Proportional speed, gestures, IMU steering, …
- Smart assistance (lidar) that keeps the human in charge
- "Wow factor"

### 3. Control & User Experience (25 points)

| Score | Criteria |
|-------|----------|
| 20–25 | Easy to learn: a new driver is driving in minutes. Quick calibration. Clear feedback, so the driver always knows what the robot will do. Fails safe when the signal is lost. |
| 14–19 | Usable after a short explanation. Some feedback. Minor usability issues. |
| 7–13  | Works, but confusing or tiring to drive. Little feedback. Long or fragile calibration. |
| 0–6   | Hard to drive or largely non-functional. No feedback. Doesn't stop safely when something goes wrong. |

**Judges will look for:**
- Easy to learn: a new driver is up in minutes
- Quick calibration for a new user
- Clear feedback: the driver knows what it will do
- Fails safe: stops when the signal is lost (Myo disconnects, the band moves, the classifier is unsure)

### 4. Presentation Quality (20 points)

| Score | Criteria |
|-------|----------|
| 16–20 | Clear, well-organized presentation. Effectively communicates the approach, results and lessons learned. Good use of visuals. All team members contribute. |
| 11–15 | Solid presentation that covers the key points. Some areas could be clearer or more concise. |
| 6–10  | Disorganized or missing key elements. Hard to follow or overly long. |
| 0–5   | Minimal effort. Does not clearly communicate what the team built. |

**Presentation should cover:**
- How does a driver control the robot? (gestures, proportional, IMU, assistance)
- What signals and features did you use, and why? What did the signals tell you?
- How did you collect training data and calibrate (if you used a model)?
- Results: your scores on L1–L3 and under the degraded link (Runs CSV, traces)
- What broke, what you'd improve, and what you learned

---

## Bonus Points (up to +10)

| Bonus | Points |
|-------|--------|
| Robust under a degraded link (300 ms latency, 10 % drop) | +3 |
| Cross-user: a new driver, calibrated in ≤ 2 min | +3 |
| Multi-modal (EMG + IMU) or shared-control assistance | +2 |
| Exceptional technical depth | +2 |

Bonus points are awarded on top of the 100-point base score by the judges.

---

## Schedule

| When | Activity |
|------|----------|
| **Thursday 10/22, 4:00 pm** | Kickoff: intro, install check, first drive |
| **Friday 8:30 am** | Breakfast, hacking starts |
| **Friday 12:00 pm** | Lunch |
| **Friday 5:00 pm** | Hacking ends · judged runs · dinner |
| **Friday 5:00–6:30 pm** | Presentations |

## Tips for Success

- **Start with the fake Myo.** `fake_myo_lsl.py` lets you build the whole pipeline without the armband.
- **Record training data early.** `lsl-web-viewer` saves labeled takes as CSV.
- **Simple first.** Two reliable commands beat six flaky ones.
- **Always send at 20 Hz**, or the deadman stops you. Resend the last value if nothing changed.
- **Turn the latency slider on early.** Don't discover it at judging.
- **Test with a teammate** who didn't calibrate it.
- **At the end of the day**, turn the Myo off: `myo_check.py --off`.
