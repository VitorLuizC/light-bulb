<template lang="pug">
  .form-field
    label.label(v-if="!!label") {{ label }}
    input.field(v-if="isInput", :type="type", :value="value", @input="update")
</template>

<script>
  export default {
    props: ['type', 'value', 'label'],
    computed: {
      isInput() {
        return ['text', 'email', 'password'].indexOf(this.type) > -1
      }
    },
    methods: {
      update(event) {
        this.$emit('update', event.target.value)
      }
    }
  }
</script>

<style lang="stylus">
  .form-field
    & > .label
    & > .field
      display: block
</style>
