<template>
  <div>
    <v-tooltip
      bottom
      color="purple darken-1"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          dark
          v-bind="attrs"
          v-on="on"
          @click="openDialog = true"
        >
          <v-badge
            :content="totalPedidos"
            :value="totalPedidos"
            left
            overlap
          >
            <v-icon large>mdi-shopping</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <span>Sacola</span>
    </v-tooltip>

    <ResumoSacola
      :dialog="openDialog"
      @closeDialog="openDialog = $event"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ResumoSacola from '@/components/ResumoSacola.vue'
import { ISacola } from '@/interfaces'

const moduloSacola = namespace('sacola')

@Component({
  name: 'Sacola',
  components: {
    ResumoSacola
  }
})
export default class Sacola extends Vue {
  @moduloSacola.Getter
  public getSacola!: ISacola[]

  private dialogPedido = false

  get openDialog () {
    return this.dialogPedido
  }

  set openDialog (value: boolean) {
    this.dialogPedido = value
  }

  get totalPedidos () {
    return this.getSacola.length
  }
}
</script>
