<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row align="start" justify="center">

          <Produto
            v-for="(produto, i) of produtos"
            :key="i"
            :produto="produto"
            @openDialog="openDialog = $event"
          />

        </v-row>
      </v-col>
    </v-row>

    <Pedido
      :dialog="openDialog"
      @closeDialog="closeDialog"
    />

  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Produto from '@/components/Produto.vue'
import Pedido from '@/components/Pedido.vue'
import { INotificacao, IProduto } from '@/interfaces'

const moduloSacola = namespace('sacola')
const moduloNotificacao = namespace('notificacao')

@Component({
  name: 'Catalogo',
  components: {
    Produto,
    Pedido
  }
})
export default class Catalogo extends Vue {
  private produtos: IProduto[] = [
    {
      nome: 'Açaí frozen',
      descricao: 'Frozen de açaí de 300ml',
      categoria: 'pequeno',
      tamanho: 300,
      unidade: 'ml',
      valor: 10,
      tempo_preparo: 5
    },
    {
      nome: 'Açaí frozen',
      descricao: 'Frozen de açaí de 500ml',
      categoria: 'médio',
      tamanho: 500,
      unidade: 'ml',
      valor: 13,
      tempo_preparo: 7
    },
    {
      nome: 'Açaí frozen',
      descricao: 'Frozen de açaí de 700ml',
      categoria: 'grande',
      tamanho: 700,
      unidade: 'ml',
      valor: 15,
      tempo_preparo: 10
    }
  ]

  private dialogPedido = false

  get openDialog () {
    return this.dialogPedido
  }

  set openDialog (value: boolean) {
    this.dialogPedido = value
  }

  @moduloSacola.Mutation
  public clearSacola!: Function

  @moduloNotificacao.Action
  public insertNotificacao!: Function

  public closeDialog (value: boolean) {
    new Promise<boolean>((resolve, reject) => {
      try {
        this.clearSacola()
        resolve()
      } catch (e) {
        reject(e)
      }
    }).then(() => {
      this.openDialog = value
      this.insertNotificacao({
        start: true,
        color: 'primary',
        message: 'Pedido cancelado com sucesso!',
        timeout: 3000
      } as INotificacao)
    })
  }
}
</script>
