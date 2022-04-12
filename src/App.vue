<script setup>
import { onMounted, reactive } from 'vue'
import { points } from './mock'

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
    state.pointsReact[0].pos.lat += 0.00001
    state.pointsReact[0].ph += 1
    state.pointsReact[1].temp += 1
  }, 500)
}

const handleClickEntity = index => {
  alert(`点我干嘛..${index}`)
}

const customAPI = () => {
  state.isLocate = true
  return { lng: 118.385422, lat: 31.288817 }
}

onMounted(() => {})
</script>

<template>
  <div>
    <vc-viewer ref="vcViewer" @ready="onViewReady" style="height: 100vh">
      <vc-layer-imagery>
        <vc-imagery-provider-bing
          ref="provider"
          bm-key="As2cU6j25iheYLs88Eh2sBBY8QYetjs19BfyAACrmYTVzuVV38zHEopHKUTJI5sP"
        >
        </vc-imagery-provider-bing>
      </vc-layer-imagery>
      <vc-my-location
        style="margin-top: 20px"
        position="top-left"
        :offset="[60, 0]"
        :custom-a-p-i="customAPI"
        animation
        :pixelSize="0"
      />
      <template v-for="(point, index) in state.pointsReact" :key="index">
        <vc-overlay-html ref="html" :position="[point.pos.lng, point.pos.lat, point.pos.height]">
          <div class="vc-box" v-if="state.isReady && state.isLocate">
            <ul>
              <li>温度：{{ point.temp }}</li>
              <li>湿度：{{ point.humidity }}</li>
              <li>PH: {{ point.ph }}</li>
            </ul>
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
  </div>
</template>

<style>
.vc-box {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2px 10px 2px 0;
}
</style>
