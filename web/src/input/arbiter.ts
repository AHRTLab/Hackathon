// Decides who drives: an active bridge source always wins. Otherwise local gamepad, then keyboard.
// Local input sends a command every control tick while engaged, plus one explicit zero on release, so
// letting go stops the robot immediately (no waiting for the deadman) and the HUD reads "idle".

import type { Cmd, Twist } from '../protocol/types';
import type { CommandGate } from '../sim/commandGate';
import { gamepadTwist } from './gamepad';
import { keyboardTwist } from './keyboard';

export class InputArbiter {
  /** Set by the bridge client: true while a bridge source is active. */
  bridgeActive = false;
  localSource: 'keyboard' | 'gamepad' | null = null;
  private wasEngaged = false;

  constructor(private gate: CommandGate) {}

  tick(nowMs: number): void {
    if (this.bridgeActive) { this.localSource = null; this.wasEngaged = false; return; }
    let tw: Twist | null = gamepadTwist();
    let src: 'keyboard' | 'gamepad' = 'gamepad';
    if (!tw) { tw = keyboardTwist(); src = 'keyboard'; }
    if (tw) {
      this.gate.ingest({ type: 'cmd', v: tw.v, w: tw.w, source: src } satisfies Cmd, nowMs);
      this.localSource = src;
      this.wasEngaged = true;
    } else if (this.wasEngaged) {
      this.gate.ingest({ type: 'cmd', v: 0, w: 0, source: this.localSource ?? 'keyboard' }, nowMs);
      this.wasEngaged = false;
    }
  }
}
