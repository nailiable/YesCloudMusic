// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
  },
  {
    rules: {
      'no-useless-return': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
      'no-console': 'off',
    },
  },
)
