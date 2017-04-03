<template lang="pug">
  nav.tag-navigation(role="navigation")
    tag-list
</template>

<script>
  import TagList from './TagList.vue'

  export default {
    components: { TagList }
  }
</script>
