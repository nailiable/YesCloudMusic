import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Return } from '@naiable/utils'

export interface User {
  [id: number]: string
}

export const useUserStore = defineStore('yes_cloud_music_user_store', () => {
  const users = reactive<User>({})
  const currentUser = ref<number | null>(null)

  const addUser = (id: number, cookie: string) => {
    users[id] = cookie
  }

  const removeUser = (id: number) => {
    delete users[id]
    if (currentUser.value === id)
      currentUser.value = null
  }

  const setCurrentUser = (id: number): Return<'SUCCESS', 'NOT_FOUND'> => {
    if (users[id] === undefined)
      return { success: false, error: 'NOT_FOUND' }
    currentUser.value = id
    return { success: true, data: 'SUCCESS' }
  }

  const getCurrentUserCookie = computed(() => currentUser.value !== null ? users[currentUser.value] : null)

  return {
    users,
    currentUser,
    addUser,
    removeUser,
    setCurrentUser,
    getCurrentUserCookie,
  }
}, {
  persist: {
    storage: localStorage,
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
