import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/content/Home.vue'
import Login from '../views/content/Login.vue'
import Admin from '../layouts/Admin.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.isAuth) && (!store.getters.GET_IS_AUTH)){
    next('/login')
    return
  }
  if(to.path === '/login' && store.getters.GET_IS_AUTH){
    next('/admin')
    return
  }
  next()
})

export default router
