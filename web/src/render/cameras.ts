// Chase camera: follows behind and above the robot, smoothed so turns don't whip the view around.
// (Top-down and onboard FPV views arrive in M2.)

import * as THREE from 'three';
import type { Pose2D } from '../protocol/types';

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
}
