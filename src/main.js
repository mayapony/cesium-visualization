import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'

import 'vue-cesium/dist/index.css'

const app = createApp(App)
app.use(VueCesium)

app.mount('#app')
