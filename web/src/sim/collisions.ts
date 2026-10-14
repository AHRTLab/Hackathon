// Counts collisions between the chassis and anything else it can touch (walls + obstacles).
// A collision is counted when contact with a geom STARTS, after at least `debounceMs` without touching
// that geom, so scraping along a wall counts once rather than 50 times a second.

import type { MjData } from '@mujoco/mujoco';

export class CollisionCounter {
  count = 0;
  private lastTouch = new Map<number, number>(); // geom id → last ms in contact
  private touching = new Set<number>();

  constructor(private chassisGeom: number, private debounceMs = 200) {}

  /** Returns the geoms newly hit this update. */
  update(data: MjData, nowMs: number): number[] {
    const hits: number[] = [];
    const now = new Set<number>();
    const n = data.ncon;
    if (n > 0) {
      const contacts = data.contact;
      try {
        for (let i = 0; i < n; i++) {
          const c = contacts.get(i);
          if (!c) continue;
          const other = c.geom1 === this.chassisGeom ? c.geom2 : c.geom2 === this.chassisGeom ? c.geom1 : -1;
          c.delete();
          if (other >= 0) now.add(other);
        }
      } finally {
        contacts.delete();
      }
    }
    for (const g of now) {
      if (!this.touching.has(g) && nowMs - (this.lastTouch.get(g) ?? -Infinity) >= this.debounceMs) {
        this.count++;
        hits.push(g);
      }
      this.lastTouch.set(g, nowMs);
    }
    this.touching = now;
    return hits;
  }

  isTouching(): boolean { return this.touching.size > 0; }
  reset(): void { this.count = 0; this.lastTouch.clear(); this.touching.clear(); }
}
