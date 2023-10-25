export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  host: '0.0.0.0',
  head: {
    title: 'test-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      // { rel: 'stylesheet', type: 'text/css',href: '#' },
    ],
    script: [
      { src: 'js/jquery-1.11.2.min.js' },
      { src: 'bootstrap/js/bootstrap.min.js' }
    ],
  },

   /*
   ** Customize the generated output folder
   */
  generate: {
    dir: 'dist'
  },
  
  /*
  ** Customize the base url
  */
  router: {
    base: '/realestate/' //this is whatever the project is named
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './assets/bootstrap/css/bootstrap.css',
    './assets/css/font-awesome.min.css',
    './assets/css/main.css',
    './assets/fonts/fonts.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/Vuelidate.js', { src: './plugins/VueTyper.js', ssr: false }, '~/plugins/VeeValidate.js', '~/plugins/VueTelInput.js',
    '~/plugins/Snotify.js','~/plugins/VueProgressBar.js',{ src : '~/plugins/vue-apexchart.js', ssr : false },'~/plugins/filters.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'cookie-universal-nuxt'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor : ['vue-apexchart','NProgress'],
  },
  loading: {
    color: 'green',
    height: '5px',
    duration:5000,
  }
}
