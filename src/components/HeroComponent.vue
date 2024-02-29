<template>
  <section class="container-fluid col-10">
    <div v-if="welcome">
      <div class="row align-items-center">
        <div v-if="language === 'sr'" class="col-6">
          <div class="welcome_title" v-html="welcome.title.sr"></div>
          <div class="welcome_text" v-html="welcome.welcome_text.sr"></div>
          <button class="welcome_button">Saznajte više</button>
        </div>
        <div v-if="language === 'hu'" class="col-6">
          <div class="welcome_title" v-html="welcome.title.hu"></div>
          <div class="welcome_text" v-html="welcome.welcome_text.hu"></div>
          <button class="welcome_button">Tudjon meg többet</button>
        </div>
        <div class="col-6">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="4000">
                <img :src="imageOne" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img :src="imageTwo" class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>loading</div>
  </section>
</template>

<script>
import { useLangStore } from '../store/LangStore'
import { useHeroStore } from '../store/HeroStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'HeroComponent',

  setup() {
    const { language } = storeToRefs(useLangStore())

    const { welcome, imageOne, imageTwo } = storeToRefs(useHeroStore())

    return { welcome, language, imageOne, imageTwo }
  }
}
</script>

<style scoped>
section {
  margin: 228px auto 0;
  height: 600px;
}
.carousel-inner {
  border-radius: 32px;
}

.welcome_title,
.welcome_text {
  margin-bottom: 32px;
}
.welcome_button {
  font-size: 24px;
  font-weight: 500;
  color: white;
  background-color: transparent;
  background-image: linear-gradient(
    90deg,
    rgba(60, 173, 255, 0.15),
    rgba(60, 173, 255, 0),
    rgba(249, 37, 101, 0),
    rgba(249, 37, 101, 0.3)
  );
  border: 2px solid white;
  border-radius: 8px;
  padding: 0.6em 1.5em;
  cursor: pointer;
}
.welcome_button:hover {
  background-image: linear-gradient(
    90deg,
    rgba(60, 173, 255, 0.4),
    rgba(60, 173, 255, 0),
    rgba(249, 37, 101, 0),
    rgba(249, 37, 101, 0.8)
  );
}
</style>
