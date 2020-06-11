import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import {IPedido} from "@/interfaces";

@Module({
  name: 'pedido',
  namespaced: true,
  dynamic: true
})
export default class Pedido extends VuexModule {
  private pedidos: Array<IPedido> = []

  @Mutation
  public setPedido(pedido: IPedido): void {
    this.pedidos.push(pedido)
  }

  get getPedidos(): IPedido[]  {
    return this.pedidos
  }

  @Action
  public insertPedido(pedido: IPedido): void {
    this.context.commit('setPedido', pedido)
  }
}
