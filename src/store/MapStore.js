import { defineStore, storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { useCitiesStore } from './CitiesStore'

export const useMapStore = defineStore('MapStore', () => {
  const bilboards = ref([]) // reactive bilboards array
  const selectMore = ref(false) // reactive selectMore flag
  const selectedBilboards = ref([]) // reactive selectedBilboard object

  watch(selectedBilboards, () => {
    console.log('selectedBilboards changed:', selectedBilboards.value)
  })

  watch(selectMore, () => {
    console.log('selectMore changed:', selectMore.value)
  })

  const { selectedCity } = storeToRefs(useCitiesStore()) // useCitiesStore() returns the store instance

  watch(selectedCity, () => {
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
  return { bilboards, selectedBilboards, selectMore }
})
