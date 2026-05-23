# Template (template)

Quasar/Phaser game
## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn lint
# or
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

# Electron config
## javascript
```bash
// src-electron/electron-main.js

const mainWindow = new BrowserWindow({
  width: 1920,
  height: 1080,
  useContentSize: true, // Forces window to match web page size exactly
  fullscreen: true,     // Boots directly into full screen
  frame: false,        // Removes the window title bar and borders
  resizable: false,    // Prevents manual resizing distortion
  webPreferences: {
    contextIsolation: true,
    nodeIntegration: false
  }
})
```

## build command for Windows
```
quasar build -m electron -T Win32
```

## build command for MacOS
```
quasar build -m electron -T darwin
```
