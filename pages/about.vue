<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-prose text-center">
      <h1 class="font-display text-2xl">A Journal for Solo Ironsworn play</h1>
      <p>Some about text here...</p>
      <div class="credits text-left mt-2 mb-4">
        <h2 class="text-xl">Credits</h2>
        <p class="mb-2">
          <a href="https://github.com/RedRiderX/ironsworn-journal"
            >Code by Red</a
          >
          & licensed under GPL3.
        </p>
        <p class="mb-2">
          <a href="https://game-icons.net/1x1/lorc/treasure-map.html"
            >Treasure map icon</a
          >
          by Lorc under
          <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.
        </p>
        <p class="mb-2">
          <a href="https://game-icons.net/1x1/sbed/flamer.html">Flamer icon</a>
          by sbed under
          <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.
        </p>
        <p class="mb-2">
          This work is based on
          <a href="https://www.ironswornrpg.com" target="_blank">Ironsworn</a>,
          created by Shawn Tomkin, and licensed for our use under the
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/Creative"
            >Commons Attribution-NonCommercial-ShareAlike 4.0 International
            license</a
          >.
        </p>
        <p></p>
      </div>
      <div>
        <NLink
          to="/"
          class="bg-accent-500 text-white font-bold uppercase text-sm rounded py-2 px-4 tracking-wide"
          >Back home</NLink
        >
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.credits a {
  @apply underline;
}
</style>
