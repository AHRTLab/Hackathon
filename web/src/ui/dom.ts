// Tiny DOM helpers for the self-mounting overlay panels (pattern from the telepresence repo's extras/).

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K, style: Partial<CSSStyleDeclaration> = {}, text?: string,
): HTMLElementTagNameMap[K] {
  const n = document.createElement(tag);
  Object.assign(n.style, style);
  if (text !== undefined) n.textContent = text;
  return n;
}

export function panel(pos: Partial<CSSStyleDeclaration>, id: string): HTMLDivElement {
  const p = el('div', {
    position: 'fixed', zIndex: '10', padding: '10px 12px', borderRadius: '10px',
    background: 'rgba(20,23,28,0.82)', border: '1px solid rgba(255,255,255,0.08)',
    backdropFilter: 'blur(6px)', minWidth: '200px', userSelect: 'none', ...pos,
  });
  p.id = id;
  document.body.appendChild(p);
  return p;
}

export function button(label: string, onClick: () => void, color = '#2d333c'): HTMLButtonElement {
  const b = el('button', {
    background: color, color: '#e8eaed', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px',
    padding: '5px 10px', font: 'inherit', cursor: 'pointer',
  }, label);
  b.addEventListener('click', onClick);
  b.addEventListener('keydown', (e) => { if (e.key === ' ') e.preventDefault(); }); // Space is "stop", not "click"
  return b;
}
