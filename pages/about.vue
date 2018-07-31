<template>
  <div>
    <h3 class="Landscape__Title">
      touno-project/electron-nuxt-template
    </h3>
    <ul class="Landscape__List">
    	<li><a href="#" @click.prevent="openExternal('https://github.com/touno-project/electron-nuxt-template')">get started</a></li>
      <li><a href="#" @click.prevent="openExternal('https://github.com/nuxt/nuxt.js')">Nuxt.Js (v1.4.1)</a></li>
      <li><a href="#" @click.prevent="openExternal('https://github.com/electron/electron')">Electron.Js (v2.0.5)</a></li>
    </ul>
    <div style="text-align: center">
      <nuxt-link to="/">Back</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({ req }) {

    return {
      name: req ? 'server' : 'client'
    }
  }
}
</script>
