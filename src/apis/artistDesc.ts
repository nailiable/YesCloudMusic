import { useRequest } from 'alova'
import type { AxiosResponse } from 'axios'
import { z } from 'zod'

export const ArtistDescIntroductionSchema = z.object({
  ti: z.string().default(''),
  txt: z.string().default(''),
})

export const ArtistDescSchema = z.object({
  introduction: z.array(ArtistDescIntroductionSchema).default([]),
  briefDesc: z.string().default(''),
})

export function useArtistDesc(immediate: boolean = false, id: number) {
  return useRequest(
    alovaInstance().Get('/artist/desc', {
      params: { id },
      transformData(data: AxiosResponse) {
        return ArtistDescSchema.parse(data.data)
      },
    }),
    {
      immediate,
      initialData: {
        introduction: [
          {
            ti: '',
            txt: '',
          },
        ],
        briefDesc: '',
      } as z.infer<typeof ArtistDescSchema>,
    },
  )
}
