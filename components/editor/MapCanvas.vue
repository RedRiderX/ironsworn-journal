<template>
  <div class="map-wrapper bg-white border border-gray-600 mb-2 relative">
    <img src="/ironlands-map.svg" alt="Ironlands Map" />
    <div
      class="map-pin absolute bg-gray-100 font-display text-lg w-6 h-6 mr-2 flex items-center justify-center border-gray-800 border rounded-full"
      v-for="(point, index) in poi"
      :key="index"
      :style="{ top: point.y + '%', left: point.x + '%' }"
    >
      <span class="leading-none">{{ index + 1 }}</span>
    </div>

    <!-- <div
      class="map-pin absolute bg-gray-800 text-white font-display text-lg w-6 h-6 mr-2 flex items-center justify-center border-gray-800 border rounded-full"
      :style="{ top: preview.y + '%', left: preview.x + '%' }"
    >
      <span class="leading-none">*</span>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    poi: Array,
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
/* .map-pin {
  width: 
} */
</style>