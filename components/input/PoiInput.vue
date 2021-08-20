<template>
  <article class="poi group mb-2 pb-2 border-b border-gray-400 relative">
    <header class="flex items-center mb-1">
      <div
        class="poi__number bg-gray-100 font-display text-lg w-6 h-6 mr-2 flex items-center justify-center border-gray-800 border rounded-full"
      >
        <span class="leading-none">{{ index + 1 }}</span>
      </div>
      <h1
        class="font-bold text-lg"
        contenteditable="true"
        ref="title"
        @input="updatePOITitle"
      ></h1>
    </header>
    <div
      class="poi__notes"
      contenteditable="true"
      ref="description"
      @input="updatePOIDescription"
    ></div>
    <div
      class="poi__meta absolute bottom-0 right-0 bg-gray-200 flex flex-row items-end overflow-hidden md:hidden md:group-hover:flex"
      :class="{ expanded: menuExpanded }"
    >
      <button
        @click="menuExpanded = !menuExpanded"
        class="py-1 px-2 order-last"
      >
        <span class="sr-only">More</span>
        <MoreIcon
          class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"
        />
      </button>

      <button
        @click="remove(index)"
        class="py-1 px-2"
        :class="{ hidden: !menuExpanded }"
      >
        <span class="align-middle">Delete</span>
        <DeleteIcon
          class="w-5 h-5 fill-current text-gray-500 inline-block align-middle"
        />
      </button>
    </div>
  </article>
</template>

<script>
import DeleteIcon from "~/assets/icons/delete.svg";
import MoreIcon from "~/assets/icons/more-menu.svg";

export default {
  props: {
    index: Number,
    title: String,
    description: String,
  },
  components: {
    DeleteIcon,
    MoreIcon,
  },
  data: function () {
    return {
      menuExpanded: false,
    };
  },
  mounted() {
    this.$refs.title.innerText = this.title;
    this.$refs.description.innerHTML = this.description;
  },
  methods: {
    remove(index) {
      this.menuExpanded = false;
      this.$emit(`delete-poi`);
      this.$store.commit("map/removePOI", index);
    },
    updatePOITitle: function (event) {
      this.$store.commit("map/updatePOITitle", {
        index: this.index,
        newTitle: event.target.innerText,
      });
    },
    updatePOIDescription: function (event) {
      this.$store.commit("map/updatePOIDescription", {
        index: this.index,
        newDescription: event.target.innerHTML,
      });
    },
  },
};
</script>

<style scoped>
.poi__meta {
  height: 2rem;
  width: 2rem;
}
.poi__meta.expanded {
  height: auto;
  width: auto;
}
</style>
