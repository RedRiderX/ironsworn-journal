export default defineNuxtConfig({
  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // TODO: Remove it if you want to eject from codeSandbox
    // "./codesandbox",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@vite-pwa/nuxt",
    "@nuxt/eslint",
    "nuxt-svgo",
  ],

  pwa: {
    // icon: {
    //   fileName: "treasure-map.png",
    // },
    manifest: {
      name: "Journey into the Ironlands",
      short_name: "Ironsworn Journal",
      description: "A Journal for Solo Ironsworn play",
      theme_color: "#BBD0D4",
      categories: ["games", "entertainment"],
      display: "standalone",
      background_color: "#BBD0D4",
    },
  },

  typescript: {
    typeCheck: true,
    strict: false,
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  devtools: {
    enabled: true,
    componentInspector: false,
  },

  compatibilityDate: "2025-01-05",
});
