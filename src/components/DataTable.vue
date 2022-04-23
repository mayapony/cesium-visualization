<template>

  <table cellspacing="0">
    <caption>各检测点统计数据</caption>
    <thead>
    <tr>
      <th>检测点</th>
      <th>一氧化碳浓度(PPM)</th>
      <th>二氧化碳浓度(PPM)</th>
      <th>氧气(PPM)</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="data in tableData" :key="data.name">
      <td>{{ data.name }}</td>
      <td>{{ data.ph }}</td>
      <td>{{ data.temp }}</td>
      <td>{{ data.humidity }}</td>
    </tr>
    </tbody>
  </table>

</template>

<script setup>
import {randomData} from "../mock";

const tableData = Array.from(new Array(50), (val, index) => {
  return {
    name: '检测点' + (index + 1),
    ph: randomData('ph'),
    temp: randomData('temp'),
    humidity: randomData('humidity')
  }
})

</script>
<script>
export default {
  name: "DataTable"
}
</script>

<style scoped lang="sass">
table
  margin: 30px auto
  color: white
  padding: 0
  border: 2px solid #092353
  scrollbar-width: none

  ::-webkit-scrollbar
    display: none

  caption
    margin-bottom: 5px

  thead
    width: 100%
    display: block

  tbody
    width: 100%
    height: calc(100vh - 220px)
    overflow-y: scroll
    -ms-overflow-style: none
    display: block

  tr
    width: 100%


  th
    padding: 10px
    background-color: #092353aa
    width: calc(22vw / 4)

  td
    text-align: center
    padding: 10px
    border-top: 1px solid #092353
    width: calc(22vw / 4)

    background-color: #09235333

</style>