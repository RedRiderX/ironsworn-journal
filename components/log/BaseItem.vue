<template>
  <article class="log-item group py-4 relative border-t border-gray-400">
    <slot></slot>
    <div
      class="log-item__meta absolute top-0 right-0 bg-gray-200 flex flex-col items-end overflow-hidden md:hidden md:group-hover:flex"
      :class="{expanded: menuExpanded}"
    >
      <button @click="menuExpanded = !menuExpanded" class="py-1 px-2 flex gap-1 items-center">
        <span class="sr-only">More</span>
        <SvgoMoreMenu class="text-[1.25rem] text-gray-500"/>
      </button>
      <button v-if="canEdit" @click="action('edit')" class="py-1 px-2 flex gap-1 items-center">
        <span class="leading-0">Edit</span>
        <SvgoEdit class="text-[1.25rem] text-gray-500"/>
      </button>
      <button v-if="canReroll" @click="action('reroll')" class="py-1 px-2 flex gap-1 items-center">
        <span class="leading-0">Reroll</span>
        <SvgoDie class="text-[1.25rem] text-gray-500"/>
      </button>
      <button v-if="canDelete" @click="remove" class="py-1 px-2 flex gap-1 items-center">
        <span class="leading-0">Delete</span>
        <SvgoDelete class="text-[1.25rem] text-gray-500"/>
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  uuid: String,
  canEdit: Boolean,
  canReroll: Boolean,
  canDelete: Boolean,
})
const emit = defineEmits(['edit-log', 'reroll-log', 'delete-log'])
const activityLogStore = useActivityLogStore()

const menuExpanded = ref(false)

function action(actionType: string) {
  menuExpanded.value = false;
  emit(<'edit-log' | 'reroll-log'>(`${actionType}-log`));
}

function remove() {
  menuExpanded.value = false;
  emit(`delete-log`);
  activityLogStore.removeLog(props.uuid);
}
</script>

<style scoped>
.log-item__meta {
  height: 2rem;
  width: 2rem;
}
.log-item__meta.expanded {
  height: auto;
  width: auto;
}
</style>
