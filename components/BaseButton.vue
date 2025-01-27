<template>
  <button
    class="bg-gray-600 py-1 px-2 text-white font-bold uppercase text-sm rounded self-center flex items-center"
    @click="$emit('click')"
  >
    <span class="leading-none mx-1 inline-block">{{ label }}</span>
    <component v-if="icon.length" :is="icon" class="w-5 h-5 fill-current" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
  icon: String,
})
const emit = defineEmits(['click'])
</script>
