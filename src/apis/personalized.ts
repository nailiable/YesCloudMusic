import { useRequest } from 'alova'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const PersonalizedResultSchema = z.object({
  id: z.number(),
  name: z.string(),
  picUrl: z.string(),
})

export const PersonalizedSchema = z.object({
  result: z.array(PersonalizedResultSchema),
})

export function usePersonalized(immediate: boolean = false, limit?: number, offset?: number) {
  const request = useRequest(
    alovaInstance().Get('/personalized', {
      transformData(data: AxiosResponse) {
        const parsedData = PersonalizedSchema.parse(data.data)
        parsedData.result = parsedData.result.map(item => ({
          ...item,
          picUrl: `${item.picUrl}?param=500y500`,
        }))
        return parsedData
      },
      params: { limit, offset },
    }),
    { immediate, initialData: { result: [] } },
  )
  return request
}
