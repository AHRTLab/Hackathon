import { defineConfig } from 'vite';

// Static site: single-threaded MuJoCo WASM, so no COOP/COEP headers are needed (GitHub Pages friendly).
// The app imports ../protocol/limits.json and ../models/jackal/* from the repo root, hence fs.allow.
export default defineConfig({
  base: process.env.SITE_BASE ?? './',
  server: { fs: { allow: ['..'] } },
  optimizeDeps: { exclude: ['@mujoco/mujoco'] },
  build: { target: 'es2022', chunkSizeWarningLimit: 1500 },
  test: { include: ['tests/unit/**/*.test.ts'], testTimeout: 30000 },
});
