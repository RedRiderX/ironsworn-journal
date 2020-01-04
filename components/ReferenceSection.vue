<template>
  <section
    class="reference-section p-2 border-b-4 border-gray-100"
    :class="{ collapsed: isCollapsed }"
  >
    <header class="sticky top-0 bg-gray-200 flex justify-between items-center mb-1">
      <h1 @click="isCollapsed = !isCollapsed" class="text-2xl font-bold leading-normal">{{ title }}</h1>
      <slot name="headerExtra"></slot>
      <button @click="isCollapsed = !isCollapsed" class="p-1">
        <ExpandIcon v-show="isCollapsed"/>
        <CollapseIcon v-show="!isCollapsed"/>
      </button>
    </header>
    <slot></slot>
  </section>
</template>

<script>
import ExpandIcon from "~/assets/icons/expand_more.svg";
import CollapseIcon from "~/assets/icons/expand_less.svg";

export default {
  components: {
    CollapseIcon,
    ExpandIcon
  },
  props: {
    title: String
  },
  data() {
    return {
      isCollapsed: true
    };
  }
};
</script>

<style scoped>
/* .reference-section {

} */
.collapsed {
  height: 3.2rem;
  overflow: hidden;
}
</style>
