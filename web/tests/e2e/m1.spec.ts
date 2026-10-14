// M1 acceptance: real bridge + real example senders drive the sim; pulling any plug stops the robot.
import { test as base } from './fixtures';
import { expect, simState } from './fixtures';
import { EXAMPLES, run, sendUdp, startBridge } from './bridge';
import type { Page } from '@playwright/test';

type Bridge = Awaited<ReturnType<typeof startBridge>>;
const test = base.extend<{ bridge: Bridge }>({
  bridge: async ({}, use) => {
    const b = await startBridge();
    await use(b);
    b.kill();
  },
});

async function openWithBridge(page: Page, b: { port: number }): Promise<void> {
  await page.goto(`./?bridge=ws://127.0.0.1:${b.port}/sim`);
  await page.waitForFunction(() => (window as any).__sim?.data && (window as any).__bridge?.link === 'open', null, { timeout: 60_000 });
  await page.waitForFunction(() => (window as any).__sim.time > 0.3, null, { timeout: 30_000 });
  await page.evaluate(() => (window as any).__sim.reset());
}

const teleop = (b: { port: number }, script: string) =>
  run([`${EXAMPLES}/keyboard_teleop.py`, '--url', `ws://127.0.0.1:${b.port}/cmd`, '--script', script]);

/** Resolves (in-page) with ms until |applied v| < 0.05, or -1 after 2 s. */
const msUntilStopped = (page: Page) => page.evaluate(() => new Promise<number>((ok) => {
  const sim = (window as any).__sim, t0 = performance.now();
  const poll = () => {
    if (Math.abs(sim.applied.v) < 0.05) ok(performance.now() - t0);
    else if (performance.now() - t0 > 2000) ok(-1);
    else setTimeout(poll, 5);
  };
  poll();
}));

test('T2: keyboard_teleop.py --script v=0.5 for 3 s moves the robot 1.2–1.6 m', async ({ page, bridge, errors }) => {
  await openWithBridge(page, bridge);
  const p = await teleop(bridge, '0.5,0:3;0,0:1');
  expect(await p.exited).toBe(0);
  const s = await simState(page);
  expect(s.pose.x).toBeGreaterThan(1.2);
  expect(s.pose.x).toBeLessThan(1.6);
  await expect(page.locator('#hud-status')).toHaveText('IDLE');
  void errors;
});

test('T3: unplug the SENDER mid-drive → stopped within 400 ms, HUD shows DEADMAN', async ({ page, bridge, errors }) => {
  await openWithBridge(page, bridge);
  const p = await teleop(bridge, '0.5,0:20');
  await page.waitForFunction(() => (window as any).__sim.applied.v > 0.49, null, { timeout: 10_000 });
  await page.locator('#bridge-light[data-state="active"]').waitFor();
  p.kill();
  const ms = await msUntilStopped(page);
  expect(ms).toBeGreaterThanOrEqual(0);
  expect(ms).toBeLessThan(400);
  await expect(page.locator('#hud-status')).toHaveText('DEADMAN');
  void errors;
});

test('unplug the BRIDGE mid-drive → stopped within 400 ms, panel goes grey', async ({ page, bridge, errors }) => {
  await openWithBridge(page, bridge);
  await teleop(bridge, '0.5,0:20');
  await page.waitForFunction(() => (window as any).__sim.applied.v > 0.49, null, { timeout: 10_000 });
  bridge.kill();
  const ms = await msUntilStopped(page);
  expect(ms).toBeGreaterThanOrEqual(0);
  expect(ms).toBeLessThan(400);
  await expect(page.locator('#bridge-light')).toHaveAttribute('data-state', 'none');
  await expect(page.locator('#hud-status')).toHaveText('DEADMAN');
  void errors;
});

test('T4: UDP v=10 is clamped to V_MAX; NaN is dropped and counted', async ({ page, bridge, errors }) => {
  await openWithBridge(page, bridge);
  let maxV = 0;
  for (let i = 0; i < 40; i++) {
    await sendUdp(bridge.udpPort, JSON.stringify({ type: 'cmd', v: 10, w: 0, source: 'matlab' }));
    await page.waitForTimeout(50);
    maxV = Math.max(maxV, await page.evaluate(() => (window as any).__sim.applied.v));
  }
  expect(maxV).toBeGreaterThan(1.5);
  expect(maxV).toBeLessThanOrEqual(2.0);
  const before = Number(await page.locator('#drops-invalid').textContent());
  await sendUdp(bridge.udpPort, '{"type":"cmd","v":NaN,"w":0}');
  await sendUdp(bridge.udpPort, '{"type":"cmd","v":');
  await expect(page.locator('#drops-invalid')).toHaveText(String(before + 2), { timeout: 3000 });
  void errors;
});

test('an active bridge source wins: page keyboard is ignored', async ({ page, bridge, errors }) => {
  await openWithBridge(page, bridge);
  const p = teleop(bridge, '0,0:4');
  await page.locator('#bridge-light[data-state="active"]').waitFor({ timeout: 10_000 });
  await page.keyboard.down('w');
  await page.waitForTimeout(800);
  await page.keyboard.up('w');
  expect(Math.abs((await simState(page)).pose.x)).toBeLessThan(0.01);
  await (await p).exited;
  // after the source has been silent > 1 s, local keyboard drives again
  await page.locator('#bridge-light[data-state="idle"]').waitFor({ timeout: 5000 });
  await page.keyboard.down('w');
  await page.waitForTimeout(600);
  await page.keyboard.up('w');
  expect((await simState(page)).pose.x).toBeGreaterThan(0.1);
  void errors;
});

test('LSL: fake_myo_lsl.py --emit-cmd drives the sim through the bridge', async ({ page, errors }) => {
  test.skip(!!process.env.NO_LSL, 'NO_LSL set');
  const b = await startBridge([]); // LSL enabled
  try {
    await openWithBridge(page, b);
    const myo = await run([`${EXAMPLES}/fake_myo_lsl.py`, '--emit-cmd', '--seconds', '20']);
    try {
      await page.locator('#bridge-light[data-state="active"]').waitFor({ timeout: 20_000 });
      await expect(page.locator('#bridge-details')).toContainText('via lsl');
      await page.waitForTimeout(1500);
      expect((await simState(page)).pose.x).toBeGreaterThan(0.2);
      myo.kill();
      expect(await msUntilStopped(page)).toBeLessThan(400);
    } finally {
      myo.kill();
    }
  } finally {
    b.kill();
  }
  void errors;
});

test('loopback: jackal-bridge --loopback-test passes against the open page', async ({ page, bridge, errors }) => {
  await openWithBridge(page, bridge);
  const p = await run(['-m', 'jackal_bridge', '--loopback-test', '--port', String(bridge.port)]);
  const code = await p.exited;
  expect(p.out.join(''), p.out.join('')).toContain('PASS');
  expect(code).toBe(0);
  void errors;
});
