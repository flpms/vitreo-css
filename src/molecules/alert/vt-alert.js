import { LitElement, html, css, svg, nothing } from 'lit';
import { contrastLayer, focusRing, glass, hostBase, leadBorder } from '../../styles/mixins.js';
import { defineElement } from '../../utils/define.js';

/** Variante → tom do vidro (camada L1). */
const VARIANT_TONES = Object.freeze({
  info: 'blue',
  success: 'emerald',
  warning: 'yellow',
  danger: 'red',
});

/** Urgência: alert interrompe o leitor de tela; status espera a vez. */
const VARIANT_ROLES = Object.freeze({
  info: 'status',
  success: 'status',
  warning: 'alert',
  danger: 'alert',
});

/** Ícones redundantes à cor (WCAG 1.4.1) — usam currentColor, então herdam o contraste do texto. */
const VARIANT_ICONS = Object.freeze({
  info: svg`<path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-1.2 8v8h2.4v-8h-2.4Zm0-4v2.4h2.4V6h-2.4Z"/>`,
  success: svg`<path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm4.6 6.2-6 6-2.9-2.8-1.6 1.6 4.5 4.4 7.6-7.6-1.6-1.6Z"/>`,
  warning: svg`<path d="M12 2 23 21H1L12 2Zm-1.2 7v6h2.4V9h-2.4Zm0 7.6V19h2.4v-2.4h-2.4Z"/>`,
  danger: svg`<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9L7.9 2Zm2.9 4v8h2.4V6h-2.4Zm0 10v2.4h2.4V16h-2.4Z"/>`,
});

const DEFAULT_VARIANT = 'info';

/**
 * Molécula · camada L1. Mensagem em vidro colorido com a barra de chumbo do Mondrian.
 *
 * @element vt-alert
 * @slot - mensagem
 * @csspart alert
 * @csspart close
 * @fires vt-dismiss - cancelável; se não for cancelado o alerta se fecha
 *
 * @attr {'info'|'success'|'warning'|'danger'} variant
 * @attr {string} heading - título curto
 * @attr {boolean} dismissible - mostra o botão de fechar
 * @attr {boolean} open - false esconde o alerta
 */
export class VtAlert extends LitElement {
  static properties = {
    variant: { reflect: true },
    heading: {},
    dismissible: { type: Boolean, reflect: true },
    open: { type: Boolean, reflect: true },
  };

  static styles = [
    hostBase,
    contrastLayer({ attribute: 'variant', tones: VARIANT_TONES, fallback: VARIANT_TONES[DEFAULT_VARIANT] }),
    css`
      :host {
        display: block;
      }

      :host(:not([open])) {
        display: none;
      }

      .alert {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: start;
        gap: var(--vt-space-3);
        padding: var(--vt-space-4) var(--vt-space-4) var(--vt-space-4) var(--vt-space-5);
        ${glass()}
        ${leadBorder('surface', '--vt-card-lead')}
        border-left-width: var(--vt-lead-bar);
      }

      .icon {
        width: 1.5rem;
        height: 1.5rem;
        fill: currentColor;
      }

      .content {
        min-width: 0;
        line-height: var(--vt-font-line-height-base);
      }

      .heading {
        display: block;
        font-weight: var(--vt-font-weight-bold);
        margin-bottom: var(--vt-space-1);
      }

      .close {
        appearance: none;
        display: grid;
        place-items: center;
        width: 2.25rem;
        height: 2.25rem;
        margin: calc(var(--vt-space-1) * -1) 0;
        padding: 0;
        color: inherit;
        background: transparent;
        ${leadBorder('control')}
        cursor: pointer;
      }

      .close:hover {
        background: color-mix(in srgb, var(--vt-ctx-fg) calc(var(--vt-opacity-ghost-hover) * 100%), transparent);
      }

      .close svg {
        width: 1rem;
        height: 1rem;
        stroke: currentColor;
        stroke-width: 2.5;
      }

      ${focusRing('.close')}
    `,
  ];

  constructor() {
    super();
    this.variant = DEFAULT_VARIANT;
    this.dismissible = false;
    this.open = true;
  }

  #dismiss() {
    const event = new CustomEvent('vt-dismiss', { bubbles: true, composed: true, cancelable: true });
    if (!this.dispatchEvent(event)) return;
    this.open = false;
  }

  #renderClose() {
    if (!this.dismissible) return nothing;

    return html`
      <button part="close" class="close" type="button" aria-label="Fechar alerta" @click=${this.#dismiss}>
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13" /></svg>
      </button>
    `;
  }

  render() {
    const variant = VARIANT_ROLES[this.variant] ? this.variant : DEFAULT_VARIANT;

    return html`
      <div part="alert" class="alert" role=${VARIANT_ROLES[variant]}>
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${VARIANT_ICONS[variant]}</svg>
        <div class="content">
          ${this.heading ? html`<strong class="heading">${this.heading}</strong>` : nothing}
          <slot></slot>
        </div>
        ${this.#renderClose()}
      </div>
    `;
  }
}

defineElement('vt-alert', VtAlert);
