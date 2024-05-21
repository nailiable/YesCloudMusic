import { useRequest } from 'alova'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const UserPlayListItemCreatorSchema = z.object({
  avatarUrl: z.string().default(''),
  name: z.string().default(''),
  backgroundUrl: z.string().default(''),
})

export const UserPlayListItemSchema = z.object({
  creator: UserPlayListItemCreatorSchema.default({}),
  name: z.string().default(''),
  coverImgUrl: z.string().default(''),
  id: z.number().default(0),
})

export const UserPlayListSchema = z.object({
  playlist: z.array(UserPlayListItemSchema).default([]),
})

export function useUserPlayList(immediate: boolean = false, uid?: number) {
  const userStore = useUserStore()

  return useRequest(
    alovaInstance().Get('/user/playlist', {
      params: { uid: uid || userStore.currentUser },
      transformData(data: AxiosResponse) {
        return UserPlayListSchema.parse(data.data)
      },
    }),
    {
      immediate,
      initialData: UserPlayListSchema.parse({}),
    },
  )
}
