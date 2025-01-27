<template>
  <div class="vow__progress-track progress-track flex my-2">
    <div v-for="n in 10" :key="n" class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-left: -1px">
      <SvgoProgressWheelFull class="text-[2rem]" v-show="n * 4 <= progress" />
      <SvgoProgressWheelThreeQuarter class="text-[2rem]" v-show="n * 4 - 1 == progress" />
      <SvgoProgressWheelHalf class="text-[2rem]" v-show="n * 4 - 2 == progress" />
      <SvgoProgressWheelQuarter class="text-[2rem]" v-show="n * 4 - 3 == progress" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  progress: Number,
  rank: String,
});
</script>

<style scoped></style>
