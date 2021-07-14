import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import api from './api'
Vue.use(Vuex)

export default{
   state: {
      isAuth: false,
      user:{},
      userMenus: []
   },
   mutations:{
      SET_USER(state, data){
         state.user = data.user
         state.userMenus = data.menus
      },
      SET_IS_AUTH(state, data){
         state.isAuth = data
      },
   },
   actions:{
      async LOGIN({commit}, loginData){
         try {
            const {data} = await api.userLogin(loginData)
            localStorage.setItem('token', data.token)
            commit('SET_IS_AUTH', true)
            commit('SET_USER', data)

            router.push('/dashboard')
         } catch (error) {
            localStorage.removeItem('token')
            commit('SET_IS_AUTH', false)
            console.log(error) //временная обработка ошибки
         }
      },
      async GET_ME({commit}){
         try {
            if(!localStorage.getItem('token')) {
               return
            }
            const {data} = await api.userGetMe()
            commit('SET_IS_AUTH', true)
            commit('SET_USER', data)
            console.log(data)
            router.push('/dashboard')
         } catch (error) {
            localStorage.removeItem('token')
            commit('SET_IS_AUTH', false)
            router.push('/login')
            console.log(error) //временная обработка ошибки
         }
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
      },
      GET_USER_MENU(state){
         return state.userMenus
      }
   }
}