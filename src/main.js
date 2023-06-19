import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import VueHead from 'vue-head'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'


const app = createApp(App)

app.component('VueDatePicker', VueDatePicker)
app.component("loader", MoonLoader)
app.use(VueHead)
app.use(router)

app.mount('#app')
