<template>
  <div class="flex h-screen flex-col md:flex-row">
    <main
      class="flex-1 bg-gray-100 order-2 md:flex flex-col items-center"
      style="height: calc(100vh - 3.5rem)"
      :class="[activeView === 'log' ? 'flex' : 'hidden']"
    >
      <section class="activity-log flex-shrink overflow-y-auto p-4 max-w-2xl">
        <TextLogItem/>
        <hr>
        <MetaLogItem/>
      </section>
      <section class="w-full max-w-xl my-4 mx-2">
        <DiceRoller/>
        <div class="log-input flex flex-col">
          <BasicEditor class="bg-white border border-gray-400 p-2 mb-2" style="min-height: 7rem;"/>
          <button
            class="bg-gray-600 text-white font-bold uppercase text-sm rounded py-2 px-4 self-center"
          >Save to Journal</button>
        </div>
      </section>
    </main>
    <aside
      class="flex-1 md:block md:flex-initial md:max-w-sm bg-gray-200 order-1 p-2 overflow-y-scroll"
      :class="{'hidden': activeView !== 'stats'}"
    >
      <h1 class="font-display text-3xl mb-1" contenteditable="true">Character Name</h1>
      <div class="main-stats bg-gray-300 -mx-2 mb-3 p-3 pb-4 flex justify-around items-start">
        <div class="main-stat main-stat--edge flex flex-col items-center">
          <div class="main-stat__label uppercase text-sm tracking-wide">Edge</div>
          <div class="main-stat__value font-display text-2xl leading-none">1</div>
        </div>
        <div class="main-stat main-stat--heart flex flex-col items-center">
          <div class="main-stat__label uppercase text-sm tracking-wide">Heart</div>
          <div class="main-stat__value font-display text-2xl leading-none">2</div>
        </div>
        <div class="main-stat main-stat--iron flex flex-col items-center">
          <div class="main-stat__label uppercase text-sm tracking-wide">Iron</div>
          <div class="main-stat__value font-display text-2xl leading-none">3</div>
        </div>
        <div class="main-stat main-stat--shadow flex flex-col items-center">
          <div class="main-stat__label uppercase text-sm tracking-wide">Shadow</div>
          <div class="main-stat__value font-display text-2xl leading-none">1</div>
        </div>
        <div class="main-stat main-stat--wits flex flex-col items-center">
          <div class="main-stat__label uppercase text-sm tracking-wide">Wits</div>
          <div class="main-stat__value font-display text-2xl leading-none">2</div>
        </div>
      </div>
      <div class="resource-stats flex justify-around">
        <div
          class="resource-stat resource-stat--health w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Health</div>
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">+5</div>
        </div>
        <div
          class="resource-spirit resource-stat--health w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Spirit</div>
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">+3</div>
        </div>
        <div
          class="resource-supply resource-stat--health w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Supply</div>
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">+2</div>
        </div>
      </div>
      <h2 class="text-center -mb-3 uppercase">
        <span class="inline-block px-2 bg-gray-200">Momentum</span>
      </h2>
      <div class="momentum-stats flex justify-around border-gray-500 border pt-1 mb-3">
        <div
          class="momentum-stat momentum-stat--total w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">+7</div>
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Total</div>
        </div>
        <div
          class="momentum-stat momentum-stat--max w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">9</div>
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Max</div>
        </div>
        <div
          class="momentum-stat momentum-stat--reset w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">1</div>
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Reset</div>
        </div>
      </div>
      <Debilities/>
      <Vows/>
      <Assets/>
    </aside>
    <aside
      class="flex-1 md:block md:flex-initial md:max-w-sm bg-gray-200 order-3 overflow-y-scroll"
      :class="{'hidden': activeView !== 'reference'}"
    >
      <Map/>
      <YourWorld/>
      <Moves/>
      <Bonds/>
      <Oracles/>
      <Rules/>
      <Music/>
    </aside>
    <nav class="mobile-menu flex justify-around order-4 md:hidden">
      <button class="flex flex-col items-center p-2" @click="activeView = 'stats'">
        <PersonIcon class="w-6 h-6 fill-current"/>
        <span class="uppercase text-xs tracking-wider leading-none">Stats</span>
      </button>
      <button class="flex flex-col items-center p-2" @click="activeView = 'log'">
        <MessagesIcon class="w-6 h-6 fill-current"/>
        <span class="uppercase text-xs tracking-wider leading-none">Log</span>
      </button>
      <button class="flex flex-col items-center p-2" @click="activeView = 'reference'">
        <BookIcon class="w-6 h-6 fill-current"/>
        <span class="uppercase text-xs tracking-wider leading-none">Reference</span>
      </button>
    </nav>
  </div>
</template>

<script>
import TextLogItem from "~/components/TextLogItem.vue";
import MetaLogItem from "~/components/MetaLogItem.vue";
import Debilities from "~/components/Debilities.vue";
import Vows from "~/components/Vows.vue";
import Assets from "~/components/Assets.vue";
import Map from "~/components/Map.vue";
import YourWorld from "~/components/YourWorld.vue";
import Moves from "~/components/Moves.vue";
import Bonds from "~/components/Bonds.vue";
import Oracles from "~/components/Oracles.vue";
import Rules from "~/components/Rules.vue";
import Music from "~/components/Music.vue";
import DiceRoller from "~/components/DiceRoller.vue";
import BasicEditor from "~/components/BasicEditor.vue";
import PersonIcon from "~/assets/icons/person.svg";
import MessagesIcon from "~/assets/icons/messages.svg";
import BookIcon from "~/assets/icons/book.svg";

export default {
  name: "App",
  components: {
    TextLogItem,
    MetaLogItem,
    Debilities,
    Vows,
    Assets,
    Map,
    YourWorld,
    Moves,
    Bonds,
    Oracles,
    Rules,
    Music,
    DiceRoller,
    BasicEditor,
    PersonIcon,
    MessagesIcon,
    BookIcon
  },
  data() {
    return {
      activeView: "log"
    };
  }
};
</script>

<style scoped>
</style>
