// M0 acceptance: page loads + renders (T1), keyboard fallback drives (T8), the robot collides with the
// L0 box without tunnelling, and typing in the team-id field doesn't drive.
import { expect, hold, openSim, simState, test } from './fixtures';

test('T1: page loads, canvas renders, no console errors', async ({ page, errors }) => {
  await openSim(page);
  const canvas = page.locator('canvas#view');
  await expect(canvas).toBeVisible();
  const size = await canvas.evaluate((c: HTMLCanvasElement) => [c.width, c.height]);
  expect(size[0]).toBeGreaterThan(0);
  await expect(page.locator('#hud-status')).toHaveText('IDLE');
  void errors;
});

test('T8: keyboard drives forward, stops on release, and turns', async ({ page, errors }) => {
  await openSim(page);
  await page.evaluate(() => (window as any).__sim.reset());
  await hold(page, 'w', 1200);
  const moving = await simState(page);
  expect(moving.pose.x).toBeGreaterThan(0.6);
  await page.waitForTimeout(800);
  const after = await simState(page);
  expect(Math.abs(after.vel.v)).toBeLessThan(0.05);
  expect(after.status).toBe('idle');

  await hold(page, 'a', 600);
  expect((await simState(page)).pose.yaw).toBeGreaterThan(0.3);
  void errors;
});

test('collides with the L0 box: counted, blocked short of it', async ({ page, errors }) => {
  await openSim(page);
  await page.evaluate(() => (window as any).__sim.reset());
  await hold(page, 'w', 3500);
  const s = await simState(page);
  expect(s.collisions).toBeGreaterThanOrEqual(1);
  expect(s.pose.x).toBeLessThan(2.3 - 0.2); // box near face at x = 2.3; chassis half-length ≈ 0.255
  await expect(page.locator('#hud-collisions')).not.toHaveText('0');
  void errors;
});

test('E-stop button latches; Clear E-stop releases', async ({ page, errors }) => {
  await openSim(page);
  await page.getByRole('button', { name: 'E-stop', exact: true }).click();
  await page.locator('canvas#view').click();
  await hold(page, 'w', 600);
  await expect(page.locator('#hud-status')).toHaveText('E-STOP');
  expect(Math.abs((await simState(page)).pose.x)).toBeLessThan(0.01);
  await page.getByRole('button', { name: 'Clear E-stop' }).click();
  await page.locator('canvas#view').click();
  await hold(page, 'w', 600);
  expect((await simState(page)).pose.x).toBeGreaterThan(0.1);
  void errors;
});

test('typing in the team-id field does not drive the robot', async ({ page, errors }) => {
  await openSim(page);
  const team = page.locator('#team-id');
  await team.click();
  await team.pressSequentially('wasd');
  await expect(team).toHaveValue('wasd');
  await page.waitForTimeout(300);
  expect(Math.abs((await simState(page)).pose.x)).toBeLessThan(0.01);
  void errors;
});
