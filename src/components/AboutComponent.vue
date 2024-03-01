<template>
  <section v-if="aboutText" class="container-fluid col-10 p-0">
    <div class="row align-items-center m-0">
      <div v-if="language === 'sr'" class="col-6 p-0">
        <h2 class="about_title">Lorem ipsum</h2>
        <div class="about_text" v-html="aboutText.sr"></div>
      </div>
      <div v-if="language === 'hu'" class="col-6">
        <h2 class="about_title">Lorem ipsum</h2>
        <div class="about_text" v-html="aboutText.hu"></div>
      </div>
      <div class="col-6 p-0 m-0">
        <img :src="aboutImage" width="800px" height="600px" style="border-radius: 32px" />
      </div>
    </div>
  </section>
  <div v-else>loading</div>
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
h2 {
  font-weight: 600;
  margin-bottom: 0.5em;
}
.about_text {
  padding-right: 80px;
}
</style>
