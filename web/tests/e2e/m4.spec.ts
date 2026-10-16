// M4 acceptance: telepresence knobs (URL params + sliders, logged per run) and the optional RTLX form.
import { readFile } from 'node:fs/promises';
import type { Page } from '@playwright/test';
import { EXAMPLES, run, startBridge } from './bridge';
import { test as base, expect, hold, simState } from './fixtures';

type Bridge = Awaited<ReturnType<typeof startBridge>>;
const test = base.extend<{ bridge: Bridge }>({
  bridge: async ({}, use) => {
    const b = await startBridge();
    await use(b);
    b.kill();
  },
});

async function open(page: Page, port: number, query: string): Promise<void> {
  await page.goto(`./?bridge=ws://127.0.0.1:${port}/sim&${query}`);
  await page.waitForFunction(() => (window as any).__bridge?.link === 'open', null, { timeout: 60_000 });
  await page.waitForFunction(() => (window as any).__sim.time > 0.3, null, { timeout: 30_000 });
}

const autopilot = (port: number) =>
  run([`${EXAMPLES}/autopilot_gates.py`, '--bridge', `ws://127.0.0.1:${port}`, '--timeout', '120', '--vmax', '0.9']);

async function runsCsv(page: Page): Promise<Record<string, string>[]> {
  const [dl] = await Promise.all([page.waitForEvent('download'), page.locator('#dl-runs').click()]);
  const [head, ...rows] = (await readFile((await dl.path())!, 'utf8')).trim().split('\n');
  const cols = head.split(',');
  return rows.map((r) => Object.fromEntries(r.split(',').map((v, i) => [cols[i], v])));
}

test('URL params set latency / drop / seed; the run CSV records the condition', async ({ page, bridge, errors }) => {
  test.setTimeout(150_000);
  await open(page, bridge.port, 'course=L1-gates&latency=100&drop=10&seed=5');
  expect(await page.evaluate(() => (window as any).__sim.impairment.settings())).toEqual({ latencyMs: 100, dropPct: 10, seed: 5 });
  await expect(page.locator('#hud-impairment')).toHaveText('⏱ 100 ms · 10 % drop');
  await expect(page.locator('#knob-latency')).toHaveValue('100');
  const p = await autopilot(bridge.port);
  expect(await p.exited, p.out.join('')).toBe(0);
  const [row] = await runsCsv(page);
  expect(row).toMatchObject({ course: 'L1-gates', completed: '1', latency_knob_ms: '100', drop_knob_pct: '10', drop_seed: '5', rtlx: '' });
  void errors;
});

test('sliders change the knobs; a change mid-run waits for Reset', async ({ page, bridge, errors }) => {
  await open(page, bridge.port, 'course=L1-gates');
  await expect(page.locator('#hud-impairment')).toHaveCount(0);
  const set = (id: string, v: string) => page.locator(id).evaluate((el: HTMLInputElement, val) => {
    el.value = val; el.dispatchEvent(new Event('input')); el.dispatchEvent(new Event('change'));
  }, v);
  await set('#knob-latency', '250');
  expect(await page.evaluate(() => (window as any).__sim.impairment.latencyMs)).toBe(250);
  await page.locator('canvas#view').click();
  await hold(page, 'w', 1500);                                  // starts a scored run (the clock starts on movement)
  expect(await page.evaluate(() => (window as any).__sim.run.phase)).toBe('running');
  await set('#knob-drop', '20');
  await expect(page.locator('#knob-note')).toHaveText('applies after this run (press Reset)');
  expect(await page.evaluate(() => (window as any).__sim.impairment.dropPct)).toBe(0);
  await page.getByRole('button', { name: 'Reset' }).click();
  expect(await page.evaluate(() => (window as any).__sim.impairment.settings())).toMatchObject({ latencyMs: 250, dropPct: 20 });
  void errors;
});

test('?rtlx=1: the form follows each finish; Submit fills the CSV, Skip leaves it blank; keys paused', async ({ page, bridge, errors }) => {
  test.setTimeout(240_000);
  await open(page, bridge.port, 'course=L1-gates&rtlx=1');
  await expect(page.locator('#ask-rtlx')).toBeChecked();

  expect(await (await autopilot(bridge.port)).exited).toBe(0);
  await expect(page.locator('#rtlx')).toBeVisible();
  const x0 = (await simState(page)).pose.x;
  await page.keyboard.down('w');                                // driving is paused while the form is open
  await page.waitForTimeout(600);
  await page.keyboard.up('w');
  expect(Math.abs((await simState(page)).pose.x - x0)).toBeLessThan(0.01);
  await page.evaluate(() => (window as any).__rtlx.setAll(70));
  await page.locator('#rtlx-submit').click();
  await expect(page.locator('#rtlx')).toBeHidden();

  expect(await (await autopilot(bridge.port)).exited).toBe(0); // the autopilot restarts the finished course
  await expect(page.locator('#rtlx')).toBeVisible();
  await page.locator('#rtlx-skip').click();

  const rows = await runsCsv(page);
  expect(rows).toHaveLength(2);
  expect(rows[0]).toMatchObject({ rtlx: '70', rtlx_mental: '70', rtlx_performance: '70', rtlx_frustration: '70' });
  expect(rows[1]).toMatchObject({ rtlx: '', rtlx_mental: '' });
  void errors;
});
