<script setup>
const { setLocale, locale } = useI18n();
</script>

<template>
  <ClientOnly>
    {{ locale.code }}
    <UButton
      :icon="'i-mdi-language'"
      color="neutral"
      variant="ghost"
      @click="setLocale(locale === 'ru' ? 'en' : 'ru')"
    />

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
