<template>
  <div class="form-container">
    <div class="row">
      <p class="about_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
    </div>
    <form @submit.prevent="handleSubmit" v-if="language === 'sr'">
      <div class="row mb-2 mx-0">
        <input required v-model="name" type="text" placeholder="Ime i prezime" />
      </div>
      <div class="row mb-2 mx-0">
        <input required v-model="company_name" type="text" placeholder="Ime kompanije" />
      </div>
      <div class="row mb-2 mx-0">
        <input required v-model="phone_number" type="text" placeholder="Broj telefona" />
      </div>
      <div class="row mb-2 mx-0">
        <input required v-model="email" type="email" placeholder="Email adresa" />
      </div>
      <p style="color: red" v-if="error">{{ error }}</p>
      <div class="d-flex flex-row-reverse mt-5">
        <button class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">
          Pošalji zahtev
          <img src="../../assets/svg/send-icon.svg" />
        </button>
      </div>
    </form>
    <form @submit.prevent="handleSubmit" v-if="language === 'hu'">
      <div class="row mb-2 mx-0">
        <input required v-model="name" type="text" placeholder="Teljes név" />
      </div>
      <div class="row mb-2 mx-0">
        <input required v-model="company_name" type="text" placeholder="Cég neve" />
      </div>
      <div class="row mb-2 mx-0">
        <input required v-model="phone_number" type="text" placeholder="Telefonszám" />
      </div>
      <div class="row mb-2 mx-0">
        <input required v-model="email" type="email" placeholder="Email cím" />
      </div>
      <p style="color: red" v-if="error">{{ error }}</p>
      <div class="d-flex flex-row-reverse mt-5">
        <button class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">
          Küldés
          <img src="../../assets/svg/send-icon.svg" />
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useLangStore } from '@/store/LangStore'
import { useMapStore } from '@/store/MapStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

export default {
  name: 'BilboardForm',
  props: {
    billboard_id: {
      type: Number
    }
  },

  setup(props) {
    const name = ref('') // name input value
    const company_name = ref('') // message input value
    const phone_number = ref('') // message input value
    const error = ref(null) // error message
    const email = ref('') // email input value

    const { language } = storeToRefs(useLangStore())
    const { filterBilboardsById } = storeToRefs(useMapStore())

    function handleSubmit() {
      const ids = filterBilboardsById.value.map((bilboard) => bilboard.id)

      if (props.billboard_id) {
        console.log(
          JSON.parse(
            `{"name":"${name.value}","email":"${email.value}","company_name":"${company_name.value}","locale":"${language.value}","billboard_id":"[${props.billboard_id}]"}`
          )
        )
      } else {
        console.log(
          JSON.parse(
            `{"name":"${name.value}","email":"${email.value}","company_name":"${company_name.value}","locale":"${language.value}","billboard_id":"[${ids}]"}`
          )
        )
      }
    }
    return { handleSubmit, name, email, phone_number, company_name, error, language }
  }
}
</script>

<style scoped>
p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 18px;
}
input {
  border: 2px solid rgba(136, 136, 136, 1);
  border-radius: 0.5rem;
  font-size: 20px;
  padding: 0.8rem 1.5rem;
}

button {
  line-height: 28px;
  font-weight: 400;
  font-size: 24px;
  padding: 0.5em 1em;
  color: white;
  background-color: rgba(252, 82, 7, 1);
}

button img {
  width: 24px;
  margin-left: 0.5em;
}
</style>
