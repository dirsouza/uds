<template>
  <v-app>
    <v-app-bar
      app
      short
      color="purple darken-4"
      dark
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Catalogo />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Catalogo from '@/views/Catalogo.vue'

@Component({
  name: 'App',
  components: {
    Catalogo
  }
})
export default class App extends Vue {
  private title: string = process.env.VUE_APP_TITLE
}
</script>
