<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row align="start" justify="center">

          <Produto v-for="(produto, i) of produtos" :key="i" :produto="produto" />

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Produto from '@/components/Produto.vue'
import { IProduto } from '@/interfaces'

@Component({
  name: 'Catalogo',
  components: {
    Produto
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
}
</script>
