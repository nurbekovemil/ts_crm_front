<template>
  <v-app>
    <v-app-bar
    flat
    color="primary"
    dark
  >
  <v-toolbar-title>TS KSE</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn class="md-succes" router to="Login">
    <template v-if="!GET_IS_AUTH" icon>
      Войти
      <v-icon >mdi-account</v-icon>
    </template>
    <template v-else>
      {{GET_USER}}
      <v-icon>mdi-account</v-icon>
    </template>   
  </v-btn>
  </v-app-bar>
    <v-main class="grey lighten-2">
          <v-container>
            <v-row> 
            <template v-for="n in 3">
            <v-col
              :key="n"
              class="mt-2"
              cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
              v-for="j in 4"
              :key="`${n}${j}`"
              cols="6"
              md="2"
            >
              <v-sheet height="150" ></v-sheet>
            </v-col>
          </template>
           </v-row>
          </v-container>
    </v-main>
    <footer class="footer">
    <div class="container">
      <!-- <nav>
        <ul>
          <li>
            <router-link to="/home"> Товарно-сырьевой сектор </router-link>
          </li>
        </ul>
      </nav> -->
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
import Login from './Login.vue'
export default {
  computed:{
    ...mapGetters(['GET_IS_AUTH', 'GET_USER'])
  },
  components:{
    Login
  },
}
</script>
