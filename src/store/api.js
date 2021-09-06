import axios from 'axios'


const api = axios.create({
   baseURL: 'http://localhost:3132',
   headers: {
      Accept: 'application/json',
   }
})

api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`



export default {
   userLogin(data){
      return api.post('/users/login', data)
   },
   userGetMe(){
      return api.get('/users/me')
   },
   userList(){
      return api.get('/users/')
   },
   createUser(data){
      return api.post('/users', data)
   },
   deleteUser(id){
      return api.delete('/users/'+id)
   },
   updateUser(data){
      return api.put('/users/', data)
   }
}