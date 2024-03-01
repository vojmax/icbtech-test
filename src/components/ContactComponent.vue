<template>
  <section v-if="language" class="container-fluid col-10 p-0">
    <div class="row mb-4">
      <h2 class="text-center">Kontakt</h2>
    </div>
    <div class="row align-items-center m-0">
      <div class="col-6 p-0 m-0">
        <img src="" width="800px" height="600px" style="border-radius: 32px" />
      </div>
      <div v-if="language === 'sr'" class="col-6 p-0">
        <h2 class="about_title">Lorem ipsum</h2>
        <div class="about_text"></div>
      </div>
      <div v-if="language === 'hu'" class="col-6">
        <h2 class="about_title">Lorem ipsum</h2>
        <div class="about_text"></div>
      </div>
    </div>
  </section>
  <div v-else>loading</div>
</template>

<script>
import { useLangStore } from '@/store/LangStore'

import { storeToRefs } from 'pinia'
export default {
  name: 'ContactComponent',
  // Your JavaScript code here

  setup() {
    const { language } = storeToRefs(useLangStore())

    return { language }
  }
}
</script>

<style scoped>
h2 {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 0.5em;
}
/* Your CSS code here */
</style>
