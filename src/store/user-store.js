import router from '../router'
import api from './api'

export default{
   namespaced: true,
   state: {
      isAddDialog: false,
		isEditDialog: false,
      isAuth: false,
      user:{},
      userMenus: [],
      usersList: [],
   },
   mutations:{
      SET_USER: (state, data) => {
         state.user = data.user
         state.userMenus = data.menus
      },
      SET_IS_AUTH: (state, data) => {
         state.isAuth = data
      },
      SETUSERSLIST: (state, usersList)=> {
         state.usersList = usersList
      },
      TOGGLE_ADD_DIALOG: (state) => {
         state.isAddDialog = !state.isAddDialog
      },
      TOGGLE_EDIT_DIALOG: (state) => {
         state.isEditDialog = !state.isEditDialog
      }

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
            commit("message/ERROR_MESSAGE", error.response.data.error, {
					root: true,
				});
         }
      },
      async GET_ME({commit}){
         try {
            if(localStorage.getItem('token')) {
               const {data} = await api.userGetMe()
               commit('SET_IS_AUTH', true)
               commit('SET_USER', data)
               router.history._startLocation != router.history.current.path && router.push(router.history._startLocation) 
            }
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
      
      async CREATEUSER({commit, dispatch}, user){
         try {
            const {data} = await api.createUser(user)
            commit("message/SUCCESS_MESSAGE", data, { root: true });
            dispatch('USERLIST')
            commit("TOGGLE_ADD_DIALOG")
         } catch (error) {
            commit('message/ERROR_MESSAGE', error.response.data.error, {root: true})
         }
      },

      async USERLIST({commit}) {
         try {
           const {data} = await api.userList()
           commit('SETUSERSLIST', data)
         } catch (error) {
         }
      },

      async DELETEUSER({commit, dispatch}, id){
         try {
            const {data} = await api.deleteUser(id)
            commit('message/SUCCESS_MESSAGE', data, {root: true})
            dispatch('USERLIST')
         } catch (error) {
            commit('message/ERROR_MESSAGE', error.response.data.error, {root: true})
         }
      },
      async UPDATEUSER({commit, dispatch}, update){
         try {
            const {data} = await api.updateUser(update)
            commit('message/SUCCESS_MESSAGE', data, {root: true})
            dispatch('USERLIST')
            commit('TOGGLE_EDIT_DIALOG')
         } catch (error) {
            commit('message/ERROR_MESSAGE', error.response.data.error, {root: true})

         }
      }
   }
}