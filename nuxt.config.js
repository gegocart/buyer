const webpack = require("webpack")
const env = require('dotenv').config()


module.exports = {
mode: 'universal',
 //mode: 'spa',
  env: env.parsed,

  /*
  ** Headers of the page
  */
  head: {
    title: 'buyer-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'https://js.stripe.com/v3/' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/redirect-module',
    ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/buyerlogin',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: 'data'
          },

         
        }
      }
    }
  },

 router: {
    middleware: [
       'clearValidationErrors'
    ]
  },

  axios: {
    //baseURL: 'http://admin-app.test/api'
    baseURL: process.env.BASEURL,
    url:'/'
  },

  css: [
  
    '~/assets/css/tailwind.css',
      '~assets/styles/app.scss'
    //'~/node_modules/bootstrap/dist/css/bootstrap.css',
  ],
  
  plugins: [
     '~/plugins/mixins/user.js',
     '~/plugins/mixins/validation.js',
     { src: '~/plugins/axios.js',ssr:false },
     { src: '~/plugins/mixins/paginate',ssr:false }, //
     { src: '~/plugins/mixins/my-jquery-code.js',ssr:false }, //
     { src: '~/plugins/mixins/lingallery.js',ssr:false }, //
     { src: '~/plugins/mixins/vuehtml2pdf.js',ssr:false }, //
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // vendor: ["jquery", "bootstrap"],
    // vendor: ['vue-select'],
    //   plugins: [
    //   new webpack.ProvidePlugin({
    //     $: "jquery"
    //   })
    // ],
     // plugins: [
     //  '~plugins/vue-select.js'
     // ],
   vendor: ["jquery"],
        plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    postcss: {
      plugins: {
        'postcss-custom-properties': false,

      },

    },
    /*
    ** Run ESLint on save
    */
    postcss: [
     require('tailwindcss')('./tailwind.js'),
     require('autoprefixer')
   ],
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
    generate: {
  minify: {
    collapseWhitespace: false
  }
},
    extend (config, { isDev }) {
      if (isDev && process.client) {
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

