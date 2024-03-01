<template>
  <section class="container-fluid col-10 p-0">
    <div v-if="language">
      <div class="row mb-4">
        <h2 class="text-center">Map Component</h2>
      </div>
      <div class="row map">
        <div class="col-8">
          <GoogleMap
            :api-key="apiKey"
            style="width: 100%; height: 500px"
            :center="center"
            :zoom="15"
          >
            <GoogleMarker :options="{ position: center }" />
          </GoogleMap>
        </div>
        <div class="col-4">
          <h3>{{ language }}</h3>
        </div>
      </div>
    </div>
    <div v-else>loading</div>
  </section>
</template>

<script>
import { useLangStore } from '@/store/LangStore'
import { storeToRefs } from 'pinia'
import { GoogleMap, Marker as GoogleMarker } from 'vue3-google-map'
import { ref } from 'vue'

export default {
  name: 'MapComponent',
  components: { GoogleMap, GoogleMarker },

  setup() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const { language } = storeToRefs(useLangStore())

    const theme = ref('aubergine')

    const center = { lat: 40.689247, lng: -74.044502 }

    return { language, center, theme, apiKey }
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
