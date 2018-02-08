import Vue from 'vue'
import Vuex from 'vuex'
import staticData from './modules/staticData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    staticData
  }
})
