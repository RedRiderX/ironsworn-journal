<template>
  <div
    contenteditable="true"
    @input="$store.commit('character/updateStat', {name: statName, value: $event.target.innerText})"
  >{{ this.$store.state.character.stats[statName] }}</div>
</template>

<script>
export default {
  props: {
    statName: String,
  },
};
</script>