<template>
  <v-app>
    <v-app-bar flat app  color="white">
              <v-app-bar-nav-icon right @click="drawer = true" 
                            class="d-flex d-sm-none" 
                           >
       </v-app-bar-nav-icon>
       <v-toolbar-title class="overflow-visible">TS KSE</v-toolbar-title>
      <v-container class="pa-0 fill-height">

        <v-spacer></v-spacer>

        <v-btn v-if="this.$route.fullPath != '/login'" plain router to="/login" icon class="d-flex d-sm-none">
        <template v-if="!isAuth">
              <v-icon>mdi-account</v-icon>
        </template>
  
        <template v-else>
          {{ user.username }}  
        </template>
      </v-btn>   

     
      <div class="d-none d-sm-flex">
      <v-btn elevation="0" plain small router to="/"> Главная </v-btn>
      <v-btn plain small router to="/handbooks"> Справочник </v-btn>
      <v-btn plain small router to="/login">
        <template v-if="!isAuth" icon >
             Войти
        </template>
     
        <template v-else>
          {{ user.username }}  
        </template>
      </v-btn>
      </div>
      </v-container>
      <v-spacer></v-spacer>
      <!-- <v-btn elevation="0" plain small router to="/login">
       <template v-if="isAuth">
          {{ user.username }}
       </template>
        </v-btn> -->
    </v-app-bar>
      <v-container class="pa-0" fluid>
        <router-view />
      </v-container>

          <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      left
    >
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title>
               <v-btn elevation="0" plain small router to="/"> Главная </v-btn>
            </v-list-item-title>
          </v-list-item>
           <v-list-item>
            <v-list-item-title>
                <v-btn plain small router to="/handbooks"> Справочник </v-btn>
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- <footer class="footer">
      <div class="container">
        <div class="copyright text-center">
          &copy; {{ new Date().getFullYear() }}
          <a href="https://www.kse.kg/" target="_blank">
            Kyrgyz Stock Exchange
          </a>
        </div>
      </div>
    </footer> -->
    <v-footer
        dark
        padless
        class="mt-3"
      >
        <v-card
          flat
          tile
          class="grey darken-4 white--text text-center"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Kyrgyz Stock Exchange</strong>
          </v-card-text>
        </v-card>
      </v-footer>
  </v-app>
</template>
<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    drawer: false,
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
  computed: {
    ...mapState('user',['user','isAuth'])
  },
};
</script>



















// src="https://picsum.photos/1920/1080"