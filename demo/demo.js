import '../src/index.js';
import { renderPalette, renderVersion, setupThemeSwitch } from './shared.js';

const TONE_LABELS = Object.freeze({
  neutral: 'vidro claro',
  cobalt: 'cobalto',
  ruby: 'rubi',
  amber: 'âmbar',
  verdigris: 'verdete',
  amethyst: 'ametista',
  moss: 'musgo',
});

/** Dados de exemplo do dashboard (em milhares de reais). */
const REVENUE = Object.freeze({
  months: ['jun', 'jul', 'ago', 'set', 'out', 'nov'],
  series: [
    { name: 'assinaturas', color: 'var(--vt-data-1)', values: [42, 45, 47, 52, 56, 61] },
    { name: 'avulsos', color: 'var(--vt-data-3)', values: [18, 24, 21, 26, 22, 25] },
  ],
});

const TRAFFIC = Object.freeze([
  { name: 'busca orgânica', share: 34 },
  { name: 'direto', share: 22 },
  { name: 'redes sociais', share: 17 },
  { name: 'e-mail', share: 12 },
  { name: 'parceiros', share: 9 },
  { name: 'anúncios', share: 6 },
]);

const toneCard = (tone, emphasis) => `
  <vt-card tone="${tone}" emphasis="${emphasis}">
    <span slot="header" class="vt-label">${TONE_LABELS[tone]} · ${emphasis}</span>
    <div class="row row--tight">
      <vt-button size="sm" variant="primary">primary</vt-button>
      <vt-button size="sm" variant="accent">accent</vt-button>
      <vt-button size="sm" variant="danger">danger</vt-button>
      <vt-button size="sm" variant="ghost">ghost</vt-button>
    </div>
  </vt-card>`;

const renderTones = container => {
  container.innerHTML = Object.keys(TONE_LABELS)
    .map(tone => `<div class="tones__pair">${toneCard(tone, 'soft')}${toneCard(tone, 'strong')}</div>`)
    .join('');
};

/** Barras agrupadas em SVG, desenhadas numa única escala. */
const renderChart = (container, legend) => {
  const width = 560;
  const height = 220;
  const pad = { top: 12, right: 8, bottom: 28, left: 36 };
  const max = 80;
  const ticks = [0, 20, 40, 60, 80];
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const groupW = plotW / REVENUE.months.length;
  const barW = (groupW * 0.62) / REVENUE.series.length;
  const y = value => pad.top + plotH - (value / max) * plotH;

  const grid = ticks
    .map(t => `
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${y(t)}" y2="${y(t)}" class="chart__grid" />
      <text x="${pad.left - 8}" y="${y(t) + 4}" text-anchor="end" class="chart__tick">${t}</text>`)
    .join('');

  const bars = REVENUE.months
    .map((month, i) => {
      const x0 = pad.left + i * groupW + groupW * 0.19;
      const rects = REVENUE.series
        .map(({ color, values }, s) => `<rect x="${x0 + s * barW}" y="${y(values[i])}" width="${barW - 2}" height="${y(0) - y(values[i])}" style="fill: ${color}" />`)
        .join('');
      return `${rects}<text x="${pad.left + i * groupW + groupW / 2}" y="${height - 8}" text-anchor="middle" class="chart__tick">${month}</text>`;
    })
    .join('');

  container.innerHTML = `<svg viewBox="0 0 ${width} ${height}" aria-hidden="true">${grid}${bars}
    <line x1="${pad.left}" x2="${width - pad.right}" y1="${y(0)}" y2="${y(0)}" class="chart__axis" /></svg>`;
  legend.innerHTML = REVENUE.series
    .map(({ name, color }) => `<li><span class="swatch" style="background: ${color}"></span>${name} (mil R$)</li>`)
    .join('');
};

const renderShare = (bar, list) => {
  bar.innerHTML = TRAFFIC.map(
    ({ share }, i) => `<span style="flex: ${share}; background: var(--vt-data-${i + 1})"></span>`,
  ).join('');
  list.innerHTML = TRAFFIC.map(
    ({ name, share }, i) => `<li><span class="swatch" style="background: var(--vt-data-${i + 1})"></span><span>${name}</span><strong>${share}%</strong></li>`,
  ).join('');
};

const renderCompositions = () => {
  const template = document.getElementById('composition');
  document.querySelectorAll('vt-grid.composition').forEach(grid => grid.append(template.content.cloneNode(true)));
};

const renderRuler = ruler => {
  ruler.innerHTML = Array.from({ length: 21 }, (_, index) => `<span>${index + 1}</span>`).join('');
};

const setupForm = form => {
  const output = form.querySelector('output');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    output.textContent = `Enviado: ${JSON.stringify(data)}`;
  });
  form.addEventListener('reset', () => {
    output.textContent = '';
  });
};

renderVersion();
setupThemeSwitch(document.documentElement);
renderPalette(document.querySelector('[data-palette]'));
renderChart(document.querySelector('[data-chart]'), document.querySelector('[data-chart-legend]'));
renderShare(document.querySelector('[data-share]'), document.querySelector('[data-share-legend]'));
renderTones(document.querySelector('[data-tones]'));
renderCompositions();
renderRuler(document.querySelector('.ruler'));
setupForm(document.getElementById('demo-form'));
