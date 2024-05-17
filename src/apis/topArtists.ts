import { useRequest } from 'alova'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const TopArtistArtistsSchema = z.object({
  id: z.number(),
  name: z.string(),
  picUrl: z.string(),
})

export const TopArtistSchema = z.object({
  artists: z.array(TopArtistArtistsSchema),
})

export function useTopArtists(immediate: boolean = false, limit?: number, offset?: number) {
  return useRequest(
    alovaInstance().Get('/top/artists', {
      transformData(data: AxiosResponse) {
        const parsedData = TopArtistSchema.parse(data.data)
        parsedData.artists = parsedData.artists.map(item => ({
          ...item,
          picUrl: `${item.picUrl}?param=500y500`,
        }))
        return parsedData
      },
      params: { limit, offset },
    }),
    { immediate, initialData: { artists: [] } },
  )
}
