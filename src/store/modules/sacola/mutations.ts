import { MutationTree } from 'vuex'
import { ISacola, IStateSacola } from '@/interfaces'
import defaultState from '@/store/modules/sacola/defaultState'

const mutations: MutationTree<IStateSacola> = {
  setPedido (state, pedido: ISacola): void {
    state.pedidos.push(pedido)
  },

  clearSacola (state): void {
    Object.assign(state, defaultState())
  }
}

export default mutations
