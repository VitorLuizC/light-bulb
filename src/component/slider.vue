<template lang="pug">
  section.slider
    figure.slide
</template>

<script>
  export default {
    name: 'slider'
  };
</script>

<style lang="stylus">
  $base-font-size = 1.6rem

  .slider
    font-size: 0
    & > .slide
      font-size: $base-font-size
</style>
