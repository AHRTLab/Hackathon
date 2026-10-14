// Course panel (top centre): course name, clock, gate progress, penalties, live score; plus the finish /
// DNF banner. Highlights the next gate's posts in the 3D view.

import type { Sim } from '../sim/sim';
import { COLLISION_PENALTY_S, MISSED_GATE_PENALTY_S } from '../sim/run';
import type { SceneView } from '../render/three';
import { idOf } from '../sim/mujoco';
import { el, panel } from './dom';

export class CoursePanel {
  private line: HTMLDivElement;
  private banner: HTMLDivElement;
  private posts: [number, number][] = [];
  private lastNext = -1;

  constructor(private sim: Sim, private view: SceneView) {
    const p = panel({ left: '50%', top: '12px', transform: 'translateX(-50%)', textAlign: 'center', minWidth: '320px' }, 'course');
    this.line = el('div', { fontVariantNumeric: 'tabular-nums', lineHeight: '1.5' });
    this.line.id = 'course-line';
    p.appendChild(this.line);
    if (!sim.run.scored) p.style.display = 'none';

    this.banner = el('div', {
      position: 'fixed', left: '50%', top: '38%', transform: 'translate(-50%,-50%)', zIndex: '20', display: 'none',
      padding: '18px 26px', borderRadius: '14px', background: 'rgba(20,23,28,0.92)', border: '1px solid rgba(255,255,255,0.15)',
      textAlign: 'center', fontSize: '15px', lineHeight: '1.6',
    });
    this.banner.id = 'finish-banner';
    document.body.appendChild(this.banner);

    (sim.course.gates ?? []).forEach((_, k) => {
      this.posts.push([idOf(sim.mj, sim.model, 'geom', `gate${k}_l`), idOf(sim.mj, sim.model, 'geom', `gate${k}_r`)]);
    });
  }

  update(): void {
    const r = this.sim.run;
    if (!r.scored) return;
    const n = this.sim.course.gates?.length ?? 0;
    const phase = { ready: 'ready (the clock starts when you move)', running: 'running', finished: 'finished', dnf: 'DNF (time limit)' }[r.phase];
    const live = r.scoreTime();
    const limit = this.sim.course.time_limit ? ` / ${this.sim.course.time_limit} s` : '';
    this.line.innerHTML =
      `<b>${this.sim.course.name}</b> · ${phase}<br>` +
      `time <b>${r.elapsed.toFixed(1)} s</b>${limit} · gates <b>${r.gatesPassed}/${n}</b>` +
      `${r.missed.size ? ` · missed <b style="color:#ffb74d">${r.missed.size}</b>` : ''} · score <b>${live.toFixed(1)} s</b>`;

    if (r.nextGate !== this.lastNext) {         // highlight the next gate's posts
      this.posts.forEach(([l, rr], k) => {
        const next = k === r.nextGate, done = k < r.nextGate;
        this.view.setGeomColor(l, next ? 0xffeb3b : done ? 0x555a60 : 0xe53935, done ? 0.5 : 1);
        this.view.setGeomColor(rr, next ? 0xffeb3b : done ? 0x555a60 : 0x3f6fe6, done ? 0.5 : 1);
      });
      this.lastNext = r.nextGate;
    }

    const res = r.result;
    if (res && this.banner.style.display === 'none') {
      this.banner.innerHTML = res.completed
        ? `<div style="font-size:22px;font-weight:700">Finished</div>` +
          `score <b style="font-size:20px">${res.score_time!.toFixed(2)} s</b><br>` +
          `<span style="opacity:.75">time ${res.elapsed.toFixed(2)} s + ${COLLISION_PENALTY_S} s × ${res.collisions} collisions + ` +
          `${MISSED_GATE_PENALTY_S} s × ${res.missed_gates} missed gates</span><br>`
        : `<div style="font-size:22px;font-weight:700;color:#ffb74d">DNF</div>time limit reached · ${res.gates_passed}/${n} gates<br>`;
      this.banner.innerHTML += `<span style="opacity:.6">Press Reset (or send action "restart") to run again</span>`;
      this.banner.style.display = 'block';
    } else if (!res && this.banner.style.display !== 'none') {
      this.banner.style.display = 'none';
    }
  }
}
