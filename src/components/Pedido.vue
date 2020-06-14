<template>
  <v-dialog v-model='dialog' scrollable persistent max-width="600px">
    <v-card>
      <v-card-title
        class="d-inline-block text-truncate white--text purple darken-2"
      >
        Selecione suas preferências
      </v-card-title>
      <v-divider />
      <v-card-text>

        <ListaSabor v-if="dialog" />

        <v-divider />

        <ListaAdicional v-if="dialog" />

      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-col class="py-0">
          <v-btn small outlined dark color="amber darken-3" @click="onClose">
            cancelar <v-icon right>mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-col>
        <v-col class="py-0 text-right">
          <v-btn small outlined dark color="deep-purple darken-3" @click="onPedir">
            adicionar <v-icon right>mdi-check-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ListaSabor from '@/components/ListaSabor.vue'
import ListaAdicional from '@/components/ListaAdicional.vue'
import { INotificacao, ISabor } from '@/interfaces'

const moduloSacola = namespace('sacola')
const moduloNotificacao = namespace('notificacao')

@Component({
  name: 'Pedido',
  components: {
    ListaSabor,
    ListaAdicional
  }
})
export default class Pedido extends Vue {
  @Prop({
    type: Boolean,
    required: true,
    default: false
  }) public dialog!: boolean

  @moduloSacola.Getter
  public getSabor!: ISabor

  @moduloSacola.Action
  public insertPedido!: Function

  @moduloNotificacao.Action
  public insertNotificacao!: Function

  @Emit('closeDialog')
  onClose () {
    return false
  }

  public onPedir () {
    if (Object.keys(this.getSabor).length) {
      this.insertPedido()
    } else {
      this.insertNotificacao({
        start: true,
        color: 'warning',
        timeout: 5000,
        message: 'O Sabor não foi selecionado'
      } as INotificacao)
    }
  }
}
</script>
