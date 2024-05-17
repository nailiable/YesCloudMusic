<script setup lang="tsx">
import type { SelectMixedOption } from 'naive-ui/es/select/src/interface'
import { loadLanguageAsync } from '~/modules/i18n'

const commonStore = useCommonStore()
const { t, locale } = useI18n()
const { width } = useWindowSize()

const currentLocale = ref<'en' | 'zh-CN'>(commonStore.locale as 'en' | 'zh-CN')
const localeOptions = computed((): SelectMixedOption[] => ([
  { label: '简体中文', value: 'zh-CN' },
  { label: 'English', value: 'en' },
]))
watch(currentLocale, loadLanguageAsync)
watch(locale, value => currentLocale.value = value as 'en' | 'zh-CN')

const colorMode = ref<'light' | 'dark'>('dark')
const colorModeOptions = computed((): SelectMixedOption[] => ([
  { label: t('setting.basic-setting.color-mode-setting.light-mode'), value: 'light' },
  { label: t('setting.basic-setting.color-mode-setting.dark-mode'), value: 'dark' },
]))
watch(colorMode, value => toggleDark(value === 'dark'))
watch(isDark, value => colorMode.value = value ? 'dark' : 'light')
</script>

<template>
  <div id="setting" class="2xl:px70" lg:px-40 xl:px-60>
    <h1 mb4 block title-1 md:hidden>
      {{ $t('setting.name') }}
    </h1>
    <h2 mb4 :class="width > 768 ? 'title-2' : 'title-6'">
      {{ $t('setting.basic-setting.name') }}
    </h2>
    <section flex flex-col gap5>
      <FormItem label="语言" icon="i-ph-translate-duotone" label-position="left">
        <NSelect
          v-model:value="currentLocale"
          max-w-sm
          :options="localeOptions"
        />
      </FormItem>
      <FormItem label="颜色模式" icon="i-ph-moon-duotone" label-position="left">
        <NSelect
          v-model:value="colorMode"
          max-w-sm
          :options="colorModeOptions"
        />
      </FormItem>
    </section>
  </div>
</template>
