<template>
  <v-app>
    <v-app-bar
      app
      short
      color="purple darken-2"
      dark
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <Sacola />
    </v-app-bar>

    <v-content>
      <Catalogo />
      <Notificacao />
      <Load />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Catalogo from '@/views/Catalogo.vue'
import Sacola from '@/components/Sacola.vue'
import Notificacao from '@/components/Notificacao.vue'
import Load from '@/components/Load.vue'

const moduloLoad = namespace('load')

@Component({
  name: 'App',
  components: {
    Catalogo,
    Sacola,
    Notificacao,
    Load
  }
})
export default class App extends Vue {
  private title: string

  @moduloLoad.Action
  public insertLoad!: Function

  constructor () {
    super();
    this.title = process.env.VUE_APP_TITLE
    this.insertLoad(false)
  }
}
</script>
