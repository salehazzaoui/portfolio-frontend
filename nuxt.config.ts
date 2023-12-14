// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [ 'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css' ],
  build: {
    transpile: ['vuetify'],
  },
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "tn5wb4sd",
		apiVersion: '2023-10-23'
  },
})
