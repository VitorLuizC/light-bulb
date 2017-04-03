<template lang="pug">
  router-view(v-if="user !== undefined")
</template>

<script>
  import { mapGetters } from 'vuex'
  import { authentication } from '../lib/authentication.js'

  export default {
    computed: {
      ...mapGetters(['user', 'profile'])
    },
    created() {
      authentication.onAuthStateChanged(async user => {
        await this.$store.commit('update-user', user || null)

        let permission = (this.$route.meta.profiles.indexOf(this.profile) > -1)

        if (!permission) {
          let isGuest = (this.profile === 'guest')
          this.$router.replace(isGuest ? '/login' : '/dashboard')
        }
      })
    }
  }
</script>

<style lang="stylus" src="../style/base.styl"></style>
