<template lang="pug">
  header.view-header
    header-logo
    button(@click="signOut") Sign Out
</template>

<script>
  import HeaderLogo from './HeaderLogo.vue'
  import * as auth from '../lib/authentication.js'

  export default {
    components: { HeaderLogo },
    methods: {
      async signOut() {
        await auth.signOut()
        this.$router.push('/login')
        // TODO: Change redirect to "/home" after done it.
      }
    }
  }
</script>

<style lang="stylus">
  @import '../style/config.styl'

  .view-header
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: $view-header.height
    box-shadow: $view-header.shadow
</style>
