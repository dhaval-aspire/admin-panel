import Vuex from 'vuex'
import Vue from 'vue'
import menuState from './module/menu'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menuState
  }
})
