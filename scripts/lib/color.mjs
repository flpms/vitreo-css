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

/** sRGB linear → sRGB codificado (0–1). */
const encode = c => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

/**
 * OKLCH → sRGB linear (pode sair do gamut).
 * @see https://bottosson.github.io/posts/oklab/
 */
const oklchToLinear = (l, c, h) => {
  const a = c * Math.cos((h * Math.PI) / 180);
  const b = c * Math.sin((h * Math.PI) / 180);
  const l_ = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m_ = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s_ = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_,
  ];
};

const inGamut = channels => channels.every(v => v >= -1e-4 && v <= 1 + 1e-4);

/**
 * OKLCH → sRGB, reduzindo só o croma (busca binária) quando a cor cai fora do gamut.
 * Mantém luminosidade e matiz — o que importa para contraste e harmonia.
 * @param {number} l luminosidade 0–1
 * @param {number} c croma
 * @param {number} h matiz em graus
 * @returns {Rgb}
 */
export const oklchToRgb = (l, c, h) => {
  const fit = Array.from({ length: 24 }).reduce(
    ({ low, high }) => {
      const mid = (low + high) / 2;
      return inGamut(oklchToLinear(l, mid, h)) ? { low: mid, high } : { low, high: mid };
    },
    { low: 0, high: c },
  );
  const chroma = inGamut(oklchToLinear(l, c, h)) ? c : fit.low;
  const [r, g, b] = oklchToLinear(l, chroma, h).map(v => Math.round(Math.min(1, Math.max(0, encode(v))) * 255));
  return { r, g, b };
};
