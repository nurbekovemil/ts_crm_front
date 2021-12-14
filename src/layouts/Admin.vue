<template>
	<v-app id="inspire">
		<v-app-bar app flat class="white">
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>{{ this.$router.history.current.name }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn style="margin:30px;" router to="/" plain icon>
				<v-icon>mdi-home</v-icon>
			</v-btn>
			<div>
				<v-menu 
          offset-y
          transition="slide-x-transition"
          bottom
          left
          >
					<template v-slot:activator="{ on, attrs }">
            
            <v-avatar
              size="36"
              v-bind="attrs"
              v-on="on"
            >
            <img
              src="../assets/john.jpg"
              alt="avatar"
            />
            </v-avatar>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>{{ user.username }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >
                <v-btn @click="LOGOUT">
                 Выйти
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
				</v-menu>
			</div>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" app dark color="grey darken-4">
			<v-list-item>
				<v-list-item-avatar tile>
					<v-img max-width="50" src="../assets/avatar.png" />
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title class="text-h6"> TS KSE </v-list-item-title>
				</v-list-item-content>
			</v-list-item>

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
			<v-slide-x-transition mode="out-in">
				<router-view />
			</v-slide-x-transition>
		</v-container>
		<message />
	</v-app>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Message from "../components/admin/Message.vue";
export default {
	data: () => ({
		drawer: null,
	}),

	components: {
		Message,
	},
	computed: {
		...mapState("user", ["user", "userMenus"]),
	},
	methods: {
		...mapActions("user", ["LOGOUT"]),
	}
};
</script>
