<template>
  <CharacterSection
    class="vows"
    title="Vows"
    @add-article="activityLogStore.addVow()"
  >
    <CharacterArticle class="vow" v-for="vow in characterVowsStore.list" :key="vow.uuid">
      <template #title>{{ vow.name }}</template>
      <template #subtitle>{{ vow.rank }} Vow</template>
      <ProgressTrack class="-mx-2" :progress="vow.progress" :rank="vow.rank" />
      <div class="vow__notes">
        <h3 class="vow-notes__title font-bold uppercase text-sm">Notes</h3>
        <div
          class="vow-notes__content"
          contenteditable="true"
          v-html="vow.notes"
          @input="
            characterVowsStore.updateNotes({
              uuid: vow.uuid,
              value: $event.target.innerHTML,
            })
          "
        ></div>
      </div>
      <div class="vow__actions mt-2">
        <button
          class="vow-action border border-gray-600 font-bold uppercase text-sm rounded py-1 px-4"
        >
          Mark Progress
        </button>
        <button
          class="vow-action border border-gray-600 font-bold uppercase text-sm rounded py-1 px-4"
        >
          Clear Progress
        </button>
        <button
          class="vow-action border border-gray-600 font-bold uppercase text-sm rounded py-1 px-4"
        >
          Change Rank
        </button>
        <button
          class="vow-action border border-red-600 font-bold uppercase text-sm rounded py-1 px-4"
          @click="characterVowsStore.remove(vow.uuid)"
        >
          Delete Vow
        </button>
      </div>
    </CharacterArticle>
  </CharacterSection>
</template>

<script setup lang="ts">
const activityLogStore = useActivityLogStore()
const characterVowsStore = useCharacterVowsStore()
// addVow() {
//   console.log("add article handled");
//   this.$store.commit("activityLog/addVow");
// },
// toTitleCase(str) {
//   return str.replace(/\w\S*/g, function(txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// },
</script>

<style scoped>
</style>
