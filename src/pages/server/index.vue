<script setup lang="tsx">
const store = useCommonStore()
</script>

<template>
  <div>
    <h1 text-center title-1 md:mt-30>
      {{ $t('server.name') }}
    </h1>
    <p md:text-size-md mt6 text-center text-size-sm class="dark:text-white/50">
      {{ $t("server.description") }}
    </p>
    <NEmpty v-if="Object.keys(store.servers).length === 0" mt10 :description="$t('server.no-server')">
      <template #extra>
        <button mt3 flex items-center justify-center gap1 smooth btn scale btn-primary md:px-4 md:py-1.5>
          <div i-ph-plus-circle-duotone text-size-3 />
          {{ $t('server.add-new-server') }}
        </button>
      </template>
    </NEmpty>
    <div>
      <div v-for="(item, index) in store.servers" :key="index">
        {{ item }}
      </div>
    </div>
    <div mt3 flex items-center justify-center gap1 text-center text-size-3 opacity70 scale class="color-black/70 dark:color-white/70 hover:color-black-black/100 hover:dark:color-white/100">
      <div i-ph-question-duotone />
      <RouterLink to="/server/help">
        {{ $t('server.unknown-what-is-server') }}
      </RouterLink>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
