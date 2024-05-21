import { isClient } from '@vueuse/core'

export type IRouterType = 'query' | 'params'

export function useNumberRoute<Key extends string>(k: Key, type: IRouterType = 'query'): number {
  const route = useRoute()
  const router = useRouter()
  const message = useMessage()
  const { t } = useI18n()

  const query = (route[type] || {}) as Record<Key, string>

  if (isClient && (!query[k] || !query[k].trim() || Number.isNaN(Number(query[k])))) {
    message.error(t('song-list.item.error-not-found-id'))
    router.back()
    throw new Error(`${k} is required`)
  }

  return Number(query[k])
}
