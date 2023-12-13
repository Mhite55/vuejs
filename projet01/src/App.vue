<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <br>
  <!-- <SquareColor color="#feaa0c"/>
  <SquareColor color="#fe580c"/>
  <SquareColor color="#f31c3c"/>
  <SquareColor color="#f00e0c"/>
  <TestHooks v-for="(n, key) in 5" :size="randSize()" v-bind:key="key"/> -->
  <RouterLink to="/users">Liste des Utilisateurs </RouterLink>
  <RouterLink to="/users/add">| Créer des Utilisateurs</RouterLink>
  <router-view/>
</template>

<script>

// import SquareColor from './components/SquareColor.vue'
// import TestHooks from './components/TestHooks.vue'
// import ShowUsers from './components/ShowUsers.vue'
// import FormUsers from './components/FormUsers.vue'

export default {
  name: 'App',
  // components: {
  //    ShowUsers,
  //    FormUsers,
  //    SquareColor,
  //    TestHooks
  // },
  methods: {
    randSize(){
      return Math.random() * 500 + 200 
    }
  },
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
