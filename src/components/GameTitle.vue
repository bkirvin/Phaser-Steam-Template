<template>
  <h1>
    <div>PHASER</div>
    <div>on</div>
    <div>STEAM</div>
    <button @click="changeScene">Play</button>
  </h1>
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'game-title',
  props: {
    scene: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const changeScene = (e) => {
      if (!e.pointerType) {
        if (e.key === ' ' || e.key === 'Spacebar') {
          props.scene.changeScene()
        }
      } else {
        props.scene.changeScene()
      }
    }
    onMounted(() => {
      window.addEventListener('keydown', changeScene)
    })
    onUnmounted(() => {
      window.removeEventListener('keydown', changeScene)
    })
    return {
      changeScene
    }
  }
})

</script>

<style lange="scss" scoped>
h1 {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 600;
  text-align: center;
  text-shadow: 0 0 20px black;
}
button {
  font-size: 1em;
  border-radius: 64px;
  padding: 20px 150px;
  background-color: #17e439;
  cursor: pointer;
  transform: scale(0.35);
}
</style>
