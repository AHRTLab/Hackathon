// Run controls: course picker, Reset (restarts the run), E-stop, Clear E-stop, camera, team id, CSV downloads.

import type { CameraRig, CamMode } from '../render/cameras';
import type { Sim } from '../sim/sim';
import { button, el, panel } from './dom';
import { download, type RunLog } from './runLog';

export interface CourseEntry { id: string; name: string }

export class Controls {
  readonly teamInput: HTMLInputElement;

  readonly runsLabel: HTMLSpanElement;
  readonly askRtlx: HTMLInputElement;

  constructor(sim: Sim, courses: CourseEntry[], current: string, onCourse: (id: string) => void, cams: CameraRig, log: RunLog) {
    const p = panel({ right: '12px', bottom: '12px' }, 'controls');
    const row = (...kids: HTMLElement[]) => {
      const r = el('div', { display: 'flex', gap: '6px', alignItems: 'center', margin: '4px 0' });
      r.append(...kids);
      p.appendChild(r);
    };
    const pick = el('select', { flex: '1', background: '#2d333c', color: '#e8eaed', border: '1px solid #444', borderRadius: '6px', padding: '4px' });
    for (const c of courses) pick.add(new Option(c.name, c.id, c.id === current, c.id === current));
    pick.addEventListener('change', () => onCourse(pick.value));
    row(el('span', { opacity: '.7' }, 'course'), pick);

    row(
      button('Reset', () => sim.reset()),
      button('E-stop', () => sim.gate.estop(), '#8e1c1c'),
      button('Clear E-stop', () => sim.gate.reset()),
    );
    const camButtons = new Map<CamMode, HTMLButtonElement>();
    for (const [m, label] of [['chase', 'Chase'], ['top', 'Top'], ['fpv', 'FPV']] as const) {
      const b = button(label, () => cams.set(m));
      b.dataset.cam = m;
      camButtons.set(m, b);
    }
    const paint = (m: CamMode) => camButtons.forEach((b, k) => { b.style.background = k === m ? '#3d5afe' : '#2d333c'; });
    cams.onChange(paint);
    paint(cams.mode);
    row(el('span', { opacity: '.7' }, 'camera'), ...camButtons.values());

    this.teamInput = el('input', { flex: '1', background: '#2d333c', color: '#e8eaed', border: '1px solid #444', borderRadius: '6px', padding: '4px 6px' });
    this.teamInput.placeholder = 'team id';
    this.teamInput.id = 'team-id';
    row(el('span', { opacity: '.7' }, 'team'), this.teamInput);

    // Telepresence knobs: command latency and packet drop, applied to every input (bridge and keyboard).
    const knob = (label: string, id: string, max: number, step: number, unit: string, value: number) => {
      const input = el('input', { flex: '1' });
      Object.assign(input, { type: 'range', min: '0', max: String(max), step: String(step), value: String(value), id });
      const out = el('span', { width: '58px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }, `${value} ${unit}`);
      input.addEventListener('input', () => { out.textContent = `${input.value} ${unit}`; });
      row(el('span', { opacity: '.7', width: '52px' }, label), input, out);
      return input;
    };
    p.appendChild(el('div', { opacity: '.55', fontSize: '11px', marginTop: '6px' }, 'telepresence'));
    const lat = knob('latency', 'knob-latency', 1000, 50, 'ms', sim.impairment.latencyMs);
    const drop = knob('drop', 'knob-drop', 50, 5, '%', sim.impairment.dropPct);
    const note = el('div', { fontSize: '11px', color: '#ffb74d', minHeight: '0' });
    note.id = 'knob-note';
    p.appendChild(note);
    const apply = () => {
      const now = sim.setImpairment({ latencyMs: Number(lat.value), dropPct: Number(drop.value) });
      note.textContent = now ? '' : 'applies after this run (press Reset)';
    };
    lat.addEventListener('change', apply);
    drop.addEventListener('change', apply);
    sim.onEvent((e) => { if (e === 'run_start') note.textContent = ''; });

    // Optional NASA-RTLX after each run (also ?rtlx=1); remembered in this browser.
    this.askRtlx = el('input');
    Object.assign(this.askRtlx, { type: 'checkbox', id: 'ask-rtlx' });
    let stored: string | null = null;
    try { stored = localStorage.getItem('jackal.askRtlx'); } catch { /* storage blocked */ }
    this.askRtlx.checked = new URLSearchParams(location.search).get('rtlx') === '1' || stored === '1';
    this.askRtlx.addEventListener('change', () => {
      try { localStorage.setItem('jackal.askRtlx', this.askRtlx.checked ? '1' : '0'); } catch { /* ignore */ }
    });
    const askLabel = el('label', { display: 'flex', gap: '6px', alignItems: 'center', cursor: 'pointer' });
    askLabel.append(this.askRtlx, el('span', {}, 'Ask workload (NASA-RTLX) after each run'));
    row(askLabel);

    this.runsLabel = el('span', { opacity: '.7' }, 'runs 0');
    this.runsLabel.id = 'runs-count';
    const runsBtn = button('Runs CSV', () => download(`jackal_runs_${stamp()}.csv`, log.runsCsv()));
    runsBtn.id = 'dl-runs';
    const traceBtn = button('Last trace', () => { const t = log.lastTraceCsv(); if (t) download(`jackal_trace_${stamp()}.csv`, t); });
    traceBtn.id = 'dl-trace';
    log.onRow(() => { this.runsLabel.textContent = `runs ${log.rows.length}`; });
    row(this.runsLabel, runsBtn, traceBtn);
    p.appendChild(el('div', { opacity: '.55', marginTop: '4px', fontSize: '11px' },
      'Keyboard: W/S drive · A/D turn · Shift fine · Space stop · C camera'));
  }
}

const stamp = () => new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
