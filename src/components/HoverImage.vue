<script setup lang="tsx">
defineProps<{
  src?: string
  imageClass?: string
}>()
</script>

<template>
  <div class="hover-image-container" relative h-full w-full smooth>
    <img class="hover-image" :src="src" :class="`relative z-1 rounded-lg object-cover smooth scale ${imageClass}`">
    <img class="hover-image-shadow" :src="src" :class="`absolute top-0 z-0 smooth hover:block ${imageClass}`">

    <div pointer-events-none absolute top-0 z-1 h-full w-full flex items-center justify-center smooth>
      <slot name="center" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.hover-image-shadow {
  --un-blur: blur(16px);
  transform: scale(0.5);
  filter: var(--un-blur) var(--un-brightness) var(--un-contrast)
    var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate)
    var(--un-invert) var(--un-saturate) var(--un-sepia);
}
.hover-image-container:hover .hover-image-shadow {
  transform: scale(0.75) translateY(30px);
}
</style>
