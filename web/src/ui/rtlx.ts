// NASA-RTLX workload form (adapted from the telepresence repo's extras/rtlx.ts). Six dimensions rated
// 0–100; RTLX = their unweighted mean ("Raw TLX"). Performance is anchored Perfect → Failure so that, like
// the others, higher = more workload. Optional: shown after each finish / DNF when the session has
// "ask workload" switched on.

import { button, el } from './dom';

export const RTLX_DIMS = [
  { key: 'mental', label: 'Mental demand', lo: 'Very low', hi: 'Very high' },
  { key: 'physical', label: 'Physical demand', lo: 'Very low', hi: 'Very high' },
  { key: 'temporal', label: 'Temporal demand (time pressure)', lo: 'Very low', hi: 'Very high' },
  { key: 'performance', label: 'Performance (how well you did)', lo: 'Perfect', hi: 'Failure' },
  { key: 'effort', label: 'Effort', lo: 'Very low', hi: 'Very high' },
  { key: 'frustration', label: 'Frustration', lo: 'Very low', hi: 'Very high' },
] as const;
export type RtlxKey = (typeof RTLX_DIMS)[number]['key'];
export type RtlxScores = Record<RtlxKey, number> & { rtlx: number };

export function rtlxScore(ratings: Record<RtlxKey, number>): RtlxScores {
  const vals = RTLX_DIMS.map((d) => ratings[d.key]);
  return { ...ratings, rtlx: Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 10) / 10 };
}

export class RtlxForm {
  private overlay: HTMLDivElement;
  private title: HTMLDivElement;
  private sliders = new Map<RtlxKey, HTMLInputElement>();
  private done: ((s: RtlxScores | null) => void) | null = null;

  constructor() {
    this.overlay = el('div', {
      position: 'fixed', inset: '0', zIndex: '30', display: 'none', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.55)',
    });
    this.overlay.id = 'rtlx';
    const card = el('div', {
      width: '440px', maxWidth: '92vw', maxHeight: '88vh', overflowY: 'auto', padding: '20px',
      borderRadius: '12px', background: '#1b1e24', boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    });
    this.title = el('div', { fontSize: '15px', fontWeight: '600', marginBottom: '4px' }, 'Workload (NASA-RTLX)');
    card.append(this.title, el('div', { opacity: '0.6', marginBottom: '14px' }, 'Rate the run you just finished.'));
    for (const d of RTLX_DIMS) {
      const head = el('div', { display: 'flex', justifyContent: 'space-between', marginBottom: '3px' });
      const val = el('span', { opacity: '0.7', fontVariantNumeric: 'tabular-nums' }, '50');
      head.append(el('span', {}, d.label), val);
      const s = el('input', { width: '100%' });
      Object.assign(s, { type: 'range', min: '0', max: '100', step: '5', value: '50' });
      s.dataset.key = d.key;
      s.addEventListener('input', () => { val.textContent = s.value; });
      const anchors = el('div', { display: 'flex', justifyContent: 'space-between', fontSize: '10px', opacity: '0.5' });
      anchors.append(el('span', {}, d.lo), el('span', {}, d.hi));
      const row = el('div', { marginBottom: '12px' });
      row.append(head, s, anchors);
      card.appendChild(row);
      this.sliders.set(d.key, s);
    }
    const buttons = el('div', { display: 'flex', gap: '8px', marginTop: '8px' });
    const submit = button('Submit', () => this.finish(true), '#2e7d32');
    submit.id = 'rtlx-submit';
    Object.assign(submit.style, { flex: '1', padding: '9px' });
    const skip = button('Skip', () => this.finish(false));
    skip.id = 'rtlx-skip';
    buttons.append(submit, skip);
    card.appendChild(buttons);
    this.overlay.appendChild(card);
    document.body.appendChild(this.overlay);
  }

  get open(): boolean { return this.overlay.style.display !== 'none'; }

  /** Show the form; resolves with the scores, or null if skipped. */
  ask(heading: string): Promise<RtlxScores | null> {
    this.title.textContent = `Workload (NASA-RTLX): ${heading}`;
    for (const s of this.sliders.values()) { s.value = '50'; s.dispatchEvent(new Event('input')); }
    this.overlay.style.display = 'flex';
    return new Promise((ok) => { this.done = ok; });
  }

  private finish(submit: boolean): void {
    this.overlay.style.display = 'none';
    const ratings = Object.fromEntries([...this.sliders].map(([k, s]) => [k, Number(s.value)])) as Record<RtlxKey, number>;
    const cb = this.done;
    this.done = null;
    cb?.(submit ? rtlxScore(ratings) : null);
  }

  /** Test hook: set every slider. */
  setAll(v: number): void { for (const s of this.sliders.values()) { s.value = String(v); s.dispatchEvent(new Event('input')); } }
}
