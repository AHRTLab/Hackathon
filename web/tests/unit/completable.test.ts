// Course designs are completable by the reference autopilot strategy, in the real MuJoCo sim.
import { describe, expect, it } from 'vitest';
import { Autopilot } from './autopilot';
import { course, makeSim, run } from './helpers';

describe.each(['L1-gates', 'L2-slalom', 'L3-corridor-dock'])('%s', (id) => {
  it('reference autopilot finishes with no missed gates and no collisions', async () => {
    const sim = await makeSim(course(id));
    const ap = new Autopilot(sim.course);
    const events: string[] = [];
    sim.onEvent((e) => events.push(e));
    let n = 0;
    run(sim, sim.course.time_limit! + 5, (t) => {
      if (sim.run.phase === 'finished' || sim.run.phase === 'dnf') return;
      if (n++ % 2 === 0) sim.gate.ingest({ type: 'cmd', ...ap.step(sim.state()), source: 'autopilot' }, t); // 25 Hz, like a real sender
      else sim.gate.ingest({ type: 'cmd', v: sim.target.v, w: sim.target.w }, t);
    });
    expect(sim.run.phase, `events: ${events.join(' ')}`).toBe('finished');
    expect(sim.run.result).toMatchObject({ completed: true, missed_gates: 0, collisions: 0 });
    console.log(id, JSON.stringify(sim.run.result));
  });
});
