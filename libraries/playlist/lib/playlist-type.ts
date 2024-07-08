import type { MaybeRef } from 'vue'
import type { Return } from '@naiable/utils'

export type PlaylistItem = string | number
export type PlayMethod = 'circle' | 'random' | 'single'
export interface UsePlaylistOptions {
  initialPlaylist?: MaybeRef<PlaylistItem[]>
  initialCurrentValue?: MaybeRef<PlaylistItem>
  initialPlayMethod?: MaybeRef<PlayMethod>
}

export type PlaylistErrorEnum = PushSongErrorEnum | UnshiftSongErrorEnum | ReplaceSongEnum | DeleteSongEnum
export class PlaylistError<Enum extends PlaylistErrorEnum> extends Error {
  constructor(public readonly errorEnum: Enum) {
    super(errorEnum)
  }
}

export enum PushSongErrorEnum {
  AlreadyInPlaylist = 'The song is already in the playlist.',
}
export type PushSongReturn = Return<undefined, PlaylistError<PushSongErrorEnum>>

export enum UnshiftSongErrorEnum {
  NotInPlaylist = 'The song is not in the playlist.',
}
export type UnshiftSongReturn = Return<undefined, PlaylistError<UnshiftSongErrorEnum>>

export enum ReplaceSongEnum {
  ExistingSongNotInPlaylist = 'The existing song is not in the playlist.',
  NewSongAlreadyInPlaylist = 'The new song is already in the playlist.',
}
export type ReplaceSongReturn = Return<undefined, PlaylistError<ReplaceSongEnum>>

export enum DeleteSongEnum {
  SongNotInPlaylist = 'The song is not in the playlist.',
}
export type DeleteSongReturn = Return<undefined, PlaylistError<DeleteSongEnum>>

export type GetNextSongReturn = Return<PlaylistItem, 'no-song' | 'play-method-error'>
export type PlayNextSongReturn = GetNextSongReturn

export type GetPrevSongReturn = Return<PlaylistItem, 'no-song' | 'play-method-error'>
export type PlayPrevSongReturn = GetPrevSongReturn
