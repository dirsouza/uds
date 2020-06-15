<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="scale-transition"
    origin="right top"
    scrollable
  >
    <v-card tile>
      <v-toolbar
        short
        dark
        color="purple darken-2"
        max-height="56"
      >
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
              @click="onClose"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <span>Sair</span>
        </v-tooltip>
        <v-toolbar-title>
          <v-icon class="pb-1">mdi-shopping</v-icon>
          Sacola de pedidos
        </v-toolbar-title>
        <v-spacer />
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
              :disabled="!getSacola.length"
              @click="confirmarPedido"
            >
              <v-icon>mdi-check-all</v-icon>
            </v-btn>
          </template>
          <span>Confirmar pedido</span>
        </v-tooltip>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <div v-if="getSacola.length">
            <v-card-title class="px-0 pb-0">Resumo do pedido</v-card-title>
            <v-row>
              <v-col sm="12" md="9">
                <ListaResumoPedido
                  v-for="(pedido, index) of getSacola"
                  :key="index"
                  :pedido="{index, ...pedido}"
                />
              </v-col>

              <v-col sm="12" md="3">
                <TotaisResumoPedido />
              </v-col>
            </v-row>
          </div>
          <v-row v-else>
            <v-col class="text-center">
              <v-card-text class="headline">
                <v-icon x-large>mdi-emoticon-cry-outline</v-icon>
                <div>Sacola vazia!</div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <div style="flex: 1 1 auto;"></div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ListaResumoPedido from '@/components/ListaResumoPedido.vue'
import TotaisResumoPedido from '@/components/TotaisResumoPedido.vue'
import { INotificacao, ISacola } from "@/interfaces";

const moduloSacola = namespace('sacola')
const moduloNotificacao = namespace('notificacao')

@Component({
  name: 'ResumoSacola',
  components: {
    ListaResumoPedido,
    TotaisResumoPedido
  }
})
export default class ResumoSacola extends Vue {
  @Prop({
    type: Boolean,
    required: true,
    default: false
  }) public dialog!: boolean

  @moduloSacola.Getter
  public getSacola!: ISacola[]

  @moduloSacola.Mutation
  public clearSacola!: Function

  @moduloNotificacao.Action
  public insertNotificacao!: Function

  @Emit('closeDialog')
  onClose () {
    return false
  }

  public confirmarPedido () {
    new Promise<boolean>((resolve, reject) => {
      try {
        this.clearSacola()
        this.onClose()
        resolve()
      } catch (e) {
        reject(e)
      }
    }).then(() => {
      this.insertNotificacao({
        start: true,
        color: 'success',
        timeout: 3000,
        message: 'Pedido realizado com sucesso'
      } as INotificacao)
    }).catch((e) => {
      this.insertNotificacao({
        start: true,
        color: 'success',
        timeout: 3000,
        message: e.message
      } as INotificacao)
    })
  }
}
</script>
