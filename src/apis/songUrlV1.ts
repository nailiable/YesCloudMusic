import { useRequest } from 'alova'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const SongUrlDataItemSchema = z.object({
  id: z.number().default(0),
  url: z.string().default(''),
})

export const SongUrlSchema = z.object({
  code: z.number().default(0),
  data: z.array(SongUrlDataItemSchema).default([]),
})

export function useSongUrlInstance(id: number) {
  return alovaInstance().Get('/song/url', {
    params: { id },
    transformData(data: AxiosResponse) {
      return SongUrlSchema.parse(data.data)
    },
  })
}

export function useSongUrlDefaultValue() {
  return SongUrlSchema.default({}).parse({
    code: 0,
    data: [
      {
        id: 0,
        url: '',
      },
    ],
  })
}

export function useSongUrl(immediate: boolean = false, id: number) {
  return useRequest(
    useSongUrlInstance(id),
    { immediate, initialData: { } },
  )
}
