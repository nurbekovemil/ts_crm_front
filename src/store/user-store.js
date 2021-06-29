import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex, axios)

export default{
   state: {
      isAuth: false,
      token: localStorage.getItem('token') || '',
      user:{},
      users:[
         {id: 1, username: 'emil', password: '12345', role: 'ADMIN'},
         {id: 2, username: 'marsel', password: '12345', role: 'USER'},
      ]
   },
   mutations:{
      SET_USER(state, data){
         state.user = data
      },
      SET_IS_AUTH(state, data){
         state.isAuth = data
      },
   },
   actions:{
      async LOGIN({commit}, s){
         commit('SET_USER', {username: 'user'})
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