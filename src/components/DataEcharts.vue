<template>
  <figure>
    <v-chart :option="bar" autoresize @zr:click="handleZrClick" @click="handleClick"/>
  </figure>
</template>

<script setup>
import {randomData} from "../mock";

const props = defineProps({
  titleText: {
    type: String,
  },
  flag: {
    type: String,
  },
  color: {
    type: String
  }
})

const barLoadingOptions = {
  text: 'Loading…',
  color: '#1890ff',
  maskColor: 'rgba(255, 255, 255, 0.4)',
}

const bar = {
  title: {
    show: true,
    text: props.titleText,
    textStyle: {
      color: '#fff',
    },
  },
  textStyle: {
    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
  },
  xAxis: {
    type: 'category',
    data: Array.from(new Array(30)).map((_, i) => `检测点${i + 1}`),
  },
  yAxis: {type: 'value'},
  series: [
    {
      data: Array.from(new Array(30), () => randomData(props.flag)),
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
  dataZoom: {
    show: true, // 为true 滚动条出现
    realtime: true,
    type: 'slider', // 有type这个属性，滚动条在最下面，也可以不行，写y：36，这表示距离顶端36px，一般就是在图上面。
    height: 20, // 表示滚动条的高度，也就是粗细
    start: 20, // 表示默认展示20%～80%这一段。
    end: 80,
  },
  color: props.color
}

const handleZrClick = () => {
}

const handleClick = () => {
}
</script>

<script>
export default {
  name: 'DataEcharts',
}
</script>

<style scoped>
figure {
  display: inline-block;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
  width: 100%;
}

.echarts {
  width: 100%;
  height: calc((100vh - 80px - 60px - 60px) / 3);
}
</style>
