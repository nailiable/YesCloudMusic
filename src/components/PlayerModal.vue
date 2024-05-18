<script setup lang="tsx">
const props = defineProps({
  show: { type: Boolean, default: false },
})
const emit = defineEmits(['update:show'])
watch(props, () => {
  if (props.show === true)
    document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
})
</script>

<template>
  <Teleport to="body">
    <div
      id="player"
      fixed top-0 z-999 h-full w-full overflow-auto smooth
      :class="`color-white backdrop-blur-1 ${show ? 'transform-translate-y-0 bg-black/85' : 'pointer-events-none transform-translate-y-100 opacity-0 bg-black/0'}`"
    >
      <button smooth btn btn-gray @click="emit('update:show')">
        关闭
      </button>
    </div>
  </Teleport>
</template>

<style lang="less" scoped />
