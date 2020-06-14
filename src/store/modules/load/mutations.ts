import { MutationTree } from 'vuex'
import { ILoad, IStateLoad } from '@/interfaces'

const mutations: MutationTree<IStateLoad> = {
  setStartLoad (state, load: ILoad): void {
    state.startLoad = load
  }
}

export default mutations
