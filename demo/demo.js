import '../src/index.js';
import { SURFACE_TONES } from '../src/styles/mixins.js';

const THEME_ATTRIBUTES = Object.freeze({
  auto: root => root.removeAttribute('data-theme'),
  light: root => root.setAttribute('data-theme', 'light'),
  dark: root => root.setAttribute('data-theme', 'dark'),
});

const TONE_LABELS = Object.freeze({
  neutral: 'neutro',
  red: 'vermelho',
  blue: 'azul',
  yellow: 'amarelo',
  emerald: 'esmeralda',
});

/** Spans em Fibonacci: 8 | 5 | 8 e 13 | 8. */
const TONE_SPANS = Object.freeze({ neutral: 8, red: 5, blue: 8, yellow: 13, emerald: 8 });

const setupThemeSwitch = root => {
  document.querySelectorAll('input[name="theme"]').forEach(input =>
    input.addEventListener('change', event => THEME_ATTRIBUTES[event.target.value]?.(root)),
  );
};

const toneCell = tone => `
  <vt-cell span="${TONE_SPANS[tone]}" span-md="21">
    <vt-card tone="${tone}">
      <h3 slot="header">vidro ${TONE_LABELS[tone]}</h3>
      <p>Os mesmos botões, sobre a camada <code>${tone}</code>.</p>
      <div class="row">
        <vt-button variant="primary">primary</vt-button>
        <vt-button variant="secondary">secondary</vt-button>
        <vt-button variant="accent">accent</vt-button>
        <vt-button variant="ghost">ghost</vt-button>
      </div>
    </vt-card>
  </vt-cell>`;

const renderTones = grid => {
  grid.innerHTML = SURFACE_TONES.map(toneCell).join('');
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

setupThemeSwitch(document.documentElement);
renderTones(document.querySelector('[data-tones]'));
renderCompositions();
renderRuler(document.querySelector('.ruler'));
setupForm(document.getElementById('demo-form'));
