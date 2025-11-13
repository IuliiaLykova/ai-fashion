<!-- src/components/Lang.vue -->
<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const options = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'ru', label: 'RU' }
]

function setLang(code) {
  locale.value = code
  localStorage.setItem('lang', code)
  document.documentElement.lang = code
}
</script>

<template>
  <div class="lang-switcher">
    <button
      v-for="o in options"
      :key="o.code"
      :class="['pill', { active: o.code === locale }]"
      @click="setLang(o.code)"
      aria-label="Change language"
    >
      {{ o.label }}
    </button>
  </div>
</template>
