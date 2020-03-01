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
        <ExpandIcon v-show="isCollapsed"/>
        <CollapseIcon v-show="!isCollapsed"/>
      </button>
    </header>
    <slot></slot>
  </article>
</template>

<script>
import ExpandIcon from "~/assets/icons/expand_more.svg";
import CollapseIcon from "~/assets/icons/expand_less.svg";

export default {
  components: {
    CollapseIcon,
    ExpandIcon,
  },
  props: {
    title: String,
    hideSubtitle: Boolean,
  },
  data() {
    return {
      isCollapsed: true,
    };
  },
};
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
