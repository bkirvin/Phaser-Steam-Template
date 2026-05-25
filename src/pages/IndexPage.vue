<template>
    <game-title v-if="titleScene" :scene />
    <phaser-game ref="phaserRef" @current-active-scene="currentScene"/>
</template>

<script setup>
import PhaserGame from '../game/PhaserGame.vue'
import { ref, computed } from 'vue'
import GameTitle from '../components/GameTitle.vue'

const phaserRef = ref()
const scene = ref()

const currentScene = (incomingScene) => {
  // configure scene
  console.log('CURRENT SCENE', incomingScene)
  scene.value = incomingScene
  return incomingScene
}

const titleScene = computed(() => {
  return scene.value ? scene.value.scene.key == 'TitleScene' : null
})

</script>

<style lang="scss" scoped>

</style>
