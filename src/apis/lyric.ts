import { useRequest } from 'alova'
import type { AxiosResponse } from 'axios'

export function useLyric(immediate: boolean = false, id: number) {
  return useRequest(
    alovaInstance().Get('/lyric', {
      params: { id },
      transformData(data: AxiosResponse) {
        return data.data
      },
    }),
    { immediate },
  )
}
