// Cameras: chase (default, smoothed follow), top-down (orthographic, whole arena, lidar overlay) and
// FPV (from the `fpv` site on the robot, the hard "telepresence" view). `C` cycles; the choice is
// remembered per browser.

import * as THREE from 'three';
import type { Pose2D } from '../protocol/types';

export type CamMode = 'chase' | 'top' | 'fpv';
export const CAM_MODES: CamMode[] = ['chase', 'top', 'fpv'];
const STORE_KEY = 'jackal.camera';

export class ChaseCamera {
  private pos = new THREE.Vector3();
  private look = new THREE.Vector3();
  private init = false;

  constructor(private cam: THREE.PerspectiveCamera, private back = 2.4, private height = 1.5, private stiffness = 4) {}

  update(p: Pose2D, dtS: number): void {
    const want = new THREE.Vector3(p.x - this.back * Math.cos(p.yaw), p.y - this.back * Math.sin(p.yaw), this.height);
    const lookAt = new THREE.Vector3(p.x + 0.8 * Math.cos(p.yaw), p.y + 0.8 * Math.sin(p.yaw), 0.15);
    const a = this.init ? 1 - Math.exp(-this.stiffness * dtS) : 1;
    this.pos.lerp(want, a);
    this.look.lerp(lookAt, a);
    this.init = true;
    this.cam.position.copy(this.pos);
    this.cam.lookAt(this.look);
  }

  snap(): void { this.init = false; }
}

export class CameraRig {
  mode: CamMode;
  readonly top: THREE.OrthographicCamera;
  readonly fpv = new THREE.PerspectiveCamera(80, 1, 0.03, 100);
  private chase: ChaseCamera;
  private listeners: ((m: CamMode) => void)[] = [];

  constructor(private persp: THREE.PerspectiveCamera, private arena: [number, number]) {
    this.chase = new ChaseCamera(persp);
    this.top = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 50);
    this.top.position.set(0, 0, 20);
    this.top.up.set(0, 1, 0);
    this.top.lookAt(0, 0, 0);
    this.fpv.up.set(0, 0, 1);
    let saved: string | null = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch { /* storage blocked: default view */ }
    this.mode = CAM_MODES.includes(saved as CamMode) ? (saved as CamMode) : 'chase';
  }

  onChange(fn: (m: CamMode) => void): void { this.listeners.push(fn); }

  set(m: CamMode): void {
    this.mode = m;
    if (m === 'chase') this.chase.snap();
    try { localStorage.setItem(STORE_KEY, m); } catch { /* ignore */ }
    for (const fn of this.listeners) fn(m);
  }

  cycle(): void { this.set(CAM_MODES[(CAM_MODES.indexOf(this.mode) + 1) % CAM_MODES.length]); }

  get camera(): THREE.Camera { return this.mode === 'top' ? this.top : this.mode === 'fpv' ? this.fpv : this.persp; }

  /** fpvPos: world position of the robot's fpv site. */
  update(p: Pose2D, fpvPos: [number, number, number], dtS: number, aspect: number): void {
    if (this.mode === 'chase') this.chase.update(p, dtS);
    else if (this.mode === 'top') {
      const [ax, ay] = this.arena;
      const half = Math.max(ax / 2 / aspect, ay / 2) * 1.08;
      Object.assign(this.top, { left: -half * aspect, right: half * aspect, top: half, bottom: -half });
      this.top.updateProjectionMatrix();
    } else {
      this.fpv.aspect = aspect;
      this.fpv.updateProjectionMatrix();
      this.fpv.position.set(fpvPos[0], fpvPos[1], fpvPos[2]);
      const tilt = -0.12; // look slightly down
      this.fpv.lookAt(fpvPos[0] + Math.cos(p.yaw), fpvPos[1] + Math.sin(p.yaw), fpvPos[2] + Math.tan(tilt));
    }
  }
}
