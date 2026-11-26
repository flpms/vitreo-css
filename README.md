# Vítreo DS v0.0.1 (branch `feat-treomon`)

Design system em [Lit](https://lit.dev) inspirado em **vitrais de catedral**, **Metro UI** e **Mondrian**: chumbo fino, vidro translúcido, uma paleta de oito vidros em OKLCH e contraste calculado pela WCAG 2.

```bash
npm install
npm run dev        # demo em demo/index.html
npm run tokens     # src/tokens/*.json → src/tokens/tokens.css
npm run contrast   # valida 148 pares de contraste (claro + escuro); falha o build se algum reprovar
npm run build      # tokens + contraste + build da demo em dist/demo
```

```html
<link rel="stylesheet" href="vitreo-ds/tokens.css" />
<link rel="stylesheet" href="vitreo-ds/base.css" />
<script type="module">import 'vitreo-ds';</script>

<body class="vt-canvas">
  <vt-grid mode="air">
    <vt-cell span="13"><vt-card tone="cobalt"><h3 slot="header">Olá</h3>…</vt-card></vt-cell>
    <vt-cell span="8"><vt-alert variant="success">Salvo.</vt-alert></vt-cell>
  </vt-grid>
</body>
```

| Nível (design atômico) | Componentes | Camada de contraste |
|---|---|---|
| Átomos | `vt-button`, `vt-input` | L2 control |
| Moléculas | `vt-field`, `vt-alert` | L2 / L1 surface |
| Organismos | `vt-card` | L1 surface |
| Templates | `vt-grid` (21 colunas), `vt-cell` | L0 canvas |

- **Paleta** (`src/tokens/palette.json`): oito vidros em OKLCH, todos com a mesma escala de luminosidade (11 degraus): vidro claro, chumbo, cobalto (o azul de Chartres), rubi, âmbar, verdete, ametista e musgo. Fontes: os vitrais medievais e o Mondrian tardio (*Broadway Boogie Woogie*, em que as linhas viram cor).
- **Tokens** (W3C DTCG): `palette.json` + `primitives.json` → `themes/{light,dark}.json`. Vidros `soft` (padrão, tingidos) e `strong` (destaque) para cada tom; paleta categórica `--vt-data-1…6` para gráficos.
- **Camadas:** L0 canvas → L1 vidro → L2 controle. Cada camada publica `--vt-ctx-bg/fg/muted`; os filhos herdam o par validado. Mixins Lit em `src/styles/mixins.js`: `contrastLayer`, `glass`, `leadBorder`, `raise`, `focusRing`, `controlFill`, `typeScale`.
- **Temas:** `prefers-color-scheme` automático, ou `data-theme="light|dark"` em qualquer elemento.
- **Contraste:** vidros translúcidos são medidos sobre a cor composta, no pior fundo e com reflexo. Também são validados ícones (`accent`), séries de dados, contorno de campos, foco e degrau de hover. Veja `docs/contrast-report.md`.
- **Fonte:** sans-serif, base de 16px, escala 1.25.

---

[I don't speak Portuguese yet](#english) 

[Todavia yo no hablo portugues.](#spanish)

# Vítreo CSS

Utilitário CSS, pensado em performance e design.

### Perfomance  

Vítreo é pensado em como cada elemento deve ser apresentado sem consumir muitos recursos do usuário. Na pasta '/test' você encontra o exemplo e alguns resultados sobre qual é a melhor opção.

### Design

Vidro é um dos elementos mais lindo e requintado de nosso planeta, na minha opinião, não passa de areia processada, assim como silício dos processadores. E pensando no vidro e em toda a elegância dele que ele foi escolhido para apresentar elementos dessa interface.

### Experimentos e navegadores suportados

Vítreo será usado também como testes para algumas coisas experimentais.

> Uma escada rolante quando para de funcionar, continua sendo uma escada <br/>
>                                                     Autor Desconhecido

Com o pensamento acima, garantimos que nenhuma funcionalidade será afetada por conta de experimentos. Sendo assim a estrutura dos branchs será a seguinte:

* Master/Produção

	Só teremos itens já testados e suportados por todos os navegadores atuais.

* Release-Candidate/Homologação

	Itens já testados e com funcionando em 50% dos navegadores e com prefixos de navegador.

* Test/Testes

	Itens que estão sendo testados e validados, com funcionamento inferior a 50% dos navegadores e/ou que existem só em navegadores experimentais, ex. Google Canary.

* Development/Desenvolvimento

	É o nosso ambiente de guerra, em que serão aceitos os Pull Requests e também será publicado o desenvolvimento cada item.


##<a id=english>English :us: </a>

CSS utility, think in perfomance and design.

### Perfomance  

Vitreo is think in each element must be display without consuming many resources from user. In folder '/test' you'll find some examples and results about the best choice to use.

### Design

Glass is one the most beautiful and exquisite elements in our planet, for me. Glass is sand nothing more, like silicon in our CPUs. Thinking about all elegancy of glass, he was chosen to display our elements.

### Experiments and Supported Browsers

Vítreo will be used for tests in experimental features.

> Escalator when broken, will be a starway. (may be to heaven, I could resist that, only works in english)<br />
>                                  Unknown Author, but the horrible joke is mine.

With the bloquote above, we ensure experiments don't afected features. Branch will be structed like the sequence:

* Master
	
	Only tested itens and supported by all recent browers.

* Release-Candidate
	
	Itens tested and work in above 50% browsers even prefixes.

* Test

	Itens in tests and validations with functionality below 50% of browsers and/or only exist in experimental browsers like Google Canary.

* Development

	Its a warzone, Pull Requests will be accepted in this branch and development will be published in this branch.

## <a id=spanish>Spanish :es: </a>

Utilitario CSS, pensado en perfomance y diseño

### Perfomance

Vitreo es pensado en como cada elemento debe ser presentado sin demandar muchos de los recursos de los usuarios. No ficheiro '/test' usted encontrará algunos exemplos y porque utilizamos algunas opciones.

### Design

Vidrio es uno de los mas hermoso y exquisito elementos en nuestro planeta, for me. Vidrio nada mas es que arena, como lo silicio de nuestros processadores. Pensando en esto que hicimos Vitrio para presentar los elementos.

### Experimentos e Navegadores Compatibles

Usaremos Vítreo para testes y experimentos

> Una escalera mecanica todavia es una escalera quando no funciona <br />
>                                               Autor desconocido

Con lo pensamiento arriba, nostros garantizamos que los experimentos no afetaram las funcionalidades. La estructura de rama será como lo seguiente:

* master/producción

	Itens testados y compatibles en todos los navegadores atuales 

* Release-Candidate/Homologacion

	Itens testados y compatibles acima de 50% de los navegadores atuales

* Test/teste

	Itens en testes y en validaciones con las funcionalidade abajo de 50% de navegadores atuales y/o que existem solo en navegadores experimentales como Google Canary.

* Development/Desarrollo
	
	Es la zona de guerra. Todo los pull request y desarollo seran publicados en esta rama.
