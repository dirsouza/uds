<template>
  <v-card
    class="mx-lg-auto ma-3"
    max-width="374"
  >
    <v-img
      height="250"
      src="../assets/acai-frozen.jpeg"
    />
    <v-card-title>
      {{ produto.nome }}
      <v-spacer />
      <span class="subtitle-1">{{ $helpers.formatarValor.format(produto.valor) }}</span>
    </v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        {{ produto.descricao }}
        <v-spacer />
        <span class="overline">{{ produto.categoria }}</span>
      </v-row>
    </v-card-text>
    <v-divider class="mx-4" />
    <v-card-actions>
      <v-btn
        dark
        color="deep-purple darken-3"
        text
        block
        @click="abrirPedido(produto)"
      >
        Comprar
      </v-btn>
    </v-card-actions>

    <Pedido :dialog="dialogPedido" />

  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Pedido from '@/components/Pedido.vue'
import { IProduto } from '@/interfaces'

@Component({
  name: 'Produto',
  components: {
    Pedido
  }
})
export default class Produto extends Vue {
  @Prop({
    type: Object,
    required: true
  }) readonly produto?: IProduto;

  private dialogPedido = false

  public abrirPedido (produto: IProduto): void {
    this.dialogPedido = true
  }
}
</script>
