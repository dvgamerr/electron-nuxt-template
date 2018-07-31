<template>
  <div>
    <div class="Landscape__Logo"></div>
    <h2 class="Landscape__Title">
      Universal Vue.js Applications
    </h2>
    <nuxt-link to="/about">About</nuxt-link>
  </div>
</template>

<script>
const { shell } = require('electron')

export default {
  methods: {
    openExternal (url) {
      shell.openExternal(url)
    }
  }
}
</script>


<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.Landscape__Title {
  text-align: center;
}
.Landscape__List li a {
  font-weight: normal;
  color: black;
}
a, a:hover, a:active, a:visited  {
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  color: rgb(65, 184, 131)
}
</style>
