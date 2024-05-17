import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import { axiosRequestAdapter } from '@alova/adapter-axios'
import axios from 'axios'

export function alovaInstance() {
  return createAlova({
    statesHook: VueHook,
    requestAdapter: axiosRequestAdapter({
      axios: axios.create({
        baseURL: 'https://server.xhhzs.cn',
      }),
    }),
  })
}
