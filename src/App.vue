<script setup>
import NavBar from './components/nav/NavBar.vue'
import HeroComponent from './components/HeroComponent.vue'
import MapComponent from './components/MapComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import BackgroundComponent from './components/BackgroundComponent.vue'
</script>

<template>
  <main>
    <NavBar />
    <div class="content">
      <HeroComponent />
      <MapComponent />
      <AboutComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
    <BackgroundComponent />
  </main>
</template>

<style scoped>
.content {
  position: relative;
  z-index: 1;
}
</style>
