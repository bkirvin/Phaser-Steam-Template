let emit
const config = (scene) => {
  return {
    name: 'burst',
    texture: 'ember',
    speed: { min: 100, max: 600 },
    frequency: 100,
    tint: '#ff0000',
    alpha: { start: 1, end: 0 },
    scale: 1,
    quantity: 30,
    x: scene.scale.width / 2,
    y: scene.scale.height / 2,
    lifespan: { min: 500, max: 3000 },
    emitting: false
  }
}

const green = () => {
  return {
    tint: 0x00ff00
  }
}

const pop = scene => {
  return {
    texture: 'star',
    gravityY: 300,
    scale: 2,
    emitting: true,
    tint: {
      onEmit: () => {
        return Math.random() < 0.5 ? 0xffffff : 0xffff00
      }
    },
    x: scene.scale.width / 2,
    y: scene.scale.height / 2,
    follow: null
  }
}

const bump = scene => {
  return {
    texture: 'star',
    x: scene.player.x,
    y: scene.player.y,
    follow: null,
    gravityY: 1200,
    lifespan: 250,
    quantity: 5,
    scale: 1
  }
}

const getOverride = (name, scene) => {
  switch (name) {
    case 'beePop':
      return pop(scene)
    case 'bump':
      return bump(scene)
    case 'green':
      return green(scene)
  }
}

export default {
  emit: (scene, data) => {
    emit = scene.add.particles(0, 0, data ? data.texture || 'ember' : 'ember', config(scene))
    return emit
  },
  control (scene) {
    const resetConfig = {...config(scene)}
    emit.setConfig(resetConfig)
    return emit
  },
  overrideConfig (scene, data) {
    const override = {...config(scene), ...getOverride(data, scene)}
    emit.setConfig(override)
    return emit
  },
  resize () {
    emit.setPosition(emit.scene.gameW / 2, 1)
    return emit
  }
}
