import { ActionTree } from "vuex";
import { IRootState, IStateLoad } from "@/interfaces";

const actions: ActionTree<IStateLoad, IRootState> = {
  insertLoad ({ commit }, start: boolean): Promise<boolean> {
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
