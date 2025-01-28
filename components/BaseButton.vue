<template>
  <button
    class="bg-gray-600 py-1 px-3 text-white font-semibold uppercase rounded self-center flex gap-1 items-center"
    @click="$emit('click')"
  >
    <span class="leading-none">{{ label }}</span>
    <component v-if="icon.length" :is="icon" class="text-[1.25rem]" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
  icon: String,
})
const emit = defineEmits(['click'])
</script>
