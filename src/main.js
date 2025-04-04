import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import './assets/main.css'
import './axios.js'
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App);
const bootstrapVue = BootstrapVue;
const iconsPlugin = IconsPlugin;

app.use(pinia);
app.use(router);
app.use(bootstrapVue);
app.use(iconsPlugin);

app.mount('#app')
