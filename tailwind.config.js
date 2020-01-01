/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      display: ['"Inknut Antiqua"', "serif"],
      body: ['"PT Sans"', "sans-serif"]
    },
    extend: {
      colors: {
        accent: {
          300: "#BBD0D4",
          500: "rgba(82, 118, 125, 1)",
          700: "rgba(55, 79, 83, 1)"
        }
      }
    }
  },
  variants: {},
  plugins: []
};
