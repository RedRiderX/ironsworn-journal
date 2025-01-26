<template>
  <div
    contenteditable="true"
    @input="
      store.updateResource({
        name: resourceName,
        value: ($event.target as HTMLElement).innerText,
      })
    "
  >
    {{ formattedResource }}
  </div>
</template>

<script setup lang="ts">
const store = useCharacterStore();
const props = defineProps({
  resourceName: String,
});
const formattedResource = computed(() => {
  let value = store.resources[props.resourceName];
  return value > 0 ? "+" + value : value;
});
</script>
