import Vue from 'vue'
import Vuex from 'vuex'
import user from './user-store'
import axios from 'axios'
Vue.use(Vuex, axios)

export default new Vuex.Store({
  modules: {
    user
  }
})
