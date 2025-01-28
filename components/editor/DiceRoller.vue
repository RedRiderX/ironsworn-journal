<template>
  <div
    class="dice-roller flex items-center justify-between border border-gray-400 p-1 bg-gray-200 mb-2"
  >
    <h1
      class="flex-shrink uppercase bg-gray-400 text-white text-sm self-stretch -ml-1 -my-1 mr-2 px-2 flex items-center"
    >
      <span class="tracking-wide">Make A Roll</span>
    </h1>
    <div class="roll-options">
      <select v-model="rollStat" class="mx-1">
        <option value="edge">+Edge</option>
        <option value="heart">+Heart</option>
        <option value="iron">+Iron</option>
        <option value="shadow">+Shadow</option>
        <option value="wits">+Wits</option>
        <option value="nothing">+Nothing</option>
      </select>
      <label class="mx-1" for="modifier">
        Add
        <input v-model.number="addNum" type="number" class="w-8" />
      </label>
    </div>

    <BaseButton @click="makeRoll" label="Roll" icon="SvgoDie" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  move: {
    type: Object,
    default: null,
  },
})
const activityLogStore = useActivityLogStore()

const rollStat = ref("heart")
const addNum = ref(0)

function makeRoll() {
  activityLogStore.addRoll({
    rollStat,
    addNum,
    move: props.move,
  });
}
</script>

<style scoped>
</style>
