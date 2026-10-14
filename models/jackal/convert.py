#!/usr/bin/env python3
"""Reproducible Clearpath Jackal URDF -> MJCF converter for the browser sim.

    python models/jackal/convert.py            # fetch pinned upstream (if needed) and regenerate
    python models/jackal/convert.py --check    # regenerate in memory, fail if committed files differ

What it does:
  1. Sparse-clones jackal/jackal @ PIN into models/jackal/_src (gitignored).
  2. Expands jackal.urdf.xacro with pip `xacro` (no ROS needed). Upstream `$(find jackal_description)`
     needs ROS's package index, so we rewrite it to a temp copy's path, and we drop the sensor
     accessories / OutdoorNav includes (they pull in other ROS packages and we don't want them).
  3. Parses the URDF (links, fixed + wheel joints, visual meshes, inertials).
  4. Writes OUR OWN MJCF (not MuJoCo's URDF importer). It needs things the importer can't give: a
     kinematic planar base (slide x, slide y, hinge yaw, each with a velocity actuator), one simplified
     collision box sized from the visual meshes' footprint, and visual-only meshes and wheels.
  5. Copies the three visual STLs + upstream LICENSE, writes manifest.json (the files the web loader
     puts in the MuJoCo VFS), and prints the measured dimensions so they can be checked against the brief.

Collision bits: robot + obstacles use contype=conaffinity=2 and the floor uses 1, so the chassis never
touches the floor (no z joint anyway) but does collide with obstacles.
"""
from __future__ import annotations

import argparse
import json
import math
import re
import shutil
import struct
import subprocess
import sys
import tempfile
import xml.etree.ElementTree as ET
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC = HERE / "_src"
UPSTREAM = "https://github.com/jackal/jackal.git"
BRANCH = "noetic-devel"
PIN = "4ddf9b578bb7abce1115c8dc59d8b7f86aa9268c"  # noetic-devel, 2024-05-24
MESHES = ["jackal-base.stl", "jackal-fender.stl", "jackal-wheel.stl"]

# Kinematic-base actuator tuning. Time constant ~ mass / kv (about 30 ms for 18 kg). The force limits
# are what make the robot stall against walls instead of tunnelling through them.
KV_LIN, F_LIN = 600.0, 400.0     # N/(m/s), N
KV_YAW, T_YAW = 20.0, 60.0       # N·m/(rad/s), N·m


# ---------------------------------------------------------------------------------------------- upstream
def run(cmd: list[str], cwd: Path) -> None:
    subprocess.run(cmd, cwd=cwd, check=True)


def ensure_src() -> None:
    if not (SRC / ".git").exists():
        run(["git", "clone", "--filter=blob:none", "--sparse", "--branch", BRANCH, UPSTREAM, str(SRC)], cwd=HERE)
        run(["git", "sparse-checkout", "set", "jackal_description", "jackal_control"], cwd=SRC)
    head = subprocess.run(["git", "rev-parse", "HEAD"], cwd=SRC, check=True, capture_output=True, text=True).stdout.strip()
    if head != PIN:
        run(["git", "fetch", "--depth", "1", "origin", PIN], cwd=SRC)
        run(["git", "checkout", "-q", PIN], cwd=SRC)


def expand_xacro() -> ET.Element:
    try:
        import xacro  # type: ignore
    except ImportError:
        sys.exit("pip install xacro   (needed to expand jackal.urdf.xacro)")
    with tempfile.TemporaryDirectory() as td:
        desc = Path(td) / "jackal_description"
        shutil.copytree(SRC / "jackal_description", desc)
        for f in desc.rglob("*"):
            if f.suffix in {".xacro", ".urdf", ".gazebo"}:
                f.write_text(f.read_text().replace("$(find jackal_description)", str(desc)))
        main = desc / "urdf" / "jackal.urdf.xacro"
        text = main.read_text()
        text = re.sub(r'<xacro:include filename="[^"]*accessories\.urdf\.xacro"\s*/>', "", text)
        text = re.sub(r'<xacro:if value="\$\(arg outdoornav_enabled\)">.*?</xacro:if>', "", text, flags=re.S)
        main.write_text(text)
        doc = xacro.process_file(str(main))
        return ET.fromstring(doc.toxml())


# ------------------------------------------------------------------------------------------------- math
Mat = list[list[float]]


