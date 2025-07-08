<template>
  <div class="main__week">
    <div class="container">
      <div class="main__week-btns">
        <button class="main__week-btn" :class="{active: show}" @click="show = !show">На неделю</button>
        <button class="main__week-btn" @click="getWeather('Tashkent')">Отменить</button>
      </div>
    </div>
    <div class="main__week-block">
      <div class="container">
        <div class="main__week-days" :class="{active: show}">
          <Day v-for="(item, i) in getDailyWeather" :key="i" :item="item" :i="i"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import Day from '@/components/Main/Day.vue'
export default {
data(){
  return {
    show: false
  }
},
components: {
  Day
},
computed: {
  ...mapGetters(['getDailyWeather'])
},
methods: {
  ...mapActions(['getWeather'])
}

}
</script>

<style>

</style>