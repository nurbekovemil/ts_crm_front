import Vue from 'vue'
import VueRouter from 'vue-router'

// admin pages
import {
  Dashboard, 
  Users, 
  MyOrders, 
  OrderView, 
  Deals, 
  Offers, 
  AllOrders, 
  Profile, 
  Settings
} from '../views/admin'

// content pages
import {
  Handbook, 
  Home, 
  Login
} from '../views/content'

// layouts
import Admin from '../layouts/Admin.vue'
import Content from '../layouts/Content.vue'

import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Content,
    children: [
      {
        path: '/',
        name: 'Главная',
        component: Home
      },
      {
        path: '/handbooks',
        name: 'Справочник',
        component: Handbook
      },
      {
        path: '/login',
        name: 'Войти',
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
        path: '/dashboard/my-orders',
        name: 'Мои заявки',
        component: MyOrders,
      },
      {
        path: '/dashboard/my-deals',
        name: 'Мои сделки',
        component: Deals,
      },
      {
        path: '/dashboard/offers',
        name: 'Предложения',
        component: Offers,
      },
      {
        path: '/dashboard/all-orders',
        name: 'Все заявки',
        component: AllOrders,
      },
      {
        path: '/dashboard/profile',
        name: 'Профиль',
        component: Profile
      },
      {
        path: '/dashboard/settings',
        name: 'Настройки',
        component: Settings
      },
      {
        path: '/dashboard/order/:id',
        name: 'Описание товара',
        component: OrderView
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