def rpy_to_mat(r: float, p: float, y: float) -> Mat:
    """URDF rpy = fixed-axis X, then Y, then Z  ->  R = Rz(y) · Ry(p) · Rx(r)."""
    cr, sr, cp, sp, cy, sy = math.cos(r), math.sin(r), math.cos(p), math.sin(p), math.cos(y), math.sin(y)
    return [
        [cy * cp, cy * sp * sr - sy * cr, cy * sp * cr + sy * sr],
        [sy * cp, sy * sp * sr + cy * cr, sy * sp * cr - cy * sr],
        [-sp, cp * sr, cp * cr],
    ]


def mat_mul(a: Mat, b: Mat) -> Mat:
    return [[sum(a[i][k] * b[k][j] for k in range(3)) for j in range(3)] for i in range(3)]


def mat_vec(a: Mat, v: list[float]) -> list[float]:
    return [sum(a[i][k] * v[k] for k in range(3)) for i in range(3)]


def mat_to_quat(m: Mat) -> list[float]:
    """Rotation matrix -> MuJoCo quaternion [w, x, y, z]."""
    t = m[0][0] + m[1][1] + m[2][2]
    if t > 0:
        s = math.sqrt(t + 1.0) * 2
        q = [0.25 * s, (m[2][1] - m[1][2]) / s, (m[0][2] - m[2][0]) / s, (m[1][0] - m[0][1]) / s]
    elif m[0][0] > m[1][1] and m[0][0] > m[2][2]:
        s = math.sqrt(1.0 + m[0][0] - m[1][1] - m[2][2]) * 2
        q = [(m[2][1] - m[1][2]) / s, 0.25 * s, (m[0][1] + m[1][0]) / s, (m[0][2] + m[2][0]) / s]
    elif m[1][1] > m[2][2]:
        s = math.sqrt(1.0 + m[1][1] - m[0][0] - m[2][2]) * 2
        q = [(m[0][2] - m[2][0]) / s, (m[0][1] + m[1][0]) / s, 0.25 * s, (m[1][2] + m[2][1]) / s]
    else:
        s = math.sqrt(1.0 + m[2][2] - m[0][0] - m[1][1]) * 2
        q = [(m[1][0] - m[0][1]) / s, (m[0][2] + m[2][0]) / s, (m[1][2] + m[2][1]) / s, 0.25 * s]
    if q[0] < 0:
        q = [-c for c in q]
    return q


class Pose:
    def __init__(self, R: Mat | None = None, t: list[float] | None = None):
        self.R = R or [[1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0]]
        self.t = t or [0.0, 0.0, 0.0]

    @staticmethod
    def from_origin(el: ET.Element | None) -> "Pose":
        if el is None:
            return Pose()
        xyz = [float(v) for v in el.get("xyz", "0 0 0").split()]
        rpy = [float(v) for v in el.get("rpy", "0 0 0").split()]
        return Pose(rpy_to_mat(*rpy), xyz)

    def __mul__(self, o: "Pose") -> "Pose":
        return Pose(mat_mul(self.R, o.R), [a + b for a, b in zip(mat_vec(self.R, o.t), self.t)])

    def apply(self, v: list[float]) -> list[float]:
        return [a + b for a, b in zip(mat_vec(self.R, v), self.t)]


def stl_vertices(path: Path) -> list[list[float]]:
    data = path.read_bytes()
    n = struct.unpack_from("<I", data, 80)[0]
    if 84 + 50 * n == len(data):  # binary STL
        out = []
        for i in range(n):
            vals = struct.unpack_from("<12f", data, 84 + 50 * i)
            out.extend([list(vals[3:6]), list(vals[6:9]), list(vals[9:12])])
        return out
    verts = re.findall(rb"vertex\s+(\S+)\s+(\S+)\s+(\S+)", data)  # ASCII fallback
    return [[float(x), float(y), float(z)] for x, y, z in verts]


# ------------------------------------------------------------------------------------------- conversion
def fmt(v: list[float] | float, nd: int = 6) -> str:
    vals = v if isinstance(v, list) else [v]
    return " ".join(f"{round(x, nd) + 0.0:g}" for x in vals)


