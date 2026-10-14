// TypeScript twin of events/2026-aware-ai-jackal/examples/autopilot_gates.py (same waypoint + control
// rules), so course designs can be checked for completability in Node in a few hundred milliseconds.
import type { Course } from '../../src/sim/course';
import { dockDefaults } from '../../src/sim/course';
import { gateForward } from '../../src/sim/run';
import type { State } from '../../src/protocol/types';

type P = [number, number];
const wrap = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));
const clamp = (x: number, m: number) => Math.max(-m, Math.min(m, x));

export function waypoints(c: Course): P[] {
  const wp: P[] = [];
  if (c.path?.length) wp.push(...c.path);
  else for (const g of c.gates ?? []) {
    const m: P = [(g.left[0] + g.right[0]) / 2, (g.left[1] + g.right[1]) / 2];
    const f = gateForward(g);
    wp.push([m[0] - 0.7 * f[0], m[1] - 0.7 * f[1]], m, [m[0] + 0.5 * f[0], m[1] + 0.5 * f[1]]);
  }
  const fin = c.finish;
  if (fin?.type === 'line') {
    const m: P = [(fin.left[0] + fin.right[0]) / 2, (fin.left[1] + fin.right[1]) / 2];
    const f = gateForward(fin);
    wp.push([m[0] + 0.6 * f[0], m[1] + 0.6 * f[1]]);
  } else if (fin?.type === 'dock') {
    const d = dockDefaults(fin);
    wp.push([d.center[0] - Math.cos(d.yaw) * 0.9, d.center[1] - Math.sin(d.yaw) * 0.9]);
  }
  return wp;
}

export class Autopilot {
  private wp: P[];
  private i = 0;
  constructor(private c: Course, private vmax = 1.2, private wmax = 2.5) {
    this.wp = waypoints(c);
    const cap = c.speed_caps;
    if (cap?.v) this.vmax = Math.min(this.vmax, cap.v);
    if (cap?.w) this.wmax = Math.min(this.wmax, cap.w);
  }

  step(s: State): { v: number; w: number } {
    const { x, y, yaw } = s.pose;
    const fin = this.c.finish;
    if (this.i >= this.wp.length && fin?.type === 'dock') {           // final dock approach
      const d = dockDefaults(fin);
      const dx = d.center[0] - x, dy = d.center[1] - y, dist = Math.hypot(dx, dy);
      if (dist > 0.05) {
        const a = wrap(Math.atan2(dy, dx) - yaw);
        if (Math.abs(a) > 0.5) return { v: 0, w: clamp(2.0 * a, this.wmax) };
        return { v: Math.min(this.vmax, 0.25, 0.8 * dist) * Math.cos(a), w: clamp(2.0 * a, this.wmax) };
      }
      const e = wrap(d.yaw - yaw);
      return { v: 0, w: Math.abs(e) > 0.03 ? clamp(2.0 * e, this.wmax) : 0 };
    }
    if (this.i >= this.wp.length) return { v: this.vmax * 0.5, w: 0 }; // past the last point: keep going over the line
    const [tx, ty] = this.wp[this.i];
    const dx = tx - x, dy = ty - y;
    if (Math.hypot(dx, dy) < 0.3) { this.i++; return this.step(s); }
    const a = wrap(Math.atan2(dy, dx) - yaw);
    const w = clamp(2.5 * a, this.wmax);
    const v = Math.abs(a) > 0.8 ? 0 : this.vmax * Math.cos(a) ** 2;
    return { v, w };
  }
}
