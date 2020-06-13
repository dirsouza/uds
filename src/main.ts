import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import * as Helpers from './helpers'

Vue.prototype.$helpers = Helpers

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.config.silent = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
