import '../src/index.js';
import { FAMILIES, renderPalette, renderVersion, setupThemeSwitch } from './shared.js';

/** Preço por m² de cada vidro (exemplo). O rubi de cobre é o mais caro, como na história. */
const PRICE_PER_M2 = Object.freeze({
  glass: 1400,
  lead: 1500,
  cobalt: 2600,
  ruby: 3200,
  amber: 2400,
  verdigris: 2200,
  amethyst: 2900,
  moss: 2000,
});
const DEFAULT_GLASS = 'amber';
const SIZE_LIMITS = Object.freeze({ min: 20, max: 300 });
/** Área mínima cobrada: peças pequenas dão o mesmo trabalho de corte e solda. */
const MIN_BILLED_AREA = 0.25;

/** Degraus da paleta que pintam cada vidro da prévia, na ordem dos <span>. */
const PREVIEW_STEPS = Object.freeze(['700', '300', '500', '200', '900']);

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const decimal = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const familyName = id => FAMILIES.find(family => family.id === id)?.name ?? id;

/* ───────────── Validação ───────────── */

const required = what => value => (value.trim() ? '' : `Informe ${what}.`);
const email = value => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? '' : 'Use um e-mail no formato nome@dominio.com.');
const phone = value => (!value.trim() || value.replace(/\D/g, '').length >= 10 ? '' : 'Inclua o DDD: são pelo menos 10 dígitos.');
const cep = value => (/^\d{5}-?\d{3}$/.test(value.trim()) ? '' : 'Use o formato 00000-000.');
const size = value => {
  const number = Number(value);
  const { min, max } = SIZE_LIMITS;
  return number >= min && number <= max ? '' : `Use um valor entre ${min} e ${max} cm.`;
};

/** Campo → regras, na ordem em que são verificadas. A primeira mensagem vence. */
const VALIDATORS = Object.freeze({
  nome: [required('seu nome')],
  email: [required('seu e-mail'), email],
  telefone: [phone],
  largura: [required('a largura'), size],
  altura: [required('a altura'), size],
  cep: [required('o CEP'), cep],
});

/**
 * @param {HTMLElement & { name: string, value: string, label: string }} field
 * @returns {string} mensagem de erro, ou '' se o campo está certo
 */
const validate = field =>
  (VALIDATORS[field.name] ?? []).reduce((message, rule) => message || rule(field.value ?? ''), '');

/* ───────────── Orçamento ───────────── */

/**
 * @param {{ largura: string, altura: string, vidro: string }} values
 * @returns {{ valid: boolean, width: number, height: number, area: number, total: number, weeks: number }}
 */
const quote = ({ largura, altura, vidro }) => {
  const width = Number(largura);
  const height = Number(altura);
  const valid = !size(largura) && !size(altura);
  const area = (width * height) / 10000;
  const total = Math.max(area, MIN_BILLED_AREA) * (PRICE_PER_M2[vidro] ?? 0);
  const weeks = 3 + Math.ceil(area / 0.5);
  return { valid, width, height, area, total, weeks };
};

/* ───────────── Página ───────────── */

const form = /** @type {HTMLFormElement} */ (document.getElementById('encomenda'));
const fields = () => [...form.querySelectorAll('vt-field')];
const ui = Object.freeze({
  summary: form.querySelector('[data-summary]'),
  errorList: form.querySelector('[data-error-list]'),
  success: form.querySelector('[data-success]'),
  successText: form.querySelector('[data-success-text]'),
  preview: form.querySelector('[data-preview]'),
  previewCaption: form.querySelector('[data-preview-caption]'),
  area: form.querySelector('[data-area]'),
  glass: form.querySelector('[data-glass]'),
  deadline: form.querySelector('[data-deadline]'),
  total: form.querySelector('[data-total]'),
});

/** Depois da primeira tentativa de envio, os erros acompanham a digitação. */
let attempted = false;

const renderGlassPicker = container => {
  container.innerHTML = FAMILIES.map(
    ({ id, name }) => `
      <label class="glass-option">
        <input type="radio" name="vidro" value="${id}" ${id === DEFAULT_GLASS ? 'checked' : ''} />
        <span class="glass-option__chip" style="--c1: var(--vt-color-${id}-300); --c2: var(--vt-color-${id}-600); --c3: var(--vt-color-${id}-800)"></span>
        <span class="glass-option__name">${name}</span>
        <span class="glass-option__price">${currency.format(PRICE_PER_M2[id])}/m²</span>
        <svg class="glass-option__mark" viewBox="0 0 16 16" aria-hidden="true"><path d="m3 8.5 3.2 3L13 4.5" /></svg>
      </label>`,
  ).join('');
};

