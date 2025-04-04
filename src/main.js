import './assets/main.css'
import axios from 'axios'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

app.mount('#app')
