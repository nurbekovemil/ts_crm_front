import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import user from './user-store'
import message from './message-store'
import order from './order-store'
import deal from './deal-store'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  modules: {
    message,
    user,
    order,
    deal
  }
})
