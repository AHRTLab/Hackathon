# Contract conformance fixtures

Both validators (TypeScript `web/src/protocol/validate.ts` and Python `bridge/jackal_bridge/protocol.py`)
run against every file here and must agree:

- `valid/`: accepted unchanged.
- `clamp/`: accepted, then `v`/`w` are clamped to `[-V_MAX, V_MAX]` / `[-W_MAX, W_MAX]` from `../limits.json`.
- `invalid/`: rejected and counted as a drop, never applied. Some of these files are deliberately not
  valid JSON (`NaN`, `Infinity`, truncated, empty).

To add a case, drop a file into the matching folder. No test code needs to change.
