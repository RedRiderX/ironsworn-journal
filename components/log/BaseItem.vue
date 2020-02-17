<template>
  <article class="log-item group py-4 relative border-t border-gray-400">
    <slot></slot>
    <div
      class="log-item__meta absolute top-0 right-0 bg-gray-200 flex flex-col items-end overflow-hidden md:hidden md:group-hover:flex"
      :class="{expanded: menuExpanded}"
    >
      <button @click="menuExpanded = !menuExpanded" class="py-1 px-2">
        <span class="sr-only">More</span>
        <MoreIcon class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"/>
      </button>
      <button v-if="canEdit" @click="action('edit')" class="py-1 px-2">
        <span class="align-middle">Edit</span>
        <EditIcon class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"/>
      </button>
      <button v-if="canReroll" @click="action('reroll')" class="py-1 px-2">
        <span class="align-middle">Reroll</span>
        <RerollIcon class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"/>
      </button>
      <button v-if="canDelete" @click="remove" class="py-1 px-2">
        <span class="align-middle">Delete</span>
        <DeleteIcon class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"/>
      </button>
    </div>
  </article>
</template>

<script>
import MoreIcon from "~/assets/icons/more-menu.svg";
import EditIcon from "~/assets/icons/edit.svg";
import RerollIcon from "~/assets/icons/die.svg";
import DeleteIcon from "~/assets/icons/delete.svg";

export default {
  components: {
    EditIcon,
    RerollIcon,
    DeleteIcon,
    MoreIcon,
  },
  props: {
    uuid: String,
    canEdit: Boolean,
    canReroll: Boolean,
    canDelete: Boolean,
  },
  data() {
    return {
      menuExpanded: false,
    };
  },
  methods: {
    action(actionType) {
      this.menuExpanded = false;
      this.$emit(`${actionType}-log`);
    },
    remove() {
      this.menuExpanded = false;
      this.$emit(`delete-log`);
      this.$store.commit("activityLog/removeLog", this.uuid);
    },
  },
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
