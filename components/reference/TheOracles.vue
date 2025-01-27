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

<script setup lang="ts">
import { ActionOracle, LocationOracle, RegionOracle, ThemeOracle } from '~/utils';

// each oracle needs a name, description, and roll function
const oracles = ref([ActionOracle, ThemeOracle, RegionOracle, LocationOracle])
const searchTerm = ref("")
const activityLogStore = useActivityLogStore()

const filteredOraclesList = computed(() => {
  return oracles.value.filter((oracle) => {
    return oracle.name.toLowerCase().includes(searchTerm.value);
  });
})

function commitRoll(oracleRollHandler) {
  activityLogStore.addOracleLog(oracleRollHandler());
}
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
