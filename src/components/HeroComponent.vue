<template>
  <section class="container-fluid col-10">
    <div v-if="welcomePage">
      <div class="row">
        <div v-if="language === 'sr'" class="col-6">
          <div v-html="welcomePage.title.sr"></div>
          <div v-html="welcomePage.welcome_text.sr"></div>
        </div>
        <div v-if="language === 'hu'" class="col-6">
          <div v-html="welcomePage.title.hu"></div>
          <div v-html="welcomePage.welcome_text.hu"></div>
        </div>
        <div class="col-6"></div>
      </div>
    </div>
    <div v-else>loading</div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useLangStore } from '../store/LangStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'HeroComponent',

  setup() {
    const { language } = storeToRefs(useLangStore())
    const welcomePage = ref()
    const error = ref(null)

    const load = async () => {
      try {
        const data = await fetch('https://ledbilbordi.web.icbtech.net/api/v1/welcome-page')
        if (!data.ok) {
          error.value = 'There was an error'
          console.log(error.value)
        }
        welcomePage.value = await data.json()
        console.log(welcomePage)
      } catch (err) {
        error.value = err.message
      }
    }
    load()

    return { welcomePage, language, error }
  }
}
</script>

<style scoped>
section {
  margin: 228px auto 0;
  height: 600px;
}
</style>
