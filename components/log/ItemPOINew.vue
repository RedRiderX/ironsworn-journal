<template>
  <BaseItem class="log-item--meta" canDelete :uuid="uuid">
    <div class="log-item__wrapper mx-auto">
      <div class="expanded-view" v-show="!collapsed">
        <h1 class="text-xl font-display text-center mb-2">New Location</h1>
        <div class="form-details bg-gray-300 pt-3 px-4 pb-1 mb-3">
          <div class="mb-3">
            <label class="block font-bold mb-1" :for="`new-poi-title_${uuid}`"
              >Title</label
            >
            <input
              :id="`new-poi-title_${uuid}`"
              class="bg-white border border-gray-400 appearance-none w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black"
              type="text"
              placeholder="Goodlanding (Wild, Rough, Withered)"
              v-model="title"
            />
          </div>
          <div class="mb-3">
            <label
              class="block font-bold mb-1"
              :for="`new-poi-description_${uuid}`"
              >Description</label
            >
            <textarea
              :id="`new-poi-description_${uuid}`"
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
            :poi="mapStore.poi"
            @update-poi-position="setPOIPosition"
          />
        </div>
        <div class="form-actions">
          <BaseButton @click="makePOI" label="Add Location" icon="SvgoDie" />
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
  </BaseItem>
</template>

<script setup lang="ts">
const props = defineProps({
  uuid: String
})

const activityLogStore = useActivityLogStore()
const mapStore = useMapStore()

// Get initial state from store
let initialState = activityLogStore.getLog(props.uuid).data
const title = ref(initialState.title)
const description = ref(initialState.description)
const collapsed = ref(initialState.collapsed)
const x = ref(null)
const y = ref(null)

function makePOI() {
  mapStore.addPOI({
    x: x.value,
    y: y.value,
    title: title.value,
    description: description.value,
  })

  // And then collapse it I guess?
  collapsed.value = true;
  activityLogStore.updateNewPOI({
    uuid: props.uuid,
    title: title.value,
    description: description.value,
    collapsed: true,
  });
}

function setPOIPosition(newPosX, newPosY) {
  x.value = newPosX;
  y.value = newPosY;
}
</script>