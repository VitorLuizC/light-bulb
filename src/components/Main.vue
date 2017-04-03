<template lang="pug">
  router-view(v-if="user !== null")
</template>

<style lang="stylus">
  @import '../style/base.styl'
</style>

<script>
  import { authentication } from '../lib/application.js'

  export default {
    computed: {
      user() {
        return this.$store.getters.user
      }
    },
    created() {
      authentication.onAuthStateChanged(async user => {
        await this.$store.commit('update-user', user || false)

        let profile = this.$store.getters.userProfile
        let permission = (this.$route.meta.profiles.indexOf(profile) > -1)

        if (!permission) {        // Send back to Login if is a guest or to
          this.$router.replace((profile === 'guest') ? '/login' : '/dashboard') // Home if is an user.
        }
      })
    }
  }
</script>
