// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.scss'

import { createI18n } from 'vue-i18n'
import en from './i18n/en.json'
import de from './i18n/de.json'
import ru from './i18n/ru.json'

const startLocale = localStorage.getItem('lang') || 'de'   // выбери дефолт
const i18n = createI18n({
  legacy: false,
  locale: startLocale,
  fallbackLocale: 'en',
  messages: { en, de, ru },
})

// полезно для a11y/SEO
document.documentElement.lang = startLocale

const app = createApp(App)
app.use(i18n)
app.mount('#app')