<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Tung tung tung tung tung tung sahur"
  }
})
</script>

<template>
  <div>
    <h1>Module One</h1>
    <p>{{ props.text }}</p>
  </div>
</template>

<style scoped></style>
