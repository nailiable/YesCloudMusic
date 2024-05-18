<script setup lang="tsx">
import { z } from 'zod'

const message = useMessage()
const { t } = useI18n()

const phone = ref('')
const captcha = ref('')

function validate() {
  return {
    validatePhone() {
      const phoneSchema = z.string()
        .transform(v => v.trim())
        .safeParse(phone.value)
      if (phoneSchema.success === false)
        message.error(t('my.login.validate-phone-error'))
      return phoneSchema.success
    },
    validateCaptcha() {
      const captchaSchema = z.string()
        .transform(v => v.trim())
        .safeParse(captcha.value)
      if (captchaSchema.success === false)
        message.error(t('my.login.validate-captcha-error'))
      return captchaSchema.success
    },
  }
}

async function sendCaptcha(e: MouseEvent) {
  e.preventDefault()
  const isSuccess = validate().validatePhone()
  /* eslint-disable */
  if (!isSuccess) return

  // TODO: Send captcha
  const { code, message: ResponseMessage } = await useCaptchaSent(true, phone.value).send()
  if (!code || code !== 200)
    return message.error(ResponseMessage || t('my.login.send-captcha-error'))
  message.success(t('my.login.send-captcha-success'))
}

function onFormSubmit(e: Event) {
  e.preventDefault()
  const isSuccess = validate().validatePhone() && validate().validateCaptcha()
  /* eslint-disable */
  if (!isSuccess) return

  // TODO: Login

}
</script>

<template>
  <div id="login" flex flex-col items-center justify-center>
    <!-- eslint-disable -->
    <h1 mt5 md:mt20 title-1>{{ $t('my.login.name') }}</h1>
    <form w-full md:w-sm mt10 smooth flex flex-col gap5 @submit="onFormSubmit">
      <div flex items-center gap3 relative>
        <div i-ph-phone-duotone text-size-xl md:absolute md:left--10 />
        <input v-model="phone" type="tel" outline-none smooth btn-gray px4 py3 w-full rounded-lg id="username" :placeholder="$t('my.login.phone')" />
      </div>
      <div flex items-center gap3 relative>
        <div i-ph-lock-duotone text-size-xl md:absolute md:left--10 />
        <div flex w-full>
          <input v-model="captcha" outline-none smooth btn-gray px4 py3 w-full rounded-l-lg rounded-r-none type="tel" id="username" :placeholder="$t('my.login.captcha')" />
          <button @click="sendCaptcha" text-nowrap smooth btn-gray px5 rounded-r-lg>{{ $t("my.login.send-captcha") }}</button>
        </div>
      </div>
      <input type="submit" smooth btn-primary px4 py3 rounded-lg :value="$t('my.login.submit')"/>
    </form>
  </div>
</template>
