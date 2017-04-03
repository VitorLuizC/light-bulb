<template lang="pug">
  header.view-header
    header-logo
    button(@click="signOut") Sign Out
</template>

<script>
  import HeaderLogo from './HeaderLogo.vue'

  export default {
    components: { HeaderLogo },
    methods: {
      signOut() {
        this.$store.dispatch('signOut')
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
