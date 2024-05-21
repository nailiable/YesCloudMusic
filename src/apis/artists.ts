import { useRequest } from 'alova'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const ArtistsArtistSchema = z.object({
  briefDesc: z.string().default(''),
  picUrl: z.string().default(''),
  img1v1Url: z.string().default(''),
  name: z.string().default(''),
  id: z.number().default(0),
})

export const ArtistsSchema = z.object({
  artist: ArtistsArtistSchema.default({}),
})

export function useArtists(immediate: boolean = false, id: number) {
  return useRequest(
    alovaInstance().Get('/artists', {
      params: { id },
      transformData(data: AxiosResponse) {
        return ArtistsSchema.parse(data.data)
      },
    }),
    {
      immediate,
      initialData: {
        artist: {
          id: 0,
          name: '',
          briefDesc: '',
          picUrl: '',
          img1v1Url: '',
        },
      } as z.infer<typeof ArtistsSchema>,
    },
  )
}
