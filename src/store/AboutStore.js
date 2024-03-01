import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useAboutStore = defineStore('AboutStore', () => {
  const aboutData = ref([])

  const aboutText = ref('')
  const aboutImage = ref('')

  const fetchAbout = async () => {
    try {
      const response = await fetch('https://ledbilbordi.web.icbtech.net/api/v1/about-us-list')
      const data = await response.json()
      aboutData.value = data

      aboutText.value = aboutData.value.about_us_text
      console.log(aboutText.value)

      const imageUrl = await fetch(
        'https://ledbilbordi.web.icbtech.net/storage/' + aboutData.value.photo_name
      )
      aboutImage.value = imageUrl.url
    } catch (error) {
      console.error('Failed to fetch about data:', error)
    }
  }

  onMounted(() => {
    fetchAbout()
  })
  return { aboutText, aboutImage }
})
