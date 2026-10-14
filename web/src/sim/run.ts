// RunTracker: the scored run on a course (brief §4.5). Pure logic, fed once per control tick, so it is
// unit-tested in Node without MuJoCo.
//
//   ready ──first movement──► running ──finish──► finished
//                                  └──time_limit──► dnf
//
// Gates: a gate is passed when the robot's centre path (previous tick → this tick) crosses the segment
// between its posts in the forward direction (left post on the driver's left). Gates must be taken in
// order: crossing gate k+2 while k is next marks k and k+1 as missed. At the finish, any gate not yet
// passed counts as missed.
//
//   score_time = elapsed + 5 s × collisions + 10 s × missed gates

import type { Pose2D, Status, Twist } from '../protocol/types';
import { dockDefaults, isScored, type Course, type Gate } from './course';

export type RunPhase = 'ready' | 'running' | 'finished' | 'dnf';

export const COLLISION_PENALTY_S = 5;
export const MISSED_GATE_PENALTY_S = 10;
const MOVING = 0.02;          // |v| or |w| above this counts as "moving" (starts the clock)
const STOPPED = 0.05;         // |v| below this counts as stopped (dock)

export interface RunResult {
  course: string;
  completed: boolean;
  elapsed: number;
  score_time: number | null;   // null on DNF
  collisions: number;
  missed_gates: number;
  gates_passed: number;
  path_length: number;
  smoothness: number;          // mean |dw/dt| of the applied yaw rate, rad/s²
  deadman_pct: number;
}

export interface TickInput {
  t: number;          // sim seconds
  dt: number;
  pose: Pose2D;
  vel: Twist;         // measured
  applied: Twist;
  status: Status;
  collisions: number; // running total from the collision counter
}

const cross = (ax: number, ay: number, bx: number, by: number) => ax * by - ay * bx;

