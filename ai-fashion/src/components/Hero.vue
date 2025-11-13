<template>
  <section class="hero" id="hero">
    <div class="container">
      <div class="title">
        <h1>{{ $t('hero.title') }}</h1>
        <h2>{{ $t('hero.subtitle') }}</h2>
      </div>
      <p>{{ $t('hero.description') }}</p>
      <div class="flex-center">
        <a href="#contact" class="btn">{{ $t('hero.cta') }}</a>
        <a href="#examples" class="btn btn--ghost">{{ $t('hero.examples') }}</a>
      </div>
      <!-- <div class="card" style="aspect-ratio: 16/10; overflow:hidden">
        <img src="/placeholder.jpeg" alt="AI Fashion Preview"
             style="width:100%; height:100%; object-fit:cover">
      </div> -->
    </div>
  </section>
</template>
