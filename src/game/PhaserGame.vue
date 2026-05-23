<template>
  <div class="game-wrapper">
    <div id="game-container" class="game-wrapper"></div>
  </div>

  <!-- <pre>{{ data }}</pre> -->
</template>

<script setup>
import StartGame from './main'
import { onMounted, onUnmounted, ref } from 'vue'
import { EventBus } from './EventBus'
import gameConfig from './game.config'
import { LocalStorage } from 'quasar'

const orientation = gameConfig.orientation

let game
const unMatched = ref(false)
const emit = defineEmits(['current-active-scene'])

const checkOrientation = (query) => {
  if (query.matches) {
    unMatched.value = false
  } else {
    if (unMatched.value !== true) {
      unMatched.value = true
      // if (showResume.value !== true) {
      //   showResume.value = true
      //   scene.value.scene.pause(scene.value.scene.key)
      // }
    }
  }
}

onMounted(() => {

  game = StartGame('game-container')

  EventBus.on('current-scene-ready', (currentScene) => {

    emit('current-active-scene', currentScene)

    const query = window.matchMedia(`(orientation: ${orientation})`)
    query.addEventListener('change', checkOrientation)
    checkOrientation(query)

  })

})

onUnmounted(() => {

  if (game)
  {
    // logout()
    const data = LocalStorage.getItem('loggedIn')
    if (typeof data === 'object') data.userLoggedIn = false
    LocalStorage.set('loggedIn', data)
    // resetAuthState()
    game.destroy(true)
    game = null
  }

})
</script>

<style lang="scss" scoped>

#phaser-game-container {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}
.game-wrapper {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center; /* Centers the game perfectly without breaking dimensions */
  background-color: #000000;
  overflow: hidden;
}

</style>
