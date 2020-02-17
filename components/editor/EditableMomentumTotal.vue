<template>
  <div
    contenteditable="true"
    @input="$store.commit('character/updateMomentumTotal', $event.target.innerText)"
  >{{ formattedTotal }}</div>
</template>

<script>
export default {
  computed: {
    formattedTotal() {
      let value = this.$store.state.character.momentum.total;
      return value > 0 ? "+" + value : value;
    },
  },
};
</script>
