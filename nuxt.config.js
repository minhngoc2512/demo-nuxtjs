module.exports = {
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/',
          name: 'Home',
          component: resolve( '~/pages/Home/Home.vue')
        },
        {
          path: '/:category',
          component: resolve( '~/pages/Category/Category.vue')
        }
        // , {
        //   name: 'custom',
        //   path: '*',
        //   component: resolve( '~/layouts/Error.vue')
        // }
        )
    }
  },
  env:{
    meta:[
      {'name_node':'value_node'}
    ]
  },
  css: [
    '@/assets/css/style.css',
    '@/assets/css/style_all.css'
  ],
  // modules: [
  //   '@/modules/js_all.js'
  // ],

  loading: '~/components/Loading/Loading.vue',
  head: {
    title: 'demo-nuxtjs',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'demo'},
      {property: 'og:title', content: 'Xe hơi Mazda'},
      {
        property: 'og:description',
        content: 'Tổng hợp thông tin mua bán các dòng xe MAZDA cũ, mới, đã qua sử dụng như MAZDA CX-5, MAZDA 6, MAZDA CX-3, MAZDA BT-50, MAZDA 3 '
      },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'https://xe.vatgia.com/assets/favicon/apple-icon-57x57.png'},
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&amp;amp;subset=vietnamese'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Oswald:400,700&amp;amp;subset=vietnamese'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,700i,800&amp;amp;subset=vietnamese'
      }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
  },

  /*
  ** Customize the progress bar color
  */
  /*
  ** Build configuration
  */
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
