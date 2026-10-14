// Gamepad API fallback: left stick Y → v, left stick X → w (deadzone + expo), button 0 (A / ✕) = stop.

import { LIMITS } from '../protocol/limits';
import type { Twist } from '../protocol/types';

const DEADZONE = 0.12, EXPO = 0.3;

function shape(x: number): number {
  const a = Math.abs(x);
  if (a < DEADZONE) return 0;
  const n = (a - DEADZONE) / (1 - DEADZONE);
  return Math.sign(x) * ((1 - EXPO) * n + EXPO * n * n * n);
}

/** Current gamepad intent, or null when no pad is connected or the sticks are centred. */
export function gamepadTwist(): Twist | null {
  if (typeof navigator === 'undefined' || !navigator.getGamepads) return null;
  for (const pad of navigator.getGamepads()) {
    if (!pad || !pad.connected) continue;
    if (pad.buttons[0]?.pressed) return { v: 0, w: 0 };
    const v = shape(-(pad.axes[1] ?? 0)), w = shape(-(pad.axes[0] ?? 0));
    if (v || w) return { v: v * LIMITS.V_MAX, w: w * LIMITS.W_MAX };
  }
  return null;
}
