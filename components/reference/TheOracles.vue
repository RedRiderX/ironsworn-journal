<template>
  <ReferenceSection class="oracles" title="Oracles">
    <input
      class="border-2 border-gray-300 bg-white mb-2 px-5 rounded-lg text-sm focus:outline-none w-full leading-loose inline-block"
      type="search"
      name="search"
      placeholder="Search"
    />

    <article
      class="oracle oracle--action pb-2 border-b border-gray-600 mb-2"
      v-for="oracle in oracles"
      :key="oracle.name"
    >
      <header class="mb-1">
        <h1 class="font-bold font-display font-xl uppercase">
          {{ oracle.name }}
        </h1>
      </header>

      <div class="oracle__description mb-1" v-html="oracle.description"></div>
      <div class="oracle__rolls">
        <button
          @click="commitRoll(oracle.roll)"
          class="oracle-roll bg-gray-600 text-white font-bold uppercase text-sm rounded py-1 px-4"
        >
          Roll {{ oracle.name }}
        </button>
      </div>
    </article>

    <article class="oracle oracle--action pb-2 border-b border-gray-600 mb-2">
      <header class="mb-1">
        <h1 class="font-bold font-display font-xl uppercase">ACTION</h1>
      </header>

      <div class="oracle__description mb-1">
        <p>
          Use this table to inspire a discovery, event, character goal, or
          situation. A roll on this table can be combined with a Theme (see
          below) to provide an actionand a subject. Then, interpret the result
          based on the context of the questionand your current situation.
        </p>
      </div>
      <div class="oracle__rolls">
        <button
          class="oracle-roll bg-gray-600 text-white font-bold uppercase text-sm rounded py-1 px-4"
        >
          Roll an Action
        </button>
      </div>
    </article>
    <article class="oracle oracle--theme">
      <header class="mb-1">
        <h1 class="font-bold font-display font-xl uppercase">Theme</h1>
      </header>
      <div class="oracle__description mb-1">
        <p>
          As with the Action oracle, this is an interpretative table which you
          can use to answer questions or generate new situations. Combined, the
          Action and Theme tables provide creative prompts suitable for most
          situations and questions. In fact, with some creative interpretations,
          it’s entirely possible to play with only these two tables.
        </p>
      </div>
      <div class="oracle__rolls">
        <button
          class="oracle-roll bg-gray-600 text-white font-bold uppercase text-sm rounded py-1 px-4"
        >
          Roll a Theme
        </button>
      </div>
    </article>
  </ReferenceSection>
</template>

<script>
import ReferenceSection from "~/components/ReferenceSection";
import ActionOracle from "~/plugins/oracles/action.js";

export default {
  components: {
    ReferenceSection,
  },
  data() {
    return {
      // each oracle needs a name, description, and roll function
      oracles: [ActionOracle],
    };
  },
  methods: {
    commitRoll(oracleRollHandler) {
      this.$store.commit("activityLog/addOracleLog", oracleRollHandler());
    },
  },
};
</script>

<style scoped>
</style>
