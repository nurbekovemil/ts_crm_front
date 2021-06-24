<template>
  <v-app>
    <v-app-bar
    flat
    color="primary"
    dark
  >
  <v-toolbar-title>Page title</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn icon>
    <v-icon>mdi-heart</v-icon>
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
              v-for="j in 6"
              :key="`${n}${j}`"
              cols="6"
              md="2"
            >
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
           </v-row>
          </v-container>
    </v-main>
  </v-app>
</template>
<script>

export default {

}
</script>
