import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/content/Home.vue'
import Login from '../views/content/Login.vue'
import Admin from '../layouts/Admin.vue'
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
    component: Admin
  },
  {
    path: '/login',
    name: 'Admin',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
