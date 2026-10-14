import { test as base, expect, type Page } from '@playwright/test';

/** Fails the test on any console error or uncaught page error. */
export const test = base.extend<{ errors: string[] }>({
  errors: async ({ page }, use) => {
    const errors: string[] = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
    await use(errors);
    expect(errors, 'console errors').toEqual([]);
  },
});
export { expect };

export async function openSim(page: Page, query = ''): Promise<void> {
  await page.goto(`./${query}`);
  await page.waitForFunction(() => (window as any).__sim?.data, null, { timeout: 60_000 });
  // Headless SwiftShader spends ~2 s compiling shaders on the first frames; wait until the sim clock runs.
  await page.waitForFunction(() => (window as any).__sim.time > 0.3, null, { timeout: 30_000 });
}

export const simState = (page: Page) => page.evaluate(() => (window as any).__sim.state());

export async function hold(page: Page, key: string, ms: number): Promise<void> {
  await page.keyboard.down(key);
  await page.waitForTimeout(ms);
  await page.keyboard.up(key);
}
