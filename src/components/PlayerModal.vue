<script setup lang="tsx">
import type { UseMediaControlsReturn } from '@vueuse/core'

const props = defineProps({
  show: { type: Boolean, default: false },
})
const emit = defineEmits(['update:show'])
watch(props, () => {
  if (props.show === true)
    document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
})

// const musicStore = useMusicStore()
const audioController = inject<UseMediaControlsReturn>('audioController')!
const audio = inject<Ref<HTMLAudioElement>>('audio')!
if (!audioController || !audio)
  throw new Error('Missing audio controller or audio element')
</script>

<template>
  <div
    id="player"
    fixed top-0 z-999 h-full w-full overflow-auto smooth
    :class="`color-white backdrop-blur-1 ${show ? 'transform-translate-y-0 bg-black/85' : 'pointer-events-none transform-translate-y-100 opacity-0 bg-black/0'}`"
  >
    <button w-full flex justify-center py3 smooth btn-hover-gray md:py5 @click="emit('update:show')">
      <div i-ph-caret-double-down-duotone text-size-2xl />
    </button>
  </div>
</template>

<style lang="less" scoped />
