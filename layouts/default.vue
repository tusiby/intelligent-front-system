<script setup lang="ts">
// import ColorModeButton from '~/components/ColorModeButton.vue';

</script>

<template>
    <div>
      <AppHeader />
      <SidebarMenu />
      <slot></slot>
      <ColorModeButton />
      <AppFooter />
    </div>
  </template>