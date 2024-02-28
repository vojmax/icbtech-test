<template>
  <section class="container-fluid col-10">
    <div class="row mb-4">
      <h2 class="text-center">Map Component</h2>
    </div>
    <div class="map container-fluid">
      <div class="row">
        <div class="col-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.073394394073!2d19.672073315825!3d46.101241079113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766b9e3e3f3f3e7%3A0x3e3f3f3e7!2sSubotica!5e0!3m2!1sen!2srs!4v1617220730733!5m2!1sen!2srs"
            width="1000"
            height="530"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
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
iframe {
  border-radius: 32px;
}
</style>
