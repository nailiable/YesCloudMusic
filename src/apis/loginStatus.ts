import { useRequest } from 'alova'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const LoginStatusDataSchema = z.object({
  // account: z.object({
  //   id: z.number(),
  //   userName: z.string(),
  //   type: z.number(),
  //   status: z.number(),
  //   whitelistAuthority: z.number(),
  //   createTime: z.number(),
  //   tokenVersion: z.number(),
  //   ban: z.number(),
  //   baoyueVersion: z.number(),
  //   donateVersion: z.number(),
  //   vipType: z.number(),
  //   anonimousUser: z.boolean(),
  //   paidFee: z.boolean(),
  // }),
  profile: z.object({
    userId: z.number(),
    userType: z.number(),
    nickname: z.string(),
    avatarUrl: z.string(),
    lastLoginIP: z.string(),
    lastLoginTime: z.number(),
    birthday: z.number().nullable(),
    signature: z.string().nullable(),
  }),
})

export const LoginStatusSchema = z.object({
  data: LoginStatusDataSchema,
})

export function useLoginStatus(immediate: boolean = false) {
  return useRequest(
    alovaInstance().Get('/login/status', {
      transformData(data: AxiosResponse) {
        return LoginStatusSchema.parse(data.data)
      },
    }),
    {
      immediate,
      initialData: {
        data: {
          profile: {
            userId: 0,
            userType: 0,
            nickname: '',
            avatarUrl: '',
            lastLoginIP: '',
            lastLoginTime: 0,
            birthday: null,
            signature: '',
          },
        },
      },
    },
  )
}
