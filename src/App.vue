<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'App',
  mounted() {
    this.GET_ME()
  },
  methods: {
    ...mapActions('user',['GET_ME'])
  }
};
</script>
