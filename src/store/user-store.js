import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex, axios)

export default{
   state: {
      isAuth: false,
      user:{
         username: 'Emil'
      }
   },
   mutations:{
      SET_USER(state, data){
         state.user = data
      },
      SET_IS_AUTH(state, data){
         state.isAuth = data
      }
   },
   actions:{
      async LOGIN({commit, state}, data){
         commit('SET_USER', {username: 'marsel'})
         commit('SET_IS_AUTH', true)
         router.push('/admin')
      }
   },
   getters:{
      GET_USER(state) {
         return state.user
      },
      GET_IS_AUTH(state){
         return state.isAuth
      }
   }
}