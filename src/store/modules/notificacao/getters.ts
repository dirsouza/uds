import { GetterTree } from 'vuex'
import { INotificacao, IRootState, IStateNotificacao } from '@/interfaces'

const getters: GetterTree<IStateNotificacao, IRootState> = {
  getStartNotificacao (state): boolean {
    return state.notificacao.start
  },

  getNoficacao (state): INotificacao {
    return state.notificacao
  }
}

export default getters
