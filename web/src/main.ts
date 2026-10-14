// Page wiring: load MuJoCo + model files + course → Sim → render loop, input, HUD, controls.

import loadMujoco from '@mujoco/mujoco';
import wasmUrl from '@mujoco/mujoco/mujoco.wasm?url';
import { InputArbiter } from './input/arbiter';
import { attachKeyboard } from './input/keyboard';
import { BridgeClient } from './net/bridgeClient';
import { ChaseCamera } from './render/cameras';
import { SceneView } from './render/three';
import type { Course } from './sim/course';
import type { ModelFiles } from './sim/mujoco';
import { Sim } from './sim/sim';
import { startTicker } from './sim/ticker';
import { ConnectionPanel } from './ui/connectionPanel';
import { Controls, type CourseEntry } from './ui/controls';
import { Hud } from './ui/hud';
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
  const r = await fetch(`${base}${path}`);
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
  const arbiter = new InputArbiter(sim.gate);
  const bridge = new BridgeClient(BridgeClient.defaultUrl(), sim);
  sim.onTick((now) => { arbiter.bridgeActive = bridge.isActive(now); arbiter.tick(now); });
  bridge.connect();
  attachKeyboard();

  const canvas = document.getElementById('view') as HTMLCanvasElement;
  const view = new SceneView(canvas, sim.model);
  const chase = new ChaseCamera(view.camera);
  const hud = new Hud();
  const conn = new ConnectionPanel(bridge);
  new Controls(sim, index.courses, courseId, (id) => {
    params.set('course', id);
    location.search = params.toString(); // simplest correct course switch: reload with the new course
  });
  if (params.has('debug')) view.showCollision(true);
  document.getElementById('loading')?.remove();

  // Test / debugging hooks (same idea as window.__mjswanRt in the telepresence repo).
  Object.assign(window, { __sim: sim, __arbiter: arbiter, __view: view, __bridge: bridge });

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
    chase.update(sim.state().pose, dt);
    hud.update(sim, arbiter.localSource ?? sim.gate.stats.lastSource);
    conn.update(performance.now());
    view.render();
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

main().catch((e) => {
  console.error(e);
  const l = document.getElementById('loading');
  if (l) l.textContent = `Failed to start: ${e instanceof Error ? e.message : e}`;
});
