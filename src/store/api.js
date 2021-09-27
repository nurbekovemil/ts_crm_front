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
   userLogin: (data) => api.post('/users/login', data),
   userGetMe: () => api.get('/users/me'),
   userList: () => api.get('/users'),
   createUser: (data) => api.post('/users', data),
   deleteUser: (id) => api.delete('/users/'+id),
   updateUser: (data) => api.put('/users', data),

   // order api
   createOrder: (data) => api.post('/orders', data),
   getMyOrderList: (type) => api.get('/orders/'+type),
   getOrderById: (id) => api.get('/orders/by/'+id),
   getAllOrderList: () => api.get('/orders'),
   updateOrderStatus: (data) => api.put('/orders/status/', data),
  
   // Deal api
   createDeal: (data) => api.post('/deals', data),
   getDealById: (id) => api.get('/deals/'+id),
   getDealList: (status) => api.get('/deals/'+status),
   updateDealsStatus: () => api.put('/deals')
}