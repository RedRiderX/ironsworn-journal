<template>
  <ReferenceSection class="oracles" title="Oracles">
    <input
      class="border-2 border-gray-300 bg-white mb-2 px-5 rounded-lg text-sm focus:outline-none w-full leading-loose inline-block"
      type="search"
      placeholder="Search"
      v-model="searchTerm"
    />

    <article
      class="oracle oracle--action pb-2 border-b border-gray-600 mb-2"
      v-for="oracle in filteredOraclesList"
      :key="oracle.name"
    >
      <header class="mb-1">
        <h1 class="font-bold font-display font-xl uppercase">
          {{ oracle.name }}
        </h1>
      </header>

      <div class="oracle__description mb-1" v-html="oracle.description"></div>
      <div class="oracle__rolls">
        <BaseButton
          @click="commitRoll(oracle.roll)"
          :label="'Roll ' + oracle.name"
          icon="RollIcon"
        />
      </div>
    </article>
  </ReferenceSection>
</template>

<script>
// import debounce from 'lodash.debounce';
import ReferenceSection from "~/components/ReferenceSection";
import ActionOracle from "~/plugins/oracles/action.js";
import ThemeOracle from "~/plugins/oracles/theme.js";
import RegionOracle from "~/plugins/oracles/region.js";
import LocationOracle from "~/plugins/oracles/location.js";
import BaseButton from "~/components/BaseButton";

export default {
  components: {
    ReferenceSection,
    BaseButton,
  },
  data() {
    return {
      // each oracle needs a name, description, and roll function
      oracles: [ActionOracle, ThemeOracle, RegionOracle, LocationOracle],
      searchTerm: "",
    };
  },
  computed: {
    filteredOraclesList() {
      return this.oracles.filter((oracle) => {
        return oracle.name.toLowerCase().includes(this.searchTerm);
      });
    },
  },
  methods: {
    commitRoll(oracleRollHandler) {
      this.$store.commit("activityLog/addOracleLog", oracleRollHandler());
    },
  },
};
</script>

<style lang="postcss">
.oracle__description {
  & * + * {
    @apply mt-2;
  }

  & blockquote {
    @apply border-l-2 border-gray-500 border-solid p-3 bg-gray-100;
  }
}
</style>
