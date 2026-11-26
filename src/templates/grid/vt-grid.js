import { LitElement, html, css, unsafeCSS } from 'lit';
import { hostBase } from '../../styles/mixins.js';
import { defineElement } from '../../utils/define.js';

/** Pontos de quebra (largura da viewport). Usados em vt-grid e vt-cell. */
export const BREAKPOINTS = Object.freeze({ md: '64rem', sm: '40rem' });

/**
 * Tratamentos do espaço entre as peças do grid.
 *   air   — Respiro Metro: gutter vazio e generoso; cada vidro traz o próprio chumbo.
 *   light — Luz atrás do vidro: blocos Mondrian desfocados atrás do grid, que o vidro refrata.
 *   lead  — Chumbo: o gutter vira a linha preta do vitral/Mondrian.
 */
export const GRID_MODES = Object.freeze(['air', 'light', 'lead']);
const DEFAULT_MODE = 'air';

/**
 * Composição Mondrian sobre as divisões de Fibonacci do grid (8 | 5 | 8 e 13 | 8).
 * background-position em %: p = x / (W − w); para começar na coluna 9 (x = 8/21) com largura 5/21 → 50%.
 */
const LIGHT_COMPOSITION = `
  linear-gradient(var(--vt-light-ruby), var(--vt-light-ruby)) 0 0 / 38.1% 62% no-repeat,
  linear-gradient(var(--vt-light-amber), var(--vt-light-amber)) 100% 0 / 38.1% 38% no-repeat,
  linear-gradient(var(--vt-light-cobalt), var(--vt-light-cobalt)) 50% 100% / 23.8% 55% no-repeat,
  linear-gradient(var(--vt-light-amber), var(--vt-light-amber)) 0 100% / 14.3% 24% no-repeat,
  linear-gradient(var(--vt-light-cobalt), var(--vt-light-cobalt)) 100% 100% / 23.8% 30% no-repeat
`;

/**
 * Template · grid de 21 colunas (3 × 7, e número de Fibonacci: 13 + 8, 8 + 5 + 8, 7 + 7 + 7).
 * Use vt-cell como filho direto para definir o span.
 *
 * @element vt-grid
 * @slot - vt-cell
 * @attr {'air'|'light'|'lead'} mode - tratamento do gutter (ver GRID_MODES)
 */
export class VtGrid extends LitElement {
  static properties = {
    mode: { reflect: true },
  };

  static styles = [
    hostBase,
    css`
      :host {
        position: relative;
        isolation: isolate;
        display: grid;
        grid-template-columns: repeat(var(--vt-grid-columns), minmax(0, 1fr));
        gap: var(--_gap, var(--vt-grid-gutter-metro));
      }

      /* Respiro Metro */
      :host([mode='air']) {
        --_gap: var(--vt-grid-gutter-metro);
      }

      /* Luz atrás do vidro */
      :host([mode='light']) {
        --_gap: var(--vt-grid-gutter-light);
        padding: var(--vt-space-5);
      }

      :host([mode='light'])::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        background: ${unsafeCSS(LIGHT_COMPOSITION)};
        filter: blur(18px);
        pointer-events: none;
      }

      /* Chumbo */
      :host([mode='lead']) {
        --_gap: var(--vt-lead-surface);
        --vt-card-lead: 0px;
        background: var(--vt-lead);
        border: var(--vt-lead-surface) solid var(--vt-lead);
      }

      :host([mode='lead']) ::slotted(*) {
        background: var(--vt-canvas-bg);
      }

      @media (max-width: ${unsafeCSS(BREAKPOINTS.sm)}) {
        :host([mode='air']) {
          --_gap: var(--vt-grid-gutter-metro-sm);
        }
        :host([mode='light']) {
          padding: var(--vt-space-3);
        }
      }
    `,
  ];

  constructor() {
    super();
    this.mode = DEFAULT_MODE;
  }

  render() {
    return html`<slot></slot>`;
  }
}

defineElement('vt-grid', VtGrid);
