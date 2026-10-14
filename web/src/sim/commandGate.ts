// CommandGate: the sim's authoritative command rules (brief §3.2). Everything that wants to move the robot,
// whether a bridge command or local keyboard/gamepad input, goes through ingest(), and the control loop
// reads tick() once per 20 ms control step. No DOM or MuJoCo dependency, so it is unit-tested in isolation.
//
//   clamp     |v| <= vMax, |w| <= wMax (protocol limits, optionally lowered by a course)
//   deadman   no valid command for DEADMAN_MS → target 0 (decelerating under the braking limit)
//   accel     applied ramps toward target: A_*_MAX when speeding up, A_*_BRAKE when slowing / reversing
//   estop     latched by any command with estop:true; applied drops to 0 instantly until reset()
//   rate      latest-wins: only the newest command since the previous tick matters

import { LIMITS, type Limits } from '../protocol/limits';
import { clampCmd } from '../protocol/validate';
import type { Cmd, Reset, Status, Twist } from '../protocol/types';

export interface GateTick {
  target: Twist;
  applied: Twist;
  status: Status;
}

export interface GateStats {
  received: number;
  lastSource: string | null;
  lastIngress: string | null;
  lastAction: string | null;
  lastEchoT: number | null;
  lastEchoTb: number | null;
}

function ramp(cur: number, target: number, accel: number, brake: number, dt: number): number {
  if (cur !== 0 && Math.sign(target) !== Math.sign(cur)) {
    // Reversing or stopping: brake toward zero (never overshoot it within one tick).
    const next = cur - Math.sign(cur) * brake * dt;
    return Math.sign(next) !== Math.sign(cur) ? 0 : next;
  }
  const limit = (Math.abs(target) < Math.abs(cur) ? brake : accel) * dt;
  return cur + Math.max(-limit, Math.min(limit, target - cur));
}

export class CommandGate {
  readonly limits: Limits;
  vMax: number;
  wMax: number;

  private latest: Cmd | null = null;      // newest valid command (latest-wins)
  private lastValidMs = -Infinity;
  private estopped = false;
  private applied: Twist = { v: 0, w: 0 };
  private everCommanded = false;
  readonly stats: GateStats = {
    received: 0, lastSource: null, lastIngress: null, lastAction: null, lastEchoT: null, lastEchoTb: null,
  };

  constructor(limits: Limits = LIMITS, caps?: { v?: number | null; w?: number | null } | null) {
    this.limits = limits;
    this.vMax = limits.V_MAX;
    this.wMax = limits.W_MAX;
    this.setCaps(caps);
  }

  /** Courses may only LOWER the protocol limits. */
  setCaps(caps?: { v?: number | null; w?: number | null } | null): void {
    this.vMax = Math.min(this.limits.V_MAX, caps?.v ?? Infinity);
    this.wMax = Math.min(this.limits.W_MAX, caps?.w ?? Infinity);
  }

  ingest(msg: Cmd | Reset, nowMs: number): void {
    if (msg.type === 'reset') { this.estopped = false; return; }
    const c = clampCmd(msg, this.vMax, this.wMax);
    this.latest = c;
    this.lastValidMs = nowMs;
    this.everCommanded = true;
    this.stats.received++;
    this.stats.lastSource = c.source ?? c.ingress ?? null;
    this.stats.lastIngress = c.ingress ?? null;
    if (c.action) this.stats.lastAction = c.action;
    if (c.t !== undefined) this.stats.lastEchoT = c.t;
    if (c.tb !== undefined) this.stats.lastEchoTb = c.tb;
    if (c.estop) this.estopped = true;
  }

  estop(): void { this.estopped = true; }
  reset(): void { this.estopped = false; }
  isEstopped(): boolean { return this.estopped; }
  msSinceLastCmd(nowMs: number): number { return nowMs - this.lastValidMs; }

  /** Forget motion state (robot pose reset). Keeps the e-stop latch. */
  resetMotion(): void {
    this.latest = null;
    this.lastValidMs = -Infinity;
    this.applied = { v: 0, w: 0 };
    this.everCommanded = false;
  }

  tick(nowMs: number, dtS: number): GateTick {
    const L = this.limits;
    const fresh = this.latest !== null && nowMs - this.lastValidMs <= L.DEADMAN_MS;
    let target: Twist = fresh ? { v: this.latest!.v, w: this.latest!.w } : { v: 0, w: 0 };
    let status: Status;

    if (this.estopped) {
      target = { v: 0, w: 0 };
      this.applied = { v: 0, w: 0 };
      return { target, applied: { ...this.applied }, status: 'estop' };
    }

    this.applied = {
      v: ramp(this.applied.v, target.v, L.A_V_MAX, L.A_V_BRAKE, dtS),
      w: ramp(this.applied.w, target.w, L.A_W_MAX, L.A_W_BRAKE, dtS),
    };

    if (fresh) status = 'ok';
    else if (!this.everCommanded) status = 'idle';
    // Stale: "deadman" if the last order was to move (link lost mid-drive) or we're still braking;
    // "idle" if the sender's last word was a clean stop.
    else if (this.latest && (this.latest.v !== 0 || this.latest.w !== 0)) status = 'deadman';
    else status = this.applied.v !== 0 || this.applied.w !== 0 ? 'deadman' : 'idle';

    return { target, applied: { ...this.applied }, status };
  }
}
