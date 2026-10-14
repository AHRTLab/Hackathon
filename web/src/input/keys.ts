// Shared keyboard plumbing (pattern from the telepresence repo's humanInput.ts): track held keys we
// handle, swallow their default action, and never hijack keys while the user types in a form field.

const held: Record<string, boolean> = {};
let attached = false;
const HANDLED = new Set(['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ']);

export function typingInField(e: KeyboardEvent): boolean {
  const t = e.target as HTMLElement | null;
  if (!t) return false;
  return t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable;
}

export function attachKeys(): void {
  if (attached || typeof window === 'undefined') return;
  const onKey = (down: boolean) => (e: KeyboardEvent) => {
    const k = e.key.toLowerCase();
    if (k === 'shift') { held.shift = down; return; }
    if (typingInField(e) || !HANDLED.has(k)) return;
    held[k] = down;
    e.preventDefault();
  };
  window.addEventListener('keydown', onKey(true));
  window.addEventListener('keyup', onKey(false));
  window.addEventListener('blur', () => { for (const k of Object.keys(held)) held[k] = false; }); // no stuck keys
  attached = true;
}

export const isHeld = (k: string): boolean => held[k] === true;
