// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  srcDir: "src/",
  pages: true,
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image"],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  css: [
    '@/assets/styles/global.scss'
  ],
});
