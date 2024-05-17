<script setup lang="tsx">
import { z } from 'zod'

const message = useMessage()

const phone = ref('')
const captcha = ref('')

function validate() {
  return {
    validatePhone() {
      const phoneSchema = z.string().length(11).safeParse(phone.value)
      if (phoneSchema.success === false)
        message.error('请输入正确的手机号码')
      return phoneSchema.success
    },
    validateCaptcha() {
      const captchaSchema = z.string().length(6).safeParse(captcha.value)
      if (captchaSchema.success === false)
        message.error('请输入正确的验证码')
      return captchaSchema.success
    },
  }
}

function sendCaptcha(e: MouseEvent) {
  e.preventDefault()
  const isSuccess = validate().validatePhone() && validate().validateCaptcha()
  /* eslint-disable */
  if (!isSuccess) return

  // TODO: Send captcha
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
