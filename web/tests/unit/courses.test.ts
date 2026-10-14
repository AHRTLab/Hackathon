// Every shipped course compiles in MuJoCo, the start pose is collision-free, and the lidar sees what
// it should.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { course, makeSim, ROOT, run } from './helpers';

const index = JSON.parse(readFileSync(resolve(ROOT, 'web/public/courses/index.json'), 'utf8'));

describe.each(index.courses.map((c: { id: string }) => c.id))('course %s', (id: string) => {
  it('compiles, starts clear of obstacles, and reports course + scan in state', async () => {
    const sim = await makeSim(course(id));
    run(sim, 0.3);
    const s = sim.state();
    expect(s.collisions).toBe(0);
    expect(s.pose.x).toBeCloseTo(sim.course.start.x, 3);
    expect(s.scan?.ranges).toHaveLength(180);
    expect(s.scan!.ranges.every((r) => r > 0.05 && r <= 10)).toBe(true);
    if (sim.run.scored) expect(s.course).toMatchObject({ id, next_gate: 0, done: false });
    else expect(s.course).toBeNull();
  });
});

describe('lidar', () => {
  it('measures the L0 box straight ahead and walls all around', async () => {
    const sim = await makeSim(course('L0-sandbox'));
    run(sim, 0.2);
    const r = sim.lastScan!.ranges;
    // beam 90 points straight ahead (angle_min + 90·inc ≈ 0). Box near face at x = 2.3; lidar site at x = +0.12.
    expect(r[90]).toBeCloseTo(2.3 - 0.12, 1);
    expect(Math.min(...r)).toBeGreaterThan(0.5);
    expect(r[0]).toBeLessThan(10);                              // right side wall (y = -5) is in range
  });
});
