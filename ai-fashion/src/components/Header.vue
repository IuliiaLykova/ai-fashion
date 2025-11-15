<script setup>
import { ref } from 'vue'
import LangSwitcher from './Lang.vue'

const isOpen = ref(false)

const toggleNav = () => {
  isOpen.value = !isOpen.value
}

const closeNav = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header__row">
      <a href="#hero" class="logo">AI Fashion</a>

      <!-- Бургер-кнопка -->
      <button class="nav-toggle" type="button" @click="toggleNav" :class="{ 'nav-toggle--open': isOpen }"
        aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Навигация -->
      <nav class="nav" :class="{ 'nav--open': isOpen }">
        <a href="#examples" @click="closeNav">{{ $t('nav.examples') }}</a>
        <a href="#process" @click="closeNav">{{ $t('nav.process') }}</a>
        <a href="#use-cases" @click="closeNav">{{ $t('nav.useCases') }}</a>
        <a href="#contact" @click="closeNav">{{ $t('nav.contact') }}</a>
      </nav>

      <LangSwitcher />
    </div>
  </header>
</template>