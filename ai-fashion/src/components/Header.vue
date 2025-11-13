<script setup>
import LangSwitcher from './Lang.vue'
</script>

<template>
  <header class="header">
    <div class="header__row">
      <a href="#" class="logo">AI Fashion</a>
      <nav class="nav">
        <!-- <a href="#hero">{{ $t('nav.home') }}</a> -->
        <a href="#examples">{{ $t('nav.examples') }}</a>
        <a href="#process">{{ $t('nav.process') }}</a>
        <a href="#usecases">{{ $t('nav.useCases') }}</a>
        <a href="#contact">{{ $t('nav.contact') }}</a>
      </nav>
      <LangSwitcher />
    </div>
  </header>
</template>
