import { LitElement, html, css, unsafeCSS } from 'lit';
import { hostBase } from '../../styles/mixins.js';
import { defineElement } from '../../utils/define.js';

/** Pontos de quebra (largura da viewport). Usados em vt-grid e vt-cell. */
export const BREAKPOINTS = Object.freeze({ md: '64rem', sm: '40rem' });

/**
 * Tratamentos do espaço entre as peças do grid.
 *   air   — Respiro Metro: gutter vazio e generoso; cada vidro traz o próprio chumbo.
 *   light — Luz atrás do vidro (padrão): as primárias do Mondrian desfocadas atrás do grid.
 *           Os vidros filtram essa luz; o chumbo dos cards faz o papel das linhas pretas.
 *   lead  — Chumbo: o gutter vira a linha preta do vitral/Mondrian.
 */
export const GRID_MODES = Object.freeze(['air', 'light', 'lead']);
const DEFAULT_MODE = 'light';

/**
 * A luz atrás do vidro segue 'Composição II em vermelho, azul e amarelo' (Mondrian, 1930),
 * alinhada às colunas do grid: vermelho grande no alto à direita (13 colunas), azul embaixo
 * à esquerda (8 colunas) e um amarelo pequeno no canto inferior direito (3 colunas).
 * O resto fica no branco do fundo.
 */
const LIGHT_COMPOSITION = `
  linear-gradient(var(--vt-light-red), var(--vt-light-red)) 100% 0 / 61.9% 64% no-repeat,
  linear-gradient(var(--vt-light-blue), var(--vt-light-blue)) 0 100% / 38.1% 36% no-repeat,
  linear-gradient(var(--vt-light-yellow), var(--vt-light-yellow)) 100% 100% / 14.3% 22% no-repeat
`;

/**
 * Template · grid de 21 colunas (3 × 7, e número de Fibonacci: 13 + 8, 8 + 5 + 8, 7 + 7 + 7).
 * Use vt-cell como filho direto para definir o span.
 *
 * @element vt-grid
 * @slot - vt-cell
 * @attr {'light'|'air'|'lead'} mode - tratamento do gutter; padrão light (ver GRID_MODES)
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
