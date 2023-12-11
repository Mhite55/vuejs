<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <SquareColor color="#feaa0c"/>
  <SquareColor color="#fe580c"/>
  <SquareColor color="#f31c3c"/>
  <SquareColor color="#f00e0c"/>
</template>

<script>

import SquareColor from './components/SquareColor.vue'

export default {
  name: 'App',
  components: {
    SquareColor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
