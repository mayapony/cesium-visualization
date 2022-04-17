<template>

  <table cellspacing="0">
    <caption>各检测点统计数据</caption>
    <thead>
    <tr>
      <th>检测点</th>
      <th>PH值</th>
      <th>温度</th>
      <th>湿度</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="data in tableData" :key="data.name">
      <td>{{ data.name }}</td>
      <td>{{ data.ph }}</td>
      <td>{{ data.temp }}</td>
      <td>{{ data.humidity }}</td>
    </tr>
    <tr v-for="data in tableData" :key="data.name">
      <td>{{ data.name }}</td>
      <td>{{ data.ph }}</td>
      <td>{{ data.temp }}</td>
      <td>{{ data.humidity }}</td>
    </tr>
    <tr v-for="data in tableData" :key="data.name">
      <td>{{ data.name }}</td>
      <td>{{ data.ph }}</td>
      <td>{{ data.temp }}</td>
      <td>{{ data.humidity }}</td>
    </tr>
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
function random() {
  return Math.round(200 + Math.random() * 700) / 10
}

const tableData = [
  {
    name: '检测点1',
    ph: random(),
    temp: random(),
    humidity: random()
  },
  {
    name: '检测点2',
    ph: random(),
    temp: random(),
    humidity: random()
  },
  {
    name: '检测点3',
    ph: random(),
    temp: random(),
    humidity: random()
  },
  {
    name: '检测点4',
    ph: random(),
    temp: random(),
    humidity: random()
  },
  {
    name: '检测点5',
    ph: random(),
    temp: random(),
    humidity: random()
  },
  {
    name: '检测点6',
    ph: random(),
    temp: random(),
    humidity: random()
  },
]
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

  thead
    width: 100%
    display: block

  tbody
    width: 100%
    height: calc(100vh - 200px)
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