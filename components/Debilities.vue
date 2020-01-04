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
    </CharacterArticle>
  </CharacterSection>
</template>

<script>
import CharacterSection from "~/components/CharacterSection";
import CharacterArticle from "~/components/CharacterArticle";

export default {
  components: {
    CharacterSection,
    CharacterArticle
  }
};
</script>

<style scoped>
</style>
