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
