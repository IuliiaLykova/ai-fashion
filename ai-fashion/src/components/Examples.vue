<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n({ useScope: 'global' })

// массив карточек с текстом из i18n
const cards = computed(() => (tm('examples.cards') as any[]) ?? [])

// медиа-карты: key = id из JSON, value = путь к картинке
const imageMap: Record<string, string> = {
  street: './1.jpeg',
  runway: './2.jpeg',
  studio: './3.jpeg',
  campaign: './4.jpeg',
  editorial: './5.jpeg',
  anim: './6.jpeg',
}
</script>

<template>
  <section class="section" id="examples">
    <div class="container">
      <h2>{{ t('examples.title') }}</h2>

      <div class="grid-3" style="margin-top:24px">
        <article v-for="card in cards" :key="card.id" class="card">
          <img :src="imageMap[card.id]" :alt="card.caption" class="card__media" />
          <div class="card_text">

            <h3 class="card__title">{{ card.caption }}</h3>
            <p class="card__desc">{{ card.description }}</p>

          </div>
        </article>
      </div>
    </div>
  </section>
</template>