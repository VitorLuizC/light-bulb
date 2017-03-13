<template lang="pug">
  .page
    header(v-if="header")
    .content
    header(v-if="footer")

</template>

<script>
  export default {
    name: 'page',
    props: {
      id: String,
      header: Boolean,
      footer: Boolean
    }
  };
</script>

<style lang="stylus"></style>
