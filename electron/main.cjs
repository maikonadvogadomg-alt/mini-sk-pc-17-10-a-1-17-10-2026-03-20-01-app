// Abre o app numa janela de computador (Electron). Gerado pelo 🏗️ Preparar do Mini SK.
// Usa o endereço app://local/ (e não file://) para os módulos, o banco do navegador
// e o service worker funcionarem igual no site.
const { app, BrowserWindow, protocol, net, shell, session } = require('electron');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');
const PASTA = path.join(__dirname, '..', ".");

protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }]);

function criarJanela() {
  const w = new BrowserWindow({
    width: 1200, height: 800, autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.cjs'), contextIsolation: true, nodeIntegration: false },
  });
  // links de fora abrem no navegador do computador
  w.webContents.setWindowOpenHandler(({ url }) => { if (!url.startsWith('app://')) { shell.openExternal(url); return { action: 'deny' }; } return { action: 'allow' }; });
  w.loadURL('app://local/index.html');
}

app.whenReady().then(() => {
  protocol.handle('app', (req) => {
    let p = decodeURIComponent(new URL(req.url).pathname);
    if (p === '/' || p === '') p = '/index.html';
    let f = path.normalize(path.join(PASTA, p));
    if (!f.startsWith(path.normalize(PASTA))) return new Response('proibido', { status: 403 });
    // app com rotas (/login, /config): volta para o index
    if (!fs.existsSync(f) && !path.extname(f)) f = path.join(PASTA, 'index.html');
    return net.fetch(pathToFileURL(f).toString());
  });
  // microfone, câmera, notificações: libera para o próprio app
  session.defaultSession.setPermissionRequestHandler((wc, perm, cb) => cb(['media', 'notifications', 'clipboard-read', 'clipboard-sanitized-write', 'fullscreen', 'geolocation'].includes(perm)));
  criarJanela();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) criarJanela(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
