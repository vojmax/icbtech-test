import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useFooterStore = defineStore('FooterStore', () => {
  const footerData = ref([])

  const fetchData = async () => {
    try {
      const response = await fetch('https://ledbilbordi.web.icbtech.net/api/v1/footer-contact')
      const data = await response.json()
      footerData.value = data
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }

  onMounted(() => {
    fetchData()
  })
  return { footerData }
})
