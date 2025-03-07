import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import { axiosRequestAdapter } from '@alova/adapter-axios'
import axios from 'axios'

export function alovaInstance() {
  /// TODO：服务器页面做好之后，再取消注释
  // const commonStore = useCommonStore()
  // const router = useRouter()

  // const currentServer = commonStore.getCurrentServer()
  // if (!currentServer)
  //   router.push('/server')

  const userStore = useUserStore()
  const currentUserCookie = userStore.getCurrentUserCookieRaw()

  return createAlova({
    statesHook: VueHook,
    requestAdapter: axiosRequestAdapter({
      axios: axios.create({
        baseURL: 'https://server.xhhzs.cn',
        withCredentials: true,
        params: {
          cookie: currentUserCookie,
          timestamp: Date.now(),
        },
      }),
    }),
  })
}
