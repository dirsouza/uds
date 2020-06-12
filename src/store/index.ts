import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLs from 'secure-ls'
import { Pedido } from './modules'

Vue.use(Vuex)

const ls = new SecureLs({
  isCompression: true,
  encodingType: 'aes',
  encryptionSecret: process.env.VUE_APP_VUEX_SECRET
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Pedido
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key)
      }
    })
  ]
})
