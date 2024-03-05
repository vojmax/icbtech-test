<template>
  <div
    @click="setMapCenter(bilboard.latitude, bilboard.longitude)"
    class="card mb-3 p-3"
    style="max-width: 488px; max-height: 154px"
  >
    <div class="row g-0">
      <div class="col-4">
        <div v-if="bilboard.photo_name != null">
          <img :src="imgUrl + bilboard.photo_name" alt="bilboard" height="120" width="120" />
        </div>
        <div v-else>
          <img :src="imageTwo" height="120" width="120" />
        </div>
      </div>
      <div class="col-8">
        <div class="card-body p-0">
          <div class="d-flex justify-content-between">
            <span class="card-title p-0">{{
              language === 'sr' ? bilboard.name.sr : bilboard.name.hu
            }}</span>
            <input
              v-if="selectMore"
              class="checkbox"
              v-model="selectedBilboards"
              :value="bilboard.id"
              type="checkbox"
            />
          </div>
          <p class="card-text m-0">
            {{ language === 'sr' ? bilboard.description.sr : bilboard.description.hu }}
          </p>
          <p class="card-text text-truncate m-0 p-0">
            <span class="city-name">{{
              language === 'sr' ? bilboard.city_name.sr : bilboard.city_name.hu
            }}</span>
            <span> • </span>
            <span class="address">{{ bilboard.address }}</span>
          </p>
          <a @click="openModal" v-if="!selectMore" class="btn btn-primary mt-2"
            >Rezervišite bilbord</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useHeroStore } from '@/store/HeroStore'
import { useLangStore } from '@/store/LangStore'
import { useMapStore } from '@/store/MapStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'BilboardCard',
  // Your script code here
  props: {
    bilboard: {
      type: Object,
      required: true
    }
  },
  emits: ['update:bilboardArray'],

  setup() {
    const { selectedBilboards, selectMore, bilboardCenter } = storeToRefs(useMapStore())

    const { language } = storeToRefs(useLangStore())
    const imgUrl = ref('https://ledbilbordi.web.icbtech.net/storage/')
    const { imageTwo } = storeToRefs(useHeroStore())

    const setMapCenter = (lat, long) => {
      bilboardCenter.value = {
        lat: Number(lat),
        lng: Number(long)
      }
    }

    return { imgUrl, imageTwo, language, selectMore, selectedBilboards, setMapCenter }
  }
}
</script>

<style scoped>
.card {
  border-radius: 32px;
  background-color: #20202d;
  color: white;
}
.card-title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0.3em;
  line-height: 20px;
}

.card img {
  border-radius: 16px;
}

.card-text {
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 0em;
}

.city-name {
  font-size: 14px;
  font-weight: 400;
  color: #f92565;
}

.address {
  font-size: 14px;
  font-weight: 400;
  color: #3cadff;
}

.checkbox {
  width: 20px;
  height: 20px;
  margin-top: 15px 0 0 0;
  padding: 0;
  border-radius: 4px;
  background-color: rgba(60, 173, 255, 1);
}
</style>
