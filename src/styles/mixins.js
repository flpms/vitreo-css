/**
 * Mixins de estilo do Vítreo para componentes Lit.
 *
 * Modelo de camadas:
 *   L0 canvas  — fundo da página (definido em base.css / tokens.css)
 *   L1 surface — vidro translúcido: cards e alertas → contrastLayer()
 *   L2 control — botões e campos → controlFill(), fieldControl()
 *
 * Toda camada publica o seu contexto em --vt-ctx-bg / --vt-ctx-fg / --vt-ctx-muted /
 * --vt-ctx-accent e as cores de ação --vt-ctx-action-<primary|accent|danger>-<bg|bg-hover|fg>. Custom properties atravessam shadow DOM e slots, então um botão
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

const CONTEXT_ROLES = Object.freeze([
  'bg', 'fg', 'muted', 'accent',
  ...['primary', 'accent', 'danger'].flatMap(action => ['bg', 'bg-hover', 'fg'].map(part => `action-${action}-${part}`)),
]);

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
 * Moldura de chumbo.
 * @param {'control' | 'surface'} [weight]
 * @param {string} [override] custom property que pode zerar a moldura (ex.: dentro do grid chumbo)
 * @returns {import('lit').CSSResult}
 */
export const leadBorder = (weight = 'control', override = '--vt-lead-override') => unsafeCSS(`
  border: var(${override}, var(--vt-lead-${weight})) solid var(--vt-lead);
  border-radius: var(--vt-radius-none);
`);

/**
 * Tecla de vidro (camada L2). A peça tem espessura embaixo, feita da própria cor
 * escurecida com --vt-shade — como a borda de um vidro grosso. Move-se só no eixo Z:
 *   repouso → espessura de --vt-press-depth
 *   hover   → sobe --vt-press-lift (a espessura cresce junto)
 *   active  → desce a espessura inteira; a face fica côncava (sombra interna)
 * O aperto dura --vt-motion-duration-press; a volta, mais lenta, --vt-motion-duration-release.
 * Desabilitado fica rente. Publica --_edge para outros estados (ex.: foco) reaproveitarem.
 * @param {string} selector elemento interativo dentro do shadow root (precisa de --_fill)
 * @returns {import('lit').CSSResult}
 */
export const press = selector => unsafeCSS(`
  ${selector} {
    --_edge: color-mix(in oklab, var(--_fill) 62%, var(--vt-shade));
    --_depth-shadow: 0 var(--vt-press-depth) 0 0 var(--_edge);
    box-shadow: var(--_depth-shadow);
    transition:
      transform var(--vt-motion-duration-release) var(--vt-motion-easing-release),
      box-shadow var(--vt-motion-duration-release) var(--vt-motion-easing-release),
      background-color var(--vt-motion-duration-release) var(--vt-motion-easing-release);
  }
  ${selector}:hover {
    --_depth-shadow: 0 calc(var(--vt-press-depth) + var(--vt-press-lift)) 0 0 var(--_edge);
    transform: translateY(calc(var(--vt-press-lift) * -1));
  }
  ${selector}:active {
    --_depth-shadow: inset 0 2px 3px rgb(0 0 0 / 0.28);
    transform: translateY(var(--vt-press-depth));
    transition-duration: var(--vt-motion-duration-press);
  }
  ${selector}:disabled {
    --_depth-shadow: none;
    transform: none;
  }
  @media (prefers-reduced-motion: reduce) {
    ${selector} {
      transition: none;
    }
  }
`);

/**
 * Anel de foco bicolor: faixa interna + contorno externo, visível em qualquer fundo.
 * Preserva a profundidade da tecla quando o elemento usa press() (--_depth-shadow).
 * @param {string} selector elemento que recebe foco dentro do shadow root
 * @returns {import('lit').CSSResult}
 */
export const focusRing = selector => unsafeCSS(`
  ${selector}:focus-visible {
    outline: var(--vt-focus-width) solid var(--vt-focus-outer);
    outline-offset: var(--vt-focus-offset);
    box-shadow: 0 0 0 var(--vt-focus-offset) var(--vt-focus-inner), var(--_depth-shadow, 0 0 transparent);
  }
`);

/** Ações preenchidas: as cores vêm do contexto da camada (rules.json), não de um valor global. */
const ACTIONS = Object.freeze(['primary', 'accent', 'danger']);

/**
 * Cores da camada L2 por variante. primary/accent/danger leem --vt-ctx-action-*, que
 * cada camada publica segundo as regras de aplicação (luminosidade invertida e troca
 * de matiz). secondary é neutro; ghost herda o texto da camada.
 * Publica --_fill, --_fill-hover e --_ink para o template do componente usar.
 * @param {string} [attribute]
 * @returns {import('lit').CSSResult}
 */
export const controlFill = (attribute = 'variant') => {
  const actions = ACTIONS.map(action => `
    :host([${attribute}="${action}"]) {
      --_fill: var(--vt-ctx-action-${action}-bg);
      --_fill-hover: var(--vt-ctx-action-${action}-bg-hover);
      --_ink: var(--vt-ctx-action-${action}-fg);
    }`).join('');
  const neutral = `
    :host([${attribute}="secondary"]) {
      --_fill: var(--vt-control-secondary-bg);
      --_fill-hover: var(--vt-control-secondary-bg-hover);
      --_ink: var(--vt-control-secondary-fg);
    }
    :host([${attribute}="ghost"]) {
      --_fill: transparent;
      --_fill-hover: color-mix(in srgb, var(--vt-ctx-fg) calc(var(--vt-opacity-ghost-hover) * 100%), transparent);
      --_ink: var(--vt-ctx-fg);
    }`;
  return unsafeCSS(`:host {
      --_fill: var(--vt-ctx-action-primary-bg);
      --_fill-hover: var(--vt-ctx-action-primary-bg-hover);
      --_ink: var(--vt-ctx-action-primary-fg);
    }${actions}${neutral}`);
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
