<template>
  <section class="mb-1">
    <header class="flex justify-between items-center mb-1">
      <h1 class="text-lg font-bold">{{ title }}</h1>
      <slot name="headerExtra"></slot>

      <button @click="$emit('add-article')">
        <!-- <button @click="handleAdd"> -->
        <span class="align-middle leading-none">Add</span>
        <SvgoAdd class="inline-block align-middle"/>
      </button>
    </header>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
})
const emit = defineEmits(['add-article'])
//   handleAdd() {
//     console.log("add-article");
//   },
</script>