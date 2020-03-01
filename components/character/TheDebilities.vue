<template>
  <CharacterSection class="debilities" title="Debilities">
    <CharacterArticle class="debility" hideSubtitle>
      <template v-slot:title>Wounded</template>
      <div class="debility__text">
        <p>
          Wounded may be marked when you are at 0 health and fail to
          <em>Endure Harm (page 91)</em>. You are severely injured and need treatment to recover.
        </p>
      </div>
      <div class="debility__actions mt-2">
        <!-- <button
          class="debility-action bg-gray-600 text-white font-bold uppercase text-sm rounded py-1 px-4"
        >Clear Debility</button>-->
        <button
          class="debility-action border border-gray-600 font-bold uppercase text-sm rounded py-1 px-4"
        >Clear Debility</button>
      </div>
    </CharacterArticle>
  </CharacterSection>
</template>

<script>
import CharacterSection from "~/components/character/CharacterSection";
import CharacterArticle from "~/components/character/CharacterArticle";

export default {
  components: {
    CharacterSection,
    CharacterArticle,
  },
};
</script>

<style scoped>
</style>
