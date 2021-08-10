<template lang="">
   <v-simple-table>
    <template>
      <thead>
        <tr>
           <th width="5%">
           </th>
            <th class="text-left">
               Пользователь
            </th>
            <th class="text-left">
               Роль
            </th>
            <th class="text-right">
               <v-btn
               icon
                @click="addUser"
               >
                <v-icon>mdi-account-plus</v-icon>
               </v-btn>
            </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in GET_USER_LIST"
          :key="user.id"
        >
         <td>
            <v-avatar
               color="grey darken-1"
               size="36"
            ></v-avatar>
         </td>
          <td>{{ user.username }}</td>
          <td>{{ user.role }}</td>
          <td class="text-right">

          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon 
                >mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                link
                dense
                @click="test(item.id)"
              >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          </td>
        </tr>
      </tbody>
    </template>
      <AddUser :dialog="dialog" @closeAddUserDialog="addUser"/>
  </v-simple-table>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AddUser from '@/components/admin/Users/AddUser.vue'
export default {
  data: () => ({
    dialog: false,
    selectedItem: 1,
    items: [
      { id: 1, title: "edit", icon: "mdi-pencil" },
      { id: 2, title: "remove", icon: "mdi-close" },
    ],
  }),
  components: {
    AddUser
  },
  computed: {
    ...mapGetters(["GET_USER_LIST"]),
  },
  mounted() {
    this.get_User_Lists();
  },
  methods: {
    ...mapActions(["USERLIST"]),
    get_User_Lists() {
      this.USERLIST();
    },
    addUser() {
      this.dialog = !this.dialog
    },
  },
};
</script>
<style lang="">
</style>