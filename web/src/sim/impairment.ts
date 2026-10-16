// Telepresence impairment (brief §4.4 AWARE-AI knobs): every command on its way to the robot can be
// delayed by `latencyMs` and dropped with probability `dropPct` %. It sits between all inputs (bridge
// and local keyboard / gamepad, so baselines are comparable) and the CommandGate. Delayed commands are
// released on the sim's control tick, so timing is exact and testable on the sim clock. Drops use a
// seeded RNG, so a condition can be replayed (the seed is logged with each run).

import type { Cmd, Reset } from '../protocol/types';

export interface ImpairmentSettings { latencyMs: number; dropPct: number; seed: number }

/** mulberry32: tiny, fast, seedable. */
function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class Impairment {
  latencyMs = 0;
  dropPct = 0;
  seed = 1;
  offered = 0;
  dropped = 0;
  private rand = rng(1);
  private queue: { due: number; msg: Cmd | Reset }[] = [];

  get active(): boolean { return this.latencyMs > 0 || this.dropPct > 0; }

  configure(s: Partial<ImpairmentSettings>): void {
    this.latencyMs = Math.max(0, Math.min(5000, s.latencyMs ?? this.latencyMs));
    this.dropPct = Math.max(0, Math.min(100, s.dropPct ?? this.dropPct));
    if (s.seed !== undefined) this.seed = s.seed >>> 0;
    this.restart();
  }

  /** New run: same settings, fresh RNG from the seed, empty queue, zeroed counters. */
  restart(): void {
    this.rand = rng(this.seed);
    this.queue = [];
    this.offered = this.dropped = 0;
  }

  /** A command arrives at `nowMs`. Returns false if it was dropped. */
  offer(msg: Cmd | Reset, nowMs: number): boolean {
    this.offered++;
    if (this.dropPct > 0 && this.rand() * 100 < this.dropPct) {
      this.dropped++;
      return false;
    }
    this.queue.push({ due: nowMs + this.latencyMs, msg });
    return true;
  }

  /** Commands whose delay has elapsed, in arrival order (call once per control tick). */
  release(nowMs: number): { msg: Cmd | Reset; at: number }[] {
    let n = 0;
    while (n < this.queue.length && this.queue[n].due <= nowMs) n++;
    return this.queue.splice(0, n).map((q) => ({ msg: q.msg, at: q.due }));
  }

  settings(): ImpairmentSettings { return { latencyMs: this.latencyMs, dropPct: this.dropPct, seed: this.seed }; }
}
