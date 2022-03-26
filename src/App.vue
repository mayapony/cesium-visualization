<script setup>
const onViewReady = () => {
  console.log('ready...')
}

const handleClickEntity = () => {
  alert('点我干嘛..')
}
</script>

<template>
  <div>
    <vc-viewer
      ref="vcViewer"
      @ready="onViewReady"
      style="height: 100vh"
      :scene3DOnly="true"
      base-layer-picker="baseLayerPicker"
    >
      <vc-my-location
        style="margin-top: 20px"
        position="top-left"
        :offset="[60, 0]"
        :custom-a-p-i="() => ({ lng: 118.385422, lat: 31.288817 })"
      ></vc-my-location>

      <vc-overlay-html ref="html" :position="[118.385661, 31.287682, 20]">
        <div class="vc-box">行知楼</div>
      </vc-overlay-html>
      <vc-entity :position="[118.385661, 31.287682, 20]" @click="handleClickEntity">
        <vc-graphics-point color="red" :pixel-size="8"></vc-graphics-point>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<style></style>
