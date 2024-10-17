// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxt/fonts', '@nuxt/image', '@pinia/nuxt', 'nuxt-typed-router'],
  fonts: {
    families: [
      // do not resolve this font with any provider from `@nuxt/fonts`
      { name: 'Custom Font', provider: 'none' },
      // only resolve this font with the `google` provider
      { name: 'Montserrat', provider: 'google' },
      // specify specific font data - this will bypass any providers
      { name: 'Other Font', src: 'https://example.com/font.woff2', weight: 'bold' },
    ]
  },
  css : ["~/assets/scss/global.scss"],
  vite :{
    css : { 
      preprocessorOptions :{
        scss:{
            additionalDate : `
            @use "~/assets/scss/_vars.scss" as *;
            @use "~/assets/scss/_mixsins.scss" as *;
            `,
        }
      }}
  },
})