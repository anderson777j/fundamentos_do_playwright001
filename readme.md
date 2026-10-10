# Playwright - Testes de login

Projeto simples para validar login com credenciais válidas e inválidas usando Playwright.

## Instalação

```bash
npm init playwright@latest
```

Configure conforme sua preferência.

```bash
npx playwright install
```

Esse comando instala os navegadores do Playwright para que os testes possam rodar corretamente.

## Como executar os testes

```bash
npx playwright test
npx playwright test pasta/arq
npx playwright test pasta/arq --ui
npx playwright test pasta/arq --headed
npx playwright test pasta/arq --debug
```

Use a opção que melhor te ajuda a visualizar e depurar os testes.

## Observação

É interessante alterar o `type` no `package.json` para `module`.

Neste exemplo, foi feita uma verificação simples de login com credenciais válidas e inválidas.
