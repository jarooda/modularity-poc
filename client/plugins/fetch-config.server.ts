// plugins/client-config.server.ts
import { getQuery } from 'h3'

export default defineNuxtPlugin(async (nuxtApp) => {
  const event = nuxtApp.ssrContext?.event
  if (!event) return

  const query = getQuery(event)
  const client = query.client || 'client-a'

  const config = await $fetch(`http://localhost:4000/${client}`)

  // Initialize `useState` to persist the config on both client and server
  const state = useState('client-config', () => config)

  // Optionally, also provide via inject for consistency
  nuxtApp.provide('clientConfig', config)
})
