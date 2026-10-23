// Minimap (top right): what the lidar sees around the robot, plus the controller's gate assist when it
// sends one. The assist overlay rides on the command message (an `assist` field: robot-frame metres)
// and is drawn only while fresh, so a controller without it just gets the lidar picture.

import type { Sim } from '../sim/sim';
import { el, panel } from './dom';

export interface AssistOverlay {
  posts: [number, number][];      // the detected gate posts
  mid: [number, number];          // its midpoint
  normal: [number, number];       // the crossing direction
  aim: [number, number];          // the aim point on the centreline
  w: number;                      // nudge being applied (rad/s)
  v_cap: number;                  // speed cap (m/s)
  cone_deg?: number;              // acceptance cone half-angle
}

const SIZE = 220, PPM = 36, LIDAR_X = 0.12, HALF_LEN = 0.255, HALF_WID = 0.215;

export class Minimap {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private caption: HTMLDivElement;

  constructor() {
    const p = panel({ right: '12px', top: '12px', minWidth: '0', padding: '8px' }, 'minimap');
    this.canvas = el('canvas');
    this.canvas.width = SIZE; this.canvas.height = SIZE;
    Object.assign(this.canvas.style, { display: 'block', width: `${SIZE}px`, height: `${SIZE}px`, borderRadius: '6px' });
    this.ctx = this.canvas.getContext('2d')!;
    this.caption = el('div', { fontSize: '11px', opacity: '0.8', marginTop: '4px', textAlign: 'center', fontVariantNumeric: 'tabular-nums' }, 'lidar');
    p.append(this.canvas, this.caption);
  }

  // robot frame (x forward, y left) → canvas; robot sits low-centre, forward is up
  private px(x: number, y: number): [number, number] { return [SIZE / 2 - y * PPM, SIZE - 40 - x * PPM]; }

  update(sim: Sim, assist: AssistOverlay | null): void {
    const c = this.ctx;
    c.fillStyle = '#15181d'; c.fillRect(0, 0, SIZE, SIZE);
    const [ox, oy] = this.px(0, 0);
    c.strokeStyle = '#262a31'; c.lineWidth = 1;
    for (let m = 1; m <= 4; m++) { c.beginPath(); c.arc(ox, oy, m * PPM, 0, 2 * Math.PI); c.stroke(); }
    const scan = sim.lastScan;
    if (scan) {
      c.fillStyle = '#78a0c8';
      for (let i = 0; i < scan.ranges.length; i++) {
        const r = scan.ranges[i];
        if (r >= scan.range_max - 1e-3) continue;
        const a = scan.angle_min + i * scan.angle_inc;
        const [x, y] = this.px(LIDAR_X + r * Math.cos(a), r * Math.sin(a));
        if (y > 0 && y < SIZE) c.fillRect(x - 1, y - 1, 2, 2);
      }
    }
    const cone = (assist?.cone_deg ?? 20) * Math.PI / 180;
    c.strokeStyle = '#3a3f48';
    for (const s of [-1, 1]) {
      c.beginPath(); c.moveTo(ox, oy); c.lineTo(...this.px(3 * Math.cos(s * cone), 3 * Math.sin(s * cone))); c.stroke();
    }
    c.strokeStyle = '#d0d0d5'; c.lineWidth = 1.5;
    c.strokeRect(ox - HALF_WID * PPM, oy - HALF_LEN * PPM, 2 * HALF_WID * PPM, 2 * HALF_LEN * PPM);
    c.beginPath(); c.moveTo(ox, oy); c.lineTo(...this.px(0.5, 0)); c.stroke();
    if (assist) {
      const g = '#5adc78';
      c.fillStyle = '#f05a50';
      for (const [x, y] of assist.posts) { const [px, py] = this.px(x, y); c.beginPath(); c.arc(px, py, 4, 0, 2 * Math.PI); c.fill(); }
      const [mx, my] = assist.mid, [nx, ny] = assist.normal, [ax, ay] = assist.aim;
      c.strokeStyle = g; c.lineWidth = 1;
      { const [px, py] = this.px(mx, my); c.beginPath(); c.arc(px, py, 4, 0, 2 * Math.PI); c.stroke(); }
      c.beginPath(); c.moveTo(...this.px(mx - nx * 0.5, my - ny * 0.5)); c.lineTo(...this.px(mx + nx * 0.5, my + ny * 0.5)); c.stroke();
      c.fillStyle = '#ffd23c'; { const [px, py] = this.px(ax, ay); c.beginPath(); c.arc(px, py, 3.5, 0, 2 * Math.PI); c.fill(); }
      // the arc from the robot (tangent to its heading) through the aim point, then straight on
      const k = 2 * ay / Math.max(ax * ax + ay * ay, 1e-6);
      c.strokeStyle = g; c.lineWidth = 2; c.beginPath(); c.moveTo(ox, oy);
      if (Math.abs(k) > 1e-4) {
        const R = 1 / k, sweep = Math.atan2(ax, Math.abs(R) - Math.sign(R) * ay);
        for (let i = 1; i <= 24; i++) { const t = sweep * i / 24; c.lineTo(...this.px(Math.abs(R) * Math.sin(t), R * (1 - Math.cos(t)))); }
      } else c.lineTo(...this.px(ax, ay));
      c.lineTo(...this.px(mx + nx * 0.8, my + ny * 0.8)); c.stroke();
      const dist = Math.hypot(mx, my);
      this.caption.textContent = `gate ${dist.toFixed(1)} m  nudge ${assist.w >= 0 ? '+' : ''}${assist.w.toFixed(2)}  v≤${Math.min(assist.v_cap, 9.9).toFixed(1)}`;
      this.caption.style.color = g;
    } else {
      this.caption.textContent = scan ? 'lidar · no gate assist' : 'lidar';
      this.caption.style.color = '';
    }
  }
}
