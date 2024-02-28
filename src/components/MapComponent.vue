<template>
  <section class="container-fluid col-10">
    <div class="row mb-4">
      <h2 class="text-center">Map Component</h2>
    </div>
    <div class="map container-fluid">
      <div class="row">
        <div class="col-8">
          <img src="https://i.stack.imgur.com/HILmr.png" width="1000" height="530" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MapComponent'
  // Your component's JavaScript logic goes here
}
</script>

<style scoped>
.map {
  height: 610px;
  padding: 36px;

  background-image: linear-gradient(90deg, #02020f00, hsla(240, 76%, 3%, 0.75));
  border-radius: 32px;
}
img {
  border-radius: 32px;
}
</style>
