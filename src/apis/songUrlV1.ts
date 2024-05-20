import { useRequest } from 'alova'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const SongUrlDataItemSchema = z.object({
  id: z.number(),
  url: z.string(),
})

export const SongUrlSchema = z.object({
  code: z.number(),
  data: z.array(SongUrlDataItemSchema),
})

export function useSongUrl(immediate: boolean = false, id: number) {
  return useRequest(
    alovaInstance().Get('/song/url', {
      params: { id },
      transformData(data: AxiosResponse) {
        return SongUrlSchema.parse(data.data)
      },
    }),
    { immediate },
  )
}
