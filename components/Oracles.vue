<template>
  <ReferenceSection class="oracles" title="Oracles">
    <article class="oracle oracle--action pb-2 border-b border-gray-600 mb-2">
      <header class="mb-1">
        <h1 class="font-bold font-display font-xl uppercase">ACTION</h1>
      </header>
      <div class="oracle__description mb-1">
        <p>Use this table to inspire a discovery, event, character goal, or situation. A roll on this table can be combined with a Theme (see below) to provide an actionand a subject. Then, interpret the result based on the context of the questionand your current situation.</p>
      </div>
      <div class="oracle__rolls">
        <button
          class="oracle-roll bg-gray-600 text-white font-bold uppercase text-sm rounded py-1 px-4"
        >Roll an Action</button>
      </div>
    </article>
    <article class="oracle oracle--theme">
      <header class="mb-1">
        <h1 class="font-bold font-display font-xl uppercase">Theme</h1>
      </header>
      <div class="oracle__description mb-1">
        <p>As with the Action oracle, this is an interpretative table which you can use to answer questions or generate new situations. Combined, the Action and Theme tables provide creative prompts suitable for most situations and questions. In fact, with some creative interpretations, it’s entirely possible to play with only these two tables.</p>
      </div>
      <div class="oracle__rolls">
        <button
          class="oracle-roll bg-gray-600 text-white font-bold uppercase text-sm rounded py-1 px-4"
        >Roll a Theme</button>
      </div>
    </article>
  </ReferenceSection>
</template>

<script>
import ReferenceSection from "~/components/ReferenceSection";

export default {
  components: {
    ReferenceSection
  }
};
</script>

<style scoped>
</style>
