<template>
  <div class="vow__progress-track progress-track flex my-2">
    <div
      class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-left: -1px;"
    >
      <ProgressFullIcon class="w-8 h-8"/>
    </div>
    <div
      class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-left: -1px;"
    >
      <ProgressThreeQuarterIcon class="w-8 h-8"/>
    </div>
    <div
      class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-left: -1px;"
    >
      <ProgressHalfIcon class="w-8 h-8"/>
    </div>
    <div
      class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-left: -1px;"
    >
      <ProgressQuarterIcon class="w-8 h-8"/>
    </div>
    <div
      class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-left: -1px;"
    ></div>
    <div
      class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-left: -1px;"
    ></div>
    <div
      class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-left: -1px;"
    ></div>
    <div
      class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-left: -1px;"
    ></div>
    <div
      class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-left: -1px;"
    ></div>
    <div
      class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
      style="margin-right: -1px;margin-left: -1px;"
    ></div>
  </div>
</template>

<script>
import ProgressFullIcon from "~/assets/icons/progress-wheel-full.svg";
import ProgressThreeQuarterIcon from "~/assets/icons/progress-wheel-three-quarter.svg";
import ProgressHalfIcon from "~/assets/icons/progress-wheel-half.svg";
import ProgressQuarterIcon from "~/assets/icons/progress-wheel-quarter.svg";

export default {
  components: {
    ProgressFullIcon,
    ProgressThreeQuarterIcon,
    ProgressHalfIcon,
    ProgressQuarterIcon
  }
};
</script>

<style scoped>
</style>
