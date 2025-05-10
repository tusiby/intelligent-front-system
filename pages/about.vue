<script setup lang="ts">
const config = useRuntimeConfig()
definePageMeta({
  middleware: 'auth'
})
</script>
<template>
    <h1>Header</h1>
    <Accordion>Test Component</Accordion>
</template>
<style>
h1 {
    color: red;
}
</style>