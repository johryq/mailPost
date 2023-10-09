// https://nuxt.com/docs/api/configuration/nuxt-config

// defineNuxtConfig
export default ({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  plugins: ['@/plugins/event-bus.ts'],
  css: ['@/assets/font.css','~/assets/scss/variables.scss'],
  build: {
    transpile: ['@vuepic/vue-datepicker'],
    // loaders: {
    //   font: {
    //     limit: 100000, // 根据需要设置字体文件大小限制
    //     test: /\.(ttf|woff|woff2|eot)$/i,
    //     type: 'asset/resource',
    //     generator: {
    //       filename: 'fonts/[name][ext]'
    //     }
    //   }
    // }
  },
  vue: { ssr: false  }
})
