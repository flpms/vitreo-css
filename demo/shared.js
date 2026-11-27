/* Peças comuns às páginas da demo: tema, versão e paleta. */
import { version } from '../package.json';

const THEME_ATTRIBUTES = Object.freeze({
  auto: root => root.removeAttribute('data-theme'),
  light: root => root.setAttribute('data-theme', 'light'),
  dark: root => root.setAttribute('data-theme', 'dark'),
});

/** As oito famílias de vidro: nome, origem e degraus mostrados. */
export const FAMILIES = Object.freeze([
  { id: 'glass', name: 'vidro claro', origin: 'vidro soprado antigo, levemente verde-azulado' },
  { id: 'lead', name: 'chumbo', origin: 'grafite azulado das calhas de chumbo' },
  { id: 'cobalt', name: 'cobalto', origin: 'o azul de Chartres, séc. XII' },
  { id: 'ruby', name: 'rubi', origin: 'vidro tingido com cobre' },
  { id: 'amber', name: 'âmbar', origin: 'amarelo de prata, séc. XIV' },
  { id: 'verdigris', name: 'verdete', origin: 'pátina do chumbo e do cobre' },
  { id: 'amethyst', name: 'ametista', origin: 'o violeta das rosáceas góticas' },
  { id: 'moss', name: 'musgo', origin: 'verde-oliva do vidro pot-metal' },
]);

export const STEPS = Object.freeze(['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']);

/** @param {HTMLElement} root - elemento que recebe data-theme */
export const setupThemeSwitch = root => {
  document.querySelectorAll('input[name="theme"]').forEach(input =>
    input.addEventListener('change', event => THEME_ATTRIBUTES[event.target.value]?.(root)),
  );
};

export const renderVersion = () => {
  document.querySelectorAll('[data-version]').forEach(node => {
    node.textContent = `v${version}`;
  });
};

/** @param {Element | null} container */
export const renderPalette = container => {
  if (!container) return;
  container.innerHTML = FAMILIES.map(
    ({ id, name, origin }) => `
      <div class="palette__row">
        <div class="palette__name"><strong>${name}</strong><span class="vt-muted">${origin}</span></div>
        <div class="palette__steps">
          ${STEPS.map(step => `<span style="background: var(--vt-color-${id}-${step})" title="${id}-${step}"></span>`).join('')}
        </div>
      </div>`,
  ).join('');
};
