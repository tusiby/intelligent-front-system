<script setup lang="ts">
const config = useRuntimeConfig();
definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <Accordion>Test Component</Accordion>
</template>

<style>
h1 {
  color: red;
}
</style>
