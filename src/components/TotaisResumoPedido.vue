<template>
  <v-col>
    <v-card
      class="mx-auto"
      outlined
    >
      <v-row class="ma-auto">
        <v-col class="pa-0">
          <v-card-title class="pa-2">Total:</v-card-title>
        </v-col>
        <v-col class="pa-0">
          <v-card-text class="subtitle-1 text-right pa-2">{{ $helpers.formatarValor.format(getValorTotal) }}</v-card-text>
        </v-col>
      </v-row>
      <v-row class="ma-auto">
        <v-col class="pa-0">
          <v-card-title class="pa-2">Tempo:</v-card-title>
        </v-col>
        <v-col class="pa-0">
          <v-card-text class="subtitle-1 text-right pa-2">{{ getTempoTotal }}</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const moduloSacola = namespace('sacola')

@Component({
  name: 'TotaisResumoPeido'
})
export default class TotaisResumoPedido extends Vue {
  @moduloSacola.Getter
  public getValorTotal!: number

  @moduloSacola.Getter
  public getTempoTotal!: string
}
</script>
