import { useRequest } from 'alova'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const SongDetailSongsAlSchema = z.object({
  picUrl: z.string().default(''),
})

export const SongDetailSongsArSchema = z.object({
  name: z.string().default(''),
  id: z.number().default(0),
})

export const SongDetailSongsSchema = z.object({
  name: z.string().default(''),
  id: z.number().default(0),
  al: SongDetailSongsAlSchema.default({}),
  ar: z.array(SongDetailSongsArSchema).default([]),
})

export const SongDetailSchema = z.object({
  songs: z.array(SongDetailSongsSchema).default([]),
})

export function useSongDetailDefaultValue() {
  return SongDetailSchema.default({}).parse({
    songs: [
      {
        name: '',
        id: 0,
        al: {
          picUrl: '',
        },
        ar: [],
      },
    ],
  })
}

export function useSongDetailInstance(ids: number | string) {
  return alovaInstance().Get('/song/detail', {
    params: { ids },
    transformData(data: AxiosResponse) {
      return SongDetailSchema.parse(data.data)
    },
  })
}

export function useSongDetail(immediate: boolean = false, ids: number | string) {
  return useRequest(
    useSongDetailInstance(ids),
    {
      immediate,
      initialData: useSongDetailDefaultValue(),
    },
  )
}
