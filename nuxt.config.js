module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '区块链浏览器',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/scale.js'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** rout config
  */
  router: {
    // middleware: ['change-page-col'],
    linkActiveClass: 'link-active',
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    extendRoutes (routes) {},
    middleware: 'i18n'
  },
  generate: {

  },
  /*
  ** Add axios globally
  */
  /*
  ** Add axios globally
  */
  plugins: [
    { src: '~plugins/element-ui', ssr: false},
    { src: '~/plugins/i18n.js'}
    // { src: '~/plugins/components.js'},

  ],
  build: {
    vendor: ['axios', 'element-ui', ''],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })

      }
    }
  }
}
