import { Boot } from './scenes/Boot'
// import { Game } from './scenes/Game'
// import { GameOver } from './scenes/GameOver'
import { TitleScene } from './scenes/TitleScene'
import { PlayScene } from './scenes/PlayScene'
import Phaser from 'phaser'
import { Preloader } from './scenes/PreLoader'
// import orient from './orientation'
// import phaserConfig from './game.config'

// orient.setOrientation(phaserConfig.orientation)
const gameWidth = 1280
const gameHeight = 720

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config = {
  type: Phaser.AUTO,
  width: gameWidth,
  height: gameHeight,
  scale: {
    mode: Phaser.Scale.FIT,
    autocenter: Phaser.Scale.CENTER_BOTH
  },
  parent: 'game-container',
  backgroundColor: '#000000ff',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300
      },
      checkCollision: {
        up: true,
        left: true,
        right: true,
        down: true
      },
      debug: false
    }
  },
  scene: [
    Boot,
    Preloader,
    TitleScene,
    PlayScene
    // Game,
    // GameOver
  ]
}

const StartGame = (parent) => {

  return new Phaser.Game({ ...config, parent })
}

export default StartGame
