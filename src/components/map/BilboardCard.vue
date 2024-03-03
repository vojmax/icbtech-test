<template>
  <div class="card mb-3 p-3" style="max-width: 488px; max-height: 154px">
    <div class="row g-0">
      <div class="col-md-4">
        <div v-if="bilboard.photo_name != null">
          <img :src="imgUrl + bilboard.photo_name" alt="bilboard" height="120" width="120" />
        </div>
        <div v-else>
          <img :src="imageTwo" height="120" width="120" />
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body p-0">
          <h5 class="card-title">{{ language === 'sr' ? bilboard.name.sr : bilboard.name.hu }}</h5>
          <p class="card-text">
            {{ language === 'sr' ? bilboard.description.sr : bilboard.description.hu }}
          </p>
          <p class="card-text">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useHeroStore } from '@/store/HeroStore'
import { useLangStore } from '@/store/LangStore'
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

    const imgUrl = ref('https://ledbilbordi.web.icbtech.net/storage/')
    const { imageTwo } = storeToRefs(useHeroStore())

    return { imgUrl, imageTwo, language }
  }
}
</script>

<style scoped>
.card {
  border-radius: 32px;
  background-color: rgba(32, 32, 45, 1);
  color: white;
}
.card h5 {
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 8px;
  margin: 0;
}

.card img {
  border-radius: 16px;
}

.card-text {
  font-size: 16px;
  font-weight: 300;
}
</style>
