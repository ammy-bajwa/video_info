const electron = require("electron");

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on("ready", () => {
  console.log("App is ready");
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on("myEvent", (event, arg) => {
  console.log("arg", arg);
  mainWindow.webContents.send("myEventTwo", "data two");
});
