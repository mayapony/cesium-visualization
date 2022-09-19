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
    <tr v-for="(data, index) in tableData" :key="data.name">
      <td>检测点{{ index }}</td>
      <td>{{ data.ph }}</td>
      <td>{{ data.temp }}°C</td>
      <td>{{ data.humidity }}%</td>
    </tr>
    </tbody>
  </table>

</template>

<script setup>

const props = defineProps({
  tableData: {
    required: true
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