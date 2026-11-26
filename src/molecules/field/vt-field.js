import { html, css, nothing } from 'lit';
import { VtInput } from '../../atoms/input/vt-input.js';
import { defineElement } from '../../utils/define.js';

/**
 * Molécula · rótulo (texto da camada) + controle L2 + dica + erro.
 *
 * Rótulo, dica e erro ficam no mesmo shadow root que o <input>, então
 * <label for> e aria-describedby funcionam sem truques entre shadow roots.
 * O erro não depende só de cor (WCAG 1.4.1): tem ícone, texto e aria-invalid,
 * e usa a cor de texto da camada — legível sobre qualquer vidro.
 *
 * @element vt-field
 * @csspart label
 * @csspart input
 * @csspart hint
 * @csspart error
 *
 * @attr {string} label - rótulo visível
 * @attr {string} hint - texto de apoio
 * @attr {string} error - mensagem de erro; quando presente o campo fica inválido
 */
export class VtField extends VtInput {
  static properties = {
    ...VtInput.properties,
    hint: {},
    error: {},
  };

  static styles = [
    ...VtInput.styles,
    css`
      :host {
        display: grid;
        gap: var(--vt-space-2);
        color: var(--vt-ctx-fg);
      }

      label {
        font-size: var(--vt-font-size-md);
        font-weight: var(--vt-font-weight-semibold);
        line-height: var(--vt-font-line-height-tight);
      }

      .required {
        margin-inline-start: var(--vt-space-1);
      }

      .hint,
      .error {
        margin: 0;
        font-size: var(--vt-font-size-xs);
        line-height: var(--vt-font-line-height-base);
      }

      .hint {
        color: var(--vt-ctx-muted);
      }

      .error {
        display: flex;
        align-items: flex-start;
        gap: var(--vt-space-2);
        font-weight: var(--vt-font-weight-bold);
        color: var(--vt-ctx-fg);
      }

      .error svg {
        flex: none;
        width: 1rem;
        height: 1rem;
        margin-top: 0.1rem;
      }
    `,
  ];

  /** @returns {boolean} */
  get isInvalid() {
    return this.invalid || Boolean(this.error);
  }

  render() {
    const describedBy = [this.hint && 'hint', this.error && 'error'].filter(Boolean).join(' ');

    return html`
      <label part="label" for="control">
        ${this.label}${this.required ? html`<span class="required" aria-hidden="true">*</span>` : nothing}
      </label>
      ${this.renderControl({ id: 'control', describedBy: describedBy || undefined })}
      ${this.hint ? html`<p part="hint" id="hint" class="hint">${this.hint}</p>` : nothing}
      ${this.error
        ? html`<p part="error" id="error" class="error">
            <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
              <path d="M8 1 15 14H1L8 1Zm-.9 5v4h1.8V6H7.1Zm0 5.2V13h1.8v-1.8H7.1Z" />
            </svg>
            <span>${this.error}</span>
          </p>`
        : nothing}
    `;
  }
}

defineElement('vt-field', VtField);
