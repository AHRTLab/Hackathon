// M2 acceptance: the reference autopilot completes L1–L3 through a real bridge; run CSV has every
// brief §4.6 column; cameras switch; JackalState/Scan/Events come out on LSL next to a Myo stream.
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Page } from '@playwright/test';
import { EXAMPLES, run, startBridge } from './bridge';
import { expect, test } from './fixtures';
import { RUN_COLUMNS } from '../../src/ui/runLog';

async function openCourse(page: Page, port: number, course: string): Promise<void> {
  await page.goto(`./?course=${course}&bridge=ws://127.0.0.1:${port}/sim`);
  await page.waitForFunction(() => (window as any).__bridge?.link === 'open', null, { timeout: 60_000 });
  await page.waitForFunction(() => (window as any).__sim.time > 0.3, null, { timeout: 30_000 });
}

for (const course of ['L1-gates', 'L2-slalom', 'L3-corridor-dock']) {
  test(`autopilot_gates.py completes ${course} through the bridge`, async ({ page, errors }) => {
    test.setTimeout(150_000);
    const b = await startBridge();
    try {
      await openCourse(page, b.port, course);
      const p = await run([`${EXAMPLES}/autopilot_gates.py`, '--bridge', `ws://127.0.0.1:${b.port}`, '--timeout', '120']);
      const code = await p.exited;
      expect(code, p.out.join('')).toBe(0);
      const res = await page.evaluate(() => (window as any).__sim.run.result);
      expect(res).toMatchObject({ course, completed: true, missed_gates: 0 });
      await expect(page.locator('#finish-banner')).toContainText('Finished');
      await expect(page.locator('#runs-count')).toHaveText('runs 1');

      const [dl] = await Promise.all([page.waitForEvent('download'), page.locator('#dl-runs').click()]);
      const csv = await (await import('node:fs/promises')).readFile(await dl.path(), 'utf8');
      const [head, row] = csv.trim().split('\n');
      expect(head.split(',')).toEqual([...RUN_COLUMNS]);
      expect(row).toContain(course);
      const [tr] = await Promise.all([page.waitForEvent('download'), page.locator('#dl-trace').click()]);
      const trace = (await (await import('node:fs/promises')).readFile(await tr.path(), 'utf8')).trim().split('\n');
      expect(trace.length).toBeGreaterThan(100); // 20 Hz for the whole run
    } finally {
      b.kill();
    }
    void errors;
  });
}

test('cameras: buttons and C key cycle chase → top → FPV', async ({ page, errors }) => {
  await page.goto('./?course=L1-gates&bridge=ws://127.0.0.1:9/sim');
  await page.waitForFunction(() => (window as any).__sim?.time > 0.3, null, { timeout: 60_000 });
  await page.locator('button[data-cam="chase"]').click();
  await page.locator('canvas#view').click();
  expect(await page.evaluate(() => (window as any).__cams.mode)).toBe('chase');
  await page.keyboard.press('c');
  expect(await page.evaluate(() => (window as any).__cams.mode)).toBe('top');
  await page.keyboard.press('c');
  expect(await page.evaluate(() => (window as any).__cams.mode)).toBe('fpv');
  await page.locator('button[data-cam="chase"]').click();
  expect(await page.evaluate(() => (window as any).__cams.mode)).toBe('chase');
  void errors;
});

test('acceptance 7: JackalState / JackalScan / JackalEvents on LSL alongside a Myo stream', async ({ page, errors }) => {
  test.setTimeout(90_000);
  const b = await startBridge([]); // LSL enabled
  const myo = await run([`${EXAMPLES}/fake_myo_lsl.py`, '--seconds', '30']);
  try {
    await openCourse(page, b.port, 'L1-gates');
    // generate a few events while the probe listens
    const pilot = run([`${EXAMPLES}/autopilot_gates.py`, '--bridge', `ws://127.0.0.1:${b.port}`, '--timeout', '15']);
    const probe = await run([resolve(dirname(fileURLToPath(import.meta.url)), 'lsl_probe.py'), 'JackalState', 'JackalScan', 'JackalEvents', 'Myo_EMG']);
    await probe.exited;
    const counts = JSON.parse(probe.out.join('').trim().split('\n').at(-1)!);
    expect(counts.JackalState).toBeGreaterThan(40);   // 20 Hz × 3 s
    expect(counts.JackalScan).toBeGreaterThan(40);
    expect(counts.Myo_EMG).toBeGreaterThan(400);       // 200 Hz × 3 s
    expect(counts.JackalEvents).toBeGreaterThan(0);   // run_start / gate:k during the window
    (await pilot).kill();
  } finally {
    myo.kill();
    b.kill();
  }
  void errors;
});
