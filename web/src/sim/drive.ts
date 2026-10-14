// Kinematic drive (brief §4.3): the chassis sits on slide-x / slide-y / hinge-yaw joints with velocity
// actuators, and each control tick we turn the applied body-frame twist (v, w) into world-frame targets.
// Obstacles still block the robot because the actuators are force-limited. Wheels are visual only;
// we set their joint velocities from the differential-drive kinematics so they spin believably.

import type { MjData, MjModel } from '@mujoco/mujoco';
import type { Pose2D, Twist } from '../protocol/types';
import { idOf, type Mj } from './mujoco';

export interface DriveIds {
  qx: number; qy: number; qyaw: number;   // qpos addresses
  dx: number; dy: number; dyaw: number;   // dof addresses
  ax: number; ay: number; aw: number;     // actuator ids
  wheels: { dof: number; side: 1 | -1 }[]; // side +1 = left (y > 0)
  chassisGeom: number;
  baseBody: number;
  wheelRadius: number;
  track: number;
}

export function resolveDriveIds(mj: Mj, model: MjModel, dims: { wheel_radius_m: number; track_m: number }): DriveIds {
  const jq = (n: string) => model.jnt_qposadr[idOf(mj, model, 'joint', n)] as number;
  const jd = (n: string) => model.jnt_dofadr[idOf(mj, model, 'joint', n)] as number;
  const wheel = (n: string, side: 1 | -1) => ({ dof: jd(n), side });
  return {
    qx: jq('slide_x'), qy: jq('slide_y'), qyaw: jq('yaw'),
    dx: jd('slide_x'), dy: jd('slide_y'), dyaw: jd('yaw'),
    ax: idOf(mj, model, 'actuator', 'vx'), ay: idOf(mj, model, 'actuator', 'vy'), aw: idOf(mj, model, 'actuator', 'wz'),
    wheels: [
      wheel('front_left_wheel', 1), wheel('rear_left_wheel', 1),
      wheel('front_right_wheel', -1), wheel('rear_right_wheel', -1),
    ],
    chassisGeom: idOf(mj, model, 'geom', 'chassis'),
    baseBody: idOf(mj, model, 'body', 'base_link'),
    wheelRadius: dims.wheel_radius_m,
    track: dims.track_m,
  };
}

export function applyTwist(data: MjData, ids: DriveIds, cmd: Twist): void {
  const yaw = data.qpos[ids.qyaw];
  data.ctrl[ids.ax] = cmd.v * Math.cos(yaw);
  data.ctrl[ids.ay] = cmd.v * Math.sin(yaw);
  data.ctrl[ids.aw] = cmd.w;
  for (const wh of ids.wheels) {
    data.qvel[wh.dof] = (cmd.v - wh.side * cmd.w * ids.track / 2) / ids.wheelRadius;
  }
}

export function readPose(data: MjData, ids: DriveIds): Pose2D {
  const yaw = data.qpos[ids.qyaw];
  return { x: data.qpos[ids.qx], y: data.qpos[ids.qy], yaw: Math.atan2(Math.sin(yaw), Math.cos(yaw)) };
}

/** Measured body-frame velocity (forward speed and yaw rate). */
export function readVel(data: MjData, ids: DriveIds): Twist {
  const yaw = data.qpos[ids.qyaw];
  const vx = data.qvel[ids.dx], vy = data.qvel[ids.dy];
  return { v: vx * Math.cos(yaw) + vy * Math.sin(yaw), w: data.qvel[ids.dyaw] };
}

export function setPose(data: MjData, ids: DriveIds, p: Pose2D): void {
  data.qpos[ids.qx] = p.x;
  data.qpos[ids.qy] = p.y;
  data.qpos[ids.qyaw] = p.yaw;
}
