import Vue from 'vue'
import VueRouter from 'vue-router'

// admin pages
import {Dashboard, Users, Orders, Deals,} from '../views/admin'

// content pages
import {Home, Login} from '../views/content'

// admin layout
import Admin from '../layouts/Admin.vue'

// content layout
// ...

import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    component: Admin,
    meta: {
      isAuth: true
    },
    children: [
      {
        path: '/',
        name: 'Панель управления',
        component: Dashboard,
      },
      {
        path: '/dashboard/users',
        name: 'Пользователи',
        component: Users,
      },
      {
        path: '/dashboard/orders',
        name: 'Отчеты',
        component: Orders,
      },
      {
        path: '/dashboard/deals',
        name: 'Сделки',
        component: Deals,
      }
    ]
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
  if(to.path == '/login' && store.getters.GET_IS_AUTH){
    next('/dashboard')
    return
  }

  next()
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/admin') 
  } else {
    next() 
  }
})
export default router
