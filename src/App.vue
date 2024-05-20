<script setup lang="ts">
import { darkTheme, zhCN } from 'naive-ui'
import type { z } from 'zod'
import { NaiveDark, NaiveLight } from './configs/naive'
import OgImage from './assets/images/og-image.png'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

const { locale } = useI18n()
const musicStore = useMusicStore()

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

const showSearch = ref(false)
provide('showSearch', showSearch)

/**
 * 全局 Audio 实例控制
 * 采用依赖注入的方式，将 audio 实例和 audioController 等实例提供给子组件使用
 */
const audio = ref<HTMLAudioElement | null>(null)
const audioController = useMediaControls(audio)
const songDetailData = ref<z.infer<typeof SongDetailSchema>>(useSongDetailDefaultValue())
const songUrlData = ref<z.infer<typeof SongUrlSchema>>(useSongUrlDefaultValue())
provide('audio', audio)
provide('audioController', audioController)
provide('currentSongDetailData', songDetailData)
provide('currentSongUrlData', songUrlData)

// 监听当前歌曲变动，获取歌曲信息
watch(() => musicStore.currentMusic, async () => {
  console.log('currentMusic发生变动，重新获取歌曲信息')
  if (musicStore.currentMusic) {
    console.log('currentMusic存在，开始获取歌曲信息')
    const [urlInstance, detailInstance] = await Promise.all([
      useSongUrlInstance(musicStore.currentMusic!).send(),
      useSongDetailInstance(musicStore.currentMusic!).send(),
    ])
    songDetailData.value = detailInstance
    songUrlData.value = urlInstance
    if (urlInstance.data.length === 1) {
      audio.value!.src = urlInstance.data[0].url
      audioController.playing.value = true
      console.log(`歌曲地址获取完毕，开始播放, 当前状态：${audioController.playing.value}`)
    }
  }
}, { immediate: true })

// 监听歌曲播放结束，自动播放下一首
watch(audioController.ended, () => {
  console.log('歌曲播放结束，自动播放下一首')
  audioController.currentTime.value = 0
  musicStore.next()
})
</script>

<template>
  <NConfigProvider :theme="theme" :locale="locale === 'en' ? null : zhCN" :theme-overrides="isDark ? NaiveDark : NaiveLight">
    <NMessageProvider>
      <audio ref="audio" hidden />
      <PlayerModal v-model:show="showPlayer" />
      <SearchModal v-model:show="showSearch" />
      <RouterView />
    </NMessageProvider>
  </NConfigProvider>
</template>
