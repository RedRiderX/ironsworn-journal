export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Journey into the Ironlands",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Inknut+Antiqua:700|PT+Sans:400,700&display=swap",
      },
    ],
    htmlAttrs: {
      class: "font-body",
      lang: "en",
    },
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/vue-youtube",
    { src: "~/plugins/localStorage", ssr: false },
    // "~/plugins/lodash.js",
  ],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    "@nuxt/http",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox",
    "@nuxtjs/pwa",
  ],
  buildModules: ["@nuxtjs/tailwindcss"],

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

  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Stuff for inlineing svgs
      const svgRule = config.module.rules.find((rule) =>
        rule.test.test(".svg")
      );

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"],
      });
    },
  },
};
