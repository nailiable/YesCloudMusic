import { useRequest } from 'alova'
import type { AxiosResponse } from 'axios'
import { z } from 'zod'

export const PlaylistDetailPlaylistSchema = z.object({
  id: z.number().default(0),
  name: z.string().default(''),
  coverImgUrl: z.string().default(''),
  tags: z.array(z.string()).default([]),
  description: z.string().nullable().default(''),
  createTime: z.number().default(0),
  userId: z.number().default(0),
  playCount: z.number().default(0),
})

export const PlaylistDetailSchema = z.object({
  playlist: PlaylistDetailPlaylistSchema.default({}),
})

export function usePlaylistDetail(immediate: boolean = false, id: number) {
  return useRequest(
    alovaInstance().Get('/playlist/detail', {
      params: { id },
      transformData(data: AxiosResponse) {
        return PlaylistDetailSchema.parse(data.data)
      },
    }),
    {
      immediate,
      initialData: PlaylistDetailSchema.default({}).parse({}),
    },
  )
}