const values = () => ({
  largura: form.querySelector('[name="largura"]').value,
  altura: form.querySelector('[name="altura"]').value,
  vidro: form.querySelector('[name="vidro"]:checked')?.value ?? DEFAULT_GLASS,
});

const renderPreview = (vidro, { valid, width, height }) => {
  const ratio = valid ? Math.min(2.5, Math.max(0.4, width / height)) : 1;
  ui.preview.style.setProperty('--ratio', String(ratio));
  [...ui.preview.children].forEach((pane, index) =>
    pane.style.setProperty('background', `var(--vt-color-${vidro}-${PREVIEW_STEPS[index]})`),
  );
  ui.previewCaption.textContent = valid ? `${width} × ${height} cm · ${familyName(vidro)}` : 'medidas incompletas';
};

const renderQuote = () => {
  const current = values();
  const result = quote(current);
  renderPreview(current.vidro, result);
  ui.glass.textContent = familyName(current.vidro);

  if (!result.valid) {
    ui.area.textContent = '—';
    ui.deadline.textContent = '—';
    ui.total.textContent = '—';
    return;
  }

  ui.area.textContent = `${decimal.format(result.area)} m²`;
  ui.deadline.textContent = `${result.weeks} semanas`;
  ui.total.textContent = currency.format(result.total);
};

/** @param {HTMLElement & { name: string, label: string, error?: string }} field */
const errorLink = field => {
  const item = document.createElement('li');
  const link = document.createElement('a');
  link.href = `#${field.id}`;
  link.textContent = `${field.label}: ${field.error}`;
  link.addEventListener('click', event => {
    event.preventDefault();
    field.focus();
  });
  item.append(link);
  return item;
};

/** Marca os campos e monta o resumo. @returns {HTMLElement[]} campos com erro */
const applyErrors = () => {
  const invalid = fields().filter(field => {
    field.error = validate(field) || undefined;
    return Boolean(field.error);
  });
  ui.errorList.replaceChildren(...invalid.map(errorLink));
  ui.summary.heading = invalid.length === 1 ? 'Revise 1 campo' : `Revise ${invalid.length} campos`;
  ui.summary.open = invalid.length > 0;
  return invalid;
};

/**
 * Abre o alerta e leva o foco até ele. O atributo `open` só é refletido no próximo
 * ciclo do Lit; antes disso o alerta ainda está com display: none e não recebe foco.
 */
const revealAndFocus = async alert => {
  alert.open = true;
  await alert.updateComplete;
  alert.focus();
};

const protocol = () => `VT-${String(Date.now()).slice(-5)}`;

const onSubmit = event => {
  event.preventDefault();
  attempted = true;
  ui.success.open = false;

  const invalid = applyErrors();
  if (invalid.length) {
    revealAndFocus(ui.summary);
    return;
  }

  const result = quote(values());
  const data = Object.fromEntries(new FormData(form));
  ui.successText.textContent = `Protocolo ${protocol()}. A estimativa de ${currency.format(result.total)} vai para ${data.email}, e a peça fica pronta em ${result.weeks} semanas depois da aprovação.`;
  revealAndFocus(ui.success);
};

const onReset = () => {
  attempted = false;
  fields().forEach(field => {
    field.error = undefined;
  });
  ui.summary.open = false;
  ui.success.open = false;
  // Os campos voltam ao valor inicial no próximo ciclo de renderização do Lit.
  requestAnimationFrame(renderQuote);
};

const onInput = event => {
  renderQuote();
  if (!attempted || event.target.localName !== 'vt-field') return;
  applyErrors();
};

const setup = () => {
  renderVersion();
  setupThemeSwitch(document.documentElement);
  renderPalette(document.querySelector('[data-palette]'));
  renderGlassPicker(form.querySelector('[data-glass-picker]'));
  fields().forEach(field => {
    field.id ||= `campo-${field.name}`;
  });
  ui.summary.open = false;
  ui.success.open = false;

  form.addEventListener('submit', onSubmit);
  form.addEventListener('reset', onReset);
  form.addEventListener('input', onInput);
  form.addEventListener('change', renderQuote);
  customElements.whenDefined('vt-field').then(renderQuote);
};

setup();
