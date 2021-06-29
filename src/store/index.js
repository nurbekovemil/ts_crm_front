import Vue from 'vue'
import Vuex from 'vuex'
import user from './user-store'
import axios from 'axios'
Vue.use(Vuex, axios)

let token = localStorage.getItem('token') || '';
axios.defaults.baseURL = 'http://localhost:3132/';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
})
