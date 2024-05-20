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
const { data } = useSongDetail(true, musicStore.musicList.join(','))
const showPlayerList = ref(true)
function formatDuration(seconds: number) {
  return new Date(1000 * seconds).toISOString().slice(14, 19)
}
</script>

<template>
  <div
    max-h-lg w-70 flex flex-col items-center overflow-y-hidden rounded-2xl md:w-90 xl:w-120
    class="bg-red-9/100 shadow-2xl shadow-red-500/30 transition-duration-500 transition-ease-in-out hover:shadow-red-400/30"
    @click="emit('click')"
  >
    <!-- 封面 -->
    <img v-if="showPlayerList" mt10 block h-full max-w-60 w-full rounded-t :src="`${currentSongDetailData.songs[0].al.picUrl}`">
    <!-- 播放列表 -->
    <div v-else max-h-sm w-full flex flex-col overflow-y-auto class="player-list my5 px5">
      <template v-for="(item, _index) in data.songs" :key="_index">
        <div flex cursor-pointer rounded-lg p1 px4 py4 :class="item.id === musicStore.currentMusic ? 'bg-black' : ''" @click="musicStore.currentMusic = item.id">
          <img :src="`${item.al.picUrl}?param=50y50`" class="mr-3 h-10 w-10 rounded-lg">
          {{ item.name }}
        </div>
      </template>
    </div>

    <div id="audio-controller" class="mb5 mt8 w-full flex flex-col items-center gap5 px4">
      <div w-full flex flex-col items-center gap3 md:flex-row>
        <Slider v-model="currentTime" w-full :max="duration" />
        <div text-nowrap>
          {{ formatDuration(currentTime) }} / {{ formatDuration(duration) }}
        </div>
      </div>
      <!-- 控制 -->
      <div flex items-center gap3>
        <button class="size-8 rounded-full p2 scale btn-gray" @click="showPlayerList = !showPlayerList">
          <div i-carbon-overflow-menu-horizontal />
        </button>
        <button class="rounded-full p3 scale btn-gray" @click="playing = !playing">
          <div v-if="playing" i-ph-pause-duotone />
          <div v-else i-ph-play-duotone />
        </button>
        <button class="size-8 rounded-full p2 scale btn-gray" @click="emit('exit')">
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
