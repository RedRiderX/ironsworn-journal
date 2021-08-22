<template>
  <div class="vow__progress-track progress-track flex my-2">
    <div
      v-for="n in 10"
      :key="n"
      class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-left: -1px"
    >
      <ProgressFullIcon class="w-8 h-8" v-show="n * 4 <= progress" />
      <ProgressThreeQuarterIcon
        class="w-8 h-8"
        v-show="n * 4 - 1 == progress"
      />
      <ProgressHalfIcon class="w-8 h-8" v-show="n * 4 - 2 == progress" />
      <ProgressQuarterIcon class="w-8 h-8" v-show="n * 4 - 3 == progress" />
    </div>
  </div>
</template>

<script>
import ProgressFullIcon from "~/assets/icons/progress-wheel-full.svg";
import ProgressThreeQuarterIcon from "~/assets/icons/progress-wheel-three-quarter.svg";
import ProgressHalfIcon from "~/assets/icons/progress-wheel-half.svg";
import ProgressQuarterIcon from "~/assets/icons/progress-wheel-quarter.svg";

export default {
  props: {
    progress: Number,
    rank: String,
  },
  components: {
    ProgressFullIcon,
    ProgressThreeQuarterIcon,
    ProgressHalfIcon,
    ProgressQuarterIcon,
  },
  data: function () {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
</style>
