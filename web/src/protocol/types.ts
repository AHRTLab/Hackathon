// TypeScript view of protocol/*.schema.json. Kept by hand; the fixtures conformance test keeps
// validate.ts (and therefore these shapes) in agreement with the Python bridge.

export type Ingress = 'lsl' | 'udp' | 'ws';

export interface Cmd {
  type: 'cmd';
  v: number;
  w: number;
  estop?: boolean;
  action?: string | null;
  source?: string;
  seq?: number;
  t?: number;
  // Added by the bridge when forwarding (link.schema.json); absent for local keyboard/gamepad input.
  ingress?: Ingress;
  tb?: number;
}

export interface Reset {
  type: 'reset';
  ingress?: Ingress;
  tb?: number;
}

export type Status = 'ok' | 'deadman' | 'estop' | 'idle' | 'finished';

export interface Twist { v: number; w: number }
export interface Pose2D { x: number; y: number; yaw: number }

export interface State {
  type: 'state';
  t: number;
  pose: Pose2D;
  vel: Twist;
  cmd_applied: Twist;
  cmd_echo_t: number | null;
  status: Status;
  collisions: number;
  course: null | { id: string; next_gate: number; gates_passed: number; elapsed: number; done: boolean };
  cmd_echo_tb?: number | null; // link-only: echo of the bridge's tb for RTT
}

export interface BridgeStatus {
  type: 'bridge_status';
  protocol_version: string;
  active_source: string | null;
  ingress: Ingress | null;
  deadman?: boolean;
  rate_hz?: number;
  drops_invalid?: number;
  drops_rate?: number;
  drops_inactive?: number;
  rtt_ms?: number | null;
  lsl?: string;
  lsl_peers?: number;
}
