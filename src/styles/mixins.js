/**
 * Mixins de estilo do Vítreo para componentes Lit.
 *
 * Modelo de camadas:
 *   L0 canvas  — fundo da página (definido em base.css / tokens.css)
 *   L1 surface — vidro translúcido: cards e alertas → contrastLayer()
 *   L2 control — botões e campos → controlFill(), fieldControl()
 *
 * Toda camada publica o seu contexto em --vt-ctx-bg / --vt-ctx-fg / --vt-ctx-muted.
 * Custom properties atravessam shadow DOM e slots, então um botão "ghost" dentro
 * de um card azul lê automaticamente o texto validado para o vidro azul.
 * Os pares de cor usados aqui são exatamente os validados por scripts/contrast-check.mjs.
 */
import { css, unsafeCSS } from 'lit';

/** Tons de vidro disponíveis na camada L1. */
export const SURFACE_TONES = Object.freeze(['neutral', 'red', 'blue', 'yellow', 'emerald']);

/** Preenchimentos sólidos da camada L2. */
export const CONTROL_VARIANTS = Object.freeze(['primary', 'secondary', 'accent']);

const identity = list => Object.freeze(Object.fromEntries(list.map(item => [item, item])));

const surfaceContext = tone => `
  --vt-ctx-bg: var(--vt-surface-${tone}-bg);
  --vt-ctx-fg: var(--vt-surface-${tone}-fg);
  --vt-ctx-muted: var(--vt-surface-${tone}-muted);`;

/**
 * Transforma o host em uma camada L1 e publica o contexto para os filhos.
 * Gera um seletor :host([atributo="valor"]) por entrada do mapa.
 * @param {{ attribute?: string, tones?: Record<string, string>, fallback?: string }} [options]
 *   attribute: atributo que escolhe o tom; tones: valor do atributo → tom de superfície.
 * @returns {import('lit').CSSResult}
 */
export const contrastLayer = ({ attribute = 'tone', tones = identity(SURFACE_TONES), fallback = 'neutral' } = {}) => {
  const rules = Object.entries(tones)
    .map(([value, tone]) => `:host([${attribute}="${value}"]) {${surfaceContext(tone)}\n}`)
    .join('\n');
  return unsafeCSS(`:host {${surfaceContext(fallback)}\n  color: var(--vt-ctx-fg);\n}\n${rules}`);
};

/**
 * Preenchimento de vidro: cor do contexto + reflexo diagonal + desfoque do que está atrás.
 * Sem suporte a backdrop-filter o vidro continua válido: o contraste já é medido
 * sobre a cor composta sem desfoque (o desfoque só faz média do fundo).
 * @returns {import('lit').CSSResult}
 */
export const glass = () => css`
  background: linear-gradient(135deg, var(--vt-sheen) 0%, transparent 45%), var(--vt-ctx-bg);
  -webkit-backdrop-filter: blur(var(--vt-glass-blur));
  backdrop-filter: blur(var(--vt-glass-blur));
`;

/**
 * Moldura de chumbo. Só a borda: o brilho fica reservado para a elevação (raise()).
 * @param {'control' | 'surface'} [weight]
 * @param {string} [override] custom property que pode zerar a moldura (ex.: dentro do grid chumbo)
 * @returns {import('lit').CSSResult}
 */
export const leadBorder = (weight = 'control', override = '--vt-lead-override') => unsafeCSS(`
  border: var(${override}, var(--vt-lead-${weight})) solid var(--vt-lead);
  border-radius: var(--vt-radius-none);
`);

/**
 * Elevação de controle (camada L2): no hover a peça sobe e ganha um degrau só à
 * direita e embaixo — filete de brilho colado na peça e sombra por fora. O brilho
 * aparece sobre fundos escuros, a sombra sobre os claros (validado em contrast-check).
 * No active a peça afunda e o degrau some.
 * @param {string} selector elemento interativo dentro do shadow root
 * @returns {import('lit').CSSResult}
 */
export const raise = selector => unsafeCSS(`
  ${selector} {
    transition:
      transform var(--vt-motion-duration-fast) var(--vt-motion-easing-standard),
      box-shadow var(--vt-motion-duration-fast) var(--vt-motion-easing-standard),
      background-color var(--vt-motion-duration-fast) var(--vt-motion-easing-standard);
  }
  ${selector}:hover:not(:disabled) {
    transform: translate(calc(var(--vt-elevation-raise) * -1), calc(var(--vt-elevation-raise) * -1));
    box-shadow:
      var(--vt-elevation-raise) var(--vt-elevation-raise) 0 0 var(--vt-glint),
      calc(var(--vt-elevation-raise) * 2) calc(var(--vt-elevation-raise) * 2) 0 0 var(--vt-shade);
  }
  ${selector}:active:not(:disabled) {
    transform: none;
    box-shadow: none;
  }
  @media (prefers-reduced-motion: reduce) {
    ${selector} {
      transition: none;
    }
  }
`);

/**
 * Anel de foco bicolor: faixa interna + contorno externo, visível em qualquer fundo.
 * @param {string} selector elemento que recebe foco dentro do shadow root
 * @returns {import('lit').CSSResult}
 */
export const focusRing = selector => unsafeCSS(`
  ${selector}:focus-visible {
    outline: 3px solid var(--vt-focus-outer);
    outline-offset: 3px;
    box-shadow: 0 0 0 3px var(--vt-focus-inner);
  }
`);

/**
 * Cores sólidas da camada L2 por variante, mais a variante ghost que herda o contexto.
 * Publica --_fill, --_fill-hover e --_ink para o template do componente usar.
 * @param {string} [attribute]
 * @returns {import('lit').CSSResult}
 */
export const controlFill = (attribute = 'variant') => {
  const solid = CONTROL_VARIANTS.map(variant => `
    :host([${attribute}="${variant}"]) {
      --_fill: var(--vt-control-${variant}-bg);
      --_fill-hover: var(--vt-control-${variant}-bg-hover);
      --_ink: var(--vt-control-${variant}-fg);
    }`).join('');
  const ghost = `
    :host([${attribute}="ghost"]) {
      --_fill: transparent;
      --_fill-hover: color-mix(in srgb, var(--vt-ctx-fg) calc(var(--vt-opacity-ghost-hover) * 100%), transparent);
      --_ink: var(--vt-ctx-fg);
    }`;
  return unsafeCSS(`:host {
      --_fill: var(--vt-control-primary-bg);
      --_fill-hover: var(--vt-control-primary-bg-hover);
      --_ink: var(--vt-control-primary-fg);
    }${solid}${ghost}`);
};

/**
 * Passo da escala tipográfica (1.25 sobre 16px).
 * @param {'xs' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'} step
 * @returns {import('lit').CSSResult}
 */
export const typeScale = step => unsafeCSS(`
  font-size: var(--vt-font-size-${step});
  line-height: var(--vt-font-line-height-${LINE_HEIGHT_BY_STEP[step] ?? 'tight'});
`);

/** Texto corrido respira mais; títulos ficam compactos. */
const LINE_HEIGHT_BY_STEP = Object.freeze({ xs: 'base', md: 'base', lg: 'base' });

/** Reset mínimo compartilhado por todos os componentes. */
export const hostBase = css`
  :host {
    box-sizing: border-box;
    font-family: var(--vt-font-family-base);
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  [hidden] {
    display: none !important;
  }
`;

/** Esconde visualmente mantendo acessível a leitores de tela. */
export const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;
