// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@nuxtjs/tailwindcss'],
  // css: ["@/assets/main.css"],
  runtimeConfig: {
    firebaseApiKey: process.env.NUXT_FIREBASE_API_KEY,
    public: {
      firebaseApiKey: process.env.NUXT_FIREBASE_API_KEY,
    },
    build: []
  }
})

// export default defineNuxtConfig({
//   typescript: {
//     shim: false
//   },
//   modules: ['@nuxtjs/tailwindcss'],
//   runtimeConfig: {
//     firebaseApiKey: process.env.FIREBASE_API_KEY
//     public: {
//       firebaseApiKey: process.env.FIREBASE_API_KEY
//     }
//   }
// })
