import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import lodash from 'lodash'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'
import router from './router/index.js'

Vue.prototype.$lodash = lodash;
Vue.prototype.$pywebview = window.pywebview
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex);
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/fonts/exotwo.css'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
