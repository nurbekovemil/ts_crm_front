import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import api from './api'
Vue.use(Vuex)

export default{
   state: {
      isAuth: false,
      user:{},
      userMenus: [],
      users: [],
      usersList: [],
   },
   mutations:{
      SET_USER(state, data){
         state.user = data.user
         state.userMenus = data.menus
      },
      SET_IS_AUTH(state, data){
         state.isAuth = data
      },
      SETUSERSLIST(state, usersList) {
         state.usersList = usersList
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
         router.push('/')
      },
      
      async CREATEUSER({dispatch}, user){
         try {
            const {data} = await api.createUser(user)
            dispatch('USERLIST')
         } catch (error) {
            console.log(error)
         }
      },

      async USERLIST({commit}) {
         try {
           const {data} = await api.userList()
           commit('SETUSERSLIST', data)
         } catch (error) {
         }
      },

      async DELETEUSER({dispatch}, id){
         try {
            const {data} = await api.deleteUser(id)
            
            dispatch('USERLIST')
         } catch (error) {
            console.log(error)
         }
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
      },
      GET_USER_LIST(state) {
         return state.usersList
       },
   }
}