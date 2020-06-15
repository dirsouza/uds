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
      @closeDialog="openDialog = $event"
    />

  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Produto from '@/components/Produto.vue'
import Pedido from '@/components/Pedido.vue'
import { IProduto } from '@/interfaces'

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
      nome: 'Frozen de Açaí',
      descricao: 'Frozen de açaí de 300ml',
      categoria: 'pequeno',
      tamanho: 300,
      unidade: 'ml',
      valor: 10,
      tempo_preparo: 5
    },
    {
      nome: 'Frozen de Açaí',
      descricao: 'Frozen de açaí de 500ml',
      categoria: 'médio',
      tamanho: 500,
      unidade: 'ml',
      valor: 13,
      tempo_preparo: 7
    },
    {
      nome: 'Frozen de Açaí',
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
}
</script>
