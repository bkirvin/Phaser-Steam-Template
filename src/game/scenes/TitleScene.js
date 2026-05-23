// import { Scale } from 'phaser'
import { EventBus } from '../EventBus'
import { Scene } from 'phaser'
// import orient from '../orientation'
// import Mitter from '../emitters'
// import PMath from '../usePhaserMath'

export class TitleScene extends Scene {
  constructor () {
    super('TitleScene')
  }

  create () {
    EventBus.emit('current-scene-ready', this)
  }

  update ( /* time, delta */) {

  }
}
