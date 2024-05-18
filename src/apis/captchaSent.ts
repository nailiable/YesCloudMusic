import { useRequest } from 'alova'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const captchaSentSchema = z.object({
  code: z.number(),
  data: z.literal(true).optional(),
  message: z.string().optional(),
})

export function useCaptchaSent(immediate: boolean = false, phone: string) {
  return useRequest(
    alovaInstance().Get('/captcha/sent', {
      transformData(data: AxiosResponse) {
        return captchaSentSchema.parse(data.data)
      },
      params: { phone },
    }),
    { immediate },
  )
}
