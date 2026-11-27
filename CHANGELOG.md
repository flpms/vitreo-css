# Changelog

Todas as mudanças do Vítreo DS ficam registradas aqui.
Formato: [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) · Versionamento: [SemVer](https://semver.org/lang/pt-BR/).
Enquanto o sistema estiver em `0.0.x`, **cada iteração de design gera uma versão patch**.

## [0.0.7] - 2026-11-27

### Adicionado
- **Luz atrás do vidro como conceito central:**
  - As primárias de *Composição II em vermelho, azul e amarelo* (Mondrian, 1930) entram na paleta (`color.mondrian.*`) e viram a luz desfocada atrás do grid, alinhada às colunas 13 | 8.
  - Os vidros filtram essa luz, e o chumbo dos cards faz as linhas pretas.
- **Regras de aplicação** (`src/tokens/rules.json` + `scripts/lib/rules.mjs`):
  - inversão de luminosidade por camada;
  - troca de matiz: o primary vira verdete sobre cobalto e âmbar sobre ametista; o accent vira verdete sobre âmbar e ametista;
  - danger é sempre rubi.
  - Cada vidro publica `--vt-ctx-action-*`.
- **Validador:** checa, para cada ação em cada camada, o texto (4.5:1) e o botão contra a camada (3:1). Total: 326/326 pares.
- **Convenções de apresentação no `CLAUDE.md`:** paleta sempre presente e grid sempre com a luz.

### Alterado
- **Botão "tecla de vidro"** (`press()` no lugar de `raise()`):
  - repouso: espessura de 4px na cor da peça;
  - hover: sobe 1px;
  - clique: desce a espessura e a face fica côncava;
  - o aperto dura 60 ms e a volta 160 ms;
  - o ghost não tem espessura;
  - o anel de foco preserva a profundidade.
- `vt-grid`: `mode="light"` é o padrão.
- O `field.edge` do tema claro ficou um degrau mais escuro, para manter 3:1 sobre a luz azul.
- A demo apresenta a luz atrás do vidro, as regras de aplicação e accent/danger em cada vidro.

### Removido
- O degrau de elevação (`raise()`) e os tokens `glint` e `elevation`.
- A comparação de modos de grid na demo. `air` e `lead` continuam no componente.

## [0.0.6] - 2026-11-27

### Alterado
- **O degrau de elevação troca de lado conforme o estado** (`raise()`):
  - repouso: degrau à esquerda e em cima, com o botão deslocado para baixo e à direita;
  - hover: degrau à direita e embaixo, e o botão desliza para cima e à esquerda;
  - clique (active): sem degrau, botão rente.
- Desabilitado continua rente.

## [0.0.5] - 2026-11-27

### Alterado
- **Elevação invertida, como uma tecla:** em repouso o botão já está erguido, com o degrau de brilho e sombra à direita e embaixo. No hover e no active ele afunda para o lugar e o degrau some. Desabilitado fica rente.

### Corrigido
- O botão de fechar do `vt-alert` não usa mais o degrau: como não tem borda, o degrau virava um "L" solto. Ele mantém só o véu de hover.

## [0.0.4] - 2026-11-26

### Adicionado
- `CHANGELOG.md` com o histórico das iterações desde a 0.0.1.
- `CLAUDE.md` com o fluxo de versionamento: versão patch por iteração, changelog e commits por etapa.
- A demo lê a versão do `package.json` (cabeçalho e rodapé), sem número fixo no HTML.

## [0.0.3] - 2026-11-26

### Alterado
- **Paleta:** os três primários literais do Mondrian viraram oito vidros gerados em OKLCH (`src/tokens/palette.json`): vidro claro, chumbo, cobalto, rubi, âmbar, verdete, ametista e musgo. Todas as famílias usam a mesma escala de luminosidade em 11 degraus.
- **Chumbo 50% mais fino:** 1.5px nos controles e 2px nas superfícies, em grafite azulado em vez de preto.
- **Alerta:** sem a barra lateral grossa. Agora é vidro tingido com moldura fina, e o ícone aparece na cor do tom (`--vt-ctx-accent`).
- **Campo inválido:** sem a barra lateral; a borda passa a ser na cor de erro.
- **Botão `secondary`:** passa a ser vidro claro (neutro).
- **Validador de contraste:** lê a forma dos temas no próprio JSON. Passa a validar ícones e séries de dados. Total: 148/148 pares.

### Adicionado
- Vidros `soft` (padrão) e `strong` (`emphasis="strong"`) para cada tom, em `vt-card` e `vt-alert`.
- Variante de botão `danger`.
- Paleta categórica para gráficos: `--vt-data-1…6`.
- Na demo: a seção "a obra expandida" e um dashboard de exemplo.

## [0.0.2] - 2026-11-26

### Alterado
- **Elevação:** saiu o filete branco em volta de todas as peças. Em repouso só o chumbo. No hover o controle sobe 2px e ganha um degrau à direita e embaixo, com brilho e sombra (token `shade`). No active ele afunda.
- **Tema escuro:** o chumbo virou estanho discreto. O contorno exigido dos campos passou para o token `field.edge`.

### Adicionado
- Mixin `raise()`.

## [0.0.1] - 2026-11-26

### Adicionado
- Projeto em Lit 3 + Vite.
- Tokens W3C DTCG: primitivos e temas claro e escuro (`prefers-color-scheme` ou `data-theme`).
- Validador de contraste WCAG 2 (`npm run contrast`), que mede vidros translúcidos sobre a cor composta.
- Camadas de contraste L0 → L1 → L2 e os mixins `contrastLayer`, `glass`, `leadBorder`, `focusRing`, `controlFill` e `typeScale`.
- Componentes em design atômico: `vt-button`, `vt-input`, `vt-field`, `vt-alert`, `vt-card`, `vt-grid` (21 colunas) e `vt-cell`.
- Três propostas de gutter para o grid: `air`, `light` e `lead`.
- Página de demonstração.

[0.0.7]: https://github.com/flpms/vitreo-css/compare/b70d09c...feat-treomon
[0.0.6]: https://github.com/flpms/vitreo-css/compare/ef89c3a...b70d09c
[0.0.5]: https://github.com/flpms/vitreo-css/compare/8241d16...ef89c3a
[0.0.4]: https://github.com/flpms/vitreo-css/compare/1f71bcb...8241d16
[0.0.3]: https://github.com/flpms/vitreo-css/compare/0fb94f0...1f71bcb
[0.0.2]: https://github.com/flpms/vitreo-css/compare/b2fd5ab...0fb94f0
[0.0.1]: https://github.com/flpms/vitreo-css/compare/37b8e2b...b2fd5ab
