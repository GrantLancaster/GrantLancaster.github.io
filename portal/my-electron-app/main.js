const {app, BrowserWindow, ipcMain} = require("electron");
const path = require("node:path");

// Current step in the tutorial steps 
// https://www.electronjs.org/docs/latest/tutorial/tutorial-adding-features


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // working with preload.js
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })
    win.loadFile("index.html");
}
app.whenReady().then(() => {
    ipcMain.handle("ping", () => "pong");
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") {
        app.quit
    };
});