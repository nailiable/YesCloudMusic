import type { GlobalThemeOverrides } from 'naive-ui'

export const NaiveLight = {
  LoadingBar: {
    common: {
      primaryColor: 'red',
      borderRadius: '6px',
    },
  },
  Message: {
    borderRadius: '6px',
    colorWarning: '#efa11f4d',
    colorError: '#D130504d',
    boxShadowWarning: 'none',
    boxShadowError: 'none',
  },
  Tabs: {
    tabTextColorActiveBar: '#E26365FF',
    tabTextColorHoverBar: '#E26365FF',
    barColor: '#E26365FF',
  },
} satisfies GlobalThemeOverrides

export const NaiveDark = {
  LoadingBar: {
    common: {
      primaryColor: 'red',
      borderRadius: '6px',
    },
  },
  Message: {
    borderRadius: '6px',
    colorInfo: '#48484E80',
    colorSuccess: '#48484E80',
    colorError: '#48484E80',
    colorWarning: '#431A1A80',
    colorLoading: '#48484E80',
    boxShadow: 'none',
    boxShadowInfo: 'none',
    boxShadowSuccess: 'none',
    boxShadowError: 'none',
    boxShadowWarning: 'none',
    boxShadowLoading: 'none',
  },
  Tabs: {
    tabTextColorActiveBar: '#E26365FF',
    tabTextColorHoverBar: '#E26365FF',
    barColor: '#E26365FF',
  },
} satisfies GlobalThemeOverrides
