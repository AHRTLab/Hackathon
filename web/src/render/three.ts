// three.js view of the MuJoCo model. We work Z-up in three.js too (camera.up = +z), so MuJoCo positions
// and rotation matrices are copied straight across, with no axis or quaternion-order conversion.
// Geometry comes from the compiled model (mesh_vert / mesh_face), so no separate STL loading.

import * as THREE from 'three';
import type { MjData, MjModel } from '@mujoco/mujoco';

// mjtGeom values
const PLANE = 0, SPHERE = 2, CAPSULE = 3, ELLIPSOID = 4, CYLINDER = 5, BOX = 6, MESH = 7;
const COLLISION_GROUP = 3; // jackal_collision class; hidden unless debug

export class SceneView {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(60, 1, 0.05, 200);
  private geoms: { id: number; obj: THREE.Object3D }[] = [];
  private collisionObjs: THREE.Object3D[] = [];
  private m4 = new THREE.Matrix4();

  constructor(canvas: HTMLCanvasElement, private model: MjModel) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.scene.background = new THREE.Color(0x1b1f25);
    this.camera.up.set(0, 0, 1);

    this.scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x30343a, 1.6));
    const sun = new THREE.DirectionalLight(0xffffff, 1.8);
    sun.position.set(4, -3, 8);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 0.5, far: 30 });
    this.scene.add(sun);

    this.build();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  private build(): void {
    const m = this.model;
    for (let i = 0; i < m.ngeom; i++) {
      const type = m.geom_type[i];
      const s = [m.geom_size[3 * i], m.geom_size[3 * i + 1], m.geom_size[3 * i + 2]];
      const rgba = [0, 1, 2, 3].map((k) => m.geom_rgba[4 * i + k]);
      let geo: THREE.BufferGeometry | null = null;
      if (type === PLANE) {
        geo = new THREE.PlaneGeometry(2 * s[0], 2 * s[1]);
      } else if (type === BOX) {
        geo = new THREE.BoxGeometry(2 * s[0], 2 * s[1], 2 * s[2]);
      } else if (type === CYLINDER) {
        geo = new THREE.CylinderGeometry(s[0], s[0], 2 * s[1], 32).rotateX(Math.PI / 2); // three's axis is y
      } else if (type === SPHERE || type === ELLIPSOID) {
        geo = new THREE.SphereGeometry(1, 24, 16).scale(s[0], type === SPHERE ? s[0] : s[1], type === SPHERE ? s[0] : s[2]);
      } else if (type === CAPSULE) {
        geo = new THREE.CapsuleGeometry(s[0], 2 * s[1], 8, 16).rotateX(Math.PI / 2);
      } else if (type === MESH) {
        geo = this.meshGeometry(m.geom_dataid[i]);
      }
      if (!geo) continue;
      const isCollision = m.geom_group[i] === COLLISION_GROUP;
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(rgba[0], rgba[1], rgba[2]),
        transparent: rgba[3] < 1, opacity: rgba[3],
        roughness: type === PLANE ? 0.95 : 0.6, metalness: 0.05,
        flatShading: type === MESH,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = type !== PLANE && !isCollision;
      mesh.receiveShadow = true;
      mesh.matrixAutoUpdate = false;
      if (isCollision) { mesh.visible = false; this.collisionObjs.push(mesh); }
      this.scene.add(mesh);
      this.geoms.push({ id: i, obj: mesh });
      if (type === PLANE) this.addGrid(s[0], s[1]);
    }
  }

  private addGrid(hx: number, hy: number): void {
    const grid = new THREE.GridHelper(2 * Math.max(hx, hy), 2 * Math.round(Math.max(hx, hy)), 0x5a6270, 0x3a4048);
    grid.rotateX(Math.PI / 2);
    grid.position.z = 0.002;
    this.scene.add(grid);
  }

  private meshGeometry(meshId: number): THREE.BufferGeometry {
    const m = this.model;
    const va = m.mesh_vertadr[meshId], vn = m.mesh_vertnum[meshId];
    const fa = m.mesh_faceadr[meshId], fn = m.mesh_facenum[meshId];
    const pos = new Float32Array((m.mesh_vert as Float32Array).subarray(3 * va, 3 * (va + vn)));
    const idx = new Uint32Array((m.mesh_face as Int32Array).subarray(3 * fa, 3 * (fa + fn)));
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.computeVertexNormals();
    return g;
  }

  showCollision(on: boolean): void { for (const o of this.collisionObjs) o.visible = on; }

  sync(data: MjData): void {
    const p = data.geom_xpos as Float64Array, R = data.geom_xmat as Float64Array;
    for (const { id, obj } of this.geoms) {
      const r = 9 * id, t = 3 * id;
      this.m4.set(R[r], R[r + 1], R[r + 2], p[t], R[r + 3], R[r + 4], R[r + 5], p[t + 1], R[r + 6], R[r + 7], R[r + 8], p[t + 2], 0, 0, 0, 1);
      obj.matrix.copy(this.m4);
      obj.matrixWorldNeedsUpdate = true;
    }
  }

  render(): void { this.renderer.render(this.scene, this.camera); }

  private resize(): void {
    const c = this.renderer.domElement;
    const w = c.clientWidth || window.innerWidth, h = c.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
}
