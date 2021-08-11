<template>
  <v-app id="inspire">
    <v-app-bar flat class="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        >TS KSE • {{ this.$router.history.current.name }}</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn router to="/" plain icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn @click="logout" plain small> Выйти</v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      src="../assets/sidebar-5.jpg"
      color="blue-grey darken-2"
    >
      <v-list-group  no-action nav :value="false" prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-title>{{ GET_USER.username }}</v-list-item-title>
        </template>
        <v-list nav dense>
          <v-list-item
            
            v-for="(item, i) in admins"
            router
            :to="item.route"
            :key="i"
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list-group>

      <v-divider> </v-divider>

      <v-list nav dense>
        <v-list-item
          v-for="menu in GET_USER_MENU"
          :key="menu.id"
          router
          :to="menu.route"
          exact
        >
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
              <router-view />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

      <script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    drawer: null,
    admins: [
      {
        route: "/dashboard/profile",
        icon: "mdi-account-edit",
        title: "Мой профиль",
      },
      {
        route: "/dashboard/settings",
        icon: "mdi-cog-outline",
        title: "Настройки",
      },
    ],
  }),
  computed: {
    ...mapGetters(["GET_USER", "GET_USER_MENU"]),
  },
  methods: {
    ...mapActions(["LOGOUT", "GET_ME"]),
    logout() {
      this.LOGOUT();
    },
  },
};
</script>
