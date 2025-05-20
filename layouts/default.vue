<script setup lang="ts">
import ruMessages from './locale.ru.json';
import enMessages from './locale.en.json';
const { t } = useI18n({
  messages: {
    ru: ruMessages,
    en: enMessages,
  },
});
</script>
<template>
  <AppHeader />
  <SidebarMenu />
  <UButton color="error">{{ t('name') }}</UButton>
  <UButton color="secondary">{{ $t('pages.layout.welcome') }}</UButton>
  <slot />
  <ColorModeButton />
</template>
