import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import App from './App.vue'
import router from './router'

import 'vue-cesium/dist/index.css'

import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'

use([CanvasRenderer, BarChart])

const app = createApp(App)

app.component('v-chart', ECharts)

app.use(VueCesium)
app.use(router)

app.mount('#app')
