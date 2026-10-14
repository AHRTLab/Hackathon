// Validation for incoming command messages, mirroring protocol/cmd.schema.json without pulling in a
// JSON-Schema library. tests/unit/validate.test.ts runs every protocol/fixtures file through this, and
// the bridge's pytest runs the same fixtures through jsonschema, so the two cannot drift apart.

import type { Cmd, Reset } from './types';

export type ParseResult = { ok: true; msg: Cmd | Reset } | { ok: false; error: string };

const isObj = (o: unknown): o is Record<string, unknown> => typeof o === 'object' && o !== null && !Array.isArray(o);
const finite = (x: unknown): x is number => typeof x === 'number' && Number.isFinite(x);

export function validateMsg(o: unknown): ParseResult {
  if (!isObj(o)) return { ok: false, error: 'not a JSON object' };
  if (o.type === 'reset') return { ok: true, msg: o as unknown as Reset };
  if (o.type !== 'cmd') return { ok: false, error: `unknown type ${JSON.stringify(o.type)}` };
  if (!finite(o.v)) return { ok: false, error: 'v must be a finite number' };
  if (!finite(o.w)) return { ok: false, error: 'w must be a finite number' };
  if (o.estop !== undefined && typeof o.estop !== 'boolean') return { ok: false, error: 'estop must be a boolean' };
  if (o.action !== undefined && o.action !== null && !(typeof o.action === 'string' && o.action.length <= 64)) {
    return { ok: false, error: 'action must be a string (<= 64 chars) or null' };
  }
  if (o.source !== undefined && !(typeof o.source === 'string' && o.source.length <= 64)) {
    return { ok: false, error: 'source must be a string (<= 64 chars)' };
  }
  if (o.seq !== undefined && !(Number.isInteger(o.seq) && (o.seq as number) >= 0)) {
    return { ok: false, error: 'seq must be an integer >= 0' };
  }
  if (o.t !== undefined && !finite(o.t)) return { ok: false, error: 't must be a finite number' };
  return { ok: true, msg: o as unknown as Cmd };
}

export function parseMsg(raw: string): ParseResult {
  let o: unknown;
  try {
    o = JSON.parse(raw); // rejects NaN / Infinity tokens; 1e400 parses to Infinity and fails `finite`
  } catch {
    return { ok: false, error: 'malformed JSON' };
  }
  return validateMsg(o);
}

export function clampCmd<T extends Cmd>(c: T, vMax: number, wMax: number): T {
  const v = Math.max(-vMax, Math.min(vMax, c.v));
  const w = Math.max(-wMax, Math.min(wMax, c.w));
  return v === c.v && w === c.w ? c : { ...c, v, w };
}
