<script setup lang="tsx">
import { loadLanguageAsync } from '~/modules/i18n'

const { locale } = useI18n()
const { height: y } = useWindowSize()
</script>

<template>
  <div>
    <!-- PC -->
    <header
      :class="`pc-header ${y > 50 ? `bg-white/80 dark:bg-black/80` : ''}`"
      fixed left-0 top-0 z-99 hidden w-full items-center justify-between pb2 pt2.5 backdrop-blur-sm smooth md:flex p-safe
    >
      <button id="music" z-9 cursor-default rounded-full p2.5 btn scale>
        <div i-ph-music-note-duotone text-size-lg />
      </button>
      <div z-9 flex>
        <button rounded-full p2.5 scale btn-hover-gray @click="loadLanguageAsync(locale === 'en' ? 'zh-CN' : 'en')">
          <div i-ph-translate-duotone text-size-lg />
        </button>
        <button rounded-full p2.5 scale btn-hover-gray @click="toggleDark()">
          <div i-ph-moon-duotone text-size-lg />
        </button>
      </div>
    </header>
    <main mt20 m-safe>
      <RouterView />
    </main>
  </div>
</template>

<style lang="less" scoped>
.pc-header {
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0), #ff00002b);
}
</style>
