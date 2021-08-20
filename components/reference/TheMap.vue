<template>
  <ReferenceSection class="map" title="Map">
    <template v-slot:headerExtra>
      <button @click.stop="$store.commit('activityLog/addPOI')">
        <span class="align-middle leading-none">Add</span>
        <AddIcon class="inline-block align-middle" />
      </button>
    </template>
    <MapCanvas :poi="$store.state.map.poi" />
    <PoiInput
      v-for="(point, index) in $store.state.map.poi"
      :key="index"
      :index="index"
      :title="point.title"
      :description="point.description"
    />
  </ReferenceSection>
</template>

<script>
import ReferenceSection from "~/components/ReferenceSection";
import MapCanvas from "~/components/editor/MapCanvas";
import PoiInput from "~/components/input/PoiInput";
import AddIcon from "~/assets/icons/add.svg";

export default {
  components: {
    AddIcon,
    ReferenceSection,
    MapCanvas,
    PoiInput,
  },
};
</script>

<style scoped>
</style>
