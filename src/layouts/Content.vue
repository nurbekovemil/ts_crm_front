<template>
  <v-app>
    <v-app-bar flat dark color="cyan">
      <v-container class="pa-0 fill-height">
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
      </v-container>
    </v-app-bar>
      <v-container class="pa-0" fluid>
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