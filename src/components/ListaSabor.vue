<template>
  <div>
    <v-subheader class="px-0">Sabores (obrigatório)</v-subheader>
    <v-list subheader shaped>
      <v-list-item-group>
        <template v-for="(sabor, index) of sabores">
          <v-list-item
            :key="`sabor-${index}`"
            :value="sabor.nome"
            active-class="deep-purple--text text--darken-4"
            @click="selectSabor(sabor)"
          >
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  :true-value="sabor.nome"
                  color="deep-purple darken-4"
                  @click="toggle"
                />
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="text-capitalize" v-text="sabor.nome"/>
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
import { namespace } from 'vuex-class'
import { ISabor } from '@/interfaces'

const moduloSabor = namespace('sacola')

@Component({
  name: 'ListaSabor'
})
export default class ListaSabor extends Vue {
  private sabores: ISabor[] = [
    {
      nome: 'morango',
      tempo_preparo: 0
    },
    {
      nome: 'banana',
      tempo_preparo: 0
    },
    {
      nome: 'kiwi',
      tempo_preparo: 5
    }
  ]

  @moduloSabor.Action
  public insertSabor!: Function

  public selectSabor (sabor: ISabor): void {
    this.insertSabor(sabor)
  }
}
</script>
