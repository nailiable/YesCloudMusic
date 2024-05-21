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

const { width } = useWindowSize()
const message = useMessage()
</script>

<template>
  <div :class="`${show ? 'block md:flex' : 'hidden'} bg-white/60 dark:bg-black/70 backdrop-blur-2xl`" fixed top-0 z-990 h-full w-full smooth md:justify-center>
    <div mx0 h-full rounded-lg md:mx30 md:mt20 md:h-md md:w-2xl>
      <NTabs :size="width < 768 ? 'large' : 'medium'" pl6 smooth class="bg-gray/10 md:bg-transparent">
        <NTab :name="1" label="单曲" />
        <NTab :name="100" label="艺人" />
        <NTab :name="10" label="专辑" />
        <NTab :name="1000" label="歌单" />
        <NTab :name="1002" label="用户" />
      </NTabs>
      <div flex items-center>
        <button p4 smooth md:rounded-l-full btn-gray @click="emit('update:show', false)">
          <div i-ph-sign-out relative text-size-3.3 smooth md:right--0.5 />
        </button>
        <input autofocus outline-none smooth btn-gray type="search" placeholder="请输入搜索内容..." class="h-12 w-full px4">
        <button p3.6 smooth md:rounded-r-full btn-gray @click="message.info($t('developing'))">
          <div i-ph-magnifying-glass-duotone relative text-size-4 smooth md:right-0.5 />
        </button>
      </div>
    </div>
  </div>
</template>
