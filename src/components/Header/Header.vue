<template>
  <header class="header">
      <nav class="header__nav">
        <a href="" class="header__logo">
          <img src="@/assets/img/logo.svg" alt="">
          <span>vue weather</span>
        </a>
        <div class="header__search">
          <img src="@/assets/img/drop.svg" alt="">
          <input 
          v-model="search"
          placeholder="Выбрать город"
          type="text" 
          class="header__input"
          @keydown.enter="getWeather(search), search = '' "
          >
        </div>
      </nav>
  </header>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  data(){
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions(['getWeather'])
  }
}
</script>

<style>

</style>