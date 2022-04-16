<template>
  <div class="table-container-outer">

    <div class="table-container-inner">

      <table cellspacing="0">
        <tr>
          <th>检测点</th>
          <th>PH值</th>
          <th>温度</th>
          <th>湿度</th>
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
        <tr v-for="data in tableData" :key="data.name">
          <td>{{ data.name }}</td>
          <td>{{ data.ph }}</td>
          <td>{{ data.temp }}</td>
          <td>{{ data.humidity }}</td>
        </tr>
      </table>

    </div>

  </div>
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
.table-container-outer
  width: 90%
  height: calc(100vh - 100px)
  position: relative
  overflow: hidden

.table-container-inner
  position: absolute
  overflow-y: auto
  width: 110%
  height: 100%
  top: 0
  left: -17px

table
  margin-top: 30px
  color: white
  width: 100%
  padding: 0
  border: 2px solid #092353

  th
    padding: 10px
    background-color: #092353aa

  td
    text-align: center
    padding: 10px
    border-top: 1px solid #092353

    background-color: #09235333

</style>