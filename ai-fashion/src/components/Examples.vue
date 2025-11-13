<script setup>
const shots = [
  { src: 'placeholer.jpeg', cap: 'Streetwear / Virtual Fit' },
  { src: 'placeholer.jpeg', cap: 'Runway Mood / Stylized' },
  { src: 'placeholer.jpeg', cap: 'Studio Packshot' },
  { src: 'placeholer.jpeg', cap: 'Campaign Visual' },
  { src: 'placeholer.jpeg', cap: 'Editorial / Portrait' },
  { src: 'placeholer.jpeg', cap: 'Animation Still' },
]
</script>

<template>
  <section class="section" id="examples">
    <div class="container">
      <h2>Примеры</h2>
      <div class="grid-3" style="margin-top:24px">
        <figure v-for="(s,i) in shots" :key="i" class="card">
          <img :src="s.src" :alt="s.cap" style="width:100%; aspect-ratio:4/5; object-fit:cover">
          <figcaption style="padding:12px">{{ s.cap }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>