import { describe, expect, it } from 'vitest';
import { LIMITS } from '../../src/protocol/limits';
import type { Cmd } from '../../src/protocol/types';
import { CommandGate } from '../../src/sim/commandGate';

const DT = 1 / LIMITS.CONTROL_HZ;
const cmd = (v: number, w = 0, extra: Partial<Cmd> = {}): Cmd => ({ type: 'cmd', v, w, ...extra });

/** Drive the gate for `seconds`, optionally ingesting `c` before each tick. Returns the last tick. */
function drive(g: CommandGate, t0: number, seconds: number, c?: Cmd) {
  let out = g.tick(t0, 0);
  const n = Math.round(seconds / DT);
  for (let i = 1; i <= n; i++) {
    const now = t0 + i * DT * 1000;
    if (c) g.ingest(c, now);
    out = g.tick(now, DT);
  }
  return { out, t: t0 + n * DT * 1000 };
}

describe('CommandGate', () => {
  it('starts idle and stopped', () => {
    expect(new CommandGate().tick(0, DT)).toMatchObject({ status: 'idle', applied: { v: 0, w: 0 } });
  });

  it('clamps to V_MAX / W_MAX', () => {
    const g = new CommandGate();
    const { out } = drive(g, 0, 3, cmd(10, -100));
    expect(out.applied.v).toBeCloseTo(LIMITS.V_MAX, 6);
    expect(out.applied.w).toBeCloseTo(-LIMITS.W_MAX, 6);
  });

  it('course caps can only lower the limits', () => {
    const g = new CommandGate(LIMITS, { v: 0.5, w: 99 });
    expect(g.vMax).toBe(0.5);
    expect(g.wMax).toBe(LIMITS.W_MAX);
  });

  it('ramps up at A_V_MAX (0 → 0.5 m/s takes 0.25 s)', () => {
    const g = new CommandGate();
    expect(drive(g, 0, 0.2, cmd(0.5)).out.applied.v).toBeCloseTo(0.4, 6);
    expect(drive(g, 200, 0.06, cmd(0.5)).out.applied.v).toBeCloseTo(0.5, 6);
  });

  it('deadman: stale after DEADMAN_MS → status deadman, brakes to < 0.05 m/s within 400 ms', () => {
    const g = new CommandGate();
    const { t } = drive(g, 0, 1, cmd(0.5));
    // sender goes silent
    let s = g.tick(t + 240, 0.24);
    expect(s.status).toBe('ok');
    s = g.tick(t + LIMITS.DEADMAN_MS + 10, 0.02);
    expect(s.status).toBe('deadman');
    expect(s.target).toEqual({ v: 0, w: 0 });
    let now = t + LIMITS.DEADMAN_MS + 10;
    while (now < t + 400) { now += 20; s = g.tick(now, 0.02); }
    expect(Math.abs(s.applied.v)).toBeLessThan(0.05);
  });

  it('a clean stop then silence is idle, not deadman', () => {
    const g = new CommandGate();
    const { t } = drive(g, 0, 1, cmd(0.5));
    const { t: t2 } = drive(g, t, 0.5, cmd(0));
    expect(g.tick(t2 + 1000, 0.02).status).toBe('idle');
  });

  it('estop latches (instant stop) until reset, and survives later move commands', () => {
    const g = new CommandGate();
    const { t } = drive(g, 0, 1, cmd(1));
    g.ingest(cmd(1, 0, { estop: true }), t + 20);
    let s = g.tick(t + 20, DT);
    expect(s).toMatchObject({ status: 'estop', applied: { v: 0, w: 0 } });
    const r = drive(g, t + 20, 0.5, cmd(1));
    expect(r.out.status).toBe('estop');
    g.ingest({ type: 'reset' }, r.t);
    s = drive(g, r.t, 0.1, cmd(1)).out;
    expect(s.status).toBe('ok');
    expect(s.applied.v).toBeGreaterThan(0);
  });

  it('latest wins within one tick', () => {
    const g = new CommandGate();
    g.ingest(cmd(1), 0); g.ingest(cmd(-1), 1); g.ingest(cmd(0.3), 2);
    expect(g.tick(10, 1).target.v).toBe(0.3);
  });

  it('reversing brakes through zero at A_V_BRAKE', () => {
    const g = new CommandGate();
    const { t } = drive(g, 0, 1, cmd(1));
    g.ingest(cmd(-1), t + 20);
    expect(g.tick(t + 20, DT).applied.v).toBeCloseTo(1 - LIMITS.A_V_BRAKE * DT, 6);
  });

  it('records source, action and echo times', () => {
    const g = new CommandGate();
    g.ingest(cmd(0, 0, { source: 'team3', action: 'horn', t: 12.5, tb: 7, ingress: 'udp' }), 0);
    expect(g.stats).toMatchObject({ lastSource: 'team3', lastAction: 'horn', lastEchoT: 12.5, lastEchoTb: 7, lastIngress: 'udp' });
  });
});
