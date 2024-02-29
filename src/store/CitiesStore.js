import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useCitiesStore = defineStore('CitiesStore', () => {
  const cities = ref([])

  const fetchCities = async () => {
    try {
      const response = await fetch('https://ledbilbordi.web.icbtech.net/api/v1/city-list')
      const data = await response.json()
      cities.value = data
    } catch (error) {
      console.error('Failed to fetch cities:', error)
    }
  }

  onMounted(() => {
    fetchCities()
  })
  return { cities }
})
