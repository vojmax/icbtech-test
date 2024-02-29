<template>
  <section class="container-fluid col-10">
    <div v-if="language">
      <div class="row mb-4">
        <h2 class="text-center">Map Component</h2>
      </div>
      <div class="map container-fluid">
        <div class="row">
          <div class="col-8">
            <img src="https://i.stack.imgur.com/HILmr.png" width="1000" height="530" />
          </div>
          <div class="col-4">
            <h3>{{ language }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div v-else>loading</div>
  </section>
</template>

<script>
import { useLangStore } from '@/store/LangStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'MapComponent',

  setup() {
    const { language } = storeToRefs(useLangStore())
    return { language }
  }
}
</script>

<style scoped>
.map {
  height: 610px;
  padding: 36px;

  background-image: linear-gradient(90deg, #02020f00, hsla(240, 76%, 3%, 0.75));
  border-radius: 32px;
}
img {
  border-radius: 32px;
}
</style>
