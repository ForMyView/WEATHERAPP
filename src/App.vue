<template>
  <div class="container" v-if="getFullWeather">
    <Header/>
    <Main/>
  </div>
  <div class="loading" v-else>
    <div class="loading__element"></div>
  </div>
  <Week v-if="getFullWeather"/>
</template>

<script>

import Header from '@/components/Header/Header.vue'
import Main from '@/components/Main/Main.vue'
import Week from '@/components/Main/Week.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Header,
    Main,
    Week
  },
  computed: {
    ...mapGetters(['getFullWeather'])
  },
  methods: {
    ...mapActions(['getWeather'])
  },
  created(){
    setTimeout(() => {
      this.getWeather('Tashkent')
    }, 2000);
  }
}
</script>

<style>

</style>