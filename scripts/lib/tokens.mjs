/**
 * Carrega e resolve os tokens DTCG do Vítreo (primitivos + temas).
 * Referências no formato "{color.red.600}" são resolvidas contra os primitivos;
 * `$extensions.vitreo.alpha` torna a cor translúcida.
 */
import { readFile } from 'node:fs/promises';
import { parseHex } from './color.mjs';
import { paletteToTokens } from './palette.mjs';
import { applyRules } from './rules.mjs';

const TOKENS_DIR = new URL('../../src/tokens/', import.meta.url);
export const THEMES = Object.freeze(['light', 'dark']);

const REFERENCE_PATTERN = /^\{([^}]+)\}$/;

const readJson = async relative => JSON.parse(await readFile(new URL(relative, TOKENS_DIR), 'utf8'));

/**
 * Primitivos = primitives.json + cores geradas de palette.json (OKLCH → sRGB).
 * Temas = themes/*.json + tokens de ação gerados de rules.json.
 * @returns {Promise<{ primitives: object, themes: Record<string, object> }>}
 */
export const loadTokens = async () => {
  const [base, palette, rules] = await Promise.all(['primitives.json', 'palette.json', 'rules.json'].map(readJson));
  const primitives = { ...base, color: paletteToTokens(palette) };
  const entries = await Promise.all(
    THEMES.map(async theme => [theme, applyRules(await readJson(`themes/${theme}.json`), theme, rules)]),
  );
  return { primitives, themes: Object.fromEntries(entries) };
};

const isToken = node => node && typeof node === 'object' && '$value' in node;
const isGroupKey = key => !key.startsWith('$');

/**
 * Achata a árvore DTCG em uma lista de tokens com caminho e tipo herdado do grupo.
 * @param {object} tree
 * @param {string[]} [path]
 * @param {string} [inheritedType]
 * @returns {Array<{ path: string[], value: unknown, type?: string, alpha?: number }>}
 */
export const flatten = (tree, path = [], inheritedType) => {
  const type = tree.$type ?? inheritedType;
  if (isToken(tree)) return [{ path, value: tree.$value, type, alpha: tree.$extensions?.vitreo?.alpha }];

  return Object.keys(tree)
    .filter(isGroupKey)
    .flatMap(key => flatten(tree[key], [...path, key], type));
};

/**
 * @param {object} tree
 * @param {string} dotted  ex.: "color.red.600"
 * @returns {unknown}
 * @throws {Error} quando a referência não existe
 */
const lookup = (tree, dotted) => {
  const node = dotted.split('.').reduce((acc, key) => acc?.[key], tree);
  if (!isToken(node)) throw new Error(`Referência de token inexistente: {${dotted}}`);
  return node.$value;
};

/**
 * Resolve uma referência "{a.b.c}" contra os primitivos; valores literais passam direto.
 * @param {object} primitives
 * @param {unknown} value
 * @returns {unknown}
 */
export const resolveValue = (primitives, value) => {
  const match = typeof value === 'string' && value.match(REFERENCE_PATTERN);
  if (!match) return value;
  return resolveValue(primitives, lookup(primitives, match[1]));
};

/**
 * Token de cor de tema → { rgb, alpha }.
 * @param {object} primitives
 * @param {{ value: unknown, alpha?: number }} token
 * @returns {import('./color.mjs').Rgba}
 */
export const resolveColor = (primitives, token) => ({
  rgb: parseHex(String(resolveValue(primitives, token.value))),
  alpha: token.alpha ?? 1,
});

/**
 * Indexa os tokens de cor de um tema por caminho "surface.red.bg" → { rgb, alpha }.
 * @param {object} primitives
 * @param {object} theme
 * @returns {Record<string, import('./color.mjs').Rgba>}
 */
export const themeColors = (primitives, theme) =>
  Object.fromEntries(
    flatten(theme)
      .filter(token => token.type === 'color')
      .map(token => [token.path.join('.'), resolveColor(primitives, token)]),
  );

/**
 * @param {string[]} path
 * @returns {string} nome da custom property, ex.: --vt-surface-red-bg
 */
export const cssVarName = path => `--vt-${path.join('-')}`;
