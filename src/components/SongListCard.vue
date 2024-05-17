<script setup lang="tsx">
defineProps<{
  title?: string
  src?: string
  imageClass?: string
}>()

const slots = useSlots()
</script>

<template>
  <div class="song-list-card" relative h-full flex flex-col cursor-pointer gap2 smooth>
    <HoverImage :src="src" :image-class="`${imageClass ? imageClass : ''}`">
      <template #center>
        <slot name="center" />
      </template>
    </HoverImage>
    <div v-if="slots.title">
      <slot name="title" :title="title" />
    </div>
    <div v-else overflow-hidden text-truncate smooth active:opacity80 hover:opacity65>
      {{ title }}
    </div>
  </div>
</template>

<style lang="less" scoped />
