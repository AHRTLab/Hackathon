// Steps the sim from a dedicated-worker timer instead of requestAnimationFrame. Chrome pauses rAF in hidden
// or background tabs (and heavily throttles main-thread timers), which would freeze physics and the state
// stream whenever a student puts their terminal over the browser. Dedicated-worker timers keep firing.

export function startTicker(onTick: () => void, periodMs = 10): () => void {
  const src = `setInterval(() => postMessage(0), ${periodMs});`;
  try {
    const url = URL.createObjectURL(new Blob([src], { type: 'text/javascript' }));
    const w = new Worker(url);
    w.onmessage = () => onTick();
    return () => { w.terminate(); URL.revokeObjectURL(url); };
  } catch {
    const id = setInterval(onTick, periodMs); // fallback (e.g. workers blocked)
    return () => clearInterval(id);
  }
}
