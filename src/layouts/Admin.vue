<template>
  <v-app id="inspire">
    <v-app-bar app flat class="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.$router.history.current.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn router to="/" plain icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn @click="logout" plain small>Выйти</v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      src="../assets/sidebar-5.jpg"
      color="blue-grey darken-2"
    >
      <v-list-item>
        <v-list-item-avatar tile>
          <v-img max-width="50" src="../assets/avatar.png" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> TS KSE </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider> </v-divider>

      <v-list-group
        no-action
        nav
        :value="false"
        prepend-icon="mdi-account"
        active-class="white--text"
      >
        <template v-slot:activator>
          <v-list-item-title>{{ user.username }}</v-list-item-title>
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
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list-group>

      <v-divider> </v-divider>

      <v-list nav dense>
        <v-list-item
          v-for="menu in userMenus"
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
      <v-container>
        <v-slide-x-transition
          mode="out-in">
          <router-view />
        </v-slide-x-transition>
      </v-container>
    <message/>
  </v-app>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Message from '../components/admin/Message.vue'
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
  
  components:{
    Message
  },
  computed: {
    ...mapState('user',['user','userMenus']),
  },
  methods: {
    ...mapActions('user',['LOGOUT']),
    logout() {
      this.LOGOUT();
    },
  },
};
</script>
