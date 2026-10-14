// Helpers for M1 specs: spawn a real jackal-bridge (and example senders) as child processes.
import { spawn, type ChildProcess } from 'node:child_process';
import { createSocket } from 'node:dgram';
import { createServer } from 'node:net';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
export const PYTHON = process.env.PYTHON ?? resolve(ROOT, '.venv/bin/python');
export const EXAMPLES = resolve(ROOT, 'events/2026-aware-ai-jackal/examples');

export function freePort(): Promise<number> {
  return new Promise((ok, fail) => {
    const s = createServer();
    s.listen(0, '127.0.0.1', () => { const p = (s.address() as { port: number }).port; s.close(() => ok(p)); });
    s.on('error', fail);
  });
}

export function freeUdpPort(): Promise<number> {
  return new Promise((ok) => {
    const s = createSocket('udp4');
    s.bind(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => ok(p)); });
  });
}

export interface Proc { child: ChildProcess; out: string[]; kill: () => void; exited: Promise<number | null> }

export function run(args: string[], opts: { waitFor?: RegExp; timeoutMs?: number } = {}): Promise<Proc> {
  const child = spawn(PYTHON, ['-u', ...args], { cwd: ROOT, env: { ...process.env, PYTHONUNBUFFERED: '1' } });
  const out: string[] = [];
  const exited = new Promise<number | null>((r) => child.on('exit', (code) => r(code)));
  const proc: Proc = { child, out, exited, kill: () => { if (child.exitCode === null) child.kill('SIGKILL'); } };
  return new Promise((ok, fail) => {
    const onData = (d: Buffer) => {
      out.push(d.toString());
      if (opts.waitFor && opts.waitFor.test(out.join(''))) ok(proc);
    };
    child.stdout.on('data', onData);
    child.stderr.on('data', onData);
    child.on('exit', (code) => { if (opts.waitFor) fail(new Error(`exited ${code} before ready:\n${out.join('')}`)); });
    if (!opts.waitFor) ok(proc);
    setTimeout(() => fail(new Error(`timeout waiting for ${opts.waitFor}:\n${out.join('')}`)), opts.timeoutMs ?? 20_000);
  });
}

export async function startBridge(extra: string[] = ['--no-lsl']): Promise<Proc & { port: number; udpPort: number }> {
  const port = await freePort(), udpPort = await freeUdpPort();
  const p = await run(['-m', 'jackal_bridge', '--host', '127.0.0.1', '--port', String(port), '--udp-port', String(udpPort), '--quiet', ...extra],
    { waitFor: /jackal-bridge \d/ });
  return Object.assign(p, { port, udpPort });
}

export function sendUdp(port: number, msg: string): Promise<void> {
  return new Promise((ok) => {
    const s = createSocket('udp4');
    s.send(msg, port, '127.0.0.1', () => { s.close(); ok(); });
  });
}
