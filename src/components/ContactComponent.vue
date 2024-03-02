<template>
  <section id="contact" v-if="language" class="container-fluid col-10 p-0">
    <div class="row mb-4">
      <h2 class="text-center">Kontakt</h2>
    </div>
    <div class="row align-items-center m-0">
      <div class="col-6 p-0 m-0">
        <img
          src="../assets/contact-image.jpg"
          width="800px"
          height="600px"
          style="border-radius: 32px"
        />
      </div>

      <div class="form-container col-5 p-0">
        <p class="about_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        <form @submit.prevent="handleSubmit" v-if="language === 'sr'">
          <input required v-model="name" class="row" type="text" placeholder="Ime i prezime" />
          <input required v-model="email" class="row" type="email" placeholder="Email adresa" />
          <input required v-model="message" class="row" type="area" placeholder="Poruka" />
          <p style="color: red" v-if="error">{{ error }}</p>
          <div class="d-flex flex-row-reverse">
            <button>Pošalji</button>
          </div>
        </form>
        <form @submit.prevent="handleSubmit" v-if="language === 'hu'">
          <input required v-model="name" type="text" placeholder="Teljes név" />
          <input required v-model="email" type="email" placeholder="Email cím" />
          <input required v-model="message" type="area" placeholder="Üzenet" />
          <div class="d-flex flex-row-reverse">
            <button class="flex-end">Küldés</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <div v-else>loading</div>
</template>

<script>
import { useLangStore } from '@/store/LangStore'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import swal from 'sweetalert2'
export default {
  name: 'ContactComponent',

  setup() {
    const name = ref('') // name input value
    const email = ref('') // email input value
    const message = ref('') // message input value
    const error = ref(null) // error message

    const { language } = storeToRefs(useLangStore())

    function handleSubmit() {
      if (name.value.length > 255) {
        error.value = 'Name is too long'
      } else if (message.value.length > 1000) {
        error.value = 'Message is too long'
      } else {
        error.value = ''
      }

      if (!error.value) {
        console.log(
          JSON.parse(
            `{"name":"${name.value}","email":"${email.value}","message":"${message.value}"}`
          )
        )
        swal.fire({
          title: name.value,
          footer: email.value,
          text: message.value,
          icon: 'success',
          backdrop: 'rgba(0,0,0,0.4)',
          confirmButtonText: 'OK'
        })
      }
    }

    return { language, email, name, message, error, handleSubmit }
  }
}
</script>

<style scoped>
h2 {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 0.5em;
}
p {
  width: 720px;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 1.5em;
}
.form-container {
  margin-left: 60px;
  right: 0;
}
form {
  position: relative;
  width: 720px;
}
input {
  background-color: transparent;
  margin-left: 0;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 24px;
  border: 2px solid #ffffff;
  color: rgba(187, 187, 187, 1);
  padding: 16px 32px;
}
input::placeholder {
  color: rgba(187, 187, 187, 1);
  font-size: 20px;
}
button {
  font-size: 20px;
  font-weight: 300;
  color: white;
  background-color: transparent;
  background: linear-gradient(
    273.22deg,
    rgba(60, 173, 255, 0.15) 0%,
    rgba(60, 173, 255, 0) 34.9%,
    rgba(249, 37, 101, 0) 63.54%,
    rgba(249, 37, 101, 0.3) 100%
  );
  border: 2px solid white;
  border-radius: 8px;
  padding: 0.5em 1.5em;
  cursor: pointer;
}
button:hover {
  padding: 0.55em 1.55em;
  border: 1px solid white;
  background: linear-gradient(
    273.22deg,
    rgba(60, 173, 255, 0.4) 7.29%,
    rgba(60, 173, 255, 0) 44.79%,
    rgba(249, 37, 101, 0) 50%,
    rgba(249, 37, 101, 0.8) 92.71%
  );
}
/* Your CSS code here */
</style>
