import { GetterTree } from 'vuex'
import { IStateSabor, IRootState, ISabor } from '@/interfaces'

const getters: GetterTree<IStateSabor, IRootState> = {
  getSabor (state): ISabor {
    return state.sabor
  }
}

export default getters
