<template lang="pug">
  footer.view-footer
    p.copyright
      a.link(:href="copyright.link") {{ copyright.author }}
      |  &copy; {{ copyright.year }}
</template>

<script>
  export default {
    data() {
      return {
        copyright: {
          author: 'Vitor Cavalcanti',
          link: 'https://vitorluizc.github.io/',
          year: new Date().getFullYear()
        }
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
