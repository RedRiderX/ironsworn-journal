<template>
  <ReferenceSection class="map" title="Map">
    <template v-slot:headerExtra>
      <button class>
        <span class="align-middle leading-none">Add</span>
        <AddIcon class="inline-block align-middle"/>
      </button>
    </template>
    <div class="map-wrapper bg-white border border-gray-600 mb-2">
      <img src="/ironlands-map.svg" alt="Ironlands Map">
    </div>
    <article class="poi mb-2">
      <header class="flex items-center mb-1">
        <div
          class="poi__number bg-gray-100 font-display text-lg w-6 h-6 mr-2 flex items-center justify-center border-gray-800 border rounded-full"
        >
          <span class="leading-none">1</span>
        </div>
        <h1 class="font-bold text-lg" contenteditable="true">Goodlanding (Wild, Rough, Withered)</h1>
      </header>
      <div class="poi__notes" contenteditable="true">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur tempora suscipit aperiam</p>
      </div>
    </article>
    <article class="poi mb-2">
      <header class="flex items-center mb-1">
        <div
          class="poi__number bg-gray-100 font-display text-lg w-6 h-6 mr-2 flex items-center justify-center border-gray-800 border rounded-full"
        >
          <span class="leading-none">2</span>
        </div>
        <h1 class="font-bold text-lg" contenteditable="true">Qui eum quod fugit corrupti.</h1>
      </header>
      <div class="poi__notes" contenteditable="true">
        <p>Minima ab deserunt praesentium cumque nulla voluptate vitae ullam. Aut dolor ullam commodi qui odio sunt quis vitae.</p>
      </div>
    </article>
  </ReferenceSection>
</template>

<script>
import ReferenceSection from "~/components/ReferenceSection";
import AddIcon from "~/assets/icons/add.svg";

export default {
  components: {
    AddIcon,
    ReferenceSection
  }
};
</script>

<style scoped>
</style>
