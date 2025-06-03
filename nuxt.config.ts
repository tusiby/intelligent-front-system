export default defineNuxtConfig({
  modules: [
    // '@nuxtjs/html-validator',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@compodium/nuxt',
    '@pinia/nuxt',
    'nuxt-typed-router',
    'dayjs-nuxt',
    '@vueuse/nuxt',
    '@nuxt/scripts',
    '@nuxt/image',
    'nuxt-svgo',
  ],
  css: ['~/assets/css/main.css'],
  devtools: {
    enabled: true,
  },
  eslint: {},
  stylelint: {
    cache: false,
  },
  i18n: {
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    locales: [
      { code: 'ru', name: 'Russian', file: 'ru.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
  },
  dayjs: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  // htmlValidator: {
  //   usePrettier: true,
  // },
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
  experimental: {
    scanPageMeta: true,
  },
  compatibilityDate: '2025-03-21',
});
