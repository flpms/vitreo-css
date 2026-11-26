# Changelog

Todas as mudanças do Vítreo DS ficam registradas aqui.
Formato: [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) · Versionamento: [SemVer](https://semver.org/lang/pt-BR/).
Enquanto o sistema estiver em `0.0.x`, **cada iteração de design gera uma versão patch**.

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

[0.0.4]: https://github.com/flpms/vitreo-css/compare/1f71bcb...feat-treomon
[0.0.3]: https://github.com/flpms/vitreo-css/compare/0fb94f0...1f71bcb
[0.0.2]: https://github.com/flpms/vitreo-css/compare/b2fd5ab...0fb94f0
[0.0.1]: https://github.com/flpms/vitreo-css/compare/37b8e2b...b2fd5ab
