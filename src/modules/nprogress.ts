import NProgress from 'nprogress'
import type { UserModule } from '~/types'

export const progress = NProgress.configure({
  showSpinner: true,
})

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        progress.start()
    })
    router.afterEach(() => {
      progress.done()
    })
  }
}
