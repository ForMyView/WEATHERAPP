<template>
  <div class="main__content">
    <div class="main__left">
      <img src="@/assets/img/bg.svg" alt="" class="main__left-bg" />
      <h1 class="main__left-deg">
        {{ Math.round(getFullWeather.current.temp) }}°
      </h1>
      <p class="main__left-today">Сегодня</p>
      <p class="main__left-time">Время: {{ hours }}:{{ minutes }}</p>
      <p class="main__left-city">Город: {{ getFullWeather.name }}</p>
      <div class="main__left-icon">
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
    </div>
    <div class="main__right">
      <img src="@/assets/img/bg.svg" alt="" class="main__right-bg" />
      <div class="main__right-item">
        <div class="main__right-icon">
          <img src="@/assets/img/temp.svg" alt="" />
        </div>
        <span>Температура</span>
        <span>{{ Math.round(getFullWeather.current.temp) }}° - ощущается как {{ Math.round(getFullWeather.current.feels_like) }}°</span>
      </div>
      <div class="main__right-item">
        <div class="main__right-icon">
          <img src="@/assets/img/pressure.svg" alt="" />
        </div>
        <span>Давление</span>
        <span>{{getFullWeather.current.pressure}} мм ртутного столба - {{getFullWeather.current.pressure < 760 ? 'пониженное' : getFullWeather.current.pressure > 760 ? 'повышенное' : 'нормальноье'}}</span>
      </div>
      <div class="main__right-item">
        <div class="main__right-icon">
          <img src="@/assets/img/osadki.svg" alt="" />
        </div>
        <span>Осадки</span>
        <span>{{getFullWeather.current.humidity}}%</span>
      </div>
      <div class="main__right-item">
        <div class="main__right-icon">
          <img src="@/assets/img/wind.svg" alt="" />
        </div>
        <span>Ветер</span>
        <span>{{Math.round(getFullWeather.current.wind_speed)}} м/с {{getDirection}} - {{Math.round(getFullWeather.current.wind_speed) < 10 ? 'легкий ветер' : 'сильный ветер'}} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      hours: null,
      minutes: null,
    };
  },
  methods: {
    getTime() {
      this.hours =
        new Date().getHours() < 10
          ? "0" + new Date().getHours()
          : new Date().getHours();
      this.minutes =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
          setInterval(() => {
            this.hours =
        new Date().getHours() < 10
          ? "0" + new Date().getHours()
          : new Date().getHours();
      this.minutes =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
          }, 1000);
    },
  },
  computed: {
    ...mapGetters(["getFullWeather"]),
    description() {
      return this.getFullWeather.current.weather[0].description;
    },
    getDirection(){
      if(this.getFullWeather.current.wind_deg == 0 || this.getFullWeather.current.wind_deg == 360){
        return 'Северный'
      }
      else if(this.getFullWeather.current.wind_deg == 90) {
        return 'Восточный'
      }
      else if(this.getFullWeather.current.wind_deg == 180) {
        return 'Южный'
      }
      else if(this.getFullWeather.current.wind_deg == 270) {
        return 'Западный'
      }
      else if(this.getFullWeather.current.wind_deg > 0 && this.getFullWeather.current.wind_deg < 90) {
        return 'Северо-Восточный'
      }
      else if(this.getFullWeather.current.wind_deg > 90 && this.getFullWeather.current.wind_deg < 180) {
        return 'Юго-Восточный'
      }
      else if(this.getFullWeather.current.wind_deg > 180 && this.getFullWeather.current.wind_deg < 270) {
        return 'Юго-Западный'
      }
      else if(this.getFullWeather.current.wind_deg > 270 && this.getFullWeather.current.wind_deg < 360) {
        return 'Северо-Западный'
      }
    }
  },
  created(){
    this.getTime()
  }
};
</script>

<style>
</style>