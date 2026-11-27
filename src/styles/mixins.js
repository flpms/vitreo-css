/**
 * Mixins de estilo do Vítreo para componentes Lit.
 *
 * Modelo de camadas:
 *   L0 canvas  — fundo da página (definido em base.css / tokens.css)
 *   L1 surface — vidro translúcido: cards e alertas → contrastLayer()
 *   L2 control — botões e campos → controlFill(), fieldControl()
 *
 * Toda camada publica o seu contexto em --vt-ctx-bg / --vt-ctx-fg / --vt-ctx-muted /
 * --vt-ctx-accent. Custom properties atravessam shadow DOM e slots, então um botão
 * "ghost" dentro de um card cobalto lê automaticamente o texto validado para aquele vidro.
 * Os pares de cor usados aqui são exatamente os validados por scripts/contrast-check.mjs.
 */
import { css, unsafeCSS } from 'lit';

/**
 * Tons de vidro da camada L1 (famílias de palette.json).
 * neutral: vidro claro · cobalt: azul de Chartres · ruby: rubi · amber: âmbar
 * verdigris: verdete · amethyst: ametista · moss: musgo
 */
export const SURFACE_TONES = Object.freeze(['neutral', 'cobalt', 'ruby', 'amber', 'verdigris', 'amethyst', 'moss']);

/** Intensidade do vidro: soft (tingido, padrão) ou strong (destaque). */
export const SURFACE_EMPHASES = Object.freeze(['soft', 'strong']);

/** Preenchimentos sólidos da camada L2. */
export const CONTROL_VARIANTS = Object.freeze(['primary', 'secondary', 'accent', 'danger']);

const identity = list => Object.freeze(Object.fromEntries(list.map(item => [item, item])));

const CONTEXT_ROLES = Object.freeze(['bg', 'fg', 'muted', 'accent']);

const surfaceContext = (tone, emphasis) =>
  CONTEXT_ROLES.map(role => `\n  --vt-ctx-${role}: var(--vt-surface-${tone}-${emphasis}-${role});`).join('');

/**
 * Transforma o host em uma camada L1 e publica o contexto para os filhos.
 * Gera :host([atributo="valor"]) para a ênfase soft e :host([atributo="valor"][emphasis="strong"]).
 * @param {{ attribute?: string, tones?: Record<string, string>, fallback?: string }} [options]
 *   attribute: atributo que escolhe o tom; tones: valor do atributo → tom de superfície.
 * @returns {import('lit').CSSResult}
 */
export const contrastLayer = ({ attribute = 'tone', tones = identity(SURFACE_TONES), fallback = 'neutral' } = {}) => {
  const rules = Object.entries(tones).flatMap(([value, tone]) => [
    `:host([${attribute}="${value}"]) {${surfaceContext(tone, 'soft')}\n}`,
    `:host([${attribute}="${value}"][emphasis="strong"]) {${surfaceContext(tone, 'strong')}\n}`,
  ]);
  const base = [
    `:host {${surfaceContext(fallback, 'soft')}\n  color: var(--vt-ctx-fg);\n}`,
    `:host([emphasis="strong"]) {${surfaceContext(fallback, 'strong')}\n}`,
  ];
  return unsafeCSS([...base, ...rules].join('\n'));
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
 * Elevação de controle (camada L2). O degrau — filete de brilho colado na peça e
 * sombra por fora — troca de lado conforme o estado, como luz batendo no vidro:
 *   repouso → degrau à esquerda e em cima (peça deslocada para baixo e à direita)
 *   hover   → degrau à direita e embaixo (peça desliza para cima e à esquerda)
 *   active  → sem degrau, peça rente
 * O brilho aparece sobre fundos escuros, a sombra sobre os claros (validado em
 * contrast-check). Desabilitado fica rente: não há o que pressionar.
 * @param {string} selector elemento interativo dentro do shadow root
 * @returns {import('lit').CSSResult}
 */
export const raise = selector => unsafeCSS(`
  ${selector} {
    --_r: var(--vt-elevation-raise);
    transform: translate(var(--_r), var(--_r));
    box-shadow:
      calc(var(--_r) * -1) calc(var(--_r) * -1) 0 0 var(--vt-glint),
      calc(var(--_r) * -2) calc(var(--_r) * -2) 0 0 var(--vt-shade);
    transition:
      transform var(--vt-motion-duration-fast) var(--vt-motion-easing-standard),
      box-shadow var(--vt-motion-duration-fast) var(--vt-motion-easing-standard),
      background-color var(--vt-motion-duration-fast) var(--vt-motion-easing-standard);
  }
  ${selector}:hover {
    transform: translate(calc(var(--_r) * -1), calc(var(--_r) * -1));
    box-shadow:
      var(--_r) var(--_r) 0 0 var(--vt-glint),
      calc(var(--_r) * 2) calc(var(--_r) * 2) 0 0 var(--vt-shade);
  }
  ${selector}:active,
  ${selector}:disabled {
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
    outline: var(--vt-focus-width) solid var(--vt-focus-outer);
    outline-offset: var(--vt-focus-offset);
    box-shadow: 0 0 0 var(--vt-focus-offset) var(--vt-focus-inner);
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
