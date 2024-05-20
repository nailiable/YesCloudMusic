<script setup lang="tsx">
const progress = useProgress()
const userStore = useUserStore()
const router = useRouter()
const message = useMessage()
const { t } = useI18n()
const { width } = useWindowSize()

const { data: loginStatus, onComplete: onLoginComplete } = useLoginStatus(true)
const { data: vipGrowthPoint } = useVipGrowthPoint(true)
onLoginComplete(() => progress.done())

if (!userStore.currentUser || Object.keys(userStore.users).length === 0) {
  message.warning(t('my.please-login'))
  router.push('/login')
}

function parseGender(gender: 0 | 1 | 2) {
  if (gender === 0)
    return '保密'
  else if (gender === 1)
    return '男'
  else if (gender === 2)
    return '女'
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
        {{ loginStatus.data.profile.nickname }}
      </h1>
      <img max-w-18 rounded-full smooth md:max-w-15 active:animate-bounce-alt :src="loginStatus.data.profile.avatarUrl">
    </section>

    <!-- 个人信息 -->
    <section id="info" mt3>
      <!-- eslint-disable -->
        <span opacity70 mr3>生日: {{ new Date(loginStatus.data.profile.birthday as number).toLocaleDateString() }}</span>
        <span opacity70 mr3>ID: {{ loginStatus.data.profile.userId }}</span>
        <span opacity70 mr3 inline-block>
          <div flex items-center justify-center gap0.5 relative top-0.8>
            <div v-if="loginStatus.data.profile.gender === 0" i-ph-gender-intersex-duotone />
            <div v-else-if="loginStatus.data.profile.gender === 1" i-ph-gender-male-duotone />
            <div v-else-if="loginStatus.data.profile.gender === 2" i-ph-gender-female-duotone />
            <div>{{ parseGender(loginStatus.data.profile.gender) }}</div>
          </div>
        </span>
        <span opacity70 mr3>成长值: {{ vipGrowthPoint.data.userLevel.growthPoint }}</span>
        <span opacity70 mr3>VIP过期时间: {{ new Date(vipGrowthPoint.data.userLevel.expireTime).toLocaleDateString() }}</span>
        <span opacity70 mr3 md:mr0>{{ vipGrowthPoint.data.userLevel.expireTime > new Date().getTime() ? '未过期': '已过期' }}</span>
        <img inline-block h-5 md:ml2 :src="vipGrowthPoint.data.levelCard.redVipImageUrl">
        <NDivider class="my2!" :vertical="width > 768 ? true : false" />
        <span opacity70 flex items-center gap1 inline-block>
          {{ loginStatus.data.profile.signature }}
          <button scale btn-gray rounded-full p1><div text-size-2.5 i-ph-pencil-simple-line-duotone /></button>
        </span>
    </section>

    <section></section>
  </div>
</template>
