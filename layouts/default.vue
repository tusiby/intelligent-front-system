<script setup>
import { useScriptTag } from '@vueuse/core';

const colorMode = useColorMode();

useScriptTag(
  'https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.1/annyang.min.js',
  () => {
    if (annyang) {
      const commands = {
        'use dark': () => {
          colorMode.preference = 'dark';
        },
        'use light': () => {
          colorMode.preference = 'light';
        },
        'test *term': (term) => {
          alert(term);
        },
        hello: () => {
          alert('Hello world!');
        },
      };

      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening.
      // annyang.start();
    }
  }
);
</script>
<template>
  <Header />
  <SidebarMenu />
  <!-- <UButton color="error">{{ t('name') }}</UButton>
  <UButton color="secondary">{{ $t('pages.layout.welcome') }}</UButton> -->
  <!-- <slot /> -->
</template>
<style scoped></style>
