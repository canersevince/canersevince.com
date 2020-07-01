export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'CanerSevince.com || Full Stack Javascript Developer',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'robots', content: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1'},
      {name: 'keywords', content: 'front-end development, web design, javascript, node.js, vue.js, angular, javascript developer, full-stack developer, web services, spa, web apps, application developer, sharepoint webpart'},
      {name: 'robots', content: 'index, follow'},
      {name: 'revisit-after', content: '3 days'},
      {name: 'author', content: 'Caner Sevince'},
      {hid: 'description', name: 'description', content: 'Caner Sevince - Freelance web tasarım, SPFX Webparts, Single Page Applications, Web Solutions.'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/fontawesome'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      suffix: true,
      regular: true
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {}
}
