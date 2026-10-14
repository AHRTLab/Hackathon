import { defineConfig } from '@playwright/test';

// Runs in the installed Google Chrome (channel 'chrome'; no browser download needed, and it is the browser
// students use), headless with software GL (ANGLE SwiftShader; the telepresence repo's --use-gl=swiftshader no longer works in current Chrome), against the
// production build served by `vite preview`. Set PW_CHANNEL= (empty) to use Playwright's bundled Chromium.
export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 90_000,
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:4173/',
    channel: process.env.PW_CHANNEL ?? 'chrome',
    viewport: { width: 1280, height: 800 },
    launchOptions: { args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] },
  },
  webServer: {
    command: 'npm run build && npm run preview',
    url: 'http://127.0.0.1:4173/',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
