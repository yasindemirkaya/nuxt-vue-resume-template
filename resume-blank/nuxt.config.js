const pkg = require('./package')

import en from "./locales/en.json"
import tr from "./locales/tr.json"


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i' }
    ],
    script: [
      {
        src: "https://use.fontawesome.com/releases/v6.1.0/js/all.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      }
    ],
  },


  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/styles.css'
  ],

  js: [
    // '~/assets/js/scripts.js'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/assets/js/scripts.js',
      mode: 'client'
    },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
  ],

  i18n: {
    locales: ['tr', 'en'],
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, tr }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
}
