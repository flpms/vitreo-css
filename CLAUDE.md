# Vítreo DS — instruções para agentes

## Controle de versão (obrigatório a cada iteração)

Cada iteração de design ou código pedida pelo usuário é uma versão.

1. **Commits por etapa**, em Conventional Commits e em português (`feat(tokens): …`, `fix(button): …`, `docs: …`). Nunca um commit gigante só no fim.
2. **Ao fechar a iteração:**
   - suba a versão **patch** com `npm version patch --no-git-tag-version`, que atualiza `package.json` e `package-lock.json`;
   - adicione no topo do `CHANGELOG.md` a seção `## [x.y.z] - AAAA-MM-DD`, com Adicionado / Alterado / Removido / Corrigido e o link de comparação no rodapé;
   - faça o commit `chore(release): vx.y.z` com esses arquivos.
3. **Push** para a branch de trabalho. Nunca reescreva o histórico já enviado: erros são corrigidos com um commit novo.
4. A demo lê a versão do `package.json`. Não escreva o número da versão à mão no HTML.

## Verificação antes de cada commit de release

- `npm run build` (gera os tokens, roda o validador de contraste e compila a demo) precisa passar. Se algum par de contraste falhar, o build quebra.
- Screenshots de verificação vão para o diretório temporário, **nunca para o repositório**.

## Estilo

- JavaScript ESM com JSDoc. Tabelas congeladas (`Object.freeze`) no lugar de cadeias de `if`, early returns e nada de `else`. `class` só onde o LitElement exige.
- Mensagens para o usuário em português do Brasil.
- Tokens: edite `src/tokens/palette.json`, `primitives.json` e `themes/*.json`. O arquivo `src/tokens/tokens.css` é gerado: não edite à mão.
