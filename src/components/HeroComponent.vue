<template>
  <section id="home" class="container-fluid col-10 p-0" v-if="welcome">
    <div class="row align-items-center">
      <div v-if="language === 'sr'" class="col-6 p-0">
        <div class="welcome_title" v-html="welcome.title.sr"></div>
        <div class="welcome_text" v-html="welcome.welcome_text.sr"></div>
        <button class="welcome_button">Saznajte više</button>
      </div>
      <div v-if="language === 'hu'" class="col-6 p-0">
        <div class="welcome_title" v-html="welcome.title.hu"></div>
        <div class="welcome_text" v-html="welcome.welcome_text.hu"></div>
        <button class="welcome_button">Tudjon meg többet</button>
      </div>
      <div class="col-6 p-0">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="imageOne" class="fixed-height w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="imageTwo" class="fixed-height w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <div class="loading container-fluid col-10 p-0" v-else>
    <div class="row align-items-center">
      <h1>Loading...</h1>
    </div>
  </div>
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
section,
.loading {
  margin: 130px auto 0;
  height: 600px;
}
.carousel-inner {
  width: 800px;
  border-radius: 32px;
}
.carousel-item img {
  border-radius: 32px;
  height: 600px;
  width: 800px;
}
.welcome_title {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 0.5em;
}
.welcome_text {
  margin-bottom: 32px;
  padding-right: 80px;
}
.welcome_button {
  font-size: 24px;
  font-weight: 500;
  color: white;
  background-color: transparent;
  background: linear-gradient(
    273.22deg,
    rgba(60, 173, 255, 0.15) 0%,
    rgba(60, 173, 255, 0) 34.9%,
    rgba(249, 37, 101, 0) 63.54%,
    rgba(249, 37, 101, 0.3) 100%
  );
  border: 2px solid white;
  border-radius: 8px;
  padding: 0.6em 1.5em;
  cursor: pointer;
}
.welcome_button:hover {
  padding: 0.65em 1.55em;
  border: 1px solid white;
  background: linear-gradient(
    273.22deg,
    rgba(60, 173, 255, 0.4) 7.29%,
    rgba(60, 173, 255, 0) 44.79%,
    rgba(249, 37, 101, 0) 50%,
    rgba(249, 37, 101, 0.8) 92.71%
  );
}
</style>
