<template>
  <LogItem class="log-item--meta" canDelete :uuid="uuid">
    <div class="log-item__wrapper mx-auto">
      <div class="expanded-view" v-show="!collapsed">
        <h1 class="text-xl font-display text-center mb-2">New Location</h1>
        <div class="form-details bg-gray-300 pt-3 px-4 pb-1 mb-3">
          <div class="mb-3">
            <label class="block font-bold mb-1" :for="'new-poi-title_'.uuid"
              >Title</label
            >
            <input
              :id="'new-poi-title_'.uuid"
              class="bg-white border border-gray-400 appearance-none w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black"
              type="text"
              placeholder="Goodlanding (Wild, Rough, Withered)"
              v-model="title"
            />
          </div>
          <div class="mb-3">
            <label
              class="block font-bold mb-1"
              :for="'new-poi-description_'.uuid"
              >Description</label
            >
            <textarea
              :id="'new-poi-description_'.uuid"
              class="bg-white border border-gray-400 appearance-none w-full p-2 focus:outline-none focus:bg-white focus:border-black"
              v-model="description"
              placeholder="Enter Notes Here"
            ></textarea>
          </div>

          <label class="block font-bold mb-1"
            >Map Pin (Click the map to add)</label
          >
          <MapCanvas
            canPreview
            :poi="$store.state.map.poi"
            @update-poi-position="setPOIPosition"
          />
        </div>
        <div class="form-actions">
          <BaseButton @click="makePOI" label="Add Location" icon="RollIcon" />
        </div>
      </div>
      <div class="collapsed-view" v-show="collapsed">
        <h1 class="text-lg font-display text-center">
          New Location - {{ title }}
          <br />
          {{ description }}
        </h1>
      </div>
    </div>
  </LogItem>
</template>

<script>
import LogItem from "~/components/log/BaseItem";
import BaseButton from "~/components/BaseButton";
import MapCanvas from "~/components/editor/MapCanvas";

export default {
  components: {
    LogItem,
    BaseButton,
    MapCanvas,
  },
  props: {
    uuid: String,
  },
  data() {
    // Get initial state from store
    let initialState = this.$store.getters["activityLog/getLog"](this.uuid)
      .data;

    return {
      title: initialState.title,
      description: initialState.description,
      collapsed: initialState.collapsed,
      x: null,
      y: null,
    };
  },
  methods: {
    makePOI() {
      this.$store.commit("map/addPOI", {
        x: this.x,
        y: this.y,
        title: this.title,
        description: this.description,
      });
      // And then collapse it I guess?
      this.collapsed = true;
      this.$store.commit("activityLog/updateNewPOI", {
        uuid: this.uuid,
        title: this.title,
        description: this.description,
        collapsed: true,
      });
    },
    setPOIPosition(newPosX, newPosY) {
      this.x = newPosX;
      this.y = newPosY;
    },
  },
};
</script>