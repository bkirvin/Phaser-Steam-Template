let emit

const config = (scene) => {
  return {
    name: 'ember',
    speed: 50,
    frequency: 20,
    tint: 0xffff00,
    quantity: 10,
    lifespan: 500,
    gravity: { x: 0, y: -200 },
    scale: { start: 0.01, end: 0.5 },
    alpha: { start: 0.4, end: 0 },
    blendMode: 'ADD',
    follow: scene.player,
    emitting: false
  }
}

const getOverride = (name, scene) => {
  switch (name) {
    default:
      return { ...config(scene) }
  }
}

export default {
  emit: (scene) => {
    emit = scene.add.particles(0, 0, 'ember', { ...config(scene) })
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
    emit.setPosition(emit.scene.GameWidthCenter, 1)
    return emit
  }
}
