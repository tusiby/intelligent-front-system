export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/html-validator',
    '@nuxtjs/stylelint-module',
  ],
  css: ['~/assets/css/main.css'],
  devtools: {
    enabled: false,
  },
  eslint: {},
  stylelint: {},
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
  routeRules: {
    '/about': { prerender: true },
  },
  compatibilityDate: '2025-03-21',
});
