<template>
  <div
    class="modal fade modal-xl"
    id="bilboardListModal"
    tabindex="-1"
    aria-labelledby="bilboardListModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div v-if="filterBilboardsById" class="modal-content">
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
            <div v-html="videoLink"></div>
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
import BilboardModalCard from './BilboardModalCard.vue'
import { useLangStore } from '@/store/LangStore'
import { storeToRefs } from 'pinia'

import { useMapStore } from '@/store/MapStore'

export default {
  name: 'BilboardListModal',
  components: {
    BilboardForm,
    BilboardModalCard
  },

  setup() {
    const { language } = storeToRefs(useLangStore())
    const { filterBilboardsById, showVideo, videoLink } = storeToRefs(useMapStore())

    return {
      language,
      showVideo,
      filterBilboardsById,
      videoLink
    }
  }
}
</script>

<style scoped>
.scroll {
  max-height: 460px;
  overflow: auto;
  padding-right: 1em;
}
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
/* scrollbar styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  border: 1px solid rgba(136, 136, 136, 1);
  background-color: #f0f0f0;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(34, 48, 142, 1);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(79, 92, 179);
  cursor: pointer;
}
</style>
