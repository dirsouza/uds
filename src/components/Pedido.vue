<template>
  <v-dialog v-model='dialog' scrollable persistent max-width="600px">
    <v-card>
      <v-card-title class="d-inline-block text-truncate">Selecione suas preferências</v-card-title>
      <v-divider />
      <v-card-text>

        <ListaSabor />

        <v-divider />

        <ListaAdicional />

      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-col class="py-0">
          <v-btn small outlined dark color="amber darken-3">
            Cancelar <v-icon right>mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-col>
        <v-col class="py-0 text-right">
          <v-btn small outlined dark color="deep-purple darken-3">
            Salvar <v-icon right>mdi-check-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ListaSabor from '@/components/ListaSabor.vue'
import ListaAdicional from '@/components/ListaAdicional.vue'

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
  }) readonly dialog?: boolean
}
</script>
