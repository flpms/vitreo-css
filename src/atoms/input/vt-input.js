import { LitElement, html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { focusRing, hostBase, leadBorder } from '../../styles/mixins.js';
import { defineElement } from '../../utils/define.js';

/**
 * Estilo do controle de texto (camada L2), compartilhado por vt-input e vt-field.
 * O campo tem fundo próprio (--vt-field-bg): o texto digitado não depende da camada
 * de baixo; só o contorno (chumbo + brilho) precisa contrastar com ela.
 */
export const fieldControlStyles = css`
  input {
    display: block;
    width: 100%;
    min-height: 2.75rem;
    margin: 0;
    padding: 0 var(--vt-space-3);
    font: inherit;
    /* 16px também evita o zoom automático do iOS ao focar */
    font-size: var(--vt-font-size-md);
    color: var(--vt-field-fg);
    background: var(--vt-field-bg);
    ${leadBorder('control')}
    transition: border-color var(--vt-motion-duration-fast) var(--vt-motion-easing-standard);
  }

  input::placeholder {
    color: var(--vt-field-placeholder);
    opacity: 1;
  }

  input[aria-invalid='true'] {
    border-left: 0.5rem solid var(--vt-field-invalid);
  }

  input:disabled {
    opacity: var(--vt-opacity-disabled);
    cursor: not-allowed;
  }

  ${focusRing('input')}
`;

/**
 * Átomo · camada L2. Campo de texto sem rótulo visível — exige `label`, que vira aria-label.
 * Para rótulo visível, dica e erro, use a molécula vt-field.
 *
 * @element vt-input
 * @csspart input - o <input> nativo
 * @fires input - a cada tecla (evento nativo, atravessa o shadow DOM)
 * @fires change - ao confirmar o valor (re-emitido, pois o nativo não atravessa)
 *
 * @attr {string} label - nome acessível (obrigatório no átomo)
 * @attr {string} type - text, email, password, search, tel, url, number
 * @attr {boolean} invalid
 */
export class VtInput extends LitElement {
  static formAssociated = true;

  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    label: {},
    type: {},
    name: { reflect: true },
    value: {},
    placeholder: {},
    autocomplete: {},
    inputmode: {},
    pattern: {},
    minlength: { type: Number },
    maxlength: { type: Number },
    disabled: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
    readonly: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
  };

  static styles = [
    hostBase,
    fieldControlStyles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  /** @protected */
  internals = this.attachInternals();

  constructor() {
    super();
    this.type = 'text';
    this.value = '';
    this.disabled = false;
    this.required = false;
    this.readonly = false;
    this.invalid = false;
  }

  /** @returns {HTMLInputElement | null} */
  get control() {
    return this.renderRoot?.querySelector('input') ?? null;
  }

  /** @returns {boolean} */
  get isInvalid() {
    return this.invalid;
  }

  /** @returns {boolean} */
  checkValidity() {
    return this.internals.checkValidity();
  }

  /** @returns {boolean} */
  reportValidity() {
    return this.internals.reportValidity();
  }

  formResetCallback() {
    this.value = this.getAttribute('value') ?? '';
  }

  /** @param {boolean} disabled */
  formDisabledCallback(disabled) {
    this.disabled = disabled;
  }

  updated() {
    this.internals.setFormValue(this.value);
    this.#syncValidity();
  }

  /** Espelha a validação nativa do <input> interno no elemento associado ao formulário. */
  #syncValidity() {
    const input = this.control;
    if (!input) return;
    if (input.validity.valid) {
      this.internals.setValidity({});
      return;
    }
    this.internals.setValidity(input.validity, input.validationMessage, input);
  }

  #onInput(event) {
    this.value = event.target.value;
  }

  #onChange() {
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  /**
   * @protected
   * @param {{ id?: string, describedBy?: string, ariaLabel?: string }} [options]
   */
  renderControl({ id, describedBy, ariaLabel } = {}) {
    return html`
      <input
        part="input"
        id=${ifDefined(id)}
        type=${this.type}
        name=${ifDefined(this.name)}
        .value=${live(this.value ?? '')}
        placeholder=${ifDefined(this.placeholder)}
        autocomplete=${ifDefined(this.autocomplete)}
        inputmode=${ifDefined(this.inputmode)}
        pattern=${ifDefined(this.pattern)}
        minlength=${ifDefined(this.minlength)}
        maxlength=${ifDefined(this.maxlength)}
        aria-label=${ifDefined(ariaLabel)}
        aria-describedby=${ifDefined(describedBy)}
        aria-invalid=${this.isInvalid ? 'true' : 'false'}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readonly}
        @input=${this.#onInput}
        @change=${this.#onChange}
      />
    `;
  }

  render() {
    return this.renderControl({ ariaLabel: this.label });
  }
}

defineElement('vt-input', VtInput);
