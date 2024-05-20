<script setup lang="ts">
const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  secondary: { type: Number, default: 0 },
  modelValue: { type: Number, required: true },
})

const emit = defineEmits(['update:modelValue'])

const scrubber = ref()
const scrubbing = ref(false)
const pendingValue = ref(0)

useEventListener('mouseup', () => scrubbing.value = false)

const value = useVModel(props, 'modelValue', emit)
const { elementX, elementWidth } = useMouseInElement(scrubber)

watch([scrubbing, elementX], () => {
  const progress = Math.max(0, Math.min(1, (elementX.value) / elementWidth.value))
  pendingValue.value = progress * props.max
  if (scrubbing.value)
    value.value = pendingValue.value
})
</script>

<template>
  <div ref="scrubber" class="relative h-2 cursor-pointer select-none rounded bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-10" @mousedown="scrubbing = true">
    <div class="relative h-full w-full overflow-hidden rounded">
      <div class="absolute left-0 top-0 h-full w-full rounded bg-red-700 opacity-30" :style="{ transform: `translateX(${secondary / max * 100 - 100}%)` }" />
      <div class="relative h-full w-full rounded bg-red-500 transition-all transition-duration-150" :style="{ transform: `translateX(${value / max * 100 - 100}%)` }" />
    </div>
    <div class="absolute inset-0 opacity-0 hover:opacity-100" :class="{ '!opacity-100': scrubbing }">
      <slot :pending-value="pendingValue" :position="`${Math.max(0, Math.min(elementX, elementWidth))}px`" />
    </div>
  </div>
</template>
