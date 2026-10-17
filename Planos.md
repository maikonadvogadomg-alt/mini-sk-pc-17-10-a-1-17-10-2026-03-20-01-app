# Mini SK para PC — 17/10-a

## Novidade: 📁 Pasta viva (igual ao VS Code)
- Cada projeto é uma **pasta de verdade**: `Documentos\Mini-SK\NOME-DO-PROJETO`.
- O que você muda no editor/árvore **vai sozinho** para a pasta.
- O que o **terminal** cria, muda ou apaga **aparece sozinho na árvore** (a cada 2 segundos).
- O **💻 Terminal PC** já abre **dentro da pasta do projeto**. Não tem mais ponte, nem "mandar/trazer".
- Botão **📂 Abrir no Windows** abre a pasta no Explorador.
- `node_modules` e `.git` ficam só na pasta (não entram na árvore).

# Mini SK para PC

O mesmo Mini SK, num programa do Windows, com:
- **💻 Terminal do computador** (o botão que no celular é 📱 Termux): roda npm, node, git, dir… no seu PC.
- **⇅ Mandar / Trazer**: o projeto vai para **Documentos\Mini-SK\NOME-DO-PROJETO**, você roda os comandos, e o que o terminal criar (ex.: a pasta dist) volta para a árvore ☰.
- **Ollama** (IA grátis no seu PC): 🤖 IA → ⚙️ Chaves → ＋ → escolha **"Ollama (no seu PC, grátis — sem chave)"** → Buscar modelos.

## Como gerar o .exe (uma vez)
1. Mande esta pasta para um repositório no GitHub (Mini SK → 🐙 GitHub).
2. GitHub → **Actions** → **Programa .exe para Windows** → **Run workflow**.
3. Verde ✔: abra a execução → **Artifacts** → baixe **Mini-SK-Windows**. Vermelho ✖: mande print do passo vermelho.
4. No PC: dois cliques em **Mini-SK-Instalar.exe** (cria o ícone na área de trabalho). Se o Windows avisar: **Mais informações → Executar assim mesmo**.

## Para os comandos npm funcionarem
Instale o **Node.js LTS** no PC (nodejs.org), uma vez.

## Para usar o Ollama
Instale em **ollama.com/download**, abra, e baixe um modelo (no terminal: `ollama pull llama3.2`). Depois escolha "Ollama" nas chaves da IA do Mini SK.

Se der erro, o motivo fica em **Documentos\Mini-SK\registro.txt**.




# 📋 Plano do projeto: Mini-SK-PC-17-10-a (1) 17-10-2026, 03-20-01

_Gerado em 17/10/2026, 03:26:03 — sem IA, lendo os arquivos._

## 📊 Visão geral
| Item | Valor |
|---|---|
| Arquivos | 95 |
| Linhas | 12.078 |
| Telas/páginas | 2 |
| Rotas do backend | 0 |
| Chamadas do app | 0 |
| Tabelas do banco | 0 |
| Variáveis de ambiente | 6 |

**Linguagens:** JavaScript (47), Imagem (30), Imagem SVG (4), Markdown (3), JSON (3), YAML (2), Ícone (2), HTML (2), Outros (1), CSS (1)

## 💡 O que fazer (em ordem)
1. 🧹 Tirar a Replit de 15 arquivo(s) (🏗️ Preparar → Fazer tudo)
2. 🔐 Criar um .env.example com: BASE_PATH, GITHUB_STEP_SUMMARY, PONTE_BASE, PONTE_CODIGO, PONTE_PORTA, TESTE_SAIR (os valores você coloca no servidor, nunca no código)
3. 📝 Criar um README.md explicando como rodar

## 🚀 Por onde começa
- `app/index.html`
- `index.html`

## ⌨️ Comandos (package.json)
| Pasta | Comando | O que roda |
|---|---|---|
| . | `npm run desktop` | `electron .` |
| . | `npm run exe` | `electron-builder --win nsis portable --x64 --publish never` |
| . | `npm run programa` | `electron .` |

## 📱 Telas e páginas
| Endereço | Arquivo |
|---|---|
| `app/index.html` | app/index.html |
| `index.html` | index.html |

## 🖥️ Rotas do backend
_Nenhum encontrado._

## 📡 O que o app pede ao servidor
_Nenhum encontrado._

## 🔌 O que falta no backend
✅ Tudo que o app chama tem rota no projeto (ou o app não usa servidor).

## 🗄️ Banco de dados
_Nenhuma tabela encontrada._

## 🔐 Variáveis de ambiente (configurar no servidor)
- `BASE_PATH`
- `GITHUB_STEP_SUMMARY`
- `PONTE_BASE`
- `PONTE_CODIGO`
- `PONTE_PORTA`
- `TESTE_SAIR`

_Só os nomes. Os valores (chaves, senhas) nunca vão no código nem no GitHub._

## 🤖 IA usada
- api.groq.com
- console.groq.com
- generativelanguage.googleapis.com
- openrouter.ai
- api.anthropic.com
- console.anthropic.com
- api.openai.com
- platform.openai.com

## 🌐 Serviços de fora que ele acessa
- aistudio.google.com
- api.anthropic.com
- api.exemplo.com
- api.expo.dev
- api.github.com
- api.groq.com
- api.npms.io
- api.openai.com
- api.perplexity.ai
- api.x.ai
- appassets.androidplatform.net
- cdn.jsdelivr.net
- cdn.tailwindcss.com
- console.anthropic.com
- console.groq.com
- console.x.ai
- esm.sh
- expo.dev
- generativelanguage.googleapis.com
- github.com
- mail.google.com
- ollama.com
- openapi.monica.im
- openrouter.ai
- platform.monica.im
- platform.openai.com
- registry.npmjs.org
- seu-usuario.github.io
- u.expo.dev
- unpkg.com
- www.google.com
- www.npmjs.com
- www.perplexity.ai
- xxxx.supabase.co

## 📦 Peças principais (dependências)
`ws`

## 🧹 Arquivos com coisa da Replit
- app/js/70-search.js
- app/js/80-ai.js
- app/js/86-terminal.js
- app/js/86c-termux.js
- app/js/88-inventario.js
- app/js/90-github.js
- app/js/95-pwa.js
- app/js/96b-eas.js
- app/js/96c-preparar.js
- app/js/97-analise.js
- app/js/lib/expo-core.js
- app/js/lib/plano-core.js
- app/js/lib/receita-core.js
- app/service-worker.js
- service-worker.js

