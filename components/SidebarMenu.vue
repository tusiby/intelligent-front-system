<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Components',
      icon: 'i-lucide-box',
      // to: '/components',
      active: true,
      defaultOpen: true,
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
