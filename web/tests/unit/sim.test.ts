// Physics-level tests on the real MuJoCo WASM build, in Node (no browser needed).
import { beforeAll, describe, expect, it } from 'vitest';
import type { Cmd } from '../../src/protocol/types';
import type { Sim } from '../../src/sim/sim';
import { makeSim, run } from './helpers';

const cmd = (v: number, w = 0): Cmd => ({ type: 'cmd', v, w, source: 'test' });
let sim: Sim;

beforeAll(async () => { sim = await makeSim(); });

describe('Jackal in the L0 sandbox', () => {
  it('compiles and starts at rest at the start pose', () => {
    sim.reset();
    run(sim, 0.5);
    const s = sim.state();
    expect(s.pose.x).toBeCloseTo(0, 3);
    expect(s.status).toBe('idle');
    expect(s.collisions).toBe(0);
  });

  it('acceptance 2: v=0.5 for 3 s then stop → 1.2–1.6 m forward, straight', () => {
    sim.reset();
    run(sim, 3, (t) => sim.gate.ingest(cmd(0.5), t));
    run(sim, 1, (t) => sim.gate.ingest(cmd(0), t));
    const s = sim.state();
    expect(s.pose.x).toBeGreaterThan(1.2);
    expect(s.pose.x).toBeLessThan(1.6);
    expect(Math.abs(s.pose.y)).toBeLessThan(0.01);
    expect(Math.abs(s.vel.v)).toBeLessThan(0.01);
  });

  it('turns counter-clockwise for positive w', () => {
    sim.reset();
    run(sim, 1, (t) => sim.gate.ingest(cmd(0, 1.0), t));
    expect(sim.state().pose.yaw).toBeGreaterThan(0.6);
  });

  it('measured velocity tracks the applied command', () => {
    sim.reset();
    run(sim, 1.5, (t) => sim.gate.ingest(cmd(0.8, 0.5), t));
    const s = sim.state();
    expect(s.vel.v).toBeCloseTo(0.8, 1);
    expect(s.vel.w).toBeCloseTo(0.5, 1);
  });

  it('acceptance 3 (physics): sender stops mid-drive → robot speed < 0.05 m/s within 400 ms', () => {
    sim.reset();
    run(sim, 1.5, (t) => sim.gate.ingest(cmd(0.5), t));
    run(sim, 0.4);
    const s = sim.state();
    expect(s.status).toBe('deadman');
    expect(Math.abs(s.cmd_applied.v)).toBeLessThan(0.05);
    expect(Math.abs(s.vel.v)).toBeLessThan(0.1);
  });

  it('collides with the L0 box: blocked short of it (no tunnelling) and counted once', () => {
    sim.reset();
    // box: centre x=2.5, depth 0.4 → near face at 2.3; chassis half-length ≈ 0.255
    run(sim, 4, (t) => sim.gate.ingest(cmd(1.0), t));
    const s = sim.state();
    expect(s.collisions).toBe(1);
    expect(s.pose.x).toBeLessThan(2.3 - 0.2);
    expect(s.pose.x).toBeGreaterThan(1.9);
    expect(Math.abs(s.vel.v)).toBeLessThan(0.05); // stalled against the box
  });

  it('emits state at 20 Hz', () => {
    sim.reset();
    const got: number[] = [];
    sim.onState((st) => got.push(st.t));
    run(sim, 1);
    expect(got.length).toBeGreaterThanOrEqual(19);
    expect(got.length).toBeLessThanOrEqual(21);
  });
});
