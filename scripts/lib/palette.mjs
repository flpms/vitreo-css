/**
 * Gera a árvore de cores primitivas (formato DTCG) a partir de src/tokens/palette.json.
 */
import { oklchToRgb, toHex } from './color.mjs';

/**
 * @param {{ steps: Record<string, { l: number, chroma: number }>, families: Record<string, { hue: number, chroma: number }>, fixed?: Record<string, Record<string, string>> }} palette
 * @returns {object} grupo DTCG { $type: 'color', <família>: { <degrau>: { $value: '#RRGGBB' } } }
 */
export const paletteToTokens = ({ steps, families, fixed = {} }) => {
  const familyTokens = Object.entries(families).map(([name, { hue, chroma }]) => [
    name,
    Object.fromEntries(
      Object.entries(steps).map(([step, { l, chroma: fraction }]) => [
        step,
        {
          $value: toHex(oklchToRgb(l, chroma * fraction, hue)),
          $extensions: { vitreo: { oklch: [l, Number((chroma * fraction).toFixed(4)), hue] } },
        },
      ]),
    ),
  ]);
  const fixedTokens = Object.keys(fixed)
    .filter(key => !key.startsWith('$'))
    .map(group => [group, Object.fromEntries(Object.entries(fixed[group]).map(([name, hex]) => [name, { $value: hex }]))]);
  return { $type: 'color', white: { $value: '#FFFFFF' }, ...Object.fromEntries(familyTokens), ...Object.fromEntries(fixedTokens) };
};
