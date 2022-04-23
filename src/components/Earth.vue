<script setup>
import {onMounted, reactive} from 'vue'
import {points, randomData} from '../mock'

const state = reactive({
  pointsReact: [],
  isReady: false,
  isLocate: false,
})

const onViewReady = () => {
  console.log('ready...')
  state.isReady = true
  state.pointsReact = points
  setInterval(() => {
    state.pointsReact[0].pos.lat += 0.000005

    state.pointsReact[0].ph = randomData('ph')
    state.pointsReact[0].temp = randomData('temp')
    state.pointsReact[0].humidity = randomData('humidity')

    state.pointsReact[1].temp = randomData('temp')
    state.pointsReact[1].ph = 10.4
    state.pointsReact[1].humidity = randomData('humidity')
  }, 1000)
}

const handleClickEntity = index => {
  alert(`点我干嘛..${index}`)
}

const customAPI = () => {
  setTimeout(() => {
    state.isLocate = true
  }, 2000)
  return {lng: 118.385422, lat: 31.288817}
}

onMounted(() => {
})
</script>
<script>
export default {
  name: 'Earth',
}
</script>

<template>
  <div>
    <vc-config-provider cesium-path="/Cesium/Cesium.js">
      <vc-viewer ref="vcViewer" @ready="onViewReady" style="height: 100vh">
        <vc-layer-imagery>
          <vc-imagery-provider-bing
              ref="provider"
              bm-key="As2cU6j25iheYLs88Eh2sBBY8QYetjs19BfyAACrmYTVzuVV38zHEopHKUTJI5sP"
          >
          </vc-imagery-provider-bing>
        </vc-layer-imagery>
        <vc-my-location
            style="margin-bottom: 20px"
            position="bottom-right"
            :offset="[60, 0]"
            :custom-a-p-i="customAPI"
            animation
            :pixelSize="0"
        />
        <vc-zoom-control
            style="margin-right: 10px;"
            position="right"
        />
        <template v-for="(point, index) in state.pointsReact" :key="index">
          <vc-overlay-html ref="html" :position="[point.pos.lng, point.pos.lat, point.pos.height]">
            <div class="vc-box" v-if="state.isReady && state.isLocate">
              <div class="info-box">
                <p>温度：{{ point.temp }}°C</p>
                <p>湿度：{{ point.humidity }}%</p>
                <p>PH: {{ point.ph }}</p>
              </div>
            </div>
          </vc-overlay-html>
          <vc-entity
              :position="[point.pos.lng, point.pos.lat, point.pos.height]"
              @click="handleClickEntity(index)"
          >
            <vc-graphics-point color="red" :pixel-size="8"></vc-graphics-point>
          </vc-entity>
        </template>
      </vc-viewer>
    </vc-config-provider>
  </div>
</template>

<style>
.vc-box {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2px 10px 2px 0;
}

.info-box {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.info-box p {
  margin: 0;
  font-size: 20px;
}

body {
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
