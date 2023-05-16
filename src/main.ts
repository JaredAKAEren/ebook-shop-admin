import { createApp } from 'vue'
import { createPinia } from 'pinia'
import type { MessageApi } from 'naive-ui'

import App from './App.vue'
import router from './router'

import './assets/styles/tailwind.css'
import 'vfonts/Lato.css'

declare global {
  interface Window {
    $message: MessageApi
  }
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
