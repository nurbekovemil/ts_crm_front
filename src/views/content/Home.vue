<template>
  <v-app>
    <v-app-bar
    flat
    color="primary"
    dark
  >
  <v-toolbar-title>TS KSE</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn @click="Login" router to="/login" icon>
    <v-icon>mdi-login</v-icon>
  </v-btn>
    <v-btn @click="Home" router to="" icon>
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
