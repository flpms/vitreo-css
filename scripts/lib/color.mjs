/**
 * Matemática de cor da WCAG 2.x (luminância relativa e razão de contraste)
 * e composição alpha ("source-over") para medir vidros translúcidos.
 * @see https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 * @see https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 */

/** @typedef {{ r: number, g: number, b: number }} Rgb  canais 0–255 */
/** @typedef {{ rgb: Rgb, alpha: number }} Rgba */

const HEX_PATTERN = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

/**
 * @param {string} hex  #RGB ou #RRGGBB
 * @returns {Rgb}
 * @throws {Error} quando o valor não é hex válido
 */
export const parseHex = hex => {
  if (!HEX_PATTERN.test(hex)) throw new Error(`Cor hex inválida: ${hex}`);

  const digits = hex.length === 4 ? [...hex.slice(1)].map(d => d + d).join('') : hex.slice(1);
  const [r, g, b] = [0, 2, 4].map(i => parseInt(digits.slice(i, i + 2), 16));
  return { r, g, b };
};

/**
 * @param {Rgb} rgb
 * @returns {string} #RRGGBB
 */
export const toHex = ({ r, g, b }) =>
  `#${[r, g, b].map(c => Math.round(c).toString(16).padStart(2, '0')).join('').toUpperCase()}`;

/**
 * Compõe uma cor translúcida sobre uma cor opaca (operador source-over).
 * O resultado é a cor que o olho de fato vê — é contra ela que o contraste é medido.
 * @param {Rgba} top
 * @param {Rgb} bottom
 * @returns {Rgb}
 */
export const composite = ({ rgb, alpha }, bottom) => ({
  r: rgb.r * alpha + bottom.r * (1 - alpha),
  g: rgb.g * alpha + bottom.g * (1 - alpha),
  b: rgb.b * alpha + bottom.b * (1 - alpha),
});

const linearize = channel => {
  const c = channel / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

/**
 * @param {Rgb} rgb
 * @returns {number} luminância relativa 0–1
 */
export const luminance = ({ r, g, b }) =>
  0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);

/**
 * @param {Rgb} a
 * @param {Rgb} b
 * @returns {number} razão de contraste 1–21
 */
export const contrast = (a, b) => {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
};

/**
 * @param {Rgba} color
 * @returns {string} cor CSS (hex quando opaca, rgb() com alpha quando translúcida)
 */
export const toCss = ({ rgb, alpha }) => {
  if (alpha >= 1) return toHex(rgb);

  const { r, g, b } = rgb;
  return `rgb(${r} ${g} ${b} / ${alpha})`;
};
