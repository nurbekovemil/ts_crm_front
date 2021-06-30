<template>
  <v-app>
    <v-app-bar
    flat
    color="primary"
    dark
  >
  <v-toolbar-title>TS KSE</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn router to="/login" icon>
    <v-icon>mdi-login</v-icon>
  </v-btn>
    <v-btn router to="/" icon>
      <v-icon>mdi-format-align-left</v-icon>
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
import Login from './Login.vue'
export default {
  components:{
    Login
  }
}
</script>
