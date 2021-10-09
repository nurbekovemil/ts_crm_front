<template>
  <v-app>
    <v-app-bar app flat dark elevation="0" color="primary lighten-1">
      <v-toolbar-title>TS KSE</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn elevation="0" plain small router to="/"> Главная </v-btn>
      <v-btn plain small router to="/handbooks"> Справочник </v-btn>
      <v-btn elevation="0" plain small router to="/login">
        <template v-if="!isAuth" icon> Войти </template>
        <template v-else>
          {{ user.username }}
        </template>
      </v-btn>
    </v-app-bar>
    <!-- :style="
        this.$router.history.current.path == '/login' && {
          'background-image':
            'url(' + require('../assets/bruno-abatti.jpg') + ')',
          'background-size': '100%',
        }
      " -->
      <v-container>
        <router-view />
      </v-container>
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
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState('user',['user','isAuth'])
  },
};
</script>



















// src="https://picsum.photos/1920/1080"