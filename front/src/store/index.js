import Vue from 'vue'
import Vuex from 'vuex'
import { Home } from './modules/home.js'
import { Config } from './modules/config.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    store_home: Home,
    store_config: Config,
  },
})