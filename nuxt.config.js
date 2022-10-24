require('./config.js')

export default {
  server: {
    port: 8585
  },
  router: {
    middleware: ['password-protect']
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  generate: {
    fallback: true
  },

  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Effect Socials',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/global.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/shepherd.js',
    '~/plugins/accordion.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    'nuxt-password-protect'
  ],
  passwordProtect: {
    enabled: false,
    formPath: '/password',
    password: 'hello-network',
    tokenSeed: 101010,
    queryString: '_pw',
    cookieName: '_password',
    cookie: {
      prefix: '',
      expires: 5
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      scss: {
        additionalData: "@import '~assets/scss/variables.scss';"
      }
    }
  }
}
