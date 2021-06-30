import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex, axios)

export default{
   state: {
      isAuth: false,
      user:{}
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
      async LOGIN({commit}, data){
         axios.post('/user/login', data)
            .then(res => {
               const {data} = res
               localStorage.setItem('token', data.token)
               commit('SET_USER', data.username)
               commit('SET_IS_AUTH', true)
               router.push('/admin')
            })
            .catch(err => {
               commit('SET_IS_AUTH', false)
            })
      },
      LOGOUT({commit}){
         localStorage.removeItem('token')
         commit('SET_IS_AUTH', false)
         router.push('/login')
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