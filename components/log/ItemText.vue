<template>
  <BaseItem class="log-item--text" canEdit canDelete :uuid="uuid" @edit-log="editing = true">
    <div class="rich-text" v-html="html" v-show="!editing"></div>
    <LogEditor v-if="editing" :uuid="uuid" @update-done="editing = false"/>
  </BaseItem>
</template>

<script>
import BaseItem from "~/components/log/BaseItem";
import LogEditor from "~/components/editor/LogEditor";

export default {
  components: {
    BaseItem,
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
