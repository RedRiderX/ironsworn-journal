<template>
  <section class="mb-1">
    <header class="flex justify-between items-center mb-1">
      <h1 class="text-lg font-bold">{{ title }}</h1>
      <slot name="headerExtra"></slot>

      <button @click="$emit('add-article')">
        <!-- <button @click="handleAdd"> -->
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
    AddIcon,
  },
  props: {
    title: String,
  },
  // methods: {
  //   handleAdd() {
  //     console.log("add-article");
  //   },
  // },
};
</script>