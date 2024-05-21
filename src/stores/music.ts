import { defineStore } from 'pinia'

export const useMusicStore = defineStore('yes_cloud_music_music_store', () => {
  const musicList = ref<number[]>([])
  const currentMusic = ref<number | null>(null)
  const mode = ref<'loop' | 'random' | 'single'>('loop')

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

  function getRandomMusic() {
    const index = Math.floor(Math.random() * musicList.value.length)
    return musicList.value[index]
  }

  function toggleMode() {
    if (mode.value === 'loop')
      mode.value = 'random'
    else if (mode.value === 'random')
      mode.value = 'single'
    else if (mode.value === 'single')
      mode.value = 'loop'
  }

  /** 在当前音乐后插入音乐。如果音乐已经存在，则不插入，直接设置currentMusic为newMusicId */
  function insertMusic(newMusicId: number) {
    if (musicList.value.includes(newMusicId)) {
      currentMusic.value = newMusicId
    }
    else {
      const index = musicList.value.indexOf(currentMusic.value!)
      musicList.value.splice(index + 1, 0, newMusicId)
      currentMusic.value = newMusicId
    }
  }

  return {
    musicList,
    currentMusic,
    mode,
    getRandomMusic,
    next,
    toggleMode,
    insertMusic,
  }
}, { persist: true })
