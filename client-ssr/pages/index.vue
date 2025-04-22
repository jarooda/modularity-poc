<template>
  <div>
    <h1>Client SSR</h1>
    <p>This is a client-side rendered page.</p>
    <NuxtLink to="/remote">Go to page extended from nuxt layer</NuxtLink>
    <p>Click the link above to navigate to the About page.</p>
  </div>
  <RemoteComponent />
  <ModuleOne />
</template>
