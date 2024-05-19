import { useRequest } from 'alova'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const LoginCellphoneSchema = z.object({
  cookie: z.string(),
  account: z.object({
    id: z.number(),
  }),
})

export function useLoginCellPhone(immediate: boolean = false, phone: string, captcha: string) {
  return useRequest(
    alovaInstance().Get('/login/cellphone', {
      params: { phone, captcha },
      transformData(data: AxiosResponse) {
        return LoginCellphoneSchema.parse(data.data)
      },
    }),
    { immediate, initialData: null },
  )
}
