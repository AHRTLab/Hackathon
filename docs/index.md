---
title: Myo Lever Controller
description: Drive a simulated Clearpath Jackal with one forearm. Best Presentation, AWARE-AI Fall 2026 Hackathon.
hide:
  - navigation
  - toc
---

<!-- budget: 450 words -->

<div class="hero" markdown>

<span class="hero-award">:material-trophy-outline: Best Presentation · AWARE-AI Fall 2026 Hackathon</span>

# Drive a robot with one forearm

A Myo armband reads your arm like a lever: its angle sets speed and steering, and a firm fist brakes.
{ .hero-subtitle }

<div class="hero-buttons" markdown>

[:material-play-circle-outline: Drive it](drive.md){ .md-button .md-button--primary }
[:material-presentation: See the deck](deck/){ .md-button }
[:material-robot-outline: Open the sim](sim/){ .md-button }

</div>

![The browser Jackal sim on the L2 Slalom course: the robot at the start line facing pairs of coloured posts, with the lidar view top right and the course panel bottom right](assets/sim-l2-slalom.png){ .hero-shot width="1280" height="720" }

</div>

<section class="landing-section" markdown>

## What we built

Our team's entry to the AWARE-AI Fall 2026 Hackathon at RIT, October 22-23. Every team got the same
browser sim of a Clearpath Jackal, a command bridge and a Myo armband. The task: turn the armband's
signals into forward speed and turn rate, drive three timed courses, then keep the robot drivable over
a slow, lossy link.

We started with five muscle gestures and a classifier, and it broke as soon as the forearm rolled. So
the controller steers with the armband's motion sensor, which rolling cannot fool, and keeps the muscle
signal for one job: a deliberate fist that brakes. A lidar assist slows before obstacles and nudges you
through a gate you are already aimed at.

</section>

<section class="landing-section" markdown>

## What it did

<div class="stat-grid" markdown>

<div class="stat" markdown>
<span class="stat-value">20.7 s</span>
L1 Gates, median of 4 runs, 0 collisions
</div>

<div class="stat" markdown>
<span class="stat-value">26.6 s</span>
L2 Slalom, median of 6 runs, 0 collisions
</div>

<div class="stat" markdown>
<span class="stat-value">16.3 s</span>
L3 Corridor + Dock, median of 4 runs, 0 collisions
</div>

</div>

All 51 recorded runs finished with no missed gates. A new driver calibrates in about 2.5 minutes with
one command. [All the results, including what did not work →](results.md)

</section>

<section class="landing-section" markdown>

## The team

**AJ Barea**, **Kiransree Vijayakumar** and **Xinyi Liu**. AJ led development and data collection with
Claude Code, wrote the lever controller, the neural-network study and the deck generator, and
published both dataset releases. Xinyi built the gate assist, the sim's lidar minimap, the assist viewer and the pooled
brake model. Jose, Kiran and Xinyi recorded the calibrations for the four-driver study. The sim, the
bridge and the event kit come from the organizers'
[AHRTLab/Hackathon](https://github.com/AHRTLab/Hackathon) repo, which ours forks.

</section>
