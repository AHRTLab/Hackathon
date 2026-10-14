// Simulated 2D planar lidar (brief §3.3): 180 beams over 270° from the `lidar` site, horizontal, using
// MuJoCo's mj_multiRay. Only geom group 0 is hit (walls, obstacles, gate posts); the robot's own visual
// (group 1) and collision (group 3) geoms and the floor markings (group 2) are ignored. Anything lower than
// the beam height (about 0.27 m) is invisible to it, just like a real planar lidar.

import type { DoubleBuffer, IntBuffer, MjData, MjModel } from '@mujoco/mujoco';
import { idOf, type Mj } from './mujoco';

export const SCAN = { beams: 180, angle_min: -2.356, angle_inc: 0.02618, range_max: 10.0 } as const;

export interface Scan { angle_min: number; angle_inc: number; range_max: number; ranges: number[] }

export class Lidar {
  private site: number;
  private body: number;
  private geomid: IntBuffer;
  private dist: DoubleBuffer;
  private normal: DoubleBuffer;
  private vec: number[] = new Array(3 * SCAN.beams).fill(0);
  private readonly groups = [1, 0, 0, 0, 0, 0];

  constructor(private mj: Mj, private model: MjModel, private data: MjData) {
    this.site = idOf(mj, model, 'site', 'lidar');
    this.body = idOf(mj, model, 'body', 'base_link');
    this.geomid = new mj.IntBuffer(SCAN.beams);
    this.dist = new mj.DoubleBuffer(SCAN.beams);
    this.normal = new mj.DoubleBuffer(3 * SCAN.beams);
  }

  scan(): Scan {
    const d = this.data, s = this.site;
    const p = d.site_xpos as Float64Array, R = d.site_xmat as Float64Array;
    const yaw = Math.atan2(R[9 * s + 3], R[9 * s + 0]); // site x-axis heading in the world (planar robot)
    for (let i = 0; i < SCAN.beams; i++) {
      const a = yaw + SCAN.angle_min + i * SCAN.angle_inc;
      this.vec[3 * i] = Math.cos(a);
      this.vec[3 * i + 1] = Math.sin(a);
      this.vec[3 * i + 2] = 0;
    }
    const origin = [p[3 * s], p[3 * s + 1], p[3 * s + 2]];
    this.mj.mj_multiRay(this.model, d, origin, this.vec, this.groups, true, this.body,
      this.geomid, this.dist, this.normal, SCAN.beams, SCAN.range_max);
    const raw = this.dist.GetView() as Float64Array;
    const ranges = new Array<number>(SCAN.beams);
    for (let i = 0; i < SCAN.beams; i++) {
      const r = raw[i];
      ranges[i] = r < 0 || r > SCAN.range_max ? SCAN.range_max : Math.round(r * 1000) / 1000;
    }
    return { angle_min: SCAN.angle_min, angle_inc: SCAN.angle_inc, range_max: SCAN.range_max, ranges };
  }

  dispose(): void { this.geomid.delete(); this.dist.delete(); this.normal.delete(); }
}
