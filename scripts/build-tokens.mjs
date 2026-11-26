/**
 * Gera src/tokens/tokens.css a partir dos tokens DTCG.
 *
 * - Primitivos viram custom properties em :root (--vt-color-red-600, --vt-space-4…).
 * - Cada tema vira um bloco; o escuro responde a prefers-color-scheme e pode ser
 *   forçado com data-theme="dark" em qualquer elemento (temas por sub-árvore).
 * - Cada bloco de tema também redefine o contexto (--vt-ctx-*). Custom properties
 *   são resolvidas onde são declaradas: se o contexto fosse declarado só em :root,
 *   uma sub-árvore data-theme="dark" herdaria as cores claras já resolvidas.
 */
import { writeFile } from 'node:fs/promises';
import { flatten, loadTokens, resolveColor, resolveValue, cssVarName } from './lib/tokens.mjs';
import { toCss } from './lib/color.mjs';

const OUTPUT = new URL('../src/tokens/tokens.css', import.meta.url);

const quoteFamily = name => (/\s/.test(name) && !name.startsWith('-') ? `"${name}"` : name);

const VALUE_FORMATTERS = Object.freeze({
  color: (primitives, token) => toCss(resolveColor(primitives, token)),
  fontFamily: (_, token) => token.value.map(quoteFamily).join(', '),
  cubicBezier: (_, token) => `cubic-bezier(${token.value.join(', ')})`,
});

const formatValue = (primitives, token) => {
  const formatter = VALUE_FORMATTERS[token.type];
  if (formatter) return formatter(primitives, token);
  return String(resolveValue(primitives, token.value));
};

const declarations = (primitives, tree, indent = '  ') =>
  flatten(tree).map(token => `${indent}${cssVarName(token.path)}: ${formatValue(primitives, token)};`);

const CONTEXT_DEFAULTS = Object.freeze([
  '--vt-ctx-bg: var(--vt-canvas-bg);',
  '--vt-ctx-fg: var(--vt-canvas-fg);',
  '--vt-ctx-muted: var(--vt-canvas-muted);',
]);

const themeBody = (primitives, theme, scheme, indent) => [
  `${indent}color-scheme: ${scheme};`,
  ...declarations(primitives, theme, indent),
  ...CONTEXT_DEFAULTS.map(line => `${indent}${line}`),
];

const block = (selector, lines, indent = '') => [`${indent}${selector} {`, ...lines, `${indent}}`].join('\n');

const main = async () => {
  const { primitives, themes } = await loadTokens();

  const css = [
    '/* Arquivo gerado por scripts/build-tokens.mjs — edite src/tokens/*.json e rode `npm run tokens`. */',
    '',
    block(':root', declarations(primitives, primitives)),
    '',
    block(':root,\n[data-theme="light"]', themeBody(primitives, themes.light, 'light', '  ')),
    '',
    '@media (prefers-color-scheme: dark) {',
    block(':root:not([data-theme="light"])', themeBody(primitives, themes.dark, 'dark', '    '), '  '),
    '}',
    '',
    block('[data-theme="dark"]', themeBody(primitives, themes.dark, 'dark', '  ')),
    '',
  ].join('\n');

  await writeFile(OUTPUT, css);
  console.log(`Tokens gerados em ${OUTPUT.pathname}`);
};

main().catch(error => {
  console.error('build-tokens::main', error instanceof Error ? error.message : error);
  process.exit(1);
});
