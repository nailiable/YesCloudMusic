import NProgress from 'nprogress'
import type { UserModule } from '~/types'

// eslint-disable-next-line import/no-mutable-exports
export let progress: NProgress.NProgress

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    progress = NProgress.configure({
      showSpinner: true,
    })
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        progress?.start()
    })
    router.afterEach(() => {
      progress?.done()
    })
  }
}
