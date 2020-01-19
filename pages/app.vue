<template>
  <div class="flex h-screen flex-col lg:flex-row overflow-hidden">
    <main
      class="flex-1 bg-gray-100 order-2 lg:flex flex-col items-center"
      :class="[activeView === 'log' ? 'flex' : 'hidden']"
    >
      <transition-group
        ref="activityLog"
        tag="section"
        name="activity-log-transition"
        @enter="logEnter"
        enter-active-class="animated fast fadeInUp"
        leave-active-class="animated fast fadeOut"
        class="activity-log flex-auto h-0 overflow-y-scroll p-4 max-w-xl border-b border-gray-400"
        style="box-shadow: inset 0 -20px 20px -28px #0000004d, inset 0 20px 20px -28px #0000004d"
      >
        <component v-for="log in logs" :is="log.logType" :key="log.uuid" v-bind="log.data"></component>
      </transition-group>
      <section class="flex-none w-full max-w-xl p-2">
        <DiceRoller/>
        <LogInput/>
      </section>
    </main>
    <aside
      class="flex-1 lg:block lg:flex-initial lg:max-w-sm bg-gray-200 order-1 p-2 overflow-y-scroll"
      :class="{'hidden': activeView !== 'stats'}"
    >
      <h1
        class="font-display text-3xl mb-1"
        contenteditable="true"
        @input="$store.commit('character/updateName', $event.target.innerText)"
      >Character Name</h1>
      <div class="main-stats bg-gray-300 -mx-2 mb-3 p-3 pb-4 flex justify-around items-start">
        <div class="main-stat main-stat--edge flex flex-col items-center">
          <div class="main-stat__label uppercase text-sm tracking-wide">Edge</div>
          <Editable
            class="main-stat__value font-display text-2xl leading-none"
            :content.sync="this.$store.state.character.stats.edge"
          ></Editable>
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
      class="flex-1 lg:block lg:flex-initial lg:max-w-sm bg-gray-200 order-3 overflow-y-scroll"
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
    <nav class="mobile-menu flex-none flex justify-center order-4 lg:hidden bg-gray-600 text-white">
      <div class="mobile-menu__wrapper max-w-xs w-full flex">
        <button
          class="flex flex-1 flex-col items-center py-2 px-4"
          @click="activeView = 'stats'"
          :class="{'bg-gray-500': activeView === 'stats'}"
        >
          <PersonIcon class="w-6 h-6 fill-current"/>
          <span class="uppercase text-xs tracking-wider leading-none">Stats</span>
        </button>
        <button
          class="flex flex-1 flex-col items-center py-2 px-4"
          @click="activeView = 'log'"
          :class="{'bg-gray-500': activeView === 'log'}"
        >
          <MessagesIcon class="w-6 h-6 fill-current"/>
          <span class="uppercase text-xs tracking-wider leading-none">Log</span>
        </button>
        <button
          class="flex flex-1 flex-col items-center py-2 px-4"
          @click="activeView = 'reference'"
          :class="{'bg-gray-500': activeView === 'reference'}"
        >
          <BookIcon class="w-6 h-6 fill-current"/>
          <span class="uppercase text-xs tracking-wider leading-none">Reference</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import Editable from "~/components/Editable.vue";
import TextLogItem from "~/components/TextLogItem.vue";
import MetaLogItem from "~/components/MetaLogItem.vue";
import LogInput from "~/components/LogInput.vue";
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
import PersonIcon from "~/assets/icons/person.svg";
import MessagesIcon from "~/assets/icons/messages.svg";
import BookIcon from "~/assets/icons/book.svg";

export default {
  name: "App",
  components: {
    Editable,
    TextLogItem,
    MetaLogItem,
    LogInput,
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
    PersonIcon,
    MessagesIcon,
    BookIcon,
  },
  data() {
    return {
      activeView: "log",
    };
  },
  computed: {
    logs() {
      return this.$store.state.activityLog.list;
    },
  },
  methods: {
    logEnter(el, done) {
      // some dumb math here:
      // When a new log is added I want to scroll to the bottom of the log
      // BUT the bottom will shift because of the entrance transition
      // So I want to scroll down to what will be the bottom eventually
      // This calculation assumes the animated element starts out
      // at twice its normal height
      this.$refs.activityLog.$el.scrollTop =
        this.$refs.activityLog.$el.scrollHeight -
        this.$refs.activityLog.$el.clientHeight -
        el.offsetHeight;
    },
  },
};
</script>

<style scoped>
/* .main-editor {

 } */
/* .mobile-menu .btn-active {
  @apply ;
} */
</style>
