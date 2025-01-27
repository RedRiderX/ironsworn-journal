<template>
  <ReferenceSection class="map" title="Map">
    <template v-slot:headerExtra>
      <button class="flex gap-1 items-center" @click.stop="storeActivityLog.addPOI">
        <span class="leading-none">Add</span>
        <SvgoAdd class="text-[1rem] fill-current m-0" />
      </button>
    </template>
    <MapCanvas :poi="store.poi" />
    <PoiInput
      v-for="(point, index) in store.poi"
      :key="index"
      :index="index"
      :title="point.title"
      :description="point.description"
    />
  </ReferenceSection>
</template>

<script setup lang="ts">
const store = useMapStore()
const storeActivityLog = useActivityLogStore()
</script>

<style scoped>
</style>
