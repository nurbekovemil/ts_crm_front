   <template>
   <v-app id="inspire">
      <v-app-bar flat class="white">
         <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
         <v-toolbar-title>TS KSE</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-btn @click="Home" router to="/" plain icon>
         <v-icon>mdi-home</v-icon>
         </v-btn>
         <v-btn plain small router to="/login"> Выйти</v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app dark color="blue-grey darken-2">
         <v-list-item>
         <v-list-item-avatar>
            <!-- <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img> -->
            <img v-bind:src="'./public/kse-icon-mini.png'" />
         </v-list-item-avatar>

         <v-list-item-content>
            <v-list-item-title>{{GET_USER.username}}</v-list-item-title>
            <v-list-item-subtitle  v-if="isAdmin">admin</v-list-item-subtitle>
         </v-list-item-content>
         </v-list-item>
         <v-divider></v-divider>

         <v-list nav dense>
         <v-list-item v-for="[icon, text] in links" :key="icon" link>
            <v-list-item-icon>
               <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
               <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
         </v-list-item>
         </v-list>
      </v-navigation-drawer>

      <v-main class="pt-0 pl-0">
         <v-container>
         <v-row>
            <v-col v-for="card in cards" :key="card" cols="12">
               <v-card>
               <v-subheader>{{ card }}</v-subheader>

               <v-list two-line>
                  <template v-for="n in 6">
                     <v-list-item :key="n">
                     <v-list-item-avatar color="grey darken-1">
                     </v-list-item-avatar>

                     <v-list-item-content>
                        <v-list-item-title>Message {{ n }}</v-list-item-title>

                        <v-list-item-subtitle>
                           Lorem ipsum dolor sit amet, consectetur adipisicing
                           elit. Nihil repellendus distinctio similique
                        </v-list-item-subtitle>
                     </v-list-item-content>
                     </v-list-item>

                     <v-divider
                     v-if="n !== 6"
                     :key="`divider-${n}`"
                     inset
                     ></v-divider>
                  </template>
               </v-list>
               </v-card>
            </v-col>
         </v-row>
         </v-container>
      </v-main>
   </v-app>
   </template>

   <script>
import {mapGetters} from 'vuex'

export default {
  computed : {
      ...mapGetters(['GET_USER']),
    },
      data: () => ({
         isUser: false,
         isAdmin: false,
         cards: ['Заявку на продажу', 'Заявки на покупку'],
         drawer: null,
         links: [
            ['mdi-view-dashboard', 'Панель управления'],
            ['mdi-account', 'Профиль'],
            ['mdi-account-multiple', 'Пользователи'],
            ['mdi-format-list-text', 'Отчеты'],
            ['mdi-handshake', 'Зделки'],
         ],
      }),
   }
   </script>
