<template>
  <LogItem class="log-item--text" canEdit canDelete>
    <div class="rich-text" v-html="html"></div>
  </LogItem>
</template>

<script>
import LogItem from "~/components/LogItem";

export default {
  components: {
    LogItem
  },
  props: {
    html: String
  }
};
</script>

<style scoped>
</style>
