// Telepresence impairment: exact delays on the sim clock, seeded drops, and the sim still driveable.
import { describe, expect, it } from 'vitest';
import type { Cmd } from '../../src/protocol/types';
import { Impairment } from '../../src/sim/impairment';
import { Autopilot } from './autopilot';
import { course, makeSim, run } from './helpers';

const cmd = (v: number): Cmd => ({ type: 'cmd', v, w: 0 });

describe('Impairment', () => {
  it('is a pass-through queue at 0 ms / 0 %', () => {
    const imp = new Impairment();
    expect(imp.active).toBe(false);
    imp.offer(cmd(1), 100);
    expect(imp.release(100).map((r) => r.at)).toEqual([100]);
  });

  it('delays every command by exactly latencyMs, in order', () => {
    const imp = new Impairment();
    imp.configure({ latencyMs: 300 });
    imp.offer(cmd(1), 0);
    imp.offer(cmd(2), 20);
    expect(imp.release(299)).toEqual([]);
    expect(imp.release(300).map((r) => (r.msg as Cmd).v)).toEqual([1]);
    expect(imp.release(320).map((r) => [(r.msg as Cmd).v, r.at])).toEqual([[2, 320]]);
  });

  it('drops about dropPct % with a fixed seed, reproducibly', () => {
    const pattern = (seed: number) => {
      const imp = new Impairment();
      imp.configure({ dropPct: 20, seed });
      return Array.from({ length: 5000 }, (_, i) => imp.offer(cmd(1), i));
    };
    const a = pattern(42);
    const dropped = a.filter((ok) => !ok).length / a.length;
    expect(dropped).toBeGreaterThan(0.18);
    expect(dropped).toBeLessThan(0.22);
    expect(pattern(42)).toEqual(a);          // same seed → same drops
    expect(pattern(7)).not.toEqual(a);
  });

  it('restart clears the queue and counters but keeps the settings', () => {
    const imp = new Impairment();
    imp.configure({ latencyMs: 500, dropPct: 10 });
    imp.offer(cmd(1), 0);
    imp.restart();
    expect(imp.release(10_000)).toEqual([]);
    expect(imp.offered).toBe(0);
    expect(imp.settings()).toMatchObject({ latencyMs: 500, dropPct: 10 });
  });
});

describe('Sim with impairment', () => {
  it('latency shifts the response: nothing moves before latencyMs has passed', async () => {
    const sim = await makeSim(course('L0-sandbox'));
    sim.setImpairment({ latencyMs: 400 });
    run(sim, 0.3, (t) => sim.deliver(cmd(1), t));
    expect(Math.abs(sim.state().pose.x)).toBeLessThan(1e-6);   // still waiting for the first command
    run(sim, 0.6, (t) => sim.deliver(cmd(1), t));
    expect(sim.state().pose.x).toBeGreaterThan(0.05);
  });

  it('knob changes during a scored run wait for the next reset', async () => {
    const sim = await makeSim(course('L1-gates'));
    run(sim, 0.5, (t) => sim.deliver(cmd(0.5), t));             // run starts on first movement
    expect(sim.run.phase).toBe('running');
    expect(sim.setImpairment({ latencyMs: 200 })).toBe(false);
    expect(sim.impairment.latencyMs).toBe(0);
    sim.reset();
    expect(sim.impairment.latencyMs).toBe(200);
  });

  it('500 ms latency: zero-delay tuning circles and DNFs; a gentler driver still finishes, cleanly', async () => {
    const drive = async (vmax: number, wmax: number, kw: number) => {
      const sim = await makeSim(course('L1-gates'));
      sim.setImpairment({ latencyMs: 500 });
      const ap = new Autopilot(sim.course, vmax, wmax, kw);
      let n = 0;
      run(sim, 150, (t) => {
        if (sim.run.phase === 'finished' || sim.run.phase === 'dnf') return;
        sim.deliver({ type: 'cmd', ...(n++ % 2 === 0 ? ap.step(sim.state()) : sim.target), source: 'ap' }, t);
      });
      return sim.run;
    };
    const tuned_for_no_delay = await drive(0.6, 1.5, 2.5);
    expect(tuned_for_no_delay.phase).toBe('dnf');          // overshoots and circles: the telepresence effect
    const gentle = await drive(0.5, 1.0, 0.8);
    expect(gentle.phase).toBe('finished');
    expect(gentle.result).toMatchObject({ collisions: 0, missed_gates: 0, deadman_pct: 0 });
  });
});
