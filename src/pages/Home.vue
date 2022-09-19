<script setup>
import InfoBox from '../components/InfoBox.vue'
import DataEcharts from '../components/DataEcharts.vue'
import DataTable from '../components/DataTable.vue'
import {onMounted, reactive, ref} from 'vue'
import moment from 'moment'

let timeRef = ref(moment().format('YYYY-MM-DD HH:mm:ss'))

const tableData = reactive([])
const tempArr = reactive([])
const phArr = reactive([])
const humidityArr = reactive([])
const xAxisData = reactive([])
let ph = ref(0)
let temp = ref(0)
let humidity = ref(0)

onMounted(() => {
  useClock()
  initWebSocket()
})

const addOneData = (data) => {
  tableData.push(data)
  tempArr.push(data.temp)
  humidityArr.push(data.humidity)
  phArr.push(data.ph)
  xAxisData.push('检测点' + tempArr.length)
  ph.value = data.ph
  temp.value = data.temp
  humidity.value = data.humidity
}

const useClock = () => {
  setInterval(() => {
    timeRef.value = moment().format('YYYY-MM-DD HH:mm:ss')
  }, 1000)
}

const initWebSocket = () => {
  const socket = new WebSocket('ws://mayapony.site:47954')
  // socket 开启成功
  socket.onopen = function (ev) {
    console.log('WebSocket连接成功: ', ev.currentTarget.url)
  }
  // socket 发生错误
  socket.onerror = function (ev) {
    console.log('WebSocket发生错误: ', ev)
  }
  // socket 数据接收（ev.data即为接收的数据）
  socket.onmessage = function (ev) {
    console.log(JSON.parse(ev.data))
    addOneData(JSON.parse(ev.data))
  }
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
        <DataEcharts titleText="温度(°C)" flag="temp" color="#6C90FF" :data="tempArr" :xAxisData="xAxisData"/>
        <DataEcharts titleText="PH值" flag="ph" color="#91CC75" :data="phArr" :xAxisData="xAxisData"/>
        <DataEcharts titleText="湿度(%)" flag="humidity" color="#EE6666" :data="humidityArr" :xAxisData="xAxisData"/>
      </div>
      <div class="center-container">
        <div class="infos">
          <h1 class="info-header">当前位置数据</h1>
          <div class="info-boxes">
            <InfoBox boxText="PH" :number="ph"/>
            <InfoBox boxText="温度" :number="temp"/>
            <InfoBox boxText="湿度" :number="humidity"/>
          </div>
        </div>
        <iframe id="earth-iframe" src="http://demo.mayapony.site/#/earth"></iframe>
      </div>
      <div class="right-container">
        <data-table :tableData="tableData"/>
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
