import Vue from 'vue'
import Vuex from 'Vuex'
import getters from './getters.js'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})

export default store
