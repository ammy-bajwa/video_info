const electron = require("electron");

const { app, BrowserWindow, BrowserView } = electron;

app.on("ready", () => {
  console.log("App is ready");
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
