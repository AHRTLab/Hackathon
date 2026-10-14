// Browser fallback teleop: W/S (or ↑/↓) drive, A/D (or ←/→) turn, Shift = fine, Space = stop.
// Used only when no bridge source is active (see arbiter.ts).

import { LIMITS } from '../protocol/limits';
import type { Twist } from '../protocol/types';
import { attachKeys, isHeld } from './keys';

const V_FRAC = 0.6, W_FRAC = 0.6, FINE = 0.3;

export function attachKeyboard(): void { attachKeys(); }

/** Current keyboard intent, or null when no drive key is held. */
export function keyboardTwist(): Twist | null {
  if (isHeld(' ')) return { v: 0, w: 0 };
  const f = (a: string, b: string) => (isHeld(a) || isHeld(b) ? 1 : 0);
  const fwd = f('w', 'arrowup') - f('s', 'arrowdown');
  const turn = f('a', 'arrowleft') - f('d', 'arrowright');
  if (!fwd && !turn) return null;
  const k = isHeld('shift') ? FINE : 1;
  return { v: fwd * V_FRAC * LIMITS.V_MAX * k, w: turn * W_FRAC * LIMITS.W_MAX * k };
}
