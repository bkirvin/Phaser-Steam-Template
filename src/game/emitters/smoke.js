let emit

const config = ( scene ) => {
  return {
    name: 'smoke',
    speed: 120,
    frequency: 20,
    quantity: 1,
    tint: 0x888888,
    angle: { min: -120, max: -80 },
    lifespan: { min: 500, max: 3000 },
    gravityX: 50,
    scale: { start: 0.5, end: 1 },
    alpha: { start: 1, end: 0 },
    follow: scene.blink,
    yoyo: true,
    x: {
      onUpdate: (particle, key, t, value) => {
        return value - scene.data.values.xMove
      }
    },
    emitting: false
  }
}

const getOverride = (scene, name) => {
  switch (name) {
    // add cases
  }
}

export default {
  emit: (scene, data) => {
    emit = scene.add.particles(0, 0, data ? data.texture || 'smoke' : 'smoke', config(scene))
    return emit
  },
  control (scene) {
    const resetConfig = {...config(scene)}
    emit.setConfig(resetConfig)
    return emit
  },
  getConfig (scene, data) {
    const override = {...config(scene), ...getOverride(scene, data)}
    emit.setConfig(override)
    return emit
  },
  resize () {
    emit.setPosition(emit.scene.GameWidthCenter, 1)
    return emit
  }
}
