<template>
  <article class="poi group mb-2 pb-2 border-b border-gray-400 relative">
    <header class="flex items-center mb-1">
      <div
        class="poi__number bg-gray-100 font-display text-lg w-6 h-6 mr-2 flex items-center justify-center border-gray-800 border rounded-full"
      >
        <span class="leading-none">{{ index + 1 }}</span>
      </div>
      <h1
        class="font-bold text-lg"
        contenteditable="true"
        ref="title"
        @input="updatePOITitle"
      ></h1>
    </header>
    <div
      class="poi__notes"
      contenteditable="true"
      ref="description"
      @input="updatePOIDescription"
    ></div>
    <div
      class="poi__meta absolute bottom-0 right-0 bg-gray-200 flex flex-row items-end overflow-hidden md:hidden md:group-hover:flex"
      :class="{ expanded: menuExpanded }"
    >
      <button
        @click="menuExpanded = !menuExpanded"
        class="py-1 px-2 order-last flex gap-1 items-center"
      >
        <span class="sr-only">More</span>
        <SvgoMoreMenu
          class="text-[1.25rem] text-gray-500"
        />
      </button>

      <button
        @click="remove(index)"
        class="py-1 px-2 flex gap-1 items-center"
        :class="{ hidden: !menuExpanded }"
      >
        <span class="leading-0">Delete</span>
        <SvgoDelete
          class="text-[1.25rem] text-gray-500"
        />
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  index: number,
  title: String,
  description: String,
}>()

const emit = defineEmits(['delete-poi'])

const mapStore = useMapStore()

const menuExpanded = ref(false)
const title = ref(null)
const description = ref(null)

onMounted(() => {
  title.value.innerText = props.title;
  description.value.innerHTML = props.description;
})

function remove(index) {
  menuExpanded.value = false;
  emit('delete-poi');
  mapStore.removePOI(index);
}

function updatePOITitle(event) {
  mapStore.updatePOITitle({
    index: props.index,
    newTitle: event.target.innerText,
  })
}

function updatePOIDescription(event) {
  mapStore.updatePOIDescription({
    index: props.index,
    newDescription: event.target.innerHTML,
  })
}
</script>

<style scoped>
.poi__meta {
  height: 2rem;
  width: 2rem;
}
.poi__meta.expanded {
  height: auto;
  width: auto;
}
</style>
