<template>
  <CharacterSection class="vows" title="Vows" @add-article="$store.commit('activityLog/addVow')">
    <CharacterArticle class="vow" v-for="vow in vows" :key="vow.uuid">
      <template #title>{{ vow.name }}</template>
      <template #subtitle>{{ vow.rank }} Vow</template>
      <ProgressTrack class="-mx-2" :progress="vow.progress"/>
      <div class="vow__notes">
        <h3 class="vow-notes__title font-bold uppercase text-sm">Notes</h3>
        <div
          class="vow-notes__content"
          contenteditable="true"
          v-html="vow.notes"
          @input="$store.commit('character/vows/updateNotes', {uuid: vow.uuid, value: $event.target.innerHTML})"
        ></div>
      </div>
      <div class="vow__actions mt-2">
        <button
          class="vow-action border border-gray-600 font-bold uppercase text-sm rounded py-1 px-4"
        >Mark Progress</button>
        <button
          class="vow-action border border-gray-600 font-bold uppercase text-sm rounded py-1 px-4"
        >Clear Progress</button>
      </div>
    </CharacterArticle>
  </CharacterSection>
</template>

<script>
import { mapGetters } from "vuex";
import CharacterSection from "~/components/character/CharacterSection";
import CharacterArticle from "~/components/character/CharacterArticle";
import ProgressTrack from "~/components/ProgressTrack.vue";

export default {
  components: {
    CharacterSection,
    CharacterArticle,
    ProgressTrack,
  },
  computed: mapGetters({
    vows: "character/vows/get",
  }),
  methods: {
    // addVow() {
    //   console.log("add article handled");
    //   this.$store.commit("activityLog/addVow");
    // },
    // toTitleCase(str) {
    //   return str.replace(/\w\S*/g, function(txt) {
    //     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    //   });
    // },
  },
};
</script>

<style scoped>
</style>
