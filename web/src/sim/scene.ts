// Builds the full MJCF for one course: floor + arena walls + obstacles + gate posts + finish markings,
// plus <include> of the Jackal model.
//
// Geom groups / collision bits:
//   group 0, contype=conaffinity=2   walls, obstacles, gate posts: the robot collides with them, lidar sees them
//   group 2, contype=conaffinity=0   floor markings (gate lines, finish line, dock zone): visual only
//   floor: contype=conaffinity=1, so the chassis (bits 2) never touches it

import { dockDefaults, POST_HEIGHT, POST_RADIUS, type Course } from './course';

const f = (x: number) => (Math.round(x * 1e6) / 1e6).toString();
const v = (xs: number[]) => xs.map(f).join(' ');
const OBST = 'contype="2" conaffinity="2" group="0"';
const MARK = 'contype="0" conaffinity="0" group="2"';

/** A flat marking strip on the floor from a to b. */
function strip(name: string, a: [number, number], b: [number, number], width: number, rgba: number[]): string {
  const cx = (a[0] + b[0]) / 2, cy = (a[1] + b[1]) / 2;
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const yaw = Math.atan2(b[1] - a[1], b[0] - a[0]);
  return `    <geom name="${name}" type="box" pos="${v([cx, cy, 0.003])}" size="${v([len / 2, width / 2, 0.002])}" euler="0 0 ${f(yaw)}" rgba="${v(rgba)}" ${MARK}/>`;
}

export function buildSceneXml(course: Course, jackalFile = 'jackal.xml'): string {
  const [ax, ay] = course.arena.size;
  const h = course.arena.wall_height ?? 0.4;
  const t = course.arena.wall_thickness ?? 0.1;
  const walls = [
    ['wall_n', [0, ay / 2 + t / 2, h / 2], [ax / 2 + t, t / 2, h / 2]],
    ['wall_s', [0, -ay / 2 - t / 2, h / 2], [ax / 2 + t, t / 2, h / 2]],
    ['wall_e', [ax / 2 + t / 2, 0, h / 2], [t / 2, ay / 2, h / 2]],
    ['wall_w', [-ax / 2 - t / 2, 0, h / 2], [t / 2, ay / 2, h / 2]],
  ] as const;
  const xml: string[] = walls.map(([n, p, s]) =>
    `    <geom name="${n}" type="box" pos="${v([...p])}" size="${v([...s])}" rgba="0.55 0.58 0.62 1" ${OBST}/>`);

  course.obstacles.forEach((o, i) => {
    const rgba = v(o.rgba ?? [0.85, 0.45, 0.2, 1]);
    if (o.type === 'box') {
      const [sx, sy, sz] = o.size;
      xml.push(`    <geom name="obs_${i}" type="box" pos="${v([o.pos[0], o.pos[1], sz / 2])}" size="${v([sx / 2, sy / 2, sz / 2])}" euler="0 0 ${f(o.yaw ?? 0)}" rgba="${rgba}" ${OBST}/>`);
    } else {
      xml.push(`    <geom name="obs_${i}" type="cylinder" pos="${v([o.pos[0], o.pos[1], o.height / 2])}" size="${v([o.radius, o.height / 2])}" rgba="${rgba}" ${OBST}/>`);
    }
  });

  (course.gates ?? []).forEach((g, k) => {
    for (const [side, p, rgba] of [['l', g.left, [0.9, 0.25, 0.2, 1]], ['r', g.right, [0.2, 0.45, 0.9, 1]]] as const) {
      xml.push(`    <geom name="gate${k}_${side}" type="cylinder" pos="${v([p[0], p[1], POST_HEIGHT / 2])}" size="${v([POST_RADIUS, POST_HEIGHT / 2])}" rgba="${v([...rgba])}" ${OBST}/>`);
    }
    xml.push(strip(`gate${k}_line`, g.left, g.right, 0.04, [1, 1, 1, 0.35]));
  });

  const fin = course.finish;
  if (fin?.type === 'line') {
    xml.push(strip('finish_line', fin.left, fin.right, 0.12, [1, 1, 1, 0.9]));
  } else if (fin?.type === 'dock') {
    const d = dockDefaults(fin);
    xml.push(`    <geom name="dock_zone" type="box" pos="${v([d.center[0], d.center[1], 0.003])}" size="${v([d.size[0] / 2, d.size[1] / 2, 0.002])}" euler="0 0 ${f(d.yaw)}" rgba="0.2 0.8 0.35 0.35" ${MARK}/>`);
    xml.push(`    <geom name="dock_target" type="cylinder" pos="${v([d.center[0], d.center[1], 0.004])}" size="${v([d.tol_m, 0.002])}" rgba="0.2 0.9 0.4 0.6" ${MARK}/>`);
  }

  return `<mujoco model="jackal_${course.id}">
  <compiler angle="radian"/>
  <option timestep="0.002" integrator="implicitfast"/>
  <include file="${jackalFile}"/>
  <worldbody>
    <light name="sun" pos="0 0 6" dir="0 0 -1" directional="true"/>
    <geom name="floor" type="plane" size="${v([ax / 2 + t, ay / 2 + t, 0.1])}" rgba="0.24 0.26 0.29 1" contype="1" conaffinity="1"/>
${xml.join('\n')}
  </worldbody>
</mujoco>
`;
}
