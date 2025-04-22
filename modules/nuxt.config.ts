// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    plugins: [], // no need here, just config
    hooks: {
      'render:response': (response, { context }) => {
        if (context.payload?.clientConfig) {
          response.body = response.body || {}
          response.body._payload = response.body._payload || {}
          response.body._payload.clientConfig = context.payload.clientConfig
        }
      }
    }
  }
})
