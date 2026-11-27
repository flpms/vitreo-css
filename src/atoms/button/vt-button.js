import { LitElement, html, css, unsafeCSS } from 'lit';
import { controlFill, focusRing, hostBase, leadBorder, press } from '../../styles/mixins.js';
import { defineElement } from '../../utils/define.js';

/**
 * Altura mínima por tamanho. md = 44px (alvo de toque WCAG 2.5.5 AAA); sm ainda supera os 24px do 2.5.8.
 */
const SIZES = Object.freeze({
  sm: { height: '2.25rem', padding: 'var(--vt-space-3)', font: 'var(--vt-font-size-md)' },
  md: { height: '2.75rem', padding: 'var(--vt-space-5)', font: 'var(--vt-font-size-md)' },
  lg: { height: '3.5rem', padding: 'var(--vt-space-6)', font: 'var(--vt-font-size-lg)' },
});

const sizeRules = Object.entries(SIZES)
  .map(([size, { height, padding, font }]) => `
    :host([size="${size}"]) {
      --_height: ${height};
      --_padding: ${padding};
      --_font: ${font};
    }`)
  .join('');

/** O que um clique faz no formulário associado, por `type`. `button` não faz nada. */
const FORM_ACTIONS = Object.freeze({
  submit: form => form.requestSubmit(),
  reset: form => form.reset(),
});

/**
 * Átomo · camada L2. Tecla de vidro: moldura de chumbo e espessura na cor da peça;
 * no clique a tecla desce e a face fica côncava. As cores de primary/accent/danger
 * vêm da camada onde o botão está (regras de aplicação em src/tokens/rules.json).
 *
 * @element vt-button
 * @slot - rótulo
 * @slot start - ícone antes do rótulo
 * @slot end - ícone depois do rótulo
 * @csspart button - o <button> nativo
 *
 * @attr {'primary'|'secondary'|'accent'|'danger'|'ghost'} variant - primary (cobalto; verdete sobre cobalto, âmbar sobre ametista), secondary (vidro claro), accent (âmbar; verdete sobre âmbar e ametista), danger (rubi, sempre), ghost (herda a camada)
 * @attr {'sm'|'md'|'lg'} size
 * @attr {'button'|'submit'|'reset'} type
 * @attr {boolean} disabled
 */
export class VtButton extends LitElement {
  static formAssociated = true;

  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    variant: { reflect: true },
    size: { reflect: true },
    type: {},
    disabled: { type: Boolean, reflect: true },
  };

  static styles = [
    hostBase,
    controlFill('variant'),
    unsafeCSS(sizeRules),
    css`
      :host {
        display: inline-block;
        vertical-align: middle;
        --_height: 2.75rem;
        --_padding: var(--vt-space-5);
        --_font: var(--vt-font-size-md);
      }

      button {
        appearance: none;
        margin: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--vt-space-2);
        width: 100%;
        min-height: var(--_height);
        padding: 0 var(--_padding);
        font: inherit;
        font-size: var(--_font);
        font-weight: var(--vt-font-weight-semibold);
        line-height: 1;
        color: var(--_ink);
        background: linear-gradient(135deg, var(--vt-sheen) 0%, transparent 55%), var(--_fill);
        ${leadBorder('control')}
        cursor: pointer;
      }

      ${press('button')}

      button:hover {
        --_fill: var(--_fill-hover);
      }

      /* Ghost não tem espessura: é texto sobre a camada. No clique só afunda 1px. */
      :host([variant='ghost']) button,
      :host([variant='ghost']) button:hover {
        --_depth-shadow: none;
        transform: none;
      }

      :host([variant='ghost']) button:active {
        --_depth-shadow: inset 0 2px 3px rgb(0 0 0 / 0.2);
        transform: translateY(1px);
      }

      button:disabled {
        opacity: var(--vt-opacity-disabled);
        cursor: not-allowed;
      }

      button:disabled:hover {
        --_fill: inherit;
      }

      ${focusRing('button')}

      ::slotted(svg) {
        width: 1.25em;
        height: 1.25em;
        flex: none;
      }
    `,
  ];

  /** Internals do formulário: fica fora do template, só para requestSubmit/reset. */
  #internals = this.attachInternals();

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'md';
    this.type = 'button';
    this.disabled = false;
  }

  /** @param {boolean} disabled */
  formDisabledCallback(disabled) {
    this.disabled = disabled;
  }

  #onClick() {
    if (this.disabled) return;

    const form = this.#internals.form;
    if (!form) return;
    FORM_ACTIONS[this.type]?.(form);
  }

  render() {
    return html`
      <button part="button" type="button" ?disabled=${this.disabled} @click=${this.#onClick}>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </button>
    `;
  }
}

defineElement('vt-button', VtButton);
