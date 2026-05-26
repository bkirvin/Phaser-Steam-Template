import { app, BrowserWindow } from 'electron'
import path from 'node:path'
import os from 'node:os'
import { fileURLToPath } from 'node:url'

// needed in case process is undefined under Linux
const platform = process.platform || os.platform()
const steamworks = require('steamworks.js')
const currentDir = fileURLToPath(new URL('.', import.meta.url))

const STEAM_APP_ID = 480

let mainWindow

async function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(currentDir, 'icons/icon.png'), // tray icon
    width: 1920,
    height: 1080,
    useContentSize: true,
    fullscreen: true,
    resizable: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(
        currentDir,
        path.join(process.env.QUASAR_ELECTRON_PRELOAD_FOLDER, 'electron-preload' + process.env.QUASAR_ELECTRON_PRELOAD_EXTENSION)
      )
    }
  })

  if (process.env.DEV) {
    await mainWindow.loadURL(process.env.APP_URL)
  } else {
    await mainWindow.loadFile('index.html')
  }

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// app.whenReady().then(() => {

//   createWindow
// })

app.whenReady().then(() => {
  try {
    // This triggers Steam's internal RestartAppIfNecessary check.
    // If the game was launched outside of Steam, it will close your app,
    // relaunch it through Steam, and return true.
    // >>>>>>>>>>>>>>>>>>>> uncomment when actual app ID is used >>>>>>>>>>>>>>
    // if (steamworks.restartAppIfNecessary(STEAM_APP_ID)) {
    //   app.quit()
    //   return
    // }

    // Initialize the client. This verifies ownership and logs the user in.
    const steamClient = steamworks.init(STEAM_APP_ID)
    console.log(`Steam verified. Current User: ${steamClient.localUser.getSteamName()}`)

    // Enable the Steam Overlay to paint correctly over your Phaser canvas
    steamworks.electronEnableSteamOverlay()

    // Steam check passed successfully, open your Quasar/Phaser application
    createWindow()

  } catch (error) {
    console.error('Steamworks DRM Initialization Failed:', error)
    // Force quit the app immediately if the ownership check fails
    app.quit()
  }
})

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
