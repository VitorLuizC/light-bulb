<template lang="pug">
  router-view
</template>

<style lang="stylus">
  @import '../style/base.styl'
</style>

<script>
  import { authentication } from '../lib/application.js'

  export default {
    created() {
      let user = authentication.currentUser
      console.log(authentication)
      if (!!user)
        this.$store.commit('add-user', user)
    }
  }
</script>
