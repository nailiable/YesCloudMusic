import { acceptHMRUpdate, defineStore } from 'pinia'

export interface CommonStoreServer {
  [serverName: string]: string
}

export const useCommonStore = defineStore('yes_cloud_music_common_store', () => {
  const locale = ref('zh-CN')
  const setLocale = (value: string) => {
    locale.value = value
  }

  const servers = ref<CommonStoreServer>({})
  const currentServer = ref<keyof CommonStoreServer | null>(null)
  const addServer = (serverName: string, serverUrl: string) => {
    servers.value[serverName] = serverUrl
  }
  const removeServer = (serverName: string) => {
    delete servers.value[serverName]
  }
  const setCurrentServer = (serverName: keyof CommonStoreServer) => {
    currentServer.value = serverName
  }
  const getCurrentServer = () => {
    if (!currentServer.value)
      return null
    return servers.value[currentServer.value]
  }
  const hasServer = (serverName: string) => {
    return serverName && serverName in servers.value
  }

  return {
    locale,
    setLocale,
    servers,
    currentServer,
    addServer,
    removeServer,
    setCurrentServer,
    getCurrentServer,
    hasServer,
  }
}, {
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore as any, import.meta.hot))
