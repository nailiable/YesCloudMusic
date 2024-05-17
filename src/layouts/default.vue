<script setup lang="tsx">
import { NDivider } from 'naive-ui'
import type { RouteNamedMap } from 'vue-router/auto-routes'
import { loadLanguageAsync } from '~/modules/i18n'

const route = useRoute()
const { t, locale } = useI18n()
const { y } = useScroll(window)

interface NavItem {
  icon: string
  text: string
  to: keyof RouteNamedMap
  showMobile?: boolean
}

const nav = computed((): NavItem[] => ([
  { icon: 'i-ph-house-duotone', text: t('nav.home'), to: '/' },
  { icon: 'i-ph-vinyl-record-duotone', text: t('nav.category'), to: '/category' },
  { icon: 'i-ph-user-circle-duotone', text: t('nav.personal'), to: '/my' },
  { icon: 'i-ph-sliders-horizontal-duotone', text: t('nav.setting'), to: '/setting', showMobile: false },
]))
const currentLocation = computed(() => nav.value.find(item => item.to === route.name))
</script>

<template>
  <div id="home-layout">
    <!-- PC -->
    <header
      :class="`pc-header ${y > 50 ? `bg-white/80 dark:bg-black/80` : ''}`"
      fixed left-0 top-0 z-99 hidden w-full items-center justify-between pb2 pt2.5 backdrop-blur-sm smooth md:flex p-safe
    >
      <button id="music" z-9 rounded-full p2.5 scale btn-hover-gray>
        <div i-ph-music-note-duotone text-size-lg />
      </button>
      <nav class="pc-nav" absolute left-0 w-full flex items-center justify-center gap3 pb1>
        <button
          v-for="(item, index) in nav" :key="index"
          flex items-center gap1 p3 btn scale
          :class="`${item.to === currentLocation?.to ? 'btn-gray' : 'btn-hover-gray'}`"
          @click="$router.push(item.to)"
        >
          <div :class="`${item.icon} text-size-lg`" />
          <div v-if="item.to === currentLocation?.to">
            {{ item.text }}
          </div>
        </button>
      </nav>
      <div z-9 flex>
        <button rounded-full p2.5 scale btn-hover-gray @click="loadLanguageAsync(locale === 'en' ? 'zh-CN' : 'en')">
          <div i-ph-translate-duotone text-size-lg />
        </button>
        <button rounded-full p2.5 scale btn-hover-gray @click="toggleDark()">
          <div i-ph-moon-duotone text-size-lg />
        </button>
      </div>
    </header>
    <!-- Mobile -->
    <header class="mobile-header" fixed bottom-0 left-0 z-99 w-full>
      <nav class="mobile-nav" w-full flex items-center justify-around pb4 md:hidden>
        <button
          v-for="(item, index) in nav.filter((item) => item.showMobile !== false)" :key="index"
          flex items-center gap1 p4 btn scale btn-hover-gray
          :class="`${item.to === currentLocation?.to ? 'btn-gray' : 'btn-hover-gray'}`"
          @click="$router.push(item.to)"
        >
          <div :class="`${item.icon} text-size-lg`" />
        </button>
      </nav>
    </header>

    <main mt20 m-safe>
      <RouterView />
    </main>

    <footer pointer-events-none mb40 pt20 m-safe>
      <NDivider />
      <div flex flex-col items-center>
        <div flex items-center justify-center text-center>
          <div>Naily</div>
          <NDivider vertical />
          <div>Zero</div>
        </div>
        <div>Thanks Netease</div>
      </div>
    </footer>
  </div>
</template>

<style lang="less" scoped>
.pc-header {
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0), #ff00002b);
}

.mobile-header {
  background-image: linear-gradient(0deg, #ff00002b, rgba(255, 255, 255, 0));
}
</style>
