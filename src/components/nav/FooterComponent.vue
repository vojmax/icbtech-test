<template>
  <footer class="container-fluid row justify-content-center">
    <div class="col-2">
      <a>Logo</a>
    </div>
    <div class="col-2">
      <span>Email: </span>
      <a>example@email.com</a>
      <span> Telefon</span>
      <a>(+381) 12 1234-123</a>
      <address>
        <span> Adresa: </span>
        Example Street, Subotica, Serbia
      </address>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
  // Your component options here
}
</script>

<style scoped>
footer {
  height: 160px;
  background-color: rgba(240, 255, 255, 0.336);
}
/* Your component styles here */
</style>
