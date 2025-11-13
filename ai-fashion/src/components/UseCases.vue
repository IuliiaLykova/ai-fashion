<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n({ useScope: 'global' })

// Берём массив карточек из текущей локали
const cards = computed(() => (tm('use-cases.cards') as any[]) ?? [])

// Медиа по id (не локализуется)
const cardMedia: Record<string, { icon?: string; img?: string }> = {
  tryon:  { icon: 'ph:t-shirt',     img: 'tryon.jpeg' },
  drafts: { icon: 'ph:ruler',       img: 'look_drafts.jpeg' },
  ads:    { icon: 'ph:film-strip',  img: 'campaign_visuals.jpeg' },
}
</script>

<template>
  <section class="use-cases" id="use-cases">
    <div class="container">
      <h2>{{ t('use-cases.title') }}</h2>
      <p>{{ t('use-cases.description') }}</p>

      <div class="grid-3" style="margin-top:24px">
        <article
          v-for="card in cards"
          :key="card.id"
          class="card"
        >
          <img
            v-if="cardMedia[card.id]?.img"
            :src="cardMedia[card.id].img"
            alt=""
            class="card__media"
          />
          <div class="card_text">

            <h3 class="card__title">{{ card.title }}</h3>
            <p class="card__desc">{{ card.description }}</p>

          </div>
        </article>
      </div>
    </div>
  </section>
</template>