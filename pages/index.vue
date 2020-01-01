<template>
  <section class="flex flex-col justify-center items-center h-screen">
    <div class="flex-shrink container">
      <h1
        class="title text-center font-display text-accent-700 text-5xl leading-snug max-w-sm mx-auto"
      >Journey into the Ironlands</h1>
      <SwordIcon class="icon--sword"/>
      <hr>
      <h2 class="subtitle text-center font-display uppercase text-xl max-w-sm mx-auto mb-10">
        A Journal for Solo
        <a
          class="underline hover:no-underline"
          href="https://www.ironswornrpg.com/"
          target="_blank"
        >Ironsworn</a> play
      </h2>
      <div class="links text-center">
        <NLink
          to="/app"
          class="bg-accent-500 text-white font-bold uppercase text-sm rounded py-2 px-4 tracking-wide"
        >Begin</NLink>
        <NLink
          to="/about"
          class="text-gray-600 border-gray-600 font-bold uppercase text-sm rounded py-2 px-4 border border-1 tracking-wide"
        >About this app</NLink>
      </div>
    </div>
  </section>
</template>

<script>
import SwordIcon from "~/assets/icons/sword.svg?1";

export default {
  components: {
    SwordIcon
  }
};
</script>

<style scoped>
.icon--sword {
  width: 6rem;
  height: 6rem;
  margin: auto;
  margin-bottom: -6.25rem;
  position: relative;
  background: white;
  padding: 0.5rem;
}

hr {
  max-width: 40rem;
  border: 2px solid rgba(51, 51, 51, 1);
  margin: 3rem auto;
}
</style>
