<template>
  <section class="mb-1">
    <header class="flex justify-between items-center mb-1">
      <h1 class="text-lg font-bold">{{ title }}</h1>
      <slot name="headerExtra"></slot>

      <button @click="$emit('add-article')" class="flex gap-1">
        <!-- <button @click="handleAdd"> -->
        <span class=" leading-none">Add</span>
        <SvgoAdd class=""/>
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