import { createDiscreteApi, darkTheme, zhCN } from 'naive-ui'
import { NaiveLight } from '~/configs/naive'

export const discreteApi = createDiscreteApi([], {
  configProviderProps: {
    theme: isDark.value ? darkTheme : null,
    locale: zhCN,
    themeOverrides: NaiveLight,
  },
})
