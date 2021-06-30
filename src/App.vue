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
    this.userAuth()
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['GET_ME']),
    userAuth(){
      this.GET_ME()
    }
  }
};
</script>
