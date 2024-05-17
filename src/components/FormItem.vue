<script setup lang="tsx">
defineProps<{
  label?: string
  icon?: string
  labelPosition?: 'top' | 'left'
}>()
</script>

<template>
  <div :class="`form-item ${labelPosition === 'left' ? 'flex justify-between' : ''}`">
    <label w-full flex items-center gap1 text-size-sm>
      <div v-if="icon" :class="icon" />
      <div>{{ label }}</div>
    </label>
    <div mt1 w-full flex justify-end>
      <slot />
    </div>
  </div>
</template>
