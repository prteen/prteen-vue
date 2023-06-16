import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import VueIco, {icoClose, icoLocalBar} from 'vue3-ico'


// import './assets/main.css'

const app = createApp(App)

app.use(VueIco, {
  "close": icoClose,
  "local_bar": icoLocalBar,
});

app.component('VueDatePicker', VueDatePicker)
app.use(router)

app.mount('#app')
