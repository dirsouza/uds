<template>
  <div>
    <v-subheader class="px-0">Adicionais:</v-subheader>
    <v-list subheader shaped>
      <v-list-item-group multiple>
        <template v-for="(adicional, aIndex) of adicionais">
          <v-list-item
            :key="`item-${aIndex}`"
            :value="adicional.nome"
            active-class="deep-purple--text text--darken-4"
          >
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  :true-value="adicional.nome"
                  color="deep-purple darken-4"
                  @click="toggle"
                />
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="adicional.nome"/>
              </v-list-item-content>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IAdicional } from '@/interfaces'

@Component({
  name: 'ListaAdicional'
})
export default class ListaAdicional extends Vue {
  private adicionais: IAdicional[] = [
    {
      nome: 'granola',
      tempo_preparo: 0,
      valor: 0
    },
    {
      nome: 'paçoca',
      tempo_preparo: 3,
      valor: 3
    },
    {
      nome: 'leite ninho',
      tempo_preparo: 0,
      valor: 3
    }
  ]
}
</script>
