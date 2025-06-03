<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
const { t } = useI18n();

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: t('menu.todo'), // Автоматически обновится при смене языка
      icon: 'i-lucide-box',
      active: true,
    },
    {
      label: t('menu.api'),
      icon: 'i-lucide-box',
    },
    {
      label: t('menu.table'),
      icon: 'i-lucide-box',
    },
    {
      label: t('menu.search'),
      icon: 'i-lucide-box',
    },
  ],
]);
</script>

<template>
  <UNavigationMenu
    orientation="vertical"
    :items="items"
    :tooltip="true"
    class="data-[orientation=vertical]:w-48"
  />
</template>
