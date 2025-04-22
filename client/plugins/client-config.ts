// plugins/client-config.ts
export default defineNuxtPlugin((nuxtApp) => {
  // Get the value from `useState` initialized on the server
  const config = useState('client-config')

  // Provide it globally for consistent access across your app
  if (config.value) {
    nuxtApp.provide('clientConfig', config.value)
  }
})
