<script setup>
import { onMounted, reactive, ref } from 'vue'
import { points } from './mock'

const state = reactive({
  pointsReact: [],
})
let textRef = ref('')

const onViewReady = () => {
  console.log('ready...')
  state.pointsReact = points
  setInterval(() => {
    state.pointsReact[0].pos.lat += 0.000001
    textRef.value = state.pointsReact[0].pos.lat.toString()
  }, 500)
}

const handleClickEntity = index => {
  alert(`点我干嘛..${index}`)
}

onMounted(() => {})
</script>

<template>
  <div>
    <vc-viewer ref="vcViewer" @ready="onViewReady" style="height: 100vh">
      <vc-layer-imagery>
        <!-- 可到(https://www.bingmapsportal.com/)申请Key。 -->
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
        :custom-a-p-i="() => ({ lng: 118.385422, lat: 31.288817 })"
        animation
      />
      <template v-for="(point, index) in state.pointsReact" :key="index">
        <vc-overlay-html ref="html" :position="[point.pos.lng, point.pos.lat, point.pos.height]">
          <div class="vc-box">PH {{ textRef }}</div>
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

<style></style>
