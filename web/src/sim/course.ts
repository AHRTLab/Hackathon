// Course description, loaded from web/public/courses/<id>.json (see public/courses/README.md).
// Data-driven so staff can add courses without touching code. M0 uses arena + obstacles + start;
// gates / finish / scoring are read from M2 on.

export interface BoxObstacle { type: 'box'; pos: [number, number]; size: [number, number, number]; yaw?: number; rgba?: number[] }
export interface CylinderObstacle { type: 'cylinder'; pos: [number, number]; radius: number; height: number; rgba?: number[] }
export type Obstacle = BoxObstacle | CylinderObstacle;

export interface Gate { left: [number, number]; right: [number, number] }

export interface Course {
  id: string;
  name: string;
  arena: { size: [number, number]; wall_height?: number; wall_thickness?: number };
  start: { x: number; y: number; yaw: number };
  obstacles: Obstacle[];
  gates?: Gate[];
  finish?: { center: [number, number]; size: [number, number]; yaw_tol_deg?: number; hold_s?: number } | null;
  time_limit?: number | null;
  speed_caps?: { v?: number | null; w?: number | null } | null;
}
