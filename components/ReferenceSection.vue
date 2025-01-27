<template>
  <section
    class="reference-section p-2 border-b-4 border-gray-100"
    :class="{ collapsed: isCollapsed }"
  >
    <header
      class="sticky z-10 top-0 bg-gray-200 flex justify-between items-center mb-1"
      @click="isCollapsed = !isCollapsed"
    >
      <h1 class="text-2xl font-bold leading-normal">{{ title }}</h1>
      <slot name="headerExtra"></slot>
      <button class="p-1">
        <SvgoExpandMore v-show="isCollapsed" />
        <SvgoExpandLess v-show="!isCollapsed" />
      </button>
    </header>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
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
</style>
