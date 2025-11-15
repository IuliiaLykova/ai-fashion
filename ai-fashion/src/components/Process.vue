<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n({ useScope: 'global' })

// Берём массив шагов из языка
const steps = computed(() => (tm('process.steps') as any[]) ?? [])
</script>

<template>
  <section class="section" id="process">
    <div class="container">
      <h2>{{ t('process.title') }}</h2>

      <div class="grid-3" style="margin-top:24px">
        <div
          v-for="step in steps"
          :key="step.id"
          class="card"
          style="padding:20px"
        >
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>