## 🔁 Roteiro para recriar fora da Replit
1. Importar o projeto no Mini SK e tocar em 🏗️ Preparar → ✅ Fazer tudo (tira a Replit, cria os arquivos que faltam).
2. Não tem backend: o site sozinho basta (Netlify ou GitHub Pages).
3. Variáveis: cadastrar 6 variável(is) no servidor (lista acima).
4. Testar a prévia; se der erro, 🤖 Mandar os erros para a IA.
5. App: 📲 Instalável (PWA), 📦 APK ou 🖥️ Desktop (.exe) pelo 🏗️ Preparar.

## 🌳 Árvore de arquivos
```
├─ 📁 .github/
│  └─ 📁 workflows/
│     ├─ desktop-exe.yml
│     └─ programa-exe.yml
├─ 📁 app/
│  ├─ 📁 css/
│  │  └─ app.css
│  ├─ 📁 icons/
│  │  ├─ apple-touch-icon.png
│  │  ├─ icon-128.png
│  │  ├─ icon-144.png
│  │  ├─ icon-152.png
│  │  ├─ icon-16.png
│  │  ├─ icon-180.png
│  │  ├─ icon-192.png
│  │  ├─ icon-32.png
│  │  ├─ icon-384.png
│  │  ├─ icon-48.png
│  │  ├─ icon-512.png
│  │  ├─ icon-72.png
│  │  ├─ icon-96.png
│  │  ├─ icon.svg
│  │  ├─ maskable-192.png
│  │  ├─ maskable-512.png
│  │  └─ maskable.svg
│  ├─ 📁 js/
│  │  ├─ 📁 lib/
│  │  │  ├─ expo-core.js
│  │  │  ├─ nacl-fast.min.js
│  │  │  ├─ plano-core.js
│  │  │  ├─ receita-core.js
│  │  │  └─ selar.js
│  │  ├─ 00-core.js
│  │  ├─ 04-conta.js
│  │  ├─ 10-fs.js
│  │  ├─ 20-zip.js
│  │  ├─ 30-highlight.js
│  │  ├─ 40-editor.js
│  │  ├─ 50-tree.js
│  │  ├─ 60-preview.js
│  │  ├─ 61-tsx.js
│  │  ├─ 70-search.js
│  │  ├─ 80-ai.js
│  │  ├─ 81-gasto.js
│  │  ├─ 83-voz.js
│  │  ├─ 84-ponte.js
│  │  ├─ 85-checkpoints.js
│  │  ├─ 86-terminal.js
│  │  ├─ 86b-node.js
│  │  ├─ 86c-termux.js
│  │  ├─ 86e-atalhos.js
│  │  ├─ 86f-pasta-viva.js
│  │  ├─ 87-links.js
│  │  ├─ 88-inventario.js
│  │  ├─ 89-config.js
│  │  ├─ 90-github.js
│  │  ├─ 91-acoes.js
│  │  ├─ 92-playground.js
│  │  ├─ 93-conversa.js
│  │  ├─ 94-fatiador.js
│  │  ├─ 95-pwa.js
│  │  ├─ 96-apk.js
│  │  ├─ 96b-eas.js
│  │  ├─ 96c-preparar.js
│  │  ├─ 97-analise.js
│  │  ├─ 98-api.js
│  │  └─ 99-app.js
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ LEIA-ME.md
│  ├─ manifest.json
│  ├─ service-worker.js
│  └─ sw.js
├─ 📁 electron/
│  ├─ main.cjs
│  ├─ ponte.cjs
│  ├─ preload.cjs
│  └─ terminal.cjs
├─ 📁 icons/
│  ├─ apple-touch-icon.png
│  ├─ icon-128.png
│  ├─ icon-144.png
│  ├─ icon-152.png
│  ├─ icon-16.png
│  ├─ icon-180.png
│  ├─ icon-192.png
│  ├─ icon-32.png
│  ├─ icon-384.png
│  ├─ icon-48.png
│  ├─ icon-512.png
│  ├─ icon-72.png
│  ├─ icon-96.png
│  ├─ icon.svg
│  ├─ maskable-192.png
│  ├─ maskable-512.png
│  └─ maskable.svg
├─ .gitignore
├─ favicon.ico
├─ index.html
├─ LEIA-ME.md
├─ manifest.json
├─ package.json
├─ PLANO.md
└─ service-worker.js
```
# 🧬 Receita para recriar: Mini SK

_Gerada sem IA, lendo 97 arquivo(s). Serve para remontar este app como HTML modular — com qualquer IA, um arquivo por vez._

## 1. O que é

- **Nome:** Mini SK
- **Partes de código:** 46 (2 tela, 43 logica, 0 servidor, 0 dados, 1 estilo)
- **Tem servidor (rotas /api):** não — dá para ser só HTML
- **Peças de fora (bibliotecas):**  + JSON.stringify(principal) + ,  + q + u + q + , child_process, electron, fs, http, os, path, react, react-dom, url, ws

## 2. Estrutura modular proposta

