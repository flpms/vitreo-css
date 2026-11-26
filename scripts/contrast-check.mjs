/**
 * Valida as camadas de contraste do Vítreo contra a WCAG 2.x em ambos os temas.
 *
 * Camadas:
 *   L0 canvas  → fundo da página
 *   L1 surface → vidros translúcidos (cards, alertas) sobre L0
 *   L2 control → botões e campos sobre L0 ou L1
 *
 * Vidro translúcido não tem uma cor só: medimos o texto contra a cor COMPOSTA
 * sobre cada fundo possível (canvas e blocos de luz da ideia 2), e ainda com o
 * reflexo (sheen) por cima — e ficamos com o pior caso.
 *
 * Critérios:
 *   1.4.3  texto normal                          ≥ 4.5:1
 *   1.4.11 contorno de campo, foco e elevação    ≥ 3:1
 *
 * Botões são identificados pelo próprio rótulo (já validado em 4.5:1), então o
 * chumbo deles é estético. Campos de texto não têm rótulo dentro: o contorno
 * (chumbo ou o próprio fundo do campo) precisa de 3:1 contra a camada.
 * Cards e alertas não são interativos: a moldura é decorativa.
 *
 * Uso: node scripts/contrast-check.mjs [--report docs/contrast-report.md]
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { composite, contrast, toHex } from './lib/color.mjs';
import { loadTokens, themeColors, THEMES } from './lib/tokens.mjs';

const TEXT_MIN = 4.5;
const NON_TEXT_MIN = 3;

const SURFACE_TONES = Object.freeze(['neutral', 'red', 'blue', 'yellow', 'emerald']);
const CONTROL_VARIANTS = Object.freeze(['primary', 'secondary', 'accent']);
const LIGHT_BLOCKS = Object.freeze(['red', 'blue', 'yellow']);

const opaque = rgb => ({ rgb, alpha: 1 });

/** Todos os fundos sobre os quais um vidro L1 pode estar. */
const surfaceBackdrops = colors => {
  const canvas = colors['canvas.bg'].rgb;
  const lights = LIGHT_BLOCKS.map(name => ({
    name: `luz ${name}`,
    rgb: composite(colors[`light.${name}`], canvas),
  }));
  return [{ name: 'canvas', rgb: canvas }, ...lights];
};

/** Cor mais clara e mais "reflexiva" possível de uma superfície: com e sem sheen. */
const withSheen = (colors, rgb) => [
  { name: 'liso', rgb },
  { name: 'reflexo', rgb: composite(colors.sheen, rgb) },
];

const worst = checks => checks.reduce((min, check) => (check.ratio < min.ratio ? check : min));

const measure = (fg, candidates) =>
  worst(candidates.map(({ name, rgb }) => ({ ratio: contrast(fg, rgb), on: name, bg: rgb })));

/** Par de cores lado a lado (anel de foco, degrau de elevação, campo + chumbo): basta uma contrastar com o vizinho. */
const ringRatio = (a, b, against) => Math.max(contrast(a, against), contrast(b, against));

const textCheck = ({ theme, layer, label, fg, candidates }) => {
  const result = measure(fg, candidates);
  return { theme, layer, label, kind: 'texto', min: TEXT_MIN, fg: toHex(fg), bg: toHex(result.bg), on: result.on, ratio: result.ratio };
};

const ringCheck = ({ theme, layer, label, a, b, candidates }) => {
  const result = worst(candidates.map(({ name, rgb }) => ({ ratio: ringRatio(a, b, rgb), on: name, bg: rgb })));
  return { theme, layer, label, kind: 'contorno', min: NON_TEXT_MIN, fg: `${toHex(a)}+${toHex(b)}`, bg: toHex(result.bg), on: result.on, ratio: result.ratio };
};

const surfaceCandidates = (colors, tone) =>
  surfaceBackdrops(colors).flatMap(backdrop => {
    const glass = composite(colors[`surface.${tone}.bg`], backdrop.rgb);
    return withSheen(colors, glass).map(variant => ({ name: `${backdrop.name}/${variant.name}`, rgb: variant.rgb }));
  });

