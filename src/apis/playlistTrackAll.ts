import { useRequest } from 'alova'
import type { AxiosResponse } from 'axios'
import { z } from 'zod'

export const PlaylistTrackAllSongsArSchema = z.object({
  name: z.string().default(''),
})

export const PlaylistTrackAllSongsAlSchema = z.object({
  picUrl: z.string().default(''),
})

export const PlaylistTrackAllSongsSchema = z.object({
  name: z.string().default(''),
  ar: z.array(PlaylistTrackAllSongsArSchema).default([]),
  al: PlaylistTrackAllSongsAlSchema.default({}),
  dt: z.number().default(0),
})

export const PlaylistTrackAllSchema = z.object({
  songs: z.array(PlaylistTrackAllSongsSchema).default([]),
})

export function usePlaylistTrackAll(immediate: boolean = false, id: number, limit: number = 999) {
  return useRequest(
    alovaInstance().Get('/playlist/track/all', {
      params: { id, limit },
      transformData(data: AxiosResponse) {
        return PlaylistTrackAllSchema.parse(data.data)
      },
    }),
    {
      immediate,
      initialData: PlaylistDetailSchema.default({}).parse({}),
    },
  )
}
