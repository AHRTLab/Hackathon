// MuJoCo model loading, independent of where the files come from (fetch in the browser, fs in tests).

import type { MainModule, MjModel, MjData } from '@mujoco/mujoco';
import type { Course } from './course';
import { buildSceneXml } from './scene';

export type Mj = MainModule;
export type ModelFiles = Record<string, Uint8Array>; // VFS path → bytes (e.g. "jackal.xml", "meshes/jackal-base.stl")

export function compileScene(mj: Mj, files: ModelFiles, course: Course): { model: MjModel; data: MjData; xml: string } {
  const vfs = new mj.MjVFS();
  try {
    for (const [name, bytes] of Object.entries(files)) vfs.addBuffer(name, bytes);
    const xml = buildSceneXml(course);
    const model = mj.MjModel.from_xml_string(xml, vfs);
    const data = new mj.MjData(model);
    return { model, data, xml };
  } finally {
    vfs.delete();
  }
}

export function idOf(mj: Mj, model: MjModel, kind: 'body' | 'joint' | 'geom' | 'actuator' | 'site', name: string): number {
  const t = {
    body: mj.mjtObj.mjOBJ_BODY, joint: mj.mjtObj.mjOBJ_JOINT, geom: mj.mjtObj.mjOBJ_GEOM,
    actuator: mj.mjtObj.mjOBJ_ACTUATOR, site: mj.mjtObj.mjOBJ_SITE,
  }[kind].value;
  const id = mj.mj_name2id(model, t, name);
  if (id < 0) throw new Error(`MuJoCo ${kind} "${name}" not found`);
  return id;
}
