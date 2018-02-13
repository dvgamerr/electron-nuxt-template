<template>
  <div style="text-align: center">
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">Back</nuxt-link>
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
