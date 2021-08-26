<template>
  <v-app>
    <v-app-bar
    flat
    color="primary lighten-1"
    dark
  >
  <v-toolbar-title>TS KSE</v-toolbar-title>
   <v-spacer></v-spacer>
      <v-btn   elevation="0" plain small  router to="/">
        Главная 
      </v-btn>
      <v-btn plain small  router to="/handbooks">
        Справочник
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

    <v-main :style="this.$router.history.current.path == '/login' && {'background-image': 'url(' + require('../assets/bg13.jpg') + ')'}">
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



















// src="https://picsum.photos/1920/1080"