import { useRequest } from 'alova'
import type { AxiosResponse } from 'axios'
import { z } from 'zod'

export const ArtistDetailDataArtistSchema = z.object({
  avatar: z.string().default(''),
  name: z.string().default(''),
})

export const ArtistDetailDataSchema = z.object({
  artist: ArtistDetailDataArtistSchema.default({ avatar: '' }),
})

export const ArtistDetailSchema = z.object({
  data: ArtistDetailDataSchema.default({ artist: { avatar: '' } }),
})

export function useArtistDetail(immediate: boolean = false, id: number) {
  return useRequest(
    alovaInstance().Get('/artist/detail', {
      params: { id },
      transformData(data: AxiosResponse) {
        return ArtistDetailSchema.parse(data.data)
      },
    }),
    {
      immediate,
      initialData: { data: { artist: { avatar: '' } } } as z.infer<typeof ArtistDetailSchema>,
    },
  )
}
