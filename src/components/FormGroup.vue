<template lang="pug">
  fieldset.form-group
    legend.title(v-if="!!title") {{ title }}
    slot
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="stylus">
  .form-group
    & > .title
      display: block
</style>
