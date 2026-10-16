// Run log (brief §4.6): one CSV row per finished / DNF run, and a 20 Hz trace per run. Client-side only;
// the operator downloads the CSVs. (Pattern from the telepresence repo's extras/logger.ts.)
// If this data ever becomes research data, IRB applies.

import type { State } from '../protocol/types';
import type { BridgeClient } from '../net/bridgeClient';
import type { RunResult } from '../sim/run';
import type { Sim } from '../sim/sim';

export const RUN_COLUMNS = [
  'run', 'timestamp', 'team', 'source', 'course', 'completed', 'elapsed', 'score_time', 'collisions',
  'missed_gates', 'gates_passed', 'path_length', 'smoothness', 'deadman_pct', 'drops', 'mean_latency_ms',
  'latency_knob_ms', 'drop_knob_pct', 'drop_seed', 'rtlx',
  'rtlx_mental', 'rtlx_physical', 'rtlx_temporal', 'rtlx_performance', 'rtlx_effort', 'rtlx_frustration',
] as const;
export type RunRow = Record<(typeof RUN_COLUMNS)[number], string | number>;

const TRACE_COLUMNS = ['t', 'x', 'y', 'yaw', 'v', 'w', 'v_cmd', 'w_cmd', 'status', 'next_gate'] as const;

const csvCell = (v: unknown) => {
  const s = v === null || v === undefined ? '' : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export function toCsv(cols: readonly string[], rows: Record<string, unknown>[]): string {
  return [cols.join(','), ...rows.map((r) => cols.map((c) => csvCell(r[c])).join(','))].join('\n') + '\n';
}

export function download(name: string, text: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: 'text/csv' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export class RunLog {
  readonly rows: RunRow[] = [];
  readonly traces: { run: number; course: string; rows: Record<string, unknown>[] }[] = [];
  private trace: Record<string, unknown>[] = [];
  private rtt: number[] = [];
  private dropsAtStart = 0;
  private listeners: ((r: RunRow) => void)[] = [];

  constructor(private sim: Sim, private bridge: BridgeClient, private team: () => string) {
    sim.onEvent((name) => {
      if (name === 'run_start') {
        this.trace = [];
        this.rtt = [];
        this.dropsAtStart = this.drops();
      } else if ((name === 'finish' || name === 'dnf') && sim.run.result) {
        this.record(sim.run.result);
      }
    });
    sim.onState((s) => this.sample(s));
  }

  onRow(fn: (r: RunRow) => void): void { this.listeners.push(fn); }

  private drops(): number {
    const st = this.bridge.status;
    return this.sim.gate.stats.seqDrops + (st?.drops_invalid ?? 0) + (st?.drops_rate ?? 0) + this.bridge.dropsInvalid;
  }

  private sample(s: State): void {
    if (this.sim.run.phase !== 'running') return;
    const rtt = this.bridge.status?.rtt_ms;
    if (typeof rtt === 'number') this.rtt.push(rtt);
    this.trace.push({
      t: s.t, x: s.pose.x.toFixed(4), y: s.pose.y.toFixed(4), yaw: s.pose.yaw.toFixed(4),
      v: s.cmd_applied.v.toFixed(3), w: s.cmd_applied.w.toFixed(3),
      v_cmd: this.sim.target.v.toFixed(3), w_cmd: this.sim.target.w.toFixed(3),
      status: s.status, next_gate: s.course?.next_gate ?? '',
    });
  }

  private record(r: RunResult): void {
    const row: RunRow = {
      run: this.rows.length + 1,
      timestamp: new Date().toISOString(),
      team: this.team(),
      source: this.sim.gate.stats.lastSource ?? '',
      course: r.course,
      completed: r.completed ? 1 : 0,
      elapsed: r.elapsed,
      score_time: r.score_time ?? '',
      collisions: r.collisions,
      missed_gates: r.missed_gates,
      gates_passed: r.gates_passed,
      path_length: r.path_length,
      smoothness: r.smoothness,
      deadman_pct: r.deadman_pct,
      drops: this.drops() - this.dropsAtStart,
      mean_latency_ms: this.rtt.length ? +(this.rtt.reduce((a, b) => a + b, 0) / this.rtt.length).toFixed(1) : '',
      // the telepresence condition this run was driven under (fixed for the whole run)
      latency_knob_ms: this.sim.impairment.latencyMs,
      drop_knob_pct: this.sim.impairment.dropPct,
      drop_seed: this.sim.impairment.seed,
      rtlx: '', rtlx_mental: '', rtlx_physical: '', rtlx_temporal: '', rtlx_performance: '', rtlx_effort: '',
      rtlx_frustration: '',
    };
    this.rows.push(row);
    this.traces.push({ run: row.run as number, course: r.course, rows: this.trace });
    for (const fn of this.listeners) fn(row);
  }

  /** Workload answers for a run (from the RTLX form), written into its row. */
  setRtlx(run: number, scores: Record<string, number>): void {
    const row = this.rows.find((r) => r.run === run);
    if (!row) return;
    row.rtlx = scores.rtlx;
    for (const k of ['mental', 'physical', 'temporal', 'performance', 'effort', 'frustration']) {
      (row as Record<string, string | number>)[`rtlx_${k}`] = scores[k];
    }
  }

  runsCsv(): string { return toCsv(RUN_COLUMNS, this.rows); }
  lastTraceCsv(): string | null {
    const t = this.traces.at(-1);
    return t ? toCsv(TRACE_COLUMNS, t.rows) : null;
  }
}