/** Does segment p0→p1 cross segment a→b? */
export function segmentsCross(p0: [number, number], p1: [number, number], a: [number, number], b: [number, number]): boolean {
  const r = [p1[0] - p0[0], p1[1] - p0[1]], s = [b[0] - a[0], b[1] - a[1]];
  const den = cross(r[0], r[1], s[0], s[1]);
  if (Math.abs(den) < 1e-12) return false;
  const q = [a[0] - p0[0], a[1] - p0[1]];
  const t = cross(q[0], q[1], s[0], s[1]) / den;
  const u = cross(q[0], q[1], r[0], r[1]) / den;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

/** Unit "forward" direction for a gate: perpendicular to the posts, pointing so `left` is on the left. */
export function gateForward(g: { left: [number, number]; right: [number, number] }): [number, number] {
  const dx = g.left[0] - g.right[0], dy = g.left[1] - g.right[1];
  const n = Math.hypot(dx, dy) || 1;
  return [dy / n, -dx / n];
}

export function crossesForward(p0: [number, number], p1: [number, number], g: { left: [number, number]; right: [number, number] }): boolean {
  if (!segmentsCross(p0, p1, g.left, g.right)) return false;
  const f = gateForward(g);
  return (p1[0] - p0[0]) * f[0] + (p1[1] - p0[1]) * f[1] > 0;
}

const wrap = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

export class RunTracker {
  phase: RunPhase = 'ready';
  nextGate = 0;
  gatesPassed = 0;
  missed = new Set<number>();
  elapsed = 0;
  result: RunResult | null = null;

  private startT = 0;
  private startCollisions = 0;
  private collisions = 0;
  private prev: [number, number] | null = null;
  private pathLength = 0;
  private dwSum = 0;
  private prevW = 0;
  private ticks = 0;
  private deadmanTicks = 0;
  private dockHold = 0;
  private readonly gates: Gate[];

  constructor(readonly course: Course) {
    this.gates = course.gates ?? [];
  }

  get scored(): boolean { return isScored(this.course); }

  reset(): void {
    Object.assign(this, {
      phase: 'ready', nextGate: 0, gatesPassed: 0, missed: new Set<number>(), elapsed: 0, result: null,
      startT: 0, startCollisions: 0, collisions: 0, prev: null, pathLength: 0, dwSum: 0, prevW: 0,
      ticks: 0, deadmanTicks: 0, dockHold: 0,
    });
  }

  /** Advance one control tick. Returns the event names that happened (see sim.ts for the event stream). */
  update(i: TickInput): string[] {
    const ev: string[] = [];
    const p: [number, number] = [i.pose.x, i.pose.y];
    if (!this.scored || this.phase === 'finished' || this.phase === 'dnf') { this.prev = p; return ev; }

    if (this.phase === 'ready') {
      const moving = Math.abs(i.vel.v) > MOVING || Math.abs(i.vel.w) > MOVING || Math.abs(i.applied.v) > MOVING || Math.abs(i.applied.w) > MOVING;
      if (!moving) { this.prev = p; return ev; }
      this.phase = 'running';
      this.startT = i.t - i.dt;
      this.startCollisions = i.collisions;
      this.prevW = i.applied.w;
      ev.push('run_start');
    }

    // running
    this.elapsed = i.t - this.startT;
    this.collisions = i.collisions - this.startCollisions;
    this.ticks++;
    if (i.status === 'deadman') this.deadmanTicks++;
    this.dwSum += Math.abs(i.applied.w - this.prevW) / Math.max(i.dt, 1e-6);
    this.prevW = i.applied.w;
    const prev = this.prev ?? p;
    this.pathLength += Math.hypot(p[0] - prev[0], p[1] - prev[1]);

    // gates (any later gate may be crossed; earlier pending ones become missed)
    for (let k = this.nextGate; k < this.gates.length; k++) {
      if (crossesForward(prev, p, this.gates[k])) {
        for (let j = this.nextGate; j < k; j++) { this.missed.add(j); ev.push(`gate_missed:${j}`); }
        this.gatesPassed++;
        this.nextGate = k + 1;
        ev.push(`gate:${k}`);
        break;
      }
    }

    // finish
    const f = this.course.finish;
    let done = false;
    if (f?.type === 'line') {
      done = crossesForward(prev, p, f);
    } else if (f?.type === 'dock') {
      const d = dockDefaults(f);
      const inside = Math.hypot(p[0] - d.center[0], p[1] - d.center[1]) <= d.tol_m
        && Math.abs(wrap(i.pose.yaw - d.yaw)) <= (d.tol_deg * Math.PI) / 180
        && Math.abs(i.vel.v) < STOPPED;
      this.dockHold = inside ? this.dockHold + i.dt : 0;
      done = this.dockHold >= d.hold_s - 1e-9;
    } else if (!f && this.gates.length && this.nextGate >= this.gates.length) {
      done = true; // gates-only course: finishing the last gate ends the run
    }
    this.prev = p;

    if (done) {
      for (let j = this.nextGate; j < this.gates.length; j++) { this.missed.add(j); ev.push(`gate_missed:${j}`); }
      this.nextGate = this.gates.length;
      this.phase = 'finished';
      this.result = this.makeResult(true);
      ev.push('finish');
    } else if (this.course.time_limit && this.elapsed >= this.course.time_limit) {
      this.phase = 'dnf';
      this.result = this.makeResult(false);
      ev.push('dnf');
    }
    return ev;
  }

  scoreTime(): number {
    return this.elapsed + COLLISION_PENALTY_S * this.collisions + MISSED_GATE_PENALTY_S * this.missed.size;
  }

  private makeResult(completed: boolean): RunResult {
    const r3 = (x: number) => Math.round(x * 1000) / 1000;
    return {
      course: this.course.id,
      completed,
      elapsed: r3(this.elapsed),
      score_time: completed ? r3(this.scoreTime()) : null,
      collisions: this.collisions,
      missed_gates: this.missed.size,
      gates_passed: this.gatesPassed,
      path_length: r3(this.pathLength),
      smoothness: r3(this.ticks ? this.dwSum / this.ticks : 0),
      deadman_pct: r3(this.ticks ? (100 * this.deadmanTicks) / this.ticks : 0),
    };
  }

  /** The `course` block of the protocol state message (null on unscored courses like the sandbox). */
  stateBlock(): { id: string; next_gate: number; gates_passed: number; elapsed: number; done: boolean } | null {
    if (!this.scored) return null;
    return {
      id: this.course.id, next_gate: this.nextGate, gates_passed: this.gatesPassed,
      elapsed: Math.round(this.elapsed * 1000) / 1000, done: this.phase === 'finished' || this.phase === 'dnf',
    };
  }
}
