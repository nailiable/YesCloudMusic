<script setup lang="tsx">
const progress = useProgress()
const userStore = useUserStore()
const router = useRouter()
const message = useMessage()
const { t } = useI18n()
const { width } = useWindowSize()

const { data, onComplete } = useLoginStatus(true)
onComplete(() => progress.done())

if (!userStore.currentUser || Object.keys(userStore.users).length === 0) {
  message.warning(t('my.please-login'))
  router.push('/login')
}
</script>

<template>
  <div class="2xl:px70 xl:px-40">
    <!-- 标题 -->
    <section id="title" flex flex-col flex-col-reverse gap3 md:flex-row md:items-center md:gap5>
      <h1 w-full flex md:title-1 title-3>
        <div hidden md:block>
          {{ $t("my.hello") }}
        </div>
        {{ data.data.profile.nickname }}
      </h1>
      <img max-w-18 rounded-full smooth md:max-w-15 active:animate-bounce-alt :src="data.data.profile.avatarUrl">
    </section>

    <!-- 个人信息 -->
    <section id="info" mt3 md:flex md:items-center>
      <!-- eslint-disable -->
        <span opacity70 mr3>生日: {{ new Date(data.data.profile.birthday as number).toLocaleDateString() }}</span>
        <span opacity70 mr3 md:mr0>ID: {{ data.data.profile.userId }}</span>
        <NDivider class="my2!" :vertical="width > 768 ? true : false" />
        <span opacity70 flex items-center gap1>
          {{ data.data.profile.signature }}
          <button scale btn-gray rounded-full p1><div text-size-2.5 i-ph-pencil-simple-line-duotone /></button>
        </span>
    </section>

    <section></section>
  </div>
</template>
