<script setup lang="ts">
import { darkTheme, zhCN } from 'naive-ui'
import { NaiveDark, NaiveLight } from './configs/naive'
import OgImage from './assets/images/og-image.png'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

const { locale } = useI18n()

useHead({
  title: `Yes Cloud Music`,
  meta: [
    {
      name: 'description',
      content: 'Opinionated new yes music client',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#121212' : '#ffffff',
    },
    {
      name: 'og:title',
      content: 'Yes Cloud Music',
    },
    {
      name: 'og:description',
      content: 'Opinionated new yes music client',
    },
    {
      name: 'og:image',
      content: OgImage,
    },
    {
      name: 'twitter:image',
      content: OgImage,
    },
    {
      name: 'author',
      content: 'Naily Zero',
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
const showPlayer = ref(false)
provide('showPlayer', showPlayer)
</script>

<template>
  <NConfigProvider :theme="theme" :locale="locale === 'en' ? null : zhCN" :theme-overrides="isDark ? NaiveDark : NaiveLight">
    <NMessageProvider>
      <PlayerModal v-model:show="showPlayer" />
      <RouterView />
    </NMessageProvider>
  </NConfigProvider>
</template>
