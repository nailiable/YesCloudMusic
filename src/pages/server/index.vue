<script setup lang="tsx">
const store = useCommonStore()

const editableViewState = reactive({
  isShow: false,
  name: '',
  url: '',
})
</script>

<template>
  <div>
    <!-- 标题 -->
    <h1 text-center title-1 md:mt-30>
      {{ $t('server.name') }}
    </h1>

    <!-- 描述 -->
    <p md:text-size-md mt6 text-center text-size-sm class="dark:text-white/50">
      {{ $t("server.description") }}
    </p>

    <!-- 添加服务器 弹框 -->
    <div v-if="editableViewState.isShow" fixed left-0 top-0 z-999 h-full w-full flex class="bg-white/60 backdrop-blur-xl dark:bg-black/60">
      <form mt10 w-full flex flex-col items-center justify-center gap3>
        <div md:border="1px solid black/10 dark:white/10" max-w-sm w-full rounded-2xl p8>
          <!-- eslint-disable -->
          <h1 mb8 text-center title-3>{{ $t('server.add-new-server') }}</h1>
          <NFormItem w-full size="small" label="请输入名称">
            <input w-full type="text" v-model="editableViewState.name" btn scale btn-gray placeholder="请输入名称，必须唯一">
          </NFormItem>
          <NFormItem w-full size="small" label="请输入URL">
            <input w-full type="text" v-model="editableViewState.url" btn scale btn-gray placeholder="请输入 URL">
          </NFormItem>
          <div w-full flex justify-center gap3>
            <input w-full btn scale btn-gray type="button" value="取消" @click="editableViewState.isShow = false">
            <input w-full btn scale btn-primary type="submit" value="提交">
          </div>
        </div>
      </form>
    </div>

    <!-- 空，无服务器时 -->
    <NEmpty v-if="Object.keys(store.servers).length === 0" mt10 :description="$t('server.no-server')">
      <template #extra>
        <button mt3 flex items-center justify-center gap1 smooth btn scale btn-primary md:px-4 md:py-1.5 @click="editableViewState.isShow = !editableViewState.isShow">
          <div i-ph-plus-circle-duotone text-size-3 />
          {{ $t('server.add-new-server') }}
        </button>
      </template>
    </NEmpty>

    <!-- 这才是真正的服务器列表 -->
    <div w-full flex justify-center mt10>
      <div v-for="(address, name) in store.servers" :key="name">
        <div w-full border="1px solid black/10 dark:white/10" pr10 pl8 py3 rounded-lg flex flex-col>
          <button btn scale btn-gray rounded-full p3 type="button" @click="store.removeServer(name as string)">
            <div i-ph-trash-duotone />
            {{ address }}
          </button>
        </div>
      </div>
    </div>

    <!-- 帮助按钮 -->
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
