// M4 done-when: the LIVE GitHub Pages site works on a clean Chrome profile with a local bridge.
// Opt-in (needs internet): LIVE=1 npx playwright test --project=chrome tests/e2e/live.spec.ts
// A fresh Playwright context = a clean profile (no cache, no saved permissions).
import { EXAMPLES, run, startBridge } from './bridge';
import { expect, simState, test } from './fixtures';

const LIVE_URL = process.env.LIVE_URL ?? 'https://ahrtlab.github.io/Hackathon/';

test.skip(!process.env.LIVE, 'set LIVE=1 to check the deployed site');

test('live site + local bridge on a clean profile: connects and drives', async ({ browser, errors }) => {
  test.setTimeout(120_000);
  const b = await startBridge();
  const ctx = await browser.newContext();          // clean profile
  try {
    // Chrome asks before a public https page may reach localhost (Local Network Access). A person clicks
    // Allow; automation grants it here if this Chrome exposes the permission.
    await ctx.grantPermissions(['local-network-access'], { origin: new URL(LIVE_URL).origin }).catch(() => {});
    const page = await ctx.newPage();
    const pageErrors: string[] = [];
    page.on('pageerror', (e) => pageErrors.push(e.message));
    await page.goto(`${LIVE_URL}?course=L0-sandbox&bridge=ws://127.0.0.1:${b.port}/sim`);
    await page.waitForFunction(() => (window as any).__sim?.time > 0.3, null, { timeout: 60_000 });
    await page.waitForFunction(() => (window as any).__bridge?.link === 'open', null, { timeout: 20_000 });
    await page.evaluate(() => (window as any).__sim.reset());
    const p = await run([`${EXAMPLES}/terminal_teleop.py`, '--url', `ws://127.0.0.1:${b.port}/cmd`, '--script', '0.5,0:2;0,0:0.5']);
    expect(await p.exited).toBe(0);
    expect((await simState(page)).pose.x).toBeGreaterThan(0.7);
    expect(pageErrors).toEqual([]);
  } finally {
    await ctx.close();
    b.kill();
  }
  void errors;
});