```
index.html            ← a página; chama os módulos NA ORDEM
css/app.css           ← o visual
js/00-core.js         ← a "locomotiva": cria window.APP (registrar, guardar, avisar)
js/10-conta.js        ← Mini SK — 04-conta.js SEM login, SEM nuvem, SEM banco de dados. Tudo f (era app/js/04-conta.js)
js/15-fs.js           ← Mini SK — 10-fs.js Projetos e arquivos. Cada projeto fica salvo no nav (era app/js/10-fs.js)
js/20-zip.js          ← Mini SK — 20-zip.js Lê e cria arquivos .zip SEM biblioteca externa (fu (era app/js/20-zip.js)
js/25-highlight.js    ← Mini SK — 30-highlight.js Cores do código (realce de sintaxe) para HTM (era app/js/30-highlight.js)
js/30-editor.js       ← Mini SK — 40-editor.js O editor de código: abas, cores, números de lin (era app/js/40-editor.js)
js/35-tree.js         ← Mini SK — 50-tree.js Árvore de arquivos: pastas dentro de pastas, cria (era app/js/50-tree.js)
js/40-preview.js      ← Mini SK — 60-preview.js Preview ao vivo, sempre na parte de baixo (pod (era app/js/60-preview.js)
js/45-tsx.js          ← Mini SK — 61-tsx.js ⚛️ Prévia de UM componente .tsx / .jsx (do jeito d (era app/js/61-tsx.js)
js/50-search.js       ← Mini SK — 70-search.js Buscar (e trocar) em todos os arquivos do proje (era app/js/70-search.js)
js/55-ai.js           ← Mini SK — 80-ai.js IA para ajudar a escrever código. - Chaves: cole qu (era app/js/80-ai.js)
js/60-gasto.js        ← Mini SK — 81-gasto.js 💰 Quanto a IA está gastando. - Depois de cada r (era app/js/81-gasto.js)
js/65-voz.js          ← Mini SK — 83-voz.js 🗣️ Voz e modo conversa (igual ao jurídico): - Voz (era app/js/83-voz.js)
js/70-ponte.js        ← Mini SK — 84-ponte.js 🔗 Ponte com os outros apps (cada um continua se (era app/js/84-ponte.js)
js/75-checkpoints.js  ← Mini SK — 85-checkpoints.js Pontos de volta. Uma "foto" de todos os ar (era app/js/85-checkpoints.js)
js/80-terminal.js     ← Mini SK — 86-terminal.js ⌨️ Terminal leve, ligado à ÁRVORE do projeto. (era app/js/86-terminal.js)
js/85-86b-node.js     ← logica (era app/js/86b-node.js)
js/90-86c-termux.js   ← logica (era app/js/86c-termux.js)
js/91-86e-atalhos.js  ← Mini SK — 86e-atalhos.js ⚡ Comandos prontos para os terminais (⚡ Node  (era app/js/86e-atalhos.js)
js/92-86f-pasta-viva.js← Mini SK — 86f-pasta-viva.js   (SÓ no Mini SK para PC) 📁 PASTA VIVA: i (era app/js/86f-pasta-viva.js)
js/93-links.js        ← Mini SK — 87-links.js 🔗 Meus Links: guarda os endereços dos seus PWAs (era app/js/87-links.js)
js/94-inventario.js   ← logica (era app/js/88-inventario.js)
js/95-config.js       ← Mini SK — 89-config.js ⚙️ Configuração: 🔑 Cofre de chaves (IA, GitHub (era app/js/89-config.js)
js/96-github.js       ← Mini SK — 90-github.js Repositório no GitHub, direto do navegador (sem (era app/js/90-github.js)
js/97-acoes.js        ← Mini SK — 91-acoes.js ⚙️ Execuções no GitHub (Actions) — dentro do pai (era app/js/91-acoes.js)
js/98-playground.js   ← Mini SK — 92-playground.js ▶️ Playground isolado, que abre ao lado (nã (era app/js/92-playground.js)
js/98-conversa.js     ← Mini SK — 93-conversa.js 🧩 Desembaralhar conversa: lê uma conversa co (era app/js/93-conversa.js)
js/98-fatiador.js     ← Mini SK — 94-fatiador.js ✂️ Fatiador: pega um arquivo grande (JS, TS,  (era app/js/94-fatiador.js)
js/98-pwa.js          ← logica (era app/js/95-pwa.js)
js/98-apk.js          ← logica (era app/js/96-apk.js)
js/98-96b-eas.js      ← logica (era app/js/96b-eas.js)
js/98-96c-preparar.js ← logica (era app/js/96c-preparar.js)
js/98-analise.js      ← logica (era app/js/97-analise.js)
js/98-api.js          ← Mini SK — 98-api.js 🧪 Testador da API do próprio projeto (o servidor  (era app/js/98-api.js)
js/98-expo-core.js    ← expo-core.js — ☁️ Consertar um projeto EXPO para gerar APK pelo EAS Us (era app/js/lib/expo-core.js)
js/98-plano-core.js   ← logica (era app/js/lib/plano-core.js)
js/98-receita-core.js ← receita-core.js — 🧬 Receita para recriar um projeto (sem IA). Lê os a (era app/js/lib/receita-core.js)
js/98-selar.js        ← Mini SK — js/lib/selar.js "Tranca" um segredo do jeito que o GitHub ex (era app/js/lib/selar.js)
js/98-ponte.js        ← Ponte de arquivos do Mini SK — no PC, o próprio programa liga (no celu (era electron/ponte.cjs)
js/98-preload.js      ← Ponte segura entre a janela e o computador. A página vê window.desktop (era electron/preload.cjs)
js/98-terminal.js     ← Terminal do computador para o Mini SK — fala o mesmo "idioma" do ttyd  (era electron/terminal.cjs)
js/98-app.js          ← Mini SK (era app/index.html)
js/98-inicio.js       ← Mini-SK-PC-17-10-a (1) 17-10-2026, 03-20-01 — Mini-SK-PC-17-10-a (1) 1 (era index.html)
js/99-app.js          ← o último: monta a tela com o que embarcou
```

## 3. As partes, uma por uma

