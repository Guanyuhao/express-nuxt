module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    extendRoutes(routes) {},
    middleware:'i18n'
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
    { src: '~plugins/element-ui',},
    { src: '~/plugins/i18n.js'},
    { src: '~/plugins/components.js'}
    
  ],
  build: {
    vendor: ['axios','element-ui'],
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
