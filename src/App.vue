<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import naive from './configs/naive'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

useHead({
  title: 'Yes Cloud Music',
  meta: [
    {
      name: 'description',
      content: 'Opinionated new yes music client',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})

const theme = computed(() => isDark.value ? darkTheme : null)
</script>

<template>
  <NConfigProvider :theme="theme" :theme-overrides="naive">
    <RouterView />
  </NConfigProvider>
</template>
