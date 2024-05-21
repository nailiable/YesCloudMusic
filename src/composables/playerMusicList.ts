import type { z } from 'zod'

export function usePlayMusicListDetail() {
  const musicStoreList = ref<z.infer<typeof SongDetailSongsSchema>[]>([])
  const musicStore = useMusicStore()
  const message = useMessage()

  watch(musicStore.musicList, async () => {
    const musicList = musicStore.musicList
    const ids = musicList.join(',').trim()
    if (!ids)
      return

    try {
      const res = await useSongDetail(false, ids).send()
      musicStoreList.value = res.songs
    }
    catch (error) {
      message.error('获取播放列表详情失败')
      console.error(error)
    }
  }, { immediate: true })

  return {
    musicStoreList,
  }
}
