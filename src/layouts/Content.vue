<template>
  <v-app>
    <v-app-bar flat app  color="white">
        <v-app-bar-nav-icon right @click="drawer = true" 
                            class="d-flex d-md-none">
       </v-app-bar-nav-icon>

      <v-container class="py-0 fill-height">
        <v-toolbar-title class="overflow-visible">Товарно-сырьевой сектор</v-toolbar-title>   
        <v-spacer></v-spacer>

        <v-btn v-if="this.$route.fullPath != '/login'" plain router to="/login" icon class="d-flex d-md-none">
        <template v-if="!isAuth">
              <v-icon>mdi-account</v-icon>
        </template>
  
        <template v-else>
          {{ user.username }}  
        </template>
      </v-btn>   

     
      <div class="d-none d-md-flex justify-around">
    
      <v-btn elevation="0" plain small router to="/"> Главная </v-btn>
      <v-btn plain small router to="/handbooks"> Справочник </v-btn>
      <v-btn plain small router to="/about"> О Бирже </v-btn>
      <v-btn plain small router to="/documents"> Документы </v-btn>
      
      <v-btn plain small router to="/contacts"> Контакты </v-btn>
      
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
            <v-list-item>
            <v-list-item-title>
                <v-btn plain small router to="/about"> О Бирже </v-btn>
            </v-list-item-title>
          </v-list-item>
            <v-list-item>
            <v-list-item-title>
                <v-btn plain small router to="/documents"> Документы </v-btn>
            </v-list-item-title>
          </v-list-item>
            <v-list-item>
            <v-list-item-title>
                <v-btn plain small router to="/contacts"> Контакты </v-btn>
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
      
        padless
        class="mt-3"
      >
      <v-row>
        <v-col class="pb-0">
        
        <v-card
          flat
          tile
          class="footer-color black--text text-center"
        >
          <v-container>
              
              <v-card-text class="black--text pt-0">
                   <v-btn plain router to="/"> Главная </v-btn>
                   <v-btn plain router to="/about"> Как начать торговать </v-btn>
                   <v-btn plain router to="/documents"> Документы </v-btn> 
                   <v-btn plain router to="/handbooks"> Справочник </v-btn>
                   <v-btn plain router to="/dashboard">Личный кабинет</v-btn>
              </v-card-text>

          <v-row>
            
            
            <v-col cols="12" md="4">
               <v-card-title class="pl-md-0">Кыргызская Фондовая Биржа

               </v-card-title>
             <v-card-text class="footer-about d-flex align-start black--text pl-md-0">
          
              Кыргызская Фондовая Биржа была основана в 1994 году, в форме негосударственной,
              некоммерческой организации, имеющей цель обеспечить эффективные условия функционирования
              рынка ценных бумаг. 
           
             </v-card-text>
            </v-col>

            <v-col md="4">
              
            </v-col>
         
            <v-col cols=12 md="4">

              <v-card-title class="float-center">Наши Контакты</v-card-title>
              <v-card-text class="contact-content">
                ЗАО "Кыргызская Фондовая Биржа"
                <br>
                720010 Кыргызская Республика,<br>
                г. Бишкек, ул. Московская, 172, +996 312 31 14 84<br>
                Электронная почта: office@kse.kg
              </v-card-text>

               <v-card-text class="d-flex align-start pl-0 black--text pt-0">
                  <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 black--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
             </v-card-text>     
          
            </v-col>
           
          </v-row>

          

          <v-divider></v-divider>
        
          <v-card-text class="black--text">
            {{ new Date().getFullYear() }} — <strong>Kyrgyz Stock Exchange</strong>
          </v-card-text>
          
             
         
           </v-container>
        </v-card>
         
        </v-col>
    </v-row>
      </v-footer>



    <!-- <v-footer>
      <v-row>
        <v-col>
            <v-container>
              <v-row>
                <v-col>
                <v-img src="../../public/img/kse-icon-mini.png"
                      height="100px"
                      width="100px"
                ></v-img>
                </v-col>
                <v-col>About</v-col>
                <v-col>Contact</v-col>
              </v-row>
            </v-container>
        </v-col>
      </v-row>
    </v-footer> -->


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

<style scoped>
 .footer-color {
    background: #DDEFFD;
 }
 .footer-about {
   text-align: start;
 }
 .contact-content {
   text-align: start;
 }
</style>

















