// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      title: 'Nuxt Test App',
      script: [{src: "https://cdn.tailwindcss.com"}]
    }
  }
})
