<template>
  <footer class="container-fluid">
    <div class="row justify-content-center">
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
  width: 100%;
  height: 160px;
  color: white;
}
/* Your component styles here */
</style>
