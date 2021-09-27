import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import users from './user-store'
import messages from './message-store'
import orders from './order-store'
import deals from './deal-store'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  modules: {
    messages,
    users,
    orders,
    deals
  }
})
