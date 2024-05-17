import { acceptHMRUpdate, defineStore } from 'pinia'

export const useCommonStore = defineStore('yes_cloud_music_common_store', () => {
  const locale = ref('zh-CN')

  const setLocale = (value: string) => {
    locale.value = value
  }

  return {
    locale,
    setLocale,
  }
}, {
  persist: {
    storage: localStorage,
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore as any, import.meta.hot))
