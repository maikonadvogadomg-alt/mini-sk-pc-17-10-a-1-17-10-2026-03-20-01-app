// Ponte segura entre a janela e o computador. A página vê window.desktop.
const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('desktop', { ehDesktop: true, plataforma: process.platform });
