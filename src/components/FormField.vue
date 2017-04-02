<template lang="pug">
  .form-field
    label.label(v-if="!!label") {{ label }}
    .field
      slot(name="field")
      p.error(if="!!error") {{ error }}
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      error: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="stylus">
  .form-field
    & > .label
      display: block
</style>
