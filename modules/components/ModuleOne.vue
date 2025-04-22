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
    <h1>Module Finance</h1>
    <p>{{ props.text }}</p>
    <p>
      This is a module that is loaded from different directory. It is not a page, but a module that can be used in any page.
    </p>
  </div>
</template>

<style scoped></style>
