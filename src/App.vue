<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  name: 'App',
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  private title: string = process.env.VUE_APP_TITLE
}
</script>
