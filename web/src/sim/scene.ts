// Builds the full MJCF for one course: floor + arena walls + obstacles, plus <include> of the Jackal model.
// Obstacles and walls share the robot's collision bits (contype=conaffinity=2); the floor uses 1, so
// the chassis box never touches the floor but does hit everything else.

import type { Course } from './course';

const f = (x: number) => (Math.round(x * 1e6) / 1e6).toString();
const v = (xs: number[]) => xs.map(f).join(' ');
const OBST = 'contype="2" conaffinity="2" group="0"';

export function buildSceneXml(course: Course, jackalFile = 'jackal.xml'): string {
  const [ax, ay] = course.arena.size;
  const h = course.arena.wall_height ?? 0.4;
  const t = course.arena.wall_thickness ?? 0.1;
  const walls = [
    // name, center, half-size
    ['wall_n', [0, ay / 2 + t / 2, h / 2], [ax / 2 + t, t / 2, h / 2]],
    ['wall_s', [0, -ay / 2 - t / 2, h / 2], [ax / 2 + t, t / 2, h / 2]],
    ['wall_e', [ax / 2 + t / 2, 0, h / 2], [t / 2, ay / 2, h / 2]],
    ['wall_w', [-ax / 2 - t / 2, 0, h / 2], [t / 2, ay / 2, h / 2]],
  ] as const;
  const wallXml = walls.map(([n, p, s]) =>
    `    <geom name="${n}" type="box" pos="${v([...p])}" size="${v([...s])}" rgba="0.55 0.58 0.62 1" ${OBST}/>`);

  const obsXml = course.obstacles.map((o, i) => {
    const rgba = v(o.rgba ?? [0.85, 0.45, 0.2, 1]);
    if (o.type === 'box') {
      const [sx, sy, sz] = o.size;
      const yaw = o.yaw ?? 0;
      return `    <geom name="obs_${i}" type="box" pos="${v([o.pos[0], o.pos[1], sz / 2])}" size="${v([sx / 2, sy / 2, sz / 2])}" euler="0 0 ${f(yaw)}" rgba="${rgba}" ${OBST}/>`;
    }
    return `    <geom name="obs_${i}" type="cylinder" pos="${v([o.pos[0], o.pos[1], o.height / 2])}" size="${v([o.radius, o.height / 2])}" rgba="${rgba}" ${OBST}/>`;
  });

  return `<mujoco model="jackal_${course.id}">
  <compiler angle="radian"/>
  <option timestep="0.002" integrator="implicitfast"/>
  <include file="${jackalFile}"/>
  <worldbody>
    <light name="sun" pos="0 0 6" dir="0 0 -1" directional="true"/>
    <geom name="floor" type="plane" size="${v([ax / 2 + t, ay / 2 + t, 0.1])}" rgba="0.24 0.26 0.29 1" contype="1" conaffinity="1"/>
${wallXml.join('\n')}
${obsXml.join('\n')}
  </worldbody>
</mujoco>
`;
}
