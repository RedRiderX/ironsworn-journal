<template>
  <LogItem class="log-item--meta" canDelete :uuid="uuid">
    <div class="log-item__wrapper w-80 mx-auto">
      <h1 class="text-lg font-display text-center">
        {{ name }} Oracle Consulted
      </h1>
      <div class="p-2 bg-gray-200 my-2">
        <div class="flex items-center text-2xl">
          <div
            class="flex-auto w-1/2 text-xl uppercase text-right p-1 font-bold leading-4"
          >
            Result
          </div>
          <div class="flex-auto w-1/2 text-left p-1">{{ result }}</div>
        </div>
        <div class="text-center my-2 flex items-center justify-center">
          <span class="mx-2">Is the path unclear?</span>
          <button
            class="bg-gray-600 py-1 px-2 text-white font-bold uppercase text-sm rounded self-center flex items-center"
            @click="showAlternateOracles = !showAlternateOracles"
          >
            <span class="leading-none mx-1 inline-block">Consider...</span>
          </button>
        </div>
        <div class="alternate-oracles" v-show="showAlternateOracles">
          <div class="flex items-center">
            <div
              class="flex-auto w-1/2 text-sm font-bold uppercase text-right p-1"
            >
              Oracle Ascendant
            </div>
            <div class="flex-auto w-1/2 text-left p-1">Result one up</div>
          </div>
          <div class="flex items-center">
            <div
              class="flex-auto w-1/2 text-sm font-bold uppercase text-right p-1"
            >
              Oracle Descendant
            </div>
            <div class="flex-auto w-1/2 text-left p-1">Result one down</div>
          </div>
          <div class="flex items-center">
            <div
              class="flex-auto w-1/2 text-sm font-bold uppercase text-right p-1"
            >
              Oracle Inverse
            </div>
            <div class="flex-auto w-1/2 text-left p-1">
              Result with dice value reversed
            </div>
          </div>
        </div>
      </div>
    </div>
  </LogItem>
</template>

<script>
import LogItem from "~/components/log/BaseItem";

export default {
  components: {
    LogItem,
  },
  props: {
    uuid: String,
    name: String,
    result: String,
  },
  data: function () {
    return {
      showAlternateOracles: false,
    };
  },
};
</script>
