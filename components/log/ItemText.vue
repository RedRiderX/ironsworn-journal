<template>
  <LogItem class="log-item--text" canEdit canDelete @edit-log="editing = true">
    <div class="rich-text" v-html="html" v-show="!editing"></div>
    <LogEditor v-if="editing" :uuid="uuid" @update-done="editing = false"/>
  </LogItem>
</template>

<script>
import LogItem from "~/components/log/BaseItem";
import LogEditor from "~/components/editor/LogEditor";

export default {
  components: {
    LogItem,
    LogEditor,
  },
  props: {
    uuid: String,
    html: String,
  },
  data() {
    return {
      editing: false,
    };
  },
};
</script>

<style scoped>
</style>
