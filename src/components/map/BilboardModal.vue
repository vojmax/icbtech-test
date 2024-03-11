<template>
  <div
    class="modal fade modal-lg"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div v-if="oneBilboard" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            {{ language === 'sr' ? oneBilboard.name.sr : oneBilboard.name.hu }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="showVideo" class="row">
            <a class="mb-2" type="button" @click="showVideo = false">
              <img src="../../assets/svg/back-icon.svg" />
              Back</a
            >
            <div v-html="oneBilboard.video_link"></div>
          </div>
          <div v-if="!showVideo" class="row">
            <div class="col-4">
              <div class="image-container" v-if="oneBilboard.photo_name != null">
                <img class="img-fluid" :src="imgUrl + oneBilboard.photo_name" alt="bilboard" />
              </div>
              <div v-else>
                <img class="image-container img-fluid" src="../../assets/no-image.jpg" />
              </div>
              <h5 class="text-truncate">{{ oneBilboard.address }}</h5>
              <h6>{{ language === 'sr' ? oneBilboard.city_name.sr : oneBilboard.city_name.hu }}</h6>
              <p>
                {{ language === 'sr' ? oneBilboard.description.sr : oneBilboard.description.hu }}
              </p>
              <div v-if="oneBilboard.video_link">
                <button @click="showVideo = true" class="btn btn-primary w-100">
                  {{ language === 'sr' ? 'Pogledaj video' : 'Videó megtekintése' }}
                  <img src="../../assets/svg/play-video.svg" />
                </button>
              </div>
            </div>
            <div class="container-fluid col-8">
              <BilboardForm :billboard_id="oneBilboard.id" />
            </div>
          </div>
        </div>
      </div>
      <div class="modal-content" v-else>
        <div class="modal-body">
          <div class="row">
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BilboardForm from './BilboardForm.vue'
import { useMapStore } from '@/store/MapStore'
import { useLangStore } from '@/store/LangStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

export default {
  name: 'BilboardModal',
  components: {
    BilboardForm
  },
  setup() {
    const showVideo = ref(false)
    const { language } = storeToRefs(useLangStore())
    const { oneBilboard } = storeToRefs(useMapStore())
    const imgUrl = 'https://ledbilbordi.web.icbtech.net/storage/'

    return {
      language,
      oneBilboard,
      imgUrl,
      showVideo
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

img {
  object-fit: cover;
  max-width: 360px;
  max-height: 360px;
}

.image-container {
  width: 240px;
  height: 240px;
  overflow: hidden;
}
h5 {
  color: rgba(34, 48, 142, 1);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  max-width: 100%;
}
h6 {
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  color: rgba(17, 17, 17, 1);
}

.btn {
  background-color: rgba(34, 48, 142, 1);
  padding: 1em;
  font-size: 16px;
  font-weight: 400;
}
.btn:hover {
  background-color: rgba(0, 30, 226, 0.8);
}
</style>
