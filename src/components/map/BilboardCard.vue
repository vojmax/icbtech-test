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
          <div class="d-flex justify-content-between">
            <span class="card-title p-0">{{
              language === 'sr' ? bilboard.name.sr : bilboard.name.hu
            }}</span>
            <input
              class="checkbox"
              v-model="selectedBilboards"
              :value="bilboard.id"
              type="checkbox"
            />
          </div>
          <p class="card-text">
            {{ language === 'sr' ? bilboard.description.sr : bilboard.description.hu }}
          </p>
          <p class="card-text">
            <span class="city-name">{{
              language === 'sr' ? bilboard.city_name.sr : bilboard.city_name.hu
            }}</span>
            <span> • </span>
            <span class="address">{{ bilboard.address }}</span>
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
    const { selectedBilboards } = storeToRefs(useMapStore())

    const { language } = storeToRefs(useLangStore())
    const imgUrl = ref('https://ledbilbordi.web.icbtech.net/storage/')
    const { imageTwo } = storeToRefs(useHeroStore())

    return { imgUrl, imageTwo, language, selectedBilboards }
  }
}
</script>

<style scoped>
.card {
  border-radius: 32px;
  background-color: rgba(32, 32, 45, 1);
  color: white;
}
.card-title {
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

.city-name {
  font-size: 14px;
  font-weight: 400;
  color: rgba(249, 37, 101, 1);
}

.address {
  font-size: 14px;
  font-weight: 400;
  color: rgba(60, 173, 255, 1);
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

<!-- <template>
  <template>
    <div> -->
<!-- ...your existing code... -->

<!-- <button @click="sendBillboardData">Send Billboard Data</button>
    </div>
  </template>

  <script>
    import { ref, onMounted } from 'vue'

    export default {
      // ...your existing code...

      setup(props, { emit }) {
        // ...your existing code...

        const sendBillboardData = () => {
          emit('billboard-click', bilboard) -->

<!-- //         }

//         return {
//           // ...your existing code...
//           sendBillboardData
//         }
//       }
//     }
//   </script> -->
<!-- //   <div>
//     ...your existing code... -->

<!-- //     <button @click="sendBilboardData">Send Bilboard Data</button>
//   </div>
// </template> -->
