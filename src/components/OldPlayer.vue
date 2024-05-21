<script setup lang="ts">
import type { UseMediaControlsReturn } from '@vueuse/core/index.cjs'
import type { z } from 'zod'

defineOptions({
  name: 'IndexPage',
  inheritAttrs: true,
})

const emit = defineEmits(['exit', 'click'])

const { duration, currentTime, playing, volume } = inject<UseMediaControlsReturn>('audioController')!
const currentSongDetailData = inject<Ref<z.infer<typeof SongDetailSchema>>>('currentSongDetailData')!
const musicStore = useMusicStore()
const showPlayerList = ref(true)

const data = ref<z.infer<typeof SongDetailSchema>>(useSongDetailDefaultValue())
watch(() => musicStore.musicList, async () => {
  data.value = await useSongDetail(false, musicStore.musicList.join(',')).send()
  musicStore.currentMusic = musicStore.musicList[0]
}, { immediate: true })
function formatDuration(seconds: number) {
  return new Date(1000 * seconds).toISOString().slice(14, 19)
}
function switchPrevMusic() {
  if (!musicStore.currentMusic)
    return console.log(`当前没有播放的歌曲`)
  const index = musicStore.musicList.indexOf(musicStore.currentMusic)
  if (index === -1)
    return console.log(`当前播放的歌曲在播放列表中不存在`)
  // 如果是第一首歌，切换到最后一首
  if (index === 0)
    musicStore.currentMusic = musicStore.musicList[musicStore.musicList.length - 1]
  else
    musicStore.currentMusic = musicStore.musicList[index - 1]
}
function switchNextMusic() {
  if (!musicStore.currentMusic)
    return console.log(`当前没有播放的歌曲`)
  const index = musicStore.musicList.indexOf(musicStore.currentMusic)
  if (index === -1)
    return console.log(`当前播放的歌曲在播放列表中不存在`)
  // 如果是最后一首歌，切换到第一首
  if (index === musicStore.musicList.length - 1)
    musicStore.currentMusic = musicStore.musicList[0]
  else
    musicStore.currentMusic = musicStore.musicList[index + 1]
}
</script>

<template>
  <div
    w-70 flex flex-col items-center rounded-2xl smooth md:w-90 xl:w-120
    class="bg-red-9/100 shadow-2xl shadow-red-500/30 transition-duration-500 transition-ease-in-out hover:shadow-red-400/30"
    @click="emit('click')"
  >
    <!-- 封面 -->
    <div v-show="showPlayerList" mt5 h-full w-full flex flex-col items-center justify-center md:mt10>
      <img block max-w-60 rounded-lg smooth :src="`${currentSongDetailData.songs[0].al.picUrl}`" :class="!playing ? 'transform-scale-90 transition-delay-400 shadow-black-xl' : ''">
      <h2 mt1 title-5 font-800>
        {{ currentSongDetailData.songs[0].name }}
      </h2>
      <h3 title-6 text-size-3 opacity-75>
        {{ currentSongDetailData.songs[0].ar.map((ar) => ar.name).join('/') }}
      </h3>
    </div>
    <!-- 播放列表 -->
    <div v-show="!showPlayerList" max-h-sm w-full flex flex-col overflow-x-hidden overflow-y-auto smooth class="player-list my5 px5">
      <template v-for="(item, _index) in data.songs" :key="_index">
        <div flex cursor-pointer rounded-lg p1 px4 py4 :class="item.id === musicStore.currentMusic ? 'bg-black' : ''" @click="musicStore.currentMusic = item.id">
          <img :src="`${item.al.picUrl}?param=50y50`" class="mr-3 h-10 w-10 rounded-lg">
          <div flex flex-col>
            <!-- eslint-disable -->
            <div text-size-sm font-800>{{ item.name }}</div>
            <!-- eslint-disable -->
            <div opacity60>{{ item.ar.map((ar) => ar.name).join('/') }}</div>
          </div>
        </div>
      </template>
    </div>

    <div id="audio-controller" class="mb5 mt4 w-full flex flex-col items-center gap5 px4">
      <div w-full flex flex-col items-center gap3 md:flex-row>
        <Slider v-model="currentTime" w-full :max="duration" />
        <div text-nowrap>
          {{ formatDuration(currentTime) }} / {{ formatDuration(duration) }}
        </div>
      </div>
      <!-- 控制 -->
      <div flex items-center gap3>
        <button class="rounded-full p3 scale btn-gray" @click="switchPrevMusic">
          <div i-ph-caret-line-left-duotone text-size-lg />
        </button>
        <button class="rounded-full p4 scale btn-gray" @click="playing = !playing">
          <div v-if="playing" text-size-lg i-ph-pause-duotone />
          <div v-else text-size-lg i-ph-play-duotone />
        </button>
        <button class="rounded-full p3 scale btn-gray" @click="switchNextMusic">
          <div i-ph-caret-line-right-duotone text-size-lg />
        </button>
      </div>
      <div flex items-center gap3>
        <button class="rounded-full p1.5 scale btn-gray" @click="showPlayerList = !showPlayerList">
          <div i-carbon-overflow-menu-horizontal />
        </button>
        <button class="rounded-full p1.5 scale btn-gray" @click="musicStore.toggleMode()">
          <div v-if="musicStore.mode === 'random'" i-ph-shuffle-duotone />
          <div v-else-if="musicStore.mode === 'loop'" i-ph-repeat-duotone />
          <div v-else i-ph-repeat-once-duotone />
        </button>
        <button class="rounded-full p1.5 scale btn-gray" @click="emit('exit')">
          <div i-carbon-close />
        </button>
      </div>
      <!-- 音量 -->
      <div class="sm-60% md-50% w-80% flex items-center gap3">
        <div i-ph-speaker-simple-high-duotone />
        <Slider v-model="volume" :max="1" :min="0" w-full />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.player-list {
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>
