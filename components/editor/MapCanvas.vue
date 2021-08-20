<template>
  <div
    class="map-wrapper bg-white border border-gray-600 mb-2 relative"
    v-on="canPreview ? { click: updatePreviewPosition } : null"
  >
    <img src="/ironlands-map.svg" alt="Ironlands Map" />
    <div
      class="map-pin absolute pointer-events-none bg-gray-100 font-display text-lg w-6 h-6 mr-2 flex items-center justify-center border-gray-800 border rounded-full"
      v-for="(point, index) in poi"
      :key="index"
      :style="{
        top: 'calc(' + point.y + '% - .8rem)',
        left: 'calc(' + point.x + '% - .8rem)',
      }"
    >
      <span class="leading-none">{{ index + 1 }}</span>
    </div>

    <div
      v-if="canPreview"
      class="map-pin absolute pointer-events-none bg-gray-800 text-white font-display text-xlg w-6 h-6 mr-2 items-center justify-center border-gray-800 border rounded-full"
      :class="{ flex: previewY !== null, hidden: previewY === null }"
      :style="{
        top: 'calc(' + previewY + '% - .8rem)',
        left: 'calc(' + previewX + '% - .8rem)',
      }"
    >
      <span class="leading-none">!</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    poi: Array,
    canPreview: Boolean,
  },
  data: function () {
    return {
      previewX: null,
      previewY: null,
    };
  },
  methods: {
    updatePreviewPosition(e) {
      let rect = e.target.getBoundingClientRect();
      // translate global pointer x and y to relative x and y of map
      let x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(3);
      let y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(3);
      this.previewX = x;
      this.previewY = y;
      this.$emit("update-poi-position", { x, y });
    },
  },
};
</script>

<style lang="postcss" scoped>
/* .map-pin {
  width: 
} */
</style>