<template>
  <ReferenceSection class="bonds" title="Bonds">
    <ProgressTrack
      class="-mx-2"
      :progress="characterStore.bonds"
      :rank="'epic'"
    />
    <div class="bonds__actions mt-2 flex gap-1">
      <button
        class="bond-action border border-gray-600 font-bold uppercase text-sm rounded py-1 px-4"
        @click="characterStore.addBond()"
      >
        Mark Bond
      </button>
      <button
        class="bond-action border border-gray-600 font-bold uppercase text-sm rounded py-1 px-4"
        @click="characterStore.removeBond()"
      >
        Clear Bond
      </button>
    </div>
    <article class="bonds_content" contenteditable>
      <h1 class="font-bold text-lg mt-2">
        Bastien the Sailor (Hostile, Armed, Active)
      </h1>
      <p>
        I helped Bastien settle a debt once, though I'm sure he'd never admit to
        needing the help. He still lurks around the docks.
      </p>
      <h1 class="font-bold text-lg mt-2">
        Melia the Artisan (Disfigured, Successful, Cunning)
      </h1>
      <p>
        Whether Melia's warding charms work or not, people certainly pay her
        well for them. She's more then repaid me for the times I've helped her
        find materials in the secret places along the shore.
      </p>
    </article>
  </ReferenceSection>
</template>

<script setup lang="ts">
const characterStore = useCharacterStore()
</script>

<style scoped>
</style>
