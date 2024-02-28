<template>
  <nav class="m-auto sticky-top navbar navbar-dark navbar-expand-lg bg-black bg-opacity-25">
    <div class="container-fluid text-white">
      <a class="navbar-brand" href="/">LOGO</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/">Početna Stranica</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/map">Mapa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">O Nama</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Kontakt</a>
          </li>
          <div>
            <select v-model="selectedCity" class="form-select" aria-label="Default select example">
              <option v-for="city in cities" :key="city.id">
                {{ city.city_name.sr }}
              </option>
            </select>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NavBar',
  setup() {
    const cities = ref([])
    const selectedCity = ref('Subotica')
    const error = ref(null)
    const load = async () => {
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
    load()
    return { cities, error, selectedCity }
  }
}
</script>

<style scoped>
nav {
  height: 120px;
  backdrop-filter: blur(10px);
}
.container-fluid {
  margin: 0 7em;
}
</style>
