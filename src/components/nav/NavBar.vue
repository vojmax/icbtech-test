<template>
  <nav class="m-auto sticky-top navbar navbar-dark navbar-expand-lg bg-black bg-opacity-25">
    <div class="container-fluid text-white">
      <a class="navbar-brand" href="/">
        <img src="../../assets/nav-logo.svg" />
      </a>
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
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
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
          <div class="select-city">
            <select v-model="selectedCity" class="form-select">
              <option v-for="city in cities" :key="city.id">
                {{ city.city_name.sr }}
              </option>
            </select>
          </div>
          <LanguagePicker />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import LanguagePicker from './LanguagePicker.vue'

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
  },
  components: { LanguagePicker }
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

.nav-item {
  color: white;
  padding: 1em 1em;
}
.form-select {
  background-color: black;
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.9997 5.1714L11.9495 0.22168L13.3637 1.63589L6.9997 7.9999L0.635742 1.63589L2.04996 0.22168L6.9997 5.1714Z" fill="white"/></svg>');
  color: white;
  padding: 0.5em 3em 0.5em 2em;
  border-radius: 0;
  border: 0;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
.form-select option {
  color: white;
  border: 1px solid white;
  background-color: rgb(131, 131, 131);
  padding: 1em;
}

/* add custom styles to select and options */
</style>
