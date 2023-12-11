<template>
    <div class="hello">
      <h1 :style="{color: color}">Ma super couleur {{ color }}!!</h1>
      <div :style="{backgroundColor: color}" ></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SquareColor',
    props: {
      color: String
    }
  }
  </script>
  <style scoped>
    
  div {
    margin-bottom: 100px;
    width: 100vw;
    height: 20vh;
  }

  </style>
  