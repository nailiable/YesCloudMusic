import { defineStore } from 'pinia'

export const useMusicStore = defineStore('yes_cloud_music_music_store', () => {
  const musicList = ref<number[]>([])
  const currentMusic = ref<number | null>(null)
  function next() {
    if (currentMusic.value === null) {
      currentMusic.value = musicList.value[0]
    }
    else {
      const index = musicList.value.indexOf(currentMusic.value)
      if (index === musicList.value.length - 1)
        currentMusic.value = musicList.value[0]
      else
        currentMusic.value = musicList.value[index + 1]
    }
  }

  return {
    musicList,
    currentMusic,
    next,
  }
}, { persist: true })
