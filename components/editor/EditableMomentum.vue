<template>
  <div
    contenteditable="true"
    @input="
      store.updateMomentum({
        name: statName,
        value: ($event.target as HTMLElement).innerText,
      })
    "
  >
    {{ store.momentum[statName] }}
  </div>
</template>

<script setup lang="ts">
const store = useCharacterStore();
const props = defineProps({
  statName: String,
});
</script>
