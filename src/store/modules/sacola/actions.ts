import { ActionTree } from 'vuex'
import { IAdicional, ISacola, IProduto, IRootState, ISabor, IStateSacola } from '@/interfaces'
import collect from "collect.js";

const actions: ActionTree<IStateSacola, IRootState> = {
  insertPedido ({ state, commit, getters }): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        const produto: IProduto = getters('getProduto')
        const sabor: ISabor = getters('getSabor')
        const adicionais: IAdicional[] = getters('getAdicionais')

        const pedido: ISacola = {
          tamanho: produto.tamanho,
          unidade: produto.unidade,
          sabor: sabor.nome,
          personalizacao: collect(adicionais).flatMap(adc => ({
            nome: adc.nome,
            valor: adc.valor
          })).all(),
          tempo_preparo: collect([
            produto.tempo_preparo,
            sabor.tempo_preparo,
            collect(adicionais).sum('tempo_preparo')
          ]).sum() as number,
          valor_total: collect([
            produto.valor,
            collect(adicionais).sum('valor')
          ]).sum() as number
        }
        commit('setPedido', pedido)
        commit('clearSacola')
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default actions
