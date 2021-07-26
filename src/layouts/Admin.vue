<template>
      <v-app id="inspire">
         <v-app-bar flat class="white">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>TS KSE • {{this.$router.history.current.name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn router to="/" plain icon>
            <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-btn @click="logout" plain small> Выйти</v-btn>
         </v-app-bar>
         <v-navigation-drawer v-model="drawer" app dark color="blue-grey darken-2">
            <v-list-item>
            <v-list-item-avatar>
               <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
               <!-- <img v-bind:src="'./public/kse-icon-mini.png'" /> -->
            </v-list-item-avatar>

            <v-list-item-content>
               <v-list-item-title>{{GET_USER.username}}</v-list-item-title>
               <!-- <v-list-item-subtitle>{{GET_USER.role}}</v-list-item-subtitle> -->
            </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list nav dense>
            <v-list-item v-for="menu in GET_USER_MENU" :key="menu.id" router :to="menu.route" exact>
               <v-list-item-icon>
                  <v-icon>{{ menu.icon }}</v-icon>
               </v-list-item-icon>

               <v-list-item-content>
                  <v-list-item-title>{{ menu.name }}</v-list-item-title>
               </v-list-item-content>
            </v-list-item>
            </v-list>
         </v-navigation-drawer>

         <v-main class="pt-0 pl-0">
            <v-container>
               <v-row>
                  <v-col>
                     <v-card>
                        <router-view/>
                     </v-card>
                  </v-col>
               </v-row>
            </v-container>
         </v-main>
      </v-app>
      </template>

      <script>
      import {mapActions, mapGetters} from 'vuex'

   export default {
   data: () => ({
      cards: ['Заявку на продажу', 'Заявки на покупку'],
      drawer: null,
   }),
   computed:{
      ...mapGetters(['GET_USER', 'GET_USER_MENU']),
   },
   methods: {
      ...mapActions(['LOGOUT', 'GET_ME']),
      logout(){
         this.LOGOUT()
      }
   },
}
</script>
