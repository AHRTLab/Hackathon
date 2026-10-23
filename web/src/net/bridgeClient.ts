// Browser ↔ bridge link (ws://localhost:8765/sim by default, override with ?bridge=ws://host:port/sim).
//
// In:  forwarded commands → validated again (the sim is authoritative) → gate.ingest
//      bridge_status (2 Hz) → panel + answered with a pong, so the bridge can measure RTT
// Out: state at 20 Hz (+ cmd_echo_tb), which the bridge fans out to /state subscribers
//
// Reconnects with backoff (0.5 → 5 s). Chrome logs each refused connection to the console; that is
// expected while no bridge is running, and the page stays drivable by keyboard / gamepad.

import { LIMITS, PROTOCOL_MAJOR } from '../protocol/limits';
import type { BridgeStatus, State } from '../protocol/types';
import { parseMsg } from '../protocol/validate';
import type { Sim } from '../sim/sim';

// 'replaced' = the bridge dropped us because another sim tab connected. We do NOT auto-reconnect then,
// or two open tabs would keep kicking each other off; the user clicks Connect to take control back.
export type LinkState = 'connecting' | 'open' | 'closed' | 'replaced';
export const REPLACED_CODE = 4000; // bridge/jackal_bridge/server.py

export class BridgeClient {
  url: string;
  link: LinkState = 'closed';
  status: BridgeStatus | null = null;
  versionWarning: string | null = null;
  rxCmds = 0;
  lastAssist: { overlay: import('../ui/minimap').AssistOverlay; at: number } | null = null;   // from a cmd's `assist` field
  dropsInvalid = 0;   // dropped by the browser's own validation (the bridge should have caught them)
  private lastCmdMs = -Infinity;
  private ws: WebSocket | null = null;
  private backoff = 500;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private rateWindow: number[] = [];

  constructor(url: string, private sim: Sim) {
    this.url = url;
    sim.onState((s) => this.sendState(s));
    sim.onEvent((name, t) => {
      if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify({ type: 'event', name, t }));
    });
  }

  static defaultUrl(): string {
    const p = new URLSearchParams(location.search).get('bridge');
    if (p) return p;
    // Served by `jackal-bridge --serve-site`: the bridge is this page's own origin (no mixed content,
    // so Safari connects and Chrome doesn't ask for local-network permission).
    if (document.querySelector('meta[name="jackal-bridge"][content="same-origin"]')) {
      return `ws://${location.host}${LIMITS.paths.sim}`;
    }
    return `ws://localhost:${LIMITS.ports.ws}${LIMITS.paths.sim}`;
  }

  connect(url = this.url): void {
    this.url = url;
    this.close();
    this.link = 'connecting';
    let ws: WebSocket;
    try {
      ws = new WebSocket(url);
    } catch {
      this.link = 'closed';
      this.versionWarning = `invalid bridge URL: ${url}`;
      return;
    }
    this.ws = ws;
    ws.onopen = () => { this.link = 'open'; this.backoff = 500; };
    ws.onmessage = (ev) => this.onMessage(String(ev.data));
    ws.onclose = (ev) => {
      if (this.ws !== ws) return;
      this.ws = null;
      this.status = null;
      if (ev.code === REPLACED_CODE) { this.link = 'replaced'; return; }
      this.link = 'closed';
      this.timer = setTimeout(() => this.connect(), this.backoff);
      this.backoff = Math.min(5000, this.backoff * 2);
    };
  }

  close(): void {
    if (this.timer) { clearTimeout(this.timer); this.timer = null; }
    const ws = this.ws;
    this.ws = null;
    if (ws) { ws.onclose = null; ws.close(); }
    this.link = 'closed';
    this.status = null;
  }

  /** True while a bridge source is driving: local keyboard / gamepad are ignored. */
  isActive(nowMs: number): boolean {
    return this.link === 'open' && (this.status?.active_source != null || nowMs - this.lastCmdMs < LIMITS.DEADMAN_MS);
  }

  rateHz(nowMs: number): number {
    this.rateWindow = this.rateWindow.filter((t) => nowMs - t < 1000);
    return this.rateWindow.length;
  }

  private onMessage(raw: string): void {
    let o: unknown;
    try { o = JSON.parse(raw); } catch { this.dropsInvalid++; return; }
    if (o && typeof o === 'object' && (o as { type?: string }).type === 'bridge_status') {
      const s = o as BridgeStatus & { tb?: number };
      this.status = s;
      const major = String(s.protocol_version ?? '').split('.')[0];
      this.versionWarning = major === PROTOCOL_MAJOR ? null
        : `bridge speaks protocol ${s.protocol_version}, this page speaks ${LIMITS.protocol_version}`;
      if (typeof s.tb === 'number') this.ws?.send(JSON.stringify({ type: 'pong', tb: s.tb }));
      return;
    }
    const r = parseMsg(raw);
    if (!r.ok) { this.dropsInvalid++; return; }
    const now = performance.now();
    this.sim.deliver(r.msg, now);
    if (r.msg.type === 'cmd') {
      this.lastCmdMs = now; this.rxCmds++; this.rateWindow.push(now);
      const a = (o as { assist?: unknown }).assist;
      this.lastAssist = a && typeof a === 'object' ? { overlay: a as import('../ui/minimap').AssistOverlay, at: now } : null;
    }
  }

  private sendState(s: State): void {
    if (this.ws?.readyState !== WebSocket.OPEN) return;
    this.ws.send(JSON.stringify({ ...s, cmd_echo_tb: this.sim.gate.stats.lastEchoTb }));
  }
}
