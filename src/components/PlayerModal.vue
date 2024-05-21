<script setup lang="tsx">
defineProps<{
  show: boolean
}>()

const emit = defineEmits(['update:show'])
</script>

<template>
  <div
    id="player"
    fixed top-0 z-999 h-full w-full flex flex-col items-center justify-center overflow-auto smooth
    :class="`color-white backdrop-blur-xl ${show ? 'transform-translate-y-0 bg-black/85' : 'pointer-events-none transform-translate-y-100 opacity-0 bg-black/0'}`"
  >
    <OldPlayer @exit="emit('update:show', false)" />
  </div>
</template>

<style lang="less" scoped />
