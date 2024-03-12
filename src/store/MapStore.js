import { defineStore, storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { useCitiesStore } from './CitiesStore'

export const useMapStore = defineStore('MapStore', () => {
  const { selectedCity } = storeToRefs(useCitiesStore()) // useCitiesStore() returns the store instance
  const allBilboards = ref([]) // array of all bilboards from all cities that updated when needed
  const bilboards = ref([]) // reactive bilboards array
  const selectMore = ref(false) // reactive selectMore flag
  const oneBilboard = ref(null) //bilboard object for openModal function found by id
  const selectedBilboards = ref([]) // array of checked bilboards ids
  const filterBilboardsById = ref([]) // reactive filterBilboardsById object
  const bilboardCenter = ref({ lat: 46.10078231214396, lng: 19.66944742489657 }) // reactive bilboardCenter object with default value
  const showVideo = ref(false)
  const videoLink = ref('')

  watch(selectedBilboards, () => {
    filterBilboardsById.value = allBilboards.value.filter((bilboard) =>
      selectedBilboards.value.includes(bilboard.id)
    ) // filter bilboards by selectedBilboards whenever selectedBilboards changes
    console.log('filterBilboardsById changed:', filterBilboardsById.value)
    console.log('selectedBilboards changed:', allBilboards.value)
  })

  watch(bilboards, () => {
    bilboardCenter.value = {
      lat: Number(bilboards.value[0].latitude),
      lng: Number(bilboards.value[0].longitude)
    } // set center to first bilboard location whenever city in nav changes
    console.log('bilboardCenter changed:', bilboardCenter.value)
  })

  const openModal = (id) => {
    oneBilboard.value = bilboards.value.find((bilboard) => bilboard.id === id) // find bilboard by id
    if (oneBilboard.value) {
      console.log(oneBilboard)
    } else {
      console.log('Bilboard not found')
    }
  }

  watch(selectMore, () => {
    console.log('selectMore changed:', selectMore.value)
  })

  watch(selectedCity, () => {
    fetchBilboards() // fetch bilboards when selectedCity changes
    updateAllBilboards() //update allBilboards array
  })

  //update allBilboards array when on mount and when city changes
  //keep the value only if it's not already in the array
  //then we can filter this array and show bilboards from diffent cities in modal
  const updateAllBilboards = async () => {
    const url = 'https://ledbilbordi.web.icbtech.net/api/v1/billboard-list/' + selectedCity.value

    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log('all bilboards', allBilboards.value)
      allBilboards.value = [
        ...allBilboards.value,
        ...data.filter(
          (bilboard) => !allBilboards.value.some((existing) => existing.id === bilboard.id)
        )
      ]
      console.log('all bilboards', allBilboards.value)
    } catch (error) {
      console.error('Failed to fetch bilboards data:', error)
    }
  }

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
    updateAllBilboards()
  })
  return {
    showVideo,
    bilboards,
    selectedBilboards,
    selectMore,
    bilboardCenter,
    filterBilboardsById,
    oneBilboard,
    videoLink,
    openModal
  }
})
