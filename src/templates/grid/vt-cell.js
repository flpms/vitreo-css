import { LitElement, html, css, unsafeCSS } from 'lit';
import { BREAKPOINTS } from './vt-grid.js';
import { defineElement } from '../../utils/define.js';

const COLUMNS = 21;

/**
 * @param {unknown} value
 * @param {number} fallback
 * @returns {number} span inteiro entre 1 e 21
 */
const toSpan = (value, fallback) => {
  const span = Number.parseInt(String(value), 10);
  if (Number.isNaN(span)) return fallback;
  return Math.min(COLUMNS, Math.max(1, span));
};

/**
 * Template · célula do vt-grid.
 * Abaixo de 40rem toda célula ocupa as 21 colunas, a menos que `span-sm` diga outra coisa.
 *
 * @element vt-cell
 * @slot - conteúdo
 * @attr {number} span - colunas no desktop (padrão 21)
 * @attr {number} span-md - colunas até 64rem (padrão: span)
 * @attr {number} span-sm - colunas até 40rem (padrão 21)
 * @attr {number} rows - linhas ocupadas (padrão 1)
 */
export class VtCell extends LitElement {
  static properties = {
    span: {},
    spanMd: { attribute: 'span-md' },
    spanSm: { attribute: 'span-sm' },
    rows: {},
  };

  static styles = css`
    :host {
      display: block;
      min-width: 0;
      grid-column: span var(--_span, ${COLUMNS});
      grid-row: span var(--_rows, 1);
    }

    @media (max-width: ${unsafeCSS(BREAKPOINTS.md)}) {
      :host {
        grid-column: span var(--_span-md, var(--_span, ${COLUMNS}));
      }
    }

    @media (max-width: ${unsafeCSS(BREAKPOINTS.sm)}) {
      :host {
        grid-column: span var(--_span-sm, ${COLUMNS});
      }
    }
  `;

  updated() {
    const span = toSpan(this.span, COLUMNS);
    const spans = {
      '--_span': span,
      '--_span-md': toSpan(this.spanMd, span),
      '--_span-sm': toSpan(this.spanSm, COLUMNS),
      '--_rows': toSpan(this.rows, 1),
    };
    Object.entries(spans).forEach(([property, value]) => this.style.setProperty(property, String(value)));
  }

  render() {
    return html`<slot></slot>`;
  }
}

defineElement('vt-cell', VtCell);
