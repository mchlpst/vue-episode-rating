import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import StarIcon from './components/StarIcon.vue';

const app = createApp(App)

app.component('StarIcon', StarIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
