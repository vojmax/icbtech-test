<template>
  <section class="container-fluid col-10">
    <div class="row">
      <div class="col-6">
        <h1 ref="title">HeroComponent</h1>
      </div>
      <div class="col-6"></div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HeroComponent',
  props: {
    lang: String
  },

  setup() {
    const welcomePage = ref()
    // const title = ref()
    // const image= ref()
    // const welcomeText = ref()
    // const button = ref()
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
    return { welcomePage, error }
  }
}
</script>

<style scoped>
section {
  margin: 228px auto 0;
  height: 600px;
}
</style>
