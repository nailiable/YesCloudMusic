import { defineStore } from 'pinia'

export const useMusicStore = defineStore('yes_cloud_music_music_store', () => {
  const musicList = ref<number[]>([])
  const currentMusic = ref<number | null>(33894312)
  const hasMusic = (musicId: number) => musicList.value.includes(musicId)
  const addMusic = (musicId: number) => {
    if (!hasMusic(musicId))
      musicList.value.push(musicId)
  }
  const addMusicAndPlay = (musicId: number) => {
    addMusic(musicId)
    currentMusic.value = musicId
  }
  const removeMusicFromList = (musicId: number) => {
    const index = musicList.value.indexOf(musicId)
    if (index !== -1)
      musicList.value.splice(index, 1)
  }
  const clearMusicList = () => {
    musicList.value = []
  }

  return {
    musicList,
    currentMusic,
    hasMusic,
    addMusic,
    addMusicAndPlay,
    removeMusicFromList,
    clearMusicList,
  }
})
