// import { Scale } from 'phaser'
import { EventBus } from '../EventBus'
import { Scene } from 'phaser'
// import orient from '../orientation'
import Mitter from '../emitters'
// import PMath from '../usePhaserMath'

export class TitleScene extends Scene {
  constructor () {
    super('TitleScene')
  }

  create () {
    Mitter('burst', this, 'create')
    Mitter('burst', this, 'override', 'beePop').start()
    EventBus.emit('current-scene-ready', this)
  }

  changeScene() {
    this.scale.startFullscreen()
    console.log('change scene called')
    this.scene.start('PlayScene')
  }

  update ( /* time, delta */) {

  }
}
