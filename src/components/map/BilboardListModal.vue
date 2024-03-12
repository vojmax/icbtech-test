<template>
  <div
    class="modal fade modal-xl"
    id="bilboardListModal"
    tabindex="-1"
    aria-labelledby="bilboardListModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="bilboardListModalLabel">
            {{ language === 'sr' ? 'Lista bilborda' : 'A hirdetőtáblák listája' }}
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
          </div>
          <div v-if="!showVideo" class="row">
            <div class="col-4">
              <div class="scroll">
                <div v-for="bilboard in filterBilboardsById" :key="bilboard.id">
                  <BilboardModalCard :bilboard="bilboard" />
                </div>
              </div>
            </div>
            <div class="container-fluid col-8">
              <BilboardForm />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="modal-content" v-else>
        <div class="modal-body">
          <div class="row">
            <h1>Loading...</h1>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import BilboardForm from './BilboardForm.vue'
import BilboardModalCard from './BilboardModalCard.vue'
import { useLangStore } from '@/store/LangStore'
import { storeToRefs } from 'pinia'

import { useMapStore } from '@/store/MapStore'
import { ref } from 'vue'

export default {
  name: 'BilboardListModal',
  components: {
    BilboardForm,
    BilboardModalCard
  },

  setup() {
    const { language } = storeToRefs(useLangStore())
    const { filterBilboardsById } = storeToRefs(useMapStore())

    const showVideo = ref(false)
    return {
      language,
      showVideo,
      filterBilboardsById
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 18px;
}
input {
  border: 2px solid rgba(136, 136, 136, 1);
  border-radius: 0.5rem;
  font-size: 20px;
  padding: 0.8rem 1.5rem;
}

.btn {
  line-height: 28px;
  font-weight: 400;
  font-size: 24px;
  padding: 0.5em 1em;
  color: white;
  background-color: rgba(252, 82, 7, 1);
}

.btn img {
  width: 24px;
  margin-left: 0.5em;
}
</style>
