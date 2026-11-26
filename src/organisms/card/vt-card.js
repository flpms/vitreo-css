import { LitElement, html, css } from 'lit';
import { contrastLayer, glass, hostBase, leadBorder } from '../../styles/mixins.js';
import { defineElement } from '../../utils/define.js';

const SLOTS = Object.freeze(['media', 'header', 'footer']);

/**
 * Organismo · camada L1. Painel de vidro que hospeda átomos e moléculas (camada L2).
 * O nível visual vem da camada de contraste, não de sombra: tudo dentro do card
 * herda --vt-ctx-* validado para o tom escolhido.
 *
 * @element vt-card
 * @slot media - imagem/ilustração que sangra até a moldura
 * @slot header - título (use um heading: <h3 slot="header">)
 * @slot - conteúdo
 * @slot footer - ações (botões)
 * @csspart card
 * @csspart header
 * @csspart body
 * @csspart footer
 *
 * @attr {'neutral'|'red'|'blue'|'yellow'|'emerald'} tone
 */
export class VtCard extends LitElement {
  static properties = {
    tone: { reflect: true },
    _filled: { state: true },
  };

  static styles = [
    hostBase,
    contrastLayer({ attribute: 'tone' }),
    css`
      :host {
        display: block;
        height: 100%;
        --_pad: var(--vt-space-5);
      }

      .card {
        display: flex;
        flex-direction: column;
        gap: var(--vt-space-4);
        height: 100%;
        padding: var(--_pad);
        ${glass()}
        ${leadBorder('surface', '--vt-card-lead')}
      }

      ::slotted([slot='media']) {
        display: block;
        width: calc(100% + var(--_pad) * 2);
        max-width: none;
        margin: calc(var(--_pad) * -1) calc(var(--_pad) * -1) 0;
        border-bottom: var(--vt-lead-surface) solid var(--vt-lead);
      }

      ::slotted([slot='header']) {
        margin: 0;
        font-size: var(--vt-font-size-xl);
        font-weight: var(--vt-font-weight-light);
        line-height: var(--vt-font-line-height-tight);
        letter-spacing: -0.01em;
      }

      .body {
        flex: 1;
        line-height: var(--vt-font-line-height-base);
      }

      .body ::slotted(p) {
        margin: 0 0 var(--vt-space-3);
      }

      footer {
        display: flex;
        flex-wrap: wrap;
        gap: var(--vt-space-3);
        align-items: center;
      }

      [data-empty] {
        display: none;
      }
    `,
  ];

  constructor() {
    super();
    this.tone = 'neutral';
    this._filled = Object.freeze({ media: false, header: false, footer: false });
  }

  /** Esconde header/footer/media vazios para não sobrar gap. */
  #onSlotChange(event) {
    const slot = event.target;
    this._filled = Object.freeze({ ...this._filled, [slot.name]: slot.assignedNodes({ flatten: true }).length > 0 });
  }

  render() {
    const [media, header, footer] = SLOTS.map(name => !this._filled[name]);

    return html`
      <article part="card" class="card">
        <slot name="media" @slotchange=${this.#onSlotChange} ?data-empty=${media}></slot>
        <header part="header" ?data-empty=${header}>
          <slot name="header" @slotchange=${this.#onSlotChange}></slot>
        </header>
        <div part="body" class="body"><slot></slot></div>
        <footer part="footer" ?data-empty=${footer}>
          <slot name="footer" @slotchange=${this.#onSlotChange}></slot>
        </footer>
      </article>
    `;
  }
}

defineElement('vt-card', VtCard);
