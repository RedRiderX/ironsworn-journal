<template>
  <div
    contenteditable="true"
    @input="store.updateMomentumTotal(($event.target as HTMLElement).innerText)"
  >
    {{ formattedTotal }}
  </div>
</template>

<script setup lang="ts">
const store = useCharacterStore();
const formattedTotal = computed(() => {
  let value = store.momentum.total;
  return value > 0 ? "+" + value : value;
});
</script>
