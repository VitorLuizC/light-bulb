<template lang="pug">
  .view-container
    view-header(v-if="showHeader")
    view-content
      slot
    view-footer(v-if="showFooter")
</template>

<script>
  import ViewContent from './ViewContent.vue'
  import ViewFooter from './ViewFooter.vue'
  import ViewHeader from './ViewHeader.vue'

  export default {
    components: { ViewContent, ViewFooter, ViewHeader },
    props: {
      showFooter: {
        type: Boolean,
        default: true
      },
      showHeader: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="stylus">
  .view-container
    box-sizing: border-box
    overflow: auto
</style>
