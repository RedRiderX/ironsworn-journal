<template>
  <article
    class="character-article bg-white border border-gray-500 p-2 mb-2"
    :class="{ collapsed: isCollapsed, 'no-subtitle': hideSubtitle }"
  >
    <header class="flex justify-between mb-2">
      <div class="title-wrapper self-center">
        <h1 class="font-bold text-lg">
          <slot name="title"></slot>
        </h1>
        <h2 v-if="!hideSubtitle" class="subtitle uppercase text-sm leading-none tracking-wide">
          <slot name="subtitle"></slot>
        </h2>
      </div>
      <button @click="isCollapsed = !isCollapsed" class="p-1 self-start">
        <SvgoExpandMore v-show="isCollapsed" class="text-[1.4rem]" />
        <SvgoExpandLess v-show="!isCollapsed" class="text-[1.4rem]" />
      </button>
    </header>
    <slot></slot>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  hideSubtitle: Boolean,
})
const isCollapsed = ref(true)
</script>

<style scoped>
/* .reference-section {

} */
.collapsed {
  height: 3.2rem;
  overflow: hidden;
}

.collapsed .title-wrapper {
  margin-top: -0.25rem;
}
</style>
