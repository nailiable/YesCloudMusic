import { createAlova, useRequest } from 'alova'
import { axiosRequestAdapter } from '@alova/adapter-axios'
import axios from 'axios'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const InnerVersionSchema = z.object({
  code: z.literal(200),
  data: z.object({
    version: z.string(),
  }),
})

export function useInnerVersion() {
  return {
    useInnerVersion(immediate: boolean = false) {
      return useRequest(this.getAlovaInstance(), { immediate })
    },
    getAlovaInstance: () => createAlova({
      requestAdapter: axiosRequestAdapter({
        axios: axios.create(),
      }),
    }).Get('/inner/version', {
      transformData(data: AxiosResponse) {
        return InnerVersionSchema.parse(data.data)
      },
    }),
  }
}
