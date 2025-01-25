<template>
  <div class="flex h-screen flex-col lg:flex-row overflow-hidden">
    <main
      class="flex-1 bg-gray-100 order-2 lg:flex flex-col items-center"
      :class="[activeView === 'log' ? 'flex' : 'hidden']"
    >
      <TheActivityLog />
      <section class="flex-none w-full max-w-xl p-2">
        <DiceRoller />
        <!-- <LogInput /> -->
      </section>
    </main>
    <aside
      class="flex-1 lg:block lg:flex-initial lg:max-w-sm bg-gray-200 order-1 p-2 overflow-y-scroll"
      :class="{ hidden: activeView !== 'stats' }"
    >
      <h1
        class="font-display text-3xl mb-1"
        contenteditable="true"
        @blur="characterStore.updateName(($event.target as HTMLElement).innerText)"
      >
        {{ characterStore.name }}
      </h1>
      <TheMainStats />
      <TheResourceStats />
      <TheMomentumStats />
      <TheDebilities />
      <TheVows />
      <TheAssets />
    </aside>
    <aside
      class="flex-1 lg:block lg:flex-initial lg:max-w-sm bg-gray-200 order-3 overflow-y-scroll"
      :class="{ hidden: activeView !== 'reference' }"
    >
      <!-- <TheMap /> -->
      <TheWorld />
      <TheMoves />
      <!-- <TheBonds /> -->
      <!-- <TheOracles /> -->
      <TheRules />
      <TheMusic />
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
          <SvgoPerson class="w-6 h-6 fill-current" />
          <span class="uppercase text-xs tracking-wider leading-none"
            >Stats</span
          >
        </button>
        <button
          class="flex flex-1 flex-col items-center py-2 px-4"
          @click="activeView = 'log'"
          :class="{ 'bg-gray-500': activeView === 'log' }"
        >
          <SvgoMessages class="w-6 h-6 fill-current" />
          <span class="uppercase text-xs tracking-wider leading-none">Log</span>
        </button>
        <button
          class="flex flex-1 flex-col items-center py-2 px-4"
          @click="activeView = 'reference'"
          :class="{ 'bg-gray-500': activeView === 'reference' }"
        >
          <SvgoBook class="w-6 h-6 fill-current" />
          <span class="uppercase text-xs tracking-wider leading-none"
            >Reference</span
          >
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const activityLogStore = useActivityLogStore()
const characterStore = useCharacterStore()
const activeView = ref("log");
const { logsCount } = storeToRefs(activityLogStore)

watch(logsCount, () => {
  activeView.value = "log";
});
</script>

<style scoped>
/* .main-editor {

 } */
/* .mobile-menu .btn-active {
  @apply ;
} */
</style>
