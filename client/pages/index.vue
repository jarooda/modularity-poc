<script setup>
const { $clientConfig } = useNuxtApp()
const config = useState("clientConfig", () => {
  return $clientConfig
})
const primaryColor = ref({})
const baseSaturation = 80
const baseLightness = 50

function generateColorScale(h, s, l) {
  return {
    100: `hsl(${h}, ${s - 30}%, 95%)`,
    200: `hsl(${h}, ${s - 25}%, 88%)`,
    300: `hsl(${h}, ${s - 15}%, 75%)`,
    400: `hsl(${h}, ${s - 5}%, 60%)`,
    500: `hsl(${h}, ${s}%, ${l}%)`,
    600: `hsl(${h}, ${s + 5}%, 40%)`,
    700: `hsl(${h}, ${s + 10}%, 30%)`,
    800: `hsl(${h}, ${s + 15}%, 22%)`,
    900: `hsl(${h}, ${s + 20}%, 15%)`
  }
}

// const primaryColor = ref(generateColorScale($clientConfig.theme.primaryColor, baseSaturation, baseLightness))
// console.log("Primary Color Scale:", primaryColor.value[100])

watchEffect(() => {
  if (config.value?.theme?.primaryColor) {
    primaryColor.value = generateColorScale(
      config.value.theme.primaryColor,
      baseSaturation,
      baseLightness
    )
    // console.log("Primary Color Scale:", primaryColor.value[100])
  }
})

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

    <div>
      <h2>Color Palette</h2>
      <div class="color-palette">
        <div
          v-for="(color, index) in primaryColor"
          :key="index"
          :class="`square primary-${index}`"
        >
          {{ color }}
        </div>
      </div>
    </div>

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

<style>
.primary-100 {
  background-color: v-bind(primaryColor[100]);
}
.primary-200 {
  background-color: v-bind(primaryColor[200]);
}
.primary-300 {
  background-color: v-bind(primaryColor[300]);
}
.primary-400 {
  background-color: v-bind(primaryColor[400]);
}
.primary-500 {
  background-color: v-bind(primaryColor[500]);
}
.primary-600 {
  background-color: v-bind(primaryColor[600]);
}
.primary-700 {
  background-color: v-bind(primaryColor[700]);
}
.primary-800 {
  background-color: v-bind(primaryColor[800]);
}
.primary-900 {
  background-color: v-bind(primaryColor[900]);
}
.square {
  width: 100px;
  height: 100px;
  margin: 10px;
  display: inline-block;
  border-radius: 8px;
}
</style>
