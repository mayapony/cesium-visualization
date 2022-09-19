<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  boxText: {
    type: String
  },
  number: {
    required: true
  }
})
</script>

<script>
export default {
  name: "InfoBox"
}
</script>

<template>
  <div class="box-container">
    <div class="box-number">
      {{ number }}
    </div>
    <div class="box-text">
      {{ boxText }}
    </div>
  </div>
</template>


<style lang="sass" scoped>
.box-container
  width: 30%
  height: 140px
  display: flex
  flex-direction: column
  margin-bottom: 10px

  .box-number
    background-color: #1D1B33
    color: red
    display: flex
    justify-content: center
    align-items: center
    font-size: 2.5rem
    font-weight: bold
    flex-grow: 1

  .box-text
    flex-grow: 0
    padding: 5px
    background-color: #282544
    font-size: 1.2rem
    color: #fff
    text-align: center
    font-weight: normal
</style>