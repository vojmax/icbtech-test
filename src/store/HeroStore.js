import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useHeroStore = defineStore('HeroStore', () => {
  const welcome = ref()
  const imageOne = ref()
  const imageTwo = ref()

  const fetchWelcomeData = async () => {
    try {
      const response = await fetch('https://ledbilbordi.web.icbtech.net/api/v1/welcome-page')
      const data = await response.json()
      welcome.value = data
      fetchImages()
    } catch (error) {
      console.error('Failed to fetch welcome data:', error)
    }
  }

  const fetchImages = async () => {
    if (welcome.value === undefined) {
      throw new Error('Welcome data is not available')
    }
    const imageUrl1 = 'https://ledbilbordi.web.icbtech.net/storage/' + welcome.value.photo_names[0]
    const imageUrl2 = 'https://ledbilbordi.web.icbtech.net/storage/' + welcome.value.photo_names[1]

    try {
      const firstImage = await fetch(imageUrl1)
      const secondImage = await fetch(imageUrl2)
      imageOne.value = firstImage.url
      imageTwo.value = secondImage.url
    } catch (error) {
      console.error('Failed to fetch welcome images:', error)
    }
  }

  onMounted(() => {
    fetchWelcomeData()
  })
  return { welcome, imageOne, imageTwo }
})
