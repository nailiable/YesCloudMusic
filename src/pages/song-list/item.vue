<script setup lang="tsx">
const router = useRouter()
const { params } = useRoute()
const { t } = useI18n()
const message = useMessage()

const { id } = (params || {}) as Record<'id', string | undefined>

if (!id) {
  message.error(t('song-list.item.error-not-found-id'))
  router.back()
  throw new Error('id is required')
}
</script>

<template>
  <div>ant</div>
</template>
