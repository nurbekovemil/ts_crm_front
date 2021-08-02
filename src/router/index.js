import Vue from 'vue'
import VueRouter from 'vue-router'

// admin pages
import {Dashboard, Users, Orders, Deals, Products, Profile} from '../views/admin'

// content pages
import {Handbook, Home, Login} from '../views/content'

// layouts
import Admin from '../layouts/Admin.vue'
import Content from '../layouts/Content.vue'

import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Content,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/handbooks',
        name: 'Справочник',
        component: Handbook
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      }
    ]
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
      },
      {
        path: '/dashboard/products',
        name: 'Товары',
        component: Products,
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      }
    ]
  },
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
