<template lang="pug">
  footer.view-footer
    p.copyright
      a.link(href="https://vitorluizc.github.io/") Vitor Cavalcanti
      |  &copy; {{ year }}
</template>

<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>

<style lang="stylus">
  .view-footer
    color: #000

    & > .copyright
      text-align: center
</style>
