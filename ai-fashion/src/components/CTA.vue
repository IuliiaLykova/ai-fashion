<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <section class="cta dark" id="contact">
    <div class="container">
      <h2>
        {{ t('cta.title') }}
      </h2>

      <p>{{ t('cta.subtitle') }}</p>

      <div class="flex-center">
        <a href="mailto:iulia.shreyder@gmail.com" class="btn">
          {{ t('cta.write') }}
        </a>

        <a href="https://portfolio-2025-kappa-ten.vercel.app/"
           target="_blank"
           class="btn btn--ghost">
          {{ t('cta.portfolio') }}
        </a>
      </div>

    </div>
  </section>
</template>