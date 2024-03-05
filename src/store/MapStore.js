import { defineStore, storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { useCitiesStore } from './CitiesStore'

export const useMapStore = defineStore('MapStore', () => {
  const { selectedCity } = storeToRefs(useCitiesStore()) // useCitiesStore() returns the store instance
  const bilboards = ref([]) // reactive bilboards array
  const selectMore = ref(false) // reactive selectMore flag
  const selectedBilboards = ref([]) // array of checked bilboards ids
  const filterBilboardsById = ref([]) // reactive filterBilboardsById object
  const bilboardCenter = ref({ lat: 46.10078231214396, lng: 19.66944742489657 }) // reactive bilboardCenter object with default value

  const showModal = ref(false)

  const openModal = () => {
    showModal.value = true
    console.log('open modal function' + showModal.value)
  }

  watch(selectedBilboards, () => {
    filterBilboardsById.value = bilboards.value.filter((bilboard) =>
      selectedBilboards.value.includes(bilboard.id)
    ) // filter bilboards by selectedBilboards whenever selectedBilboards changes
    console.log('filterBilboardsById changed:', filterBilboardsById.value)
  })

  watch(bilboards, () => {
    bilboardCenter.value = {
      lat: Number(bilboards.value[0].latitude),
      lng: Number(bilboards.value[0].longitude)
    } // set center to first bilboard location whenever city in nav changes
    console.log('bilboardCenter changed:', bilboardCenter.value)
  })

  watch(selectMore, () => {
    console.log('selectMore changed:', selectMore.value)
  })

  watch(selectedCity, () => {
    selectedBilboards.value = [] // reset selectedBilboards whenever selectedCity changes
    fetchBilboards() // fetch bilboards when selectedCity changes
  })

  const fetchBilboards = async () => {
    const url = 'https://ledbilbordi.web.icbtech.net/api/v1/billboard-list/' + selectedCity.value // fetch bilboards data from the server

    try {
      const response = await fetch(url) // fetch bilboards data from the server
      const data = await response.json() // parse the response
      bilboards.value = data // update bilboards array
    } catch (error) {
      console.error('Failed to fetch bilboards data:', error)
    }
  }

  onMounted(() => {
    fetchBilboards() // fetch bilboards when the component is mounted
  })
  return {
    bilboards,
    selectedBilboards,
    selectMore,
    bilboardCenter,
    filterBilboardsById,
    showModal,
    openModal
  }
})
