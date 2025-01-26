<template>
  <div
    contenteditable="true"
    @input="
      store.updateStat({
        name: statName,
        value: ($event.target as HTMLElement).innerText,
      })
    "
  >
    {{ store.stats[statName] }}
  </div>
</template>

<script setup lang="ts">
const store = useCharacterStore()
const props = defineProps({
  statName: String,
});
</script>
