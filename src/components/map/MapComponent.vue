<template>
  <section id="map" class="container-fluid col-10 p-0">
    <div v-if="bilboards">
      <div v-if="language === 'sr'" class="row mb-4">
        <h2 class="text-center">Mapa</h2>
      </div>
      <div v-if="language === 'hu'" class="row mb-4">
        <h2 class="text-center">Térkép</h2>
      </div>
      <div class="row map">
        <div class="col-8">
          <GoogleMap
            :api-key="apiKey"
            style="width: 100%; height: 500px; border-radius: 32px"
            :center="center"
            :zoom="15"
          >
            <GoogleMarker :options="{ position: center }" />
          </GoogleMap>
        </div>
        <div v-if="bilboards" class="scroll col-4">
          <div v-for="bilboard in bilboards" :key="bilboard.id">
            <BilboardCard :bilboard="bilboard" />
          </div>
        </div>
        <div v-else>loading</div>
      </div>
    </div>
    <div v-else>loading</div>
  </section>
</template>

<script>
import BilboardCard from './BilboardCard.vue'
import { useLangStore } from '@/store/LangStore'
import { useMapStore } from '@/store/MapStore'
import { storeToRefs } from 'pinia'
import { GoogleMap, Marker as GoogleMarker } from 'vue3-google-map'

export default {
  name: 'MapComponent',
  components: { GoogleMap, GoogleMarker, BilboardCard },

  setup() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const { language } = storeToRefs(useLangStore())
    const { bilboards } = storeToRefs(useMapStore())

    const center = { lat: 40.689247, lng: -74.044502 }

    return { language, center, apiKey, bilboards }
  }
}
</script>

<style scoped>
h2 {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 0.5em;
}
.map {
  height: 610px;
  padding: 36px;
  background-image: linear-gradient(90deg, #02020f00, hsla(240, 76%, 3%, 0.75));
  border-radius: 32px;
}
img {
  border-radius: 32px;
}

.scroll {
  height: 500px;
  overflow: auto;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(61, 61, 83);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
  cursor: pointer;
}
</style>
