<template>
    <phaser-game ref="phaserRef" @current-active-scene="currentScene"/>
</template>

<script setup>
import PhaserGame from '../game/PhaserGame.vue'
import { ref } from 'vue'

const phaserRef = ref()

const currentScene = (scene) => {
  // configure scene
  console.log('CURRENT SCENE', scene)
  return scene
}

</script>

<style lang="scss">

</style>
