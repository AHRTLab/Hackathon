// Run controls: course picker, Reset, E-stop, Clear E-stop, team id. (Start / CSV arrive with scoring in M2.)

import type { Sim } from '../sim/sim';
import { button, el, panel } from './dom';

export interface CourseEntry { id: string; name: string }

export class Controls {
  readonly teamInput: HTMLInputElement;

  constructor(sim: Sim, courses: CourseEntry[], current: string, onCourse: (id: string) => void) {
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
    this.teamInput = el('input', { flex: '1', background: '#2d333c', color: '#e8eaed', border: '1px solid #444', borderRadius: '6px', padding: '4px 6px' });
    this.teamInput.placeholder = 'team id';
    this.teamInput.id = 'team-id';
    row(el('span', { opacity: '.7' }, 'team'), this.teamInput);
    p.appendChild(el('div', { opacity: '.55', marginTop: '4px', fontSize: '11px' },
      'Keyboard: W/S drive · A/D turn · Shift fine · Space stop'));
  }
}
