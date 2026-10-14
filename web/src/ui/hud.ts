// HUD: applied v / w bars, status pill, collisions, last action, active source, timer.

import { LIMITS } from '../protocol/limits';
import type { Status } from '../protocol/types';
import type { Sim } from '../sim/sim';
import { el, panel } from './dom';

const STATUS_STYLE: Record<Status, [string, string]> = {
  ok: ['OK', '#2e7d32'], idle: ['IDLE', '#455a64'], deadman: ['DEADMAN', '#e65100'],
  estop: ['E-STOP', '#c62828'], finished: ['FINISHED', '#1565c0'],
};

function bar(label: string): { row: HTMLDivElement; fill: HTMLDivElement; val: HTMLSpanElement } {
  const row = el('div', { display: 'flex', alignItems: 'center', gap: '8px', margin: '4px 0' });
  const track = el('div', { position: 'relative', flex: '1', height: '10px', borderRadius: '5px', background: '#2a2e35', overflow: 'hidden' });
  const mid = el('div', { position: 'absolute', left: '50%', top: '0', bottom: '0', width: '1px', background: '#596070' });
  const fill = el('div', { position: 'absolute', top: '0', bottom: '0', background: '#4f8cff' });
  track.append(mid, fill);
  const val = el('span', { width: '64px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' });
  row.append(el('b', { width: '14px' }, label), track, val);
  return { row, fill, val };
}

export class Hud {
  private pill: HTMLSpanElement;
  private v = bar('v');
  private w = bar('w');
  private info: HTMLDivElement;

  constructor() {
    const p = panel({ left: '12px', bottom: '12px', width: '260px' }, 'hud');
    const head = el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' });
    this.pill = el('span', { padding: '2px 10px', borderRadius: '10px', fontWeight: '700', letterSpacing: '.04em' });
    this.pill.id = 'hud-status';
    head.append(el('b', {}, 'Jackal'), this.pill);
    this.info = el('div', { opacity: '0.85', marginTop: '6px', lineHeight: '1.5', fontVariantNumeric: 'tabular-nums' });
    p.append(head, this.v.row, this.w.row, this.info);
  }

  update(sim: Sim, source: string | null): void {
    const [label, color] = STATUS_STYLE[sim.status];
    this.pill.textContent = label;
    this.pill.style.background = color;
    const set = (b: ReturnType<typeof bar>, x: number, max: number, unit: string) => {
      const f = Math.max(-1, Math.min(1, x / max)) / 2;
      Object.assign(b.fill.style, f >= 0 ? { left: '50%', width: `${f * 100}%` } : { left: `${(0.5 + f) * 100}%`, width: `${-f * 100}%` });
      b.val.textContent = `${x >= 0 ? '+' : ''}${x.toFixed(2)} ${unit}`;
    };
    set(this.v, sim.applied.v, LIMITS.V_MAX, 'm/s');
    set(this.w, sim.applied.w, LIMITS.W_MAX, 'r/s');
    const s = sim.state();
    this.info.innerHTML =
      `source <b>${source ?? '—'}</b><br>` +
      `collisions <b id="hud-collisions">${s.collisions}</b> · t ${s.t.toFixed(1)} s<br>` +
      `action ${sim.gate.stats.lastAction ?? '—'} · pose (${s.pose.x.toFixed(2)}, ${s.pose.y.toFixed(2)}, ${(s.pose.yaw * 180 / Math.PI).toFixed(0)}°)`;
  }
}
