<template>
  <CharacterSection class="assets" title="Assets">
    <template v-slot:headerExtra>
      <div class="exp text-sm flex-1 flex justify-center">
        <span class="bg-gray-200 relative px-2">3 EXP</span>
      </div>
    </template>
    <CharacterArticle class="asset">
      <template v-slot:title>
        <span class="asset__name" contenteditable="true">Kodroth</span> - Hawk
      </template>
      <template v-slot:subtitle>Companion</template>
      <div class="asset__description mb-2">
        <p>Your hawk can aid you when it is aloft.</p>
      </div>
      <div class="asset__abilities">
        <div class="asset-ability border-t border-t-gray-500 mt-1 pt-1">
          <label for>
            <input type="checkbox" class="mr-1">
            <strong>Far-seeing:</strong> When you
            <em>Undertake a Journey</em>, or when you
            <em>Resupply</em> by hunting for small game, add +1.
          </label>
        </div>
        <div class="asset-ability border-t border-t-gray-500 mt-1 pt-1">
          <label for>
            <input type="checkbox" class="mr-1">
            <strong>Fierce:</strong> When you
            <em>Secure an Advantage</em> +edge using your hawk to harass and distract your foes, add +1 and take +1 momentum on a hit.
          </label>
        </div>
        <div class="asset-ability border-t border-t-gray-500 mt-1 pt-1">
          <label for>
            <input type="checkbox" class="mr-1">
            <strong>Vigilant:</strong> When you
            <em>Face Danger</em> +wits to detect an approaching threat, or when you
            <em>Enter the Fray</em> +wits against an ambush, add +2.
          </label>
        </div>
      </div>
      <div class="asset__resource-stats resource-stats flex justify-around">
        <div
          class="resource-stat resource-stat--health w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Health</div>
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">+3</div>
        </div>
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
.exp {
  position: relative;
}
.exp:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0.5rem;
  right: 0.5rem;
  border-bottom: 1px solid theme("colors.gray.600");
}
</style>
