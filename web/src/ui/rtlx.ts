// NASA-RTLX workload form (adapted from the telepresence repo's extras/rtlx.ts). Six dimensions rated
// 0–100; RTLX = their unweighted mean ("Raw TLX"). Performance is anchored Perfect → Failure so that, like
// the others, higher = more workload. Optional: shown after each finish / DNF when the session has
// "ask workload" switched on.

import { button, el, labelFor } from './dom';

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
  private dialog: HTMLDialogElement;
  private title: HTMLDivElement;
  private result: HTMLSpanElement;
  private sliders = new Map<RtlxKey, HTMLInputElement>();
  private done: ((s: RtlxScores | null) => void) | null = null;
  private opener: HTMLElement | null = null;

  constructor() {
    // A native modal <dialog>: showModal() makes the page behind it inert and Escape fires `cancel`.
    this.dialog = el('dialog', {
      width: '440px', maxWidth: '92vw', boxSizing: 'border-box', maxHeight: '88vh', overflowY: 'auto', padding: '20px', border: 'none',
      borderRadius: '12px', background: '#1b1e24', color: 'inherit', boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    });
    this.dialog.id = 'rtlx';
    this.dialog.setAttribute('aria-labelledby', 'rtlx-title');
    this.dialog.setAttribute('aria-describedby', 'rtlx-result rtlx-prompt');
    this.dialog.addEventListener('cancel', (e) => { e.preventDefault(); this.finish(false); });
    const backdrop = el('style');
    backdrop.textContent = '#rtlx::backdrop { background: rgba(0,0,0,0.55); }';
    document.head.appendChild(backdrop);
    this.title = el('div', { fontSize: '15px', fontWeight: '600', marginBottom: '4px' }, 'Workload (NASA-RTLX)');
    this.title.id = 'rtlx-title';
    // The open modal hides the page's status region, so the form says how the run ended.
    this.result = el('span', {
      position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clipPath: 'inset(50%)', whiteSpace: 'nowrap',
    });
    this.result.id = 'rtlx-result';
    const prompt = el('div', { opacity: '0.6', marginBottom: '14px' }, 'Rate the run you just finished.');
    prompt.id = 'rtlx-prompt';
    this.dialog.append(this.title, this.result, prompt);
    for (const d of RTLX_DIMS) {
      const head = el('div', { display: 'flex', justifyContent: 'space-between', marginBottom: '3px' });
      const val = el('span', { opacity: '0.7', fontVariantNumeric: 'tabular-nums' }, '50');
      const s = el('input', { width: '100%' });
      Object.assign(s, { type: 'range', min: '0', max: '100', step: '5', value: '50', id: `rtlx-${d.key}` });
      head.append(labelFor(d.label, s.id, { opacity: '1' }), val);
      s.dataset.key = d.key;
      s.addEventListener('input', () => { val.textContent = s.value; });
      const anchors = el('div', { display: 'flex', justifyContent: 'space-between', fontSize: '10px', opacity: '0.75' });
      anchors.append(el('span', {}, d.lo), el('span', {}, d.hi));
      const row = el('div', { marginBottom: '12px' });
      row.append(head, s, anchors);
      this.dialog.appendChild(row);
      this.sliders.set(d.key, s);
    }
    const buttons = el('div', { display: 'flex', gap: '8px', marginTop: '8px' });
    const submit = button('Submit', () => this.finish(true), '#1b5e20');
    submit.id = 'rtlx-submit';
    Object.assign(submit.style, { flex: '1', padding: '9px' });
    const skip = button('Skip', () => this.finish(false));
    skip.id = 'rtlx-skip';
    buttons.append(submit, skip);
    this.dialog.appendChild(buttons);
    document.body.appendChild(this.dialog);
  }

  get open(): boolean { return this.dialog.open; }

  /** Show the form; resolves with the scores, or null if skipped. A second ask waits for the first. */
  ask(heading: string, result = ''): Promise<RtlxScores | null> {
    const shown = this.queue.then(() => this.show(heading, result));
    this.queue = shown;
    return shown;
  }

  private queue: Promise<unknown> = Promise.resolve();

  private show(heading: string, result: string): Promise<RtlxScores | null> {
    this.title.textContent = `Workload (NASA-RTLX): ${heading}`;
    this.result.textContent = result;
    for (const s of this.sliders.values()) { s.value = '50'; s.dispatchEvent(new Event('input')); }
    this.opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.dialog.showModal();
    this.sliders.values().next().value?.focus();
    return new Promise((ok) => { this.done = ok; });
  }

  private finish(submit: boolean): void {
    if (this.dialog.open) this.dialog.close();
    if (this.opener?.isConnected) this.opener.focus();
    this.opener = null;
    const ratings = Object.fromEntries([...this.sliders].map(([k, s]) => [k, Number(s.value)])) as Record<RtlxKey, number>;
    const cb = this.done;
    this.done = null;
    cb?.(submit ? rtlxScore(ratings) : null);
  }

  /** Test hook: set every slider. */
  setAll(v: number): void { for (const s of this.sliders.values()) { s.value = String(v); s.dispatchEvent(new Event('input')); } }
}
