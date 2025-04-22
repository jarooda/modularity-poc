<script setup>
const { $clientConfig } = useNuxtApp()
const config = useState("clientConfig", () => {
  return $clientConfig
})
const bg = ref(config.value.theme.backgroundColor)

// change favicon
useHead({
  link: [
    {
      rel: "icon",
      href: $clientConfig.favicon
    }
  ],
  title: $clientConfig.name,
  meta: [
    {
      name: "description",
      content: $clientConfig.description
    }
  ]
})

const query = useRoute().query
const renderLink = () => {
  if (query.client === "client-b") {
    return "/?client=client-a"
  } else {
    return "/?client=client-b"
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ config.name }}</h1>
    <p>This is a client-side rendered page. {{ config.description }}</p>
    <NuxtLink to="/remote">Go to page extended from nuxt layer</NuxtLink>
    <p>Click the link above to navigate to the About page.</p>
    <RemoteComponent />
    <ModuleOne />

    <div>
      <h2>Dynamic Link</h2>
      <p>
        <a :href="renderLink()">
          Switch to {{ query.client === "client-a" ? "Client B" : "Client A" }}
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: v-bind(bg);
}
</style>
