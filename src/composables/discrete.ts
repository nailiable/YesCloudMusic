import { createDiscreteApi, darkTheme, zhCN } from 'naive-ui'
import naive from '~/configs/naive'

export const discreteApi = createDiscreteApi([], {
  configProviderProps: {
    theme: isDark.value ? darkTheme : null,
    locale: zhCN,
    themeOverrides: naive,
  },
})
