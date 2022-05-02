<script setup>
import InfoBox from '../components/InfoBox.vue'
import DataEcharts from '../components/DataEcharts.vue'
import DataTable from '../components/DataTable.vue'
import {onMounted, ref} from 'vue'
import moment from 'moment'

let timeRef = ref(moment().format('YYYY-MM-DD HH:mm:ss'))

onMounted(() => {
  useClock()
})

const useClock = () => {
  setInterval(() => {
    timeRef.value = moment().format('YYYY-MM-DD HH:mm:ss')
  }, 1000)
}
</script>
<script>
export default {
  name: 'Home',
}
</script>

<template>
  <div id="main-container">
    <div class="container-header">
      <div class="time" style="padding-right: 20px; visibility: hidden">{{ timeRef }}</div>
      <h1 id="title">稻田守护者—水稻病虫害及其生长环境的智能监测服务商</h1>
      <div class="time" style="padding-right: 20px">{{ timeRef }}</div>
    </div>
    <div class="container-content">
      <div class="left-container">
        <DataEcharts titleText="温度(°C)" flag="temp" color="#6C90FF"/>
        <DataEcharts titleText="PH值" flag="ph" color="#91CC75"/>
        <DataEcharts titleText="湿度(%)" flag="humidity" color="#EE6666"/>
      </div>
      <div class="center-container">
        <div class="infos">
          <h1 class="info-header">检测值告警点️</h1>
          <div class="info-boxes">
            <InfoBox boxText="PH"/>
            <InfoBox boxText="温度"/>
            <InfoBox boxText="湿度"/>
          </div>
        </div>
        <iframe id="earth-iframe" src="http://demo.mayapony.site/#/earth"></iframe>
      </div>
      <div class="right-container">
        <data-table/>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
#main-container
  width: 100vw
  background-color: #0f1120
  display: flex
  flex-direction: column

.container-header
  color: #fff
  height: 80px
  width: 100vw
  background-color: #0f1120
  display: flex
  align-items: center
  justify-content: space-between
  font-size: 1.5rem

  .time
    font-size: 1rem

.container-content
  height: calc(100vh - 80px)
  width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between

.left-container
  width: 25vw
  height: calc(100vh - 80px)

.center-container
  width: 45vw
  height: calc(100vh - 90px)
  display: flex
  flex-direction: column

  .infos
    flex-grow: 0

    .info-header
      color: white

    .info-boxes
      padding: 0 20px
      display: flex
      justify-content: space-between


  #earth-iframe
    width: 100%
    flex-grow: 1
    padding: 15px
    border: 0

.right-container
  width: 25vw
</style>
