<template>
  <BaseItem class="log-item--text" canEdit canDelete :uuid="uuid" @edit-log="editing = true">
    <div class="rich-text" v-html="html" v-show="!editing"></div>
    <LogEditor v-if="editing" :uuid="uuid" @update-done="editing = false"/>
  </BaseItem>
</template>

<script setup lang="ts">
const props = defineProps({
  uuid: String,
  html: String,
})
const editing = ref(false)
</script>
