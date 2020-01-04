<template>
  <CharacterSection class="vows" title="Vows">
    <CharacterArticle class="vow">
      <template v-slot:title>Found the City of Hope</template>
      <template v-slot:subtitle>Epic Vow</template>
      <ProgressTrack class="-mx-2"/>
      <div class="vow__notes">
        <h3 class="vow-notes__title font-bold uppercase text-sm">Notes</h3>
        <div class="vow-notes__content" contenteditable="true">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur tempora suscipit aperiam</p>
        </div>
      </div>
    </CharacterArticle>
  </CharacterSection>
</template>

<script>
import CharacterSection from "~/components/CharacterSection";
import CharacterArticle from "~/components/CharacterArticle";
import ProgressTrack from "~/components/ProgressTrack.vue";

export default {
  components: {
    CharacterSection,
    CharacterArticle,
    ProgressTrack
  }
};
</script>

<style scoped>
</style>
