import type { DeleteSongReturn, GetNextSongReturn, GetPrevSongReturn, PlayMethod, PlayNextSongReturn, PlaylistItem, PushSongReturn, ReplaceSongReturn, UnshiftSongReturn, UsePlaylistOptions } from './playlist-type'
import { DeleteSongEnum, PlaylistError, PushSongErrorEnum, ReplaceSongEnum, UnshiftSongErrorEnum } from './playlist-type'

export function usePlaylist(options: UsePlaylistOptions = {}) {
  const currentSong: Ref<PlaylistItem> = isRef(options.initialCurrentValue)
    ? (options.initialCurrentValue) as Ref<PlaylistItem>
    : ref<PlaylistItem>((options.initialCurrentValue || 0) as PlaylistItem)
  const playlist: Ref<(PlaylistItem)[]> = isRef(options.initialPlaylist)
    ? (options.initialPlaylist) as Ref<(PlaylistItem)[]>
    : ref<(PlaylistItem)[]>((options.initialPlaylist || []) as (PlaylistItem)[])
  const playMethod: Ref<PlayMethod> = isRef(options.initialPlayMethod)
    ? (options.initialPlayMethod) as Ref<PlayMethod>
    : ref<PlayMethod>((options.initialPlayMethod || 'circle') as PlayMethod)

  const isEndSong = computed(() => currentSong.value === playlist.value[playlist.value.length - 1])
  const isBeginningSong = computed(() => currentSong.value === playlist.value[0])

  /**
   * Push a song to the playlist end.
   *
   * @param {PlaylistItem} song The id to push.
   * @return {PushSongReturn}
   */
  function pushSong(song: PlaylistItem): PushSongReturn {
    if (playlist.value.includes(song)) {
      return {
        success: false,
        error: new PlaylistError(PushSongErrorEnum.AlreadyInPlaylist),
      }
    }
    else {
      playlist.value.push(song)
      return {
        success: true,
        data: undefined,
      }
    }
  }

  /**
   * Unshift a song to the playlist start.
   *
   * @param {PlaylistItem} song The id to unshift.
   */
  function unshiftSong(song: PlaylistItem): UnshiftSongReturn {
    if (!playlist.value.includes(song)) {
      return { success: false, error: new PlaylistError(UnshiftSongErrorEnum.NotInPlaylist) }
    }
    else {
      playlist.value.unshift(song)
      return {
        success: true,
        data: undefined,
      }
    }
  }

  /**
   * Check if the playlist has the song.
   *
   * @param {PlaylistItem} song The song to check.
   */
  function hasSong(song: PlaylistItem) {
    return playlist.value.includes(song)
  }

  /**
   * Replace a song in the playlist.
   *
   * @param {PlaylistItem} existingSong The existing song to replace.
   * @param {PlaylistItem} newSong The new song to replace.
   * @return {ReplaceSongReturn}
   */
  function replaceSong(existingSong: PlaylistItem, newSong: PlaylistItem): ReplaceSongReturn {
    if (!playlist.value.includes(existingSong)) {
      return {
        success: false,
        error: new PlaylistError(ReplaceSongEnum.ExistingSongNotInPlaylist),
      }
    }

    if (playlist.value.includes(newSong)) {
      return {
        success: false,
        error: new PlaylistError(ReplaceSongEnum.NewSongAlreadyInPlaylist),
      }
    }

    const index = playlist.value.indexOf(existingSong)
    playlist.value.splice(index, 1, newSong)
    return {
      success: true,
      data: undefined,
    }
  }

  /**
   * Clear the playlist.
   *
   * @return {void}
   */
  function clearPlaylist(): void {
    playlist.value = []
  }

  /**
   * Replace the playlist.
   *
   * @param {PlaylistItem[]} newPlaylist The new playlist.
   */
  function replacePlaylist(newPlaylist: PlaylistItem[]): void {
    playlist.value = newPlaylist
  }

  /**
   * Delete a song from the playlist.
   *
   * @param {PlaylistItem} song The song to delete.
   */
  function deleteSong(song: PlaylistItem): DeleteSongReturn {
    const index = playlist.value.indexOf(song)
    if (index === -1) {
      return {
        success: false,
        error: new PlaylistError(DeleteSongEnum.SongNotInPlaylist),
      }
    }
    playlist.value.splice(index, 1)
    return {
      success: true,
      data: undefined,
    }
  }

  function getNextSong(): GetNextSongReturn {
    if (playlist.value.length === 0)
      return { success: false, error: 'no-song' }

    if (playMethod.value === 'circle') {
      const index = playlist.value.indexOf(currentSong.value)
      if (index === playlist.value.length - 1)
        return { success: true, data: playlist.value[0] }
      else
        return { success: true, data: playlist.value[index + 1] }
    }
    else if (playMethod.value === 'random') {
      const index = Math.floor(Math.random() * playlist.value.length)
      return { success: true, data: playlist.value[index] }
    }
    else if (playMethod.value === 'single') {
      return { success: true, data: currentSong.value }
    }
    else {
      return { success: false, error: 'play-method-error' }
    }
  }

  function playNextSong(): PlayNextSongReturn {
    const nextSong = getNextSong()
    if (nextSong.success === true) {
      currentSong.value = nextSong.data
      return { success: true, data: nextSong.data }
    }
    else {
      return { success: false, error: nextSong.error }
    }
  }

  function getPrevSong(): GetPrevSongReturn {
    if (playlist.value.length === 0)
      return { success: false, error: 'no-song' }

    if (playMethod.value === 'circle') {
      const index = playlist.value.indexOf(currentSong.value)
      if (index === 0)
        return { success: true, data: playlist.value[playlist.value.length - 1] }
      else
        return { success: true, data: playlist.value[index - 1] }
    }
    else if (playMethod.value === 'random') {
      const index = Math.floor(Math.random() * playlist.value.length)
      return { success: true, data: playlist.value[index] }
    }
    else if (playMethod.value === 'single') {
      return { success: true, data: currentSong.value }
    }
    else {
      return { success: false, error: 'play-method-error' }
    }
  }

  function playPrevSong(): PlayNextSongReturn {
    const prevSong = getPrevSong()
    if (prevSong.success === true) {
      currentSong.value = prevSong.data
      return { success: true, data: prevSong.data }
    }
    else {
      return { success: false, error: prevSong.error }
    }
  }

  function togglePlayMethod() {
    if (playMethod.value === 'circle')
      playMethod.value = 'random'

    else if (playMethod.value === 'random')
      playMethod.value = 'single'

    else if (playMethod.value === 'single')
      playMethod.value = 'circle'
  }

  return {
    currentSong,
    isEndSong,
    isBeginningSong,
    playMethod,
    pushSong,
    hasSong,
    unshiftSong,
    replaceSong,
    deleteSong,
    clearPlaylist,
    replacePlaylist,
    getNextSong,
    playNextSong,
    getPrevSong,
    playPrevSong,
    togglePlayMethod,
  }
}