const checksForTheme = (theme, colors, ghostHoverAlpha) => {
  const rgb = path => colors[path].rgb;
  const canvasCandidates = surfaceBackdrops(colors);
  const glint = rgb('glint');
  const fieldBg = rgb('field.bg');
  const fieldEdge = rgb('field.edge');

  const canvas = [
    textCheck({ theme, layer: 'L0', label: 'canvas · texto', fg: rgb('canvas.fg'), candidates: canvasCandidates }),
    textCheck({ theme, layer: 'L0', label: 'canvas · texto suave', fg: rgb('canvas.muted'), candidates: canvasCandidates }),
  ];

  const surfaces = SURFACE_TONES.flatMap(tone => {
    const candidates = surfaceCandidates(colors, tone);
    return [
      textCheck({ theme, layer: 'L1', label: `surface ${tone} · texto`, fg: rgb(`surface.${tone}.fg`), candidates }),
      textCheck({ theme, layer: 'L1', label: `surface ${tone} · texto suave`, fg: rgb(`surface.${tone}.muted`), candidates }),
    ];
  });

  // Todo lugar onde um controle L2 pode estar: canvas ou qualquer superfície.
  const placements = [
    ...canvasCandidates.map(c => ({ name: `canvas(${c.name})`, rgb: c.rgb })),
    ...SURFACE_TONES.flatMap(tone => surfaceCandidates(colors, tone).map(c => ({ name: `${tone}(${c.name})`, rgb: c.rgb }))),
  ];

  const controls = CONTROL_VARIANTS.flatMap(variant => {
    const fg = rgb(`control.${variant}.fg`);
    const fills = [
      ...withSheen(colors, rgb(`control.${variant}.bg`)),
      ...withSheen(colors, rgb(`control.${variant}.bg-hover`)).map(f => ({ ...f, name: `hover/${f.name}` })),
    ];
    return [textCheck({ theme, layer: 'L2', label: `botão ${variant} · texto`, fg, candidates: fills })];
  });

  // Botão ghost herda o texto da camada onde está; no hover ganha um véu da própria cor do texto.
  const ghost = SURFACE_TONES.map(tone => {
    const fg = rgb(`surface.${tone}.fg`);
    const candidates = surfaceCandidates(colors, tone).flatMap(c => [
      c,
      { name: `${c.name}/hover`, rgb: composite({ rgb: fg, alpha: ghostHoverAlpha }, c.rgb) },
    ]);
    return textCheck({ theme, layer: 'L2', label: `botão ghost em ${tone} · texto`, fg, candidates });
  });

  const field = [
    textCheck({ theme, layer: 'L2', label: 'campo · texto', fg: rgb('field.fg'), candidates: [{ name: 'campo', rgb: rgb('field.bg') }] }),
    textCheck({ theme, layer: 'L2', label: 'campo · placeholder', fg: rgb('field.placeholder'), candidates: [{ name: 'campo', rgb: rgb('field.bg') }] }),
  ];

  const rings = [
    ringCheck({ theme, layer: 'L2', label: 'campo · contorno (borda ou fundo) vs camada', a: fieldEdge, b: fieldBg, candidates: placements }),
    ringCheck({ theme, layer: 'L2', label: 'hover · degrau de elevação (brilho + sombra) vs camada', a: glint, b: rgb('shade'), candidates: placements }),
    ringCheck({ theme, layer: 'L2', label: 'foco · anel bicolor vs camada', a: rgb('focus.outer'), b: rgb('focus.inner'), candidates: placements }),
    {
      theme, layer: 'L2', label: 'foco · externo vs interno', kind: 'contorno', min: NON_TEXT_MIN,
      fg: toHex(rgb('focus.outer')), bg: toHex(rgb('focus.inner')), on: 'anel',
      ratio: contrast(rgb('focus.outer'), rgb('focus.inner')),
    },
  ];

  return [...canvas, ...surfaces, ...controls, ...ghost, ...field, ...rings];
};

const formatRow = check => {
  const status = check.ratio >= check.min ? '✅' : '❌';
  return `| ${check.theme} | ${check.layer} | ${check.label} | ${check.kind} | ${check.fg} | ${check.bg} (${check.on}) | **${check.ratio.toFixed(2)}:1** | ${check.min}:1 | ${status} |`;
};

const toMarkdown = checks => [
  '# Relatório de contraste — Vítreo DS',
  '',
  'Gerado por `npm run contrast`. Cada linha mostra o **pior caso**: vidros translúcidos são',
  'compostos sobre todos os fundos possíveis (canvas e blocos de luz) e com o reflexo (sheen) aplicado.',
  'Pares lado a lado (anel de foco, degrau de elevação do hover, campo + chumbo) passam se uma das cores atinge 3:1 contra o vizinho.',
  '',
  '| Tema | Camada | Par | Tipo | Frente | Fundo (pior caso) | Razão | Mínimo | |',
  '|---|---|---|---|---|---|---|---|---|',
  ...checks.map(formatRow),
  '',
].join('\n');

const reportPath = () => {
  const index = process.argv.indexOf('--report');
  return index === -1 ? null : process.argv[index + 1];
};

const main = async () => {
  const { primitives, themes } = await loadTokens();
  const ghostHoverAlpha = primitives.opacity['ghost-hover'].$value;
  const checks = THEMES.flatMap(theme => checksForTheme(theme, themeColors(primitives, themes[theme]), ghostHoverAlpha));
  const failures = checks.filter(check => check.ratio < check.min);

  checks.forEach(check => {
    const status = check.ratio >= check.min ? 'ok  ' : 'FAIL';
    console.log(`${status} ${check.theme.padEnd(5)} ${check.layer} ${check.ratio.toFixed(2).padStart(5)}:1 (mín ${check.min}) ${check.label} — pior caso: ${check.on}`);
  });

  const path = reportPath();
  if (path) {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, toMarkdown(checks));
    console.log(`\nRelatório salvo em ${path}`);
  }

  console.log(`\n${checks.length - failures.length}/${checks.length} pares aprovados.`);
  if (failures.length) process.exit(1);
};

main().catch(error => {
  console.error('contrast-check::main', error instanceof Error ? error.message : error);
  process.exit(1);
});
