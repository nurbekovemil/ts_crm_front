import axios from 'axios'


const api = axios.create({
   baseURL: 'http://localhost:3132',
})

api.interceptors.request.use(
   async config => {
     config.headers = { 
       'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
       'Accept': 'application/json',
     }
     return config;
   },
   error => {
     Promise.reject(error)
 });

export default {
   // user api
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
   },

   // order api
   createOrder(data){
      return api.post('/orders', data)
   },
   getAllOrderList(type){
      return api.get('/orders/'+type)
   },
   getOrderById(id){
      return api.get('/orders/by/'+id)
   }
   
}