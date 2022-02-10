import Vue from 'vue'
import VueRouter from 'vue-router'

// admin pages
import {
  Dashboard, 
  Users, 
  Orders, 
  OrderView,
  DealView,
  Deals, 
  Offers,
  OfferView,
  AllOrders, 
  Profile, 
  Settings,
  Catalog
} from '../views/admin'

// content pages
import {
  Handbook,
  AllOrdersList,
  About, 
  Contacts,
  Documents,
  Home, 
  Order,
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
        path: '/about',
        name: 'О бирже',
        component: About
      },
      {
        path: '/contacts',
        name: 'Контакты',
        component: Contacts
      },
      {
        path: '/documents',
        name: 'Документы',
        component: Documents
      },
      {
        path: '/orders/:type',
        name: 'Все заявки',
        component: AllOrdersList
      },
      {
        path: '/handbooks',
        name: 'Справочник',
        component: Handbook
      },
      {
        path: '/order/:id',
        name: 'Заявка',
        component: Order
      },
      {
        path: '/login',
        name: 'Войти',
        component: Login
      },

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
        path: '/dashboard/catalog',
        name: 'Каталог',
        component: Catalog,
      },
      {
        path: '/dashboard/my-orders',
        name: 'Мои заявки',
        component: Orders,
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
      },
      {
        path: '/dashboard/deal/:id',
        name: 'Подробная информация',
        component: DealView
      },
      {
        path: '/dashboard/offer/:id',
        name: 'Подробная информация',
        component: OfferView
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
  if(to.matched.some(record => record.meta.isAuth) && (!store.state.user.isAuth)){
    next('/login')
    return
  }
  if(to.path == '/login' && store.state.user.isAuth){
    next('/dashboard')
    return
  }

  next()
})

export default router
