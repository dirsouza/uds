import { MutationTree } from 'vuex'
import { ISabor, IStateSabor } from '@/interfaces'
import defaultState from '@/store/modules/sabor/defaultState'

const mutations: MutationTree<IStateSabor> = {
  setSabor (state, sabor: ISabor): void {
    if (Object.keys(state.sabor).length) {
      state.sabor = state.sabor.nome === sabor.nome ? {} : sabor
    } else {
      state.sabor = sabor
    }
  },

  clearSabor (state): void {
    Object.assign(state, defaultState())
  }
}

export default mutations
