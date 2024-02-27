import { ref } from 'vue'

const useCities = async () => {
  const cities = ref([])
  const error = ref(null)

  async function load() {
    try {
      const data = await fetch('https://ledbilbordi.web.icbtech.net/api/v1/city-list')
      if (!data.ok) {
        error.value = 'There was an error'
        console.log(error.value)
      }
      cities.value = await data.json()
      console.log(cities)
    } catch (err) {
      error.value = err.message
    }
  }

  return { cities, error, load }
}

export default useCities
