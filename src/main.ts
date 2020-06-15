import Vue from 'vue'
import App from '@/./App.vue'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import axios from '@/plugins/axios'
import * as helpers from '@/helpers'

Vue.prototype.$helpers = helpers
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.config.silent = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
