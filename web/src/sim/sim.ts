// Sim: the fixed-step simulation core. DOM-free, so the same code runs in the browser and in Node tests.
//
//   advance(dtS) steps sim time in 2 ms physics steps. Every 20 ms (CONTROL_HZ) it runs a control tick:
//     onTick hooks (local input → gate.ingest) → gate.tick → applyTwist → collisions.
//   Every 50 ms (STATE_HZ) it emits a protocol `state` message (with the lidar scan and course progress)
//   to onState listeners (the bridge client).
//   Discrete events (run_start, gate:<k>, gate_missed:<k>, collision, deadman, estop, finish, dnf,
//   action:<x>) go to onEvent listeners as they happen; the bridge forwards them to LSL JackalEvents.
//
// Time: `clock()` is the wall-clock used for command freshness (deadman). The browser passes
// performance.now(). Tests pass a clock tied to sim time, so they run as fast as the CPU allows.

import type { MjData, MjModel } from '@mujoco/mujoco';
import { LIMITS } from '../protocol/limits';
import type { State, Status, Twist } from '../protocol/types';
import { CollisionCounter } from './collisions';
import { CommandGate } from './commandGate';
import type { Course } from './course';
import { Lidar, type Scan } from './lidar';
import { RunTracker } from './run';
import { applyTwist, readPose, readVel, resolveDriveIds, setPose, type DriveIds } from './drive';
import { compileScene, type Mj, type ModelFiles } from './mujoco';

export interface JackalDims { wheel_radius_m: number; track_m: number }

export interface SimOptions {
  clock?: () => number;
  maxStepsPerAdvance?: number;
}

export class Sim {
  readonly gate: CommandGate;
  readonly ids: DriveIds;
  readonly collisions: CollisionCounter;
  readonly run: RunTracker;
  readonly lidar: Lidar;
  lastScan: Scan | null = null;
  readonly controlDt = 1 / LIMITS.CONTROL_HZ;
  readonly stateDt = 1 / LIMITS.STATE_HZ;

  status: Status = 'idle';
  applied: Twist = { v: 0, w: 0 };
  target: Twist = { v: 0, w: 0 };
  time = 0; // sim seconds since last reset

  private clock: () => number;
  private physicsDt: number;
  private stepsPerControl: number;
  private controlAcc = 0;
  private stateAcc = 0;
  private maxSteps: number;
  private tickHooks: ((nowMs: number) => void)[] = [];
  private stateListeners: ((s: State) => void)[] = [];
  private eventListeners: ((name: string, t: number) => void)[] = [];
  private lastStatus: Status = 'idle';
  private lastActionCount = 0;

  private constructor(
    readonly mj: Mj, readonly model: MjModel, readonly data: MjData, readonly course: Course, opts: SimOptions,
    dims: JackalDims,
  ) {
    this.clock = opts.clock ?? (() => performance.now());
    this.maxSteps = opts.maxStepsPerAdvance ?? 100; // 0.2 s of physics per frame at most (background tabs)
    this.physicsDt = model.opt.timestep;
    this.stepsPerControl = Math.max(1, Math.round(this.controlDt / this.physicsDt));
    this.gate = new CommandGate(LIMITS, course.speed_caps);
    this.ids = resolveDriveIds(mj, model, dims);
    this.collisions = new CollisionCounter(this.ids.chassisGeom);
    this.run = new RunTracker(course);
    this.lidar = new Lidar(mj, model, data);
    this.reset();
  }

  static create(mj: Mj, files: ModelFiles, course: Course, dims: JackalDims, opts: SimOptions = {}): Sim {
    const { model, data } = compileScene(mj, files, course);
    return new Sim(mj, model, data, course, opts, dims);
  }

  /** Robot back to the start pose; counters cleared. The e-stop latch survives (clear it explicitly). */
  reset(): void {
    this.mj.mj_resetData(this.model, this.data);
    setPose(this.data, this.ids, this.course.start);
    this.mj.mj_forward(this.model, this.data);
    this.gate.resetMotion();
    this.collisions.reset();
    this.run.reset();
    this.lastScan = null;
    this.lastActionCount = this.gate.stats.actionCount;
    this.applied = { v: 0, w: 0 };
    this.target = { v: 0, w: 0 };
    this.status = this.gate.isEstopped() ? 'estop' : 'idle';
    this.time = 0;
    this.controlAcc = 0;
    this.stateAcc = 0;
  }

  onTick(fn: (nowMs: number) => void): void { this.tickHooks.push(fn); }
  onState(fn: (s: State) => void): void { this.stateListeners.push(fn); }
  onEvent(fn: (name: string, t: number) => void): void { this.eventListeners.push(fn); }

  private emit(name: string): void {
    for (const fn of this.eventListeners) fn(name, +this.time.toFixed(3));
  }

  /** Advance by dtS seconds of sim time (fixed physics steps; leftover time carries to the next call). */
  advance(dtS: number): void {
    this.controlAcc += dtS;
    let budget = this.maxSteps;
    while (this.controlAcc >= this.controlDt && budget >= this.stepsPerControl) {
      this.controlAcc -= this.controlDt;
      this.controlTick();
      for (let i = 0; i < this.stepsPerControl; i++) this.mj.mj_step(this.model, this.data);
      budget -= this.stepsPerControl;
      this.time += this.controlDt;
      const hits = this.collisions.update(this.data, this.time * 1000);
      for (let k = 0; k < hits.length; k++) this.emit('collision');
      for (const e of this.run.update({
        t: this.time, dt: this.controlDt, pose: readPose(this.data, this.ids), vel: readVel(this.data, this.ids),
        applied: this.applied, status: this.status, collisions: this.collisions.count,
      })) this.emit(e);
      this.stateAcc += this.controlDt;
      if (this.stateAcc >= this.stateDt - 1e-9) {
        this.stateAcc -= this.stateDt;
        this.lastScan = this.lidar.scan();
        const s = this.state();
        for (const fn of this.stateListeners) fn(s);
      }
    }
    if (budget < this.stepsPerControl) this.controlAcc = Math.min(this.controlAcc, this.controlDt); // drop backlog
  }

  private controlTick(): void {
    const now = this.clock();
    for (const fn of this.tickHooks) fn(now);
    const out = this.gate.tick(now, this.controlDt);
    this.applied = out.applied;
    this.target = out.target;
    this.status = out.status;
    if (this.status !== this.lastStatus && (this.status === 'deadman' || this.status === 'estop')) this.emit(this.status);
    this.lastStatus = this.status;
    const st = this.gate.stats;
    if (st.actionCount !== this.lastActionCount) {
      this.lastActionCount = st.actionCount;
      this.emit(`action:${st.lastAction}`);
      if (st.lastAction === 'restart' || st.lastAction === 'start') { this.reset(); return; } // hands-free restart
    }
    applyTwist(this.data, this.ids, this.applied);
  }

  state(): State {
    return {
      type: 'state',
      t: +this.time.toFixed(3),
      pose: readPose(this.data, this.ids),
      vel: readVel(this.data, this.ids),
      cmd_applied: { ...this.applied },
      cmd_echo_t: this.gate.stats.lastEchoT,
      status: this.run.phase === 'finished' ? 'finished' : this.status,
      collisions: this.collisions.count,
      ...(this.lastScan ? { scan: this.lastScan } : {}),
      course: this.run.stateBlock(),
    };
  }
}
