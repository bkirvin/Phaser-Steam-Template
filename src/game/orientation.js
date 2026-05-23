import { Scale } from 'phaser'
import { Platform } from 'quasar'
// import { EventBus } from './EventBus'

let gameOrientation //, itr
// let paused = false
const pixelRatio = window.devicePixelRatio !== 1 ? window.devicePixelRatio : 1
const android = Platform.is.android
const desktop = Platform.is.desktop
// let count = 0
// let sceneReady = false

const dim = {
  landscape: () => {
    if (android) {
      return {
        width: Math.max(window.screen.width, window.screen.height),
        height: Math.min(window.screen.width, window.screen.height) - (70 * pixelRatio)
      }
    } else {
      return {
        width: Math.max(window.screen.width, window.screen.height),
        height: Math.min(window.screen.width, window.screen.height),
      }
    }
  },
  portrait: () => {
    if (android) {
      return {
        width: Math.min(window.screen.width, window.screen.height),
        height: Math.max(window.screen.width, window.screen.height) - (70 * pixelRatio)
      }
    } else {
      return {
        width: Math.ceil(Math.min(window.screen.width, window.screen.height)),
        height: Math.ceil(Math.max(window.screen.width, window.screen.height)),
      }
    }
  },
  any: () => {
    if (android) {
      return {
        width: window.screen.width,
        height: window.screen.height - (70 * pixelRatio),
        scale: deviceScale()
      }
    } else {
      return {
        width: Math.ceil(window.screen.width),
        height: Math.ceil(window.screen.height),
      }
    }
  }
}

const orient = {
  landscape: {
    name: 'landscape',
    width: Math.ceil(dim.landscape().width),
    height: Math.ceil(dim.landscape().height),
    scale: dim.landscape().scale
  },
  portrait: {
    name: 'portrait',
    width: Math.ceil(dim.portrait().width),
    height: Math.ceil(dim.portrait().height),
    scale: dim.portrait().scale
  },
  any: {
    name: 'any',
    width: '100vw',
    height: '100vh',
    scale: dim.any().scale
  }
}

const setOrientation = function (orientation) {
  gameOrientation = orient[orientation]
}

function deviceScale () {
  return isLandscape() ? Scale.WIDTH_CONTROLS_HEIGHT : Scale.HEIGHT_CONTROLS_WIDTH
}
const getScale = function () {
  if (gameOrientation) {
    return gameOrientation.scale
  }
  return null
}

const getName = function () {
  if (gameOrientation) {
    return gameOrientation.name
  }
  return null
}

function isLandscape () {
  return window.screen.height < window.screen.width
}

function isPortrait () {
  return window.screen.height > window.screen.width
}

const orientationMatch = function () {
  if (gameOrientation) {
    if (gameOrientation.name === 'landscape') return isLandscape()
    if (gameOrientation.name === 'portrait') return isPortrait()
  }

  return true
}

const getPixelRatio = function () {
  return pixelRatio
}

// const reOrient = function () {
//     game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//     game.scale.forceOrientation(false, true);
//     game.scale.enterIncorrectOrientation.add(handleIncorrect);
// }

function isAndroid () {
  return android
}

function isDesktop () {
  return desktop
}

const getWidth = function () {
  if (gameOrientation) {
    return dim[gameOrientation.name]().width
  }
  return null
}

const getHeight = function () {
  if (gameOrientation) {
    return dim[gameOrientation.name]().height
  }
  return null
}

export default {
  setOrientation,
  // setScene,
  getName,
  getScale,
  getWidth,
  getHeight,
  // getPaused,
  orientationMatch,
  // constrainScreen,
  getPixelRatio,
  isAndroid,
  isDesktop
}
