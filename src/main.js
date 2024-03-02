import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(VueSweetalert2)
app.mount('#app')
