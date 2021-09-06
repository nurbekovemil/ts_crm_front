import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {i18n} from './store/i18n'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// } 

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
