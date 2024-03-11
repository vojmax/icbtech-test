<template>
  <div class="section-row row mx-0">
    <section id="about" v-if="aboutText" class="container-fluid col-10">
      <div v-if="language === 'sr'" class="row mb-4">
        <h2 class="text-center">O nama</h2>
      </div>
      <div v-if="language === 'hu'" class="row mb-4">
        <h2 class="text-center">Rólunk</h2>
      </div>
      <div class="row align-items-center m-0">
        <div v-if="language === 'sr'" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
          <h3 class="about_title">Lorem ipsum</h3>
          <div class="about_text" v-html="aboutText.sr"></div>
        </div>
        <div v-if="language === 'hu'" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
          <h3 class="about_title">Lorem ipsum</h3>
          <div class="about_text" v-html="aboutText.hu"></div>
        </div>
        <div class="col-xl-6 col-sm-12">
          <img :src="aboutImage" class="fixed-height w-100" style="border-radius: 32px" />
        </div>
      </div>
    </section>
    <div v-else>loading</div>
  </div>
</template>

<script>
import { useAboutStore } from '@/store/AboutStore'
import { useLangStore } from '@/store/LangStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'AboutComponent',

  setup() {
    const { language } = storeToRefs(useLangStore())

    const { aboutText, aboutImage } = storeToRefs(useAboutStore())

    return { aboutText, aboutImage, language }
  }
}
</script>

<style scoped>
.section-row {
  margin-top: 10%;
}
h2 {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 0.5em;
}

h3 {
  font-size: 32px;
  font-weight: 600;
}
.about_text {
  padding-right: 80px;
}
</style>
