import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import { axiosRequestAdapter } from '@alova/adapter-axios'
import axios from 'axios'

export function alovaInstance() {
  const commonStore = useCommonStore()
  const router = useRouter()

  const currentServer = commonStore.getCurrentServer()
  if (!currentServer)
    router.push('/server')

  return createAlova({
    statesHook: VueHook,
    requestAdapter: axiosRequestAdapter({
      axios: axios.create({
        baseURL: 'https://server.xhhzs.cn',
        withCredentials: true,
      }),
    }),
  })
}
