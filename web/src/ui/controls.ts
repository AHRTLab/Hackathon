// Run controls: course picker, Reset (restarts the run), E-stop, Clear E-stop, camera, team id, CSV downloads.

import type { CameraRig, CamMode } from '../render/cameras';
import type { Sim } from '../sim/sim';
import { button, el, panel } from './dom';
import { download, type RunLog } from './runLog';

export interface CourseEntry { id: string; name: string }

export class Controls {
  readonly teamInput: HTMLInputElement;

  readonly runsLabel: HTMLSpanElement;

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
