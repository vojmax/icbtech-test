<template>
  <div
    @click="setMapCenter(bilboard.latitude, bilboard.longitude)"
    class="card mb-3 p-3"
    style="max-width: 488px; max-height: 154px"
  >
    <div class="row">
      <div class="col-md-4">
        <div class="image-container" v-if="bilboard.photo_name">
          <img class="img-fluid" :src="imgUrl + bilboard.photo_name" alt="bilboard" />
        </div>
        <div v-else>
          <img class="image-container img-fluid" src="../../assets/no-image.jpg" />
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body text-truncate p-0">
          <div class="d-flex justify-content-between">
            <span class="card-title p-0">{{
              language === 'sr' ? bilboard.name.sr : bilboard.name.hu
            }}</span>
          </div>
          <p class="card-text text-truncate m-0">
            {{ language === 'sr' ? bilboard.description.sr : bilboard.description.hu }}
          </p>
          <p class="card-text text-truncate m-0 p-0">
            <span class="city-name">{{
              language === 'sr' ? bilboard.city_name.sr : bilboard.city_name.hu
            }}</span>
            <span> • </span>
            <span class="address">{{ bilboard.address }}</span>
          </p>
          <button
            v-if="!selectMore"
            @click="openModal(bilboard.id)"
            type="button"
            data-bs-target="#exampleModal"
            data-bs-toggle="modal"
            class="btn btn-primary mt-2"
          >
            {{ language === 'sr' ? 'Rezervišite bilbord' : 'Foglaljon hirdetőtáblát' }}
          </button>

          <input
            v-else
            class="checkbox"
            v-model="selectedBilboards"
            :value="bilboard.id"
            type="checkbox"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

  setup() {
    const { selectedBilboards, selectMore, bilboardCenter } = storeToRefs(useMapStore())
    const { openModal } = useMapStore()
    const { language } = storeToRefs(useLangStore())
    const imgUrl = 'https://ledbilbordi.web.icbtech.net/storage/'
    const { imageTwo } = storeToRefs(useHeroStore())

    const setMapCenter = (lat, lng) => {
      bilboardCenter.value = {
        lat: Number(lat),
        lng: Number(lng)
      }
    }

    return {
      imgUrl,
      imageTwo,
      language,
      selectMore,
      selectedBilboards,
      setMapCenter,
      openModal
    }
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
  object-fit: cover;
  max-width: 220px;
  max-height: 220px;
}
.image-container {
  width: 120px;
  height: 120px;
  border-radius: 16px;
  overflow: hidden;
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
  width: 30px;
  height: 30px;
  margin-top: 20px 0 0 0;
  padding: 0;
  border-radius: 4px;
  background-color: rgba(60, 173, 255, 1);
}
</style>
