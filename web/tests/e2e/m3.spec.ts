// M3 acceptance: the starter-kit controllers drive the real sim through a real bridge.
import { resolve } from 'node:path';
import type { Page } from '@playwright/test';
import { EXAMPLES, run, startBridge } from './bridge';
import { test as base, expect, simState } from './fixtures';

const FIXTURES = resolve(EXAMPLES, 'tests/fixtures');

type Bridge = Awaited<ReturnType<typeof startBridge>>;
const test = base.extend<{ bridge: Bridge }>({
  bridge: async ({}, use) => {
    const b = await startBridge([]); // LSL ingress on (the threshold controller publishes JackalCmd on LSL)
    await use(b);
    b.kill();
  },
});

async function openWithBridge(page: Page, port: number, course = 'L0-sandbox'): Promise<void> {
  await page.goto(`./?course=${course}&bridge=ws://127.0.0.1:${port}/sim`);
  await page.waitForFunction(() => (window as any).__bridge?.link === 'open', null, { timeout: 60_000 });
  await page.waitForFunction(() => (window as any).__sim.time > 0.3, null, { timeout: 30_000 });
  await page.evaluate(() => (window as any).__sim.reset());
}

test('myo_threshold_controller.py + fake Myo drive the robot over LSL', async ({ page, bridge, errors }) => {
  test.setTimeout(90_000);
  const myo = await run([`${EXAMPLES}/fake_myo_lsl.py`, '--seconds', '40']);
  const ctl = await run([`${EXAMPLES}/myo_threshold_controller.py`, '--load', `${FIXTURES}/fake_myo_calibration.json`,
    '--seconds', '30', '--source', 'm3-threshold']);
  try {
    await openWithBridge(page, bridge.port);
    await page.locator('#bridge-light[data-state="active"]').waitFor({ timeout: 25_000 });
    await expect(page.locator('#bridge-details')).toContainText('via lsl');
    await page.waitForTimeout(6000); // one full fake flex / extend cycle
    const s = await simState(page);
    expect(Math.hypot(s.pose.x, s.pose.y)).toBeGreaterThan(0.5);
    expect(Math.abs(s.pose.yaw)).toBeGreaterThan(0.05);     // it steered, not just straight
  } finally {
    ctl.kill();
    myo.kill();
  }
  void errors;
});

test('controller_template.py demo drives forward and turns away before the L0 box', async ({ page, bridge, errors }) => {
  test.setTimeout(60_000);
  await openWithBridge(page, bridge.port);
  const p = await run([`${EXAMPLES}/controller_template.py`, '--bridge', `ws://127.0.0.1:${bridge.port}`, '--seconds', '8']);
  await p.exited;
  const s = await simState(page);
  expect(s.pose.x).toBeGreaterThan(1.0);       // drove toward the box (near face at x = 2.3)
  expect(s.collisions).toBe(0);                // …but the lidar rule turned it away in time
  expect(Math.abs(s.pose.yaw)).toBeGreaterThan(0.5);
  void errors;
});
