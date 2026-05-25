import { Scene /*, Scale, Geom, Display, Actions */  } from 'phaser'
import { EventBus } from '../EventBus'
// import Player from '../sprites/player'
// import Peg from '../sprites/peg'
// import Gobbler from '../sprites/gobbler'
// import orient from '../orientation'
// import PMath from '../usePhaserMath'
// import Ripple from '../sprites/ripple'
// import Mitter from '../emitters'
// import { useGameStore } from '../../stores/gameStore'
// import { storeToRefs } from 'pinia'

// const { ball, level } = storeToRefs(useGameStore())
// const { inc, dec, set } = useGameStore()

export class PlayScene extends Scene {

  constructor () {
    super('PlayScene')
  }

  create () {


    EventBus.emit('current-scene-ready', this)
  }

  update ( /* time, delta */ ) {

  }
}
