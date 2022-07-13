export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'k-trac',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

// router: {
//   middleware: ['auth']
// },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBGXBYwIcdvd1rNsvMC5XZC1xIQjvy9JSU",
          authDomain: "k-trac.firebaseapp.com",
          projectId: "k-trac",
          storageBucket: "k-trac.appspot.com",
          messagingSenderId: "784249830896",
          appId: "1:784249830896:web:56a7c269beed83ec78f135",
        },
        services: {
          auth: {
            persistance: 'session'
          },
          database: true,
          firestore: true
        }
      }
    ],
    'nuxt-leaflet',
    ['nuxt-leaflet', {}],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // firebase: {
  //   apiKey: "AIzaSyBGXBYwIcdvd1rNsvMC5XZC1xIQjvy9JSU",
  //   authDomain: "k-trac.firebaseapp.com",
  //   projectId: "k-trac",
  //   storageBucket: "k-trac.appspot.com",
  //   messagingSenderId: "784249830896",
  //   appId: "1:784249830896:web:56a7c269beed83ec78f135"
  // }
}
