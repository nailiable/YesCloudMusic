import { progress } from '~/modules/nprogress'

export function useProgress() {
  progress.start()
  return progress
}