| # | Era | Vira | Tipo | O que faz | Usa |
|---|---|---|---|---|---|
| 1 | `app/js/00-core.js` | css/app.css | logica | Mini SK — 00-core.js Base de tudo: atalhos, eventos, avisos, janelas de confirmação e o ba | — |
| 2 | `app/js/04-conta.js` | `js/10-conta.js` | logica | Mini SK — 04-conta.js SEM login, SEM nuvem, SEM banco de dados. Tudo fica só neste aparelh | — |
| 3 | `app/js/10-fs.js` | `js/15-fs.js` | logica | Mini SK — 10-fs.js Projetos e arquivos. Cada projeto fica salvo no navegador (IndexedDB).  | — |
| 4 | `app/js/20-zip.js` | `js/20-zip.js` | logica | Mini SK — 20-zip.js Lê e cria arquivos .zip SEM biblioteca externa (funciona offline). Usa | — |
| 5 | `app/js/30-highlight.js` | `js/25-highlight.js` | logica | Mini SK — 30-highlight.js Cores do código (realce de sintaxe) para HTML, CSS, JavaScript/T | — |
| 6 | `app/js/40-editor.js` | `js/30-editor.js` | logica | Mini SK — 40-editor.js O editor de código: abas, cores, números de linha, Tab/Enter inteli | — |
| 7 | `app/js/50-tree.js` | `js/35-tree.js` | logica | Mini SK — 50-tree.js Árvore de arquivos: pastas dentro de pastas, criar, renomear, duplica | — |
| 8 | `app/js/60-preview.js` | `js/40-preview.js` | logica | Mini SK — 60-preview.js Preview ao vivo, sempre na parte de baixo (pode aumentar, diminuir | — |
| 9 | `app/js/61-tsx.js` | `js/45-tsx.js` | logica | Mini SK — 61-tsx.js ⚛️ Prévia de UM componente .tsx / .jsx (do jeito dos sites de "playgro | — |
| 10 | `app/js/70-search.js` | `js/50-search.js` | logica | Mini SK — 70-search.js Buscar (e trocar) em todos os arquivos do projeto. Cada resultado m | — |
| 11 | `app/js/80-ai.js` | `js/55-ai.js` | logica | Mini SK — 80-ai.js IA para ajudar a escrever código. - Chaves: cole qualquer chave, o prov | — |
| 12 | `app/js/81-gasto.js` | `js/60-gasto.js` | logica | Mini SK — 81-gasto.js 💰 Quanto a IA está gastando. - Depois de cada resposta: tokens de e | — |
| 13 | `app/js/83-voz.js` | `js/65-voz.js` | logica | Mini SK — 83-voz.js 🗣️ Voz e modo conversa (igual ao jurídico): - Voz: Francisca (neural) | — |
| 14 | `app/js/84-ponte.js` | `js/70-ponte.js` | logica | Mini SK — 84-ponte.js 🔗 Ponte com os outros apps (cada um continua separado, sem bagunça) | — |
| 15 | `app/js/85-checkpoints.js` | `js/75-checkpoints.js` | logica | Mini SK — 85-checkpoints.js Pontos de volta. Uma "foto" de todos os arquivos do projeto. - | — |
| 16 | `app/js/86-terminal.js` | `js/80-terminal.js` | logica | Mini SK — 86-terminal.js ⌨️ Terminal leve, ligado à ÁRVORE do projeto. Funciona no celular | — |
| 17 | `app/js/86b-node.js` | `js/85-86b-node.js` | logica | ehSite, lacreLigado, registrarSW, ligarLacre | — |
| 18 | `app/js/86c-termux.js` | `js/90-86c-termux.js` | logica | status, carregarScript, carregarCss, prepararTela | — |
| 19 | `app/js/86e-atalhos.js` | `js/91-86e-atalhos.js` | logica | Mini SK — 86e-atalhos.js ⚡ Comandos prontos para os terminais (⚡ Node e 📱 Termux): um toq | — |
| 20 | `app/js/86f-pasta-viva.js` | `js/92-86f-pasta-viva.js` | logica | Mini SK — 86f-pasta-viva.js   (SÓ no Mini SK para PC) 📁 PASTA VIVA: igual ao VS Code. Cad | — |
| 21 | `app/js/87-links.js` | `js/93-links.js` | logica | Mini SK — 87-links.js 🔗 Meus Links: guarda os endereços dos seus PWAs e sites num lugar s | — |
| 22 | `app/js/88-inventario.js` | `js/94-inventario.js` | logica | texto, limpaTag, familia, analisar | — |
| 23 | `app/js/89-config.js` | `js/95-config.js` | logica | Mini SK — 89-config.js ⚙️ Configuração: 🔑 Cofre de chaves (IA, GitHub e "Minhas chaves"). | — |
| 24 | `app/js/90-github.js` | `js/96-github.js` | logica | Mini SK — 90-github.js Repositório no GitHub, direto do navegador (sem servidor, sem Repli | — |
| 25 | `app/js/91-acoes.js` | `js/97-acoes.js` | logica | Mini SK — 91-acoes.js ⚙️ Execuções no GitHub (Actions) — dentro do painel 🐙 GitHub. Antes | — |
| 26 | `app/js/92-playground.js` | `js/98-playground.js` | logica | Mini SK — 92-playground.js ▶️ Playground isolado, que abre ao lado (não é a primeira tela) | — |
| 27 | `app/js/93-conversa.js` | `js/98-conversa.js` | logica | Mini SK — 93-conversa.js 🧩 Desembaralhar conversa: lê uma conversa copiada do app de IA ( | — |
| 28 | `app/js/94-fatiador.js` | `js/98-fatiador.js` | logica | Mini SK — 94-fatiador.js ✂️ Fatiador: pega um arquivo grande (JS, TS, TSX, HTML, CSS, Pyth | — |
| 29 | `app/js/95-pwa.js` | `js/98-pwa.js` | logica | gradFill, shapePath, hexA, content | favicon.ico, icon.svg, apple-touch-icon.png |
| 30 | `app/js/96-apk.js` | `js/98-apk.js` | logica | wfNome, MainActivity, Ponte, mandar | package.json |
| 31 | `app/js/96b-eas.js` | `js/98-96b-eas.js` | logica | versaoBase, majorExpo, lerJson, conferir | app.json |
| 32 | `app/js/96c-preparar.js` | `js/98-96c-preparar.js` | logica | lerJSON, raizPkg, permissoes, analisar | — |
| 33 | `app/js/97-analise.js` | `js/98-analise.js` | logica | explain, scriptHelp, parseCatalog, analyze | — |
| 34 | `app/js/98-api.js` | `js/98-api.js` | logica | Mini SK — 98-api.js 🧪 Testador da API do próprio projeto (o servidor rodando no seu PC, e | — |
| 35 | `app/js/99-app.js` | css/app.css | logica | Mini SK — 99-app.js Junta tudo: barra de cima, gavetas (Arquivos à esquerda; IA, Busca, Ch | estilo.css, app.js |
| 36 | `app/js/lib/expo-core.js` | `js/98-expo-core.js` | logica | expo-core.js — ☁️ Consertar um projeto EXPO para gerar APK pelo EAS Usado pelo Caça-Bug (D | app.json |
| 37 | `app/js/lib/plano-core.js` | `js/98-plano-core.js` | logica | ext, uniq, normRota, arvore | — |
| 38 | `app/js/lib/receita-core.js` | `js/98-receita-core.js` | logica | receita-core.js — 🧬 Receita para recriar um projeto (sem IA). Lê os arquivos, descobre o  | a.js, …, app.css |
| 39 | `app/js/lib/selar.js` | `js/98-selar.js` | logica | Mini SK — js/lib/selar.js "Tranca" um segredo do jeito que o GitHub exige para guardar em  | — |
| 40 | `electron/main.cjs` | css/app.css | logica | Abre o app numa janela de computador (Electron). Gerado pelo 🏗️ Preparar do Mini SK. Usa  | — |
| 41 | `electron/ponte.cjs` | `js/98-ponte.js` | logica | Ponte de arquivos do Mini SK — no PC, o próprio programa liga (no celular, roda no Termux) | — |
| 42 | `electron/preload.cjs` | `js/98-preload.js` | logica | Ponte segura entre a janela e o computador. A página vê window.desktop | — |
| 43 | `electron/terminal.cjs` | `js/98-terminal.js` | logica | Terminal do computador para o Mini SK — fala o mesmo "idioma" do ttyd (o do Termux), então | — |
| 44 | `app/css/app.css` | css/app.css | estilo | Mini SK — app.css   (tema escuro, celular e computador) | — |
| 45 | `app/index.html` | `js/98-app.js` | tela | Mini SK | app.css, manifest.json, favicon.ico, icon.svg |
| 46 | `index.html` | `js/98-inicio.js` | tela | Mini-SK-PC-17-10-a (1) 17-10-2026, 03-20-01 — Mini-SK-PC-17-10-a (1) 17-10-2026, 03-20-01 | manifest.json, favicon.ico, icon.svg, apple-touch-icon.png |

## 4. Montar passo a passo (cada bloco é um pedido pronto: 📋 Copiar → colar na IA)

### Passo 0 — combinar as regras com a IA

```text
Vamos recriar o app "Mini SK" como HTML MODULAR, que abre pelo index.html, sem servidor e sem nada da Replit.
Regras: (1) index.html chama os arquivos js/ na ordem, antes do </body>; (2) js/00-core.js cria window.APP com APP.registrar(modulo), APP.guardar(chave, valor) em IndexedDB/localStorage e APP.avisar(texto); (3) cada arquivo js/NN-nome.js cuida de UM assunto, começa com (function (APP) { e termina com })(window.APP); (4) js/99-app.js vem por último e monta a tela com os módulos registrados; (5) textos em português do Brasil.
Vou pedir UM arquivo por vez. Responda só com o arquivo completo, sem cortar nada. Primeiro: crie index.html, css/app.css e js/00-core.js.
```

### Passo 1 — `js/10-conta.js` (era `app/js/04-conta.js`, 25 linhas)

```text
Crie js/10-conta.js. Ele faz: Mini SK — 04-conta.js SEM login, SEM nuvem, SEM banco de dados. Tudo fica só neste aparelho. Este arquivo só existe para os outros módulos continuarem funcionando: ele diz "não há nuvem" e limpa qualquer ligação antiga com o Supabase.
No app original ele tinha estas funções/partes: nada.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 2 — `js/15-fs.js` (era `app/js/10-fs.js`, 284 linhas)

```text
Crie js/15-fs.js. Ele faz: Mini SK — 10-fs.js Projetos e arquivos. Cada projeto fica salvo no navegador (IndexedDB). - Reconhece o tipo do arquivo pela extensão (HTML, CSS, JS, JSON, Python…) - Reconhece a codificação (UTF-8, UTF-8 com BOM, UTF-16, Windows-1252/Latin-1).
No app original ele tinha estas funções/partes: extOf, baseName, dirName, norm, typeOf, decodeBytes, looksBinary, toBase64, fromBase64, recordFromBytes, saveNow, touch, getDir, sort, ensureParents, commonRoot.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 3 — `js/20-zip.js` (era `app/js/20-zip.js`, 120 linhas)

```text
Crie js/20-zip.js. Ele faz: Mini SK — 20-zip.js Lê e cria arquivos .zip SEM biblioteca externa (funciona offline). Usa o descompactador que já vem no navegador (DecompressionStream).
No app original ele tinha estas funções/partes: CRC_TABLE, crc32, streamThrough, read, write.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 4 — `js/25-highlight.js` (era `app/js/30-highlight.js`, 127 linhas)

```text
Crie js/25-highlight.js. Ele faz: Mini SK — 30-highlight.js Cores do código (realce de sintaxe) para HTML, CSS, JavaScript/TypeScript, JSON, Python, Markdown, SQL, YAML/.env e Shell. Sem biblioteca externa.
No app original ele tinha estas funções/partes: esc, span, lex, html.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 5 — `js/30-editor.js` (era `app/js/40-editor.js`, 261 linhas)

```text
Crie js/30-editor.js. Ele faz: Mini SK — 40-editor.js O editor de código: abas, cores, números de linha, Tab/Enter inteligentes, ir para linha, selecionar um trecho (usado pela busca e pela IA). Imagens abrem como imagem; outros binários mostram tamanho e "Baixar".
No app original ele tinha estas funções/partes: build, applyPrefs, paint, paintSoon, syncScroll, renderTabs, updateStatus, open, close, showEmpty, onInput, insertText, onKey, goToLinePrompt, reveal.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 6 — `js/35-tree.js` (era `app/js/50-tree.js`, 240 linhas)

```text
Crie js/35-tree.js. Ele faz: Mini SK — 50-tree.js Árvore de arquivos: pastas dentro de pastas, criar, renomear, duplicar, mover (arrastando ou digitando o caminho), apagar, baixar, analisar com IA. Importa arquivos soltos, pasta inteira ou .zip.
No app original ele tinha estas funções/partes: build, render, walk, targetDir, onClick, toolbar, newFile, newDir, starter, expandTo, rename, moveAsk, move, remove, downloadNode, openMenu, popup, outside.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 7 — `js/40-preview.js` (era `app/js/60-preview.js`, 376 linhas)

```text
Crie js/40-preview.js. Ele faz: Mini SK — 60-preview.js Preview ao vivo, sempre na parte de baixo (pode aumentar, diminuir ou esconder arrastando a barrinha). Monta a página com TODOS os arquivos do projeto: CSS, JS, imagens, módulos (import/export) e até fetch('dados.json').
No app original ele tinha estas funções/partes: build, onClick, applySize, setupGrip, end, htmlFiles, pickTarget, fillSelect, isExternal, resolve, revokeAll, mkPage, fileURL, rewriteCss, rewriteModule, fix, consoleShim, buildHtml.
O original usava as bibliotecas  + q + u + q + : em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: dados.json. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 8 — `js/45-tsx.js` (era `app/js/61-tsx.js`, 133 linhas)

```text
Crie js/45-tsx.js. Ele faz: Mini SK — 61-tsx.js ⚛️ Prévia de UM componente .tsx / .jsx (do jeito dos sites de "playground"): - traduz o TSX para JavaScript (Babel, baixado uma vez da internet); - segue os imports do próprio projeto (./x, ../x, @/x) e traduz também;.
No app original ele tinha estas funções/partes: carregarBabel, acharArquivo, tentar, deFora, montar, urlDe, mostrarErro, Guarda.
O original usava as bibliotecas react, react-dom,  + JSON.stringify(principal) + : em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 9 — `js/50-search.js` (era `app/js/70-search.js`, 119 linhas)

```text
Crie js/50-search.js. Ele faz: Mini SK — 70-search.js Buscar (e trocar) em todos os arquivos do projeto. Cada resultado mostra arquivo e linha com o trecho DESTACADO; tocar abre o arquivo já com o trecho selecionado. "Trocar tudo" cria um checkpoint antes.
No app original ele tinha estas funções/partes: build, makeRegex, includeFilter, search, replaceAll.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 10 — `js/55-ai.js` (era `app/js/80-ai.js`, 731 linhas)

```text
Crie js/55-ai.js. Ele faz: Mini SK — 80-ai.js IA para ajudar a escrever código. - Chaves: cole qualquer chave, o provedor é reconhecido sozinho (Groq gsk_, Gemini AIza, OpenAI sk-, Claude sk-ant-, OpenRouter sk-or-, xAI xai-).
No app original ele tinha estas funções/partes: detect, saveKeys, current, curInfo, tok, adjust, aiFetch, errorText, gFetch, geminiBody, listModels, chat, finish, readSSE, fichaAmbiente, resumoProjeto, tem, systemPrompt.
Ele chamava estes endereços: https://api.anthropic.com/v1/models?limit=100, http://127.0.0.1:11434/api/version. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 11 — `js/60-gasto.js` (era `app/js/81-gasto.js`, 142 linhas)

```text
Crie js/60-gasto.js. Ele faz: Mini SK — 81-gasto.js 💰 Quanto a IA está gastando. - Depois de cada resposta: tokens de entrada (↑ o que foi enviado), tokens de saída (↓ o que a IA escreveu) e o custo em reais.
No app original ele tinha estas funções/partes: dolar, limiteMes, avisoPedido, preco, brl, fmt, custo, registra, totais, antes, previa, resumoHTML, painel.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 12 — `js/65-voz.js` (era `app/js/83-voz.js`, 166 linhas)

```text
Crie js/65-voz.js. Ele faz: Mini SK — 83-voz.js 🗣️ Voz e modo conversa (igual ao jurídico): - Voz: Francisca (neural) quando existe no aparelho, velocidade 1,15, tom 0,95. No PC, pelo navegador Edge, aparece "Microsoft Francisca Online (Natural)".
No app original ele tinha estas funções/partes: salvar, carregarVozes, melhorVoz, limpar, pedacos, falar, parar, estado, ouvir, norm, ehEco, enviarFala, ligar, desligar, ajustesHTML, ligarAjustes.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 13 — `js/70-ponte.js` (era `app/js/84-ponte.js`, 68 linhas)

```text
Crie js/70-ponte.js. Ele faz: Mini SK — 84-ponte.js 🔗 Ponte com os outros apps (cada um continua separado, sem bagunça): - 🩺 Mandar o projeto aberto para o Cirurgião (detectar problemas, corrigir). - ↩️ Receber de volta só os arquivos que o Cirurgião corrigiu.
No app original ele tinha estas funções/partes: endereco, arquivosDoProjeto, mandarCirurgiao.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 14 — `js/75-checkpoints.js` (era `app/js/85-checkpoints.js`, 121 linhas)

```text
Crie js/75-checkpoints.js. Ele faz: Mini SK — 85-checkpoints.js Pontos de volta. Uma "foto" de todos os arquivos do projeto. - Manual: você cria quando quiser (botão 📸 ou Ctrl+S duas vezes). - Automático: antes de apagar, importar, trocar tudo, aplicar código da IA,.
No app original ele tinha estas funções/partes: sizeOf, create, prune, list, restore, remove, diff, build, render, onClick, sec.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 15 — `js/80-terminal.js` (era `app/js/86-terminal.js`, 411 linhas)

```text
Crie js/80-terminal.js. Ele faz: Mini SK — 86-terminal.js ⌨️ Terminal leve, ligado à ÁRVORE do projeto. Funciona no celular, sem internet e sem instalar nada. Criou uma pasta aqui, ela aparece em ☰. Comandos: ls, cd, pwd, tree, cat, head, tail, wc, mkdir, touch, rm, mv, cp,.
No app original ele tinha estas funções/partes: resolve, isDir, isFile, children, allUnder, base, join, print, err, printHTML, promptText, words, flags, checkpoint, show, walk, encName, npmJSON.
Ele chamava estes endereços: https://registry.npmjs.org, https://api.npms.io/v2/search?size=15&q=. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 16 — `js/85-86b-node.js` (era `app/js/86b-node.js`, 210 linhas)

```text
Crie js/85-86b-node.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: ehSite, lacreLigado, registrarSW, ligarLacre, carregarScript, carregarCss, arvore, ligar, mostrarServidor, trazer, andar, status, teclas, build, rodar, mandar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 17 — `js/90-86c-termux.js` (era `app/js/86c-termux.js`, 267 linhas)

```text
Crie js/90-86c-termux.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: status, carregarScript, carregarCss, prepararTela, escreverTela, enviar, tamanho, conectar, desconectar, copiar, buildPC, letra, irParaPasta, build, pst, rodarP, nomeProj, mandar.
O original usava as bibliotecas http, fs, path, os: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 18 — `js/91-86e-atalhos.js` (era `app/js/86e-atalhos.js`, 75 linhas)

```text
Crie js/91-86e-atalhos.js. Ele faz: Mini SK — 86e-atalhos.js ⚡ Comandos prontos para os terminais (⚡ Node e 📱 Termux): um toque e o comando vai. Lê o package.json do projeto e cria um botão para cada "npm run …" que existe nele. Usado por 86b-node.js e 86c-termux.js.
No app original ele tinha estas funções/partes: pacotes, montar, pintar, pre.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 19 — `js/92-86f-pasta-viva.js` (era `app/js/86f-pasta-viva.js`, 137 linhas)

```text
Crie js/92-86f-pasta-viva.js. Ele faz: Mini SK — 86f-pasta-viva.js   (SÓ no Mini SK para PC) 📁 PASTA VIVA: igual ao VS Code. Cada projeto é uma pasta de verdade no computador (Documentos\Mini-SK\NOME-DO-PROJETO) e fica SEMPRE igual à árvore: - você mexe na árvore/editor  → vai sozinho para a pasta;.
No app original ele tinha estas funções/partes: nomeProj, pasta, assin, assinRec, estado, chamar, item, mandar, iniciar, olhar, esvaziar.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 20 — `js/93-links.js` (era `app/js/87-links.js`, 210 linhas)

```text
Crie js/93-links.js. Ele faz: Mini SK — 87-links.js 🔗 Meus Links: guarda os endereços dos seus PWAs e sites num lugar só (eles não somem como os "instalados" que o celular apaga). - Colar um ou vários links de uma vez; nome e ícone automáticos.
No app original ele tinha estas funções/partes: salvarLocal, salvar, carregar, sincNuvem, icone, nomeDe, extrair, build, juntar, adicionar, render, onListClick, paginaHTML, criarPagina, conversa.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 21 — `js/94-inventario.js` (era `app/js/88-inventario.js`, 183 linhas)

```text
Crie js/94-inventario.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: texto, limpaTag, familia, analisar, lerArquivos, doProjeto, completude, grupos, oQueFaz, render, manualMD, pedirIA, build.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 22 — `js/95-config.js` (era `app/js/89-config.js`, 257 linhas)

```text
Crie js/95-config.js. Ele faz: Mini SK — 89-config.js ⚙️ Configuração: 🔑 Cofre de chaves (IA, GitHub e "Minhas chaves"). Tudo guardado SÓ neste aparelho. Sem login, sem nuvem.
No app original ele tinha estas funções/partes: extras, cofreLocal, aplicaCofre, auto, enviaProjeto, sincPlayground, setStatus, build, renderAll, renderConta, renderCofre, mask, renderBackup, renderNuvem, onChange, onClick, atobSafe.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 23 — `js/96-github.js` (era `app/js/90-github.js`, 321 linhas)

```text
Crie js/96-github.js. Ele faz: Mini SK — 90-github.js Repositório no GitHub, direto do navegador (sem servidor, sem Replit): - Cole seu token (github.com/settings/tokens — "Fine-grained", com acesso "Contents: Read and write" nos repositórios; para criar repositório.
No app original ele tinha estas funções/partes: explain, pool, worker, gitSha, parseRepo, linkKey, getLink, setLink, status, importRepo, push, createRepo, enablePages, ensureUser, repoSlug, resolveRepo, ensureRepo, sendTo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 24 — `js/97-acoes.js` (era `app/js/91-acoes.js`, 232 linhas)

```text
Crie js/97-acoes.js. Ele faz: Mini SK — 91-acoes.js ⚙️ Execuções no GitHub (Actions) — dentro do painel 🐙 GitHub. Antes o Mini SK só ENVIAVA. Agora ele também mostra o que o GitHub faz com o que foi enviado:.
No app original ele tinha estas funções/partes: stop, status, base, mount, pickRepo, load, renderWorkflows, renderRuns, onClick, follow, tick, detail, logExcerpt, downloads, afterPush.
Ele chamava estes endereços: https://api.github.com. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 25 — `js/98-playground.js` (era `app/js/92-playground.js`, 378 linhas)

```text
Crie js/98-playground.js. Ele faz: Mini SK — 92-playground.js ▶️ Playground isolado, que abre ao lado (não é a primeira tela). Vem do CodeLens, sem servidor: - HTML (+ CSS + JS), React (JSX) e Python (no próprio navegador).
No app original ele tinha estas funções/partes: App, fresh, esc, prepJSX, page, add, cleanPage, detectMode, build, slug, setMode, paintTabs, paintAll, clearCon, log, run, full, close.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 26 — `js/98-conversa.js` (era `app/js/93-conversa.js`, 141 linhas)

```text
Crie js/98-conversa.js. Ele faz: Mini SK — 93-conversa.js 🧩 Desembaralhar conversa: lê uma conversa copiada do app de IA (Monica, ChatGPT, Claude…) onde o código veio SEM marcação (sem ```), separa o que é texto e o que é código, e recupera cada arquivo:.
No app original ele tinha estas funções/partes: codeScore, sniff, slug, parse, startBlock, indexMD, toTXT.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 27 — `js/98-fatiador.js` (era `app/js/94-fatiador.js`, 389 linhas)

```text
Crie js/98-fatiador.js. Ele faz: Mini SK — 94-fatiador.js ✂️ Fatiador: pega um arquivo grande (JS, TS, TSX, HTML, CSS, Python, MD) e divide em BLOCOS de lógica (imports, funções, componentes, classes, tipos, estilos, scripts…), com um ÍNDICE.
No app original ele tinha estas funções/partes: lineStates, nameOfJs, splitByStarts, pullComments, splitJs, tryBase, short, splitCss, splitPy, splitMd, splitPlain, splitHtml, push, langOf, slice, rejoin, fence, slug.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 28 — `js/98-pwa.js` (era `app/js/95-pwa.js`, 613 linhas)

```text
Crie js/98-pwa.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: gradFill, shapePath, hexA, content, draw, render, toBytes, svg, ico, iconFiles, saveFiles, rel, resolveFrom, titleOf, slug, initials, colorOf, manifestOf.
Ele chamava estes endereços: ./. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 29 — `js/98-apk.js` (era `app/js/96-apk.js`, 922 linhas)

```text
Crie js/98-apk.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: wfNome, MainActivity, Ponte, mandar, salvar, nomeDe, local, slug, pkgPart, readCfg, validPkg, prepare, servir, EXE_RECEITA, temServidor, prepararExe, gerarExe, repoOf.
O original usava as bibliotecas electron, path, fs, http: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: https://api.github.com/repos/. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 30 — `js/98-96b-eas.js` (era `app/js/96b-eas.js`, 278 linhas)

```text
Crie js/98-96b-eas.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: versaoBase, majorExpo, lerJson, conferir, add, corrigir, testarExpo, repoOf, guardarSegredo, enviarEGerar, ultimo, parar, acompanhar, tick, status, build, rodar, fill.
O original usava as bibliotecas fs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: https://api.expo.dev/graphql. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 31 — `js/98-96c-preparar.js` (era `app/js/96c-preparar.js`, 547 linhas)

```text
Crie js/98-96c-preparar.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: lerJSON, raizPkg, permissoes, analisar, add, pastaDoBuild, nomeApp, idApp, receitaCap, criarCapacitor, MAIN_CJS, criarJanela, criarDesktop, receita, gerarPlano, tirarReplitDoCodigo, fazerTudo, quer.
O original usava as bibliotecas electron, path, fs, url: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 32 — `js/98-analise.js` (era `app/js/97-analise.js`, 448 linhas)

```text
Crie js/98-analise.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: explain, scriptHelp, parseCatalog, analyze, addUse, treeText, walk, planMD, unifiedPkg, sortObj, batText, aiPack, parseMarked, cleanViteConfig, rep, cleanReplit, convParse, desc.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 33 — `js/98-api.js` (era `app/js/98-api.js`, 150 linhas)

```text
Crie js/98-api.js. Ele faz: Mini SK — 98-api.js 🧪 Testador da API do próprio projeto (o servidor rodando no seu PC, ex.: http://localhost:8080 ou o EXE leve em 127.0.0.1:18633). - Acha sozinho as ROTAS do servidor no código (Express, Fastify, Hono,.
No app original ele tinha estas funções/partes: lineOf, analyze, toRe, fullPath, req, save, show, send, hint, allGet, build, scan, loc.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 34 — `js/98-expo-core.js` (era `app/js/lib/expo-core.js`, 192 linhas)

```text
Crie js/98-expo-core.js. Ele faz: expo-core.js — ☁️ Consertar um projeto EXPO para gerar APK pelo EAS Usado pelo Caça-Bug (Diagnóstico) e pelo Mini SK (painel ☁️ EAS). Junta o que os geradores antigos faziam separado (app.json, eas.json, autorizações, receita do GitHub) + limpeza da Replit, numa passada só.
No app original ele tinha estas funções/partes: json, raizDe, slugDe, ler, permissoes, tem, consertar, existe, tirarImg, limpa, base.
O original usava as bibliotecas fs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 35 — `js/98-plano-core.js` (era `app/js/lib/plano-core.js`, 171 linhas)

```text
Crie js/98-plano-core.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: ext, uniq, normRota, arvore, andar, gerar, chave, dedup, temRota, tem, markdown, tab.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 36 — `js/98-receita-core.js` (era `app/js/lib/receita-core.js`, 139 linhas)

```text
Crie js/98-receita-core.js. Ele faz: receita-core.js — 🧬 Receita para recriar um projeto (sem IA). Lê os arquivos, descobre o que cada um faz e monta: - RECEITA.md: visão geral, estrutura modular proposta, ordem de montagem e UM PEDIDO PRONTO POR ARQUIVO (para colar em qualquer IA, até as pequenas);.
No app original ele tinha estas funções/partes: slug, base, semExt, uniq, papel, descricao, itens, usa, rotasDe, chamadasDe, ordenar, visita, gerar, titulo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 37 — `js/98-selar.js` (era `app/js/lib/selar.js`, 94 linhas)

```text
Crie js/98-selar.js. Ele faz: Mini SK — js/lib/selar.js "Tranca" um segredo do jeito que o GitHub exige para guardar em Settings → Secrets (libsodium "sealed box"): chave temporária (X25519) + nonce = BLAKE2b(chaveTemp || chaveDoRepo, 24 bytes).
No app original ele tinha estas funções/partes: add64, add64c, compress, blake2b, b64para, paraB64, selar, abrir.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 38 — `js/98-ponte.js` (era `electron/ponte.cjs`, 81 linhas)

```text
Crie js/98-ponte.js. Ele faz: Ponte de arquivos do Mini SK — no PC, o próprio programa liga (no celular, roda no Termux). Leva o projeto da árvore para ~/minisk/NOME e traz de volta o que o terminal criou (dist, arquivos novos…). Só o próprio celular enxerga (127.0.0.1) e só quem tem o código entra.
No app original ele tinha estas funções/partes: nomeProj, dentro, responder, corpo, andar.
O original usava as bibliotecas http, fs, path, os: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 39 — `js/98-preload.js` (era `electron/preload.cjs`, 4 linhas)

```text
Crie js/98-preload.js. Ele faz: Ponte segura entre a janela e o computador. A página vê window.desktop.
O original usava as bibliotecas electron: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 40 — `js/98-terminal.js` (era `electron/terminal.cjs`, 89 linhas)

```text
Crie js/98-terminal.js. Ele faz: Terminal do computador para o Mini SK — fala o mesmo "idioma" do ttyd (o do Termux), então o painel 📱/💻 do Mini SK funciona sem mudar nada. Cada linha que você digita roda como um comando (cmd no Windows). Ctrl+C para o comando que está rodando. "cd" muda de pasta.
No app original ele tinha estas funções/partes: iniciarTerminal, mandar, curto, prompt, trocarLinha, parar, expandir, rodar, tecla.
O original usava as bibliotecas ws, child_process, path, fs, os: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 41 — `js/98-app.js` (era `app/index.html`, 112 linhas)

```text
Crie js/98-app.js. Ele faz: Mini SK.
Ele usa o que já foi criado em: js/10-conta.js, js/15-fs.js, js/20-zip.js, js/25-highlight.js, js/30-editor.js, js/35-tree.js, js/40-preview.js, js/45-tsx.js, js/50-search.js, js/55-ai.js, js/60-gasto.js, js/65-voz.js, js/70-ponte.js, js/75-checkpoints.js, js/80-terminal.js, js/85-86b-node.js, js/90-86c-termux.js, js/92-86f-pasta-viva.js, js/91-86e-atalhos.js, js/93-links.js, js/94-inventario.js, js/95-config.js, js/96-github.js, js/97-acoes.js, js/98-playground.js, js/98-conversa.js, js/98-fatiador.js, js/98-pwa.js, js/98-apk.js, js/98-selar.js, js/98-expo-core.js, js/98-96b-eas.js, js/98-plano-core.js, js/98-receita-core.js, js/98-96c-preparar.js, js/98-analise.js, js/98-api.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 42 — `js/98-inicio.js` (era `index.html`, 81 linhas)

```text
Crie js/98-inicio.js. Ele faz: Mini-SK-PC-17-10-a (1) 17-10-2026, 03-20-01 — Mini-SK-PC-17-10-a (1) 17-10-2026, 03-20-01.
No app original ele tinha estas funções/partes: rec, esc, card, show.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 43 — `js/99-app.js` e conferir

```text
Crie js/99-app.js: ele olha APP.modulos e monta o menu/abas com um botão para cada módulo. Depois, me mande o index.html atualizado com todos os <script src="js/…"> na ordem certa: js/00-core.js, js/10-conta.js, js/15-fs.js, js/20-zip.js, js/25-highlight.js, js/30-editor.js, js/35-tree.js, js/40-preview.js, js/45-tsx.js, js/50-search.js, js/55-ai.js, js/60-gasto.js, js/65-voz.js, js/70-ponte.js, js/75-checkpoints.js, js/80-terminal.js, js/85-86b-node.js, js/90-86c-termux.js, js/91-86e-atalhos.js, js/92-86f-pasta-viva.js, js/93-links.js, js/94-inventario.js, js/95-config.js, js/96-github.js, js/97-acoes.js, js/98-playground.js, js/98-conversa.js, js/98-fatiador.js, js/98-pwa.js, js/98-apk.js, js/98-96b-eas.js, js/98-96c-preparar.js, js/98-analise.js, js/98-api.js, js/98-expo-core.js, js/98-plano-core.js, js/98-receita-core.js, js/98-selar.js, js/98-ponte.js, js/98-preload.js, js/98-terminal.js, js/98-app.js, js/98-inicio.js, js/99-app.js.
```

## 5. Conferir no final

- [ ] Abrir o index.html na prévia: aparece a tela sem erro (▤ console vazio)?
- [ ] Cada botão abre a sua parte?
- [ ] Fechar e abrir de novo: os dados continuam?
- [ ] Nada com "replit", "REPL_", "@workspace" no código (🏗️ Preparar confere).
- [ ] 📱 PWA → deixar instalável; 📦 APK ou 🖥️ .exe.
