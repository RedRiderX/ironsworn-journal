<template>
  <section class="mb-3">
    <header class="flex justify-between items-center mb-1">
      <h1 class="text-lg font-bold">{{ title }}</h1>
      <slot name="headerExtra"></slot>

      <button class>
        <span class="align-middle leading-none">Add</span>
        <AddIcon class="inline-block align-middle"/>
      </button>
    </header>
    <slot></slot>
  </section>
</template>

<script>
import AddIcon from "~/assets/icons/add.svg";

export default {
  components: {
    AddIcon
  },
  props: {
    title: String
  }
};
</script>

<style scoped>
</style>
