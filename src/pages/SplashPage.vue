<template>
  <div id="container">
    <div class="section">
      <h1>Electron Phaser Steam Template</h1>
      <p>{{ instructions1 }}</p>
      <div>
        <ul>
          <li>Quasar's Electron implementation simplifies the Electron build process</li>
          <li>Vue adds Phaser integrated HTML overlay interfaces</li>
          <li>Phaser provides a robust and powerful 2D gaming engine</li>
        </ul>
      </div>
      <p>{{ instructions2 }}</p>
      <div class="button-container">
        <button @click="next">Begin</button>
      </div>
    </div>
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const next = () => {
  router.push({ path: '/play'})
}
const instructions1 = `Welcome to the Electron Phaser Steam Template. This NPM project utilizes
Quasar, Electron, Vue and Phaser to provide a build environment for Phaser games in Steam.`
const instructions2 = `This screen, or series of screens, can serve any branding, demo, login
  or instruction pages needed prior to game play.`

</script>

<style lang="scss" scoped>
#container {
  width: 100%;
}
h1 {
  text-align: center;
}
ul {
  width: 35vw;
  margin: 0 auto 2vh;
}
button {
  width: 200px;
  border-radius: 32px;
  padding: 4px 10px;
  font-weight: 600;
  color: #4240a9;
  border-color:#4240a9;
  background-color: #f6ed43;
  cursor: pointer;

  &:hover {
    color: #f6ed43;
    border-color:#4240a9;
    background-color: #4240a9;
  }
}
.button-container {
  text-align: right;
}
.section {
  width: 60vw;
  margin: 0 auto;
}
</style>
