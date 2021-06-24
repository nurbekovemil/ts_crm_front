import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default{
   state: {
      isAuth: false,
      user:{
         username: 'Emil'
      }
   },
   mutations:{

   },
   actions:{
      async LOGIN({commit, state}, data){
         console.log(data)
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