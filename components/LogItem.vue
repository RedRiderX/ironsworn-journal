<template>
  <article class="log-item py-4 relative">
    <slot></slot>
    <div
      class="log-item__meta absolute top-0 right-0 bg-gray-200 flex flex-col items-end overflow-hidden"
      :class="{expanded: menuExpanded}"
    >
      <button @click="menuExpanded = !menuExpanded" class="py-1 px-2">
        <span class="sr-only">More</span>
        <MoreIcon class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"/>
      </button>
      <button v-if="canEdit" @click="$emit('edit-log')" class="py-1 px-2">
        <span class="align-middle">Edit</span>
        <EditIcon class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"/>
      </button>
      <button v-if="canReroll" @click="$emit('reroll-log')" class="py-1 px-2">
        <span class="align-middle">Reroll</span>
        <RerollIcon class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"/>
      </button>
      <button v-if="canDelete" @click="$emit('delete-log')" class="py-1 px-2">
        <span class="align-middle">Delete</span>
        <DeleteIcon class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"/>
      </button>
    </div>
  </article>
</template>

<script>
import MoreIcon from "~/assets/icons/more-menu.svg";
import EditIcon from "~/assets/icons/edit.svg";
import RerollIcon from "~/assets/icons/reroll.svg";
import DeleteIcon from "~/assets/icons/delete.svg";

export default {
  components: {
    EditIcon,
    RerollIcon,
    DeleteIcon,
    MoreIcon
  },
  props: {
    canEdit: Boolean,
    canReroll: Boolean,
    canDelete: Boolean
  },
  data() {
    return {
      menuExpanded: false
    };
  }
};
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
