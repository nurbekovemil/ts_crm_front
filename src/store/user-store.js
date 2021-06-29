import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex, axios)

export default{
   state: {
      isAuth: false,
      user:{},
      users:[
         {id: 1, username: 'emil', password: '123', role: 'ADMIN'},
         {id: 2, username: 'marsel', password: '123', role: 'USER'},
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
      async LOGIN({commit}, state){
         commit('SET_USER', {username: 'user'})
         commit('SET_IS_AUTH', true)
         router.push('/') 
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