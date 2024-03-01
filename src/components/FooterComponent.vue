<template>
  <footer class="container-fluid">
    <div v-if="footerData" class="row justify-content-center align-items-center">
      <div class="col-3 text-center">
        <a>
          <img src="../assets/footer-logo.svg" alt="logo" />
        </a>
      </div>
      <div v-if="footerData" class="col-3">
        <p>
          <span class="blue">Email: </span>
          {{ footerData.email }}
        </p>
        <p>
          <span class="red"> Telefon: </span>
          {{ footerData.phone }}
        </p>
        <div v-if="footerData.fax">
          <p>
            <span class="blue"> Fax: </span>
            {{ footerData.fax }}
          </p>
        </div>
        <address>
          <p>
            <span v-if="language === 'sr'" class="red">Adresa: </span>
            <span v-if="language === 'hu'" class="red">Cím: </span>
            {{ footerData.address }}
          </p>
        </address>
      </div>
    </div>
  </footer>
</template>

<script>
import { useFooterStore } from '@/store/FooterStore'
import { useLangStore } from '@/store/LangStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'FooterComponent',
  setup() {
    const { language } = storeToRefs(useLangStore())

    const { footerData } = storeToRefs(useFooterStore())

    return { footerData, language }
  }
}
</script>

<style scoped>
footer {
  width: 100%;
  color: white;
}

p {
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0.2em;
}
span {
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

.red {
  color: rgba(249, 37, 101, 1);
}
.blue {
  color: rgba(60, 173, 255, 1);
}
/* Your component styles here */
</style>
