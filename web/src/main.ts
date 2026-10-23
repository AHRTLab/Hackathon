// Page wiring: load MuJoCo + model files + course → Sim → render loop, input, HUD, controls.

import loadMujoco from '@mujoco/mujoco';
import wasmUrl from '@mujoco/mujoco/mujoco.wasm?url';
import { InputArbiter } from './input/arbiter';
import { attachKeyboard } from './input/keyboard';
import { BridgeClient } from './net/bridgeClient';
import { CameraRig } from './render/cameras';
import { typingInField } from './input/keys';
import { SceneView } from './render/three';
import type { Course } from './sim/course';
import type { ModelFiles } from './sim/mujoco';
import { Sim } from './sim/sim';
import { startTicker } from './sim/ticker';
import { ConnectionPanel } from './ui/connectionPanel';
import { Controls, type CourseEntry } from './ui/controls';
import { CoursePanel } from './ui/coursePanel';
import { RunLog } from './ui/runLog';
import { RtlxForm } from './ui/rtlx';
import { Hud } from './ui/hud';
import { Minimap } from './ui/minimap';
import manifest from '../../models/jackal/manifest.json';

// Model files are bundled as hashed assets (works in dev and in the static build, no copy step).
const MODEL_URLS = import.meta.glob('../../models/jackal/{jackal.xml,meshes/*.stl}', {
  query: '?url', import: 'default', eager: true,
}) as Record<string, string>;

async function fetchModelFiles(): Promise<ModelFiles> {
  const files: ModelFiles = {};
  await Promise.all(manifest.files.map(async (f) => {
    const url = MODEL_URLS[`../../models/jackal/${f}`];
    if (!url) throw new Error(`model file missing from bundle: ${f}`);
    files[f] = new Uint8Array(await (await fetch(url)).arrayBuffer());
  }));
  return files;
}

const base = import.meta.env.BASE_URL;
const getJson = async <T>(path: string): Promise<T> => {
  // no-cache = always revalidate: course JSON keeps the same filename across deploys, and GitHub Pages
  // otherwise lets browsers reuse a stale copy for 10 min (max-age=600) next to a fresh JS bundle.
  const r = await fetch(`${base}${path}`, { cache: "no-cache" });
  if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
  return r.json() as Promise<T>;
};

async function main(): Promise<void> {
  const params = new URLSearchParams(location.search);
  const [mj, files, index] = await Promise.all([
    loadMujoco({ locateFile: (p: string) => (p.endsWith('.wasm') ? wasmUrl : p) }),
    fetchModelFiles(),
    getJson<{ default: string; courses: CourseEntry[] }>('courses/index.json'),
  ]);
  const courseId = params.get('course') ?? index.default;
  const course = await getJson<Course>(`courses/${courseId}.json`);

  const sim = Sim.create(mj, files, course, manifest.dims);
  // Telepresence condition from the URL, e.g. ?latency=300&drop=10&seed=7 (reproducible studies)
  const num = (k: string) => (params.has(k) && Number.isFinite(Number(params.get(k))) ? Number(params.get(k)) : undefined);
  sim.setImpairment({ latencyMs: num('latency'), dropPct: num('drop'), seed: num('seed') });
  const arbiter = new InputArbiter((m, t) => sim.deliver(m, t));
  const bridge = new BridgeClient(BridgeClient.defaultUrl(), sim);
  sim.onTick((now) => { arbiter.bridgeActive = bridge.isActive(now); arbiter.tick(now); });
  bridge.connect();
  attachKeyboard();

  const canvas = document.getElementById('view') as HTMLCanvasElement;
  const view = new SceneView(canvas, sim.model);
  const cams = new CameraRig(view.camera, course.arena.size);
  cams.onChange((m) => view.setRobotVisible(m !== 'fpv'));
  view.setRobotVisible(cams.mode !== 'fpv');
  window.addEventListener('keydown', (e) => {
    if (!typingInField(e) && e.key.toLowerCase() === 'c' && !e.metaKey && !e.ctrlKey) cams.cycle();
  });
  const hud = new Hud();
  const minimap = new Minimap();
  const conn = new ConnectionPanel(bridge);
  const coursePanel = new CoursePanel(sim, view);
  let controls: Controls | null = null;
  const log = new RunLog(sim, bridge, () => controls?.teamInput.value.trim() ?? '');
  controls = new Controls(sim, index.courses, courseId, (id) => {
    params.set('course', id);
    location.search = params.toString(); // simplest correct course switch: reload with the new course
  }, cams, log);
  // Optional workload form after each finish / DNF; answers go into that run's CSV row.
  const rtlx = new RtlxForm();
  log.onRow(async (row) => {
    if (!controls?.askRtlx.checked) return;
    arbiter.paused = true;
    const scores = await rtlx.ask(`run ${row.run}, ${row.course}`);
    arbiter.paused = false;
    if (scores) log.setRtlx(row.run as number, scores);
  });
  if (params.has('debug')) view.showCollision(true);
  document.getElementById('loading')?.remove();

  // Test / debugging hooks (same idea as window.__mjswanRt in the telepresence repo).
  Object.assign(window, { __sim: sim, __arbiter: arbiter, __view: view, __bridge: bridge, __cams: cams, __log: log, __rtlx: rtlx });

  // Physics runs on a worker-driven ticker so it keeps going in hidden tabs; rAF only renders.
  let lastStep = performance.now();
  startTicker(() => {
    const now = performance.now();
    sim.advance(Math.min(0.1, (now - lastStep) / 1000));
    lastStep = now;
  });

  let lastFrame = performance.now();
  const frame = (now: number) => {
    const dt = Math.min(0.1, (now - lastFrame) / 1000);
    lastFrame = now;
    view.sync(sim.data);
    const pose = sim.state().pose;
    const sp = sim.data.site_xpos as Float64Array, fs = sim.fpvSite, ls = sim.lidarSite;
    cams.update(pose, [sp[3 * fs], sp[3 * fs + 1], sp[3 * fs + 2]], dt, view.aspect);
    view.setScan(cams.mode === 'top' ? sim.lastScan : null, [sp[3 * ls], sp[3 * ls + 1], sp[3 * ls + 2]], pose.yaw);
    coursePanel.update();
    hud.update(sim, arbiter.localSource ?? sim.gate.stats.lastSource);
    minimap.update(sim, bridge.lastAssist && now - bridge.lastAssist.at < 500 ? bridge.lastAssist.overlay : null);
    conn.update(performance.now());
    view.render(cams.camera);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

main().catch((e) => {
  console.error(e);
  const l = document.getElementById('loading');
  if (l) l.textContent = `Failed to start: ${e instanceof Error ? e.message : e}`;
});
