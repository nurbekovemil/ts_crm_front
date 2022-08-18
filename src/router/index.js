import Vue from "vue";
import VueRouter from "vue-router";

// admin pages
import {
  Dashboard,
  Users,
  UserView,
  Orders,
  OrderView,
  DealView,
  Deals,
  Offers,
  OfferView,
  AllOrders,
  Profile,
  Settings,
  Catalog,
  TradeList,
  DepoDeals,
} from "../views/admin";

// content pages
import {
  Handbook,
  AllOrdersList,
  About,
  CatalogOrders,
  Documents,
  Home,
  Order,
  Login,
  Registration,
  Categories,
  CategoryOrders,
  Trades,
  Tariffs,
} from "../views/content";

// layouts
import Admin from "../layouts/Admin.vue";
import Content from "../layouts/Content.vue";

import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Content,
    children: [
      {
        path: "/",
        name: "Главная",
        component: Home,
      },
      {
        path: "/about",
        name: "О бирже",
        component: About,
      },
      {
        path: "/catalog",
        name: "Каталог Товаров",
        component: CatalogOrders,
      },
      {
        path: "/tariffs",
        name: "Тарифы",
        component: Tariffs,
      },
      {
        path: "/categories",
        name: "Категории",
        component: Categories,
      },
      {
        path: "/categories/:id",
        name: "category_orders",
        component: CategoryOrders,
        props: true,
      },
      {
        path: "/ksedocuments",
        name: "Документы",
        component: Documents,
      },
      {
        path: "/orders/:type",
        name: "Все заявки",
        component: AllOrdersList,
      },
      {
        path: "/handbooks",
        name: "Справочник",
        component: Handbook,
      },
      {
        path: "/trades",
        name: "Итоги торгоа",
        component: Trades,
      },
      {
        path: "/trade/:id",
        name: "Подробная информация",
        component: DealView,
      },
      {
        path: "/order/:id",
        name: "Заявка",
        component: Order,
      },
      {
        path: "/login",
        name: "Войти",
        component: Login,
        meta: {
          isAuth: false,
        },
      },
      {
        path: "/registration",
        name: "Регистрация",
        component: Registration,
        meta: {
          isAuth: false,
        },
      },
    ],
  },
  {
    path: "/dashboard",
    component: Admin,
    meta: {
      isAuth: true,
    },
    children: [
      {
        path: "/",
        name: "Панель управления",
        component: Dashboard,
      },
      {
        path: "/dashboard/users",
        name: "Пользователи",
        component: Users,
      },
      {
        path: "/dashboard/user/:id",
        name: "Пользователь",
        component: UserView,
      },
      {
        path: "/dashboard/catalog",
        name: "Каталог",
        component: Catalog,
      },
      {
        path: "/dashboard/my-orders",
        name: "Мои заявки",
        component: Orders,
      },
      {
        path: "/dashboard/my-deals",
        name: "Мои сделки",
        component: Deals,
      },
      {
        path: "/dashboard/deals",
        name: "Все сделки",
        component: TradeList,
      },
      {
        path: "/dashboard/depos",
        name: "Сделки",
        component: DepoDeals,
      },
      {
        path: "/dashboard/offers",
        name: "Предложения",
        component: Offers,
      },
      {
        path: "/dashboard/all-orders",
        name: "Все заявки",
        component: AllOrders,
      },
      {
        path: "/dashboard/profile",
        name: "Профиль",
        component: Profile,
      },
      {
        path: "/dashboard/settings",
        name: "Настройки",
        component: Settings,
      },
      {
        path: "/dashboard/order/:id",
        name: "Описание товара",
        component: OrderView,
      },
      {
        path: "/dashboard/deal/:id",
        name: "Подробная информация",
        component: DealView,
      },
      {
        path: "/dashboard/offer/:id",
        name: "Подробная информация",
        component: OfferView,
        meta: {
          hideOrderTools: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.isAuth) &&
    !store.state.user.isAuth
  ) {
    next("/login");
    return;
  }
  //   if (
  //   to.matched.some((record) => record.meta.isAuth) &&
  //   store.state.user.isAuth
  // ) {
  //   next("/login");
  //   return;
  // }
  if (to.path == "/login" && store.state.user.isAuth) {
    next("/dashboard");
    return;
  }

  next();
});

export default router;
