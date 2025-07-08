<template>
  <div class="main__week-day">
    <h3 class="main__week-title">{{i == 0 ? 'Сегодня' : i == 1 ? 'Завтра' : getWeek }}</h3>
    <p class="main__week-date">{{getDay}} {{getMonth}}</p>
    <div class="main__week-img">
       <img src="@/assets/img/clear.svg" alt="" v-if="description == 'ясно'" />
        <img
          src="@/assets/img/mainly_cloudy.svg"
          alt=""
          v-else-if="description == 'пасмурно'"
        />
        <img
          src="@/assets/img/rain.svg"
          alt=""
          v-else-if="description == 'дождь'"
        />
        <img
          src="@/assets/img/small_rain_sun.svg"
          alt=""
          v-else-if="description == 'небольшой дождь и солнце'"
        />
        <img
          src="@/assets/img/small_rain.svg"
          alt=""
          v-else-if="description == 'небольшой дождь'"
        />
        <img src="@/assets/img/mainly_cloudy.svg" alt="" v-else />
    </div>
    <p class="main__week-temp">{{ Math.round(item.temp.day) }}°</p>
    <p class="main__week-feels">{{ Math.round(item.feels_like.day) }}°</p>
    <p class="main__week-desc">{{ item.weather[0].description }}</p>
  </div>
</template>

<script>
import unix from '@/getDate.js'
export default {
  props: {
    item: Object,
    i: Number
  },
  computed: {
    description(){
      return this.item.weather[0].description
    },
    getMonth(){
      let name = unix(this.item.dt, 'month')
      if(name == 'январь'){
        return 'янв'
      }
      else if(name == 'февраль') {
        return 'фев'
      }
      else if(name == 'апрель') {
        return 'апр'
      }
      else if(name == 'август') {
        return 'авг'
      }
      else if(name == 'сентябрь') {
        return 'сен'
      }
      else if(name == 'октябрь') {
        return 'окт'
      }
      else if(name == 'ноябрь') {
        return 'ноб'
      }
      else if(name == 'декабрь') {
        return 'дек'
      }
      else {
        return name
      }
    },
    getWeek(){
      let name = unix(this.item.dt, 'week')
      if(name == 'понедельник'){
        return 'Пн'
      }
      else if(name == 'вторник'){
        return 'Вт'
      }
      else if(name == 'среда'){
        return 'Ср'
      }
      else if(name == 'четверг'){
        return 'Чт'
      }
      else if(name == 'пятница'){
        return 'Пт'
      }
      else if(name == 'суббота'){
        return 'Сб'
      }
      else if(name == 'воскресенье'){
        return 'Вс'
      }
    },
    getDay(){
      return unix(this.item.dt, 'day')
    }
  }
}
</script>

<style>

</style>