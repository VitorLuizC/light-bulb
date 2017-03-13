<template lang="pug">
  page(id="home", header="true", footer="true")
    slider
</template>

<script>
  import page from './page.vue';
  import slider from './slider.vue';

  export default {
    name: 'page-home',
    components: { page, slider }
  };
</script>

<style lang="stylus"></style>
