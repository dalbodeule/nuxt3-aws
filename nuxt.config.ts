// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-22',
  devtools: { enabled: true },
  nitro: {
    preset: 'aws_amplify',
    serveStatic: true,
    output: {
      publicDir: './output/server'
    }
  },
  runtimeConfig: {
    aws: {
      profile: process.env.AWS_PROFILE,
      secretArn: process.env.AWS_SECRET,
      resourceArn: process.env.AWS_RESOURCE,
    },
  },
  modules: ["@nuxtjs/turnstile", "@nuxt/eslint"]
})