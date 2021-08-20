<template>
  <div class="flex h-screen flex-col lg:flex-row overflow-hidden">
    <main
      class="flex-1 bg-gray-100 order-2 lg:flex flex-col items-center"
      :class="[activeView === 'log' ? 'flex' : 'hidden']"
    >
      <TheActivityLog />
      <section class="flex-none w-full max-w-xl p-2">
        <DiceRoller />
        <LogInput />
      </section>
    </main>
    <aside
      class="flex-1 lg:block lg:flex-initial lg:max-w-sm bg-gray-200 order-1 p-2 overflow-y-scroll"
      :class="{ hidden: activeView !== 'stats' }"
    >
      <h1
        class="font-display text-3xl mb-1"
        contenteditable="true"
        @blur="$store.commit('character/updateName', $event.target.innerText)"
      >
        {{ this.$store.state.character.name }}
      </h1>
      <TheMainStats />
      <TheResourceStats />
      <TheMomentumStats />
      <TheDebilities />
      <TheVows />
      <Assets />
    </aside>
    <aside
      class="flex-1 lg:block lg:flex-initial lg:max-w-sm bg-gray-200 order-3 overflow-y-scroll"
      :class="{ hidden: activeView !== 'reference' }"
    >
      <Map />
      <YourWorld />
      <Moves />
      <Bonds />
      <Oracles />
      <Rules />
      <Music />
    </aside>
    <nav
      class="mobile-menu flex-none flex justify-center order-4 lg:hidden bg-gray-600 text-white"
    >
      <div class="mobile-menu__wrapper max-w-xs w-full flex">
        <button
          class="flex flex-1 flex-col items-center py-2 px-4"
          @click="activeView = 'stats'"
          :class="{ 'bg-gray-500': activeView === 'stats' }"
        >
          <PersonIcon class="w-6 h-6 fill-current" />
          <span class="uppercase text-xs tracking-wider leading-none"
            >Stats</span
          >
        </button>
        <button
          class="flex flex-1 flex-col items-center py-2 px-4"
          @click="activeView = 'log'"
          :class="{ 'bg-gray-500': activeView === 'log' }"
        >
          <MessagesIcon class="w-6 h-6 fill-current" />
          <span class="uppercase text-xs tracking-wider leading-none">Log</span>
        </button>
        <button
          class="flex flex-1 flex-col items-center py-2 px-4"
          @click="activeView = 'reference'"
          :class="{ 'bg-gray-500': activeView === 'reference' }"
        >
          <BookIcon class="w-6 h-6 fill-current" />
          <span class="uppercase text-xs tracking-wider leading-none"
            >Reference</span
          >
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import TheActivityLog from "~/components/TheActivityLog";
import LogInput from "~/components/editor/LogInput";
import TheMainStats from "~/components/character/TheMainStats";
import TheResourceStats from "~/components/character/TheResourceStats";
import TheMomentumStats from "~/components/character/TheMomentumStats";
import TheDebilities from "~/components/character/TheDebilities";
import TheVows from "~/components/character/TheVows";
import Assets from "~/components/character/TheAssets";
import Map from "~/components/reference/TheMap";
import YourWorld from "~/components/reference/TheWorld";
import Moves from "~/components/reference/TheMoves";
import Bonds from "~/components/reference/TheBonds";
import Oracles from "~/components/reference/TheOracles";
import Rules from "~/components/reference/TheRules";
import Music from "~/components/reference/TheMusic";
import DiceRoller from "~/components/editor/DiceRoller";
import PersonIcon from "~/assets/icons/person.svg";
import MessagesIcon from "~/assets/icons/messages.svg";
import BookIcon from "~/assets/icons/book.svg";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    TheActivityLog,
    TheMainStats,
    TheResourceStats,
    TheMomentumStats,
    LogInput,
    TheDebilities,
    TheVows,
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
  computed: mapGetters({
    logsCount: "activityLog/logsCount",
  }),
  watch: {
    logsCount() {
      this.activeView = "log";
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
