// Contract conformance: every protocol/fixtures file must be accepted / clamped / rejected exactly as
// its folder says. bridge/tests/test_protocol.py runs the same files through the Python validator.
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { LIMITS } from '../../src/protocol/limits';
import { clampCmd, parseMsg } from '../../src/protocol/validate';
import { ROOT } from './helpers';

const FIX = resolve(ROOT, 'protocol/fixtures');
const files = (d: string) => readdirSync(resolve(FIX, d)).filter((f) => f.endsWith('.json'));
const read = (d: string, f: string) => readFileSync(resolve(FIX, d, f), 'utf8');

describe('protocol fixtures', () => {
  it.each(files('valid'))('valid/%s is accepted unchanged', (f) => {
    const r = parseMsg(read('valid', f));
    expect(r.ok).toBe(true);
    if (r.ok && r.msg.type === 'cmd') expect(clampCmd(r.msg, LIMITS.V_MAX, LIMITS.W_MAX)).toBe(r.msg);
  });

  it.each(files('clamp'))('clamp/%s is accepted and clamped', (f) => {
    const r = parseMsg(read('clamp', f));
    expect(r.ok).toBe(true);
    if (!r.ok || r.msg.type !== 'cmd') throw new Error('expected cmd');
    const c = clampCmd(r.msg, LIMITS.V_MAX, LIMITS.W_MAX);
    expect(c).not.toBe(r.msg);
    expect(Math.abs(c.v)).toBeLessThanOrEqual(LIMITS.V_MAX);
    expect(Math.abs(c.w)).toBeLessThanOrEqual(LIMITS.W_MAX);
    expect(Math.sign(c.v)).toBe(Math.sign(r.msg.v));
  });

  it.each(files('invalid'))('invalid/%s is rejected', (f) => {
    expect(parseMsg(read('invalid', f)).ok).toBe(false);
  });
});
