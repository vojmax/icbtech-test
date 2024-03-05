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
        <div class="map-container col-8">
          <GoogleMap
            :api-key="apiKey"
            :center="bilboardCenter"
            :zoom="15"
            :fullscreen-control="false"
            :style="{
              width: '100%',
              height: '500px',
              borderRadius: '32px',
              overflow: 'hidden'
            }"
          >
            <MarkerCluster v-if="bilboards">
              <Marker
                clickable
                v-for="bilboard in bilboards"
                :key="bilboard.id"
                :options="{
                  position: { lat: Number(bilboard.latitude), lng: Number(bilboard.longitude) }
                }"
              />
            </MarkerCluster>
          </GoogleMap>
        </div>
        <div v-if="bilboards" class="bilboard-container col-4">
          <button class="select-more-btn" @click="selectChange">
            <p v-if="!selectMore" class="p-0 m-0">
              <span>
                {{ language === 'sr' ? 'Izaberite više' : 'Válasszon többet' }}
              </span>
              <img src="../../assets/svg/select-more.svg" alt="arrow" />
            </p>
            <p v-if="selectMore" class="p-0 m-0">
              <span>
                {{ language === 'sr' ? 'Obrišite izbor' : 'Törlés' }}
              </span>
              <img src="../../assets/svg/remove-more.svg" alt="arrow" />
            </p>
          </button>
          <div :class="selectMore && 'hidden'" class="scroll">
            <div v-for="bilboard in bilboards" :key="bilboard.id">
              <BilboardCard :bilboard="bilboard" />
            </div>
          </div>
          <a
            type="button"
            data-bs-target="#exampleModal"
            data-bs-toggle="modal"
            class="reserve-multiple btn btn-primary w-100"
            v-if="selectMore"
            >{{ language === 'sr' ? 'Rezervišite bilborde' : 'Könyv hirdetőtáblák' }}
            <img src="../../assets/svg/reserve-bilboard.svg" />
          </a>
        </div>
        <div v-else>loading</div>
      </div>
    </div>
  </section>
</template>

<script>
import BilboardCard from './BilboardCard.vue'
import { useLangStore } from '@/store/LangStore'
import { useMapStore } from '@/store/MapStore'
import { storeToRefs } from 'pinia'
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map'

export default {
  name: 'MapComponent',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { GoogleMap, Marker, BilboardCard, MarkerCluster },

  setup() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const { language } = storeToRefs(useLangStore())
    const { bilboards, selectMore, selectedBilboards, bilboardCenter } = storeToRefs(useMapStore())

    const selectChange = () => {
      selectMore.value = !selectMore.value
      selectedBilboards.value = []
    }

    return { language, apiKey, bilboards, selectChange, selectMore, bilboardCenter }
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

.bilboard-container {
  height: 500px;
}

.select-more-btn {
  width: 100%;
  background-color: #20202d;
  border: none;
  border-radius: 32px;
  padding: 0.5em;
  color: white;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 1em;
  cursor: pointer;
}

img {
  margin-left: 2em;
}

.scroll {
  max-height: 444px;
  border-radius: 32px;
  overflow: auto;
  padding-right: 1em;
}
.hidden {
  max-height: 388px;
  margin-bottom: 1em;
}

/* scrollbar styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgb(61, 61, 83);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
  cursor: pointer;
}
</style>
