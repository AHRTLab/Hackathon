// RunTracker scoring rules, on hand-made courses (pure logic, no MuJoCo).
import { describe, expect, it } from 'vitest';
import type { Course } from '../../src/sim/course';
import { crossesForward, RunTracker, segmentsCross, type TickInput } from '../../src/sim/run';

const DT = 0.02;
const base = (over: Partial<Course> = {}): Course => ({
  id: 'T', name: 'T', arena: { size: [20, 10] }, start: { x: 0, y: 0, yaw: 0 }, obstacles: [],
  gates: [
    { left: [2, 1], right: [2, -1] },
    { left: [4, 1], right: [4, -1] },
    { left: [6, 1], right: [6, -1] },
  ],
  finish: { type: 'line', left: [8, 2], right: [8, -2] }, time_limit: 60, ...over,
});

/** Drive straight along +x at v from x0 to x1 (y fixed), feeding the tracker every tick. */
function drive(run: RunTracker, x0: number, x1: number, y = 0, v = 1, collisions = () => 0, t0 = 0) {
  const ev: string[] = [];
  let t = t0, x = x0;
  const step = v * DT;
  while ((step > 0 ? x < x1 : x > x1) && run.phase !== 'finished' && run.phase !== 'dnf') {
    x += step; t += DT;
    const i: TickInput = { t, dt: DT, pose: { x, y, yaw: 0 }, vel: { v, w: 0 }, applied: { v, w: 0 }, status: 'ok', collisions: collisions() };
    ev.push(...run.update(i));
  }
  return { ev, t };
}

describe('geometry', () => {
  it('segment crossing and forward direction', () => {
    expect(segmentsCross([0, 0], [2, 0], [1, -1], [1, 1])).toBe(true);
    expect(segmentsCross([0, 0], [0.5, 0], [1, -1], [1, 1])).toBe(false);
    const g = { left: [1, 1] as [number, number], right: [1, -1] as [number, number] };
    expect(crossesForward([0, 0], [2, 0], g)).toBe(true);   // +x with left at +y: forward
    expect(crossesForward([2, 0], [0, 0], g)).toBe(false);  // backwards does not count
  });
});

describe('RunTracker', () => {
  it('waits in ready until the robot moves; sandbox (no gates/finish) is unscored', () => {
    const r = new RunTracker(base());
    expect(r.update({ t: 0.02, dt: DT, pose: { x: 0, y: 0, yaw: 0 }, vel: { v: 0, w: 0 }, applied: { v: 0, w: 0 }, status: 'idle', collisions: 0 })).toEqual([]);
    expect(r.phase).toBe('ready');
    const sandbox = new RunTracker(base({ gates: [], finish: null }));
    expect(sandbox.scored).toBe(false);
    expect(sandbox.stateBlock()).toBeNull();
  });

  it('clean run: all gates in order, finish, score = elapsed', () => {
    const r = new RunTracker(base());
    const { ev } = drive(r, 0, 9);
    expect(ev).toEqual(['run_start', 'gate:0', 'gate:1', 'gate:2', 'finish']);
    expect(r.phase).toBe('finished');
    expect(r.result!.missed_gates).toBe(0);
    expect(r.result!.elapsed).toBeCloseTo(8, 1);
    expect(r.result!.score_time).toBeCloseTo(r.result!.elapsed, 6);
    expect(r.result!.path_length).toBeCloseTo(8, 1);
    expect(r.stateBlock()).toMatchObject({ next_gate: 3, gates_passed: 3, done: true });
  });

  it('skipping a gate marks it missed (+10 s); collisions add 5 s each', () => {
    const r = new RunTracker(base());
    let hits = 0;
    drive(r, 0, 3, 0, 1, () => hits);          // gate 0
    hits = 2;                                   // two collisions during the run
    const { ev } = drive(r, 3, 5, 3, 1, () => hits, 3); // go around gate 1 (y=3 is outside its posts)
    expect(ev).not.toContain('gate:1');
    const fin = drive(r, 5, 9, 0, 1, () => hits, 5);
    expect(fin.ev).toContain('gate_missed:1');
    expect(fin.ev).toContain('gate:2');
    expect(r.result).toMatchObject({ missed_gates: 1, collisions: 2, gates_passed: 2 });
    expect(r.result!.score_time).toBeCloseTo(r.result!.elapsed + 10 + 10, 6);
  });

  it('unpassed gates count as missed at the finish', () => {
    const r = new RunTracker(base());
    drive(r, 0, 1);
    const { ev } = drive(r, 1, 9, 5, 1, () => 0, 1);    // completely outside the gates; finish line is ±2…
    expect(r.phase).not.toBe('finished');               // …so y=5 misses the finish too
    expect(ev).toEqual([]);
    const r2 = new RunTracker(base({ finish: { type: 'line', left: [8, 6], right: [8, -6] } }));
    const out = drive(r2, 0, 9, 5);
    expect(out.ev.filter((e) => e.startsWith('gate_missed'))).toHaveLength(3);
    expect(r2.result!.missed_gates).toBe(3);
  });

  it('DNF at the time limit (no score)', () => {
    const r = new RunTracker(base({ time_limit: 2 }));
    const { ev } = drive(r, 0, 9, 0, 0.5);
    expect(ev.at(-1)).toBe('dnf');
    expect(r.phase).toBe('dnf');
    expect(r.result).toMatchObject({ completed: false, score_time: null });
  });

  it('dock finish needs position, heading and stillness held for hold_s', () => {
    const c = base({ gates: [], finish: { type: 'dock', center: [3, 0], yaw: 0, tol_m: 0.15, tol_deg: 10, hold_s: 1 } });
    const r = new RunTracker(c);
    drive(r, 0, 3);                                    // arrive at the dock centre
    const tick = (t: number, yaw: number, v = 0) => r.update({ t, dt: DT, pose: { x: 3, y: 0.1, yaw }, vel: { v, w: 0 }, applied: { v, w: 0 }, status: 'ok', collisions: 0 });
    let t = 3;
    for (let k = 0; k < 60; k++) tick((t += DT), 0.3);  // 17° off → never counts
    expect(r.phase).toBe('running');
    for (let k = 0; k < 40; k++) tick((t += DT), 0.1);  // aligned but only 0.8 s
    expect(r.phase).toBe('running');
    const ev: string[] = [];
    for (let k = 0; k < 15; k++) ev.push(...tick((t += DT), 0.1));
    expect(ev).toContain('finish');
    expect(r.result!.completed).toBe(true);
  });
});
