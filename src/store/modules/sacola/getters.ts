import { GetterTree } from 'vuex'
import { IStateSacola, IRootState, ISacola } from '@/interfaces'

const getters: GetterTree<IStateSacola, IRootState> = {
  getSacola (state): ISacola[] {
    return state.pedidos
  }
}

export default getters
