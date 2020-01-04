<template>
  <article class="log-item py-4 relative">
    <slot></slot>
    <div class="log-item__meta absolute top-0 right-0 bg-gray-200 flex flex-col items-end">
      <button v-if="canEdit" @click="this.$emit('edit-log')" class="py-1 px-2">
        <span class="align-middle">Edit</span>
        <EditIcon class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"/>
      </button>
      <button v-if="canReroll" @click="this.$emit('reroll-log')" class="py-1 px-2">
        <span class="align-middle">Reroll</span>
        <RerollIcon class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"/>
      </button>
      <button v-if="canDelete" @click="this.$emit('delete-log')" class="py-1 px-2">
        <span class="align-middle">Delete</span>
        <DeleteIcon class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"/>
      </button>
    </div>
  </article>
</template>

<script>
import EditIcon from "~/assets/icons/edit.svg";
import RerollIcon from "~/assets/icons/reroll.svg";
import DeleteIcon from "~/assets/icons/delete.svg";

export default {
  components: {
    EditIcon,
    RerollIcon,
    DeleteIcon
  },
  props: {
    canEdit: Boolean,
    canReroll: Boolean,
    canDelete: Boolean
  }
};
</script>

<style scoped>
</style>
