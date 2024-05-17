<script setup lang="tsx">
const userStore = useUserStore()
const router = useRouter()
const message = useMessage()
const { t } = useI18n()

if (!userStore.currentUser) {
  message.warning(t('my.please-login'))
  router.push('/login')
}
</script>

<template>
  hello
</template>
