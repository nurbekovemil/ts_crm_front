<template>
  <v-app>
    <v-app-bar
    flat
    color="indigo darken-2"
    dark
  >
  <v-toolbar-title>TS KSE</v-toolbar-title>
   <v-spacer></v-spacer>
      <v-btn   elevation="0" plain small  router to="/">
      Главная 
   </v-btn>
    <v-btn   elevation="0" plain small  router to="/login">
      <template v-if="!GET_IS_AUTH" icon>
        Войти
      </template>
      <template v-else>
        {{GET_USER.username}}
      </template>   
    </v-btn>
  </v-app-bar>

    <v-main class="grey lighten-5">
      <v-container style="min-height: 700px;">
         <router-view/>
      </v-container>
    </v-main>

    <footer class="footer">
      <div class="container">
        <div class="copyright text-center">
          &copy; {{ new Date().getFullYear() }}
          <a href="https://www.kse.kg/" target="_blank">
            Kyrgyz Stock Exchange
          </a>
        </div>
      </div>
    </footer>
  </v-app>
  
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters(['GET_IS_AUTH', 'GET_USER'])
  },
  components:{
    
  },
}
</script>
