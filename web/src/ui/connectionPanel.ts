// Connection panel: bridge URL, status light, active source, rate, drops, round-trip latency.

import type { BridgeClient } from '../net/bridgeClient';
import { button, el, panel } from './dom';

export class ConnectionPanel {
  private light: HTMLSpanElement;
  private label: HTMLSpanElement;
  private details: HTMLDivElement;
  private warn: HTMLDivElement;
  private url: HTMLInputElement;

  constructor(private client: BridgeClient) {
    const p = panel({ left: '12px', top: '12px', width: '300px' }, 'connection');
    const head = el('div', { display: 'flex', alignItems: 'center', gap: '8px' });
    this.light = el('span', { width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' });
    this.light.id = 'bridge-light';
    this.label = el('b', {});
    this.label.id = 'bridge-label';
    head.append(this.light, this.label);

    const row = el('div', { display: 'flex', gap: '6px', margin: '6px 0' });
    this.url = el('input', { flex: '1', background: '#2d333c', color: '#e8eaed', border: '1px solid #444', borderRadius: '6px', padding: '4px 6px', font: '12px ui-monospace, monospace' });
    this.url.value = client.url;
    this.url.id = 'bridge-url';
    this.url.addEventListener('keydown', (e) => { if (e.key === 'Enter') client.connect(this.url.value.trim()); });
    row.append(this.url, button('Connect', () => client.connect(this.url.value.trim())));

    this.details = el('div', { lineHeight: '1.5', opacity: '0.85', fontVariantNumeric: 'tabular-nums' });
    this.details.id = 'bridge-details';
    this.warn = el('div', { color: '#ffb74d', marginTop: '4px' });
    const hint = el('div', { opacity: '.55', fontSize: '11px', marginTop: '6px' },
      'Run jackal-bridge on this laptop. If Chrome asks to allow local network access, click Allow.');
    p.append(head, row, this.details, this.warn, hint);
  }

  update(nowMs: number): void {
    const c = this.client, s = c.status;
    const [color, text] =
      c.link === 'replaced' ? ['#5f6368', 'Another sim tab is using the bridge']
      : c.link !== 'open' ? ['#5f6368', c.link === 'connecting' ? 'Bridge: connecting…' : 'No bridge (keyboard / gamepad)']
      : s?.active_source ? (s.deadman ? ['#ff9800', 'Bridge: source silent (deadman)'] : ['#4caf50', 'Bridge: driving'])
      : ['#ffca28', 'Bridge connected, no source'];
    this.light.style.background = color;
    this.light.dataset.state = c.link === 'replaced' ? 'replaced' : c.link !== 'open' ? 'none' : s?.active_source ? 'active' : 'idle';
    this.label.textContent = text;
    if (c.link === 'open' && s) {
      const rtt = s.rtt_ms == null ? '–' : `${s.rtt_ms.toFixed(0)} ms`;
      this.details.innerHTML =
        `source <b>${s.active_source ?? '—'}</b>${s.ingress ? ` via ${s.ingress}` : ''}<br>` +
        `rate ${c.rateHz(nowMs)} Hz · rtt ${rtt}<br>` +
        `drops: invalid <b id="drops-invalid">${(s.drops_invalid ?? 0) + c.dropsInvalid}</b> · rate ${s.drops_rate ?? 0} · other source ${s.drops_inactive ?? 0}<br>` +
        `LSL ${s.lsl ?? '?'} · ${s.lsl_peers ?? 0} peer(s)`;
    } else if (c.link === 'replaced') {
      this.details.textContent = 'Only one sim tab can be connected. Close the other tab, or click Connect to take over here.';
    } else {
      this.details.textContent = '';
    }
    this.warn.textContent = c.versionWarning ?? '';
  }
}