def convert(urdf: ET.Element) -> tuple[str, dict]:
    links = {l.get("name"): l for l in urdf.findall("link")}
    joints = urdf.findall("joint")
    rgba = {m.get("name"): m.find("color").get("rgba") for m in urdf.findall("material") if m.find("color") is not None}

    # Pose of every link in the base_link frame. Wheels are recorded separately; they become child bodies.
    children: dict[str, list[ET.Element]] = {}
    for j in joints:
        children.setdefault(j.find("parent").get("link"), []).append(j)
    rigid: dict[str, Pose] = {"base_link": Pose()}
    wheels: list[tuple[str, str, Pose]] = []  # (joint name, link name, pose in base frame)
    stack = ["base_link"]
    while stack:
        parent = stack.pop()
        for j in children.get(parent, []):
            child = j.find("child").get("link")
            pose = rigid[parent] * Pose.from_origin(j.find("origin"))
            if j.get("type") == "fixed":
                rigid[child] = pose
                stack.append(child)
            elif j.get("type") == "continuous" and "wheel" in child:
                wheels.append((j.get("name"), child, pose))

    def visuals(link: str) -> list[tuple[str, Pose, str]]:
        out = []
        for vis in links[link].findall("visual"):
            mesh = vis.find("geometry/mesh")
            if mesh is None:
                continue
            fname = Path(mesh.get("filename")).name
            if fname not in MESHES:
                continue
            mat = vis.find("material")
            out.append((fname, Pose.from_origin(vis.find("origin")), rgba.get(mat.get("name") if mat is not None else "", "0.3 0.3 0.3 1")))
        return out

    # Visual-mesh footprint in the base frame -> collision box + reported dimensions.
    lo, hi = [1e9] * 3, [-1e9] * 3
    mesh_cache = {m: stl_vertices(SRC / "jackal_description" / "meshes" / m) for m in MESHES}

    def grow(fname: str, pose: Pose) -> None:
        for v in mesh_cache[fname]:
            p = pose.apply(v)
            for k in range(3):
                lo[k] = min(lo[k], p[k])
                hi[k] = max(hi[k], p[k])

    base_geoms = []
    for link, pose in rigid.items():
        for fname, vpose, color in visuals(link):
            full = pose * vpose
            grow(fname, full)
            base_geoms.append((link, fname, full, color))
    wheel_geoms = []
    for jname, link, pose in wheels:
        for fname, vpose, color in visuals(link):
            grow(fname, pose * vpose)
            wheel_geoms.append((jname, link, pose, fname, vpose, color))

    wheel_r = float(links[wheels[0][1]].find("collision/geometry/cylinder").get("radius"))
    wheel_z = wheels[0][2].t[2]
    base_z = wheel_r - wheel_z            # base_link height so wheel centres sit at wheel_radius
    track = abs(wheels[0][2].t[1]) * 2
    wheelbase = max(w[2].t[0] for w in wheels) - min(w[2].t[0] for w in wheels)

    mass = 0.0
    for link in list(rigid) + [w[1] for w in wheels]:
        m = links[link].find("inertial/mass")
        mass += float(m.get("value")) if m is not None else 0.0
    base_mass = sum(float(links[l].find("inertial/mass").get("value")) for l in rigid if links[l].find("inertial/mass") is not None)
    L, W, H = (hi[0] - lo[0]), (hi[1] - lo[1]), (hi[2] - lo[2])
    # Box inertia of the chassis (good enough for a kinematic base; only yaw inertia matters).
    ixx, iyy, izz = base_mass * (W * W + H * H) / 12, base_mass * (L * L + H * H) / 12, base_mass * (L * L + W * W) / 12

    col_center = [(hi[k] + lo[k]) / 2 for k in range(3)]
    col_half = [(hi[k] - lo[k]) / 2 for k in range(3)]

    q = lambda pose: fmt(mat_to_quat(pose.R))  # noqa: E731
    lines = [
        '<!-- GENERATED by models/jackal/convert.py from jackal/jackal@%s (BSD-3-Clause, see LICENSE). Do not edit. -->' % PIN[:12],
        '<mujoco model="jackal">',
        '  <compiler angle="radian" meshdir="meshes"/>',
        '  <default>',
        '    <default class="jackal_visual"><geom type="mesh" contype="0" conaffinity="0" group="1" density="0"/></default>',
        '    <default class="jackal_collision"><geom contype="2" conaffinity="2" group="3" rgba="1 0 0 0.25"/></default>',
        '  </default>',
        '  <asset>',
        *[f'    <mesh name="{Path(m).stem}" file="{m}"/>' for m in MESHES],
        '  </asset>',
        '  <worldbody>',
        f'    <body name="base_link" pos="0 0 {fmt(base_z)}">',
        '      <joint name="slide_x" type="slide" axis="1 0 0"/>',
        '      <joint name="slide_y" type="slide" axis="0 1 0"/>',
        '      <joint name="yaw" type="hinge" axis="0 0 1"/>',
        f'      <inertial pos="0 0 {fmt(col_center[2])}" mass="{fmt(base_mass, 3)}" diaginertia="{fmt([ixx, iyy, izz], 4)}"/>',
        f'      <geom name="chassis" class="jackal_collision" type="box" pos="{fmt(col_center)}" size="{fmt(col_half)}"/>',
    ]
    for link, fname, pose, color in base_geoms:
        lines.append(f'      <geom name="{link}_visual" class="jackal_visual" mesh="{Path(fname).stem}" pos="{fmt(pose.t)}" quat="{q(pose)}" rgba="{color}"/>')
    lines += [
        '      <site name="lidar" pos="0.12 0 %s" size="0.03"/>' % fmt(hi[2] + 0.02),
        '      <site name="fpv" pos="%s 0 %s" size="0.02"/>' % (fmt(hi[0] - 0.02), fmt(hi[2] - 0.03)),
    ]
    for jname, link, pose, fname, vpose, color in wheel_geoms:
        m = links[link].find("inertial/mass").get("value")
        lines += [
            f'      <body name="{link}" pos="{fmt(pose.t)}">',
            f'        <joint name="{jname}" type="hinge" axis="0 1 0"/>',
            f'        <inertial pos="0 0 0" mass="{m}" diaginertia="0.0013 0.0024 0.0013"/>',
            f'        <geom name="{link}_visual" class="jackal_visual" mesh="{Path(fname).stem}" pos="{fmt(vpose.t)}" quat="{q(vpose)}" rgba="{color}"/>',
            '      </body>',
        ]
    lines += [
        '    </body>',
        '  </worldbody>',
        '  <actuator>',
        f'    <velocity name="vx" joint="slide_x" kv="{KV_LIN:g}" forcelimited="true" forcerange="-{F_LIN:g} {F_LIN:g}"/>',
        f'    <velocity name="vy" joint="slide_y" kv="{KV_LIN:g}" forcelimited="true" forcerange="-{F_LIN:g} {F_LIN:g}"/>',
        f'    <velocity name="wz" joint="yaw" kv="{KV_YAW:g}" forcelimited="true" forcerange="-{T_YAW:g} {T_YAW:g}"/>',
        '  </actuator>',
        '</mujoco>',
        '',
    ]
    dims = {
        "footprint_lwh_m": [round(L, 3), round(W, 3), round(hi[2] + base_z, 3)],
        "mass_kg": round(mass, 2),
        "wheel_radius_m": wheel_r,
        "track_m": round(track, 4),
        "wheelbase_m": round(wheelbase, 4),
        "base_z_m": round(base_z, 4),
        "wheels": [w[0] for w in wheels],
    }
    return "\n".join(lines), dims


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--check", action="store_true", help="fail if the committed jackal.xml is out of date")
    args = ap.parse_args()

    ensure_src()
    xml, dims = convert(expand_xacro())
    manifest = {"model": "jackal.xml", "files": ["jackal.xml", *[f"meshes/{m}" for m in MESHES]], "dims": dims}
    manifest_text = json.dumps(manifest, indent=2) + "\n"

    if args.check:
        stale = [p for p, want in [("jackal.xml", xml), ("manifest.json", manifest_text)]
                 if not (HERE / p).exists() or (HERE / p).read_text() != want]
        if stale:
            sys.exit(f"out of date: {stale}; run python models/jackal/convert.py")
        print("jackal model up to date")
        return

    (HERE / "meshes").mkdir(exist_ok=True)
    for m in MESHES:
        shutil.copyfile(SRC / "jackal_description" / "meshes" / m, HERE / "meshes" / m)
    shutil.copyfile(SRC / "LICENSE", HERE / "LICENSE")
    (HERE / "jackal.xml").write_text(xml)
    (HERE / "manifest.json").write_text(manifest_text)

    print("wrote models/jackal/{jackal.xml, manifest.json, meshes/, LICENSE}")
    print("measured (brief §4.2 expects ~0.508 x 0.430 x 0.25 m, ~17 kg, r ~0.098, track ~0.376):")
    for k, v in dims.items():
        print(f"  {k:16s} {v}")


if __name__ == "__main__":
    main()
