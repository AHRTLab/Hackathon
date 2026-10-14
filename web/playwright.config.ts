import { defineConfig, devices } from '@playwright/test';

// Same specs, three engines, against the production build served by `vite preview`:
//
//   chrome   the installed Google Chrome (the supported browser for students). Headless with software
//            GL via ANGLE SwiftShader (the telepresence repo's --use-gl=swiftshader no longer works in
//            current Chrome). Set PW_CHANNEL= (empty) to use Playwright's bundled Chromium instead.
//   firefox  Playwright's Firefox build.
//   webkit   Playwright's WebKit build: the engine inside Safari, but NOT Safari itself (no Safari
//            networking/permission policy), so it can't answer the GitHub-Pages https → ws://localhost
//            question. Check that by hand in real Safari.
//
//   npm run e2e                          all three
//   npx playwright test --project=chrome one engine
export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 90_000,
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:4173/',
    viewport: { width: 1280, height: 800 },
  },
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 800 },
        channel: process.env.PW_CHANNEL ?? 'chrome',
        launchOptions: { args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] },
      },
    },
    { name: 'firefox', use: { ...devices['Desktop Firefox'], viewport: { width: 1280, height: 800 } } },
    { name: 'webkit', use: { ...devices['Desktop Safari'], viewport: { width: 1280, height: 800 } } },
  ],
  webServer: {
    command: 'npm run build && npm run preview',
    url: 'http://127.0.0.1:4173/',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
