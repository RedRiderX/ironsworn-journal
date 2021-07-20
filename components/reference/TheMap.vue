<template>
  <ReferenceSection class="map" title="Map">
    <template v-slot:headerExtra>
      <button @click.stop="$store.commit('activityLog/addPOI')">
        <span class="align-middle leading-none">Add</span>
        <AddIcon class="inline-block align-middle" />
      </button>
    </template>
    <MapCanvas :poi="$store.state.map.poi" />
    <article
      class="poi mb-2"
      v-for="(point, index) in $store.state.map.poi"
      :key="index"
    >
      <header class="flex items-center mb-1">
        <div
          class="poi__number bg-gray-100 font-display text-lg w-6 h-6 mr-2 flex items-center justify-center border-gray-800 border rounded-full"
        >
          <span class="leading-none">{{ index + 1 }}</span>
        </div>
        <h1
          class="font-bold text-lg"
          contenteditable="true"
          @input="
            $store.commit('map/updatePOITitle', {
              index: index,
              newTitle: $event.target.innerText,
            })
          "
        >
          {{ point.title }}
        </h1>
      </header>
      <div
        class="poi__notes"
        contenteditable="true"
        v-html="point.description"
        @input="
          $store.commit('map/updatePOIDescription', {
            index: index,
            newDescription: $event.target.innerHTML,
          })
        "
      ></div>
    </article>
  </ReferenceSection>
</template>

<script>
import ReferenceSection from "~/components/ReferenceSection";
import MapCanvas from "~/components/editor/MapCanvas";
import AddIcon from "~/assets/icons/add.svg";

export default {
  components: {
    AddIcon,
    ReferenceSection,
    MapCanvas,
  },
  data: function () {
    return {
      poi: [],
    };
  },
};
</script>

<style scoped>
</style>
