import { ActionTree } from "vuex";
import { ILoad, IRootState, IStateLoad } from "@/interfaces";

const actions: ActionTree<IStateLoad, IRootState> = {
  insertLoad ({ commit }, start: ILoad): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        commit('setStartLoad', start)
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default actions
