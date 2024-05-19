<script setup lang="tsx">
const progress = useProgress()
const userStore = useUserStore()
const router = useRouter()
const message = useMessage()
const { t } = useI18n()

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
    <div id="title" flex flex-col flex-col-reverse gap5 md:flex-row md:items-center>
      <h1 w-full title-1>
        {{ $t("my.hello") }}
        {{ data.data.profile.nickname }}
      </h1>
      <img max-w-18 rounded-full md:max-w-15 active:animate-bounce-alt :src="data.data.profile.avatarUrl">
    </div>
    <!-- 个人信息 -->
    <div id="info" flex flex-col gap5>
      <div mt5 flex flex-col gap2 md:mt1 md:flex-row>
        <!-- eslint-disable -->
        <div opacity70>生日: {{ new Date(data.data.profile.birthday as number).toLocaleDateString() }}</div>
        <div opacity70>ID: {{ data.data.profile.userId }}</div>
      </div>
    </div>
  </div>
</template>
