// Node-side loading for unit tests: the real MuJoCo WASM build + model files from disk.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import loadMujoco from '@mujoco/mujoco';
import type { Course } from '../../src/sim/course';
import type { ModelFiles } from '../../src/sim/mujoco';
import { Sim } from '../../src/sim/sim';

export const ROOT = resolve(__dirname, '../../..');
const MODEL_DIR = resolve(ROOT, 'models/jackal');

export const manifest = JSON.parse(readFileSync(resolve(MODEL_DIR, 'manifest.json'), 'utf8'));

export function modelFiles(): ModelFiles {
  const files: ModelFiles = {};
  for (const f of manifest.files as string[]) files[f] = new Uint8Array(readFileSync(resolve(MODEL_DIR, f)));
  return files;
}

export function course(id: string): Course {
  return JSON.parse(readFileSync(resolve(ROOT, `web/public/courses/${id}.json`), 'utf8'));
}

let mjPromise: ReturnType<typeof loadMujoco> | null = null;
export const mujoco = () => (mjPromise ??= loadMujoco());

/** A Sim whose deadman clock is sim time, so tests run faster than real time. */
export async function makeSim(c: Course = course('L0-sandbox')): Promise<Sim> {
  const mj = await mujoco();
  let sim: Sim | null = null;
  sim = Sim.create(mj, modelFiles(), c, manifest.dims, { clock: () => (sim ? sim.time * 1000 : 0), maxStepsPerAdvance: 1e9 });
  return sim;
}

/** Run the sim for `seconds`, calling `each(tMs)` before every control tick (like a sender would). */
export function run(sim: Sim, seconds: number, each?: (tMs: number) => void): void {
  const ticks = Math.round(seconds / sim.controlDt);
  for (let i = 0; i < ticks; i++) {
    each?.(sim.time * 1000);
    sim.advance(sim.controlDt);
  }
}
