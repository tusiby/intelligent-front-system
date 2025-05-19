<script setup>
const { setLocale } = useI18n();
</script>
<template>
  <AppHeader />
  <SidebarMenu />
  <UButton
    color="error"
    @click="setLocale('nl')"
    >{{ $t('welcome') }}</UButton
  >
  <slot />
  <ColorModeButton />
</template>
