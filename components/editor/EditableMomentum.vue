<template>
  <div
    contenteditable="true"
    @input="$store.commit('character/updateMomentum', {name: statName, value: $event.target.innerText})"
  >{{ this.$store.state.character.momentum[statName] }}</div>
</template>

<script>
export default {
  props: {
    statName: String,
  },
};
</script>