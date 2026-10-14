// Course description, loaded from web/public/courses/<id>.json (see public/courses/README.md).
// Data-driven so staff can add courses without touching code.

export interface BoxObstacle { type: 'box'; pos: [number, number]; size: [number, number, number]; yaw?: number; rgba?: number[] }
export interface CylinderObstacle { type: 'cylinder'; pos: [number, number]; radius: number; height: number; rgba?: number[] }
export type Obstacle = BoxObstacle | CylinderObstacle;

/** Two posts. Drive between them with `left` on your left; gates must be taken in order. */
export interface Gate { left: [number, number]; right: [number, number] }

export interface LineFinish { type: 'line'; left: [number, number]; right: [number, number] }
/** Stop inside the dock: centre within tol_m, heading within tol_deg of yaw, speed ~0, held for hold_s. */
export interface DockFinish {
  type: 'dock'; center: [number, number]; yaw: number; size?: [number, number];
  tol_m?: number; tol_deg?: number; hold_s?: number;
}
export type Finish = LineFinish | DockFinish;

export interface Course {
  id: string;
  name: string;
  arena: { size: [number, number]; wall_height?: number; wall_thickness?: number };
  start: { x: number; y: number; yaw: number };
  obstacles: Obstacle[];
  gates?: Gate[];
  finish?: Finish | null;
  /** Optional suggested waypoints for autopilot_gates.py (e.g. through a corridor); not shown to drivers. */
  path?: [number, number][];
  time_limit?: number | null;
  speed_caps?: { v?: number | null; w?: number | null } | null;
}

export const POST_RADIUS = 0.05;
export const POST_HEIGHT = 0.6;

/** A course is "scored" (has a run with a clock) if it has gates or a finish. */
export const isScored = (c: Course): boolean => (c.gates?.length ?? 0) > 0 || !!c.finish;

export function dockDefaults(f: DockFinish): Required<DockFinish> {
  return { size: [0.8, 0.6], tol_m: 0.15, tol_deg: 10, hold_s: 1, ...f } as Required<DockFinish>;
}
