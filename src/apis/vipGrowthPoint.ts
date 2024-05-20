import { useRequest } from 'alova'
import { z } from 'zod'
import type { AxiosResponse } from 'axios'

export const VipGrowthPointDataLevelCardSchema = z.object({
  redVipImageUrl: z.string().default(''),
})

export const VipGrowthPointDataUserLevelSchema = z.object({
  growthPoint: z.number().default(0),
  expireTime: z.number().default(new Date().getTime()),
})

export const VipGrowthPointDataSchema = z.object({
  levelCard: VipGrowthPointDataLevelCardSchema.default({ redVipImageUrl: '' }),
  userLevel: VipGrowthPointDataUserLevelSchema.default({ growthPoint: 0 }),
})

export const VipGrowthPointSchema = z.object({
  data: VipGrowthPointDataSchema.default({ levelCard: { redVipImageUrl: '' }, userLevel: { growthPoint: 0 } }),
})

export function useVipGrowthPoint(immediate: boolean = false) {
  return useRequest(
    alovaInstance().Get('/vip/growthpoint', {
      transformData(data: AxiosResponse) {
        return VipGrowthPointSchema.parse(data.data)
      },
    }),
    {
      immediate,
      initialData: VipGrowthPointSchema.parse({}),
    },
  )
}
