<template>
  <div class="card mb-3 p-2" style="max-width: 488px; max-height: 154px">
    <div class="row">
      <div class="col-md-3">
        <div class="image-container" v-if="bilboard.photo_name">
          <img class="img-fluid" :src="imgUrl + bilboard.photo_name" alt="bilboard" />
        </div>
        <div v-else>
          <img class="image-container img-fluid" src="../../assets/no-image.jpg" />
        </div>
      </div>
      <div class="col-md-9">
        <div class="card-body text-truncate p-0">
          <p class="card-title mb-0">
            {{ language === 'sr' ? bilboard.name.sr : bilboard.name.hu }}
          </p>
          <p class="address text-truncate mb-0">{{ bilboard.address }}</p>
          <p class="city-name mb-0">
            {{ language === 'sr' ? bilboard.city_name.sr : bilboard.city_name.hu }}
          </p>
          <a v-if="bilboard.video_link" @click="handleClick(bilboard.video_link)">
            <p class="mb-0">
              {{ language === 'sr' ? 'Pogledaj video' : 'Videó megtekintése' }}
              <img src="../../assets/svg/play-video-dark.svg" />
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    const { language } = storeToRefs(useLangStore())
    const { showVideo, videoLink } = storeToRefs(useMapStore())
    const imgUrl = 'https://ledbilbordi.web.icbtech.net/storage/'

    const handleClick = (link) => {
      showVideo.value = true
      videoLink.value = link
    }

    return {
      imgUrl,
      language,
      showVideo,
      handleClick
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #f0f0f0;
  border-radius: 8px;
  color: white;
  border: 1px solid #888888;
}
.card-title {
  color: #111111;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0.3em;
  line-height: 20px;
}

.card img {
  object-fit: cover;
  max-width: 160px;
  max-height: 160px;
}
.image-container {
  width: 80px;
  height: 80px;
  border-radius: 4px;
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
  color: #444444;
}

.address {
  font-size: 14px;
  font-weight: 400;
  color: #22308e;
}

a p {
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 400;
  color: #111111;
}
</style>
