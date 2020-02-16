<template>
  <div
    class="dice-roller flex items-center justify-between border border-gray-400 p-1 bg-gray-200 mb-2"
  >
    <h1
      class="flex-shrink uppercase bg-gray-400 text-sm self-stretch -ml-1 -my-1 mr-2 px-2 flex items-center"
    >
      <span class="tracking-wide">Make A Roll</span>
    </h1>
    <div class="roll-options">
      <select v-model="rollStat" class="mx-1">
        <option value="heart">+Heart</option>
        <option value="edge">+Edge</option>
      </select>
      <label class="mx-1" for="modifier">
        Add
        <input v-model.number="addNum" type="number" class="w-8">
      </label>
    </div>

    <button
      class="bg-gray-600 py-1 px-2 text-white font-bold uppercase text-sm rounded self-center flex items-center"
      @click="makeRoll"
    >
      <span class="leading-none mx-1 inline-block">Roll</span>
      <RollIcon class="w-5 h-5 fill-current"/>
    </button>
  </div>
</template>

<script>
import RollIcon from "~/assets/icons/die.svg";

export default {
  components: {
    RollIcon,
  },
  props: {
    move: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      rollStat: "heart",
      addNum: 0,
    };
  },
  methods: {
    makeRoll() {
      this.$store.commit("activityLog/addRoll", {
        rollStat: this.rollStat,
        addNum: this.addNum,
        move: this.move,
      });
    },
  },
};
</script>

<style scoped>
</style>
