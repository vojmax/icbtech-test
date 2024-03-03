import { defineStore, storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { useCitiesStore } from './CitiesStore'

export const useMapStore = defineStore('MapStore', () => {
  const bilboards = ref([])
  const { selectedCity } = storeToRefs(useCitiesStore())

  watch(selectedCity, () => {
    fetchBilboards()
  })

  const fetchBilboards = async () => {
    const url = 'https://ledbilbordi.web.icbtech.net/api/v1/billboard-list/' + selectedCity.value

    try {
      const response = await fetch(url)
      const data = await response.json()
      bilboards.value = data
      console.log('bilboards:', bilboards.value)
    } catch (error) {
      console.error('Failed to fetch bilboards data:', error)
    }
  }
  onMounted(() => {
    fetchBilboards()
  })
  return { bilboards }
})
