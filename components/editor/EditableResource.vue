<template>
  <div
    contenteditable="true"
    @input="$store.commit('character/updateResource', {name: resourceName, value: $event.target.innerText})"
  >{{ formattedResource }}</div>
</template>

<script>
export default {
  props: {
    resourceName: String,
  },
  computed: {
    formattedResource() {
      let value = this.$store.state.character.resources[this.resourceName];
      return value > 0 ? "+" + value : value;
    },
  },
};
</script>
