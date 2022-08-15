<template>
  <v-app>
      
    <v-app-bar flat app color="white">
     
      <v-container class="py-0 fill-height">
        <router-link class="text-decoration-none text--primary" to="/">
          <v-toolbar-title class="overflow-visible" router to="/">
            <v-avatar class="mr-1" size="32" tile>
              <img alt="logo" src="../assets/logo.png" />
            </v-avatar>
            Товарно-сырьевой сектор</v-toolbar-title
          >
        </router-link>
        <v-spacer></v-spacer>
        <!-- computers -->
        <div class="d-none d-md-flex justify-around">
          <v-btn elevation="0" plain small router to="/"> Главная </v-btn>
          <!-- <v-btn plain small router to="/about"> О Бирже </v-btn> -->
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn plain small v-bind="attrs" v-on="on">
                О бирже <v-icon right> mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item router to="/about">
                <v-list-item-title>Общая информация</v-list-item-title>
              </v-list-item>
              <v-list-item router to="/documents">
                <v-list-item-title> Документы</v-list-item-title>
              </v-list-item>
              <v-list-item router to="/tariffs">
                <v-list-item-title>Тарифы</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn plain small router to="/catalog"> Каталог товаров </v-btn>
          <v-btn plain small router to="/categories"> Категории </v-btn>
          <v-btn plain small router to="/handbooks"> Справочник</v-btn>
          <v-btn plain small router to="/trades"> Итоги торгов </v-btn>
          <!-- <v-btn plain small router to="/documents"> Документы </v-btn> -->
          <v-btn plain small router to="/login">
            <template v-if="!isAuth" icon> Войти</template>

            <template v-else>
              {{ user.username }}
            </template>
          </v-btn>
        </div>
      </v-container>
      <v-app-bar-nav-icon
        left
        @click="drawer = true"
        class="d-flex d-md-none"
      />
      
    </v-app-bar>
        <div class="py-1" style="background:rgb(120,195,204);max-height:50px;min-width:100%">
              <v-container class="py-0 d-flex justify-end">
              <kse-date class="white--text "/>
              </v-container> 
         </div>
     
    <v-container class="pa-0 main-content" fluid>
      <router-view />
    </v-container>

    <v-navigation-drawer v-model="drawer" fixed temporary left>
      <!-- for mobiles -->
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title>
              <v-btn elevation="0" plain small router to="/"> Главная </v-btn>
            </v-list-item-title>
          </v-list-item>
          <!-- <v-list-item>
            <v-list-item-title>
              <v-btn plain small router to="/about"> О Бирже </v-btn>
            </v-list-item-title>
          </v-list-item> -->
          <v-list-group no-action>
            <template v-slot:activator>
              <v-list-item-title>
                <v-btn plain small>О бирже </v-btn>
              </v-list-item-title>
            </template>
            <v-list-item router to="/about" dense>
              <v-list-item-title color="grey">
                Общая информация
              </v-list-item-title>
              <!-- <v-btn plain small router to="/about"> Общая информация </v-btn> -->
            </v-list-item>
            <v-list-item plain router to="/documents" dense>
              <v-list-item-title> Документы </v-list-item-title>

              <!-- <v-btn plain small router to="/documents"> Документы</v-btn> -->
            </v-list-item>
            <v-list-item router to="/tariffs" dense>
              <v-list-item-title> Тарифы </v-list-item-title>

              <!-- <v-btn plain small router to="/tariffs"> Тарифы </v-btn> -->
            </v-list-item>
          </v-list-group>
          <v-list-item>
            <v-list-item-title>
              <v-btn elevation="0" plain small router to="/categories">
                Категории
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn plain small router to="/handbooks"> Справочник </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn plain small router to="/trades"> Итоги торгов </v-btn>
            </v-list-item-title>
          </v-list-item>
          <!-- <v-list-item>
            <v-list-item-title>
              <v-btn plain small router to="/documents"> Документы </v-btn>
            </v-list-item-title>
          </v-list-item> -->
          <v-list-item>
            <v-list-item-title>
              <v-btn plain small router to="/catalog"> Каталог товаров </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn plain small router to="/login">
                <template v-if="!isAuth" icon> Войти </template>

                <template v-else>
                  {{ user.username }}
                </template>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-footer padless class="mt-3 wrap-footer">
      <v-row>
        <v-col class="pb-0">
          <v-card elevation="0" flat tile color="#78C3CC" class="white-text text-center">
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <v-card-title class="white--text">
                    Партнерские сайты
                  </v-card-title>
                  <v-card-text
                    class="footer-about  align-start white--text ">
              
                    <p>
                          <a href="https://www.kse.kg/" class="white--text subtitle-1">Кыргызская фондовая биржа</a>
                    </p>
                     <p >
                         <a href="http://test.cds.kg/ru" class="white--text subtitle-1">Центр раскрытия информация</a>
                     </p>
        
                  </v-card-text>
                </v-col>

                   <v-col cols="12" md="4">
                  <v-card-title class="pl-md-0 white--text"
                    >Адрес
                  </v-card-title>
                  <v-card-text
                    class="footer-about  align-start pl-md-0 white--text" color="red">
                   <p>Республика Кыргызстан</p>
                   <p>г. Бишкек, ул. Московская, 172</p>
                  </v-card-text>
                </v-col>

                    <v-col cols="12" md="4">
                  <v-card-title class="pl-md-0 white--text"
                    >Контакт центр
                  </v-card-title>
                  <v-card-text
                    class="footer-about  align-start white--text pl-md-0">
                    <p>+996 312 31 14 84 +996 551 31 14 84</p>
                    <p>office@kse.kg</p>
                  </v-card-text>
                </v-col>
              </v-row>

              <v-divider color="white"></v-divider>

              <v-card-text class="white--text">
                {{ new Date().getFullYear() }} —
                <strong>Kyrgyz Stock Exchange</strong>
              </v-card-text>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
import { mapState } from "vuex";
import KseDate from "../components/admin/Deals/KseDate.vue";
export default {
  data: () => ({
    drawer: false,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  computed: {
    ...mapState("user", ["user", "isAuth"]),
  },
  components: {
    KseDate
  }
};
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 303px);
}
.footer-color {
  background: #ddeffd;
}
.footer-about {
  text-align: start;
}
.contact-content {
  text-align: start;
}
.wrap-footer  a{
  text-decoration: none;
}
</style>

















