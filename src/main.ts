import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/styles/preflight.css'
// import './assets/styles/tailwind.css'
import 'vfonts/Lato.css'
import {
    create,
    NButton,
    NConfigProvider
} from 'naive-ui'

const naive = create({
    components: [
        NButton,
        NConfigProvider
    ]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
