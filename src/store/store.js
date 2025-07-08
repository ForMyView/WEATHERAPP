import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    apiKey: 'ec5873372dac0625f7423df84fbb3bca',
    getFullWeather: null
  },
  mutations: {
    getWeather(state, payload){
      state.getFullWeather = payload
    }
  },
  actions: {
    async getWeather({commit, state}, city){
      try {
        
        const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)

        let weather = res.data[0]
        
        let {lat, lon} = weather
        let name = weather.local_names.ru

        const res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric&lang=ru`)
        let weatherInfo = res2.data
        let weatherObj = {...weatherInfo, name: name}
        commit('getWeather', weatherObj)
        console.log(weatherObj);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    getFullWeather: state => state.getFullWeather,
    getDailyWeather(state){
      let arr = state.getFullWeather.daily 
      arr.pop()
      return arr
    }
  }
})

export default store
