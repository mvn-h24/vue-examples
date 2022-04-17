export default {
  target: 'server',
  head: {
    title: 'vue-examples',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: {
    dirs: ['~/components/expand-cards', '~/components', '~/components/ui-lib'],
  },
  modules: ['@nuxt/image', '@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  axios: {
    baseURL: '/',
  },
  build: {},
  server: {
    port: 3000,
  },
}
